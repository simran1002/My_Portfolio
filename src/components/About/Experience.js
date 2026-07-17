import React from "react";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Reveal from "../Reveal";

const experiences = [
  {
    company: "NxtWave",
    role: "Software Development Engineer",
    period: "Aug 2025 – Present",
    location: "Hyderabad",
    points: [
      "Building reliable, scalable backend applications and RESTful APIs in Python using Clean Architecture principles.",
      "Implemented high-volume asynchronous batch processing pipelines for large-scale data ingestion.",
      "Contributing to code reviews, unit testing, and solution design within Agile workflows.",
    ],
  },
  {
    company: "ZIGRAM",
    role: "Software Development Engineer",
    period: "Jan 2025 – Jul 2025",
    location: "Gurugram",
    points: [
      "Developed and hardened core backend APIs for an AML/Sanctions SaaS platform used by enterprise compliance teams.",
      "Orchestrated automated CI/CD pipelines with Jenkins and GitHub Actions, significantly cutting release times.",
    ],
  },
  {
    company: "AmberFlux EdgeAI Pvt Ltd",
    role: "Full Stack Developer Intern",
    period: "Jul 2024 – Dec 2024",
    location: "Remote",
    points: [
      "Designed and integrated full-stack features for scalable EdgeAI applications.",
      "Implemented an Elasticsearch-driven search mechanism, tuning queries and benchmarking latency for faster retrieval.",
    ],
  },
];

function Experience() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {experiences.map((exp) => (
        <Col md={10} key={exp.company} style={{ paddingBottom: "20px" }}>
          <Reveal>
            <Card className="quote-card-view">
              <Card.Body style={{ textAlign: "left" }}>
                <h4>
                  <span className="purple">{exp.role}</span> · {exp.company}
                </h4>
                <p style={{ marginBottom: "10px", opacity: 0.8 }}>
                  {exp.period} · {exp.location}
                </p>
                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ paddingBottom: "5px" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Reveal>
        </Col>
      ))}
    </Row>
  );
}

export default Experience;
