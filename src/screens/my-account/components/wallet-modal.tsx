import { Dialog, IconButton, TextField } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Close from "@mui/icons-material/Close"
import { useTranslation } from "next-i18next";

import { ButtonGradient } from "@/components/buttons/button-gradient";

interface Props {
  open: boolean,
  onClose: () => void;
}

export const WalletAddressModal = ({open, onClose}: Props) => {
  const { t } = useTranslation("common");

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
      }}>
      <Stack
        padding={{xs: 2, md: 3}}
        sx={{
          background: "#1A1C20",
        }}  
      >
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography fontSize={22} fontWeight="700">{t("wallet.walletAddress")}</Typography>
          <IconButton onClick={onClose} size="small">
            <Close />
          </IconButton>
        </Stack>
        <Typography marginTop={2} fontSize={15} lineHeight="140%" color="rgba(255, 255, 255, 0.75)">
          {t("wallet.walletAddressTip")}
        </Typography>
        <Typography marginTop={4} marginBottom={4} fontSize={15} fontWeight="600">{t("wallet.currentWallet")}</Typography>
        <TextField
          label={t("wallet.enterWalletAddress")}
          type={"text"}
         />
         <Typography marginTop={4} fontSize={15} fontWeight="600">{t("wallet.howtofindWalletAddress")}</Typography>
         <Typography marginTop={2} fontSize={14} color="#FF4800">{t("wallet.howtofindWalletAddressTip")}</Typography>
         <Stack marginTop={3} direction="row" justifyContent="flex-end" alignItems="center" spacing={3}>
           <Typography color="#2F98FB" fontWeight="900" sx={{cursor: "pointer"}} onClick={onClose}>{t("common.cancel")}</Typography>
           <ButtonGradient label={t("wallet.addWallet")} />
         </Stack>
      </Stack>
    </Dialog>
  );
};
