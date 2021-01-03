import React, { useState } from "react";

import "./Projects.css";
import { CardGroup } from "react-bootstrap";
import Project from "./Project";
import { data } from "./data";
const Projects = () => {
    const [projects, setProjects] = useState(data);
    return (
      <>
        <h1 id="projects">My Projects</h1>
        <CardGroup>
          {projects.map((proj: any) => {
            console.log(proj);
            return (
              <Project
                key={proj.id}
                img={proj.img}
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