import './Intro.css';

function Intro() {
  return (
    <section id="intro" className="intro-section d-flex">
      {/* Left: Text */}
      <div className="intro-left d-flex flex-column justify-content-center px-5">
        <h5 className="text-uppercase text-muted">Hi, I am</h5>
        <h1 className="fw-bold display-4">KISHOREKUMAR</h1>
        <p className="lead text-secondary">Software Developer</p>

        <div className="d-flex gap-3 mt-4">
            <a href="https://github.com/KishoreLamar10" target="_blank" rel="noopener noreferrer"><i className="bi bi-github fs-4 text-dark"></i></a>
            <a href="https://www.linkedin.com/in/kishorekumaravudai/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin fs-4 text-primary"></i></a>
            <a href="mailto:balakishore619@gmail.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope fs-4 text-danger"></i></a>
        </div>

      </div>

      {/* Right: Image */}
      <div className="intro-right d-flex justify-content-center align-items-center">
        <img src="/profile.JPEG" alt="Profile" className="intro-img" />
      </div>
    </section>
  );
}

export default Intro;
