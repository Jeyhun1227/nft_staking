import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";

const RANKS = ["All", "Basic", "Gold", "Platinium", "Diamond"];

export const ProjectMembersRanks = () => {
  const [rank, setRank] = React.useState(RANKS[0]);

  return (
    <Stack
      direction="row"
      alignItems="center"
      marginBottom={8}
      spacing={2}
      flexWrap={{ xs: "nowrap", md: "wrap" }}
      overflow={{ xs: "auto", md: "hidden" }}
      sx={{
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      {RANKS.map((item) => (
        <Button
          onClick={() => {
            setRank(item);
          }}
          key={item}
          value={item}
          variant={item === rank ? "contained" : "outlined"}
          sx={{
            paddinY: 1,
            paddingX: 3,
            borderRadius: "64px",
            borderColor:
              item === rank ? "primary.main" : "rgba(255, 255, 255, 0.2)",
            color: "white",
            textTransform: "capitalize",
            whiteSpace: "nowrap",
            minWidth: "max-content",
          }}
        >
          {item}
        </Button>
      ))}
    </Stack>
  );
};
