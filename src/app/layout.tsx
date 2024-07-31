import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Nav from "@/components/nav";
import CurrentSectionContextProvider from "@/context/currentSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className}  text-white relative`}>
        <CurrentSectionContextProvider>
          <Nav />
          {children}
          <Footer />
        </CurrentSectionContextProvider>
      </body>
    </html>
  );
}
