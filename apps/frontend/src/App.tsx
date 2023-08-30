import NavbarOffLogin from "./components/navbar";
import Footer from "./components/footer";
import Destination from "./routers/auth/pages/Destination";
import Hotels from "./routers/auth/pages/Hotels";
import Contact from "./routers/auth/pages/Contact";
import Login from "./routers/auth/login/Login";
import Register from "./routers/auth/register/Register";
import Reservar from "./routers/auth/pages/detalles.reservacion";
import UsuarioPerfil from "./routers/auth/pages/perfil";
import { Post } from "./routers/auth/pages/post";
import { Error404 } from "./routers/auth/pages/404";
import { Route } from "wouter";
import { Home } from "./routers/home";

function App() {
  return (
    <>
      <span className="container min-h-screen flex flex-col mx-auto">
        <NavbarOffLogin />
        <Route path="/" component={Home} />
        <Route path="/destination" component={Destination} />
        <Route path="/hotels" component={Hotels} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/404" component={Error404} />
        <Route path="/reservacion" component={Reservar} />
        <Route path="/postvivienda" component={Post} />   
        <Route path="/perfil" component={UsuarioPerfil} />  
        <Footer />
      </span>
    </>
  );
}

export default App;
