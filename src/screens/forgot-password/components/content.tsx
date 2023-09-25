import { ForgotPasswordForm } from "./form";
import { SignInButtonSignUp } from "./button-signup";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Logo } from "@/components/images/logo";


export const ForgotPasswordContent = () => {
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
          <ForgotPasswordForm />
        </Box>
        <SignInButtonSignUp />
      </Stack>
    </Stack>
  );
};
