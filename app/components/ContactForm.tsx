"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

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
      <form onSubmit={handleSubmit(onSubmit)}></form>
    </FormProvider>
  );
};

export default ContactForm;
