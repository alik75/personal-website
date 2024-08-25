"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./TextArea";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const methods = useForm<FormValues>();
  const { register, handleSubmit, watch, setValue } = methods;
  const data = watch();
  const onSubmit = async ({ name, email, message }: FormValues) => {};
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-5">
        <Input name="name" wrapperClassName="w-full" placeholder="Your Name">
        </Input>
        <Input name="email" wrapperClassName="w-full" placeholder="Your Email Address">
        </Input>
        <TextArea name="message"  wrapperClassName="w-full" placeholder="Your Message"></TextArea>
        <Button className="w-full" label="Submit"></Button>
      </form>
    </FormProvider>
  );
};

export default ContactForm;
