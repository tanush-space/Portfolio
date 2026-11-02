import type { CSSProperties } from "react";
import Image from "next/image";
import Projects from "@/components/Projects";
import {
  EMAIL, PHONE, SOCIALS, EXPERIENCE, EDUCATION, SKILLS, WINS, MARQUEE, SITE_URL, PHOTO_SRC,
} from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Tanush Gupta",
      jobTitle: "UI/UX Designer",
      email: `mailto:${EMAIL}`,
      telephone: PHONE,
      url: SITE_URL,
      address: { "@type": "PostalAddress", addressLocality: "Jammu", addressCountry: "IN" },
      affiliation: { "@type": "Organization", name: "GDGoC MIET" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "Model Institute of Engineering & Technology" },
      knowsAbout: ["UI design", "UX research", "Wireframing", "Prototyping", "Design systems", "Accessibility", "Figma"],
      sameAs: SOCIALS.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Tanush Gupta Portfolio",
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function Home() {
  const track = Array.from({ length: 4 }).flatMap((_, k) => MARQUEE.map((w) => ({ w, key: `${k}-${w}` })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Primary">
        <div className="wrap">
          <a className="brand" href="#top"><i></i>Tanush</a>
          <ul>
            <li className="opt"><a href="#projects">Projects</a></li>
            <li className="opt"><a href="#experience">Experience</a></li>
            <li className="opt"><a href="#skills">Skills</a></li>
            <li><a className="cv" href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        <header className="hero" id="top">
          <div className="mark" aria-hidden="true">TANUSH</div>
          <div className="wrap">
            <div className="hero-grid">
              <div className="hero-text">
                <span className="label">UI Designer / UX Designer / UI/UX Lead</span>
                <h1><span>From</span><span>Sketch to</span><span>Screen.</span></h1>
                <p className="lead">UI/UX designer and BCA student in Jammu. I design in Figma for healthcare, startups and education, and lead the UI/UX vertical at GDGoC MIET.</p>
                <div className="btns">
                  <a className="btn" href="#projects">View Projects <span aria-hidden="true">→</span></a>
                  <a className="btn lilac" href="#contact">Work Together</a>
                </div>
              </div>
              {/* PHOTO: put your file in /public and set PHOTO_SRC in lib/data.ts */}
              <figure className="photo">
                <div className="ph" id="photo">
                  {PHOTO_SRC ? <Image src={PHOTO_SRC} alt="Portrait of Tanush Gupta" fill priority sizes="340px" style={{ objectFit: "cover" }} /> : <>Your photo<br />4:5</>}
                </div>
                <figcaption>Tanush · Jammu</figcaption>
              </figure>
            </div>
          </div>
        </header>

        <section id="projects" style={{ paddingTop: 24 }} aria-labelledby="projects-h">
          <div className="wrap">
            <span className="label">Projects</span>
            <h2 id="projects-h">Designed it. Built it. <em>shipped</em> it.</h2>
            <div className="pill">35% engagement lift across 5+ startup sites</div>
            <Projects />
          </div>
        </section>

        <section id="experience" style={{ paddingTop: 24 }} aria-labelledby="exp-h">
          <div className="wrap">
            <span className="label">Experience</span>
            <h2 id="exp-h">Where I have worked.</h2>
            <p className="lead">Designing interfaces that have to stay clear and accessible in front of real users.</p>
            <div className="cards">
              {EXPERIENCE.map((x) => (
                <article key={x.company} className="xp" style={{ "--c": x.c, "--sh": x.sh } as CSSProperties}>
                  <h3>{x.company}</h3>
                  <div className="role">{x.role}</div>
                  <div className="when">{x.when}</div>
                  <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" style={{ paddingTop: 24 }} aria-labelledby="edu-h">
          <div className="wrap">
            <span className="label">Education</span>
            <h2 id="edu-h">Where I have studied.</h2>
            <div className="cards">
              {EDUCATION.map((e) => (
                <article key={e.title} className="xp" style={{ "--c": e.c, "--sh": e.sh } as CSSProperties}>
                  <h3>{e.title}</h3>
                  <div className="role">{e.detail}</div>
                  <div className="when">{e.when}</div>
                  <p style={{ margin: 0 }}>{e.school}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="band" aria-hidden="true">
          <div className="track">{track.map((t) => <span key={t.key}>{t.w}</span>)}</div>
        </div>

        <section id="skills" aria-labelledby="skills-h">
          <div className="wrap">
            <span className="label">Skills &amp; Expertise</span>
            <h2 id="skills-h">Everything needed to shape a clear product.</h2>
            <div className="grid">
              {SKILLS.map((s) => (
                <div key={s.h} className="sk" style={{ "--c": s.c } as CSSProperties}><h3>{s.h}</h3><p>{s.p}</p></div>
              ))}
            </div>
            <div className="wins">{WINS.map((w) => <span key={w}>{w}</span>)}</div>
          </div>
        </section>

        <section id="contact" style={{ paddingTop: 24 }} aria-labelledby="contact-h">
          <div className="wrap">
            <span className="label">Contact</span>
            <h2 id="contact-h">Have a product that needs a pulse?</h2>
            <p className="lead">I am open to UI/UX roles, internships, freelance design and collaborations. Based in Jammu, India and happy to work remotely.</p>
            <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <div className="btns">
              <a className="btn orange" href={`mailto:${EMAIL}`}>Say Hello →</a>
              <a className="btn cream" href={`tel:${PHONE.replace(/\s/g, "")}`}>{PHONE}</a>
            </div>
            <div className="socials">
              {SOCIALS.map((s) => (
                <a key={s.name} className="btn cream" href={s.href} target="_blank" rel="noopener noreferrer me">{s.name}</a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>Crafted with ❤️ by MKS. All rights reserved.</footer>
      
    </>
  );
}
