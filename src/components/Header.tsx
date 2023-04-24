import React from "react";

export const Header = ({ title = "Header" }) => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        color: "white",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "24px 0",
      }}
    >
      {title}
    </div>
  );
};
