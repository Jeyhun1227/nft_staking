import { useState } from "react"
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DatePicker from "@mui/lab/DatePicker";
import toast from "react-hot-toast";
import { useForm, useField } from "react-final-form-hooks";
import { useRouter } from "next/router";
import { ROUTES } from "@/config/navigation";
import { ButtonBack } from "@/components/buttons/back";
import { useAuth } from "@/contexts/auth";
import { getAuthLink } from "@/services/parse/functions/auth";
import { AppTextField } from "@/components/inputs/text";
import { useTranslation } from "next-i18next";
import { SignInButtonGroupSocialNetwork } from "@/screens/sign-in/components/button-group-social-network";
import { ButtonPrimary } from "@/components/buttons/styles";
import { emailFormat, isOver18 } from "@/utils/validators";

export const SignUpForm = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false)

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
    if (!values.password) {
      errors.password = t("formError.required");
    }
    if (!values.birthDate) {
      errors.birthDate = t("formError.required");
    }
    if (emailFormat(values.email)) {
      errors.email = t("formError.invalidEmail");
    }
    if (!isOver18(values.birthDate)) {
      errors.birthDate = t("formError.invalidAge");
    }
    return errors;
  };

  const onSubmit = async (values: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
  }) => {
    try {
      setIsLoading(true)
      const registeredUser = await auth.register(values);
      if (registeredUser) {
        router.push({
          pathname: ROUTES.signUpStep2,
        });
        setIsLoading(false)
      }
    } catch (e: any) {
      setIsLoading(false)
      toast.error(e.message);
    }
  };

  const handleRegisterWithGoogle = async () => {
    try {
      let oauth = await getAuthLink("register");
      if (oauth) {
        window.location.href = oauth;
      }
    } catch (e) {
      toast.error("oups");
    }
  };

  const { form, handleSubmit } = useForm({
    onSubmit, // the function to call with your form values upon valid submit
    validate, // a record-level validation function to check all form values
  });

  const firstName = useField("firstName", form);
  const lastName = useField("lastName", form);
  const email = useField("email", form);
  const password = useField("password", form);
  const birthDate = useField("birthDate", form);

  return (
    <Stack width="100%" spacing={{ xs: 3, md: 2 }}>
      <ButtonBack />
      <Typography variant="title1">{t("signUp.stepOneTitle")}</Typography>
      <Typography variant="p1">{t("signUp.stepOneSubtitle")}</Typography>
      <Stack
        onSubmit={handleSubmit}
        component="form"
        spacing={{ xs: 3, md: 1 }}
      >
        {[
          {
            label: t("form.labelEmail"),
            props: { ...email.input },
            meta: { ...email.meta },
          },
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
            label: t("form.labelPassword"),
            type: "password",
            props: { ...password.input },
            meta: password.meta,
          },
          {
            label: t("form.labelDate"),
            type: "date",
            props: { ...birthDate.input },
            meta: birthDate.meta,
          },
        ].map((input) =>
          input?.type === "date" ? (
            <DatePicker
              key={input?.label}
              value={input?.props?.value}
              label={input?.label}
              onChange={(newValue) => {
                input?.props?.onChange(newValue);
              }}
              renderInput={(params) => {
                return (
                  <AppTextField
                    error={input.meta.submitFailed && input.meta.error}
                    helperText={
                      input.meta.submitFailed &&
                      input.meta.error &&
                      input.meta.error
                    }
                    variant="filled"
                    {...params}
                    {...input.props}
                  />
                );
              }}
            />
          ) : (
            <AppTextField
              error={input.meta.submitFailed && input.meta.error}
              variant="filled"
              helperText={
                input.meta.submitFailed && input.meta.error && input.meta.error
              }
              key={input?.label}
              label={input?.type == "date" ? "" : input?.label}
              type={input?.type ?? "text"}
              {...input.props}
            />
          )
        )}
        <ButtonPrimary loading={isLoading} type="submit" fullWidth size="medium">
          {t("signUp.continue")}
        </ButtonPrimary>
      </Stack>
      <SignInButtonGroupSocialNetwork
        handleSocialAction={handleRegisterWithGoogle}
      />
    </Stack>
  );
};
