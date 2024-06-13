import { ContactUsSchema } from "@/schema/contact-us";
import { FC } from "react";

export const ContactUsEmailTemplate: FC<ContactUsSchema> = ({
  email,
  hasNDA,
  message,
  name,
  source,
}) => {
  return (
    <div>
      <div>
        <div>
          <strong>Name: </strong> {name}
        </div>
        <div>
          <strong>Company email: </strong> {email}
        </div>
        <div>
          <strong>Where did you hear about us?: </strong> {source}
        </div>
        <div>
          <strong>I need an NDA: </strong> {hasNDA.toString() || "false"}
        </div>
        <div>
          <strong>How can we help you?: </strong> {message}
        </div>
      </div>
    </div>
  );
};
