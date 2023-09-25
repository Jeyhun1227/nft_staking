import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Stack from "@mui/material/Stack";

import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";

export interface CardNftBlockLinkProps {
  tokensLeft?: number;
}

export const CardNftBlockLink = ({
  tokensLeft = 100,
}: CardNftBlockLinkProps) => {
  return (
    <Stack
      direction="row"
      alignItems="alignItems"
      justifyContent={"space-between"}
    >
      <Stack spacing={1}>
        <Typography variant="bodyB1">Drop in progress</Typography>
        <Typography>{tokensLeft} tokens left</Typography>
      </Stack>
      <IconButton
        aria-label="link"
        sx={{
          backgroundColor: "primary.main",
          boxShadow: "0px 7px 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Stack>
  );
};
