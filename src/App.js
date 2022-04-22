import "./App.css";
import Inicio from "./components/Inicio";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Proyectos from "./components/Proyectos";
import Header from "./components/Header";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Header/>
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/projects" component={Proyectos} />
          <Route path="/contacto" component={Contact}/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
