import React from "react";
import "./App.css";

// custom components
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Home />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
