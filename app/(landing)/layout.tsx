import "../globals.css";
import SupabaseProvider from "../supabase-provider";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SupabaseProvider>{children}</SupabaseProvider>;
}
