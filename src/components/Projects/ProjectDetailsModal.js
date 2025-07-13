import React from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";

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
        {details.projectSummary && (
          <>
            <h5 style={{ color: "#c770f0" }}>🧾 Overview:</h5>
            <p style={{ color: "white" }}>{details.projectSummary}</p>
          </>
        )}

        <Row>
          {/* Left Column */}
          <Col md={6}>
            {details.techStack && (
              <>
                <h5 style={{ color: "#c770f0" }}>🛠 Tech Stack:</h5>
                <ul style={{ color: "white" }}>
                  {details.techStack.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </>
            )}

            {details.features && (
              <>
                <h5 style={{ color: "#c770f0" }}>✨ Features:</h5>
                <ul style={{ color: "white" }}>
                  {details.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </Col>

          {/* Right Column */}
          <Col md={6}>
            {details.skills && (
              <>
                <h5 style={{ color: "#c770f0" }}>🎓 Skills Learned:</h5>
                <ul style={{ color: "white" }}>
                  {details.skills.map((skill, idx) => (
                    <li key={idx}>{skill}</li>
                  ))}
                </ul>
              </>
            )}

            {details.challengesSolved && (
              <>
                <h5 style={{ color: "#c770f0" }}>🚧 Challenges Solved:</h5>
                <ul style={{ color: "white" }}>
                  {details.challengesSolved.map((challenge, idx) => (
                    <li key={idx}>{challenge}</li>
                  ))}
                </ul>
              </>
            )}
          </Col>
        </Row>

        {/* Video at the bottom
        <div className="mt-4">
          <h5 style={{ color: "#c770f0" }}>📽️ Demo Video:</h5>
          {details.demoVideoUrl ? (
            <video width="100%" controls style={{ borderRadius: "12px" }}>
              <source src={details.demoVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div
              style={{
                background: "#1f1f1f",
                height: "280px",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#888",
              }}
            >
              <p>No demo video available.</p>
            </div>
          )}
        </div> */}
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
