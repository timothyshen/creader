'use client'
import React, { useEffect } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from "@/provider/viemConfig"
import { useGlobalState } from '@/stores/useGlobalState';
import { useNativeCurrencyPrice } from '@/hooks/useCurrencyPrice';
import { SessionProvider } from 'next-auth/react';


const queryClient = new QueryClient();

interface WagmiProviderProps {
  children: React.ReactNode;
}

const ProviderWrap = ({ children }: WagmiProviderProps) => {
  const price = useNativeCurrencyPrice();
  const { setNativeCurrencyPrice } = useGlobalState();

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};


export default ProviderWrap;