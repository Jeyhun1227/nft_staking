import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { JoinHeroButton } from "./hero-button";
import { JoinContactList, JoinContactListProps } from "./contact.list";

export const JoinContact = (props: JoinContactListProps) => {
  return (
    <Container sx={{ paddingX: { xs: 0, md: 3 } }}>
      <Stack paddingBottom={23} alignItems="center">
        <JoinContactList {...props} />
        <Box marginTop={12} display={{ xs: "none", md: "block" }}>
          <JoinHeroButton />
        </Box>
      </Stack>
    </Container>
  );
};
