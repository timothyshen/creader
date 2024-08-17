import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";

export default function SelectLicense({ setLicense }: { setLicense: (license: string) => void }) {

    return (
        <Select onValueChange={setLicense}>
            <SelectTrigger>
                <SelectValue placeholder="Select a license" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="1">Non Commercial</SelectItem>
                <SelectItem value="2">Commercial</SelectItem>
                <SelectItem value="3">Non Commercial + Commercial</SelectItem>
            </SelectContent>
        </Select>
    );
}