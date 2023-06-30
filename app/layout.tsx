import Script from "next/script";
import "./globals.css";
import { workSans } from "./fonts";
import CookieConsent from "@/components/cookies";
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
      <head></head>
      <body className={`${workSans.className} min-h-screen `}>
        {children}
        <CookieConsent />
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
