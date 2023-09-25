import React from "react";

interface props {
  borderColor?: string;
  background: string;
  width?: string;
  height?: string;
  filter?: string;
}

export const HeroArtistsListItem = ({
  borderColor,
  background,
  width = "38.4px",
  height = "38.4px",
  filter = "none",
}: props) => {
  return (
    <span
      style={{
        display: "flex",
        width: borderColor ? "48px" : "auto",
        height: borderColor ? "48px" : "auto",
        border: borderColor ? `0.672941px solid ${borderColor}` : 0,
        borderRadius: "50%",
        alignItems: borderColor ? "center" : "flex-start",
        justifyContent: borderColor ? "center" : "flex-start",
        zIndex: 1,
      }}
    >
      <span
        style={{
          width,
          height,
          filter,
          borderRadius: "50%",
          background,
          backgroundSize: "contain",
        }}
      />
    </span>
  );
};
