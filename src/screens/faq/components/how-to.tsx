import { AccordionFaq } from "@/components/accordions/faq";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { useTranslation } from "next-i18next";

export const FaqHowTo = () => {
  const { t } = useTranslation("common");

  return (
    <Container component={"section"} sx={{ marginBottom: 12 }}>
      <Stack spacing={{ xs: 2, md: 4 }} maxWidth={"900px"} marginX="auto">
        {["", "", "", "", "", ""].map((_, index) => (
          <AccordionFaq
            key={`panel${index}`}
            panel={`panel${index}`}
            question={t("faq.question")}
            answer={t("faq.answer")}
          />
        ))}
      </Stack>
    </Container>
  );
};
