
import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";

export type TransactionItem = {
  no: string;
  tokens: string;
  eurAmount: number;
  usdAmount: number;
  destination: string;
}

export interface TransactionItemProps {
  data?: TransactionItem
}

export const TransactionItem = ({data}: TransactionItemProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      padding="12px"
      sx={{
        width: "100%",
        paddingBottom: "24px",
        borderBottom: "1px solid #25272C",
      }}>
      <Typography width="220px" noWrap={true}>
        {data?.no}
      </Typography>
      <Typography width="150px" textAlign="center">
        {data?.tokens}
      </Typography>
      <Typography width="180px" textAlign="center">
        {data?.destination}
      </Typography>
      <Typography width="150px" textAlign="center">
        {data?.eurAmount}
      </Typography>
      <Typography width="150px" textAlign="center">
        {data?.usdAmount}
      </Typography>
      <Stack width="150px" direction="row" justifyContent="center" alignItems="center" spacing={1}>
        <Box width="8px" height="8px" bgcolor="#2F98FB" borderRadius="4px"/>
        <Typography>Purchase</Typography>
      </Stack>
    </Stack>
  );
};
