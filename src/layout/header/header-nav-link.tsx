import { MUILink } from "@/components/mui-link";
interface Props {
  label: string;
  path: string;
}

export const HeaderNavLink = ({ label, path }: Props) => {
  return (
    <MUILink
      href={path}
      color="#FFF"
      underline="none"
      zIndex={200}
      sx={{
        "&.active": {
          color: "primary.main",
        },
      }}
    >
      {label}
    </MUILink>
  );
};
