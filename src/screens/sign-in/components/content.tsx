import { SignInForm } from "./form";
import { SignInButtonGroupSocialNetwork } from "./button-group-social-network";
import { SignInButtonSignUp } from "./button-signup";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Logo } from "@/components/images/logo";
import { getAuthLink } from "@/services/parse/functions/auth";
import toast from 'react-hot-toast';

export const SignInContent = () => {
  const handleRegisterWithGoogle = async () => {
    try {
      let oauth = await getAuthLink("login");
      if (oauth) {
        window.location.href = oauth;
      }
    } catch (e:any) {
      toast.error(e.message);
    }
  };

  return (
    <Stack
      minHeight={{ xs: "max-content", md: "100vh" }}
      direction="column"
      alignItems="center"
      height={1}
      paddingTop={9}
      paddingBottom={4}
    >
      <Stack
        maxWidth={{ xs: "lg", md: "400px" }}
        width={1}
        height={1}
        justifyContent={{ xs: "flex-start", md: "space-between" }}
      >
        <Box display={{ xs: "none", md: "block" }}>
          <Logo height={40} />
        </Box>

        <Box width={"100%"} marginBottom={{ xs: 6, md: 0 }}>
          <SignInForm />
          <SignInButtonGroupSocialNetwork
            handleSocialAction={handleRegisterWithGoogle}
          />
        </Box>
        <SignInButtonSignUp />
      </Stack>
    </Stack>
  );
};
