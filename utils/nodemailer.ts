import nodemailer from "nodemailer";

type EmailOptions = {
  from: string;
  to: string;
  subject: string;
  html: string;
};
export async function sendMail(options: EmailOptions) {
  const transporter = nodemailer.createTransport({
    host: "mail.smtp2go.com",
    port: 2525,
    secure: false,
    auth: {
      user: process.env.SMTP2GO_USER,
      pass: process.env.SMTP2GO_PWD,
    },
  });
  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });
  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(options, (err, info) => {
      if (err) {
        console.error(err);
        console.log("error sending");

        reject(err);
      } else {
        console.log(info);
        console.log("sent");

        resolve(info);
      }
    });
  });
}
