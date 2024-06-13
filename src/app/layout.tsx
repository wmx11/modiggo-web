import Footer from "@/components/ui/footer";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/navigation";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

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
