import { useState } from "react";
import { Card, Input, Image, CardFooter, CardBody, Select, SelectItem, Switch, Textarea, Button } from "@nextui-org/react";
import { IconPhotoPlus } from "@tabler/icons-react";

type TipoVivienda = "casa" | "departamento" | "hotel" | "cabaña";
type Huespedes = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";

export function Post() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const tiposDeVivienda: TipoVivienda[] = ["casa", "departamento", "hotel", "cabaña"];
    const huespedes: Huespedes[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];


    return (
        <>
            <div className="flex flex-row">
                <div>
                    <h1 className="font-bold text-6xl m-4">
                        Crear
                        <span className="text-primary ml-4">Arriendo</span>
                    </h1>
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
                                <IconPhotoPlus className="w-10" />
                                <p className="font-bold text-lg">
                                    <span className="text-primary mr-1">
                                        Selecciona
                                    </span>
                                    una imagen
                                </p>
                            </CardBody>
                            <CardFooter>
                                <div className="w-[30rem]">
                                    <Input type="file" className="flex items-center" onChange={handleImageChange} />
                                </div>
                            </CardFooter>
                        </Card>
                    )}
                </div>
                <div className="flex flex-col gap-4 justify-start ml-[4rem] mt-[8rem]">
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Input
                            type="text"
                            label="Titulo"
                            labelPlacement="outside"
                            placeholder="ej: departamento vista al mar"
                            className="w-[15rem]"
                        />
                        <Input
                            type="number"
                            label="Precio"
                            placeholder="0.00"
                            labelPlacement="outside"
                            className="w-[15rem]"
                            startContent={
                                <div className="pointer-events-none flex items-center">
                                    <span className="text-default-400 text-small">$</span>
                                </div>
                            }
                        />
                        <Input
                            type="text"
                            label="Ubicacion"
                            placeholder="Donde es?"
                            labelPlacement="outside"
                            className="w-[15rem]"

                        />
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Select
                            className="mt-2"
                            label="Prestaciones"
                        >
                            <SelectItem
                                key="db"
                            >
                                Se agregan con la db
                            </SelectItem>
                        </Select>
                        <Input
                            type="date"
                            label="Ingreso"
                            placeholder="0.00"
                            labelPlacement="outside"
                        />
                        <Input
                            type="date"
                            label="Salida"
                            placeholder="0.00"
                            labelPlacement="outside"
                        />
                    </div>
                    <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
                        <Select className="mt-2 max-w-[15rem]" label="Tipo de vivienda">
                            {tiposDeVivienda.map((tipo) => (
                                <SelectItem key={tipo} value={tipo}>
                                    {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                                </SelectItem>
                            ))}
                        </Select>
                        <Select className="mt-2 max-w-[15rem]" label="Limite de huéspedes">
                            {huespedes.map((tipo) => (
                                <SelectItem key={tipo} value={tipo}>
                                    {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                                </SelectItem>
                            ))}
                        </Select>
                        <div className="flex flex-row items-center ">
                            <h1 className="mr-1">No se admiten mascotas</h1>
                            <Switch />
                        </div>
                    </div>
                    <div className="flex flex-col ">
                        <Textarea
                            label="Descripcion"
                            variant="bordered"
                            color="primary"
                            labelPlacement="outside"
                            placeholder="ingresa tu descripcion"
                            defaultValue="Describe tu propiedad al detalle, para llamar mas la atención."
                        />
                        <div className="flex justify-end mt-[1rem]">
                            <Button color="primary" variant="bordered" className="w-[12rem] h-[3rem]">
                                Crear aviso
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

