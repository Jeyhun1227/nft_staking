import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NextImage from "next/image";
import googleIcon from "@/public/images/google-icon.svg";
import { useTranslation } from "next-i18next";

export const SignInButtonGroupSocialNetwork = ({
  handleSocialAction,
}: {
  handleSocialAction: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { t } = useTranslation("common");

  return (
    <Stack width="100%">
      <Stack marginY={1} direction="row" spacing="7px" alignItems={"center"}>
        <Box flex={1} height="1px" bgcolor={"rgba(225,225,225,0.2)"} />
        <Typography color="#8993A4">{t("signIn.or")}</Typography>
        <Box flex={1} height="1px" bgcolor={"rgba(225,225,225,0.2)"} />
      </Stack>
      <Stack width="100%">
        {[
          { socialNetwork: "Google", img: googleIcon },
          // { socialNetwork: "Apple", img: "/images/apple-icon.svg" },
          // { socialNetwork: "Facebook", img: "/images/fb-icon.svg" },
        ].map((btn) => (
          <Button
            onClick={handleSocialAction}
            variant="outlined"
            fullWidth
            sx={{
              border: "1px solid rgba(255, 255, 255, 0.2)",
              justifyContent: "flex-start",
              color: "white",
            }}
            startIcon={
              <NextImage src={btn.img} alt={`${btn.socialNetwork} icon`} />
            }
            key={btn.socialNetwork}
          >
            <Typography variant="bodyB1" flex={1}>
              {t("signIn.continueWith", { socialNetwork: btn.socialNetwork })}
            </Typography>
          </Button>
        ))}
      </Stack>
    </Stack>
  );
};
