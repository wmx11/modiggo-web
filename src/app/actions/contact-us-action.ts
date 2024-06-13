"use server";
import { ContactUsEmailTemplate } from "@/components/ui/email-template";
import rateLimit from "@/lib/rate-limit";
import contactUsSchema, { ContactUsSchema } from "@/schema/contact-us";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactUsAction = async (data: ContactUsSchema) => {
  try {
    rateLimit();

    contactUsSchema.parse(data);

    const { data: emailData, error } = await resend.emails.send({
      from: "Contact Modiggo <contact-us@modiggo.com>",
      to: ["v.mykolaitis@modiggo.com"],
      reply_to: data.email,
      subject: `${data.name} | Contact Modiggo`,
      react: ContactUsEmailTemplate(data),
      text: "",
    });

    if (error) {
      console.error(error);
      return false;
    }

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default contactUsAction;
