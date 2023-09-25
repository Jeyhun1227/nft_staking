import { IImage } from "@/props/IImage";

export interface IWalletInfo
{
        id?: string,
        address: string,
        walletType?: string,
        secretType?: string,
        createdAt?: string,
        archived: boolean,
        description?: string,
        primary: boolean,
        hasCustomPin?: boolean,
        identifier?: null,
        balance?: {
          available: boolean,
          secretType?:string,
          balance?: number,
          gasBalance: number,
          "symbol": string,
          "gasSymbol"?: string,
          "rawBalance"?: number,
          rawGasBalance?: number,
          decimals?: number
        }
}

export interface IProfile
{
    objectId?: string;
    email: string;
    firstName?: string;
    lastName?: string;
    birthDate?: string;
    walletAddress?:string;
    avatarImage?:IImage;
    currentWalletInfo?:IWalletInfo;
}