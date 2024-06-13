"use client";
import contactUsSchema, { ContactUsSchema } from "@/schema/contact-us";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import contactUsAction from "@/app/actions/contact-us-action";
import { toast } from "sonner";

const ContactUsForm = () => {
  const form = useForm<ContactUsSchema>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      name: "",
      email: "",
      source: "",
      message: "",
      hasNDA: false,
    },
  });

  const onSubmit = async (data: ContactUsSchema) => {
    const email = await contactUsAction(data);

    if (!email) {
      return toast.error("There has been an issue sending your email.");
    }

    toast.success(
      "Your email has been sent successfully. We will reach out to you within 24 hours."
    );

    form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel required>Your name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel required>Your company email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="source"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel>How did you hear about us?</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <div>
                <FormLabel required>How can we help you?</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="hasNDA"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>I will need an NDA</FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" loading={form.formState.isSubmitting}>
          Get your free estimate
        </Button>
      </form>
    </Form>
  );
};

export default ContactUsForm;
