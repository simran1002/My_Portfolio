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
            from <span className="purple"> Kanpur, Uttar Pradesh.</span>
            <br />
            I am a MERN Stack Developer.
            <br />
            I am currently pursuing Bachelor of Technology in Computer Science and Engineering.
            <br />
            I look forward to the opportunity to bring my skills and passion to your next project.
            <br />
            Apart from coding, some other activities that I love to do!
            <br />
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
