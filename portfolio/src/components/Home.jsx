import React, { useEffect } from "react";
import ShinyText from "./ShinyText";
import BlurText from "./BlurText";
import ParticlesBackground from "./ParticlesBackground";
import { Container, Navbar, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaJava, FaReact, FaGitAlt, FaLinux, FaHtml5, FaCss3Alt, FaNodeJs, FaServer,
} from "react-icons/fa";
import {
  SiSpringboot, SiMongodb, SiDjango, SiMysql, SiPostgresql, SiFigma,
} from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";

const skillIconsMap = {
  Java: <FaJava size={28} color="#007396" />,
  "Spring Boot": <SiSpringboot size={28} color="#6DB33F" />,
  MongoDB: <SiMongodb size={28} color="#47A248" />,
  React: <FaReact size={28} color="#61DAFB" />,
  HTML: <FaHtml5 size={28} color="#E34F26" />,
  CSS: <FaCss3Alt size={28} color="#1572B6" />,
  Git: <FaGitAlt size={28} color="#F05032" />,
  "REST API": <FaServer size={28} color="#6c757d" />,
  NodeJS: <FaNodeJs size={28} color="#339933" />,
  Django: <SiDjango size={28} color="#092E20" />,
  MySQL: <SiMysql size={28} color="#4479A1" />,
  PostgreSQL: <SiPostgresql size={28} color="#336791" />,
  Linux: <FaLinux size={28} color="#FCC624" />,
  Figma: <SiFigma size={28} color="#F24E1E" />,
};

const skillsByDomain = {
  Frontend: ["HTML", "CSS", "React", "Figma"],
  Backend: ["Java", "Spring Boot", "NodeJS", "Django", "REST API"],
  Database: ["MongoDB", "MySQL", "PostgreSQL"],
  "Dev Tools": ["Git"],
  "Operating Systems": ["Linux"],
};

const projects = [
  {
    title: "Property Sales and Rental Management",
    tech: "Django, Bootstrap, SQLite",
    desc: "Web platform for property listings with role-based login, filtering, and booking.",
    videoUrl: "/videos/property-management.mp4",
    codeUrl: "https://github.com/phanee27/PSRM",
    liveUrl: "https://psrm.pythonanywhere.com", 
  },
  {
    title: "Asthetica - Online Art Gallery",
    tech: "React, Spring Boot, MySQL",
    desc: "Upload & purchase artworks with full-stack flow and responsive design.",
    videoUrl: "https://youtu.be/8FuDBcd2YFo?si=IGaS218k4dshiakq",
    codeUrl: "https://github.com/phanee27/Asthetica",
    liveUrl: "https://asthetica-gallery.vercel.app", 
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
        canvasStyle={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
      />

      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand className="text-white">Paneendra's Portfolio</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              {["intro", "about", "skills", "projects", "contact"].map((id) => (
                <Nav.Link key={id} href={`#${id}`} className="text-white">
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="scroll-container">
        <motion.section
          id="intro"
          className="section intro-section"
          variants={sectionVariant}
          initial="hidden"
          animate="visible"
        >
          <div className="intro-content">
            <h1>Hello, I'm <span className="highlight">Paneendra</span></h1>
            <p className="intro-sub">Aspiring Full-Stack Developer passionate about building impactful solutions.</p>
            <div className="intro-buttons">
              <a href="#projects" className="btn btn-outline-info me-3">View Projects</a>
              <a href="#contact" className="btn btn-outline-light">Contact Me</a>
            </div>
          </div>
        </motion.section>

        <motion.section id="about" className="section about-section" variants={sectionVariant} initial="visible" animate="visible">
          <div className="about-image-wrapper">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQGa0qNysmoOkA/profile-displayphoto-shrink_400_400/B4EZRLzTCCGYAg-/0/1736438527232?e=1754524800&v=beta&t=D97DI27WGppxYAUxqNNunGBWO9kWq7OKV-Isal3T92k"
              alt="Paneendra"
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h2><ShinyText>About Me</ShinyText></h2>
            <p>Hello, I’m Paneendra, currently pursuing a degree in Computer Science. I specialize in full-stack development and have a strong passion for solving complex problems.</p>
          </div>
        </motion.section>

        <motion.section id="skills" className="section" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Skills</h2>
          <div className="domain-grid">
            {Object.entries(skillsByDomain).map(([domain, skillList]) => (
              <div key={domain} className="domain-section">
                <h4 className="domain-title">{domain}</h4>
                <div className="skills-grid">
                  {skillList.map((skill) => (
                    <motion.div
                      key={skill}
                      className="skill-card"
                      whileHover={{ scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {skillIconsMap[skill]}
                      <span>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section id="projects" className="section projects-section" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((p, i) => (
              <motion.div key={i} className="project-card" whileHover={{ scale: 1.06 }} transition={{ duration: 0.3 }}>
                <video src={p.videoUrl} controls className="project-video" preload="metadata" />
                <h4>{p.title}</h4>
                <div className="tech-badges">
                  {p.tech.split(",").map((techName, idx) => (
                    <span key={idx} className="tech-badge">{techName.trim()}</span>
                  ))}
                </div>
                <p>{p.desc}</p>
                <div className="project-buttons">
                  <a href={p.codeUrl} target="_blank" rel="noreferrer" className="btn btn-outline-light">
                    Code
                  </a>
                  <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn btn-outline-info">
                    Live
                  </a>
                </div>

              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section id="contact" className="section contact-card" variants={sectionVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2>Contact</h2>
          <div className="contact-card-content">
            <ul className="contact-list">
              <li>Email: 2300030317cseelge@gmail.com</li>
              <li>GitHub: <a href="https://github.com/phanee27" target="_blank" rel="noreferrer">phanee27</a></li>
              <li>LinkedIn: <a href="https://linkedin.com/in/phanee27" target="_blank" rel="noreferrer">linkedin.com/in/phanee27</a></li>
              <li>Phone: +91 6304741137</li>
              <li>Location: Nellore, India</li>
            </ul>
          </div>
        </motion.section>
      </div>

      <footer className="text-center bg-dark text-light py-3">
        © 2025 Kavali Venkata Paneendra
      </footer>

      <style jsx global>{`
        html, body {
          height: 100%;
          margin: 0;
          padding: 0;
          overflow-y: auto;
          scroll-padding-top: 80px;
          scroll-behavior: smooth;
        }
      `}</style>

      <style jsx>{`
        .scroll-container {
          scroll-snap-type: y mandatory;
          height: 100%;
        }

        .section {
          scroll-snap-align: start;
          min-height: 100vh;
          padding: 100px 20px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: transparent;
          color: white;
          text-align: center;
        }

        .intro-section {
          padding-top: 140px;
        }

        .intro-content {
          max-width: 700px;
        }

        .highlight {
          color: #61dafb;
        }

        .intro-sub {
          font-size: 1.25rem;
          margin-bottom: 30px;
          color: #ccc;
        }

        .intro-buttons .btn {
          font-size: 1.1rem;
          padding: 10px 20px;
          border-radius: 30px;
        }

        .about-section {
          flex-direction: row;
          max-width: 900px;
          margin: 0 auto;
          gap: 50px;
          text-align: left;
          align-items: center;
          justify-content: center;
        }

        .about-image-wrapper {
          flex: 0 0 280px;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
        }

        .about-image {
          width: 280px;
          height: 280px;
          object-fit: cover;
          border-radius: 15px;
        }

        .about-text {
          flex: 1;
          max-width: 500px;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .domain-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
          width: 100%;
          max-width: 1000px;
        }

        .domain-section,
        .skill-card,
        .project-card,
        .contact-card-content {
          background: rgba(255, 255, 255, 0.05);
          color: white;
          box-shadow: 0 4px 10px rgba(255, 255, 255, 0.05);
        }

        .domain-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 10px;
          color: #61dafb;
        }

        .skills-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .skill-card {
          padding: 15px;
          border-radius: 8px;
          text-align: center;
          width: 120px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          font-weight: 500;
          cursor: pointer;
        }

        .projects-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 24px;
          margin-top: 20px;
        }

        .project-card {
          border-radius: 12px;
          padding: 20px;
          width: 320px;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .project-video {
          width: 100%;
          border-radius: 8px;
          max-height: 180px;
          object-fit: cover;
        }

        .tech-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-badge {
          background: #222;
          color: rgb(6, 193, 255);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .project-buttons {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 10px;
        }

        .project-buttons .btn {
          flex: 1;
          font-size: 0.95rem;
          padding: 8px 12px;
          border-radius: 25px;
          transition: all 0.3s ease;
        }

        .project-buttons .btn:hover {
          transform: scale(1.05);
          opacity: 0.9;
        }


        .contact-card-content {
          padding: 30px 40px;
          border-radius: 15px;
          max-width: 480px;
          margin: 0 auto;
          font-size: 1.1rem;
          text-align: left;
        }

        .contact-list li {
          margin-bottom: 15px;
        }

        .nav-link:hover {
          color: #61dafb !important;
        }

        @media (max-width: 767px) {
        .about-section {
          flex-direction: column;
          text-align: center;
          padding: 40px 20px;
          gap: 20px;
        }

        .about-image-wrapper {
          width: 200px;
          height: 200px;
          border-radius: 10px; /* slight rounding */
          overflow: hidden;
          margin: 0 auto;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
        }

        .about-image {
          width: 100%;
          height: 90%;
          object-fit: cover;
          border-radius: 12px; /* match wrapper */
        }

        .about-text {
          font-size: 1.3rem;
          line-height: 1.5;
          max-width: 80%;
        }
      }


      `}</style>
    </>
  );
}
