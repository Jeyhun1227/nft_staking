import { theme } from "@/config/theme";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "next-i18next";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { MUILink } from "@/components/mui-link";

export const ProjectMembersInfo = () => {
  const { t } = useTranslation("common");
  const downMd = useMediaQuery(theme.breakpoints.down("md"));

  const table: { type: "info" | "link"; label: string; value: string }[] = [
    {
      type: "info",
      label: t("nftProject.edition"),
      value: "Civilisation",
    },
    {
      type: "info",
      label: t("nftProject.blockchain"),
      value: "Matic(Polygon) Mainnet",
    },
    {
      type: "link",
      label: t("nftProject.contractAdress"),
      value: "0x67...75456",
    },
    {
      type: "link",
      label: t("nftProject.openSea"),
      value: "Royal LDS",
    },
    {
      type: "link",
      label: t("nftProject.legal"),
      value: "Read now",
    },
  ];

  return (
    <List
      sx={{
        border: { xs: "none", md: "1px solid rgba(255, 255, 255, 0.2)" },
      }}
    >
      {table.map((item, idx) => (
        <ListItem
          key={idx}
          divider={!downMd && idx !== table.length - 1}
          sx={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        >
          <ListItemText
            primary={
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="space-between"
                flexWrap="wrap"
              >
                <Typography>{item?.label}</Typography>
                {item?.type === "info" ? (
                  <Typography>{item?.value}</Typography>
                ) : (
                  <MUILink href="#" display="inline-flex" alignItems="center">
                    {item?.value}
                    <ArrowRightAltIcon sx={{ marginLeft: 1 }} />
                  </MUILink>
                )}
              </Stack>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};
