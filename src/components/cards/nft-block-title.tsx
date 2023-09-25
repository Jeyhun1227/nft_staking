import { Avatar, Stack, Typography } from "@mui/material";

export interface CardNftBlockTitleProps {
  author?: string;
  avatar?: string;
  name?: string;
  isUnknown?: boolean;
  title?:string;
}

export const CardNftBlockTitle = ({
  author,
  name = "CIVILISATION",
  avatar,
  isUnknown,
}: CardNftBlockTitleProps) => {
  return (
    <Stack flex={1} direction="row" alignItems="center" spacing={1}>
      {avatar ? (
        <Avatar
          src={avatar}
          sx={{
            filter: isUnknown ? "blur(4px)" : undefined,
          }}
        />
      ) : null}
      <Stack>
        <Typography variant="body3">
          {isUnknown ? "Unknown" : author?.toLocaleUpperCase()}
        </Typography>
        <Typography variant="title4" textTransform={"uppercase"}>
          {isUnknown ? "To BE announced" : name}
        </Typography>
      </Stack>
    </Stack>
  );
};
