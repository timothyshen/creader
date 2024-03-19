import {
    DialogDescription,
    DialogFooter,
    DialogTitle,
} from "@/components/ui/dialog"
import { StepProps } from "@/types/steptypes"

export const SelectStep: React.FC<StepProps> = ({ setStep }) => (
    <>
        <DialogTitle>Create</DialogTitle>
        <DialogDescription>
            <p
                onClick={() => setStep("upload")}
                className="h-[40px] align-middle border rounded-md border-black px-3 py-2 hover:bg-slate-200 hover:text-black hover:cursor-pointer"
            >
                Some content
            </p>
        </DialogDescription>
        <DialogFooter>
            <p className="text-center text-xs text-gray-400">
                All formats are accepted. Content will be stored forever till the world ends. No one can change your content but you.
            </p>
        </DialogFooter>
    </>
);

