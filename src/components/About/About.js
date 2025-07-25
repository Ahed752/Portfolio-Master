import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
// import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  const { t } = useTranslation();
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1
              style={{ fontSize: "2.1em", paddingBottom: "20px" }}
              dangerouslySetInnerHTML={{ __html: t("about.know") }}
            />
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1
          className="project-heading"
          dangerouslySetInnerHTML={{ __html: t("about.skillsetHeading") }}
        />

        <Techstack />

        <h1
          className="project-heading"
          dangerouslySetInnerHTML={{ __html: t("about.toolsHeading") }}
        />
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
