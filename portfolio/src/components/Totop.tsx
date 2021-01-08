import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./Totop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-regular-svg-icons";

const ToTop = () => {
  const [state, setState] = useState<VisibilityState>("visible");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setState("visible");
    } else {
      setState("hidden");
    }
  };

  React.useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
    return () => {
      document.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      className="toTopButton"
      onClick={scrollToTop}
      style={{ visibility: state }}
      variant="primary"
    >
      <FontAwesomeIcon icon={faArrowAltCircleUp} size="lg" />
    </Button>
  );
};

export default ToTop;
