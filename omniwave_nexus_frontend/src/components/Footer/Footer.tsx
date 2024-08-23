import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="poppins-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#features" className="text-light">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-light">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#results" className="text-light">
                  See Results
                </a>
              </li>
              <li>
                <a href="#about" className="text-light">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-4">
            <h5 className="poppins-bold">Contact Us</h5>
            <p>
              Email:{" "}
              <a href="mailto:info@omniwavenexus.com" className="text-light">
                info@omniwavenexus.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+123456789" className="text-light">
                +1 234 567 89
              </a>
            </p>
            <p>Address: 123 Public Speaking Lane, Tech City</p>
          </div>

          {/* Social Media Icons */}
          <div className="col-md-4 mb-4">
            <h5 className="poppins-bold">Follow Us</h5>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        {/* Copyright */}
        <div className="text-center">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Omniwave Nexus. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
