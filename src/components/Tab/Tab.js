import React from "react";

const Tab = ({ children, activeIndex }) => {
  return (
    <div>
      {/* Returns single element or an array */}
      {React.Children.map(children, (item, index) => {
        return activeIndex === index ? item : item[0];
      })}
    </div>
  );
};

export default Tab;
