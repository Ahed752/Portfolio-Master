import React from "react";
import { Modal, Button, Carousel, Row, Col } from "react-bootstrap";

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
        <Carousel>
          {/* Slide 1: Overview */}
          <Carousel.Item className="carousel-item-custom">
            <h5 style={{ color: "#c770f0" }}>🧾 Overview:</h5>
            <p style={{ color: "white" }}>{details.projectSummary}</p>

            <Row>
              <Col md={6}>
                <h5 style={{ color: "#c770f0" }}>🛠 Tech Stack:</h5>
                <ul style={{ color: "white" }}>
                  {details.techStack.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
              </Col>

              <Col md={6}>
                <h5 style={{ color: "#c770f0" }}>✨ Features:</h5>
                <ul style={{ color: "white" }}>
                  {details.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Carousel.Item>

          {/* Slide 2: Scenario */}
          <Carousel.Item className="carousel-item-custom">
            <h5 style={{ color: "#c770f0" }}>💡 Scenario:</h5>
            <p style={{ color: "white" }}>{details.scenario}</p>
          </Carousel.Item>

          {/* Slide 3: Solution/Logic */}
          <Carousel.Item className="carousel-item-custom">
            <h5 style={{ color: "#c770f0" }}>🔧 Solution & Logic:</h5>
            <p style={{ color: "white" }}>{details.solution}</p>
          </Carousel.Item>

          {/* Slide 4: Code Snippet */}
          <Carousel.Item className="carousel-item-custom">
            <h5 style={{ color: "#c770f0" }}>💻 Code Snippet:</h5>
            <pre style={{ color: "white", background: "#1f1f1f", padding: "10px", borderRadius: "10px" }}>
              {details.codeSnippet || `// Add your code snippet here`}
            </pre>
          </Carousel.Item>

          {/* Slide 5: Skills Learned */}
          <Carousel.Item className="carousel-item-custom">
            <h5 style={{ color: "#c770f0" }}>🎓 Skills Learned:</h5>
            <ul style={{ color: "white" }}>
              {details.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </Carousel.Item>

          {/* Slide 6: Challenges Solved */}
          <Carousel.Item className="carousel-item-custom">
            <h5 style={{ color: "#c770f0" }}>🚧 Challenges Solved:</h5>
            <ul style={{ color: "white" }}>
              {details.challengesSolved.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </Carousel.Item>

          <Carousel.Item className="carousel-item-custom">
  <h5 style={{ color: "#c770f0" }}>🛠 System Architecture:</h5>
  <p style={{ color: "white" }}>{details.systemArchitecture}</p>
</Carousel.Item>

<Carousel.Item className="carousel-item-custom">
  <h5 style={{ color: "#c770f0" }}>🚀 Performance Optimization:</h5>
  <p style={{ color: "white" }}>{details.performanceOptimization}</p>
</Carousel.Item>

        </Carousel>
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
