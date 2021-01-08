import React from "react";
import "./App.css";

// custom components
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import NavigationBar from "./components/Navbar";
import ToTop from "./components/Totop";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProjectView from "./components/ProjectView";

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
          <ToTop />
        </div>
      </Route>
      <Route path="/test">
        <ToTop />
      </Route>
      <Route path='/project/:id' children={<ProjectView />}></Route>
      <Route path="*"></Route>
    </Router>
  );
}

export default App;
