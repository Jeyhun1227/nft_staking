import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

export const Logo = (
  props: Partial<
    DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>
  >
) => {
  return <img {...props} src={"/images/logo.svg"} alt="logo Rhapsody" />;
};
