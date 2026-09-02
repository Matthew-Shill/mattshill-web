"use server";

import { artistCopy } from "./_content";
import type { NewsletterState } from "./_newsletter-state";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const API_BASE = "https://api.emailoctopus.com";

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

type OctopusError = {
  type?: string;
};

type OctopusContact = {
  id?: string;
  status?: string;
};

type OctopusLists = {
  data?: { id: string }[];
};

function isAlreadySubscribed(status: number, payload: OctopusError | null) {
  if (status === 409) return true;
  return typeof payload?.type === "string" && payload.type.includes("already-exists");
}

async function resolveListId(apiKey: string) {
  const configured = process.env.EMAILOCTOPUS_LIST_ID?.trim();
  if (configured) return configured;

  const response = await fetch(`${API_BASE}/lists?limit=1`, {
    headers: { Authorization: `Bearer ${apiKey}` },
    cache: "no-store",
  });
  if (!response.ok) return null;

  const payload = (await response.json()) as OctopusLists;
  return payload.data?.[0]?.id ?? null;
}

export async function submitNewsletter(
  _prevState: NewsletterState,
  formData: FormData,
): Promise<NewsletterState> {
  const copy = artistCopy.newsletter;

  if (field(formData, "company_website", 200)) {
    return { status: "success", message: copy.success };
  }

  const email = field(formData, "email", 200);
  if (!email || !EMAIL_PATTERN.test(email)) {
    return { status: "error", message: copy.invalid };
  }

  const apiKey = process.env.EMAILOCTOPUS_API_KEY?.trim();
  if (!apiKey) {
    return { status: "error", message: copy.error };
  }

  try {
    const listId = await resolveListId(apiKey);
    if (!listId) {
      return { status: "error", message: copy.error };
    }

    const response = await fetch(`${API_BASE}/lists/${listId}/contacts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email }),
    });

    const payload = (await response.json().catch(() => null)) as
      | (OctopusContact & OctopusError)
      | null;

    if (isAlreadySubscribed(response.status, payload)) {
      return { status: "success", message: copy.already };
    }

    if (!response.ok || !payload?.id) {
      return { status: "error", message: copy.error };
    }

    if (payload.status === "pending") {
      return { status: "success", message: copy.pending };
    }

    return { status: "success", message: copy.success };
  } catch {
    return { status: "error", message: copy.error };
  }
}
