"use client";
import { useSupabase } from "@/app/supabase-provider";
import { EmailInput, FormMessage } from "@/components/auth/form";
import { Button } from "@/components/button";
import { TextArea } from "@/components/input";
import { GiuppiLogo } from "@/components/layout/logo";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

export type Inputs = {
  email: string;
  idea: string;
};

export default function ReactDayPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const methods = useForm<Inputs>();
  const supabase = useSupabase();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, idea }) => {
    setLoading(true);
    const { error } = await supabase.supabase
      .from("reactday")
      .insert({ email, idea });

    if (error) {
      setError("Qualcosa è andato storto, riprova!");
    } else {
      setError("");
      methods.resetField("email");
      methods.resetField("idea");
    }
    setLoading(false);
    setSuccess(true);
  };
  return (
    <section className="bg-myYellow  w-full min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <a
          href="/"
          className="flex items-center my-6 text-2xl font-semibold text-gray-900 "
        >
          <GiuppiLogo className="w-80" />
        </a>
        <div className="w-full bg-white shadow md:mt-0 sm:max-w-3xl xl:p-0 border-4 border-gray-900 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl ">
              Proponimi un progetto assurdo in React!
            </h1>
            <h1 className="text-lg   leading-tight tracking-tight text-gray-900  ">
              Le 2 idee più fuori di testa vinceranno un biglietto per
              partecipare online al{" "}
              <a
                className="font-medium text-primary-600 underline hover:no-underline "
                href="https://reactjsday.it"
                target="_blank"
              >
                Reactjsday
              </a>
            </h1>
            {success ? (
              <div className="flex flex-col w-full  items-center justify-center  flex-grow bg-white h-full">
                <div className="bg-myGreen border-4 border-gray-900">
                  <CheckIcon className="h-12 w-12 text-white" />
                </div>
                <span className="text-2xl mb-4">Grazie!</span>
                <span className="">
                  Riceverai una mail con il biglietto se la tua idea avrà vinto!
                </span>
                <div className="w-full flex justify-center pt-4">
                  <Button
                    type="button"
                    className="bg-myGreen text-white"
                    onClick={() => setSuccess(false)}
                  >
                    Nuova idea
                  </Button>
                </div>{" "}
              </div>
            ) : (
              <FormProvider {...methods}>
                <form
                  className="space-y-4 md:space-y-6"
                  onSubmit={methods.handleSubmit(onSubmit)}
                >
                  <EmailInput />
                  <TextArea
                    label="Idea"
                    name="idea"
                    placeholder="Lascia andare la fantasia!"
                    required
                    rows={3}
                  />
                  <div className="w-full flex justify-center">
                    <Button
                      type="submit"
                      className="bg-myGreen text-white"
                      loading={loading}
                    >
                      Invia
                    </Button>
                  </div>{" "}
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 "
                    >
                      La tua email verrà usata{" "}
                      <span className="underline">
                        solo per inviarti il premio
                      </span>
                      , puoi comunque trovare{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline "
                        href="https://www.iubenda.com/privacy-policy/81964887"
                        target="_blank"
                      >
                        qui
                      </a>{" "}
                      termini e le condizioni del sito.
                    </label>
                  </div>
                </form>
                <FormMessage error={error} />
              </FormProvider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
