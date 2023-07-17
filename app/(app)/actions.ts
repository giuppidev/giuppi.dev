import { getURL } from "@/utils/helpers";
import { stripe } from "@/utils/stripe";
import { redirect } from "next/navigation";

const TRIAL_DAYS = 7;

export async function handleSubscribe(formData: FormData) {
  "use server";

  const subscriptionMode = formData.get("mode") as string;

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "required",
    locale: "it",
    line_items: [
      {
        price: getSubscriptionPriceID(subscriptionMode),
        // For metered billing, do not pass quantity
        quantity: 1,
      },
    ],
    subscription_data: {
      trial_settings: {
        end_behavior: {
          missing_payment_method: "cancel",
        },
      },
      trial_period_days: TRIAL_DAYS,
    },
    allow_promotion_codes: true,
    custom_fields: [
      {
        type: "text",
        label: {
          type: "custom",
          custom: "Codice fiscale",
        },
        key: "codicefiscale",
      },
    ],
    tax_id_collection: {
      enabled: true,
    },
    mode: "subscription",
    success_url: `${getURL()}/confirm?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${getURL()}/confirm?canceled=true`,
  });

  if (!session || !session.url) {
    return;
  }

  redirect(session.url);
}

export async function handleMentorship(formData: FormData) {
  "use server";

  const duration = formData.get("duration") as string;

  const session = await stripe.checkout.sessions.create({
    billing_address_collection: "required",
    locale: "it",
    line_items: [
      {
        price: getMentorshipPriceID(duration),
        // For metered billing, do not pass quantity
        quantity: 1,
      },
    ],
    metadata: {
      product: "mentorship",
      duration,
    },
    allow_promotion_codes: true,
    custom_fields: [
      {
        type: "text",
        label: {
          type: "custom",
          custom: "Codice fiscale",
        },
        key: "codicefiscale",
      },
    ],
    tax_id_collection: {
      enabled: true,
    },
    mode: "payment",
    success_url: `${getURL()}/confirm?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${getURL()}/confirm?canceled=true`,
  });

  if (!session || !session.url) {
    return;
  }

  redirect(session.url);
}

function getSubscriptionPriceID(mode: string) {
  if (mode === "yearly") {
    return process.env.STRIPE_SUBSCRIPTION_ID_YEARLY || "";
  }
  return process.env.STRIPE_SUBSCRIPTION_ID_MONTHLY || "";
}
function getMentorshipPriceID(duration: string) {
  if (duration === "30") {
    return process.env.STRIPE_MENTORSHIP_30 || "";
  }
  return process.env.STRIPE_MENTORSHIP_60 || "";
}
