import { Button, Divider } from "@nextui-org/react"
import { IconPhotoEdit } from "@tabler/icons-react"
import { useLocation } from "wouter"




const TitlePost = () => {
    const [, setLocation] = useLocation()

    return (
        <>
            <div className="space-y-1">
                <h4 className="text-2xl font-medium">Mis publicaciónes</h4>
                <p className="text-small text-default-400">"Explora tu historia: Donde tus publicaciones cobran vida"</p>
            </div>
            <Button onClick={() => setLocation('/postvivienda')} className="top-3" color="success" endContent={<IconPhotoEdit />}>
                Subir publicación
            </Button>
            <Divider className="my-[2rem]" />
        </>
    )
}

export default TitlePost
