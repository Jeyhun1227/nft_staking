import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";

interface Props {
  title: string;
  titleColor?: string;
  subtitle: string;
  children: ReactNode;
}

export const SectionDefault = ({
  title,
  subtitle,
  children,
  titleColor = "primary.main",
}: Props) => {
  return (
    <Container component="section" sx={{ marginBottom: 15 }}>
      <Typography
        component="h2"
        variant="subheadline"
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: 18,
          },
        })}
        color={titleColor}
      >
        {title}
      </Typography>
      <Typography
        marginTop={2}
        marginBottom={5}
        component="h3"
        variant="headline1"
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: 32,
          },
        })}
      >
        {subtitle}
      </Typography>
      {children}
    </Container>
  );
};
