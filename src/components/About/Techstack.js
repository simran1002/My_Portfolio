import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJava,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import {
  SiTypescript,
  SiSpring,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiElasticsearch,
  SiApachekafka,
  SiRabbitmq,
  SiGraphql,
  SiExpress,
} from "react-icons/si";

const stack = [
  { icon: <DiJava />, name: "Java" },
  { icon: <DiPython />, name: "Python" },
  { icon: <CgCPlusPlus />, name: "C++" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <DiNodejs />, name: "Node.js" },
  { icon: <SiExpress />, name: "Express.js" },
  { icon: <SiSpring />, name: "Spring Boot" },
  { icon: <SiFastapi />, name: "FastAPI" },
  { icon: <DiReact />, name: "React" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <SiElasticsearch />, name: "Elasticsearch" },
  { icon: <SiApachekafka />, name: "Kafka" },
  { icon: <SiRabbitmq />, name: "RabbitMQ" },
  { icon: <SiGraphql />, name: "GraphQL" },
  { icon: <DiGit />, name: "Git" },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {stack.map((tech) => (
        <Col xs={4} md={2} className="tech-icons" key={tech.name} title={tech.name}>
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
