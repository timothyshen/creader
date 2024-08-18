import React, { FormEvent, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useSendTransaction } from "wagmi";
import { parseEther } from 'viem';

interface TippingModalProps {
    coverAcc: `0x${string}`;
}

const TippingModal: React.FC<TippingModalProps> = ({ coverAcc }) => {
    const [amount, setAmount] = useState<string>('0');
    const [transactionStatus, setTransactionStatus] = useState<string | null>(null);

    const { sendTransaction } = useSendTransaction();

    const handleTip = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await sendTransaction({
                to: coverAcc,
                value: parseEther(amount),
            });
            setTransactionStatus("Success");
        } catch (error) {
            console.error("Failed to send tip:", error);
            setTransactionStatus("Failed");
        }
    };

    const tippsArray = [
        { label: '10 $Degen', value: '5' },
        { label: '20 $Degen', value: '20' },
        { label: '50 $Degen', value: '50' },
        { label: '100 $Degen', value: '100' },
    ];

    return (
        <Dialog>
            <form onSubmit={handleTip}>
                <DialogTrigger asChild>
                    <Button variant="outline">Tip</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Leave a tip</DialogTitle>
                        <DialogDescription>If you enjoy using our app, consider leaving a tip to support our team.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid items-center gap-2">
                            <Label htmlFor="amount">Amount</Label>
                            <div className="flex items-center space-x-2">
                                {tippsArray.map((tip) => (
                                    <Button className=" rounded-md px-3 py-1 text-sm w-fit" key={tip.label} onClick={() => setAmount(tip.value)}>{tip.label}</Button>
                                ))}
                            </div>
                        </div>
                        <div className="text-sm">Enter a custom amount:</div>
                        <Input
                            id="amount"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <DialogFooter>
                        <Button onClick={handleTip}>Submit</Button>
                        <DialogTrigger asChild>
                            <Button type="button">Cancel</Button>
                        </DialogTrigger>
                    </DialogFooter>
                </DialogContent>
            </form>
            {transactionStatus && <p>{`Transaction ${transactionStatus}`}</p>}
        </Dialog>
    );
};

export default TippingModal;
