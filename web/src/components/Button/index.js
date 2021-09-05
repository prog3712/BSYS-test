import React from "react";

import "./styles.css"

const Button = ({ label, onClick = () => {}, testId = "test-button" }) => (
  <div className="wrapperMyButton">
    <button type="button" className="myButton" onClick={onClick} data-testid={testId} >
      {label}
    </button>
  </div>
);

export default Button;
