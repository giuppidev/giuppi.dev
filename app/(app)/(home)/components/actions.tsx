"use server";

import MessageEmail from "@/emails/message";
import { sendMail } from "@/utils/nodemailer";
import { render } from "@react-email/render";

export const sendMailAction = async ({
  email,
  name,
  message,
}: {
  email: string;
  name: string;
  message: string;
}) => {
  const notificationEmailHtml = render(
    <MessageEmail email={email} name={name} message={message} />
  );

  const notificationOptions = {
    from: '"Giuseppe Funicello" <info@giuppi.dev>',
    to: "info@giuppi.dev",
    subject: "🚀 Nuovo messaggio!",
    html: notificationEmailHtml,
  };
  await sendMail(notificationOptions);
};
