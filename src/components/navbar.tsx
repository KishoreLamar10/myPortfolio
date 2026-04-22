import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-4 fixed-top">
      <div className="container-fluid navbar-inner">

        <button
          className="navbar-toggler text-white ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-center gap-4 align-items-center">
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#experience">Experience</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link text-white">Contact Me</a>
            </li>
          </ul>

          <a
            className="btn nav-button navbar-resume"
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
