import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function RemixSelect({ selectRemix }: { selectRemix: (value: string) => void }) {
    return (
        <Select onValueChange={selectRemix}>
            <SelectTrigger className="w-max">
                <SelectValue placeholder="Select a type of Remix" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="scene">Scene</SelectItem>
                <SelectItem value="bgm">BGM</SelectItem>
                <SelectItem value="object">Object</SelectItem>
                <SelectItem value="character">Character</SelectItem>
            </SelectContent>
        </Select>
    )
}
