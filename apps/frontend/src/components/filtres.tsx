import { Card, CardBody, Button, Input } from "@nextui-org/react";
import { IconCalendarEvent, IconMapPin, IconSearch, IconCalendarOff } from '@tabler/icons-react';

export function Filtres() {

    return (
        <>
            <Card className="explorer bg-[#D41790] animate-fade-right animate-once">
                <CardBody className="flex-row">
                    <IconCalendarEvent className="w-10 h-10" />
                    <Input
                        label="Fecha ingreso"
                        radius="lg"
                        variant="bordered"
                        className="w-40 ml-2"
                        placeholder="dd/mm/aa"
                    />
                    <IconCalendarOff className="ml-1 w-10 h-10" />
                    <Input
                        label="Fecha salida"
                        radius="lg"
                        variant="bordered"
                        className="w-40 "
                        placeholder="dd/mm/aa"
                    />
                    <IconMapPin className="ml-1 w-10 h-10 " />
                    <Button className="btn" variant="bordered" >
                        <h1>Seleccione un destino</h1>
                    </Button>
                    <Input
                        radius="lg"
                        variant="bordered"
                        className="w-50 ml-2"
                        placeholder="Que buscamos?"
                        startContent={
                            <IconSearch className="w-10 h-10" />
                        }
                    />
                </CardBody>
            </Card>

        </>
    )
}