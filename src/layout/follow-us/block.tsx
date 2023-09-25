import { Container, Box } from "@mui/material";
import { ReactNode } from "react";

import { FollowUsBlockLed } from "./block-led";

interface FollowUsBlockProps {
  children: ReactNode;
}

export const FollowUsBlock = ({ children }: FollowUsBlockProps) => {
  return (
    <Box component="section" sx={{ position: "relative" }}>
      <FollowUsBlockLed />
      <Box
        sx={{
          background: "linear-gradient(95.47deg, #FFFFFF -1.13%, #E0DBE9 100%)",
          position: "relative",
          zIndex: 100,
        }}
        paddingY={{ xs: 5, md: 15 }}
      >
        <Container>{children}</Container>
      </Box>
    </Box>
  );
};
