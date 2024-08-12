/* eslint-disable @next/next/no-img-element */
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card"
export function TrendingBook() {
    return (
        <Card x-chunk="dashboard-06-chunk-2">
            <CardHeader>
                <CardTitle>Trending Books</CardTitle>
                <CardDescription>Books that are currently trending.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src="/placeholder.svg"
                            alt="Book Cover"
                            width={64}
                            height={96}
                            className="rounded-md object-cover"
                        />
                        <div>
                            <div className="font-medium">The Enchanted Forest</div>
                            <div className="text-sm text-muted-foreground">Fantasy</div>
                            <div className="text-sm font-medium">2,345 sales</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img
                            src="/placeholder.svg"
                            alt="Book Cover"
                            width={64}
                            height={96}
                            className="rounded-md object-cover"
                        />
                        <div>
                            <div className="font-medium">Whispers in the Wind</div>
                            <div className="text-sm text-muted-foreground">Romance</div>
                            <div className="text-sm font-medium">1,789 sales</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <img
                            src="/placeholder.svg"
                            alt="Book Cover"
                            width={64}
                            height={96}
                            className="rounded-md object-cover"
                        />
                        <div>
                            <div className="font-medium">Echoes of the Past</div>
                            <div className="text-sm text-muted-foreground">Historical Fiction</div>
                            <div className="text-sm font-medium">3,012 sales</div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}