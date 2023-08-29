import { useState } from "react";
import { Card, Input, Image, CardFooter, CardBody } from "@nextui-org/react";

export function Post() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <>
            <div>
                <h1 className="font-bold text-7xl">Crear Arriendo</h1>
                {selectedImage ? (
                    <Card className="w-[30rem] h-[30rem] mt-4">
                        <CardBody className="flex justify-center items-center">
                            <Image src={selectedImage} alt="Imagen seleccionada" className="w-full" />
                        </CardBody>
                        <CardFooter>
                            <div className="w-[30rem]">
                                <Input type="file" className="flex items-center" onChange={handleImageChange} />
                            </div>
                        </CardFooter>

                    </Card>
                ) : (
                    <Card className="w-[30rem] h-[30rem] ">
                        <CardBody className="flex justify-center items-center">
                            <p className="font-bold text-lg">
                                Selecciona una imagen
                            </p>
                        </CardBody>
                        <CardFooter>
                            <div className="w-[30rem]">
                                <Input type="file" className="flex items-center" onChange={handleImageChange} />
                            </div>
                        </CardFooter>
                    </Card>
                )}      </div>
        </>
    );
}
