import { Button } from "@/components/ui/button";
import Image from "next/image";

export type Character = {
    id: string;
    name: string;
    address: string;
    imageUrl: string;
    price: number;
};

export const CharacterCard = ({ character }: { character: Character }) => (
    <div className="flex flex-col sm:flex-row items-center p-3 sm:p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-4">
        <Image
            src={character.imageUrl}
            alt={character.name}
            width={60}
            height={60}
            className="rounded-full mb-2 sm:mb-0 sm:mr-4"
            style={{ aspectRatio: "1/1", objectFit: "cover" }}
        />
        <div className="flex-grow text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-1">{character.name}</h3>
            <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">{character.address}</p>
            <p className="text-base sm:text-lg font-semibold text-green-600">{character.price} ETH</p>
        </div>
        <Button variant="outline" className="mt-2 sm:mt-0 sm:ml-4 hover:bg-blue-50 w-max">Buy</Button>
    </div>
);