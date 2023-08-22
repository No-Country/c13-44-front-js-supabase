import { Card, CardBody, Button } from "@nextui-org/react";
import { IconCalendarEvent, IconMapPin } from '@tabler/icons-react';
import logo from '../img/icono00.png'
import "../App.css";

export function Home() {

  return (
    <>
      <section>
        <div className="row">
          <div className="column ">
            <h1 className="titulo animate-fade-right animate-once">
              Descubre un <br />
              nuevo mundo🌎<br />
              A  tu manera.
            </h1>
            <section>
              <p className="titulo_des animate-fade-right animate-once">
                Start up de arriendo de distintos inmoviliarios en los que se encuentran: <br />
                casas, cabaña, departamentos, hoteles, etc.
                los cuales cuentan con calificacion hasta 5⭐️
              </p>
            </section>
            <Card className="explorer bg-[#D41790] animate-fade-right animate-once">
              <CardBody className="flex-row">
                  <IconCalendarEvent className="w-10 h-10"/>
                <Button className="btn" variant="bordered" >
                  <h1>Seleccione una fecha</h1>
                </Button>
                <IconMapPin className="w-10 h-10"/>
                <Button className="btn" variant="bordered" >
                  <h1>Seleccione un destino</h1>
                </Button>
              </CardBody>
            </Card>
            <div className="img ">
              <img className="animate-fade-left animate-once" style={{ width: '40rem' }} src={logo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
