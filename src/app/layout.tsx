
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner"
import { Footer } from "@/components/Footer";
import { Inter } from "next/font/google";
import "./globals.css";
import ProviderWrap from "@/provider/ProviderWrap";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creader | Next generation Content",
  description: "Creader | Next generation Content",
};


const LayoutWrap = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderWrap>
          <div className={inter.className}>
            <LayoutWrap>{children}</LayoutWrap>
            <Toaster />
          </div>
        </ProviderWrap>
      </body>
    </html>

  );
}
