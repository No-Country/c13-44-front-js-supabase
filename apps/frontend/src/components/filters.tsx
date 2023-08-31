import { Button, Card, CardBody } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import { IconTrash, IconStar } from "@tabler/icons-react";

interface MenuItem {
  label: string;
  items: string[];
}


const menus: MenuItem[] = [
  { label: "Tipo de alojamiento", items: ["Casa", "Departamento", "Hotel", "Cabaña"]},
  { label: "Comodidades", items: ["se agregan con db"]},
  { label: "Clasificaciones", items: [`1⭐️`, "2⭐️", "3⭐️", "4⭐️", "5⭐️"]},
  {
    label: "precio",
    items: ["$25 - $50 Usd", "$50 - $80 $Usd", "$80 - $100 Usd", "$100 - $250 Usd", "$250 - $500 Usd", "$500 - $1000 Usd"],
  },

];

export function Filters(): JSX.Element {



  return (
    <Card
      shadow="md"
      className="max-w-[60rem] ml-5 flex items-center justify-center w-full shadow bg-primary animate-fade-down animate-once mt-[1rem]"
      radius="lg"
    >
      <CardBody className="flex-row flex justify-center p-3 gap-3">
        {menus.map((menu) => (
          <Select
            key={menu.label}
            labelPlacement="outside"
            label={menu.label}
            className="max-w-[11rem]"
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
        <Button className="text-white border-white" variant="bordered" startContent={<IconTrash />}>
          Limpiar Filtros
        </Button>
      </CardBody>
    </Card>
  );
}
