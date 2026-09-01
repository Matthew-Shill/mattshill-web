"use server";

import { artistCopy } from "./_content";

export type BookingState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialBookingState: BookingState = {
  status: "idle",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function submitBooking(
  _prevState: BookingState,
  formData: FormData,
): Promise<BookingState> {
  const honeypot = field(formData, "company_website", 200);
  if (honeypot) {
    return {
      status: "success",
      message: artistCopy.booking.success,
    };
  }

  const name = field(formData, "name", 120);
  const email = field(formData, "email", 200);
  const phone = field(formData, "phone", 40);
  const organization = field(formData, "organization", 160);
  const eventType = field(formData, "eventType", 40);
  const date = field(formData, "date", 40);
  const location = field(formData, "location", 160);
  const message = field(formData, "message", 4000);

  if (!name || !email || !message) {
    return {
      status: "error",
      message: "Name, email, and details are required.",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return {
      status: "error",
      message: "Please enter a valid email so I can write back.",
    };
  }

  const eventLabel =
    artistCopy.booking.eventTypes.find((item) => item.value === eventType)
      ?.label ?? eventType;

  const payload = {
    name,
    email,
    phone,
    organization,
    eventType: eventLabel,
    date,
    location,
    message,
    _replyto: email,
    _subject: `Booking inquiry — ${name}`,
    _template: "table",
  };

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${artistCopy.booking.email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      return {
        status: "error",
        message: artistCopy.booking.error,
      };
    }

    return {
      status: "success",
      message: artistCopy.booking.success,
    };
  } catch {
    return {
      status: "error",
      message: artistCopy.booking.error,
    };
  }
}
