import React from "react";
import "./Home.css";

import ParticlesBg from "particles-bg";

import Card from "react-bootstrap/Card";
import logo from "../images/logo.png";
const Home = () => {
  return (
    <div>
      <ParticlesBg type="cobweb" bg={true} color="#81ACD8" />
      <Card>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Title>Shubert Alonzo</Card.Title>
          <Card.Text>Web Developer</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
