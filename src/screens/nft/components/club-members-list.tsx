import { theme } from "@/config/theme";
import { Box, Button, Collapse, Stack } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import React from "react";
import { TransitionGroup } from "react-transition-group";

const MAX = 20;
const STEP = 4;

export const ProjectMembersList = () => {
  const [length, setLength] = React.useState(STEP);

  const handleShowMore = () => {
    setLength((prev) => {
      return Math.min(prev + STEP, MAX);
    });
  };

  return (
    <Stack spacing={3}>
      <List disablePadding>
        <TransitionGroup>
          {Array.from(Array(MAX))
            .slice(0, length)
            .map((_, idx) => (
              <Collapse key={idx}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar />
                  </ListItemAvatar>
                  <ListItemText
                    // @ts-ignore
                    primaryTypographyProps={{
                      marginBottom: 1,
                      ...theme.typography.bodyB1,
                    }}
                    // @ts-ignore
                    secondaryTypographyProps={{
                      color: "rgba(255, 255, 255, 0.8)",
                      ...theme.typography.body2,
                    }}
                    primary={
                      <Stack
                        direction="row"
                        alignItems={"center"}
                        justifyContent="space-between"
                      >
                        <Box>Big flo & Oli</Box>
                        <Box>Diamond</Box>
                      </Stack>
                    }
                    secondary={
                      <Stack
                        direction="row"
                        alignItems={"center"}
                        justifyContent="space-between"
                      >
                        <Box>0x9158...0fbC</Box>
                        <Box>3/100</Box>
                      </Stack>
                    }
                  />
                </ListItem>
              </Collapse>
            ))}
        </TransitionGroup>
      </List>
      {length < MAX && (
        <Button
          sx={{
            alignSelf: "center",
            background: "rgba(87, 78, 101, 1)",
            width: 175,
            color: "white",
          }}
          onClick={handleShowMore}
        >
          View more
        </Button>
      )}
    </Stack>
  );
};
