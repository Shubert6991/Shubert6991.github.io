import React from "react";
import { Link } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Projects.css";
import { Card } from "react-bootstrap";

const Project = (props: any) => {
  const { id, img, title, description, github } = props;
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          <Link to={`/project/${id}`}>{title}</Link>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <FontAwesomeIcon icon={faGithub} />
        <small className="text-muted">
          <a href={github}> view code on github</a>
        </small>
      </Card.Footer>
    </Card>
  );
};

export default Project;
