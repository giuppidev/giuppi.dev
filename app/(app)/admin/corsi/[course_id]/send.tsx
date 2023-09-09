import { createServerSupabaseClient } from "@/app/supabase-server";
import { Button } from "@/components/button";
import SendNotificationTestEmail from "@/emails/test_notification";
import ZoomLinkEmail from "@/emails/zoom";
import { Database } from "@/types/supabase";
import { transporter } from "@/utils/nodemailer";
import { render } from "@react-email/render";
type Course = Database["public"]["Tables"]["products"]["Row"];

export async function SendNotification({ course_id }: { course_id: number }) {
  const handleSubmit = async (data: FormData) => {
    "use server";
    const course_id = data.get("course_id");
    const date = data.get("date") as string;
    const supabase = createServerSupabaseClient();
    const { data: course } = await supabase
      .from("products")
      .select()
      .eq("id", course_id)
      .single();
    if (!course) {
      return;
    }

    const { data: subs } = await supabase
      .from("subscriptions")
      .select()
      .eq("active", true);
    subs?.forEach((sub) => {
      const emailHtml = render(
        <ZoomLinkEmail course={course} customDate={new Date(date)} />
      );

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
  const testSend = async (data: FormData) => {
    "use server";
    const course_id = data.get("course_id");
    const date = data.get("date") as string;

    const supabase = createServerSupabaseClient();
    const { data: course } = await supabase
      .from("products")
      .select()
      .eq("id", course_id)
      .single();
    if (!course) {
      return;
    }

    const { data: subs } = await supabase
      .from("subscriptions")
      .select()
      .eq("active", true);

    const emailHtml = render(
      <SendNotificationTestEmail emails={subs?.map((sub) => sub.email) || []} />
    );

    const options = {
      from: '"Giuseppe Funicello" <info@giuppi.dev>',
      to: "g.funicello@gmail.com",
      subject: "Notification list",
      html: emailHtml,
    };
    try {
      transporter.sendMail(options);
    } catch (e) {
      console.log(e);
    }

    const testEmailHtml = render(
      <ZoomLinkEmail course={course} customDate={new Date(date)} />
    );

    const optionsTest = {
      from: '"Giuseppe Funicello" <info@giuppi.dev>',
      to: "g.funicello@gmail.com",
      subject: "🚀 Il prossimo evento LIVE si avvicina!",
      html: testEmailHtml,
    };
    try {
      transporter.sendMail(optionsTest);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex gap-2 my-8 flex-col">
      <form action={handleSubmit} className="flex gap-2 ">
        <input type="datetime-local" name="date" />
        <input hidden type="text" value={course_id} name="course_id" />
        <Button type="submit" className="text-sm bg-red-400">
          Send Notification
        </Button>
      </form>
      <form action={testSend} className="flex gap-2 ">
        <input type="datetime-local" name="date" />

        <input hidden type="text" value={course_id} name="course_id" />
        <Button type="submit" className="text-sm bg-myGreen text-white">
          Send Test Notification
        </Button>
      </form>
    </div>
  );
}
