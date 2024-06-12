import React from "react";
import { Label } from "./label";
import { Input } from "./input";
import { Textarea } from "./textarea";
import { Checkbox } from "./checkbox";
import { Button } from "./button";

const ContactUsForm = () => {
  return (
    <div className="space-y-6">
      <div>
        <Label>Your name</Label>
        <Input />
      </div>
      <div>
        <Label>Your company email</Label>
        <Input />
      </div>
      <div>
        <Label>How did you hear about us?</Label>
        <Input />
      </div>
      <div>
        <Label>How can we help you?</Label>
        <Textarea />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox />
        <Label>I will need an NDA</Label>
      </div>
      <div>
        <Button className="w-full">Get your free estimate</Button>
      </div>
    </div>
  );
};

export default ContactUsForm;
