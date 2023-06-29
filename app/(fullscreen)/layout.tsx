import "../globals.css";
import SupabaseProvider from "../supabase-provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SupabaseProvider>
        <div className="h-full">
          <main id="skip" className="min-h-[calc(100dvh-14rem)] ">
            {children}
          </main>
        </div>
      </SupabaseProvider>
    </>
  );
}
