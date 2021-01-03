import React from "react";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Projects.css";
import { Card } from "react-bootstrap";
const Project = (props: any) => {
  const { img, title, description, github } = props;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          <Link to="/test">{title}</Link>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <FontAwesomeIcon icon={faGithub} />
        <small className="text-muted">
          <a href={github}> see code on github</a>
        </small>
      </Card.Footer>
    </Card>
  );
};

export default Project;
