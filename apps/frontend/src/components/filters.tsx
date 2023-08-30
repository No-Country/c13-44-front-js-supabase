import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";

interface MenuItem {
  label: string;
  items: string[];
}

const menus: MenuItem[] = [
  { label: "Tipo de alojamiento", items: ["Apartamento", "Motel", "Casa Rural", "Camping", "Glamping", "Albergues"] },
  { label: "Comodidades", items: ["Apartamento", "Motel", "Casa Rural", "Camping", "Glamping", "Albergues"] },
  { label: "Clasificaciones", items: ["Apartamento", "Motel", "Casa Rural", "Camping", "Glamping", "Albergues"] },
  { label: "Precio", items: ["Apartamento", "Motel", "Casa Rural", "Camping", "Glamping", "Albergues"] },
];

export function Filters() {
  return (
    <Card
      shadow="md"
      className="max-w-5xl w-full shadow bg-primary animate-fade-down animate-once"
      radius="lg"
    >
      <CardBody className="flex-row flex p-3 gap-3">
        {menus.map((menu) => (
          <Select
            key={menu.label}
            labelPlacement="outside"
            label={menu.label}
            className="max-w-[10rem]"
            color="primary"
          >
            {menu.items.map((item) => (
              <SelectItem
                color="primary"
                variant="flat"
                key={item}
              >
                {item}
              </SelectItem>
            ))}
          </Select>
        ))}
      </CardBody>
    </Card>
  );
}
