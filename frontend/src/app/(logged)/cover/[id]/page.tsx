'use client'
import WalletConnectComponent from "@/components/WalletConnect";
import { Account } from "@/components/AccountDisplay";
import ViewCoverView from "@/components/ViewCoverView";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RemixCard } from "@/components/Modal/DerivetiveModal/RemixCard";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen p-10 flex justify-center mx-auto">
      <div className="w-[70%] grid grid-cols-3 gap-6">
        <div className="col-span-2">
          {/* Left column content (2/3 width) */}
          <ViewCoverView id={params.id} />

        </div>
        <div>
          <div className="space-y-2 order-5 mb-4">
            <Card className="p-4 space-y-4">
              <CardTitle>NFT Characters</CardTitle>
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-bold">Character 1</h3>
                  <p>0x5130...342A</p>
                  <Image
                    src="/placeholder.svg"
                    alt="Character 1"
                    width={100}
                    height={100}
                    className="rounded-full"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <p>Price: 0.05 ETH</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-bold">Character 2</h3>
                  <p>0xD745...93ef</p>
                  <Image
                    src="/placeholder.svg"
                    alt="Character 2"
                    width={100}
                    height={100}
                    className="rounded-full"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <p>Price: 0.08 ETH</p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-bold">Character 3</h3>
                  <p>0x1234...5678</p>
                  <Image
                    src="/placeholder.svg"
                    alt="Character 3"
                    width={100}
                    height={100}
                    className="rounded-full"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <p>Price: 0.03 ETH</p>
                </div>
              </div>
            </Card>
          </div>
          <RemixCard assetsId={BigInt(1)} ipId={params.id as `0x${string}`} />
        </div>
      </div>
    </main>
  );
}
