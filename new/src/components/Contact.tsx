import React from 'react';
import Card from "react-bootstrap/Card";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Contact = () => {
    return (
      <Card bg={"dark"} text={"white"} id="footer">
        <Card.Header>
          <Card.Title>Contact Info</Card.Title>
          <ul>
            <li>
              <a href="https://github.com/Shubert6991">
                <FontAwesomeIcon icon={faGithub} size="lg" /> Github User
              </a>
            </li>
            <li>
              <a href="mailto:alonzoshubert1996@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="lg" /> Gmail
              </a>
            </li>
            <li>
              <a href="mailto:shubert1996@protonmail.com">
                <FontAwesomeIcon icon={faEnvelope} size="lg" /> ProtonMail
              </a>
            </li>
          </ul>
        </Card.Header>
      </Card>
    );
}

export default Contact;