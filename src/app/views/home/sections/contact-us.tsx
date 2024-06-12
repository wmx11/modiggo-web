/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CTAButton from "@/components/ui/call-to-action-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Section from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";
import Title from "@/components/ui/title";

const ContactUs = () => {
  return (
    <Section className="bg-dot-zinc-500/50 relative" id="contact">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Container className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
        <div className="space-y-6">
          <div className="space-y-2">
            <Badge>Ready to work with us?</Badge>
            <Title className="md:text-7xl font-normal max-w-text">
              Let's forge or improve your <br /> digital product
            </Title>
          </div>
          <CTAButton size="xl" />
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Drop us a message</CardTitle>
              <CardDescription>
                Don't want to hop on a call just yet? Drop us a message! We'll
                get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default ContactUs;
