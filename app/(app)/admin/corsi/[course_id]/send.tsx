import { createServerSupabaseClient } from "@/app/supabase-server";
import { Button } from "@/components/button";
import { SubmitButton } from "@/components/submit-button";
import NewContentEmail from "@/emails/new-lesson";
import SendNotificationTestEmail from "@/emails/test_notification";
import ZoomLinkEmail from "@/emails/zoom";
import { getURL } from "@/utils/helpers";
import { sendMail } from "@/utils/nodemailer";
import { render } from "@react-email/render";

export async function SendNotification({ course_id }: { course_id: number }) {
  const newContentSend = async (data: FormData) => {
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

    const { data: subs } = await supabase
      .from("subscriptions")
      .select()
      .eq("active", true);
    const emails = subs?.map((sub) => sub.email);
    const contentType =
      course.product_type === "course" ? "lezione" : "masterclass";

    const emailHtml = render(
      <NewContentEmail
        course={course}
        link={`${getURL()}/dashboard/corsi/${course.slug}`}
      />
    );

    const options = {
      from: '"Giuseppe Funicello" <info@giuppi.dev>',
      to: "info@giuppi.dev",
      bcc: emails,
      subject: `🚀 Una nuova ${contentType} è disponibile!`,
      html: emailHtml,
    };
    try {
      await sendMail(options);
    } catch (e) {
      console.log(e);
    }
  };

  const testNewContentSend = async (data: FormData) => {
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

    const contentType =
      course.product_type === "course" ? "lezione" : "masterclass";

    const testEmailHtml = render(
      <NewContentEmail
        course={course}
        link={`${getURL()}/dashboard/corsi/${course.slug}`}
      />
    );

    const optionsTest = {
      from: '"Giuseppe Funicello" <info@giuppi.dev>',
      to: "g.funicello@gmail.com",
      subject: `🚀 Una nuova ${contentType} è disponibile!`,
      html: testEmailHtml,
    };
    try {
      await sendMail(optionsTest);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="flex gap-2 my-8 flex-col">
      <div className="flex gap-2">
        <form action={newContentSend} className="flex gap-2 ">
          <input hidden type="text" value={course_id} name="course_id" />
          <SubmitButton
            type="submit"
            className="text-sm bg-red-200 text-gray-900"
          >
            New Content Notification
          </SubmitButton>
        </form>
        <form action={testNewContentSend} className="flex gap-2 ">
          <input hidden type="text" value={course_id} name="course_id" />
          <SubmitButton
            type="submit"
            className="text-sm bg-grenn-200 text-gray-900"
          >
            New content test Notification
          </SubmitButton>
        </form>
      </div>
    </div>
  );
}
