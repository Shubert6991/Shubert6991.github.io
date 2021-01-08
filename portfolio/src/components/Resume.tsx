import React from 'react';
import Button from "react-bootstrap/Button";

const Resume = () => {
    const Download = () => {
      const element = document.createElement("a");
      element.href =
        "https://drive.google.com/file/d/1uKWgBAKvcSVolsnvaw_W74aC8qeriUfD/view?usp=sharing";
      element.download = "Curriculum.pdf";
      document.body.appendChild(element);
      element.click();
    };

    return (
      <>
        <h3 id="resume">Resume</h3>
        <Button variant="info" onClick={Download}>
          Download PDF
        </Button>
      </>
    );
}

export default Resume;