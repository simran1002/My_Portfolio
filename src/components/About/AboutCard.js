import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Simran Yadav </span>
            from <span className="purple"> Kanpur, Uttar Pradesh</span>,
            currently based in{" "}
            <span className="purple">Hyderabad, India.</span>
            <br />
            <br />
            I am a Software Development Engineer at{" "}
            <span className="purple">NxtWave</span>, where I build scalable
            backend services and high-volume data pipelines.
            <br />
            <br />
            I completed my Bachelor of Technology in Computer Science and
            Engineering (AI/ML) from AKGEC, Ghaziabad in 2025.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Simran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
