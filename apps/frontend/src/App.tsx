import "./App.css";

import { Route } from "wouter";
import { Home } from "./routers/home";

function App() {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
}

export default App;
