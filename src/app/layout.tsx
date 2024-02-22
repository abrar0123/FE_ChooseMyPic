import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Choose My Pic",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        {/* <Navbar /> */}
        <div className="flex-1 flex container flex-shrink-0">
          {/* <Sidebar /> */}
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
