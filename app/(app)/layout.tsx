import { workSans } from "../fonts";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import "../globals.css";
import SupabaseProvider from "../supabase-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={` min-h-screen `}>
      <SupabaseProvider>
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto]">
          <Header />
          <main id="skip" className="h-full bg-gray-100">
            {children}
          </main>
          <Footer />
        </div>
      </SupabaseProvider>
    </div>
  );
}
