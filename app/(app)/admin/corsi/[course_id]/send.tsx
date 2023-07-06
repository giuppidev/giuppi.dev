import { createServerSupabaseClient } from "@/app/supabase-server";
import { Button } from "@/components/button";
import ZoomLinkEmail from "@/emails/zoom";
import { Database } from "@/types/supabase";
import { transporter } from "@/utils/nodemailer";
import { render } from "@react-email/render";
type Course = Database["public"]["Tables"]["products"]["Row"];

export async function SendNotification({ course_id }: { course_id: number }) {
  const handleSubmit = async (data: FormData) => {
    "use server";
    const course_id = data.get("course_id");
    const supabase = createServerSupabaseClient();
    const { data: course } = await supabase
      .from("products")
      .select()
      .eq("id", course_id)
      .single();
    if (!course) {
      return;
    }

    const { data: subs } = await supabase.from("subscriptions").select();
    subs?.forEach((sub) => {
      const emailHtml = render(<ZoomLinkEmail course={course} />);
      console.log("render email");

      const options = {
        from: '"Giuseppe Funicello" <info@giuppi.dev>',
        to: sub.email,
        subject: "🚀 Il prossimo evento LIVE si avvicina!",
        html: emailHtml,
      };
      try {
        if (sub.email) {
          transporter.sendMail(options);
        }
      } catch (e) {
        console.log(e);
      }
    });
  };

  return (
    <form action={handleSubmit}>
      <input hidden type="text" value={course_id} name="course_id" />
      <Button type="submit">Send Notification</Button>
    </form>
  );
}
