import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface Props {
  titleColor?: string;
  imgSrc?: string;
  job?: string;
  name?: string;
  description?: string;
}

export const HomeTeamsListItem = ({
  imgSrc = "/images/member.jpg",
  job = "CTO",
  description = "Founder of six figure agency",
  name = "Jean Michel Alandou",
  titleColor = "primary.main",
}: Props) => {
  return (
    <Stack spacing={1} alignItems="center" sx={{ color: "white" }}>
      <Box
        sx={{
          padding: 2,
          borderRadius: "50%",
          border: "1px solid",
          borderColor: titleColor,
          marginBottom: 2,
        }}
      >
        <Avatar
          src={imgSrc}
          sx={{ minWidth: 80, width: "100%", maxWidth: 180, height: "100%" }}
        />
      </Box>

      <Typography
        variant="bodyB1"
        sx={(theme) => ({
          height: 36,
          textTransform: "uppercase",
          [theme.breakpoints.down("sm")]: {
            fontSize: 14,
          },
        })}
        color={titleColor}
      >
        {job}
      </Typography>
      <Typography
        variant="title2"
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: 17,
          },
        })}
      >
        {name}
      </Typography>
      <Typography
        variant="body2"
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            fontSize: 15,
          },
        })}
      >
        {description}
      </Typography>
    </Stack>
  );
};
