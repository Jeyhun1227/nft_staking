import { IArtist } from "@/props/IArtist";

export interface IProject {
  objectId: string;
  isActive: boolean;
  status: string;
  url: string;
  title: string;
  description: string;
  endDate: {
    iso: string;
    __type: string;
  };
  startDate: {
        iso: string;
        __type: string;
      };
  releaseDate: {
        iso: string;
        __type: string;
      };
  coverImage: { name: string; url: string };
  artistOwner: IArtist;
  aboutDescription: string;
  videoUrl: string;
}

export const initialProject: IProject = {
  objectId: "",
  isActive: false,
  url: "",
  title: "",
  description: "",
  startDate:  {iso: new Date().toISOString(), __type: "date"},
  endDate: {iso: new Date().toISOString(), __type: "date"},
  releaseDate:  {iso: new Date().toISOString(), __type: "date"},
  coverImage: { name: "", url: "" },
  artistOwner: {} as IArtist,
  aboutDescription: "",
  videoUrl: "",
  status:""
};
