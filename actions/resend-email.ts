"use server"
import Email from "@/emails/contact";
import { Resend } from "resend";

const resend = new Resend('re_dGaiMGEs_NYdRZBhjWsubCbahJZP9HHET');

export async function sendEmail(name:string,email:string,message:string) {
  const res =  await resend.emails.send({
    from: 'info@alikatiraei.com',
    to: 'alikatiraie96@gmail.com',
    subject: 'New contact message in alikatiraei.com',
    react:  Email({ name: name,email:email,message:message }),
  });
  console.log(res);
  if (res) {
    return "success!"
  } else {
    throw new Error("Failed Send Email")
  }
}