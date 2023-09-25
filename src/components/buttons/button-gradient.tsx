import { LoadingButton } from "@mui/lab";

interface Props {
  fullWidth?: boolean;
  loading?: boolean;
  label: string;
  onClick?:any,
}

export const ButtonGradient = ({
  fullWidth,
  loading,
  label,
  onClick
}: Props) => {

  return (
    <LoadingButton
      onClick={onClick}
      loading={loading}
      fullWidth={fullWidth}
      type="submit"
      sx={(theme) => ({
        color: "white",
        background: "linear-gradient(93.18deg, #2F98FB 8.92%, #9B4AFA 102.88%);",
        height: "36px",
        borderRadius: "16px",
        "&:hover": {
          opacity: 0.5,
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: 16,
        },
      })}
    >
      {label}
    </LoadingButton>
  );
};
