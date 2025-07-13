import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{ textAlign: "justify" }}>
          <p>
            Hi, I'm <span className="purple">Ahed Memas</span> from <span className="purple">Montreal, Canada</span>.
            <br /><br />
            I’m a curious and driven software engineer who enjoys solving real-world problems through code. From designing full-stack platforms to experimenting with AI tools and automation — I build with purpose and clarity.
            <br /><br />
            I graduated with a Bachelor's in Software Engineering from <strong>Concordia University</strong>, and have worked on several impactful projects involving:
          </p>

          <ul>
            <li>Smart podcasting platforms with AI transcription</li>
            <li>Music generation from simulated brain signals</li>
            <li>Real-time facial emotion and mask detection</li>
            <li>Custom job-matching and e-commerce tools</li>
          </ul>

          <p>
            My goal is to always deliver code that feels thoughtful, useful, and maintainable.
          </p>

          <hr style={{ borderTop: "1px dashed #c770f0" }} />

          <p>Outside the codebase, I recharge by:</p>
          <ul>
            <li className="about-activity"><ImPointRight /> Playing Video Games</li>
            <li className="about-activity"><ImPointRight /> Watching Movies & Series</li>
            <li className="about-activity"><ImPointRight /> Working Out</li>
            <li className="about-activity"><ImPointRight /> Travelling</li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
