import NavbarOffLogin from "./components/NavbarLogout/navbarlogout";
import Footer from "./components/footer";
import Contact from "./routers/auth/pages/Contact";
import Destination from "./routers/auth/pages/Destination";
import Hotels from "./routers/auth/pages/Hotels";

import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"
import Register from "./routers/auth/register/Register";

import { useEffect, useState } from "react";
import { Route } from "wouter";
import NavbarOnLogin from "./components/NavbarLogin/navbarlogin";
import { AuthContext } from "./context/Auth";
import Login from "./routers/auth/login/Login";
import Posting from "./routers/auth/login/Publications/Post";
import { Error404 } from "./routers/auth/pages/404";
import Reservar from "./routers/auth/pages/detalles.reservacion";
import UsuarioPerfil from "./routers/auth/pages/perfil";
import { Post } from "./routers/auth/pages/post";
import { Home } from "./routers/home";

mapboxgl.accessToken =
	"pk.eyJ1IjoiYmFzdGFyZG9zc3MiLCJhIjoiY2xscjFiZXI2MGJ1bDNjdWd3djVxbnl5eiJ9.SsXPnXm1Na-BkCSHLmNKMQ";

function App() {
	const { setUser } = AuthContext();

	useEffect(() => {
		setUser();
	}, [setUser]);

	return (
		<>
			<span className="container min-h-screen flex flex-col mx-auto">
				{/* Si el usuario se loguea entra con avatar y se le eliminan los botones de login y register, por el contrario no */}
				<NavbarOffLogin />
				<Route path="/" component={Home} />
				<Route path="/destination" component={Destination} />
				<Route path="/hotels" component={Hotels} />
				<Route path="/contact" component={Contact} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/404" component={Error404} />

				<Route path="/reservacion" component={Reservar} />

				<Route path="/perfil" component={UsuarioPerfil} />

				<Route path="/postvivienda" component={Post} />
				<Route path="/posting" component={Posting} />

				<Footer />
			</span>
		</>
	);
}

export default App;
