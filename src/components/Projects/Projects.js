import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import GithubStats from "./GithubStats";
import Particle from "../Particle";
import Reveal from "../Reveal";
import cipherchat from "../../Assets/Projects/cipherchat.svg";
import referloop from "../../Assets/Projects/referloop.svg";
import credit from "../../Assets/Projects/credit.svg";
import quiz from "../../Assets/Projects/quiz.svg";
import elearn from "../../Assets/Projects/elearn.svg";
import gallery from "../../Assets/Projects/gallery.svg";

const projects = [
  {
    imgPath: cipherchat,
    title: "CipherChat Messenger",
    description:
      "Real-time chat platform built with React, Node.js, and Socket.io, using RabbitMQ for reliable message delivery. Features end-to-end message encryption, JWT-based authentication, and hardened session management.",
    ghLink: "https://github.com/simran1002/CipherChat_Messenger",
    demoLink: "https://cipher-chat-messenger.vercel.app/register",
  },
  {
    imgPath: referloop,
    title: "Refer-Loop",
    description:
      "Referral and rewards system built with FastAPI on a RESTful architecture. Implements secure authentication and encrypted end-to-end payment flows through the Razorpay API with robust error handling.",
    ghLink: "https://github.com/simran1002/refer-loop",
  },
  {
    imgPath: credit,
    title: "Credit Approval System",
    description:
      "Node.js and Express application for managing loans and customer data, exposing REST APIs for credit eligibility checks, loan approval, and payment processing.",
    ghLink: "https://github.com/simran1002/Credit-Approval-System",
  },
  {
    imgPath: quiz,
    title: "QuizzicalQuest",
    description:
      "Quiz platform where admins create and manage quizzes while users participate, get scored, and compete through leaderboards. Built on a Node.js backend with MongoDB.",
    ghLink: "https://github.com/simran1002/QuizzicalQuest",
  },
  {
    imgPath: elearn,
    title: "E-Learning Management System",
    description:
      "Backend API for an e-learning platform covering user registration, profile management, course management, and enrollment, with role-based access control.",
    ghLink: "https://github.com/simran1002/E-Learning-Management-System",
  },
  {
    imgPath: gallery,
    title: "AuthImage Gallery",
    description:
      "Image gallery application with Google (Gmail) authentication, image upload, and in-browser cropping and editing.",
    ghLink: "https://github.com/simran1002/AuthImage-Gallery",
  },
];

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
        <GithubStats />
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project, i) => (
            <Col md={4} className="project-card" key={project.title}>
              <Reveal delay={(i % 3) * 120}>
                <ProjectCard isBlog={false} {...project} />
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
