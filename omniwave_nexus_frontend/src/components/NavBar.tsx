import "./NavBar.css";
import "../../fonts/Poppins.css";
import OmniwaveNexus from "../assets/OmniWave_Nexus_logo__Dec_21__2023_-removebg-preview.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        {/* Logo/Brand */}
        <a className="navbar-brand poppins-bold" href="#home">
          <img src={OmniwaveNexus} alt="Logo" className="mr-2" height={45} />
          <span className="ml-2 brand-title">&nbsp;&nbsp;&nbsp;OMNIWAVE NEXUS</span>
        </a>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto poppins">
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">
                Our Solution
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Pricing">
                Pricing {/* Tentative for now */}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#engineering">
                See Results
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#events">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Be the first to use it!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
