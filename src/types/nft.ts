import { NftRankType } from "@/components/cards/nft-rank-info";

export type NFTCard = {
  author: string;
  title: string;
  imgSrc: string;
  nftRank: NftRankType;
  tokens: string;
  price: string;
};

export  interface NFTProps {
  data: NFTCard;
};

