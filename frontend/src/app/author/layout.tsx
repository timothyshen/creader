// app/author/layout.tsx
import React from 'react';
import { Header } from '@/components/Dashboard/Header';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Dashboard/SideBar';
import { Inter } from 'next/font/google';
import "../globals.css"; // Assuming you want to keep global styles consistent

const inter = Inter({ subsets: ["latin"] });

interface AuthorLayoutProps {
    children: React.ReactNode;
}

export default function AuthorLayout({ children }: AuthorLayoutProps) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex min-h-screen w-full flex-col bg-muted/40`}>
                <Sidebar />
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <Header />
                    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
