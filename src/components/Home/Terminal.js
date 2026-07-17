import React, { useState, useRef, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WELCOME = [
  "Welcome to simran-shell v1.0.0",
  "Type 'help' to see available commands.",
];

function Terminal() {
  const navigate = useNavigate();
  const [history, setHistory] = useState(
    WELCOME.map((line) => ({ type: "out", text: line }))
  );
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const commands = {
    help: () => [
      "Available commands:",
      "  whoami       who is Simran?",
      "  skills       languages & technologies",
      "  experience   where I've worked",
      "  projects     open the projects page",
      "  resume       open my resume",
      "  contact      how to reach me",
      "  social       find me elsewhere",
      "  clear        clear the terminal",
      "  sudo hire-me you know you want to",
    ],
    whoami: () => [
      "Simran Yadav — Software Development Engineer @ NxtWave, Hyderabad.",
      "I build reliable, scalable backend systems and high-volume data pipelines.",
    ],
    skills: () => [
      "Languages:    Java · Python · C++ · JavaScript · TypeScript · SQL",
      "Backend:      Spring Boot · FastAPI · Node.js · Express · REST · GraphQL",
      "Data:         PostgreSQL · MongoDB · Redis · Elasticsearch",
      "Distributed:  Kafka · RabbitMQ · async & batch processing",
      "DevOps:       AWS · Docker · Kubernetes · Jenkins · GitHub Actions",
    ],
    experience: () => [
      "2025–now   NxtWave       SDE — Python backend services, Clean Architecture",
      "2025       ZIGRAM        SDE — AML/Sanctions SaaS APIs, CI/CD pipelines",
      "2024       AmberFlux     Full Stack Intern — EdgeAI, Elasticsearch search",
    ],
    contact: () => [
      "Email: simranyadav464@gmail.com",
      "Opening your mail client...",
    ],
    social: () => [
      "GitHub:    github.com/simran1002",
      "LinkedIn:  linkedin.com/in/simran-yadav-10s",
      "LeetCode:  leetcode.com/u/simranyadav_10",
    ],
    projects: () => ["Opening projects..."],
    resume: () => ["Opening resume..."],
    ls: () => ["skills/  experience/  projects/  resume.pdf  secrets.txt"],
    "cat secrets.txt": () => ["Nice try. Permission denied. 😏"],
    vim: () => ["You are now trapped in vim. Just kidding — this is my shell."],
    exit: () => ["There is no escape. Scroll on. 🚀"],
    coffee: () => ["☕ Brewing... deploy successful."],
    "sudo hire-me": () => [
      "[sudo] password for visitor: ********",
      "Access granted! Drafting an email to simranyadav464@gmail.com...",
    ],
  };

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase();
    const entries = [{ type: "in", text: raw }];
    if (cmd === "") {
      setHistory((h) => [...h, ...entries]);
      return;
    }
    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    const handler = commands[cmd];
    if (handler) {
      entries.push(...handler().map((text) => ({ type: "out", text })));
      if (cmd === "projects") setTimeout(() => navigate("/project"), 600);
      if (cmd === "resume") setTimeout(() => navigate("/resume"), 600);
      if (cmd === "contact" || cmd === "sudo hire-me")
        setTimeout(() => {
          window.location.href =
            "mailto:simranyadav464@gmail.com?subject=Let%27s%20work%20together";
        }, 800);
    } else {
      entries.push({
        type: "out",
        text: `command not found: ${cmd} — try 'help'`,
      });
    }
    setHistory((h) => [...h, ...entries]);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      run(input);
      if (input.trim()) setCmdHistory((c) => [input, ...c]);
      setHistoryIndex(-1);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIndex + 1, cmdHistory.length - 1);
      if (cmdHistory[next]) {
        setHistoryIndex(next);
        setInput(cmdHistory[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = historyIndex - 1;
      setHistoryIndex(next);
      setInput(next >= 0 ? cmdHistory[next] : "");
    }
  };

  return (
    <Container fluid className="terminal-section">
      <Container>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Talk is cheap, <strong className="purple">type a command</strong>
        </h1>
        <div
          className="terminal-window"
          onClick={() => inputRef.current && inputRef.current.focus()}
        >
          <div className="terminal-titlebar">
            <span className="terminal-dot red" />
            <span className="terminal-dot yellow" />
            <span className="terminal-dot green" />
            <span className="terminal-title">visitor@simran: ~</span>
          </div>
          <div className="terminal-body" ref={bodyRef}>
            {history.map((line, i) =>
              line.type === "in" ? (
                <div key={i} className="terminal-line">
                  <span className="terminal-prompt">visitor@simran:~$</span>{" "}
                  {line.text}
                </div>
              ) : (
                <div key={i} className="terminal-line terminal-output">
                  {line.text}
                </div>
              )
            )}
            <div className="terminal-line terminal-input-line">
              <span className="terminal-prompt">visitor@simran:~$</span>
              <input
                ref={inputRef}
                className="terminal-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                spellCheck="false"
                autoComplete="off"
                aria-label="Terminal input"
              />
            </div>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Terminal;
