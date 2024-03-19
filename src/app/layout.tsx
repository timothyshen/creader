
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderWrap from "@/provider/ProviderWrap";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creader | Next generation Content",
  description: "Creader | Next generation Content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (


    <html lang="en">
      <body className={inter.className}>
        <ProviderWrap>{children}</ProviderWrap>
        <Toaster />
      </body>
    </html>

  );
}
