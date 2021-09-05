import React from "react";

import "./styles.css";

const Header = ({ text = "" }) => (
  <header className="header">
    <h1>{text}</h1>
  </header>
);

export default Header;
