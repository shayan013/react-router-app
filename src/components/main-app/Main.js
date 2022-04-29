import React from "react";
import "./main.css";

function Main(props) {
  const { children } = props;
  return (
    <div className="main">
      <div className="main-content">{children}</div>
    </div>
  );
}

export default Main;
