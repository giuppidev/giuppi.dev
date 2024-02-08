import { createServerSupabaseClient } from "@/app/supabase-server";
import { Button } from "@/components/button";
import { Input, TextArea } from "@/components/admin-input";
import CustomNotification from "@/emails/notification";
import { sendMail } from "@/utils/nodemailer";
import { render } from "@react-email/render";
import CustomMdNotification from "@/emails/md_notification";
import { SubmitButton } from "@/components/submit-button";

export default async function Tools() {
  const sendNotification = async (data: FormData) => {
    "use server";
    const supabase = createServerSupabaseClient();

    let email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const content = data.get("content") as string;
    const preview = data.get("preview") as string;

    let emails: string[] | undefined = undefined;

    if (email === "all") {
      const { data: subs } = await supabase
        .from("subscriptions")
        .select()
        .eq("active", true);

      emails = subs?.map((sub) => sub.email);
      email = "info@giuppi.dev";
    }

    const emailHtml = render(
      <CustomMdNotification
        content={content}
        previewText={preview}
        byeMessage=""
      />
    );

    const options = {
      from: '"Giuseppe Funicello" <info@giuppi.dev>',
      to: email,
      bcc: emails,
      subject: subject,
      html: emailHtml,
    };
    try {
      await sendMail(options);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex gap-2 my-8 flex-col">
        <form action={sendNotification} className="grid gap-2 grid-cols-1 ">
          <Input label="Email" name="email" placeholder="Email" />
          <Input label="Subject" name="subject" placeholder="Subject" />
          <Input label="Preview text" name="preview" placeholder="Preview" />
          <TextArea
            label="Content"
            name="content"
            placeholder="Content"
            rows={10}
          />

          <SubmitButton type="submit" className="text-sm bg-myGreen text-white">
            Send Notification
          </SubmitButton>
        </form>
      </div>
    </div>
  );
}
