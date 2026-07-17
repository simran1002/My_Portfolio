import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

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
              I'm a <b className="purple">Software Development Engineer</b>{" "}
              who loves taking a hard problem and shipping a system that just
              works — at <b className="purple">NxtWave</b>, that means backend
              services processing high-volume data every day.
              <br />
              <br />
              My core tools are{" "}
              <i>
                <b className="purple">Java, Python, and TypeScript</b>
              </i>
              , backed by a strong foundation in{" "}
              <i>
                <b className="purple">SQL, C++, and system design.</b>
              </i>
              <br />
              <br />
              What gets me excited is{" "}
              <i>
                <b className="purple">distributed systems engineering</b>
              </i>{" "}
              — designing microservices, event-driven pipelines, and APIs that
              hold up under real load, with{" "}
              <b className="purple">Kafka, RabbitMQ, Redis, and PostgreSQL</b>{" "}
              doing the heavy lifting.
              <br />
              <br />
              When a product needs a face, I build it end-to-end with{" "}
              <b className="purple">Node.js, React.js, and Next.js</b> — clean,
              testable code from database to pixel.
              <br />
              <br />
              National hackathon winner ×2. Global Rank 245 in Google
              Kickstart. Always building.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="Simran Yadav"
                style={{ borderRadius: "50%", maxWidth: "300px" }}
              />
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
                  href="https://github.com/simran1002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/simran-yadav-10s/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/simranyadav_10/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="LeetCode"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/simranyadav464"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="Twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/simran.404y"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
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
