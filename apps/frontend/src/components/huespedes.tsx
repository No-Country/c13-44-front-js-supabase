import { Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

import { IconPlus, IconMinus } from "@tabler/icons-react";
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [HuespedesState, setCounters] = useState(HuespedesVarians); // Adultos, Niños, Mascotas, Bebés

  const handleCounterIncrement = (index: number) => {
    const updatedHuespedes = [...HuespedesState];
    updatedHuespedes[index].count += 1;
    setCounters(updatedHuespedes);
  };

  const handleCounterDecrement = (index: number) => {
    if (HuespedesState[index].count < 0) return;

    const updatedHuespedes = [...HuespedesState];
    updatedHuespedes[index].count -= 1;
    setCounters(updatedHuespedes);
  };

  return (
    <div>

      <Button
        variant="bordered"
        className="flex justify-start w-[20rem] h-[3.5rem] text-lg pointer-events-auto"
        onPress={onOpen}>
          <h1>
            Huespedes:{" "}
            {HuespedesState.reduce((acc, counter) => acc + counter.count, 0)}
          </h1>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody >
                {HuespedesVarians.map((Huesped, index) => {
                  return (
                    <div className="flex justify-between p-1 m-1" key={Huesped.name}>
                      <div className="flex items-start mt-5">
                        <span >{Huesped.name}</span>
                      </div>
                      <div className="flex flex-row justify-center mt-4 items-end">
                        <IconMinus
                          className="pointer-events-auto cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCounterDecrement(index);
                          }}
                          style={{ margin: "0 10px" }}
                        />
                          <span >
                            {Huesped.count}
                          </span>
                        <IconPlus
                          className="pointer-events-auto cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCounterIncrement(index);
                          }}
                          style={{ margin: "0 10px" }}
                        />
                      </div>
                    </div>
                  );
                })}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal >
    </div>
  );
}
