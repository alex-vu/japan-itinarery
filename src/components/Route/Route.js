import React from "react";
import "./Route.scss";

const Route = ({ children, directions }) => {
  return (
    <div className="route flex align-center light-text br4">
      {children} <div>{directions}</div>
    </div>
  );
};

export default Route;
