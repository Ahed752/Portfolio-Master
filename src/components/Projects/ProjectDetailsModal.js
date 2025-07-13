import React from "react";
import { Modal, Button } from "react-bootstrap";

function ProjectDetailsModal({ show, onHide, details }) {
  if (!details) return null;

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      contentClassName="custom-modal-content"
    >
      <Modal.Header closeButton className="custom-modal-header">
        <Modal.Title style={{ color: "#c770f0", fontWeight: "bold" }}>
          {details.title || "Project Details"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="custom-modal-body">
        <h5 style={{ color: "#c770f0" }}>🛠 Tech Stack:</h5>
        <ul style={{ color: "white" }}>
          {details.techStack?.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>

        <h5 style={{ color: "#c770f0" }}>🎓 Skills Learned:</h5>
        <ul style={{ color: "white" }}>
          {details.skills?.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        {details.demoVideoUrl && (
          <>
            <h5 style={{ color: "#c770f0" }}>📽️ Demo Video:</h5>
            <video width="100%" controls style={{ borderRadius: "12px" }}>
              <source src={details.demoVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
        )}
      </Modal.Body>

      <Modal.Footer className="custom-modal-footer">
        <Button variant="outline-light" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectDetailsModal;
