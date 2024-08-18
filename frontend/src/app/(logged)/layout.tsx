// app/author/layout.tsx
'use client'
import React from 'react';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer';
import { Inter } from 'next/font/google';
import WalletOptions from "@/components/WalletOption";
import { ConnectWalletClient } from "@/provider/viemConfig";
import { getTargetNetwork } from "@/utils/network";

import { useAccount } from "wagmi";

import "../globals.css"; // Assuming you want to keep global styles consistent

const inter = Inter({ subsets: ["latin"] });

interface AuthorLayoutProps {
    children: React.ReactNode;
}

export default function AuthorLayout({ children }: AuthorLayoutProps) {
    const { isConnected } = useAccount()
    const currentChain = getTargetNetwork();

    if (isConnected) {
        console.log('currentChain', currentChain);
        const walletClient = ConnectWalletClient();
        walletClient.switchChain(currentChain);
    }

    return (
        <html lang="en">
            <body className={`${inter.className} flex min-h-screen w-full flex-col bg-muted/40`}>
                <Header />
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    {isConnected ? children : (
                        <>
                            <div className="text-2xl font-bold mb-4 mx-auto">Connect to a wallet</div>
                            <WalletOptions />
                        </>
                    )}
                </main>
                <Footer />
            </body>
        </html>
    );
}
