import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import { useTranslation } from "next-i18next";

export const FollowUsWithNewsletterInput = () => {
  const { t } = useTranslation("common");

  return (
    <Stack
      sx={{
        background: "#CBC9CF",
      }}
      marginTop={{ xs: 3, md: 7 }}
      marginBottom={{ xs: 3, md: 12 }}
      padding={1}
      borderRadius={"12px"}
      maxWidth={580}
      width="100%"
      direction="row"
      alignItems="center"
      spacing={2}
    >
      <Input
        placeholder="Type your email here"
        aria-placeholder="Type your email here"
        disableUnderline
        sx={{
          color: "#574E65",
          marginLeft: 2,
          flex: 1,
        }}
      />
      <Button
        variant="contained"
        disableElevation
        sx={{ borderRadius: "8px", color: "white" }}
      >
        {t("followUs.subscribeBtn")}
      </Button>
    </Stack>
  );
};
