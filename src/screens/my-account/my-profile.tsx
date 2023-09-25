import {useState} from "react";
import { Avatar, Grid, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { useForm, useField } from "react-final-form-hooks";

import { useTranslation } from "next-i18next";
import { emailFormat } from "@/utils/validators";
import { AppTextField } from "@/components/inputs/text";
import { AvatarModal } from "./components/avatar-modal";
import { WalletAddressModal } from "./components/wallet-modal";
import { ReferralModal } from "./components/referral-modal";
import { useAuth } from "@/contexts/auth";
import { ButtonGradient } from "@/components/buttons/button-gradient";
import { Toast } from "@/components/toast";
import { theme } from "@/config/theme";
import { truncate } from "@/utils/date-util";

export const MyProfile = () => {
  const { t } = useTranslation("common");
  const mediumViewport = useMediaQuery(theme.breakpoints.down("md"));
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const [openReferral, setOpenReferral] = useState(false);

  const handleOpenAvatar = () => setOpenAvatar(true);
  const handleCloseAvatar = () => setOpenAvatar(false);
  const handleOpenWallet = () => setOpenWallet(true);
  const handleCloseWallet = () => setOpenWallet(false);
  const handleOpenReferral = () => setOpenReferral(true);
  const handleCloseReferral = () => setOpenReferral(false);
  const handleCopyReferral = () => navigator.clipboard.writeText('https://rhapsody.io/364234');

  const handleAvatarUpdated = () => {
    console.log("Avatar updated");
    handleCloseAvatar();
  };

  const validate = (values: any = {}) => {
    const errors: any = {};
    if (!values.firstName) {
      errors.firstName = t("formError.required");
    }
    if (!values.lastName) {
      errors.lastName = t("formError.required");
    }
    if (!values.email) {
      errors.email = t("formError.required");
    }
    if (emailFormat(values.email)) {
      errors.email = t("formError.invalidEmail");
    }
    return errors;
  };

  const onSubmit = async (values: {
    email: string;
    firstName: string;
    lastName: string;
  }) => {
    try {
      setIsLoading(true);
      const registeredUser = await auth.updateProfile(values);
      if(registeredUser) {
        Toast.success("Success", "Profile updated");
      }
    } catch (e: any) {
      Toast.error("Try again!", e.message);
    }
    setIsLoading(false);
  };

  const loggeduser = auth.getLoggedUser();

  debugger

  const { form, handleSubmit } = useForm({
    onSubmit, // the function to call with your form values upon valid submit
    validate,
    initialValues: {
      firstName: loggeduser.firstName,
      lastName: loggeduser.lastName,
      email:loggeduser.email
    } // a record-level validation function to check all form values
  });

  const firstName = useField("firstName", form);
  const lastName = useField("lastName", form);
  const email = useField("email", form);

  return (
    <Container disableGutters sx={{ marginBottom: 4, marginTop: 4 }}>
      <Grid 
        container spacing={3}
        alignItems="center"
      >
        <Grid item xs={12} md={7}>
          <Stack spacing={{md:6, xs: 3}} onSubmit={handleSubmit} component="form">
            <Stack direction="row" justifyContent={{xs: "center"}}>
              <Box display={{xs: "none", md: "block"}}>
                <Typography fontSize={16} fontWeight="700" marginBottom="8px">
                  {t("account.avatar")}
                </Typography>
                <Box
                  component="span"
                  color="#FFFFFFB0"
                  fontSize={14}>
                  {t("account.avatarDescription")}
                  <Typography
                    color="#3495FB"
                    marginLeft="8px"
                    fontSize={14}
                    sx={{display: "inline-block", lineHeight: "180%", cursor: "pointer"}}
                    onClick={handleOpenAvatar}>
                    {t("common.change")}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{position: "relative"}}>
                <Avatar src={loggeduser.avatarImage?.url} sx={{width: {xs: 80, md: 64}, height: {xs: 80, md: 64}}}/>
                <IconButton
                  sx={{
                    position: "absolute",
                    right: "-4px",
                    bottom: "-4px",
                    backgroundColor: "#24282C",
                    borderRadius: "50%",
                  }}
                  aria-label="avatar link"
                  size="small"
                  onClick={handleOpenAvatar}
                >
                  <CameraAltOutlinedIcon fontSize="inherit" sx={{color: "rgba(255,255,255,0.23)"}}/>
                </IconButton>
              </Box>
            </Stack>
            {[
              {
                label: t("form.labelFirstName"),
                props: { ...firstName.input },
                meta: { ...firstName.meta },
              },
              {
                label: t("form.labelLastName"),
                props: { ...lastName.input },
                meta: { ...lastName.meta },
              },
              {
                label: t("form.labelEmail"),
                props: { ...email.input },
                meta: { ...email.meta },
              },
            ].map((input) =>
              <AppTextField
                error={input.meta.submitFailed && input.meta.error}
                variant="filled"
                helperText={
                  input.meta.submitFailed && input.meta.error && input.meta.error
                }
                key={input?.label}
                label={input?.label}
                type={"text"}
                {...input.props}
              />
            )}
            <Box>
              <ButtonGradient fullWidth={mediumViewport && true} loading={isLoading} label={t("common.saveChanges")} />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack
            marginLeft={{lg: "32px"}}
            justifyContent={"center"}
            height="100%"
            spacing={3}>
            <Stack
              sx={{
                padding: "25px",
                background: "#24282C",
                borderRadius: "8px",
              }}
            >
              <Typography fontSize={{ xs: 14, sm: 18}} fontWeight="700">
                {t("wallet.receivingWallet")}
              </Typography>
              <Box
                marginTop="16px"
                sx={{background: "#1A1C20", padding: "8px", paddingLeft: "12px", borderRadius: "2px"}}>
                <Typography
                  fontSize={{ xs: 14, sm: 16}}
                  color={theme.palette.content.secondary}>
                  {loggeduser.currentWalletInfo?.address && truncate(loggeduser.currentWalletInfo?.address)}
                </Typography>
              </Box>
              <Typography
                color="#2F98FB"
                marginTop="32px"
                fontWeight="900"
                onClick={handleOpenWallet}
                sx={{cursor: "pointer", textTransform: "uppercase"}}>
                {t("wallet.editWallet")}
              </Typography>
            </Stack>
            <Stack
              sx={{
                padding: "25px",
                background: "#24282C",
                borderRadius: "8px",
              }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                width="100%"
              >
                <Typography fontSize={{ xs: 14, sm: 18}} fontWeight="700">
                  {t("referral.earnWithReferral")}
                </Typography>
                <Typography
                  color="#42A4FF"
                  fontSize={{ xs: 14, sm: 16}}
                  onClick={handleOpenReferral}
                  sx={{cursor: "pointer"}}
                >
                  {t("common.more")}
                </Typography>
              </Stack>
              <Typography
                marginTop="16px"
                color="rgba(255, 255, 255, 0.4)"
                fontSize={{ xs: 14, sm: 16}}>
                {t("referral.earnWithReferralDescription")}
              </Typography>
              <Box
                marginTop="16px"
                sx={{background: "#1A1C20", padding: "8px", paddingLeft: "12px", borderRadius: "2px"}}>
                <Typography
                  fontSize={{ xs: 14, sm: 16}}
                  color={theme.palette.content.secondary}>
                  https://rhapsody.io/364234
                </Typography>
              </Box>
              <Typography
                color="#2F98FB"
                marginTop="32px"
                fontWeight="900"
                onClick={handleCopyReferral}
                sx={{cursor: "pointer", textTransform: "uppercase"}}>
                {t("referral.copyReferral")}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <AvatarModal 
        imgSrc={loggeduser.avatarImage?.url || "/images/avatar-user-default.svg"}
        open={openAvatar}
        onClose={handleCloseAvatar}
        onAvatarUpdated={handleAvatarUpdated} />
      <WalletAddressModal open={openWallet} onClose={handleCloseWallet} />
      <ReferralModal open={openReferral} onClose={handleCloseReferral} />
    </Container>
  );
};
