import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/homepageComponents/Navbar";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Intelli Interview - AI-Powered Interview Preparation",
  description: "Master your interviews with Intelli Interview, The AI-driven platform designed to help you practice, refine, and excel in any interview scenario.",
};


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Toaster />
        <body className={inter.className}>
          <ThemeProvider attribute="class">
            <Navbar />
            {children}
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
