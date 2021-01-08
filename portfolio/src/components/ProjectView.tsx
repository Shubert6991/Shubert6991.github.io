import React, { useState, useEffect } from "react";
import { data } from "./data";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";

import ParticlesBg from "particles-bg";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import "./ProjectView.css";

const ProjectView = () => {
  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [img1, setImg1] = useState<any>();
  const [img2, setImg2] = useState<any>();
  const [img3, setImg3] = useState<any>();
  const [link, setLink] = useState<string>();
  const param = useParams();

  useEffect(() => {
    let p = JSON.stringify(param);
    let id = JSON.parse(p).id;
    const newProject = data.find((p) => p.id === +id);
    setName(newProject?.title);
    setDescription(newProject?.descriptionDetailed);
    setImg1(newProject?.img1);
    setImg2(newProject?.img2);
    setImg3(newProject?.img3);
    setLink(newProject?.github);
  }, [param]);

  const goBack = () => {
    window.location.href = "/";
  };
  return (
    <div className="d-flex justify-content-center divpview">
      <ParticlesBg type="cobweb" bg={true} color="#81ACD8" />
      <Card className="cardpview">
        <Card.Header className="headerpview">
          <Carousel className="carousel">
            <Carousel.Item interval={3500}>
              <Image src={img1} rounded />
            </Carousel.Item>
            <Carousel.Item interval={3500}>
              <Image src={img2} rounded />
            </Carousel.Item>
            <Carousel.Item interval={3500}>
              <Image src={img3} rounded />
            </Carousel.Item>
          </Carousel>
        </Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <a href={link}>Go to github</a>
          </Card.Text>
          <div className="btnContainer">
            <Button variant="primary" onClick={goBack}>
              <FontAwesomeIcon icon={faArrowAltCircleLeft} size="lg" /> Go Back
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectView;
