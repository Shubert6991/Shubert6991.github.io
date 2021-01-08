import React from "react";
import "./Home.css";

import ParticlesBg from "particles-bg";

import Card from "react-bootstrap/Card";
import pic from "../images/profile.jpg";

const Home = () => {
  return (
    <div className="d-flex justify-content-center divhome" id="home">
      <ParticlesBg type="cobweb" bg={true} color="#81ACD8" />
      <Card className="homecard">
        <Card.Img src={pic} />
        <Card.Body>
          <Card.Title>Shubert Alonzo</Card.Title>
          <Card.Text>
            <strong> Web Developer</strong> <br /> I'm a developer based on{" "}
            <strong> Guatemala City,Guatemala</strong>. Interested on create
            responsive and dinamic websites.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
