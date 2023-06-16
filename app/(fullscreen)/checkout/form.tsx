"use client";

import { useEffect, useState } from "react";
import { SignupForm } from "./forms/signup-form";
import { SignIn } from "@supabase/auth-ui-react";
import { SigninForm } from "./forms/signin-form";
import { SignedForm } from "./forms/signedin";
import { Session, User } from "@supabase/supabase-js";
import { Database } from "@/types/supabase";
import { StripeElementsOptionsMode, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSupabase } from "@/app/supabase-provider";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);
export const Form = ({
  user,
  profile,
  productStripeProductId,
  productId,
  productPrice,
}: {
  user: User | null;
  profile?: Profile | null;
  productId?: number;
  productStripeProductId?: string | null;
  productPrice: number;
}) => {
  const [session, setSession] = useState<Session | null>(null);
  const { supabase } = useSupabase();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);
  const [form, setForm] = useState<"register" | "login" | "logged">(
    !!user ? "logged" : "register"
  );
  const options: StripeElementsOptionsMode = {
    // passing the client secret obtained from the server
    //clientSecret: paymentIntentSecret,
    mode: "payment",
    amount: productPrice * 100,
    currency: "eur",
    paymentMethodCreation: "manual",
    payment_method_types: ["card", "paypal"],

    locale: "it-IT",
    // Fully customizable with appearance API.
    appearance: {
      theme: "flat",
      variables: {
        colorPrimary: "#FFCC33",
        borderRadius: "2px",
        colorBackground: "white",
      },
      rules: {
        ".Tab": {
          border: "2px solid black",
        },
        ".Input": {
          border: "2px solid black",
        },
      },
    },

    // Fully customizable with appearance API.
  };

  if (form === "logged") {
    return (
      <Elements stripe={stripePromise} options={options}>
        <SignedForm
          goToSignup={() => setForm("register")}
          user={session?.user || null}
          productPrice={productPrice * 100}
          productId={productId || 0}
        />
      </Elements>
    );
  }

  if (form === "login") {
    return (
      <Elements stripe={stripePromise} options={options}>
        <SigninForm
          goToSignup={() => setForm("register")}
          goToSignedIn={() => setForm("logged")}
          productId={productId || 0}
          productStripeProductId={productStripeProductId || ""}
          productPrice={productPrice * 100}
        />
      </Elements>
    );
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <SignupForm
        goToLogin={() => setForm("login")}
        productId={productId || 0}
        productPrice={productPrice * 100}
      />
    </Elements>
  );
};
