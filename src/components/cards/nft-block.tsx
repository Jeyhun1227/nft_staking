import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";

import { CARD_STYLES } from "@/config/data";
import { useRouter } from "next/router";
import { CardNftBlockPrice, CardNftBlockPriceProps } from "./nft-block-price";
import { CardNftBlockTitle, CardNftBlockTitleProps } from "./nft-block-title";
import { NextLaunchCardBanner } from "@/screens/my-account/components/next-lauch-card-banner";
import { CardNftBlockLink, CardNftBlockLinkProps } from "./nft-block-link";
import { NftRankInfo, NftRankType } from "./nft-rank-info";
import { CardNftBlockSoldOut } from "./nft-block-sold-out";

export interface NftItemCardProps
  extends CardNftBlockPriceProps,
    CardNftBlockTitleProps,
    CardNftBlockLinkProps {
  imgSrc: string;
  albumCategory?: NftRankType;
  size?: "sm" | "md" | "lg" | "xl";
  width?: string;
  height?: string;
  withContent?: "price" | "link" | "banner" | "soldOut";
  isUnknown?: boolean;
  id?:string;
  target?:string;
}

export const CardNftBlock = ({
  imgSrc,
  id,
  target,
  size = "md",
  albumCategory = "basic",
  withContent = "price",
  isUnknown = false,
  ...props
}: NftItemCardProps) => {

  const router = useRouter();

  const goTo = (id?:string, target?:string) => {
    if(id && target){
      router.push({
        pathname: target,
        query: { id:id },
      });
    }
  }

  const { description, ...cardStyle } = CARD_STYLES[albumCategory];
  
  return (
    <Box
      sx={{
        cursor: "pointer",
        height: "100%",
        borderRadius: "10px",
        padding: "4px",
        backgroundImage: cardStyle.background,
      }}
    >
      <Card
        onClick={() => id ? goTo(id, target) : null}
        sx={{
          display: "flex",
          flexDirection: "column",
          borderRadius: "10px",
          color: "white",
          paddingY: { sm: 1, md: 2, lg: 3, xl: 4 }[size],
          paddingX: { sm: 1, md: 2, lg: 4, xl: 5 }[size],
          ...cardStyle,
          background: "url(/images/card-pattern.svg), " + cardStyle.background,
          backgroundRepeat: "repeat-x, no-repeat",
          backgroundPosition: "0px -2rem, center",
          height: "100%",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            borderRadius: "10px",
            marginBottom: 2,
            maxHeight: 336,
            objectPosition: "50% 50%",
            filter: isUnknown ? "blur(4px)" : undefined,
          }}
          src={imgSrc}
          alt="orelsan album cover"
        />
        <Stack spacing={2}>
          <Stack direction="row" alignItems="alignItems" spacing={2}>
            <CardNftBlockTitle
              avatar={props.avatar}
              author={props.author}
              name={props.title}
              isUnknown={isUnknown}
            />
            <NftRankInfo rank={albumCategory} />
          </Stack>
          {withContent === "price" ? <CardNftBlockPrice  price = {props.price} year={props.year} day={props.day} /> : null}
          {withContent === "soldOut" ? <CardNftBlockSoldOut /> : null}
          {withContent === "link" ? <CardNftBlockLink /> : null}
          {withContent === "banner" ? (
            <Box paddingY={2}>
              <NextLaunchCardBanner
                deg={-5}
                variantText="subheadline"
                bottom={"2%"}
                left={"-10%"}
              />
            </Box>
          ) : null}
        </Stack>
      </Card>
    </Box>
  );
};
