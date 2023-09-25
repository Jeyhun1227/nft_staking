import React, {useEffect} from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { HeaderButtons, HeaderButtonsProps } from "./header-buttons";
import { HeaderNav } from "./header-nav";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "@/contexts/auth";
import { HeaderDrawer } from "./header-drawer";

export const Header = (props: HeaderButtonsProps) => {

  useEffect(() => {
    auth.getLoggedAsyncUser()
  })

  const auth = useAuth();
  const [open, toggle] = React.useState(false);

  return (
    <Box
      sx={{
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(40px)",
      }}
    >
      <Container component="header" maxWidth="lg">
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
          height="70px"
        >
          <HeaderNav />
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <HeaderButtons login={!!auth.user} {...props} />
          </Box>
          <Box display={{ xs: "block", md: "none" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => {
                toggle(true);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Stack>
      </Container>
      <HeaderDrawer open={open} toggle={toggle} {...props} isMobile />
    </Box>
  );
};
