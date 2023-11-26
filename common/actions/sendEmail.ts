"use server";
import { Resend } from "resend";
import { isValidString, getErrorMessage } from "common/utils";
import { createElement } from "react";
import ContactFormEmail from "email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!isValidString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!isValidString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "gemyfolks1@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
