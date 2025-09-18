import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../../../src/style.css";
import palindrome, { description as palindromeDesc } from "../PlayGround/demos/palindrome";
import balancedParentheses, { description as bpDesc } from "../PlayGround/demos/balancedParentheses";
import twoSum, { description as tsDesc } from "../PlayGround/demos/twoSum";




function Playground() {
  const [demo, setDemo] = useState("palindrome");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const demosMap = {
  palindrome: { fn: palindrome, desc: palindromeDesc },
  balancedParentheses: { fn: balancedParentheses, desc: bpDesc },
  twoSum: { fn: twoSum, desc: tsDesc },
};

function runDemo() {
  if (demosMap[demo]) {
    setOutput(demosMap[demo].fn(input));
  } else {
    setOutput("⚠️ Demo not found.");
  }
}

const currentDesc = demosMap[demo]?.desc || "No description available.";



  function resetDemo() {
    setInput("");
    setOutput("");
  }

  return (
    <section className="home-section playground-section" aria-label="Playground">
      <Container className="home-content">
        <Row>
          <Col md={8}>
            <h1 className="heading playground-heading">Playground</h1>
            <p className="home-about-description playground-subtitle">
              Small, interactive demos to showcase quick algorithms and UI pieces.
            </p>

            <div className="playground-card">
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  runDemo();
                }}
              >
                {/* Demo selector */}
                <Form.Group className="mb-3" controlId="selectDemo">
                  <Form.Label className="playground-label">Select Demo</Form.Label>
                    <Form.Select
                    value={demo}
                    onChange={(e) => setDemo(e.target.value)}
                    className="playground-select"
                    >
                    <option value="palindrome">Palindrome</option>
                    <option value="balancedParentheses">Balanced Parentheses</option>
                    <option value="twoSum">Two Sum</option>
                    </Form.Select>

                </Form.Group>

                {/* Input */}
                <Form.Group className="mb-3" controlId="demoInput">
                  <Form.Label className="playground-label">Input</Form.Label>
                  <Form.Control
                    className="playground-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type text here..."
                  />
                </Form.Group>

                {/* Buttons */}
                <div className="d-flex gap-2">
                  <Button
                    type="button"
                    onClick={runDemo}
                    className="playground-btn"
                  >
                    Run
                  </Button>
                  <Button
                    type="button"
                    variant="outline-light"
                    onClick={resetDemo}
                  >
                    Reset
                  </Button>
                </div>
              </Form>

              {/* Output */}
              {output && (
                <div
                  className="playground-output mt-3"
                  role="status"
                  aria-live="polite"
                >
                  {output}
                </div>
              )}
            </div>
          </Col>

            <Col md={4} className="playground-side">
            <div className="playground-info">
                <h3 className="playground-info-title">About this Demo</h3>
                <p className="home-about-body">{currentDesc}</p>
            </div>
            </Col>

        </Row>
      </Container>
    </section>
  );
}

export default Playground;
