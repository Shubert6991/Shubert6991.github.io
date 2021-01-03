import React from "react";
import "./App.css";

// custom components
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import NavigationBar from "./components/Navbar";
import ToTop from "./components/Totop";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router>
      <NavigationBar />
      <Route exact path="/">
        <div className="App">
          <Home />
          <Projects />
          <Resume />
          <Contact />
        </div>
      </Route>
      <Route path="/test">
        <ToTop/>
      </Route>  
      <Route path="*">
      </Route>  
    </Router>
  );
}

export default App;
