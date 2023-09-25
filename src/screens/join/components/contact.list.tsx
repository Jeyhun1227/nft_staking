import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

import { theme } from "@/config/theme";
import { CardWithNumber } from "@/components/cards/card-with-number";
import ellipseBlueImg from "@/public/images/ellipse-blue.svg";
import ellipsePurpleImg from "@/public/images/ellipse-purple.svg";
import firstImg from "@/public/images/join-1.jpg";
import secondImg from "@/public/images/join-2.jpg";
import thirdImg from "@/public/images/join-3.jpg";
import { useTranslation } from "next-i18next";

export interface JoinContactListProps {
  showBtn?: boolean;
}

export const JoinContactList = ({ showBtn = false }: JoinContactListProps) => {
  const { t } = useTranslation("common");
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const Content = [
    {
      number: "1",
      ellipse: ellipseBlueImg as string,
      image: firstImg as unknown as string,
      text: t("join.contactText"),
    },
    {
      number: "2",
      ellipse: ellipsePurpleImg as string,
      image: secondImg as unknown as string,
      text: t("join.contactText"),
    },
    {
      number: "3",
      ellipse: ellipseBlueImg as string,
      image: thirdImg as unknown as string,
      text: t("join.contactText"),
    },
  ];

  return (
    <Grid container spacing={{ xs: 15, md: 5 }}>
      {Content.map((card, index) => (
        <Grid key={card.number} item xs={12} md={4}>
          <CardWithNumber
            {...card}
            revert={index !== 1 && matches}
            showBtn={showBtn && index === 1 && matches}
          />
        </Grid>
      ))}
    </Grid>
  );
};
