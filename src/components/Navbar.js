import "./Body.css";
import "./Navbar.css";
export default function Navbar() {
  const handlemode = () => {
    let body = document.body;
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    }
  };
  return (
    <>
      <div className="container">
        <div className="logo"></div>
        <div className="right-side">
          <div className="headings">
            <nav>
              <ul>
                <li>
                  <a href="#Home">Home</a>
                </li>
                <li>
                  <a href="#About">About</a>
                </li>
                <li>
                  <a href="#Skills">Skills</a>
                </li>
                <li>
                  <a href="#Projects">Projects</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mode" onClick={handlemode}>
            <i class="fa-solid fa-moon"></i>
          </div>
        </div>
      </div>
    </>
  );
}
