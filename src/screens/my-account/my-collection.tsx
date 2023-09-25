import {useEffect, useState} from "react"
import { FollowUsWithSocial } from "@/layout/follow-us/with-social";
import { fetchProjectsbyInterests } from "@/services/parse/functions/srr/project";
import { MyAccountNextLaunch } from "./components/next-launch";
import { NftCollection } from "./components/nft-collection";
import { IProject } from "@/props/IProject";

export const MyCollection = () => {

  const [projects, setProjects] = useState<IProject[]>([]);

  useEffect(() => {
    (async () => {
      let projects = await fetchProjectsbyInterests(["xZl2tWQrum","xZl2tWQrum"]);
      setProjects(projects);
    })();
  }, []);

  return (
    <>
      <NftCollection />
      <MyAccountNextLaunch projects={projects}/>
      <FollowUsWithSocial subject="artists" />
    </>
  );
};
