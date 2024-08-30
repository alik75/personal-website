"use client";
import React, { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";
import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from "@/actions/recaptcha"
import { Resend } from "resend";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/resend-email";

interface FormValues {
  name: string;
  email: string;
  message: string;
}



const ContactForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [isVerified, setIsverified] = useState<boolean>(false)

  const methods = useForm<FormValues>();
  const { register, handleSubmit, watch, setValue } = methods;
  const data = watch();
  const onSubmit = async ({ name, email, message }: FormValues) => {
    console.log(data);
    sendEmail(name,email,message).then(()=>toast.success('Thanks! I be in touch with you as soon as possible.')).catch(()=>toast.error('Error in submit message!'));
    
  };

  const handleCaptchaSubmission=async (token: string | null)=> {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => setIsverified(true))
      .catch(() => setIsverified(false))
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-5">
        <Input name="name" wrapperClassName="w-full" placeholder="Your Name">
        </Input>
        <Input name="email" wrapperClassName="w-full" placeholder="Your Email Address">
        </Input>
        <TextArea name="message"  wrapperClassName="w-full" placeholder="Your Message"></TextArea>
        <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            ref={recaptchaRef}
            theme="dark"
            onChange={handleCaptchaSubmission}
          />
        <Button className="w-full" disabled={!isVerified} label="Submit"></Button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
