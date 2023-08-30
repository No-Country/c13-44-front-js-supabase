import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useState } from "react";

const HuespedesVarians = [
  {
    name: "Adultos",
    count: 0,
  },
  {
    name: "Niños",
    count: 0,
  },
  {
    name: "Bebés",
    count: 0,
  },
  {
    name: "Mascotas",
    count: 0,
  },
];

export default function Huespedes() {
  const [HuspedesState, setCounters] = useState(HuespedesVarians); // Adultos, Niños, Mascotas, Bebés

  const handleCounterIncrement = (index: number) => {
    const updatedHuspedes = [...HuspedesState];
    updatedHuspedes[index].count += 1;
    setCounters(updatedHuspedes);
  };

  const handleCounterDecrement = (index: number) => {
    if (HuspedesState[index].count < 0) return;

    const updatedHuspedes = [...HuspedesState];
    updatedHuspedes[index].count -= 1;
    setCounters(updatedHuspedes);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          className="flex justify-start w-[20rem] h-[3.5rem] text-lg pointer-events-auto"
        >
          <span>
            Huespedes:{" "}
            {HuspedesState.reduce((acc, counter) => acc + counter.count, 0)}
          </span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Action event example"
        closeOnSelect={false}
        className="dropdown-menu pointer-events-none"
      >
        {HuespedesVarians.map((Huesped, index) => {
          return (
            <DropdownItem className="flex flex-row" key={Huesped.name}>
              <span>{Huesped.name}</span>
              <Button
                className="pointer-events-auto cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCounterDecrement(index);
                }}
                style={{ margin: "0 4px" }}
              >
                -
              </Button>
              <span>{Huesped.count}</span>
              <Button
                className="pointer-events-auto cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCounterIncrement(index);
                }}
                style={{ margin: "0 4px" }}
              >
                +
              </Button>
            </DropdownItem>
          );
        })}

        {/*         <DropdownItem
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></DropdownItem> */}
      </DropdownMenu>
    </Dropdown>
  );
}
