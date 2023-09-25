import React, { ReactNode, useState } from "react";
import { Tabs, Tab, Stack, Container, useMediaQuery, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { LayoutProfile } from "@/layout/pages/layout-profile";
import { IncompleteProfile } from "@/screens/my-account/components/incomplete-profile";
import { useTranslation } from "next-i18next";
import { MyCollection } from "./my-collection";
import { MyProfile } from "./my-profile";
import { Security } from "./security";
import { Transactions } from "./transactions";
import { theme } from "@/config/theme";

interface TabPanelProps {
  children?: ReactNode;
  title: string;
  value: number;
  index: number;
}

const TabPanel = ({children, title, value, index}: TabPanelProps) => {

  return (
    <Box
      width="100%"
      paddingTop={5}
      hidden={value !== index}>
      <Typography fontSize={28} fontWeight={700} marginBottom={5}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

export const MyAccountScreen = () => {
  const { t } = useTranslation("common");
  const mediumViewport = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <LayoutProfile
      title={t("account.metaTitle")}
      description={t("account.metaDescription")}
    >
      {false && <IncompleteProfile />}
      <Container maxWidth="lg">
        <Stack direction={mediumViewport ? "column" : "row"} minHeight="60vh">
          <Tabs
            orientation={mediumViewport ? "horizontal" : "vertical"}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            TabIndicatorProps={{
              style: {
                display: "none",
              },
            }}
            sx={{
              marginTop: {md: "100px"},
              width: {md: "300px"},
            }}>
            <Tab key="tab1" label={t("account.profile")} sx={{alignItems: mediumViewport ? "center": "flex-start"}} />
            <Tab key="tab2" label={t("account.security")} sx={{alignItems: mediumViewport ? "center": "flex-start"}} />
            <Tab key="tab3" label={t("account.myCollections")} sx={{alignItems: mediumViewport ? "center": "flex-start"}} />
            <Tab key="tab4" label={t("account.transactions")} sx={{alignItems: mediumViewport ? "center": "flex-start"}} />
          </Tabs>
          <TabPanel title={t("account.profile")} value={value} index={0}>
            <MyProfile />
          </TabPanel>
          <TabPanel title={t("account.securitySettings")} value={value} index={1}>
            <Security />
          </TabPanel>
          <TabPanel title={t("account.myCollections")} value={value} index={2}>
            <MyCollection />
          </TabPanel>
          <TabPanel title={t("account.transactions")} value={value} index={3}>
            <Transactions />
          </TabPanel>
        </Stack>
      </Container>
    </LayoutProfile>
  );
};
