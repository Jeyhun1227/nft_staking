import { CardNft } from "@/components/cards/nft";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { NFT_LIST } from "@/config/data";
import { MUILink } from "@/components/mui-link";
import { ROUTES } from "@/config/navigation";
import { useTranslation } from "next-i18next";
import checkedIcon from "@/public/images/checked-icon.svg";
import NextImage from "next/image";

export const TransactionSuccessCongratulation = () => {
  const { t } = useTranslation("common");

  return (
    <Box
      component="main"
      sx={{
        background: "linear-gradient(180deg, #739374 0%, #191225 100%)",
      }}
    >
      <Container>
        <Stack minHeight={"100vh"} alignItems="center" paddingY={5}>
          <Typography
            variant="typography5"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: 17,
              },
            })}
          >
            {t("transactionSuccess.title")}
          </Typography>
          <Box maxWidth={"406px"} marginY={3}>
            <CardNft {...NFT_LIST[5]!} />         
           </Box>

          <Typography textAlign={"center"} variant={"typography6"}>
            {t("transactionSuccess.owner")}{" "}
            <Typography color="primary.main" variant={"typography6"}>
              Civilization
            </Typography>{" "}
            {t("transactionSuccess.by")}{" "}
            <Typography color="primary.main" variant={"typography6"}>
              Orelsan!
            </Typography>
          </Typography>
          <Typography variant={"typography7"} marginTop={2}>
            {t("transactionSuccess.welcome")}
          </Typography>
          <Typography variant={"typography7"} marginBottom={"18px"}>
            {t("transactionSuccess.remember")}
          </Typography>
          <Stack
            spacing={2}
            direction="row"
            alignItems="start"
            maxWidth={"300px"}
          >
            <NextImage
              src={checkedIcon}
              alt="checked icon"
              height="35px"
              width="35px"
            />
            <Typography variant="typography8">
              {t("transactionSuccess.access")}
            </Typography>
          </Stack>
          <MUILink underline="none" href={ROUTES.account}>
            <Button
              size="large"
              sx={{
                width: "300px",
                marginTop: "38px",
                background: "primary.dark",
                borderRadius: "40px",
                textTransform: "inherit",
                color: "white",
              }}
            >
              {t("transactionSuccess.button")}
            </Button>
          </MUILink>
        </Stack>
      </Container>
    </Box>
  );
};