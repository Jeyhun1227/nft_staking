import { useTranslation } from "next-i18next";
import { SectionDefault } from "../../../layout/section";

import { CardNft } from "@/components/cards/nft";
import { Box } from "@mui/material";
import { Carousel } from "@/components/carousel";

import { IMembershipCardModel } from "@/props/IMembershipCardModel";
import {IArtist} from "@/props/IArtist";
import { ROUTES } from "@/config/navigation";

interface NftProjectAcessProps { 
    cards :IMembershipCardModel[] | undefined;
    artist:IArtist;
}

export const NftProjectAcess = ({cards, artist}:NftProjectAcessProps) => {
  const { t } = useTranslation("common");
  
  return (
    <SectionDefault
      title={t("nftProject.tokenTitle")}
      subtitle={t("nftProject.tokenSubtitle")}
      titleColor={t("secondary.main")}
    >
      <Carousel>
        {cards?.map((card, index) => {

          var date = new Date(card?.projectRef?.releaseDate?.iso || '');
          let year = date?.getFullYear().toString()
          return (
            <Box
              key={index}
              minWidth={235}
              maxWidth={275}
              paddingLeft={{ xs: 2, md: 0 }}
            >
              <CardNft
                author={artist?.name}
                id={card.objectId}
                target={ROUTES.checkout}
                imgSrc={card.media.url}
                currentSupply={card.currentSupply}
                maxSupply={card.maxSupply}
                albumCategory={card.type}
                perks={card.perks}
                price={card.price?.toString()}
                startDateAsIso={year}
                year={year}
                withInfo />
            </Box>
          );
        })}
      </Carousel>
    </SectionDefault>
  );
};
