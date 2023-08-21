import {Card, CardBody} from "@nextui-org/react";
import NavbarOffLogin from "../components/navbar";
import logo from '../img/icono00.png'
import "../App.css";

export function Home() {

  return (
    <>
      <header>
        <NavbarOffLogin />
      </header>
      <body >
        <div className="row">
          <div className="column col-lg-4 col-md-12">
            <h1 className="titulo">
              Descubre un <br />
              nuevo mundo🌎<br />
              A  tu manera.
            </h1>
            <section>
              <p className="titulo_des">
                Start up de arriendo de distintos inmoviliarios en los que se encuentran: <br />
                casas, cabaña, departamentos, hoteles, etc.
                los cuales cuentan con calificacion hasta 5⭐️
              </p>
            </section>
            <Card className="explorer">
              <CardBody>
                <p>Make beautiful websites regardless of your design experience.</p>
              </CardBody>
            </Card>
            <div className="img col-lg-8 col-md-12">
              <img style={{ width: '35rem' }} src={logo} alt="" />
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
