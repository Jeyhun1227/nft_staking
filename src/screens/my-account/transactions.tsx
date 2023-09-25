import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useTranslation } from "next-i18next";

import { TransactionItem } from "./components/transaction-item";

const transactions = [
  {
    no: "24RT45647KSD (11/02/2022 at 12:00pm)",
    tokens: "+3900 MATIC",
    eurAmount: 881.5,
    usdAmount: 820.77,
    destination: "0x9158...0fbC"
  },
  {
    no: "24RT45647KSD (11/02/2022 at 12:00pm)",
    tokens: "+3900 MATIC",
    eurAmount: 881.5,
    usdAmount: 820.77,
    destination: "0x9158...0fbC"
  },
  {
    no: "24RT45647KSD (11/02/2022 at 12:00pm)",
    tokens: "+3900 MATIC",
    eurAmount: 881.5,
    usdAmount: 820.77,
    destination: "0x9158...0fbC"
  },
  {
    no: "24RT45647KSD (11/02/2022 at 12:00pm)",
    tokens: "+3900 MATIC",
    eurAmount: 881.5,
    usdAmount: 820.77,
    destination: "0x9158...0fbC"
  },
  {
    no: "24RT45647KSD (11/02/2022 at 12:00pm)",
    tokens: "+3900 MATIC",
    eurAmount: 881.5,
    usdAmount: 820.77,
    destination: "0x9158...0fbC"
  },
];

export const Transactions = () => {
  const { t } = useTranslation("common");

  return (
    <Container disableGutters sx={{ marginBottom: 4, marginTop: 4, overflow: "auto" }}>
      <Stack spacing={3} width="1024px">
        <Stack
          direction="row"
          justifyContent="space-between"
          padding="12px"
          sx={{
            paddingBottom: "24px",
            borderBottom: "1px solid #515765",
          }}>
          <Typography color="#9BA0B5" width="220px">
            {t("transaction.transactionNo")}
          </Typography>
          <Typography color="#9BA0B5" width="150px" textAlign="center">
            {t("transaction.tokens")}
          </Typography>
          <Typography color="#9BA0B5" width="180px" textAlign="center">
            {t("transaction.to")}
          </Typography>
          <Typography color="#9BA0B5" width="150px" textAlign="center">
            {t("transaction.eurAmount")}
          </Typography>
          <Typography color="#9BA0B5" width="150px" textAlign="center">
            {t("transaction.usdAmount")}
          </Typography>
          <Typography color="#9BA0B5" width="150px" textAlign="center">
            {t("transaction.type")}
          </Typography>
        </Stack>
      {
        transactions.map((transaction, index) =>
        <TransactionItem key={index} data={transaction}/>)
      }
      </Stack>
    </Container>
  );
};
