import { useCallback, useEffect } from "react";
import AboutCard from "../components/AboutCard";
import ContactContainer from "../components/ContactContainer";
import FormContainer from "../components/FormContainer";
import FeatureContainer from "../components/FeatureContainer";
import NavigationCard from "../components/NavigationCard";
import "./LANDINGPAGE.css";

const LANDINGPAGE = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onInstagramOldImageClick = useCallback(() => {
    window.open("https//:insta");
  }, []);

  const onTwitterXImageClick = useCallback(() => {
    window.open("https://twitter");
  }, []);

  const onFacebookImageClick = useCallback(() => {
    window.open("https://facebook");
  }, []);

  return (
    <div className="landing-page">
      <div className="blur-01" />
      <div className="blur-02" />
      <div className="blur-03" />
      <AboutCard />
      <ContactContainer />
      <FormContainer />
      <div className="venue">VENUE</div>
      <FeatureContainer />
      <div className="cta">
        <div className="cta-child" />
        <div className="dont-miss-out">
          "Don't Miss Out! Register Now and Be a Part of Something
          Extraordinary!"
        </div>
        <div className="set-your-timings">
          SET YOUR TIMINGS AND DONT FORGET TO CATCH US ON 10TH MARCH 2024.
        </div>
        <button className="cta-item" />
        <b className="register-now">Register Now</b>
      </div>
      <header className="header">
        <div className="header-content">
          <h1 className="heading">TECHNOVA 2024</h1>
          <h3 className="desc">
            <p className="ignite-your-passion">{`"Ignite Your Passion for Innovation: Join Us for a Spectacular Fusion of Technology and Talent!" `}</p>
            <p className="ignite-your-passion">&nbsp;</p>
            <p className="ignite-your-passion">&nbsp;</p>
            <p className="ignite-your-passion">
              {" "}
              10 March 2024 DCRUST, MURTHAL
            </p>
          </h3>
          <img
            className="place-marker-icon"
            alt=""
            src="/place-marker@2x.png"
          />
          <img className="schedule-icon" alt="" src="/schedule@2x.png" />
        </div>
        <img
          className="robot-icon"
          alt=""
          src="/robot@2x.png"
          data-scroll-to="robotImage"
          data-animate-on-scroll
        />
      </header>
      <NavigationCard />
      <div className="social-media">
        <img
          className="instagram-old-icon"
          alt=""
          src="/instagram-old@2x.png"
          onClick={onInstagramOldImageClick}
        />
        <img
          className="twitterx-icon"
          alt=""
          src="/twitterx@2x.png"
          onClick={onTwitterXImageClick}
        />
        <img
          className="facebook-icon"
          alt=""
          src="/facebook@2x.png"
          onClick={onFacebookImageClick}
        />
        <div className="connect-with-technova-container">
          <span>Connect with Technova on Social Media.</span>
          <span className="span">{` `}</span>
        </div>
      </div>
    </div>
  );
};

export default LANDINGPAGE;
