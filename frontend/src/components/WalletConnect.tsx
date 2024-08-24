/* eslint-disable @next/next/no-img-element */
'use client'
import ViewCoverView from "./ViewCoverView";
import { Card } from "./ui/card";
import { Character, CharacterCard } from "./RankingBoard";


type WalletConnectComponentProps = {
    id?: string;
};


const WalletConnectComponent = ({ id }: WalletConnectComponentProps) => {

    const characters: Character[] = [
        { id: "1", name: "Character 1", address: "0x5130...342A", imageUrl: "/placeholder.svg", price: 0.05 },
        { id: "2", name: "Character 2", address: "0xD745...93ef", imageUrl: "/placeholder.svg", price: 0.08 },
        { id: "3", name: "Character 3", address: "0x1234...5678", imageUrl: "/placeholder.svg", price: 0.03 },
    ];
    return (
        <main className="min-h-screen p-4 sm:p-6 md:p-10 flex justify-center mx-auto">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          {/* Left column content */}
          <ViewCoverView id={params.id} />
        </div>
        <div className="space-y-4">
          <Card className="p-4">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))}
          </Card>
          <RemixCard assetsId={BigInt(1)} ipId={params.id as `0x${string}`} />
        </div>
      </div>
    </main>
    )
}

export default WalletConnectComponent;