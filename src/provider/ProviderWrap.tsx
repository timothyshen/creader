'use client'
import React, { useEffect } from 'react';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from "@/provider/config"
import { useGlobalState } from '@/stores/useGlobalState';
import { useNativeCurrencyPrice } from '@/hooks/useCurrencyPrice';


const queryClient = new QueryClient();

interface WagmiProviderProps {
  children: React.ReactNode;
}

const ProviderWrap = ({ children }: WagmiProviderProps) => {
  const price = useNativeCurrencyPrice();
  const { setNativeCurrencyPrice } = useGlobalState();

  useEffect(() => {
    console.log('price', price);
    if (price > 0) {
      console.log('init', price);
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
};


export default ProviderWrap;