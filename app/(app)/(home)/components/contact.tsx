"use client";
import { Button } from "@/components/button";
import { Input, TextArea } from "@/components/input";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { sendMailAction } from "./actions";

export type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const methods = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async ({ email, name, message }) => {
    setLoading(true);
    setSent(false);
    await sendMailAction({ email, name, message });
    setLoading(false);
    setSent(true);
  };
  return (
    <div className="border-b-4 py-12 border-gray-900  bg-red-300" id="contact">
      <div className="mx-auto max-w-4xl lg:text-center  px-6">
        <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl">
          Ancora dubbi? Scrivimi!
        </p>
      </div>
      <div className="mx-auto max-w-3xl px-6 py-8">
        <div className="flex flex-col gap-16">
          <FormProvider {...methods}>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={methods.handleSubmit(onSubmit)}
            >
              <Input
                label="Nome"
                name="name"
                placeholder="Giuppi Funi"
                required
              />
              <Input
                label="Email"
                name="email"
                placeholder="email@giuppi.dev"
                required
                validate={(v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  "Inserisci un indirizzo email valido."
                }
              />
              <TextArea
                label="Messaggio"
                name="message"
                placeholder="Il tuo messaggio..."
                required
                rows={4}
              />
              <div className="flex flex-col w-full gap-4 items-center justify-center">
                <Button type="submit" loading={loading}>
                  Invia
                </Button>
                {sent && <div>Messaggio ricevuto, a presto! ❤️</div>}
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}
