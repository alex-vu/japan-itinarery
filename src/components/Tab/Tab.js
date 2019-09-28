import React from "react";

const Tab = ({ children, activeIndex }) => {
  return (
    <div>
      {children.map((item, index) => {
        return activeIndex === index ? item : item[0];
      })}
    </div>
  );
};

export default Tab;
