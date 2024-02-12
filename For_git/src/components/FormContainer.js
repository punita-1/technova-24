import { Link } from "react-router-dom";
import FormContainer1 from "./FormContainer1";
import "./FormContainer.css";

const FormContainer = () => {
  return (
    <div className="event" data-scroll-to="eventContainer">
      <div className="gp2-parent">
        <FormContainer1 dimensionCode="/rectangle-22@2x.png" />
        <FormContainer1
          dimensionCode="/rectangle-22@2x.png"
          propTop="0px"
          propLeft="751.3px"
          propLeft1="163.7px"
          propTop1="269.2px"
          propLeft2="170.7px"
          propTop2="267.2px"
        />
        <FormContainer1
          dimensionCode="/rectangle-22@2x.png"
          propTop="0.2px"
          propLeft="0px"
          propLeft1="157px"
          propTop1="279px"
          propLeft2="164px"
          propTop2="277px"
        />
        <FormContainer1
          dimensionCode="/rectangle-22@2x.png"
          propTop="371.3px"
          propLeft="375.7px"
          propLeft1="167.3px"
          propTop1="276.9px"
          propLeft2="174.3px"
          propTop2="274.9px"
        />
        <FormContainer1
          dimensionCode="/rectangle-22@2x.png"
          propTop="371.3px"
          propLeft="751.3px"
          propLeft1="181.7px"
          propTop1="274.9px"
          propLeft2="188.7px"
          propTop2="272.9px"
        />
        <FormContainer1
          dimensionCode="/rectangle-22@2x.png"
          propTop="369.2px"
          propLeft="0px"
          propLeft1="157px"
          propTop1="271px"
          propLeft2="164px"
          propTop2="269px"
        />
      </div>
      <Link className="event-child" to="/see-more" />
      <b className="see-more1">SEE MORE</b>
      <div className="events">EVENTS</div>
    </div>
  );
};

export default FormContainer;
