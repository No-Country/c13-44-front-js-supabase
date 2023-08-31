import {
  Card,
  CardFooter,
  CardHeader,
  Chip,
  Image
} from "@nextui-org/react";
import { IconCurrentLocation } from "@tabler/icons-react";
import { HtmlHTMLAttributes } from "react";

type CardPropiedades = HtmlHTMLAttributes<HTMLElement>

export default function CardPropiedades({ onClick }: CardPropiedades) {



  return (
    <>
      <Card
        isFooterBlurred
        className="w-64 h-[300px] col-span-12 sm:col-span-5 pointer-events-auto"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start" onClick={onClick}>
          <Chip color="default" className="absolute bg-white/30 border-zinc-100/50 z-10" variant="shadow">
            New
          </Chip>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://a0.muscache.com/im/pictures/95ecec03-f383-4f01-88e9-29519f65e630.jpg?im_w=1200"
          onClick={onClick}
        />
        <CardFooter onClick={onClick} className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black font-semibold overflow-clip">
              Apartamento 3
            </p>
            <p className="text-black text-tiny gap-2 flex items-center">
              <IconCurrentLocation /> 2.5 km
            </p>
          </div>
          <div className=" flex flex-col items-center">
            <span className="line-through">$ 1500</span>
            <Chip color="primary" variant="shadow">
              $ 999
            </Chip>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}