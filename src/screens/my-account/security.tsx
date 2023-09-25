import { Container, Box, Stack, Typography, Button } from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';

import { Toast } from "@/components/toast";
import { useAuth } from "@/contexts/auth";

export const Security = () => {
  const { t } = useTranslation("common");
  const auth = useAuth();
  const router = useRouter();

  const handleResetPassword = async () => {
    try {
      const registeredUser = await auth.resetPassword();
      if(registeredUser){
        Toast.success("Success", "Reset link sent to your email.");
      }
    } catch (error:any) {
      Toast.error("Try again", error.message);
    }
  } 

  const handleDesactivateAccount = async () => {
    try {
      const result = await auth.deleteAccount();
      if(result){
        Toast.success("Success", result);
        auth.logOut();
        router.push('/sign-in');
      }
    } catch (error:any) {
      Toast.error("Try again", error.message);
    }
  } 

  return (
    <Container disableGutters sx={{ marginBottom: 4, marginTop: 4 }}>
      <Stack spacing={4}>
        <Box>
          <Typography fontSize={16} fontWeight="700">
            {t("form.labelPassword")}
          </Typography>
          <Button
            onClick={handleResetPassword}
            size="small"
            sx={{
              marginTop: "24px",
              fontSize: "14px",
              background: "#24282C",
              border: "1px solid #343944;",
              boxSizing: "border-box;",
              borderRadius: "32px;",
              color: "rgba(255, 255, 255, 0.8);",
            }}
          >
            {t("forgotPassword.resetYourPasswordByEmail")}
          </Button>
          <Typography marginTop="12px" color="rgba(255, 255, 255, 0.7)" fontSize={12}>
            {t("account.resetPasswordTip")}
          </Typography>
        </Box>
        <Stack maxWidth="480px" direction="column" spacing={2}>
          <Typography fontSize={16} fontWeight="700">
            {t("account.deactivateAccount")}
          </Typography>
          <Typography
            color="rgba(255,255,255,0.7)"
            marginTop="8px"
            lineHeight="150%"
            fontSize={14}>
            {t("account.deactivateAccountTip")}
          </Typography>
          <Typography
            color="#2F98FB"
            marginLeft="8px"
            fontSize={14}
            fontWeight="900"
            onClick={handleDesactivateAccount}
            sx={{display: "inline-block", cursor: "pointer"}}>
            {t("account.deactivate")}
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
};
