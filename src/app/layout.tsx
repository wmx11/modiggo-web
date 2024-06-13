import Footer from "@/components/ui/footer";
import Navigation from "@/components/ui/navigation";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "Modiggo | %s",
    default: "Modiggo | Custom Web Solutions",
  },
  description:
    "Developing tailored web solutions with a focus on adaptability and proactive partnerships. Modiggo drives value and helps you grow. We go the extra mile to fully understand your business.",
  openGraph: {
    title: "Modiggo | Custom Web Solutions",
    description:
      "Developing tailored web solutions with a focus on adaptability and proactive partnerships. Modiggo drives value and helps you grow. We go the extra mile to fully understand your business.",
    url: "https://modiggo.com",
    images: "https://modiggo.com/modiggo_meta_image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script src="https://app.termshub.io/2bae6faa-3e7c-413a-b404-599446f7f7bd/termshub-cookie-consent.js"></Script>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <TooltipProvider delayDuration={300}>
          <Navigation />
          <main>{children}</main>
          <Footer />
          <Toaster richColors />
        </TooltipProvider>
      </body>
    </html>
  );
}
