import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home, Header, Sidebar, Footer, Menu, About } from "./components";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/Menu" exact component={() => <Menu />} />
          <Route path="/About" exact component={() => <About />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
