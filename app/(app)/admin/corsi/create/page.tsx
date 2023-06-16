import { Database } from "@/types/supabase";
import { stripe } from "@/utils/stripe";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import slugify from "slugify";

export default function CreateForm() {
  const createCourse = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const discount = parseInt(formData.get("discount") as string);
    const level = formData.get("difficulty") as string;
    const supabase = createServerComponentClient<Database>({ cookies });
    const slug = slugify(name, { lower: true });
    const { error, data: newProduct } = await supabase
      .from("products")
      .insert({
        name,
        description,
        level,
        price,
        discount,
        slug,
      })
      .select()
      .single();
    if (error) {
      console.log(error);
    } else {
      const stripeProduct = await stripe.products.create({
        name,
        description,
      });

      const stripePrice = await stripe.prices.create({
        currency: "eur",
        product: stripeProduct.id,
        unit_amount: price * 100,
      });

      await stripe.products.update(stripeProduct.id, {
        default_price: stripePrice.id,
      });

      if (stripeProduct) {
        const { error } = await supabase
          .from("products")
          .update({
            stripe_product_id: stripeProduct.id,
          })
          .eq("id", newProduct.id);
      }

      redirect("admin/corsi");
    }
  };
  return (
    <form action={createCourse}>
      <div className="mt-2 flex flex-col gap-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Nome
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="nome"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Descrizione
          </label>
          <div className="mt-2">
            <textarea
              name="description"
              id="description"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="descrizione"
              rows={2}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Prezzo
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="price"
              id="price"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="prezzo"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="difficulty"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Difficoltà
          </label>
          <select
            id="difficulty"
            name="difficulty"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="principiante"
          >
            <option>principiante</option>
            <option>medio</option>
            <option>esperto</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="discount"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Sconto
          </label>
          <select
            id="discount"
            name="discount"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="0"
          >
            <option>0</option>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
            <option>35</option>
            <option>40</option>
            <option>45</option>
            <option>50</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex gap-3 justify-end">
        <a
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          href="../corsi"
        >
          Cancel
        </a>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
        >
          Crea
        </button>
      </div>
    </form>
  );
}
