import { ISocial } from "@/props/ISocial";
import { IMusicCategory } from "@/props/IMusicCategory";
import { IImage } from "@/props/IImage";

export interface IArtist {
    objectId:string;
    name: string;
    imgSrc?: string;
    description:string;
    musicCategory:IMusicCategory;
    avatarImage?:IImage;
    socials?:ISocial[];
    featuredVideoTitle?:string;
    featuredVideoUrl?:string;
}