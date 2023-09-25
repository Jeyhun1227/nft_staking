import { FooterNavListColItem } from "./nav-list-col-item";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Stack from "@mui/material/Stack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface Props {
  title: string;
  titleColor?: string;
  data: { label: string; href?: string }[];
}

export const FooterNavListColMobile = ({
  title,
  titleColor = "primary.main",
  data,
}: Props) => (
  <Accordion
    sx={{
      boxShadow: "none",
      display: { xs: "block", md: "none" },
      background: "transparent",
      borderWidth: 0,
      padding: 0,
      margin: 0,
      borderTop: 0,
    }}
    disableGutters
  >
    <AccordionSummary
      sx={{
        padding: 0,
        margin: 0,
      }}
      expandIcon={<ExpandMoreIcon sx={{ color: titleColor }} />}
      aria-controls={`${title}-content`}
      id={`${title}-footer-nav-header`}
    >
      <FooterNavListColItem label={title} titleColor={titleColor} />
    </AccordionSummary>

    <AccordionDetails
      sx={{
        padding: 0,
        margin: 0,
      }}
    >
      <Stack spacing={2}>
        {data.map((item) => (
          <FooterNavListColItem
            key={item?.label}
            label={item?.label}
            href={item?.href}
          />
        ))}
      </Stack>
    </AccordionDetails>
  </Accordion>
);
