import { useEffect, useState } from "react";

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY });

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "HAVEN",
      category: "Fintech × Social Impact",
      year: "2024",
      description:
        "Parametric micro-insurance platform for India's 15M gig workers. Built with Node.js, PostgreSQL, Redis, and 7 ML models including GPS spoofing detection, AI image deforgery, and multilingual news classification. DevTrails 2026 hackathon project.",
      color: "#FF6B35",
      tech: "Node.js · PostgreSQL · Redis · React Native · ML/AI",
      link: "https://github.com/PrudhviRajGK/HAVEN",
    },
    {
      title: "Project Management API",
      category: "Backend Engineering",
      year: "2024",
      description:
        "Production-grade REST API powering collaborative project management. Features include JWT authentication, role-based access control, hierarchical task management, file uploads, and secure endpoints. Built for scalability and team collaboration.",
      color: "#4ECDC4",
      tech: "Node.js · Express · PostgreSQL · REST API · Auth",
      link: "https://github.com/Bee024/project_manager",
    },
    {
      title: "ShopEasy FAQ Bot",
      category: "Agentic AI",
      year: "2024",
      description:
        "Intelligent FAQ system using LangGraph orchestration with RAG-based retrieval. Features multi-turn memory, discount calculations, and RAGAS evaluation. Powered by ChromaDB vector store and Groq's LLaMA3 with Streamlit interface.",
      color: "#FFE66D",
      tech: "LangGraph · ChromaDB · Groq · Streamlit · RAG · LLaMA3",
      link: "https://github.com/Bee024/E-Commerce-FAQ-bot",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Crimson Pro', serif",
        background: "#0A0A0A",
        color: "#FAFAFA",
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@200;300;400;600;700;900&family=JetBrains+Mono:wght@400;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          cursor: none;
        }

        html {
          scroll-behavior: smooth;
        }
        
        .custom-cursor {
          position: fixed;
          width: 40px;
          height: 40px;
          border: 2px solid #FF6B35;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transition: all 0.15s ease;
          mix-blend-mode: difference;
        }
        
        .custom-cursor.hovering {
          width: 80px;
          height: 80px;
          background: rgba(255, 107, 53, 0.1);
        }
        
        .grain {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          opacity: 0.03;
          z-index: 1000;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .nav-item {
          position: relative;
          overflow: hidden;
        }
        
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #FF6B35;
          transition: width 0.3s ease;
        }
        
        .nav-item:hover::after {
          width: 100%;
        }
        
        .project-card {
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .project-card:hover {
          transform: translateX(20px);
        }
        
        .project-card::before {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          transition: left 0.5s ease;
        }
        
        .project-card:hover::before {
          left: 100%;
        }

        @media (max-width: 900px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }

          .nav-links {
            gap: 20px !important;
          }
        }

        @media (max-width: 768px) {
          body {
            cursor: auto;
          }

          .custom-cursor {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .main-nav {
            padding: 24px 20px !important;
          }

          .hero-section,
          .work-section,
          .about-section,
          .contact-section {
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .footer {
            padding: 24px 20px !important;
            flex-direction: column !important;
            gap: 12px !important;
            text-align: center;
          }

          .contact-links {
            flex-wrap: wrap;
            gap: 20px !important;
          }

          .cta-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div
        className={`custom-cursor ${isHovering ? "hovering" : ""}`}
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <div className="grain" />

      <nav
        className="main-nav"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          padding: "40px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 100,
          background: "transparent",
          backdropFilter: "none",
        }}
      >
        <div
          style={{
            fontSize: "14px",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "2px",
            fontWeight: "700",
          }}
        >
          PORTFOLIO
        </div>

        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: "40px",
            fontSize: "14px",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "1px",
          }}
        >
          {["WORK", "ABOUT", "CONTACT"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-item"
              style={{
                color: "#FAFAFA",
                textDecoration: "none",
                opacity: 0,
                animation: `fadeIn 0.6s ease forwards ${i * 0.1 + 0.3}s`,
                cursor: "pointer",
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="hero"
        className="hero-section"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "300px",
            height: "300px",
            border: "2px solid rgba(255, 107, 53, 0.3)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "15%",
            left: "5%",
            width: "200px",
            height: "200px",
            background:
              "linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(255, 230, 109, 0.1))",
            transform: `rotate(${scrollY * 0.1}deg) translateY(${scrollY * 0.15}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />

        <div style={{ maxWidth: "900px", position: "relative", zIndex: 2 }}>
          <div
            style={{
              fontSize: "16px",
              fontFamily: "'JetBrains Mono', monospace",
              color: "#FF6B35",
              marginBottom: "20px",
              letterSpacing: "3px",
              opacity: 0,
              animation: "fadeIn 0.8s ease forwards 0.2s",
            }}
          >
            BACKEND ENGINEER × AI DEVELOPER
          </div>

          <h1
            style={{
              fontSize: "clamp(60px, 10vw, 140px)",
              fontWeight: "900",
              lineHeight: "0.9",
              marginBottom: "30px",
              letterSpacing: "-0.02em",
              opacity: 0,
              animation:
                "slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.4s",
            }}
          >
            Building Systems
            <br />
            <span
              style={{
                fontStyle: "italic",
                fontWeight: "300",
                background: "linear-gradient(90deg, #FF6B35, #4ECDC4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              That Matter
            </span>
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              maxWidth: "600px",
              color: "#B0B0B0",
              marginBottom: "50px",
              fontWeight: "300",
              opacity: 0,
              animation: "fadeIn 0.8s ease forwards 0.8s",
            }}
          >
            Architecting scalable backend systems and intelligent AI solutions
            for social impact. From fintech platforms to agentic AI, building
            technology that serves real people.
          </p>

          <div
            className="cta-row"
            style={{
              display: "flex",
              gap: "20px",
              opacity: 0,
              animation: "fadeIn 0.8s ease forwards 1s",
            }}
          >
            <a
              href="#work"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                padding: "18px 40px",
                background: "#FF6B35",
                border: "none",
                color: "#0A0A0A",
                fontSize: "14px",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: "700",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#FF8555")
              }
              onMouseOut={(e) => (e.currentTarget.style.background = "#FF6B35")}
            >
              VIEW WORK
            </a>

            <a
              href="#contact"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                padding: "18px 40px",
                background: "transparent",
                border: "2px solid #FAFAFA",
                color: "#FAFAFA",
                fontSize: "14px",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: "700",
                letterSpacing: "1px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                textDecoration: "none",
                display: "inline-block",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#FAFAFA";
                e.currentTarget.style.color = "#0A0A0A";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#FAFAFA";
              }}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="work-section"
        style={{
          minHeight: "100vh",
          padding: "120px 60px",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            fontFamily: "'JetBrains Mono', monospace",
            letterSpacing: "3px",
            color: "#666",
            marginBottom: "20px",
          }}
        >
          [ SELECTED WORK ]
        </div>

        <h2
          style={{
            fontSize: "clamp(40px, 6vw, 80px)",
            fontWeight: "900",
            marginBottom: "80px",
            letterSpacing: "-0.02em",
          }}
        >
          Featured Projects
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card project-grid"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() =>
                window.open(project.link, "_blank", "noopener,noreferrer")
              }
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: "40px",
                padding: "40px",
                borderLeft: `4px solid ${project.color}`,
                background: "rgba(255, 255, 255, 0.02)",
                position: "relative",
                cursor: "pointer",
                opacity: 0,
                animation: `slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards ${
                  index * 0.1 + 0.2
                }s`,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "12px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#666",
                    marginBottom: "10px",
                    letterSpacing: "2px",
                  }}
                >
                  {project.year} — {project.category}
                </div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: "700",
                    marginBottom: "15px",
                    color: project.color,
                  }}
                >
                  {project.title}
                </h3>
              </div>

              <div>
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.6",
                    color: "#B0B0B0",
                    fontWeight: "300",
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </p>
                <div
                  style={{
                    fontSize: "13px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#666",
                    marginBottom: "20px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {project.tech}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    marginTop: "30px",
                    fontSize: "14px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: project.color,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  VIEW PROJECT <span style={{ fontSize: "20px" }}>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="about-section"
        style={{
          minHeight: "100vh",
          padding: "120px 60px",
          background: "linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "3px",
              color: "#666",
              marginBottom: "20px",
            }}
          >
            [ ABOUT ME ]
          </div>

          <h2
            style={{
              fontSize: "clamp(40px, 6vw, 70px)",
              fontWeight: "900",
              marginBottom: "40px",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Engineering at the
            <br />
            <span style={{ fontStyle: "italic", fontWeight: "300" }}>
              intersection
            </span>
            <br />
            of backend & AI
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#B0B0B0",
              fontWeight: "300",
              marginBottom: "30px",
            }}
          >
            I build robust backend systems and intelligent AI solutions that
            solve real-world problems. From architecting scalable APIs with
            role-based access control to implementing agentic AI systems with
            RAG pipelines, I focus on creating technology that makes an impact.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#B0B0B0",
              fontWeight: "300",
            }}
          >
            My work spans fintech platforms serving millions of gig workers,
            collaborative project management systems, and conversational AI
            agents. I'm passionate about social impact and building systems that
            serve underserved communities.
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="contact-section"
        style={{
          minHeight: "100vh",
          padding: "120px 60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "800px" }}>
          <div
            style={{
              fontSize: "12px",
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: "3px",
              color: "#666",
              marginBottom: "30px",
            }}
          >
            [ LET&apos;S CONNECT ]
          </div>

          <h2
            style={{
              fontSize: "clamp(50px, 8vw, 100px)",
              fontWeight: "900",
              marginBottom: "40px",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Let&apos;s build
            <br />
            something{" "}
            <span
              style={{
                fontStyle: "italic",
                fontWeight: "300",
                background: "linear-gradient(90deg, #FF6B35, #4ECDC4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              impactful
            </span>
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.6",
              color: "#B0B0B0",
              marginBottom: "60px",
              fontWeight: "300",
            }}
          >
            Working on scalable backend systems or AI solutions? Let&apos;s
            collaborate and create technology that makes a difference.
          </p>

          <div
            className="contact-links"
            style={{
              display: "flex",
              gap: "40px",
              justifyContent: "center",
              marginBottom: "60px",
            }}
          >
            {[
              { name: "GitHub", url: "https://github.com/Bee024" },
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/YOUR-LINKEDIN-USERNAME/",
              },
              { name: "Email", url: "mailto:pradhanbiswajyoti024@gmail.com" },
            ].map((platform, i) => (
              <a
                key={platform.name}
                href={platform.url}
                target={platform.name === "Email" ? "_self" : "_blank"}
                rel={
                  platform.name === "Email" ? undefined : "noopener noreferrer"
                }
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{
                  fontSize: "16px",
                  fontFamily: "'JetBrains Mono', monospace",
                  color: "#FAFAFA",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  opacity: 0,
                  animation: `fadeIn 0.6s ease forwards ${i * 0.1 + 0.2}s`,
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#FF6B35")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#FAFAFA")}
              >
                {platform.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              window.location.href =
                "mailto:pradhanbiswajyoti024@gmail.com?subject=Project%20Collaboration&body=Hi%20Biswajyoti%2C%0D%0A%0D%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.";
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={{
              padding: "20px 60px",
              background: "#FF6B35",
              border: "none",
              color: "#0A0A0A",
              fontSize: "16px",
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: "700",
              letterSpacing: "2px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#FAFAFA";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#FF6B35";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            START A CONVERSATION
          </button>
        </div>
      </section>

      <footer
        className="footer"
        style={{
          padding: "40px 60px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          fontFamily: "'JetBrains Mono', monospace",
          color: "#666",
        }}
      >
        <div>© 2024 Bee024. All rights reserved.</div>
        <div>Building systems that matter · Bhubaneswar, India</div>
      </footer>
    </div>
  );
}
