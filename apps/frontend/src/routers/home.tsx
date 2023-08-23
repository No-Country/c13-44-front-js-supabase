import { Filtres } from '../components/filtres';
import logo from '../img/icono00.png'
import "../App.css";

export function Home() {

  return (
    <>
      <section >
        <div className="row">
          <div className="column sm: row-auto ">
            <h1 className="titulo animate-fade-right animate-once dark:text-white">
              <span className="text-[#D41790]">Descubre</span> un <br />
              nuevo mundo🌎<br />
              A  tu manera.
            </h1>
            <section>
              <p className="titulo_des animate-fade-right animate-once dark:text-white text-lg">
                Start up de arriendo de distintos inmoviliarios en los que se encuentran: <br />
                casas, cabaña, departamentos, hoteles, etc.
                los cuales cuentan con calificacion hasta 5⭐️
              </p>
            </section>
            <Filtres/>
            <div className="img  sm">
              <img className="w-[40rem] animate-fade-left animate-once" src={logo} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
