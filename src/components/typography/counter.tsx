import Typography from "@mui/material/Typography";
import React from "react";

export type TextCounterItemType = {
  value: string;
  unit: string;
};

export interface TextCounterProps {
  counter: TextCounterItemType[];
  variantColor?: "dark" | "light";
  variantText?: "subheadline" | "headline1";
  variantStyle?: "offer" | "banner";
  reverse?: boolean;
}

const generateKey = (item: TextCounterItemType, idx: number) =>
  `${item?.value}-${item?.unit}-${idx}`;

const sizes = {
  offer: [25, 25, 50],
  banner: [10, 15, "inherit"],
  project: [16, 16, 26, 26],
};

export const TextCounter = ({
  counter,
  reverse,
  variantColor = "dark",
  variantText = "subheadline",
  variantStyle = "banner",
}: TextCounterProps) => {
  const color = variantColor === "dark" ? "bg.dark" : "white";
  const unitColor = "primary.main";

  return (
    <Typography
      variant={variantText}
      fontSize={sizes[variantStyle]}
      color={reverse ? unitColor : color}
    >
      {counter.map((item, idx) => (
        <React.Fragment key={generateKey(item, idx)}>
          <Typography
            variant={variantText}
            component="span"
            color={reverse ? color : unitColor}
            fontSize={sizes[variantStyle]}
          >
            {item?.value}
          </Typography>{" "}
          {item?.unit}{" "}
        </React.Fragment>
      ))}
    </Typography>
  );
};
