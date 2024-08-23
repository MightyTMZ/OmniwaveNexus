import "./LandingPage.css";
import img1 from "../../assets/firstImage.jpg";
import img2 from "../../assets/secondImage.jpg";
import img3 from "../../assets/thirdImage.jpg";
import img4 from "../../assets/fourthImage.jpg";
import img5 from "../../assets/fifthImage.jpg";
import img6 from "../../assets/1_Em_KpV0dzHhwD8bi880tOw.jpg";
import img7 from "../../assets/iStock-1205663803.jpg";
import img8 from "../../assets/images-speakers-corporate-events-seminars-conferences-highlighting-public-speaking-professional-education-leadership-ai-326219902.webp";

import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

const LandingPage = () => {
  const heroBackgrounds = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [currentHeroBackground, setCurrentHeroBackground] = useState(0);
  const secondsBetweenImages = 0.5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroBackground(
        (prevBackground: number) =>
          (prevBackground + 1) % heroBackgrounds.length
      );
    }, secondsBetweenImages * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />
      <div className="">
        {/* Hero section */}
        <section
          id="hero"
          className="hero-section d-flex align-items-center text-light"
          style={{
            backgroundImage: `url(${heroBackgrounds[currentHeroBackground]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
          }}
        >
          <div className="container text-center">
            {/* <img
              src={OmniwaveNexus}
              alt="Omniwave Nexus Logo"
              height={150}
              className="mb-4"
            /> */}
            <div className="title-wrap">
              <h1
                className="display-4 poppins-bold"
                style={{ color: "#8B8000", fontWeight: "bold" }}
              >
                Your Pathway to Public Speaking Brilliance
              </h1>
            </div>
            <a
              href="#about"
              id="try-button"
              className="btn btn-primary btn-lg mt-4"
            >
              Master the art of speaking that will <strong>level you up</strong>{" "}
              using our revolutionary solution
            </a>
          </div>
        </section>
        {/* Features section */}
        <section id="product-image">
          {/* 3D model of the product here */}
          <div
            className="3d-model"
            style={{
              width: "auto",
              height: "400px",
              background: "grey",
            }}
          ></div>
        </section>
        <section id="features" className="features-section py-5 bg-light poppins">
          <div className="container">
            <h2 className="text-center poppins-bold mb-4">Product Features</h2>
            <div className="row">
              <div className="col-lg-4 text-center">
                <i className="fas fa-microphone-alt fa-3x mb-3 text-primary"></i>
                <h3>Real-Time Statistical Feedback</h3>
                <p>Get instant feedback on fluency and tone while you speak.</p>
              </div>
              <div className="col-lg-4 text-center">
                <i className="fas fa-hand-paper fa-3x mb-3 text-primary"></i>
                <h3>Body Gesture Planning</h3>
                <p>
                  Plan your hand movements and body gestures for a confident
                  presentation.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <i className="fas fa-eye fa-3x mb-3 text-primary"></i>
                <h3>Directional Gaze Assistance</h3>
                <p>
                  Get real-time suggestions for gaze direction to engage your
                  audience better.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <i className="fas fa-eye fa-3x mb-3 text-primary"></i>
                <h3>Directional Gaze Assistance</h3>
                <p>
                  Get real-time suggestions for gaze direction to engage your
                  audience better.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <i className="fas fa-eye fa-3x mb-3 text-primary"></i>
                <h3>Directional Gaze Assistance</h3>
                <p>
                  Get real-time suggestions for gaze direction to engage your
                  audience better.
                </p>
              </div>
              <div className="col-lg-4 text-center">
                <i className="fas fa-eye fa-3x mb-3 text-primary"></i>
                <h3>Directional Gaze Assistance</h3>
                <p>
                  Get real-time suggestions for gaze direction to engage your
                  audience better.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Target audience section */}
        <section
          id="audience"
          className="audience-section py-5 bg-dark text-light poppins"
        >
          <div className="container text-center">
            <h2 className="poppins-bold mb-4">Who is Omniwave Nexus For?</h2>
            <div className="row">
              <div className="col-md-4 mt-3">
                <h3 className="target-audience-paragraph">
                  Professional Speakers
                </h3>
                <p className="target-audience-paragraph">
                  <strong>SPIKE</strong> your engagement and seamlessly
                  integrate our tools into your workflow.
                </p>
              </div>
              <div className="col-md-4 mt-3">
                <h3 className="target-audience-paragraph">
                  Business Professionals
                </h3>
                <p className="target-audience-paragraph">
                  <strong>TUBROCHARGE</strong> your professional image and leave
                  a lasting legacy.
                </p>
              </div>
              <div className="col-md-4 mt-3">
                <h3 className="target-audience-paragraph">Educators</h3>
                <p className="target-audience-paragraph">
                  <strong>AMELIORATE</strong> your teaching with AI-suggested
                  body language and tone suggestions.
                </p>
              </div>
              <div className="col-md-4 mt-3">
                <h3 className="target-audience-paragraph">Enthusiasts</h3>
                <p className="target-audience-paragraph">
                  <strong>GAIN</strong> quick, accessible learning and a
                  powerful, personalized mentor!
                </p>
              </div>
              <div className="col-md-4 mt-3">
                <h3 className="target-audience-paragraph">Content Creator</h3>
                <p className="target-audience-paragraph">
                  <strong>INCREASE</strong> natural delivery and on-camera
                  presence
                </p>
              </div>
              <div className="col-md-4 mt-3">
                <h3 className="target-audience-paragraph">
                  <strong>YOU</strong>
                </h3>
                <p className="target-audience-paragraph">
                  <strong>Yes, you!</strong> Whether you want to improve your
                  public speaking planning or enhance your on-camera presence,
                  Omniwave Nexus is here to serve you and take you to the next
                  level!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* See Results section */}
        <section id="results" className="results-section py-5">
          <div className="container">
            <h2 className="text-center poppins-bold mb-4">
              See Omniwave Nexus in Action
            </h2>
            <div className="row text-center">
              <div className="col-md-6">
                <img
                  src="before-using.png"
                  alt="Before Omniwave Nexus"
                  className="img-fluid mb-4"
                />
                <h5>Before Using Omniwave Nexus</h5>{" "}
                {/* show a boring speech with only words */}
              </div>
              <div className="col-md-6">
                <img
                  src="after-using.png"
                  alt="After Omniwave Nexus"
                  className="img-fluid mb-4"
                />
                <h5>After Using Omniwave Nexus</h5>{" "}
                {/* show a fruitful speech planned beyond words */}
              </div>
            </div>
          </div>
        </section>
        {/* Pricing solutions section */}
        <section id="pricing" className="pricing-section py-5 bg-light">
          <div className="container">
            <h2 className="text-center poppins-bold mb-4">Choose Your Plan</h2>
            <div className="row text-center">
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Free Plan</h5>
                    <p className="card-text">$0/month, 1 credit</p>
                    <a href="#subscribe" className="btn btn-outline-primary">
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">Premium Plan</h5>
                    <p className="card-text">$29.99/month, 25 credits</p>
                    <a href="#subscribe" className="btn btn-primary">
                      Subscribe Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title">All-Star Plan</h5>
                    <p className="card-text">$99.99/month, 75 credits</p>
                    <a href="#subscribe" className="btn btn-outline-primary">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            Leftover credits can be bought/sold in our credit system <br/>
            Supports payment in cash & cryptocurrencies
          </div>
        </section>
        {/* Contact us section 
        <section
          id="contact"
          className="contact-section py-5 bg-dark text-light"
        >
          <div className="container">
            <h2 className="text-center poppins-bold mb-4">Get in Touch</h2>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows={3}
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Send Message
              </button>
            </form>
          </div>
        </section>*/}
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
