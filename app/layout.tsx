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
    <html lang="it" className={workSans.className}>
      <head></head>
      <body className={`${workSans.className} min-h-screen `}>
        {children}{" "}
        {/* <div dangerouslySetInnerHTML={{ __html: iubendaImplementation }} /> */}
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
const iubendaImplementation = `
<script type="text/javascript">
var _iub = _iub || [];
_iub.csConfiguration = {"invalidateConsentWithoutLog":false,"countryDetection":true,"perPurposeConsent":true,"whitelabel":false,"lang":"it","siteId":3195486,"consentOnDocument":true,"consentOnHorizontalScroll":true,"cookiePolicyId":81964887, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"acceptButtonColor":"#65a6a0","acceptButtonCaptionColor":"white","customizeButtonColor":"#212121","customizeButtonCaptionColor":"white","position":"bottom","textColor":"white","backgroundColor":"#000001" },    "callback": {
  "onReady": function() {
      var banner = document.getElementById('iubenda-cs-banner');
      if (banner) {
          bannerHTML = banner.innerHTML;
      }
  },
  "onPreferenceFirstExpressed": function(event) {
    localStorage.set("iubendaConsent", true);
  }}};
</script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>`;

const IubendaCookieBanner = () => {
  const script = `<script type="text/javascript">
    var _iub = _iub || [];
    _iub.csConfiguration = {"ccpaAcknowledgeOnDisplay":true,"consentOnContinuedBrowsing":false,"countryDetection":true,"enableCcpa":true,"enableLgpd":true,"invalidateConsentWithoutLog":true,"lgpdAppliesGlobally":false,"perPurposeConsent":true,"siteId":2831268,"whitelabel":false,"cookiePolicyId":17159544,"lang":"it", "banner":{ "acceptButtonDisplay":true,"closeButtonDisplay":false,"customizeButtonDisplay":true,"explicitWithdrawal":true,"listPurposes":false,"position":"bottom","rejectButtonDisplay":true }};
    </script>
    <script type="text/javascript" src="//cdn.iubenda.com/cs/ccpa/stub.js"></script>
    <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>`;
  return <div dangerouslySetInnerHTML={{ __html: script }}></div>;
};
