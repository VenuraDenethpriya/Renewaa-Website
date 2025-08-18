import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/Whatsapp-Chat";



export const metadata: Metadata = {
  title: "Renewaa",
  description: "Renewaa Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation/>
        <main>{children}</main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  );
}
