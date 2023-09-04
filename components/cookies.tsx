"use client";
import React from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = (props: any) => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed  ">
      <div className="fixed px-8 bottom-0 left-0 right-0 flex flex-col lg:flex-row border-t-4 border-gray-900 items-center justify-between py-8 bg-gray-100">
        <span className="text-dark text-base lg:mr-16 px-4">
          Noi e terze parti selezionate utilizziamo cookie o tecnologie simili
          per finalità tecniche e, con il tuo consenso, anche per altre finalità
          come specificato nella{" "}
          <a
            href="https://www.iubenda.com/privacy-policy/81964887/cookie-policy"
            target="_blank"
            className="underline"
          >
            cookie policy
          </a>
          . Il rifiuto del consenso può rendere non disponibili le relative
          funzioni.
        </span>
        <button
          className="bg-myGreen py-2 px-8 rounded text-white  font-semibold border-4 border-gray-900 shadow-brutal mt-4"
          onClick={() => acceptCookie()}
        >
          ACCETTO
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
