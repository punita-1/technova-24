import "./ContactContainer.css";

const ContactContainer = () => {
  return (
    <div className="footer" data-scroll-to="footerContainer">
      <div className="background" />
      <div className="gpt-3-all-rights">© 2021 GPT-3. All rights reserved.</div>
      <div className="contact-us">CONTACT US</div>
      <div className="links">
        <div className="links1">Links</div>
        <div className="overons">Overons</div>
        <div className="privacy-policy">Social Media</div>
        <div className="counters">Counters</div>
        <div className="contact">Contact</div>
      </div>
      <div className="company">
        <div className="overons">{`Terms & Conditions`}</div>
        <div className="privacy-policy">Privacy Policy</div>
        <div className="counters">Contact</div>
        <div className="links1">Company</div>
      </div>
      <div className="get-in-touch">
        <div className="crechterwoord-k12-182">
          Crechterwoord K12 182 DK Alknjkcb
        </div>
        <div className="div">085-132567</div>
        <div className="infopaymenet">info@payme.net</div>
        <div className="links1">Get in touch</div>
      </div>
      <div className="logo">
        <div className="crechterwoord-k12-1821">
          Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
