import Box from "@mui/material/Box";
import { CardNftBlock, NftItemCardProps } from "./nft-block";
import { CardNftTitle } from "./nft-title";
import { CardNftAccess } from "./nft-access";

interface Props extends NftItemCardProps {
  withInfo?: boolean;
  fullHeight?: boolean;
  perks?:string[];
  maxSupply?:number;
  currentSupply?:number;
  projectTitle?:string;
  startDateAsIso?:string;
  id?: string;
  target?:string;
}

export const CardNft = ({
  withInfo = false,
  albumCategory,
  fullHeight,
  currentSupply,
  maxSupply,
  projectTitle,
  author,
  perks,
  year,
  price,
  id,
  target,
  ...cardProps
}: Props) => {
  return (
    <Box height={fullHeight ? "100%" : undefined}>
      {withInfo && <CardNftTitle albumCategory={albumCategory} />}
      <CardNftBlock 
        id={id}
        target={target}
        price={`€ ${price}`} 
        year={year} 
        day={`${currentSupply} / ${maxSupply}`} 
        tokensLeft={100} 
        author={author}
        title={projectTitle}
        {...cardProps} 
        albumCategory={albumCategory} />
      {withInfo && <CardNftAccess perks={perks}/>}
    </Box>
  );
};