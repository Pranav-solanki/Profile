import { useState } from "react";
import "./Navbar.css";
export default function Navbar() {
  const [darkmode, setdarkmode] = useState(false);
  function handleclick(id) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  function togglemode(){
    document.body.classList.toggle('dark-mode')
  }
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">My portfolio</div>
        <ul>
          <li onClick={handleclick("home")}>Home</li>
          <li onClick={handleclick("about")}>About</li>
          <li onClick={handleclick("project")}>Projects</li>
          <li onClick={handleclick("contact")}>Contact</li>
          <li>
            <a href="/resume.pdf" target="_blank">
              Resume
            </a>
          </li>
        </ul>
        <div className="theme">
          <button onClick={togglemode}>change mode</button>
        </div>
      </nav>
    </>
  );
}
