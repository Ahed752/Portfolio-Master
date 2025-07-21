import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/AhedAvatar.png";
import Tilt from "react-parallax-tilt";
import { useTranslation } from "react-i18next";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";



function Home2() {
  const { t } = useTranslation();
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}
                dangerouslySetInnerHTML={{ __html: t("home2.intro") }}
            />
            <p className="home-about-body"
               dangerouslySetInnerHTML={{ __html: t("home2.content") }}
            />

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p dangerouslySetInnerHTML={{ __html: t("home2.connect") }} />
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Ahed752"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/AhedMimas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahed-memas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
              <a
                href="mailto:ahed.mimas@gmai.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <SiGmail />
              </a>
            </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
