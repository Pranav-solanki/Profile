import "./Body.css";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="logo">I am logo</div>
        <div className="right-side">
          <div className="headings">
            <nav>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </nav>
          </div>
          <div className="mode"><i class="fa-solid fa-moon"></i></div>
        </div>
      </div>
    </>
  );
}
