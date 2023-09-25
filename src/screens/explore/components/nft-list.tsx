import { CardNft } from "@/components/cards/nft";
import { Box } from "@mui/material";
import { IMembershipCardModel } from "@/props/IMembershipCardModel";
import { ROUTES } from "@/config/navigation";

interface Props {
  data?: IMembershipCardModel[];
}

export const ExploreNftList = ({ data }: Props) => {
  
  let year = "2020"
  debugger
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        xs: "repeat(auto-fit, minmax(150px, 1fr))",
        mobile: "repeat(2, minmax(150px, 275px))",
        sm: "repeat(3, minmax(150px, 275px))",
        md: "repeat(4, minmax(150px, 1fr))",
      }}
      gap={{ xs: 3, mobile: 4, sm: 5 }}
    >
      {data?.map((card, index) => (
           <CardNft
           id={card.projectRef.objectId}
           author={card.artistRef.name}
           target={ROUTES.project}
           title={card.projectRef.title}
           key={index}
           imgSrc={card.media.url}
           currentSupply={card.currentSupply}
           maxSupply={card.maxSupply}
           albumCategory={card.type}
           price={card.price?.toString()}
           startDateAsIso={year}
           year={year}
           />
      ))}
    </Box>
  );
};
