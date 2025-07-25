import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import ProjectDetailsModal from "./ProjectDetailsModal";

function ProjectCards(props) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              Demo
            </Button>
          )}

          {/* Show more details button */}
          {props.details && (
            <Button
              variant="info"
              style={{ marginLeft: "10px" }}
              onClick={() => setModalShow(true)}
            >
              More Details
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* Modal */}
      <ProjectDetailsModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        details={props.details}
      />
    </>
  );
}

export default ProjectCards;
