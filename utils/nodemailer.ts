import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "mail.smtp2go.com",
  port: 2525,
  secure: false,
  auth: {
    user: process.env.SMTP2GO_USER,
    pass: process.env.SMTP2GO_PWD,
  },
});
