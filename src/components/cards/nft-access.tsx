import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import NextImage from "next/image";
import checkedIcon from "@/public/images/checked-icon.svg";
import { PERK_LIST } from "@/config/data";

export const CardNftAccess = ({perks=PERK_LIST}) => {
  return (
    <Stack marginTop={5} spacing={3} alignItems={"center"}>
      {perks?.map((perk, i) => (
          <Stack key={i}  direction="row" alignItems="start" width={"286px"}>
           <Box marginRight={2}>
             <NextImage height={"24px"} src={checkedIcon} />
           </Box>
           <Typography variant="body1">
              {perk}
           </Typography>
         </Stack>
      ))}
    </Stack>
  );
};
