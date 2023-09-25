import Stack from "@mui/material/Stack";
import NextImage from "next/image";

export type HomePartnersListItemType =
  | "sony"
  | "universal"
  | "banger"
  | "trax"
  | "believe"
  | "centimes";

interface Props {
  partner: HomePartnersListItemType;
  idx: number;
}

export const HomePartnersListItem = ({ idx, partner }: Props) => {
  return (
    <Stack
      flex={1}
      justifyContent={"center"}
      alignItems="center"
      paddingX={7}
      paddingY={4}
      width="100%"
      sx={(theme) => ({
        borderLeft:
          idx !== 0 ? "1px solid rgba(255, 255, 255, 0.2)" : undefined,
        ":hover": {
          background: "#42A4FF",
          boxShadow: "0px 16px 40px rgba(66, 164, 255, 0.33)",
          cursor: "pointer",
        },
        [theme.breakpoints.down("lg")]: {
          borderLeft: 0,
        },
      })}
    >
      <Stack
        sx={{
          width: "100%",
        }}
        justifyContent={"center"}
        alignItems="center"
      >
        <NextImage
          src={`/images/brand-${partner}.svg`}
          width={70}
          height={70}
        />
      </Stack>
    </Stack>
  );
};
