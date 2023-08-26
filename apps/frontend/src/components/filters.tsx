import { Card, CardBody, Input } from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";

import { Select, SelectItem } from "@nextui-org/react";

export function Filters() {
  return (
    <>
      <Card
        shadow="md"
        className="max-w-2xl w-full  shadow bg-primary animate-fade-down animate-once"
        radius="lg"
      >
        <CardBody className="flex-row flex p-3 gap-3">
          <Select
            labelPlacement="outside"
            label={"Destino"}
            className="max-w-xs"
            color="primary"
          >
            {[
              {
                label: "All",
                value: "all",
              },
            ].map((animal) => (
              <SelectItem
                color="primary"
                variant="flat"
                key={animal.value}
                value={animal.value}
              >
                {animal.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            radius="lg"
            variant="flat"
            color="primary"
            className=" h-full"
            placeholder="Que buscamos?"
            startContent={<IconSearch className="" />}
          />
        </CardBody>
      </Card>
    </>
  );
}
