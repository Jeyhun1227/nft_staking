import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import React from "react";

interface Props {
  question: string;
  answer: string;
  panel: string;
}

export const FaqHowToItem = ({ question, answer, panel }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const isExpanded = expanded === panel;

  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleChange("panel3")}
      sx={{
        backgroundColor: "transparent",
        color: "white",
        borderColor: "white",
      }}
    >
      <AccordionSummary
        expandIcon={<AddOutlinedIcon sx={{ color: "white" }} />}
      >
        <Typography variant="title1" color="white">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ borderColor: "white" }}>
        <Typography variant="subheader2" color="rgba(225, 225, 225, 0.8)">
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
