import React, { useEffect } from "react";
import ShinyText from "./ShinyText";
import DecryptText from "./DecryptText";
import ParticlesBackground from "./ParticlesBackground";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FaJava,
  FaReact,
  FaGitAlt,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaServer,
  FaUniversity,
  FaLanguage,
  FaCertificate,
  FaDownload
} from "react-icons/fa";
import {
  SiSpringboot,
  SiMongodb,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiFigma,
  SiCoursera
} from "react-icons/si";
import { Slide, Fade } from "react-awesome-reveal";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const skillIconsMap = {
  Java: <FaJava size={28} color="#007396" />,
  "Spring Boot": <SiSpringboot size={28} color="#6DB33F" />,
  MongoDB: <SiMongodb size={28} color="#47A248" />,
  React: <FaReact size={28} color="#61DAFB" />,
  HTML: <FaHtml5 size={28} color="#E34F26" />,
  CSS: <FaCss3Alt size={28} color="#1572B6" />,
  Git: <FaGitAlt size={28} color="#F05032" />,
  "REST API": <FaServer size={28} color="#6c757d" />,
  Django: <SiDjango size={28} color="#092E20" />,
  MySQL: <SiMysql size={28} color="#4479A1" />,
  PostgreSQL: <SiPostgresql size={28} color="#336791" />,
  Linux: <FaLinux size={28} color="#FCC624" />,
  Figma: <SiFigma size={28} color="#F24E1E" />,
};

const skillsByDomain = {
  Frontend: ["HTML", "CSS", "React", "Figma"],
  Backend: ["Java", "Spring Boot", "Django", "REST API"],
  Database: ["MongoDB", "MySQL", "PostgreSQL"],
  "Dev Tools": ["Git"],
  "Operating Systems": ["Linux"],
};

const education = [
  {
    year: "2020-2021",
    degree: "SSC Board",
    institution: "Narayana High School, Nellore",
    percentage: "98.1%",
  },
  {
    year: "2021-2023",
    degree: "Intermediate (MPC)",
    institution: "Narayana Junior College, Nellore",
    percentage: "88.8%",
  },
  {
    year: "2023-Present",
    degree: "B.Tech in Computer Science",
    institution: "KL University, Guntur, Andhra Pradesh",
    percentage: "9.74 (CGPA)",
  },
];

const projects = [
  {
    title: "Property Sales and Rental Management",
    tech: "Django, Bootstrap, SQLite,HTML,CSS",
    desc: "Developed a full-stack property management platform using Django, Bootstrap, and SQLite with role-based login, secure authentication, property search, filtering, booking system, and an integrated chatbot for user interaction.",
    videoUrl: "https://youtu.be/8FuDBcd2YFo?si=IGaS218k4dshiakq",
    codeUrl: "https://github.com/phanee27/PSRM",
    liveUrl: "https://psrm.pythonanywhere.com",
  },
  {
    title: "Asthetica - Online Art Gallery",
    tech: "React, Spring Boot, MySQL, HTML, CSS ",
    desc: "Developed a full-stack platform using React.js, Spring Boot, and MySQL for artists to upload, manage, and sell artwork, featuring artwork categorization, purchase functionality, secure user authentication, and a responsive UI for a smooth user experience.",
    videoUrl: "https://youtu.be/8FuDBcd2YFo?si=IGaS218k4dshiakq",
    codeUrl: "https://github.com/phanee27/Asthetica",
    liveUrl: "https://asthetica.vercel.app",
  },
  {
    title: "The News Aggregator",
    tech: "React, HTML, CSS, Material UI ",
    desc: "Developed a responsive News Aggregator web app using React, HTML, CSS, and Material UI, integrated with the NewsAPI for real-time news updates. Implemented domain-based filtering (e.g., sports, politics) to enhance user experience and ensure organized content delivery, all within a clean and intuitive UI.",
    videoUrl: "https://youtu.be/8FuDBcd2YFo?si=IGaS218k4dshiakq",
    codeUrl: "https://github.com/phanee27/NewsAggregator",
    liveUrl: "",
  },
];

const certifications = [
  {
    title: "Lingua Skills Certification",
    issuedBy: "Cambridge English",
    year: "2025",
    credentialUrl: "https://drive.google.com/file/d/1VJJy5e-pl4iXSEMznHM2r5xnWqZUy3Uw/view",
    icon: <FaUniversity size={32} color="#47A248" />,
  },
  {
    title: "Programming in Java",
    issuedBy: "NPTEL",
    year: "Jan-Apr 2024",
    credentialUrl: "https://drive.google.com/file/d/17cUcLp4R6h8BV8cDHHXP3VUBdd5WqHaQ/view",
    icon: <FaLanguage size={32} color="#2A73CC" />,
  },
  {
    title: "Salesforce Certified AI Associate",
    issuedBy: "Trailhead",
    year: "Oct 30, 2024",
    credentialUrl: "https://drive.google.com/file/d/17cUcLp4R6h8BV8cDHHXP3VUBdd5WqHaQ/view",
    icon: <FaCertificate size={32} color="#2A73CC" />,
  },
];

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ParticlesBackground
        canvasStyle={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
          width: 0,
          height: 0,
        }}
      />

      <Navbar expand="lg" className="custom-navbar mt-4">
        <Container>
          <Navbar.Brand href="#intro" className="text-white fw-bold">
            Paneendra's Portfolio
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              {["about", "skills", "education", "projects", "certifications","contact"].map(
                (id) => (
                  <Nav.Link
                    key={id}
                    href={`#${id}`}
                    className="nav-link-custom"
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </Nav.Link>
                )
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="scroll-container">
        <Slide direction="up" triggerOnce>
          <section id="intro" className="section intro-section">
            <div className="intro-content">
              <h1>
                Hello, I'm{" "}
                <span className="highlight">
                  <DecryptText text="phanee" speed={40} delay={300} />
                </span>
              </h1>

              <p className="intro-sub">
                Aspiring Full-Stack Developer passionate about building
                impactful solutions. Open to exciting collaborations and team
                projects.
              </p>
              <div className="social-links mb-4">
                <a
                  href="https://github.com/phanee27"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub size={28} color="#fff" />
                </a>
                <a
                  href="https://linkedin.com/in/phanee27"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin size={28} color="#0A66C2" />
                </a>
                <a
                  href="https://www.instagram.com/k_v_phaneendra"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size={28} color="#E4405F" />
                </a>
              </div>
              <div className="intro-buttons">
                <a href="#projects" className="btn btn-outline-info me-3">
                  View Projects
                </a>
                <a href="#contact" className="btn btn-outline-light">
                  Contact Me
                </a>
                <a
  href="/Resume.pdf"
  download
  className="btn btn-outline-light ms-3"
  style={{ borderRadius: "30px" }}
>
  <FaDownload /> Resume
</a>

              </div>
            </div>
          </section>
        </Slide>

        <Fade triggerOnce>
          <section id="about" className="section about-section">
            <div className="about-image-wrapper">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E03AQGa0qNysmoOkA/profile-displayphoto-shrink_400_400/B4EZRLzTCCGYAg-/0/1736438527232?e=1754524800&v=beta&t=D97DI27WGppxYAUxqNNunGBWO9kWq7OKV-Isal3T92k"
                alt="Paneendra"
                className="about-image"
              />
            </div>
            <div className="about-text">
              <h2>
                <ShinyText>About Me</ShinyText>
              </h2>
              <p>
                Hello, I’m Paneendra, currently pursuing a degree in Computer
                Science. I specialize in full-stack development and have a
                strong passion for solving complex problems.
              </p>
            </div>
          </section>
        </Fade>

        <Fade triggerOnce>
          <section id="skills" className="section">
            <h2>Skills</h2>
            <div className="domain-grid">
              {Object.entries(skillsByDomain).map(([domain, skillList]) => (
                <div key={domain} className="domain-section">
                  <h4 className="domain-title">{domain}</h4>
                  <div className="skills-grid">
                    {skillList.map((skill) => (
                      <div key={skill} className="skill-card">
                        {skillIconsMap[skill]}
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Fade>

        <Slide direction="left" triggerOnce>
          <section id="education" className="section education-section">
            <h2>Education</h2>
            <div className="timeline">
              {education.map((edu, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="circle-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.degree}</h4>
                    <p>{edu.institution}</p>
                    <span>{edu.year}</span>
                    <span style={{ marginLeft: "15px", fontWeight: "bold" }}>
                      Percentage: {edu.percentage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Slide>

        <Slide direction="right" triggerOnce>
          <section id="projects" className="section projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
              {projects.map((p, i) => (
                <div key={i} className="project-card">
                  {p.videoUrl.startsWith("https://") ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${
                        p.videoUrl.split("/").pop().split("?")[0]
                      }?autoplay=1&mute=1`}
                      className="project-video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={p.title}
                    />
                  ) : null}
                  <h4>{p.title}</h4>
                  <div className="tech-badges">
                    {p.tech.split(",").map((techName, idx) => (
                      <span key={idx} className="tech-badge">
                        {techName.trim()}
                      </span>
                    ))}
                  </div>
                  <p>{p.desc}</p>
                  <div className="project-buttons">
                    <a
                      href={p.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light"
                    >
                      Code
                    </a>
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-info"
                    >
                      Live
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Slide>

        <Slide direction="up" triggerOnce>
  <section id="certifications" className="section">
    <h2>Certifications</h2>
    <div className="cert-list">
      {certifications.map((cert, idx) => (
        <div key={idx} className="cert-card">
          <div className="cert-header">
            {cert.icon && <div className="cert-icon">{cert.icon}</div>}
            <div>
              <h4>{cert.title}</h4>
              <p>
                <strong>{cert.issuedBy}</strong> — {cert.year}
              </p>
            </div>
          </div>
          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-light btn-sm mt-2"
          >
            View Credential
          </a>
        </div>
      ))}
    </div>
  </section>
</Slide>


        <Fade triggerOnce>
          <section id="contact" className="section contact-card">
            <h2>Contact</h2>
            <form
              action="https://formsubmit.co/2300030317cseelge@gmail.com"
              method="POST"
              className="contact-form"
            >
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Questions / Comments
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thanks for contacting me! I'll get back to you soon."
              />

              <button type="submit" className="btn btn-outline-info mt-3">
                Send Message
              </button>
            </form>
          </section>
        </Fade>
      </div>

      <footer className="footer-section bg-dark text-light py-4">
        <div className="container footer-content">
          {/* 1. Name */}
          <div className="footer-column">
            <h5 className="footer-title">Kavali Venkata Paneendra</h5>
            <p className="footer-text">© 2025 All rights reserved.</p>
          </div>

          {/* 2. Quick Links */}
          <div className="footer-column">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#intro">Intro</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#education">Education</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* 3. Connect */}
          <div className="footer-column">
            <h5 className="footer-title">Connect</h5>
            <div className="footer-icons">
              <a
                href="https://github.com/phanee27"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/phanee27"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href="https://www.instagram.com/k_v_phaneendra"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
