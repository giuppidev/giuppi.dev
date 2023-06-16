"use client";
import { Database } from "@/types/supabase";
import { Tags } from "@/app/(app)/corsi/[course_slug]/tags";

type Product = Database["public"]["Tables"]["products"]["Row"];
export const OrderSummary = ({ product }: { product: Product }) => {
  return (
    <section
      aria-labelledby="summary-heading"
      className="lg:sticky lg:top-0 lg:h-screen bg-myYellow px-4 pb-10 pt-16 sm:px-6 lg:col-start-2 lg:row-start-1 lg:px-30 lg:pb-16  "
    >
      <div className="mx-auto lg:max-w-xl">
        <h2 id="summary-heading" className="text-3xl font-medium text-gray-900">
          Stai acquistando:
        </h2>

        <div
          className={`mt-10 bg-white flex flex-col gap-8 drop-shadow-[8px_8px_0px_#000]  transition-all p-5 border-4 border-gray-900`}
        >
          <div className="flex-auto space-y-1">
            <h3 className="text-5xl font-semibold">{product.name}</h3>
          </div>
          <Tags tags={product.tags} />
          <div className="flex justify-between text-3xl font-semibold pt-5">
            <div>Totale</div>
            <p className="">€ {product.price}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
