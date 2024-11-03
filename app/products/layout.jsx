import React from "react";

const layout = ({ children }) => {
  return (
    <div className="mt-[100px]">
      <h2>Products Header</h2>
      {children}
    </div>
  );
};

export default layout;
