"use client";

import { CheckIcon, ClockIcon, XCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Message = "success" | "canceled" | "waiting";

export default function ConfirmMessage({
  messagge,
  isLogged,
}: {
  messagge?: Message;
  isLogged: boolean;
}) {
  const icon = getIcon(messagge);
  const message = getMessage(messagge);

  return (
    <div className="flex flex-col w-full items-center justify-center text-5xl flex-grow bg-white h-full">
      {icon}
      <span className="text-7xl mb-4">Grazie!</span>
      <span className="text-center mb-2">{message}</span>
      <span className="text-3xl text-center">
        Riceverai una mail con le istruzioni per accedere al tuo ordine.
      </span>
    </div>
  );
}

function getIcon(paymentStatus?: Message) {
  if (paymentStatus === "success") {
    return (
      <div className="bg-myGreen border-4 border-gray-900">
        <CheckIcon className="h-40 w-40 text-white" />
      </div>
    );
  }
  if (paymentStatus === "canceled") {
    return (
      <div className="bg-red-600 border-4 border-gray-900">
        <XCircleIcon className="h-40 w-40 text-gray-900" />
      </div>
    );
  }
  return (
    <div className="bg-blue-300 border-4 border-gray-900">
      <ClockIcon className="h-40 w-40 text-gray-900" />
    </div>
  );
}

function getMessage(paymentStatus?: Message) {
  if (paymentStatus === "success") {
    return "L'ordine è stato completato.";
  }
  if (paymentStatus === "canceled") {
    return "Il pagamento non è andato a buon fine.";
  }
  return "L'ordine è in fase di elaborazione.";
}
