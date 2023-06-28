import Script from "next/script";
import "./globals.css";
import { workSans } from "./fonts";

const meta = {
  title: "giuppi<dev> - Programmatore nomade",
  description: "La prima academy per diventare programmatori e nomadi digitali",
  cardImage: "/og.png",
  robots: "follow, index",
  favicon: "/favicon.ico",
  url: "https://www.giuppi.dev",
  type: "website",
};

export const metadata = {
  title: meta.title,
  description: meta.description,
  cardImage: meta.cardImage,
  robots: meta.robots,
  favicon: meta.favicon,
  url: meta.url,
  type: meta.type,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
    type: meta.type,
    site_name: meta.title,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={workSans.className}>
      <head></head>
      <body className={`${workSans.className} min-h-screen `}>
        {children} <IubendaCookieBanner />
      </body>
    </html>
  );
}

const GAHeader = () => {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  const gt = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  if (!gt) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gt}`}
      />
      <Script id="analytics" strategy="afterInteractive">{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gt}', {
        page_path: window.location.pathname,
      });
    `}</Script>
    </>
  );
};

const IubendaCookieBanner = () => {
  const script = `<script type="text/javascript">
    var _iub = _iub || [];
    _iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"consentOnContinuedBrowsing":false,"countryDetection":true,"enableCcpa":true,"enableLgpd":true,"invalidateConsentWithoutLog":true,"lgpdAppliesGlobally":false,"perPurposeConsent":true,"siteId":2831268,"whitelabel":false,"cookiePolicyId":17159544,"lang":"it", "banner":{ "acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":false,"position":"bottom","rejectButtonDisplay":true }};
    </script>
    <script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"></script>
    <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>`;
  return <div dangerouslySetInnerHTML={{ __html: script }}></div>;
};
