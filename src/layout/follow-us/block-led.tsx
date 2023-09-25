import { Box } from "@mui/material";

export const FollowUsBlockLed = () => {
  return (
    <Box
      sx={{
        width: "200%",
        height: "100%",
        position: "absolute",
        left: "-50%",
        top: 0,
        background: "rgba(66, 164, 255, 0.31)",
        border: "2px solid #42A4FF",
        filter: "blur(20px)",
        boxShadow: "0px 16px 40px rgba(66, 164, 255, 0.33)",
        transform: "rotate(-1.95deg)",
      }}
    />
  );
};
