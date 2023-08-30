import logo from "../img/icono00.png";
import { useLocation } from "wouter";
import { Filters } from "../components/filters";
import {
  Avatar,
  Button,
  Link
} from "@nextui-org/react";
import { IconArrowBigLeft, IconArrowBigRight } from "@tabler/icons-react";
import CardPropiedades from "../components/card";

export function Home() {
  const [, setLocation] = useLocation(); 

  return (
    <span className="grid gap-24 ">
      <section className="mt-10 flex flex-col items-center ">
        <div className="flex flex-row items-center justify-center ">
          <div className="flex flex-col h-full">
            <h1 className="mb-8 mt-16 max-w-xl text-6xl font-semibold animate-fade-right animate-once dark:text-white">
              <span className="text-primary">Descubre</span> un nuevo mundo 🌎
              <br /> A tu manera.
            </h1>
            <section className="max-w-xl mb-10">
              <p className="animate-fade-right animate-once dark:text-white text-lg">
                Start up de arriendo de distintos inmoviliarios en los que se
                encuentran: <br />
                casas, cabaña, departamentos, hoteles, etc. los cuales cuentan
                con calificacion hasta 5⭐️
              </p>
              <Link className="animate-fade-right animate-once cursor-pointer" onClick={() => {setLocation("/postvivienda")
              }}>Quieres subir tu propiedad??</Link>
            </section>
          </div>
          <div className="flex flex-col">
            <img
              className="max-w-[30rem] mt-[-2rem] animate-fade-left animate-once"
              src={logo}
              alt=""
            />
          </div>
        </div>
        <Filters />
      </section>
      <section>
        <div className="flex flex-col  items-center gap-10">
          <h1 className="text-primary font-bold text-4xl">
            Ofertas y descuentos
          </h1>
          <p className="max-w-md text-center">
            Descubre nuestros fantásticos descuentos por reserva anticipada y
            empieza a planificar tu viaje
          </p>
          <div className="flex gap-5 ">
            {[1, 2, 3, 4].map((value) => (
              <CardPropiedades key={value} onClick={() => {setLocation("/reservacion")
             console.log("push");
             }}/>
            ))}
          </div>

          <div className="flex gap-5">
            <Button variant="ghost" isIconOnly color="danger" aria-label="Like">
              <IconArrowBigLeft />
            </Button>
            <Button
              variant="shadow"
              isIconOnly
              color="danger"
              aria-label="Like"
            >
              <IconArrowBigRight />
            </Button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col  items-center gap-10">
          <h1 className=" font-bold text-4xl">
            Los mejores{" "}
            <span className="text-primary">planes de vacaciones</span>
          </h1>
          <p className="max-w-xs text-center text-primary">
            Planifica tus vacaciones perfectas con nuestra agencia de viajes
          </p>
          <div className="flex gap-5 items-center ">
            <Button variant="ghost" isIconOnly color="danger" aria-label="Like">
              <IconArrowBigLeft />
            </Button>
            {[1, 2, 3, 4].map((value) => (
              <CardPropiedades key={value} onClick={() => {setLocation("/reservacion")
              }}/>
            ))}
            <Button
              variant="shadow"
              isIconOnly
              color="danger"
              aria-label="Like"
            >
              <IconArrowBigRight />
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col  items-center gap-10">
        <h1 className=" text-center font-bold text-4xl max-w-md ">
          Esto es lo{" "}
          <span className="text-primary">que dicen nuestros clientes</span>
        </h1>
        <div className="grid grid-cols-3 gap-16 w-2/3">
          <div className="flex flex-col gap-12">
            <div>
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                size="lg"
              />
            </div>
            <div className="flex flex-row-reverse">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                size="md"
              />
            </div>
            <div className="flex justify-center">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                className="w-16 h-16 text-large"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              className="w-20 h-20 text-large"
            />
          </div>
          <div className="flex flex-col gap-12">
            <div className="flex flex-row-reverse">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                size="lg"
              />
            </div>
            <div className="flex justify-center mr-10">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                className="w-16 h-16 text-large"
              />
            </div>
            <div className="flex justify-center ml-16">
              <Avatar
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                size="md"
              />
            </div>
          </div>
        </div>
      </section>
    </span>
  );
}
