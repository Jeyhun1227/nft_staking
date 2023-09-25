import { LoadingButton, LoadingButtonProps } from "@mui/lab";
import { styled } from "@mui/material/styles";

export const ButtonPrimary = styled(LoadingButton)<LoadingButtonProps>(
  ({ theme }) => ({
    color: theme.palette?.content?.primary,
    background: theme.palette?.primary.main,
    "&:hover": {
      background: theme.palette.state.hoverOnPrimary,
    },
    "&:active": {
      background: theme.palette.state.activeOnPrimary,
    },
    "&.Mui-disabled": {
      background: theme.palette?.primary.main,
      opacity: theme.palette?.action?.disabledOpacity,
    },
    "&:focus, &:focus-visible": {
      boxShadow: "0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #1B74E4",
    },
    "&.MuiLoadingButton-loading": {
      background: theme.palette?.primary.main,
      "& .MuiLoadingButton-loadingIndicator": {
        color: theme.palette?.content?.onColor,
      },
    },
  })
);

export const ButtonSecondary = styled(LoadingButton)<LoadingButtonProps>(
  ({ theme }) => ({
    color: theme.palette?.content?.primary,
    background: theme.palette?.bg?.light,
    "&:hover": {
      background: theme.palette.state.hoverOnBgTertiary,
    },
    "&:active": {
      background: theme.palette.state.activeOnBgTertiary,
    },
    "&.Mui-disabled": {
      background: theme.palette?.bg?.light,
      opacity: theme.palette?.action?.disabledOpacity,
    },
    "&:focus, &:focus-visible": {
      boxShadow: "0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #1B74E4",
    },
    "&.MuiLoadingButton-loading": {
      background: theme.palette?.bg?.light,
      "& .MuiLoadingButton-loadingIndicator": {
        color: theme.palette?.primary.main,
      },
    },
  })
);

export const ButtonAccent = styled(LoadingButton)<LoadingButtonProps>(
  ({ theme }) => ({
    color: theme.palette?.content?.accent,
    background: "transparent",
    "&:hover": {
      background: theme.palette.state.hoverPrimary,
    },
    "&:active": {
      background: theme.palette.state.hoverPrimary,
    },
    "&.Mui-disabled": {
      color: theme.palette?.content?.accent,
      background: theme.palette?.bg.dark,
      opacity: theme.palette?.action?.disabledOpacity,
    },
    "&:focus, &:focus-visible": {
      background: theme.palette?.content?.primary,
      boxShadow: "0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #1B74E4",
    },
    "&.MuiLoadingButton-loading": {
      color: "transparent",
      background: theme.palette?.bg.dark,
      "& .MuiLoadingButton-loadingIndicator": {
        color: theme.palette?.primary.main,
      },
    },
  })
);

export const ButtonWhite = styled(LoadingButton)<LoadingButtonProps>(
  ({ theme }) => ({
    color: theme.palette?.common?.white,
    background: theme.palette?.bg.dark,
    "&:hover": {
      background: theme.palette?.state?.activeOnBgPrimary,
    },
    "&:active": {
      background: theme.palette?.state?.hoverOnBgPrimary,
    },
    "&.Mui-disabled": {
      background: theme.palette?.bg.dark,
      opacity: theme.palette?.action?.disabledOpacity,
    },
    "&:focus, &:focus-visible": {
      background: theme.palette?.bg.dark,
      boxShadow: "0px 0px 0px 2px #FFFFFF, 0px 0px 0px 4px #1B74E4",
    },
    "&.MuiLoadingButton-loading": {
      background: theme.palette?.bg.dark,
      "& .MuiLoadingButton-loadingIndicator": {
        color: theme.palette?.primary.main,
      },
    },
  })
);
