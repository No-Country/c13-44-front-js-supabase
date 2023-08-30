import { Divider, Image, Chip, Button, Input, Tabs, Tab } from "@nextui-org/react";
import { 
    IconStar,
    IconHeart, 
    IconShare, 
    IconWifi, 
    IconCooker, 
    IconDeviceTv, 
    IconParking, 
    IconBath, 
    IconSwimming, 
    IconSunset2, 
    IconSportBillard } from "@tabler/icons-react";
import Huespedes from '../../../components/huespedes'
export default function Reservar() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <div className="m-1 mt-[4rem]">
                        <Image removeWrapper
                            alt="Card example background"
                            className="z-0 w-[40rem]  "
                            src="https://a0.muscache.com/im/pictures/95ecec03-f383-4f01-88e9-29519f65e630.jpg?im_w=1200"
                        />
                    </div>
                    <div className="flex flex-col mt-[2rem] ml-[2rem]">
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
                        <div className="flex flex-row justify-center ]">
                            <Input className="max-w-[20rem] m-[1rem]" type="date" label="Ingeso" placeholder="Ingreso" />
                            <Input className="max-w-[20rem] m-[1rem]" type="date" label="Salida" placeholder="Salida" />
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
                        <Divider className="w-[50rem] h-[0.1rem] mt-[1rem]" />
                        <div className="flex flex-row">
                            <Button className="mt-[1rem] ml-[4rem] h-[3.5rem] w-[20rem] text-xl" color="primary">Reservar</Button>
                            <h1 className="flex flex-row text-end font-bold text-5xl mt-[1rem] ml-[2rem]">
                                Total :
                                <span className="flex text-end text-primary ">$$$</span>
                            </h1>
                        </div>
                    </div>
                </div>
                <Tabs variant={"underlined"} aria-label="Tabs variants">
                    <Tab title="Descripcion">
                        <div className="m-[1rem]">
                            <div className="flex flex-row">
                                <h1 className="font-bold mb-[1rem]">Tipo: </h1>
                                <p>Cabaña</p>
                            </div>
                            <h1 className="font-bold mb-[1rem]">Descripcion</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus ex totam voluptatibus ad, minus quo veritatis, a quas porro cum vel sit libero non in quasi! Nostrum provident repellendus sunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi incidunt iusto maiores, ex expedita eligendi assumenda facere voluptate dolorum molestiae neque asperiores temporibus, veritatis quod voluptates. Molestias, fugit voluptatem.
                            </p>
                            <h1 className="font-bold mt-[2rem]">Las prestaciones disponibles</h1>
                            <div className="flex flex-row">
                                <ul>
                                    <li className="flex flex-row m-4">
                                        <IconWifi className="w-10 h-10" />
                                        <h1>Wifi</h1>
                                    </li >
                                    <li className="flex flex-row m-4">
                                        <IconCooker className="w-10 h-10" />
                                        <h1>Cocina</h1>
                                    </li >
                                    <li className="flex flex-row m-4">
                                        <IconDeviceTv className="w-10 h-10" />
                                        <h1>Televicion</h1>
                                    </li >
                                    <li className="flex flex-row m-4">
                                        <IconParking className="w-10 h-10" />
                                        <h1>Estacionamiento</h1>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="flex flex-row m-4">
                                        <IconBath className="w-10 h-10" />
                                        <h1>Ducha</h1>
                                    </li >
                                    <li className="flex flex-row m-4">
                                        <IconSwimming className="w-10 h-10" />
                                        <h1>Picina</h1>
                                    </li >
                                    <li className="flex flex-row m-4">
                                        <IconSunset2 className="w-10 h-10" />
                                        <h1>Hermosa vista</h1>
                                    </li >
                                    <li className="flex flex-row m-4">
                                        <IconSportBillard className="w-10 h-10" />
                                        <h1>Mesa de pool</h1>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </Tab>
                    <Tab title="Reseñas">
                        <h1 className="font-bold text-7xl">Proximamente Disponible ...</h1>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}