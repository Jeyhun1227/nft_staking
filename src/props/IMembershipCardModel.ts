import { IProject } from "@/props/IProject";
import { IArtist } from "@/props/IArtist";
import { IImage } from "@/props/IImage";
import { NftRankType } from "@/components/cards/nft-rank-info";

export interface IMembershipCardModel {
    objectId: string;
    type:NftRankType;
    projectRef: IProject;
    artistRef:IArtist
    perks: string[];
    currentSupply:number;
    maxSupply:number;
    media:IImage;
    price:number;
    currency:string;
}


export interface IMembershipCardModelJson {
    type:NftRankType;
    projectRef: IProject;
    perks: string[];
    currentSupply:number;
    maxSupply:number;
    media:IImage;
    price?:string;
    currency:string;
    year?:string;
}