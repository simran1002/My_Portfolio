import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CipherChat-Messenger"
              description="About
CipherChat Messenger prioritizes user privacy with advanced encryption, includes robust authentication and authorization features, enhancing overall communication security."
              ghLink="https://github.com/simran1002/CipherChat_Messenger"
              demoLink="https://cipher-chat-messenger.vercel.app/register"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Credit-Approval-System"
              description="Credit Approval System is a Node.js application built with Express.js framework for managing loans and customer data, along with an API for loan approval and payment processing."
              ghLink="https://github.com/simran1002/Credit-Approval-System"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="E-commerce-Marketplace"
              description="Developed an e-commerce platform that leverages blockchain technology for secure transactions, supply chain transparency, and decentralized product reviews."
              ghLink="https://github.com/simran1002/E-commerce-Marketplace.git"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="QuizzicalQuest"
              description="It enables admins to create quizzes, manage them efficiently, and offers users an intuitive platform for participation, scoring, and competitive engagement through leaderboards."
              ghLink="https://github.com/simran1002/QuizzicalQuest"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="E-Learning-Management-System"
              description="This backend API provides endpoints for user registration, user profile management, course management, user enrollment, and more."
              ghLink="https://github.com/simran1002/E-Learning-Management-System.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="AuthImage-Gallery"
              description="Implementing a login/signup feature using Gmail authentication, image upload & editing with in-browser cropping, and an image gallery."
              ghLink="https://github.com/simran1002/AuthImage-Gallery.git"
              demoLink=""    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
