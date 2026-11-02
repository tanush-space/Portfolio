"use client";

import { useState, type CSSProperties } from "react";
import { PROJECTS, TAG_COLORS } from "@/lib/data";

function ProjectDetails({ index }: { index: number }) {
  const project = PROJECTS[index];

  return (
    <div className="inner">
      <div className="frame">
        <div className="bar"><i></i><i></i><i></i><span>{project.url}</span></div>
        <div className="canvas">
          <div><b>{project.n}</b><small>{project.tag}</small></div>
        </div>
        <div className="badge" style={{ background: index === 4 ? "#ff6a2b" : "#ff3d3d" }}>
          {index === 4 ? "Building" : index < 2 ? "Case study" : "Shipped"}
        </div>
      </div>
      <div>
        <p className="meta">File 0{index + 1} / 0{PROJECTS.length} · {project.type}</p>
        <h3 className="project-title">{project.n}</h3>
        <dl className="facts">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>Type</dt><dd>{project.type}</dd></div>
        </dl>
        <p className="desc">{project.d}</p>
        <ul className="tags">
          {project.t.map((tag, tagIndex) => (
            <li key={tag} style={{ "--t": TAG_COLORS[(tagIndex + index) % 5] } as CSSProperties}>{tag}</li>
          ))}
        </ul>
        <a className="btn" href="#contact">Ask for case study →</a>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState<number | null>(0);

  return (
    <div className="project-browser" id="accs">
      <div className="project-desktop">
        <div className="project-tabs" role="tablist" aria-label="Projects">
          {PROJECTS.map((project, index) => (
            <button
              key={project.n}
              id={`project-tab-${index}`}
              className={`project-tab${active === index ? " active" : ""}`}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls={`project-panel-${index}`}
              tabIndex={active === index ? 0 : -1}
              style={{ "--c": project.c, "--n": project.nc } as CSSProperties}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key === "ArrowRight") {
                  event.preventDefault();
                  const next = (active + 1) % PROJECTS.length;
                  setActive(next);
                  document.getElementById(`project-tab-${next}`)?.focus();
                } else if (event.key === "ArrowLeft") {
                  event.preventDefault();
                  const next = (active - 1 + PROJECTS.length) % PROJECTS.length;
                  setActive(next);
                  document.getElementById(`project-tab-${next}`)?.focus();
                } else if (event.key === "Home" || event.key === "End") {
                  event.preventDefault();
                  const next = event.key === "Home" ? 0 : PROJECTS.length - 1;
                  setActive(next);
                  document.getElementById(`project-tab-${next}`)?.focus();
                }
              }}
            >
              <span className="project-tab-num">0{index + 1}</span>
              <span>{project.n}</span>
            </button>
          ))}
        </div>
        {PROJECTS.map((project, index) => (
          <section
            key={project.n}
            id={`project-panel-${index}`}
            className="project-panel"
            role="tabpanel"
            aria-labelledby={`project-tab-${index}`}
            hidden={active !== index}
            style={{ "--bg": project.bg } as CSSProperties}
          >
            <ProjectDetails index={index} />
          </section>
        ))}
      </div>
      <div className="project-mobile">
        {PROJECTS.map((project, index) => {
          const isOpen = mobileOpen === index;
          return (
            <article
              key={project.n}
              className={`mobile-project${isOpen ? " open" : ""}`}
              style={{ "--c": project.c, "--n": project.nc, "--bg": project.bg } as CSSProperties}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`mobile-project-panel-${index}`}
                onClick={() => setMobileOpen(isOpen ? null : index)}
              >
                <span className="project-tab-num">0{index + 1}</span>
                <span className="mobile-project-title">{project.n}</span>
                <span className="mobile-project-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              {isOpen && (
                <div id={`mobile-project-panel-${index}`} className="mobile-project-panel">
                  <ProjectDetails index={index} />
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
