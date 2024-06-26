import React, { useState } from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import { SelectStep } from "@/components/Modal/ChapterModal/SelectStep";
import { UploadStep } from "@/components/Modal/ChapterModal/UploadStep";
import { StepType } from "@/types/steptypes"

interface AddNewProps {
    nftAcc: `0x${string}`
    setIsMintedBodhi: (isMintedBodhi: boolean) => void
}

const AddNew = ({ nftAcc, setIsMintedBodhi }: AddNewProps) => {
    const [step, setStep] = useState<StepType>("select");
    const [open, setOpen] = useState<boolean>(false);

    const renderStep = (nftAcc: `0x${string}`, setOpen: (open: boolean) => void) => {
        switch (step) {
            case "select":
                return <SelectStep setStep={setStep} setIsMintedBodhi={setIsMintedBodhi} />;
            case "upload":
                return <UploadStep setStep={setStep} nftAcc={nftAcc} setOpen={setOpen} setIsMintedBodhi={setIsMintedBodhi} />;
            default:
                return null;
        }
    };

    return (
        
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant='default' className='mb-2 w-full'>Add New</Button>
            </DialogTrigger>
            <DialogContent className={step === 'upload' ? "min-w-full h-screen" : undefined}>
                {renderStep(nftAcc, setOpen)}
            </DialogContent>
        </Dialog>
    );
};

export default AddNew;
