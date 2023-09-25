import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuItem from '@mui/material/MenuItem';
import IconButton from "@mui/material/IconButton";
import Divider from '@mui/material/Divider';
import { Drawer, Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import CloseIcon from "@mui/icons-material/Close";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { HeaderNavLink } from "./header-nav-link";
import { useTranslation } from "next-i18next";
import { ROUTES } from "@/config/navigation";
import { Logo } from "@/components/images/logo";
import { MUILink } from "@/components/mui-link";
import { useRouter } from "next/router";

import { HeaderButtons, HeaderButtonsProps } from "./header-buttons";
import { Copyright } from "@/components/typography/copyright";
import { theme } from "@/config/theme";
import { useAuth } from "@/contexts/auth";

interface Props extends HeaderButtonsProps {
  toggle: (willBeOpen: boolean) => void;
  open: boolean;
}

export const HeaderDrawer = ({ open, toggle, login, ...props }: Props) => {
  const { t } = useTranslation("common");
  const auth = useAuth();
  const router = useRouter();
  const loggeduser = auth.getLoggedUser();

  const handleLogout = async () => {
    try {
      toggle(false);
      await auth.logOut()
      router.push("/sign-in");
    } catch (e) {
    }
  };

  return (
    <Drawer
      anchor={"top"}
      open={open}
      onClose={() => {
        toggle(false);
      }}
    >
      <Box textAlign={"center"} bgcolor={auth.user ? "#1A1C20" : "bg.dark"}>
        <Container>
          <Stack minHeight={"100vh"} alignItems={"center"}>
            <Box alignSelf={"flex-end"} marginBottom={10}>
              <IconButton
                size="large"
                color="inherit"
                aria-label="menu"
                onClick={() => {
                  toggle(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
            <Box sx={{display: auth.user && "none"}}>
              <Stack spacing={5} component="nav">
                {[
                  { label: t("header.explore"), path: ROUTES.explore },
                  { label: t("header.join"), path: ROUTES.join },
                  { label: t("header.about"), path: ROUTES.faq },
                ].map((link) => (
                  <HeaderNavLink key={link?.path} {...link} />
                ))}
              </Stack>
              <Box marginY={10}>
                <HeaderButtons {...props} />
              </Box>

              <Stack spacing={3}>
                <MUILink href={ROUTES.home}>
                  <Logo height={"22px"} />
                </MUILink>
                <Typography
                  paragraph
                  variant="subheader3"
                  color="rgba(225,225,225,0.8)"
                  maxWidth={"400px"}
                >
                  {t("footer.description")}
                </Typography>
                <Copyright />
              </Stack>
            </Box>
            <Stack sx={{display: auth.user ? "block" : "none"}} width="100%">
              <MenuItem>
                <Stack direction="row" alignItems="center" spacing="16px">
                  <Avatar src={loggeduser?.avatarImage?.url} sizes="12px" alt="Remy Sharp" />
                  <Box>
                    <Typography textAlign="left">{loggeduser?.firstName} {loggeduser?.lastName}</Typography>
                    <Typography textAlign="left" color={theme.palette.content.gray1}>{loggeduser?.email}</Typography>
                  </Box>
                </Stack>
              </MenuItem>
              <Divider />
              <MenuItem component={MuiLink} href={ROUTES.account}>
                <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
                  <Typography color={theme.palette.content.gray1}>{t("menu.settings")}</Typography>
                  <SettingsOutlinedIcon sx={{ color: theme.palette.content.gray1 }}/>
                </Stack>
              </MenuItem>
              <MenuItem component={MuiLink} href={ROUTES.faq}>
                <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
                  <Typography color={theme.palette.content.gray1}>{t("menu.faq")}</Typography>
                  <LiveHelpOutlinedIcon sx={{ color: theme.palette.content.gray1 }}/>
                </Stack>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleLogout}>
                <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
                  <Typography color={theme.palette.content.gray1}>{t("menu.logout")}</Typography>
                  <LogoutOutlinedIcon sx={{ color: theme.palette.content.gray1 }}/>
                </Stack>
              </MenuItem>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Drawer>
  );
};
