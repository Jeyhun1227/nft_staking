import {
  ButtonClasses,
  ButtonProps,
  Interpolation,
  Theme,
} from "@mui/material";
import { OverridesStyleRules } from "@mui/material/styles/overrides";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    social: true;
  }
}

type ThemeButton = {
  defaultProps?: Partial<ButtonProps<"button", {}>>;
  styleOverrides?: Partial<
    OverridesStyleRules<keyof ButtonClasses, "MuiButton", Theme>
  >;
  variants?: {
    props: Partial<ButtonProps<"button", {}>>;
    style: Interpolation<{
      theme: Theme;
    }>;
  }[];
};

export const themeButton: ThemeButton = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
    variant: "contained",
  },
  styleOverrides: {
    root: {
      borderRadius: "8px",
    },
    sizeLarge: ({ theme }) => ({
      ...theme?.typography?.title3,
      padding: "16px 24px",
      height: "56px",
    }),
    sizeMedium: ({ theme }) => ({
      ...theme?.typography?.bodyB1,
      padding: "14px 16px",
      height: "48px",
    }),
    sizeSmall: ({ theme }) => ({
      ...theme?.typography?.bodyB2,
      padding: "10px 12px",
      height: "36px",
    }),
  },
  variants: [
    {
      props: {
        variant: "social",
        fullWidth: true,
      },
      style: (base) => ({
        color: "white",
        textTransform: "uppercase",
        transition: base.theme?.transitions.create([
          "background-color",
          "opacity",
        ]),
        [base.theme?.breakpoints.down("md")]: {
          height: "56px",
        },
        [base.theme?.breakpoints.down("sm")]: {
          height: "40px",
          ...base.theme?.typography?.title4,
        },
      }),
    },
  ],
};
