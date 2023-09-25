import { MUILink } from "@/components/mui-link";
import { Typography } from "@mui/material";

interface Props {
  label: string;
  titleColor?: string;
  href?: string;
}

export const FooterNavListColItem = ({
  label,
  titleColor,
  href = "/",
}: Props) => {
  return titleColor ? (
    <Typography
      textTransform={"uppercase"}
      variant="bodyB1"
      color={titleColor}
      gutterBottom
    >
      {label}
    </Typography>
  ) : (
    <MUILink href={href} sx={{ color: "white", textDecoration: "none" }}>
      {label}
    </MUILink>
  );
};
