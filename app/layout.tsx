import Script from "next/script";
import "./globals.css";
import { workSans } from "./fonts";
export const dynamic = "force-dynamic";

const meta = {
  title: "giuppi<dev> - Programmatore nomade",
  description: "La prima academy per diventare programmatori e nomadi digitali",
  cardImage:
    "https://res.cloudinary.com/de30mupo1/image/upload/v1688128070/giuppi.dev/giuppidev.jpg",
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
    images: [meta.cardImage],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it" className={workSans.className}>
      <head>
        <GAHeader />
      </head>
      <body className={`${workSans.className} min-h-screen `}>
        {children}
        <IubendaCookieBanner />
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
  _iub.csConfiguration = {"askConsentAtCookiePolicyUpdate":true,"floatingPreferencesButtonDisplay":"bottom-right","perPurposeConsent":true,"siteId":3195486,"whitelabel":false,"cookiePolicyId":81964887,"lang":"it", "banner":{ "acceptButtonCaptionColor":"#FFFFFF","acceptButtonColor":"#495F16","acceptButtonDisplay":true,"backgroundColor":"#FFFFFF","closeButtonDisplay":false,"customizeButtonCaptionColor":"#4D4D4D","customizeButtonColor":"#DADADA","customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":true,"position":"bottom","rejectButtonCaptionColor":"#FFFFFF","rejectButtonColor":"#495F16","rejectButtonDisplay":true,"textColor":"#000000" }};
  </script>
  <script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"></script>
  <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>`;
  return <div dangerouslySetInnerHTML={{ __html: script }}></div>;
};
