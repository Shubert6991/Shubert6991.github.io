import React from "react";
import "./Home.css";

import ParticlesBg from "particles-bg";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import pic from "../images/me.jpg";

const Home = () => {
  return (
    <div className="d-flex justify-content-center divhome">
      <ParticlesBg type="cobweb" bg={true} color="#81ACD8" />
      <Card className="homecard">
        <Card.Img src={pic}   />
        <Card.Body>
          <Card.Title>Shubert Alonzo</Card.Title>
          <Card.Text>Web Developer</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
