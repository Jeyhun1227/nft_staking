import { theme } from "@/config/theme";
import { Button, useMediaQuery } from "@mui/material";
import NextImage from "next/image";

interface Props {
  label: string;
  link: string;
  background: string;
  size?: "lg" | "md";
}

export const ButtonSocialNetwork = ({
  background,
  label,
  link,
  size = "lg",
}: Props) => {
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Button
      variant="social"
      fullWidth
      target="_blank"
      href={link}
      sx={(theme) => ({
        background,
        height: size === "lg" ? "80px" : "56px",
        "&:hover": {
          background,
          opacity: 0.5,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: 12,
        },
      })}
      startIcon={
        <NextImage
          src={`/images/social-${label}.svg`}
          alt={label}
          width={matches ? 14 : 24}
          height={matches ? 14 : 24}
        />
      }
    >
      {label}
    </Button>
  );
};
