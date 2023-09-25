import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/auth";

import { useTranslation } from "next-i18next";
import { AccountInfoTotal } from "./info-total";

export const AccountInfo = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const auth = useAuth();

  const handleLogout = async () => {
    try {
      await auth.logOut()

      router.push("/sign-in");

    } catch (e) {
    }
  };

  return (
    <Container sx={{ marginBottom: 4 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={3}
          paddingBottom={2}
        >
          <Avatar sx={{ width: 80, height: 80 }} />
          <Stack alignItems={{ xs: "center", md: "flex-start" }}>
            <Typography marginBottom="12px" variant="title1">
              Valentin Le Du
            </Typography>
            <Typography color="rgba(255, 255, 255, 0.8)">
              0x9158...0fbC
            </Typography>
          </Stack>
        </Stack>
        <Box marginBottom={2} display={{ xs: "block", md: "none" }}>
          <AccountInfoTotal />
        </Box>

        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          spacing={1}
        >
          <Button
            sx={{
              width: 184,
              background: "#574E65",
              color: "white",
              textTransform: "none",
            }}
          >
            {t("account.editMyInfo")}
          </Button>
          <Box display={{ xs: "none", md: "block" }}>
            <Button
              sx={{
                width: 184,
                background: "#574E65",
                color: "white",
                textTransform: "none",
              }}
              onClick={handleLogout}
            >
              {t("account.logOut")}
            </Button>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};
