import { useMemo } from "react";
import { Link } from "react-router-dom";
import "./FormContainer1.css";

const FormContainer1 = ({
  dimensionCode,
  propTop,
  propLeft,
  propLeft1,
  propTop1,
  propLeft2,
  propTop2,
}) => {
  const gp2Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const rectangleAStyle = useMemo(() => {
    return {
      left: propLeft1,
      top: propTop1,
    };
  }, [propLeft1, propTop1]);

  const rEGISTERNOWStyle = useMemo(() => {
    return {
      left: propLeft2,
      top: propTop2,
    };
  }, [propLeft2, propTop2]);

  return (
    <div className="gp2" style={gp2Style}>
      <img className="gp2-child" alt="" src={dimensionCode} />
      <div className="rectangle-parent">
        <div className="group-child1" />
        <div className="sep-26-2021-parent">
          <b className="sep-26-2021">Sep 26, 2021</b>
          <b className="read-full-article">Read Full Article</b>
          <div className="gpt-3-and-open">
            GPT-3 and Open AI is the future. Let us exlore how it is?
          </div>
        </div>
      </div>
      <Link
        className="gp2-item"
        to="/registernow-phase1-rules"
        style={rectangleAStyle}
      />
      <b className="register-now1" style={rEGISTERNOWStyle}>
        REGISTER NOW
      </b>
    </div>
  );
};

export default FormContainer1;
