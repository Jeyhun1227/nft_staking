import { useEffect, useState } from "react"
import { NftProjectHero } from "./components/hero";
import { NftProjectAcess } from "./components/access";
import { ProjectAbout } from "./components/about";
import { ProjectBreakDown } from "./components/breakdown";
import { ProjectMembers } from "./components/club-members";
import { MoreArtists } from "../../layout/more-artists";
import { LayoutDefault } from "@/layout/pages/layout-default";
import { FollowUsWithSocial } from "@/layout/follow-us/with-social";
import { useTranslation } from "next-i18next";
import { fetchProjectObject } from "@/services/parse/functions/srr/project";
import { IProject, initialProject } from "@/props/IProject";
import {IMembershipCardModel} from "@/props/IMembershipCardModel";

export const NftProjectScreen = ({id}:{ id: string}) => {
  const { t } = useTranslation("common");
  const [project, setProject] = useState<IProject>(initialProject);
  const [membershipCardModels, setCards] = useState<IMembershipCardModel[]>();

  useEffect(() => {
    const fetchMyData = async () => {
        
        const projectFetched = await fetchProjectObject(id as string) 
        if (projectFetched) {
          setProject(projectFetched.toJSON() as any);
          const membershipCardModelsFeteched = await projectFetched?.get("MembershipCardModels").query().find({json:true});
          setCards(membershipCardModelsFeteched)
        }
    }
    fetchMyData()
  }, [id])

  return (
    <LayoutDefault title={t("nftProject.title")} description={"la vie de rêve"}>
      <NftProjectHero project={project}/>
      <NftProjectAcess cards={membershipCardModels} artist={project.artistOwner}/>
      <ProjectAbout project={project}/>
      <ProjectBreakDown />
      <ProjectMembers />
      <MoreArtists />
      <FollowUsWithSocial subject="artists" />
    </LayoutDefault>
  );
};
