import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Header from "~/widgets/header/Header";
import Footer from "~/widgets/footer/Footer";

const lato = Lato({ weight: ["900", "700", "400"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flex Living",
  referrer: "no-referrer-when-downgrade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
