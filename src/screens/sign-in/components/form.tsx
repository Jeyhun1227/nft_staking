import { useState } from "react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useForm, useField } from "react-final-form-hooks";

import { AppTextField } from "@/components/inputs/text";
import { ButtonPrimary } from "@/components/buttons/styles";
import { MUILink } from "@/components/mui-link";
import { Toast } from "@/components/toast";
import { ROUTES } from "@/config/navigation";
import { useAuth } from "@/contexts/auth";
import {emailFormat} from "@/utils/validators"

export const SignInForm = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();

  const validate = (values: any = {}) => {
    const errors: any = {};
    if (!values.password) {
      errors.password = t("formError.required");
    }
    if (!values.email) {
      errors.email = t("formError.required");
    }
    if (emailFormat(values.email)) {
      errors.email = t("formError.invalidEmail");
    }
    return errors;
  };

  const onSubmit = async (values: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      const signeddUser = await auth.logIn(values);
      if (signeddUser) {
        router.push({
          pathname: ROUTES.account,
        });
        setIsLoading(false);
      }
    } catch (e:any) {
      setIsLoading(false)
      Toast.error(`Try again!`, e.message);
    }
  };

  const { form, handleSubmit } = useForm({
    onSubmit, // the function to call with your form values upon valid submit
    validate, // a record-level validation function to check all form values
  });

  const email = useField("email", form);
  const password = useField("password", form);

  return (
    <Stack width="100%" spacing={{ xs: 3, md: 2 }}>
      <Typography variant="title1">{t("signIn.logIn")}</Typography>
      <Stack
        onSubmit={handleSubmit}
        component="form"
        spacing={{ xs: 3, md: 2 }}
      >
        {[
          {
            label: t("form.labelEmail"),
            props: { ...email.input },
            meta: { ...email.meta },
          },
          {
            label: t("form.labelPassword"),
            type: "password",
            props: { ...password.input },
            meta: password.meta,
          },
        ].map((input) => (
          <Box key={input?.label}>
            <AppTextField
              fullWidth
              error={input.meta.submitFailed && input.meta.error}
              variant="filled"
              helperText={
                input.meta.submitFailed && input.meta.error && input.meta.error
              }
              label={input?.type == "date" ? "" : input?.label}
              type={input?.type ?? "text"}
              {...input.props}
            />
            <MUILink
              href={{
                pathname: ROUTES.forgotPassword,
              }}
            >
             {input.type === "password" && <Button
                variant="text"
                sx={{
                  textTransform: "capitalize",
                }}
              >
                {"Forgot your password?"}
              </Button>}
            </MUILink>
          </Box>
        ))}
        <ButtonPrimary
          loading={isLoading}
          type="submit"
          size="large"
          sx={{
            fontSize: { xs: 18 },
          }}
        >
          {t("signIn.continue")}
        </ButtonPrimary>
      </Stack>
    </Stack>
  );
};
