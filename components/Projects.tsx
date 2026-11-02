"use client";

import { useState, type CSSProperties } from "react";
import { PROJECTS, TAG_COLORS } from "@/lib/data";

export default function Projects() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="accs" id="accs">
      {PROJECTS.map((p, i) => {
        const isOpen = open === i;
        return (
          <div
            key={p.n}
            className={"acc" + (isOpen ? " open" : "")}
            style={{ "--c": p.c, "--n": p.nc } as CSSProperties}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`proj-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="num">0{i + 1}</span>
              <span className="ttl">{p.n}</span>
              <span className="plus" aria-hidden="true">+</span>
            </button>
            <div className="body" id={`proj-${i}`}>
              <div>
                <div className="inner">
                  <div className="frame" style={{ "--bg": p.bg } as CSSProperties}>
                    <div className="bar"><i></i><i></i><i></i><span>{p.url}</span></div>
                    <div className="canvas">
                      <div><b>{p.n}</b><small>{p.tag}</small></div>
                    </div>
                    <div className="badge" style={{ background: i === 4 ? "#ff6a2b" : "#ff3d3d" }}>
                      {i === 4 ? "Building" : i < 2 ? "Case study" : "Shipped"}
                    </div>
                  </div>
                  <div>
                    <p className="meta">File 0{i + 1} / 0{PROJECTS.length} · {p.type}</p>
                    <dl className="facts">
                      <div><dt>Role</dt><dd>{p.role}</dd></div>
                      <div><dt>Type</dt><dd>{p.type}</dd></div>
                    </dl>
                    <p className="desc">{p.d}</p>
                    <ul className="tags">
                      {p.t.map((x, k) => (
                        <li key={x} style={{ "--t": TAG_COLORS[(k + i) % 5] } as CSSProperties}>{x}</li>
                      ))}
                    </ul>
                    <a className="btn" href="#contact">Ask for case study →</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
