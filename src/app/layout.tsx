import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
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
        <GoogleOAuthProvider clientId="860087977540-81hp7g9e7c16aigmikcq95n243uh0g7s.apps.googleusercontent.com">
          <Header />
          <main>{children}</main>
          <Footer />
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
