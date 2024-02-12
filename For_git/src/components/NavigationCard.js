import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationCard.css";

const NavigationCard = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='robotImage']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGalleryClick = useCallback(() => {
    navigate("/gallery");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='about']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onEventsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='eventContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='footerContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="nav">
      <nav className="nav-elements">
        <div className="home" onClick={onHomeTextClick}>
          Home
        </div>
        <Link className="gallery1" to="/gallery" onClick={onGalleryClick}>
          Gallery
        </Link>
        <div className="about1" onClick={onAboutTextClick}>
          About
        </div>
        <div className="events1" onClick={onEventsTextClick}>
          Events
        </div>
        <div className="contact2" onClick={onContactTextClick}>
          Contact
        </div>
      </nav>
      <div className="group-div">
        <Link className="vector-parent" to="/signup">
          <img className="rectangle-icon" alt="" src="/rectangle-12.svg" />
          <div className="sign-up">Sign up</div>
        </Link>
        <Link className="sign-in" to="/signin">
          Sign in
        </Link>
      </div>
      <img className="dcrust-logo-1-icon" alt="" src="/dcrust-logo-1@2x.png" />
    </nav>
  );
};

export default NavigationCard;
