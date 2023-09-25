import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import { FailureCard } from "@/components/cards/failure";
import { CardNewNft } from "@/components/card-nft";
import { CardNftTitle } from "@/components/cards/nft-title";
import { CardNftAccess } from "@/components/cards/nft-access";

export interface PaymentItemProps {
  failure?: boolean;
}

export const PaymentItem = ({ failure }: PaymentItemProps) => {
  return (
    <Stack alignItems={"center"}>
      <Stack paddingTop={14} maxWidth={436}>
        <CardNftTitle albumCategory="basic" />
        <CardNewNft
          width={{ xs: "100%", sm: 406 }}
          height={{ xs: "max-content", sm: "auto" }}
          padding={{ xs: "14px 16px", sm: "35px 40px" }}
          imgSrc="/images/hero-nft.jpg"
          imgHeight={337}
        >
          <Stack spacing={0.5}>
            <Typography
              variant="typography4"
              sx={{ fontSize: { xs: 12, md: "inherit" } }}
            >
              Orelsan
            </Typography>
            <Typography
              variant="subheadline"
              sx={{ fontSize: { xs: 14, md: "inherit" } }}
            >
              Civilisation
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            marginTop={{ xs: "21px" }}
          >
            <Stack spacing={0.5}>
              <Typography sx={{ fontSize: { xs: 10, md: "inherit" } }}>
                2021
              </Typography>
              <Typography
                variant="typography3"
                sx={{ fontSize: { xs: 12, md: "inherit" } }}
              >
                01 / 10
              </Typography>
            </Stack>
            <Chip
              sx={(theme) => ({
                borderRadius: "8px",
                backgroundColor: "white",
                color: "black",
                ...theme.typography.bodyB2,
              })}
              label={"€ 500"}
            />
          </Stack>
        </CardNewNft>
        <CardNftAccess />
        {failure ? (
          <Box display={{ xs: "none", md: "block" }} marginTop={19}>
            <FailureCard />
          </Box>
        ) : null}
      </Stack>
    </Stack>
  );
};
