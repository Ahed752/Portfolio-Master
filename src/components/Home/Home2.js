import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/AhedAvatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">Software Engineer</b> based in Montreal with hands-on experience building full-stack web apps, AI-based systems, and real-time detection tools.
              <br />
              <br />
              I hold a Bachelor's degree in Software Engineering from Concordia University, and I’ve built real-world projects using 
              <i><b className="purple"> React, Next.js, C#, Node.js, and Python</b></i>.
              <br />
              <br />
              My main focus is developing user-friendly, scalable solutions — from podcast platforms and brain-signal music apps, to WiFi-based movement tracking and e-commerce systems.
              <br />
              <br />
              I'm confident working across the stack, building APIs, integrating machine learning, and using tools like 
              <i><b className="purple"> PostgreSQL, Firebase, and Stripe</b></i>.
              <br />
              <br />
              I’m currently open to new opportunities where I can keep learning, contribute to real products, and solve meaningful problems with code.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
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
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahed-memas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
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
