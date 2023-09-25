import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import { Logo } from "@/components/images/logo";
import { CheckoutContentTitle } from "./content-title";
import { CheckoutContentMethods } from "./content-methods";

export const CheckoutContent = () => {
  return (
    <Stack
      paddingTop={{ xs: 1, md: 4 }}
      paddingBottom={{ xs: 3, md: 11, lg: 22 }}
      sx={{
        backgroundColor: { xs: "transparent", md: "rgba(255, 255, 255, 0.05)" },
        width: "100%",
      }}
      alignItems="center"
    >
      <Stack
        maxWidth={"505px"}
        direction="column"
        alignItems="flex-start"
        spacing={8}
        sx={{ width: "100%" }}
      >
        <Stack width={"100%"} spacing={7}>
          <Box display={{ xs: "none", md: "block" }}>
            <Logo height="28px" />
          </Box>
          <CheckoutContentTitle />
          <CheckoutContentMethods />
        </Stack>
      </Stack>
    </Stack>
  );
};
