import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { RemixModal } from './RemixModal'
import { RemixModalProps } from './DerivetiveType'


export const RemixCard = ({
    assetsId,
    ipId
}: RemixModalProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Remix</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='text-lg p-5'>
                    For any remix, you can select the type of license you want to mint.
                </div>
                <RemixModal assetsId={assetsId} ipId={ipId} />
            </CardContent>
        </Card>
    )
}