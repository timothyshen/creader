'use client'
import React from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from "@/provider/config"


const queryClient = new QueryClient();

interface WagmiProviderProps {
  children: React.ReactNode;
}

const ProviderWrap = ({ children }: WagmiProviderProps) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
};


export default ProviderWrap;