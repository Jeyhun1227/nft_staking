import {useEffect, useState} from 'react'
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router'
import { IProject , initialProject} from "@/props/IProject";
import ProjectRegisterTitle from "./components/title";
import ProjectRegisterCountdown from "./components/countdown";
import { fetchProject } from "@/services/parse/functions/srr/project";
import { addUserOnWaitList } from "@/services/parse/functions/cloud";
import LayoutProject from "@/layout/pages/project";
import { ButtonPrimary } from "@/components/buttons/styles";
import { useAuth } from "@/contexts/auth";
import { Toast } from "@/components/toast";

export const ProjectRegisterScreen = () => {
  const { t } = useTranslation("common");
  const [project, setProject] = useState<IProject>(initialProject);
  const router = useRouter();
  const { id } = router.query;
  const auth = useAuth();

  const handleRegisterUser = async () => { 
    try {
      
      if(auth.user?.objectId && project){
        let userAdded = await addUserOnWaitList(auth.user?.objectId, project.objectId)
        if(userAdded){
          Toast.success("USER_ADDED", "USER_ADDED");
        }
      }else{
        Toast.error("ERROR OCCURED", "ERROR OCCURED");
      }
    } catch (error:any) {
      Toast.error("ERROR OCCURED", error.message);
    }
  }

  useEffect(() => {
    const fetchMyData = async () => {
        let project = await fetchProject(id as string) 
        setProject(project as any)
    }
    fetchMyData()
  }, [id])

  return (
    <LayoutProject
      title={project?.title}
      description={t("projectRegister.metaDescription")}
    >
      <ProjectRegisterTitle project={project}/>
      <ProjectRegisterCountdown project={project}/>
        <ButtonPrimary onClick={handleRegisterUser} fullWidth size="large" sx={{ maxWidth: 334 }}>
          {t("projectRegister.button")}
        </ButtonPrimary>
    </LayoutProject>
  );
};
