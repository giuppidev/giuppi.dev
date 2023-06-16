import { workSans } from "../fonts";
import "../globals.css";
import SupabaseProvider from "../supabase-provider";

const meta = {
  title: "Programmatore nomade",
  description: "La prima academy per diventare programmatori e nomadi digitali",
  cardImage: "/og.png",
  robots: "follow, index",
  favicon: "/favicon.ico",
  url: "https://subscription-starter.vercel.app",
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
  twitter: {
    card: "summary_large_image",
    site: "@vercel",
    title: meta.title,
    description: meta.description,
    cardImage: meta.cardImage,
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
        <SupabaseProvider>
          <div className="h-full">
            <main id="skip" className="min-h-[calc(100dvh-14rem)] ">
              {children}
            </main>
          </div>
        </SupabaseProvider>
      </body>
    </html>
  );
}
