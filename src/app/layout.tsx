import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/NavBar/NavBar";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VLDM",
  icons: "/favicon.png",
  description: "VLDM's Portafolio, I suggest hire him",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} id="up">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
