import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import React from "react";

interface Props {
  question: string;
  answer: string;
  panel: string;
}

export const AccordionFaq = ({ question, answer, panel }: Props) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const isExpanded = expanded === panel;

  return (
    <Accordion
      expanded={isExpanded}
      onChange={handleChange(panel)}
      sx={{
        backgroundColor: "transparent",
        color: "white",
        borderBottom: "1px solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        paddingBottom: { xs: 1, md: 3 },
      }}
      elevation={0}
    >
      <AccordionSummary
        sx={{ paddingX: 0 }}
        expandIcon={
          isExpanded ? (
            <RemoveIcon sx={{ color: "white" }} />
          ) : (
            <AddOutlinedIcon sx={{ color: "white" }} />
          )
        }
      >
        <Typography
          variant="title1"
          color="white"
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              fontSize: 17,
            },
          })}
        >
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ paddingX: 0 }}>
        <Typography
          variant="subheader2"
          sx={(theme) => ({
            [theme.breakpoints.down("md")]: {
              fontSize: 15,
            },
          })}
          color="rgba(225, 225, 225, 0.8)"
        >
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
