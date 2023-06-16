import { Database } from "@/types/supabase";
import { createServerSupabaseClient } from "../../supabase-server";
import { Form } from "./form";
import { OrderSummary } from "./summary";
import { stripe } from "@/utils/stripe";
import Link from "next/link";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];

export default async function Checkout({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const productId = searchParams["product_id"];
  const supabase = createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  let profile: Profile | null;
  if (user) {
    const { data } = await supabase
      .from("profiles")
      .select()
      .eq("email", user.email)
      .single();
    profile = data;
  } else {
    profile = null;
  }

  const { data: product, error } = await supabase
    .from("products")
    .select()
    .eq("id", productId)
    .single();

  if (error || !product) {
    return <div>Course not found</div>;
  }

  return (
    <div className="bg-white  ">
      <div className="relative h-full grid  grid-cols-1 lg:grid-cols-2 ">
        <h1 className="sr-only">Order information</h1>
        <OrderSummary product={product} />
        <div className="lg:px-32 bg-gray-100">
          <Form
            user={user}
            profile={profile}
            productId={product.id}
            productStripeProductId={product.stripe_product_id}
            productPrice={product.price || 0}
          />
        </div>
      </div>
    </div>
  );
}
