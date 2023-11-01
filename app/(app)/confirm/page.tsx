import { createServerSupabaseClient } from "@/app/supabase-server";
import ConfirmMessage from "./message";

export default async function ConfirmPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const supabase = createServerSupabaseClient();
  const { data: session } = await supabase.auth.getSession();

  const { success, canceled } = searchParams;

  return (
    <ConfirmMessage
      isLogged={!!session}
      message={!!success ? "success" : !!canceled ? "canceled" : "waiting"}
    />
  );
}
