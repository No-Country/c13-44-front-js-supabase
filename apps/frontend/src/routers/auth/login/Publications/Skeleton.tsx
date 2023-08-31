import {
    Button,
    Card,
    Skeleton
} from '@nextui-org/react'
import { IconTrash } from '@tabler/icons-react'


export const SkeletonCard = () => {
    return (
        <>
            <Card className="w-[17rem] h-[17rem] space-y-5 p-4 " radius="md">
                <Skeleton className="rounded-lg">
                    <div className="h-24 rounded-lg bg-default-300"></div>
                </Skeleton>
                <div className="space-y-3">
                    <Skeleton className="w-3/5 rounded-lg">
                        <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-4/5 rounded-lg">
                        <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                    </Skeleton>
                    <Skeleton className="w-2/5 rounded-lg">
                        <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
                    </Skeleton>
                </div>
                <Button className='w-[12rem] self-center' color="danger" variant="bordered" startContent={<IconTrash />}>
                    Eliminar publicación
                </Button>
            </Card>

        </>
    )
}
