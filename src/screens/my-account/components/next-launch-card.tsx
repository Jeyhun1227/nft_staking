import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { useTranslation } from "next-i18next";
import RCountdown from "react-countdown";

import { theme } from "@/config/theme";
import { IProject } from "@/props/IProject";

export const NextLaunchCard = ({data} : {data:IProject}) => {
  const mediumViewport = useMediaQuery(theme.breakpoints.down("md"));
  const { t } = useTranslation("common");

  return (
    <Box
      padding={"16px 0 16px 0"}
      position="relative"
      overflow="hidden"
      sx={{        
        borderBottom: "1px solid #343944"
      }}
    >
      <Stack direction="row">
        <img width={mediumViewport ? "100px" : "150px"} height={mediumViewport ? "66px" : "100px"} src={data?.coverImage.url} />
        <Stack 
          flex={1}
          sx={{ position: "relative" }}
          direction={{xs: "column", md: "row"}}
          alignItems={{md:"center"}}
          justifyContent="space-between"
          marginLeft={{xs: 2, md: 4}}
          spacing={{xs: 1, md: 2}}>
          <Box>
            <Stack spacing={1} direction={"row"} alignItems="center">
              <Box width="8px" height="8px" bgcolor="white" borderRadius="4px"/>
              <Typography fontSize={{xs: "14px", md: "16px"}} color="rgba(255,255,255,0.4)">
                {t("account.tokensLeft", { nbrTokens: 100 })}
              </Typography>
            </Stack>
            <Stack maxWidth="400px" marginTop={2}>
              <Typography fontSize={{xs: "16px", md: "17px"}}>{data?.artistOwner?.name} - {data?.title}</Typography>
            </Stack>
          </Box>
          <RCountdown
            date={Date.now() + 1000 * 60 * 60 * 60}
            renderer={({
              days,
              hours,
              minutes,
            }: {
              days: number;
              hours: number;
              minutes: number;
            }) => (
              <Typography fontSize={{xs: "14px", md: "16px"}}>{`${days}${t("time.sdays")} ${hours}${t("time.shours")} ${minutes}`}{t("time.smins")}</Typography>
            )}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
