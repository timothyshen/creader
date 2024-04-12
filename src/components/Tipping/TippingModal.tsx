
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

const TippingModal = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Tip</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Leave a tip</DialogTitle>
                    <DialogDescription>If you enjoy using our app, consider leaving a tip to support our team.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid items-center gap-2">
                        <Label className="w-20" htmlFor="amount">
                            Amount
                        </Label>
                        <div className="flex items-center space-x-2">
                            <button className="border border-gray-200 rounded-md px-3 py-1 text-sm"> $10 </button>
                            <button className="border border-gray-200 rounded-md px-3 py-1 text-sm"> $20 </button>
                            <button className="border border-gray-200 rounded-md px-3 py-1 text-sm"> $50 </button>
                            <button className="border border-gray-200 rounded-md px-3 py-1 text-sm"> $100 </button>
                        </div>
                    </div>
                    <div className="text-sm">Enter a custom amount:</div>
                    <div className="w-48">
                        <Input className="mt-2 text-2xl" id="amount" placeholder="Enter amount" />
                    </div>
                    <Button className="w-full" onClick={undefined}>
                        Checkout Detail Section
                    </Button>
                </div>
                <DialogFooter>
                    <DialogTrigger asChild>
                        <Button type="submit">Submit</Button>
                    </DialogTrigger>
                    <div>Cancel</div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default TippingModal