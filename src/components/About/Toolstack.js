import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiMysql,
  SiMacos,
  SiLinux,
  SiMariadb,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

function Toolstack() {
  const { t } = useTranslation();
  return (
    <>
      <h5 style={{ color: "#c770f0", textAlign: "center", marginBottom: "20px" }}>
        {t("tools.dev")}
      </h5>
      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
        <Col xs={4} md={2} className="tech-icons" title="VS Code">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Postman">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Slack">
          <SiSlack />
        </Col>
      </Row>

      <h5 style={{ color: "#c770f0", textAlign: "center", marginBottom: "20px" }}>
        {t("tools.db")}
      </h5>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons" title="MySQL">
          <SiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="MariaDB">
          <SiMariadb />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="macOS">
          <SiMacos />
        </Col>
        <Col xs={4} md={2} className="tech-icons" title="Linux">
          <SiLinux />
        </Col>
      </Row>
    </>
  );
}

export default Toolstack;
