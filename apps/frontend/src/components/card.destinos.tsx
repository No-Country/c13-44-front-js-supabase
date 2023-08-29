import {Card, CardFooter, Image, Chip} from "@nextui-org/react";
import { IconMapPinFilled } from "@tabler/icons-react";
import destino from '../img/destino.webp'

export default function CardDestinos() {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-[15rem] h-[15rem]"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover max-w-sm"
        src={destino}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <section className="flex flex-row">
        <div className="text-primary">
            <IconMapPinFilled />
        </div>
        <p className="text-tiny text-white/80 mt-1">Colombia</p>
      </section>
        <Chip className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Bogota
        </Chip>
      </CardFooter>
    </Card>
  );
}