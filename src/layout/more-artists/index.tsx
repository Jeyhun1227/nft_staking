import { ARTIST_LIST } from "@/config/data";
import { ListArtist } from "@/components/lists/artist";
import { SectionDefault } from "../section";
import { useTranslation } from "next-i18next";

export const MoreArtists = () => {
  const { t } = useTranslation("common");
  return (
    <SectionDefault
      title={t("moreArtists.title")}
      subtitle={t("moreArtists.subtitle")}
    >
      <ListArtist data={ARTIST_LIST.slice(0, 2) as any} />
    </SectionDefault>
  );
};
