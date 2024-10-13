import React from "react";

const Button = ({ text, page }) => {
  return (
    <a className="link" href={page} target="_blank">
      {text}
    </a>
  );
};

export default Button;
