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
            I'm a Software Engineer with hands-on experience in full-stack web development, QA automation, and AI integration. I specialize in building scalable, user-focused applications using modern tools like React, Node.js, and .NET.
            <br /><br />
            🎓 I earned my Bachelor's in Software Engineering from <strong>Concordia University</strong>.
            <br /><br />
            🚀 <strong>What I do best:</strong>
            <ul>
              <li>Design and implement end-to-end web apps</li>
              <li>Build RESTful APIs and connect front-end to backend</li>
              <li>Collaborate in agile teams and ship fast</li>
            </ul>

            🎯 <strong>Current Focus:</strong> I'm looking for full-time or freelance opportunities in web development, AI-assisted tools, or startup projects where I can build useful real-world solutions.
          </p>

          <hr style={{ borderTop: "1px dashed #c770f0" }} />

          <p>Outside of tech, I enjoy:</p>
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
