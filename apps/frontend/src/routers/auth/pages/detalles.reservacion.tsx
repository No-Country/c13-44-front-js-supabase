import { Divider, Image, Chip, Button, Input } from "@nextui-org/react";
import { IconStar, IconHeart, IconShare } from "@tabler/icons-react";
import Huespedes from '../../../components/huespedes.dropdown'
export default function Reservar() {
    return (
        <>
            <div className="flex flex-row">
                <div className="m-[2rem]">
                    <Image removeWrapper
                        alt="Card example background"
                        className="z-0 w-[40rem]  "
                        src="https://a0.muscache.com/im/pictures/95ecec03-f383-4f01-88e9-29519f65e630.jpg?im_w=1200"
                    />
                </div>
                <div className="flex flex-col mt-[2rem]">
                    <div className="flex flex-row justify-end">
                        <Chip className="bg-primary text-white m-[0.25rem]">
                            <IconStar className="w-4" />
                        </Chip>
                        <Chip className="text-red-500 m-[0.25rem]">
                            <IconHeart className="w-4" />
                        </Chip>
                        <Button className="h-7 w-4 m-[0.25rem]">
                            <IconShare className="w-4" />
                        </Button>
                    </div>
                    <h1 className="font-bold text-lg text-primary">Cabaña, Colombia, Medellin</h1>
                    <Divider className="w-[50rem] h-[0.1rem]" />
                    <div className="flex flex-row justify-center">
                        <Input className="w-[20rem] m-[1rem]" type="date" label="date" placeholder="Ingreso" />
                        <Input className="w-[20rem] m-[1rem]" type="date" label="date" placeholder="Salida"/>
                    </div>
                    <div className="flex flex-row ml-[4rem] mt-[1rem]">
                        <Huespedes />
                    <div className="ml-[2rem]">
                        <ul>
                            <li className="flex flex-row text-end ">
                                Precio por Noche: 
                                <span className="flex text-end text-primary ">$$$</span>
                            </li>
                            <li className="flex flex-row text-end ">
                                Limpieza: 
                                <span className="flex text-end text-primary ">$$$</span>
                            </li>
                            <li className="flex flex-row text-end ">
                                Tarifa por servivio: 
                                <span className="flex text-end text-primary ">$$$</span>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}