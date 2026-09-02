import { artistCopy } from "./_content";
import type { BookingState } from "./_booking-state";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string, max: number) {
  const value = formData.get(key);
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function formSubmitSucceeded(data: { success?: boolean | string }) {
  return data.success === true || data.success === "true";
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

  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${artistCopy.booking.email}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
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
          _captcha: "false",
        }),
      },
    );

    const data = (await response.json().catch(() => null)) as {
      success?: boolean | string;
      message?: string;
    } | null;

    const messageText = data?.message ?? "";
    const needsActivation = /activat/i.test(messageText);

    if (!response.ok || !data || !formSubmitSucceeded(data)) {
      return {
        status: "error",
        message: needsActivation
          ? artistCopy.booking.activate
          : artistCopy.booking.error,
      };
    }

    if (needsActivation) {
      return {
        status: "error",
        message: artistCopy.booking.activate,
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
