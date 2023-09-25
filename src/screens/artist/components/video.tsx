import { SectionDefault } from "@/layout/section";
import Box from "@mui/material/Box";
import { useTranslation } from "next-i18next";
import ReactPlayer from "react-player";

export const Artistvideo = ({url = '', title = ''}:{url?:string, title?:string}) => {
  const { t } = useTranslation("common");

  return (
    <SectionDefault title={t("artist.videoTitle")} subtitle={title}>
      <Box
        sx={{
          width: "100%",
          height: { xs: 177, mobile: 300, sm: 418, md: 518, lg: 718 },
          borderRadius: "8px",
          zIndex: 10,
        }}
      >
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          style={{
            zIndex: 1,
            borderRadius: "80px",
          }}
          url={url}
        />
      </Box>
    </SectionDefault>
  );
};
