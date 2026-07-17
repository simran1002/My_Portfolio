import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGithubactions,
  SiLinux,
  SiVercel,
} from "react-icons/si";

const tools = [
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiGithub />, name: "GitHub" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiAmazonaws />, name: "AWS" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiKubernetes />, name: "Kubernetes" },
  { icon: <SiJenkins />, name: "Jenkins" },
  { icon: <SiGithubactions />, name: "GitHub Actions" },
  { icon: <SiLinux />, name: "Linux" },
  { icon: <SiVercel />, name: "Vercel" },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool) => (
        <Col xs={4} md={2} className="tech-icons" key={tool.name} title={tool.name}>
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
