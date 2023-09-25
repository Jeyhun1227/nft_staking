import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import NextImage from "next/image";

import checkedIcon from "@/public/images/checked-icon.svg";

export const HomeRoadmapQuarterInfo = ({ text = "V1 of the platform" }) => {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box>
        <NextImage src={checkedIcon} height="24px" />
      </Box>
      <Typography>{text}</Typography>
    </Stack>
  );
};
