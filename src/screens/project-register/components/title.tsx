import { Typography, Box } from "@mui/material";
import { IProject } from "@/props/IProject";

const ProjectRegisterTitle = ({project}: {project:IProject}) => {
  return (
    <Box maxWidth={650} textAlign="center">
      <Typography
        fontSize={{ xs: 20, sm: 25 }}
        lineHeight="110%"
        letterSpacing={"-1px"}
        color="primary.main"
        fontWeight={"600"}
      >
        {project?.artistOwner.name?.toUpperCase()}
      </Typography>
      <Typography
        fontSize={{ xs: 40, sm: 60 }}
        lineHeight="110%"
        letterSpacing={"-1px"}
        fontWeight={"600"}
        marginTop={{ xs: 1, sm: 2 }}
        marginBottom={{ xs: 0, sm: 3 }}
      >
        {project?.title.toUpperCase()}
      </Typography>
      <Typography
        marginY={7}
        fontSize={{ xs: 14, sm: 18 }}
        lineHeight="140%"
        letterSpacing={"-1px"}
      >
       {project?.description}
      </Typography>
    </Box>
  );
};

export default ProjectRegisterTitle;
