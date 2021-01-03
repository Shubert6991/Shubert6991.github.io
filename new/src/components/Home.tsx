import React from "react";
import "./Home.css";

import ParticlesBg from "particles-bg";

import Card from "react-bootstrap/Card";
import pic from "../images/me.jpg";

const Home = () => {
  return (
    <div className="d-flex justify-content-center divhome" id="home">
      <ParticlesBg type="cobweb" bg={true} color="#81ACD8" />
      <Card className="homecard">
        <Card.Img src={pic} />
        <Card.Body>
          <Card.Title>Shubert Alonzo</Card.Title>
          <Card.Text>
            <h6>Web Developer</h6>
            <p>
              
              
              I'm a developer based on 
              
              
              <strong> Guatemala City,Guatemala</strong>. Interested on create
             
             
              responsive and dinamic websites.
            
            
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
