import React from "react";
import "../../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import PropTypes from "prop-types";

const Contact = (props) => {
  const styleObject = {
    color: "#e67aa8",
    textAlign: "center",
    paddingBottom: "10px",
    fontSize: ".9rem",
    lineHeight: "1.5",
  };

  return (
    <div style={styleObject} className="Contact">
      <h2>Contact</h2>
      <p>
        {" "}
        Telephone <br />
        {props.Telephone}{" "}
      </p>
      <p>
        {" "}
        Email
        <br />
        {props.Email}
      </p>
      <p>
        {" "}
        Adresse
        <br />
        {props.Adresse}
      </p>
      <button
        style={{ color: "White" }}
        type="button"
        className="btn btn-lg "
        id="btn-fb"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://www.facebook.com/alouanihbib/";
        }}
      >
        <i className="fab fa-facebook"></i>
      </button>
      <button
        style={{ color: "White" }}
        type="button"
        className="btn btn-lg"
        id="btn-twitter"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://twitter.com/hboub315";
        }}
      >
        <i className="fab fa-twitter"></i>
      </button>
      <button
        style={{ color: "White" }}
        type="button"
        className="btn btn-lg "
        id="btn-linkedin"
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://www.linkedin.com/in/habib-alouani-b29b88104/";
        }}
      >
        <i className="fab fa-linkedin-in"></i>
      </button>
    </div>
  );
};

Contact.defaultProps = {
  Telephone: "(+216) 53693636",
  Adresse: "Les berges du lac",
  Email: "alouanihbib@hotmail.com",
};
Contact.propTypes = {
  Telephone: PropTypes.string,
  Email: PropTypes.string,
  Adresse: PropTypes.string,
};

export default Contact;
