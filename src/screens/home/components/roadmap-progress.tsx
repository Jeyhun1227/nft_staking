import { Box, Stack } from "@mui/material";
import NextImage from "next/image";
import onlyLogo from "@/public/images/logo-only.svg";

import roadMapImg from "@/public/images/home/roadmap.svg";

export const HomeRoadmapProgress = () => {
  return (
    <Stack alignItems="center" marginTop={-30}>
      <Box position="relative">
        <Box position="absolute" top={"50%"} left="45%">
          <NextImage src={onlyLogo} alt="logo" />
        </Box>
        <Box left={10}>
          <NextImage src={roadMapImg} alt="roadmap progress" />
        </Box>
      </Box>
    </Stack>
  );
};
