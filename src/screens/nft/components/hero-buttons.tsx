import { ButtonPrimary, ButtonSecondary } from "@/components/buttons/styles";
import { MUILink } from "@/components/mui-link";
import { ROUTES } from "@/config/navigation";
import Stack from "@mui/material/Stack";
import { useTranslation } from "next-i18next";
import NextImage from "next/image";
import { useRouter } from "next/router";

export const NftProjectHeroButtons = ({id}:{id:string}) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="center"
      spacing={2}
    >
      <ButtonPrimary
        onClick={() => {
          router.push({
            pathname: ROUTES.projectRegister,
            query: { id: id },
          });
        }}
        fullWidth
        size="large"
        sx={(theme) => ({
          flex: 2,

          maxWidth: 350,
          [theme.breakpoints.down("sm")]: {
            fontSize: 18,
          },
        })}
      >
        {t("nftProject.heroJoinBtn")}
      </ButtonPrimary>
      <MUILink
        underline="none"
        target={"_blank"}
        href="https://www.spotify.com/fr/"
      >
        <ButtonSecondary
          size="large"
          sx={(theme) => ({
            flex: 1,

            [theme.breakpoints.down("sm")]: {
              fontSize: 14,
            },
          })}
          startIcon={
            <NextImage
              layout="fixed"
              src={`/images/social-network/spotify.svg`}
              alt={"spotify link"}
              width={16}
              height={16}
            />
          }
        >
          {t("nftProject.heroSpotifyBtn")}
        </ButtonSecondary>
      </MUILink>
    </Stack>
  );
};
