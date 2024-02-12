import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./FeatureContainer.css";

const FeatureContainer = () => {
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
  return (
    <div className="feature">
      <img className="feature-image-icon" alt="" src="/feature-image@2x.png" />
      <div className="content" data-animate-on-scroll>
        <div className="previously">Previously</div>
        <div className="explore-the-past">
          "Explore the past triumphs and memorable moments that have shaped the
          legacy of our university's innovative spirit."
        </div>
        <div className="request-early-access">
          Request Early Access to Get Started
        </div>
        <Link className="previously1" to="/gallery">
          <div className="previously-child" />
          <b className="visit-gallery">
            <p className="visit-gallery1">visit gallery</p>
          </b>
        </Link>
        <img
          className="istockphoto-1359585151-612x612-icon"
          alt=""
          src="/istockphoto1359585151612x612removebgpreview-1@2x.png"
        />
      </div>
    </div>
  );
};

export default FeatureContainer;
