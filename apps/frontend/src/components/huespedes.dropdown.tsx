import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { useState } from "react";

export default function Huespedes() {
  const [counters, setCounters] = useState([0, 0, 0, 0]); // Adultos, Niños, Mascotas, Bebés

  const handleCounterIncrement = (index: number) => {
    const updatedCounters = [...counters];
    updatedCounters[index] += 1;
    setCounters(updatedCounters);
  };

  const handleCounterDecrement = (index: number) => {
    if (counters[index] > 0) {
      const updatedCounters = [...counters];
      updatedCounters[index] -= 1;
      setCounters(updatedCounters);
    }
  };

  const total = counters.reduce((sum, counter) => sum + counter, 0);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="flex justify-start w-[20rem] h-[3.5rem] text-lg pointer-events-auto">
          <span>Huespedes: {total}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Action event example">
        <DropdownItem className="flex flex-row">
          <span>Adultos</span>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCounterDecrement(0);
            }}
            style={{ margin: "0 4px" }}
          >
            -
          </Button>
          <span>{counters[0]}</span>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCounterIncrement(0);
            }}
            style={{ margin: "0 4px" }}
          >
            +
          </Button>
        </DropdownItem>
        <DropdownItem className="flex flex-row">
          <span>Niños</span>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCounterDecrement(1);
            }}
            style={{ margin: "0 4px" }}
          >
            -
          </Button>
          <span>{counters[1]}</span>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCounterIncrement(1);
            }}
            style={{ margin: "0 4px" }}
          >
            +
          </Button>
        </DropdownItem>
        <DropdownItem className="flex flex-row">
          <span>Bebés</span>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCounterDecrement(3);
            }}
            style={{ margin: "0 4px" }}
          >
            -
          </Button>
          <span>{counters[2]}</span>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCounterIncrement(2);
            }}
            style={{ margin: "0 4px" }}
          >
            +
          </Button>
        </DropdownItem>
        <DropdownItem className="flex flex-row">
          <span>Mascotas</span>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCounterDecrement(2);
            }}
            style={{ margin: "0 4px" }}
          >
            -
          </Button>
          <span>{counters[3]}</span>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCounterIncrement(3);
            }}
            style={{ margin: "0 4px" }}
          >
            +
          </Button>
        </DropdownItem>
        <DropdownItem style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
