import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import { CheckoutContentMethodsButtonGroup } from "./content-methods-button-group";
import { CheckoutContentMethodsDescription } from "./content-methods-desciption";

export const CheckoutContentMethods = () => {
  return (
    <Stack>
      <CheckoutContentMethodsButtonGroup />
      <Box marginY={4}>
        <Divider />
      </Box>
      <CheckoutContentMethodsDescription />
    </Stack>
  );
};
