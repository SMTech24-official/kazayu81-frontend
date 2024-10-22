import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import Wrapper from "@/components/Wrapper/Wrapper";
import Providers from "@/lib/Providers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Importing local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900", // Ensure this matches the font's weight range
  fallback: ["system-ui", "sans-serif"],
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900", // Ensure this matches the font's weight range
  fallback: ["monospace"],
});

// Importing Inter with fallback fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  fallback: ["system-ui", "sans-serif"],
});

// Metadata for the page
export const metadata: Metadata = {
  title: "HOW - Helper On Way",
  description: "Helper On Way - A platform to connect helpers with those in need",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <Wrapper>
        <html lang="en">
          <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
            {children}
            <ToastContainer />
          </body>
        </html>
      </Wrapper>
    </Providers>
  );
}
