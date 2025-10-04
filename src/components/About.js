import React from "react";
import "./About.css";

export default function About() {
  return (
    <div id="About">
      <div className="center">
        <div className="part">
          <h2 className="section-title">WHO AM I</h2>
          <p>
            Hello! I'm <span className="highlight">Your Name</span>, a passionate
            frontend developer who loves turning ideas into interactive web
            experiences. I discovered my love for coding while building small
            projects and quickly became obsessed with the creativity and logic
            involved in web development.
          </p>
        </div>
        <div className="part">
          <p>
            My journey started with{" "}
            <span className="highlight">HTML, CSS, and JavaScript</span>, and
            since then I’ve been diving deeper into frameworks like{" "}
            <span className="highlight">React</span>. I enjoy building clean,
            responsive interfaces and constantly learning new tools and best
            practices.
          </p>
        </div>
        <div className="part">
          <p>
            Outside of coding, I enjoy{" "}
            <span className="highlight">photography and gaming</span>, and I
            believe that creativity outside the screen fuels my work on it. I'm
            currently looking for opportunities where I can grow as a developer
            and work on real-world projects that make an impact.
          </p>
        </div>
      </div>
    </div>
  );
}
