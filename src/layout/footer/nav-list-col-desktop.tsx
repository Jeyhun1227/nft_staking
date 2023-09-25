import Stack from "@mui/material/Stack";
import { FooterNavListColItem } from "./nav-list-col-item";

interface Props {
  title: string;
  titleColor?: string;
  data: { label: string; href?: string }[];
}

export const FooterNavListColDesktop = ({
  title,
  titleColor = "primary.main",
  data,
}: Props) => {
  return (
    <Stack
      sx={{ display: { xs: "none", md: "flex" } }}
      spacing={{ xs: 1, md: 3 }}
    >
      <FooterNavListColItem label={title} titleColor={titleColor} />
      {data.map((item) => (
        <FooterNavListColItem
          key={item?.label}
          label={item?.label}
          href={item?.href}
        />
      ))}
    </Stack>
  );
};
