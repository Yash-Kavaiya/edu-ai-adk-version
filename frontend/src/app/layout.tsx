import type { Metadata } from "next";
import { rethinkSans } from "@/utils/fonts";
import { SessionProvider } from "@/contexts/SessionContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edu.AI USA - American Educational Excellence",
  description: "Premium American AI-powered education platform - United States of America's finest educational technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.variable} antialiased`}>
        <SessionProvider>
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
