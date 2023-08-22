import "./App.css";
import NavbarOffLogin from "./components/navbar";
import { Route } from "wouter";
import { Home } from "./routers/home";

function App() {
  return (
    <>
      <NavbarOffLogin />
      <Route path="/" component={Home} />
    </>
  );
}

export default App;
