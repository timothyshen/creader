
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderWrap from "@/provider/ProviderWrap";
import { Header } from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://creader.vercel.app/'),
  title: "Creader | Next generation Content",
  description: "Creader | Next generation Content",
  openGraph: {
    title: "Creader | Next generation Content",
    description: "Creating world with the community",
    type: "website",
    locale: "en_US",
    url: "https://creader.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderWrap>
          <div>
            {children}
            <Toaster />
          </div>
        </ProviderWrap>
      </body>
    </html>
  );
}
