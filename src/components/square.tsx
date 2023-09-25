import React from "react";

export const Square = ({ background = "#FFF", styles = {} }) => {
  return (
    <span
      style={{
        display: "flex",
        width: "8px",
        height: "8px",
        padding: "4px 4px 4px 4px",
        border: "10px solid rgba(255, 255, 255, .1)",
        transform: "rotate(45deg)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          background,
          padding: "4px 4px 4px 4px",
          ...styles,
        }}
      />
    </span>
  );
};
