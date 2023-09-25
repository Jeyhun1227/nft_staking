import NextImage from "next/image";
import { MUILink } from "@/components/mui-link";
import { ISocial } from "@/props/ISocial";

import instaIcon from "@/public/images/social-network/insta-artist.svg";
import ytbIcon from "@/public/images/social-network/ytb-artist.svg";
import twitterIcon from "@/public/images/social-network/twitter-artist.svg";

export const SocialLink = (item:ISocial) => {
  const images = { "instagram":instaIcon, "youtube":ytbIcon, "twitter":twitterIcon } as any
  return (
    <MUILink href={item.url} target="_blank" key={item.type}>
    <NextImage src={images[item.type]} height={27} />
  </MUILink>
  )
}
