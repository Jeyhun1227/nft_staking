import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { SignUpForm } from "./form";
import { SignUpMusic } from "./music";
import { useRouter } from "next/router";
import { Logo } from "@/components/images/logo";
import { Button } from "@mui/material";
import { MUILink } from "@/components/mui-link";
import { ROUTES } from "@/config/navigation";
import { useTranslation } from "next-i18next";

export const SignUpContent = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const step = router?.query?.step;

  const isInfo = step === "1";

  return (
    <Stack
      minHeight={{ xs: "max-content", md: "100vh" }}
      direction="column"
      alignItems="center"
      height={1}
      paddingY={3}
    >
      <Stack
        maxWidth={{ xs: "lg", md: isInfo ? "400px" : "550px" }}
        width={1}
        height={1}
      >
        <Stack
          marginBottom={isInfo ? 2 : 10}
          display={{ xs: "none", md: "flex" }}
          direction="row"
          alignItems="center"
          justifyContent={"space-between"}
        >
          <Box>
            <Logo height={40} />
          </Box>
          {!isInfo && (
            <MUILink
              href={{
                pathname: ROUTES.signIn,
              }}
            >
              <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                {t("signIn.logIn")}
              </Button>
            </MUILink>
          )}
        </Stack>

        {isInfo ? <SignUpForm /> : <SignUpMusic />}
      </Stack>
    </Stack>
  );
};
