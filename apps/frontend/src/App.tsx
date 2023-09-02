import NavbarOffLogin from "./components/navbar";
import Footer from "./components/footer";
import Destination from "./routers/auth/pages/Destination";
import Hotels from "./routers/auth/pages/Hotels";
import Contact from "./routers/auth/pages/Contact";

import Register from "./routers/auth/register/Register";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

import Reservar from "./routers/auth/pages/detalles.reservacion";
import UsuarioPerfil from "./routers/auth/pages/perfil";
import { Post } from "./routers/auth/pages/post";
import { Error404 } from "./routers/auth/pages/404";
import { Route } from "wouter";
import { Home } from "./routers/home";
import Posting from "./routers/auth/login/Publications/Post";
import { useEffect, useState } from "react";
import Login from "./routers/auth/login/Login";
import { Token } from "./routers/auth/types";


mapboxgl.accessToken =
  "pk.eyJ1IjoiYmFzdGFyZG9zc3MiLCJhIjoiY2xscjFiZXI2MGJ1bDNjdWd3djVxbnl5eiJ9.SsXPnXm1Na-BkCSHLmNKMQ";

function App() {
  const [token, setToken] = useState<Token | null>(null) //Hasta que no tengamos el token, lo mantendremos en pausa

  if (token) {
    sessionStorage.setItem('token', JSON.stringify(token)) //Para que podamos configurar un elemento dentro de nuestro almacenamiento, este podra ser legible y reemplazamos el token
  }
  //Para no perder tu sesion utilizamos este
  //Siempre que utilizemos el almacenamiento usaremos el useEffect
  useEffect(() => {
    if (sessionStorage.getItem('token')) { //Cuando enumeremos la sesion se llame token, luego poder hacer uso de esta
      let data = JSON.parse(sessionStorage.getItem('token') || '') //Recibira este elemento de almacenamiento
      setToken(data)
    } //De lo contrario no
  }, [])


  return (
    <>
      <span className="container min-h-screen flex flex-col mx-auto">
        <NavbarOffLogin />
        <Route path="/" component={Home} />
        <Route path="/destination" component={Destination} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/contact" component={Contact} />
        <Route path="/login">
          {(params) => (
            <Login {...params} setToken={setToken} /> //Pasamos a params como props para el component Login
          )}
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/404" component={Error404} />
        <Route path="/reservacion" component={Reservar} />

        {/* Cuando el usuario inicie sesión tendra acceso a estas rutas */}
        {token ?
          <Route path="/perfil">
            {(access) => (
              <UsuarioPerfil {...access} token={token} />
            )}
          </Route> : ""}
        {token ? <Route path="/postvivienda">
          {(access) => (
            <Post {...access} token={token} />
          )}
        </Route>
          : ""}
        {token ? <Route path="/posting">
          {(access) => (
            <Posting {...access} token={token} />
          )}
        </Route> : ""}
        <Footer />
      </span>
    </>
  );
}

export default App;
