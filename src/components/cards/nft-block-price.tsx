import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface CardNftBlockPriceProps {
  price?: string;
  year?: string;
  day?: string;
}

export const CardNftBlockPrice = ({
  price,
  year,
  day,
}: CardNftBlockPriceProps) => {
  
  return (
    <Stack
      direction="row"
      alignItems="alignItems"
      justifyContent={"space-between"}
    >
      <Box>
        <Typography variant="body3">{year}</Typography>
        <Typography variant="body2">{day}</Typography>
      </Box>
      {price ? (
        <Chip
          sx={(theme) => ({
            borderRadius: "8px",
            backgroundColor: "white",
            color: "black",
            ...theme.typography.bodyB2,
          })}
          label={price}
        />
      ) : null}
    </Stack>
  );
};
