import { Stack, Typography, Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import { SectionDefault } from "../../../layout/section";
import dynamic from "next/dynamic";
import { ProjectMembersInfo } from "./club-members-info";

const NftProjectBreackDownChart = dynamic(() => import("./breakdown-graph"), {
  ssr: false,
});

export const ProjectBreakDown = () => {
  const { t } = useTranslation("common");

  return (
    <SectionDefault
      subtitle={t("nftProject.breakdownTitle")}
      title={t("nftProject.breakdownSubtitle")}
      titleColor={"secondary.main"}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        justifyContent="space-between"
        sx={{
          border: { xs: "none", md: "1px solid rgba(255, 255, 255, 0.2)" },
        }}
      >
        {[
          { label: t("nftProject.totalTokens"), value: "400" },
          { label: t("nftProject.totalOffered"), value: "500%" },
          { label: t("nftProject.amountRaised"), value: "30 ETH" },
        ].map((item, index) => (
          <Stack
            flex={1}
            key={item?.label}
            sx={{
              paddingX: { xs: 0, md: 7 },
              paddingY: { xs: 2, md: 4 },
              borderLeft: {
                xs: "none",
                md:
                  index === 1
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : undefined,
              },
              borderRight: {
                xs: "none",
                md:
                  index === 1
                    ? "1px solid rgba(255, 255, 255, 0.2)"
                    : undefined,
              },
            }}
          >
            <Typography marginBottom={2}>{item?.label}</Typography>
            <Typography variant="headline2">{item?.value}</Typography>
          </Stack>
        ))}
      </Stack>
      <NftProjectBreackDownChart />
      <Box display={{ xs: "block", md: "none" }}>
        <ProjectMembersInfo />
      </Box>
    </SectionDefault>
  );
};
