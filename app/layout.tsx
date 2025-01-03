import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/LandingPage/Footer";
import NavBar from "@/components/LandingPage/nav/NavBar";
import { Toaster } from "sonner";
// import NavBar from "@/components/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <header>
          <NavBar />
        </header>
        <main className=" overflow-x-hidden">
        <Toaster position="top-right" />
        {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
