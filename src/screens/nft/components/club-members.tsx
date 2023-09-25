import { Grid } from "@mui/material";
import { ProjectMembersRanks } from "./club-members-ranks";
import { ProjectMembersList } from "./club-members-list";
import { ProjectMembersInfo } from "./club-members-info";
import { SectionDefault } from "../../../layout/section";

export const ProjectMembers = () => {
  return (
    <SectionDefault title="club members" subtitle="They joined the project">
      <ProjectMembersRanks />
      <Grid container columnSpacing={9}>
        <Grid xs={12} md={7} item>
          <ProjectMembersList />
        </Grid>
        <Grid md={5} item display={{ xs: "none", md: "block" }}>
          <ProjectMembersInfo />
        </Grid>
      </Grid>
    </SectionDefault>
  );
};
