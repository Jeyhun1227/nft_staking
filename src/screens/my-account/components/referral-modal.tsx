import { Box, Dialog, IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Close from "@mui/icons-material/Close"
import { useTranslation } from "next-i18next";

import { theme } from "@/config/theme";

type RefferralItem = {
  userName: string;
  token: number;
  date: string;
}

interface ReferralProps {
  data?: RefferralItem
}
const ReferralItem = ({data}: ReferralProps) => {
  return (
    <Stack marginTop={2} direction="row">
      <Typography fontSize={{xs: "13px", md: "14px"}} flex={1}>{data?.userName}</Typography>
      <Typography fontSize={{xs: "13px", md: "14px"}} flex={1} textAlign="center">{`${data?.token} MATIC`}</Typography>
      <Typography fontSize={{xs: "13px", md: "14px"}} flex={1} textAlign="right">{data?.date}</Typography>
    </Stack>
  );
};

const referralList = [
  {
    userName: "Guillaume Tollouse",
    token: 2055,
    date: "07 MAr, 2022 at 15:40",
  },
  {
    userName: "Emiliano Garcia",
    token: 1523,
    date: "02 Mar, 2022 at 15:40",
  },
  {
    userName: "Arlene McCoy",
    token: 1211,
    date: "23 Feb, 2022 at 08:40",
  },
]

interface Props {
  open: boolean,
  onClose: () => void;
}

export const ReferralModal = ({open, onClose}: Props) => {
  const { t } = useTranslation("common");
  const referralUrl = "https://sxsrf=APq-WBsWFapuAPq-WBsWFapu";
  const handleCopyReferral = () => navigator.clipboard.writeText(referralUrl);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      disableScrollLock={ true }
      PaperProps={{
        sx: {
          margin: "0 12px",
          borderRadius: "8px"
        },
      }}
      >
      <Stack
        padding={{xs: 2, md: 3}}
        sx={{
          background: "#1A1C20",
        }}  
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography fontSize={22} fontWeight="700">{t("referral.earnWithReferral")}</Typography>
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Stack>
        <Typography marginTop={2} fontSize={15} lineHeight="140%" color="rgba(255, 255, 255, 0.75)">
          {t("referral.earnWithReferralTip")}
        </Typography>
        <Typography marginTop={4} marginBottom={2} fontSize={15} fontWeight="600">{t("referral.referralURL")}</Typography>
        <Box
          display="flex"
          alignItems="center"
          marginTop={2}
          sx={{
            position: "relative",
            background: "#1A1C20",
            height: "40px",
            borderBottom: "1px solid",
            borderBottomColor: "rgba(227, 226, 226, 0.4)"
          }}
        >
          <Typography
            fontSize={{ xs: 14, sm: 16}}
            color="rgba(255, 255, 255, 0.4)">
            {referralUrl}
          </Typography>
          <Typography
            color="#2F98FB"
            sx={{
              position: "absolute",
              right: "0",
              cursor: "pointer"
            }}
            onClick={handleCopyReferral}
          >
            {t("common.copy")}
          </Typography>
        </Box>
         <Typography marginTop={4} fontSize={15} fontWeight="600">{t("referral.referralList")}</Typography>
         <Stack marginTop={4} direction="row">
            <Typography color={theme.palette.content.gray1} flex={1} fontSize={{xs: "14px", md: "15px"}}>{t("referral.userName")}</Typography>
            <Typography color={theme.palette.content.gray1} flex={1} fontSize={{xs: "14px", md: "15px"}} textAlign="center">{t("referral.earnToken")}</Typography>
            <Typography color={theme.palette.content.gray1} flex={1} fontSize={{xs: "14px", md: "15px"}} textAlign="right">{t("referral.registerDate")}</Typography>
         </Stack>
         {
           referralList.map((item, index) =>
            <ReferralItem key={index} data={item}/>
           )
         }
      </Stack>
    </Dialog>
  );
};
