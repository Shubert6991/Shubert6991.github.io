import React, { useState, useEffect } from "react";

import "./Projects.css";
import { CardGroup } from "react-bootstrap";
import Project from "./Project";
import { data } from "./data";
const Projects = () => {
    const [projects, setProjects] = useState(data);
    
    useEffect(() => {
      setProjects(data);
    }, []);

    return (
      <>
        <h1 id="projects">My Projects</h1>
        <CardGroup>
          {projects.map((proj: any) => {
            return (
              <Project
                key={proj.id}
                id={proj.id}
                img={proj.portada}
                title={proj.title}
                description={proj.description}
                github={proj.github}
              />
            );
          })}
        </CardGroup>
      </>
    );
}

export default Projects;