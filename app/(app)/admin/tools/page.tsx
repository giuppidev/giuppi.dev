import { createServerSupabaseClient } from "@/app/supabase-server";
import { Button } from "@/components/button";
import { Input, TextArea } from "@/components/admin-input";
import CustomNotification from "@/emails/notification";
import { sendMail } from "@/utils/nodemailer";
import { render } from "@react-email/render";

export default async function Tools() {
  const sendNotification = async (data: FormData) => {
    "use server";
    const supabase = createServerSupabaseClient();

    let email = data.get("email") as string;
    const subject = data.get("subject") as string;
    const content = data.get("content") as string;
    const preview = data.get("preview") as string;
    const linkUrl = data.get("link-url") as string;
    const linkMessage = data.get("link-msg") as string;
    const linkLabel = data.get("link-label") as string;
    let link = undefined;
    let emails: string[] | undefined = undefined;
    if (linkUrl) {
      link = {
        url: linkUrl,
        message: linkMessage,
        label: linkLabel,
      };
    }

    if (email === "all") {
      const { data: subs } = await supabase
        .from("subscriptions")
        .select()
        .eq("active", true);

      // emails = subs?.map((sub) => sub.email);
      email = "info@giuppi.dev";
    }

    const emailHtml = render(
      <CustomNotification content={content} previewText={preview} link={link} />
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
        <form action={sendNotification} className="grid gap-2 grid-cols-2 ">
          <Input label="Email" name="email" placeholder="Email" />
          <Input label="Subject" name="subject" placeholder="Subject" />
          <TextArea label="Content" name="content" placeholder="Content" />
          <Input label="Preview text" name="preview" placeholder="Preview" />
          <Input label="Link URL" name="link-url" placeholder="Link url" />
          <Input label="Link msg" name="link-msg" placeholder="Link msg" />
          <Input label="Link label" name="link-label" placeholder="Link msg" />

          <Button type="submit" className="text-sm bg-myGreen text-white">
            Send Notification
          </Button>
        </form>
      </div>
    </div>
  );
}
