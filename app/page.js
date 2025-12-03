const summaryText =
  "AI Solutions Architect with extensive experience architecting production-grade GenAI workflows, autonomous agents, and RAG pipelines. Proven track record of shipping over 120 GenAI applications and driving AI adoption from 47% to 97% within enterprise environments. Expert in Python, GCP, AWS, and Vercel, combining technical engineering with strategic implementation to deliver over $1M in operational savings through automation and agentic tooling. Experienced in fine-tuning LLMs and building custom MCP servers to solve complex business challenges.";

const expertise = [
  "GenAI Architecture",
  "Agentic Workflows",
  "RAG Pipelines",
  "LLM Fine-tuning",
  "Model Context Protocol (MCP)",
  "Python",
  "Google Cloud Platform (GCP)",
  "AWS",
  "Vercel",
  "Next.js",
  "CI/CD Automation",
  "Salesforce Agentforce",
  "OpenAI API",
  "Anthropic",
  "Gemini",
  "LangChain",
];

const experience = [
  {
    role: "AI Solutions Architect",
    company: "Assent",
    location: "Canada",
    dates: "February 2025 - Present",
    bullets: [
      "Architected and deployed safe, auditable GenAI systems within a regulated compliance platform using OpenAI, Anthropic, and Gemini models.",
      "Implemented live RAG (Retrieval-Augmented Generation) and agentic workflows coordinating multi-step processes via custom MCP servers.",
      "Achieved over $1 million in company savings by replacing manual hours with GenAI automations and agentic tools.",
      "Drove internal AI adoption from 47% to 97% by developing tools that directly improved team proficiency and productivity.",
      "Established governance, documentation, and security patterns to transition AI prototypes to production on AWS and GCP infrastructure.",
    ],
  },
  {
    role: "AI Solutions Architect",
    company: "Sesh | Ai Solutions",
    location: "Toronto, Ontario",
    dates: "November 2021 - Present",
    bullets: [
      "Designed the architecture for over 120 GenAI applications, all currently in production stages across 30+ different clients.",
      "Built more than 90 custom chatbots solving specific day-to-day business problems using Python and various LLM frameworks.",
      "Delivered hands-on implementation for AI-ready websites and automation backends using Vercel, AWS, and GCP integrations.",
      "Founded and manage a community of 100+ members, providing tutorials and demos to help professionals extrapolate AI tech into daily tasks.",
    ],
  },
  {
    role: "Salesforce Consultant (AI & Agentforce)",
    company: "Online Business Systems",
    location: "Toronto, Ontario",
    dates: "June 2024 - November 2024",
    bullets: [
      "Led the configuration of AI assistants and copilot-style experiences for enterprise clients using Salesforce Agentforce.",
      "Defined use cases and wired safe data access for AI agents, ensuring alignment with existing sales and service workflows.",
      "Developed reusable patterns for AI configurations to accelerate client onboarding and reduce redundancy.",
    ],
  },
  {
    role: "Salesforce Manager & AI Lead",
    company: "Globalization Partners",
    location: "Ontario, Canada",
    dates: "November 2018 - November 2023",
    bullets: [
      "Spearheaded the 'GIA' internal chatbot and early GenAI-powered workflows for Jira ticket handling.",
      "Managed a large Salesforce org with 1,000+ licenses, integrating early AI-assisted development and 'vibe coding' patterns.",
      "Transitioned from Administrator to Manager, overseeing the full development lifecycle and ensuring scalable data models and security.",
    ],
  },
];

const education = [
  {
    degree: "B.S. Systems Engineering (Ingenieria en Sistemas)",
    institution: "Universidad Marista de MAcrida",
    dates: "2007",
  },
];

import DownloadButton from "./components/DownloadButton";

export default function Home() {
  return (
    <main className="page">
      <div className="ambient">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="gridlines" />
      </div>

      <div className="download-bar" data-animate>
        <DownloadButton />
      </div>

      <section className="hero grid">
        <div className="card hero-card" data-animate>
          <div className="header-bar">
            <p className="eyebrow">Role</p>
            <div className="pill">AI Solutions Architect</div>
          </div>
          <h1>Alejandro De La Mora</h1>
          <p className="role">AI Solutions Architect</p>
          <div className="summary-box">
            <p className="summary-label">Professional Summary</p>
            <p>{summaryText}</p>
          </div>
        </div>

        <div className="card contact" data-animate style={{ animationDelay: "0.08s" }}>
          <p className="eyebrow">Contact</p>
          <div className="contact-grid">
            <span>Phone</span>
            <a href="tel:+14372433693">+1 437 243 3693</a>
            <span>Email</span>
            <a href="mailto:alex@seshwithfriends.org">alex@seshwithfriends.org</a>
            <span>LinkedIn</span>
            <a href="https://www.linkedin.com/in/amorac/" rel="noreferrer">
              linkedin.com/in/amorac
            </a>
            <span>Website</span>
            <a href="http://www.eloruga.com" rel="noreferrer">
              eloruga.com
            </a>
            <span>GitHub</span>
            <a href="https://github.com/Oruga420" rel="noreferrer">
              github.com/Oruga420
            </a>
          </div>
        </div>
      </section>

      <section className="section card" data-animate style={{ animationDelay: "0.12s" }}>
        <div className="section-header">
          <h2>Areas of Expertise</h2>
          <div className="accent-line" />
        </div>
        <div className="tags">
          {expertise.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="section card" data-animate style={{ animationDelay: "0.16s" }}>
        <div className="section-header">
          <h2>Work Experience</h2>
          <div className="accent-line" />
        </div>
        <div className="experience-list">
          {experience.map((job) => (
            <article key={job.role + job.company} className="experience-item">
              <div className="timeline-dot" />
              <div className="experience-body">
                <div className="experience-head">
                  <div>
                    <p className="role-title">
                      {job.role} | {job.company}
                    </p>
                    <p className="location">{job.location}</p>
                  </div>
                  <p className="dates">{job.dates}</p>
                </div>
                <ul className="bullets">
                  {job.bullets.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section card" data-animate style={{ animationDelay: "0.2s" }}>
        <div className="section-header">
          <h2>Education</h2>
          <div className="accent-line" />
        </div>
        <div className="education">
          {education.map((item) => (
            <div key={item.institution} className="education-item">
              <div>
                <p className="role-title">{item.degree}</p>
                <p className="location">{item.institution}</p>
              </div>
              <p className="dates">{item.dates}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
