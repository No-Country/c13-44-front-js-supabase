import "./App.css";
import NavbarOffLogin from "./components/navbar";
import Destination from "./routers/auth/pages/Destination";
import Hotels from "./routers/auth/pages/Hotels";
import Contact from "./routers/auth/pages/Contact";
import Login from "./routers/auth/login/Login";
import Register from "./routers/auth/register/Register";
import NavbarOffLogin from "./components/navbar";
import { Route } from "wouter";
import { Home } from "./routers/home";

function App() {
  return (
    <>
      <NavbarOffLogin />
      <Route path="/" component={Home} />
      <Route path="/destination" component={Destination} />
      <Route path="/hotels" component={Hotels} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </>
  );
}

export default App;
