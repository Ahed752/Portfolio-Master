import React from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiCsharp,
  SiPostgresql,
} from "react-icons/si";

function Techstack() {
  const { t } = useTranslation();
  return (
    <>
      <h5 style={{ color: "#c770f0", textAlign: "center", marginBottom: "20px" }}>
        {t("tech.core")}
      </h5>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons" title="JavaScript">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Python">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Java">
          <DiJava />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="C#">
          <SiCsharp />
        </Col>
      </Row>

      <h5 style={{ color: "#c770f0", textAlign: "center", marginBottom: "20px" }}>
        {t("tech.frameworks")}
      </h5>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons" title="React">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Next.js">
          <SiNextdotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Node.js">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Firebase">
          <SiFirebase />
        </Col>
      </Row>

      <h5 style={{ color: "#c770f0", textAlign: "center", marginBottom: "20px" }}>
        {t("tech.databases")}
      </h5>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" title="MongoDB">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
          <SiPostgresql />
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
