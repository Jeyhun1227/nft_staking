import { CircleBlur } from "@/components/backgrounds/circle-blur";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const JoinSafetyBackground = ({ children }: Props) => {
  return (
    <Stack marginBottom={"157px"}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          position: "relative",
          background:
            "linear-gradient(2.01deg, #191225 1.85%, rgba(25, 18, 37, 0) 156.36%), url(/images/safety-bg.jpg)",
          paddingTop: 15,
          paddingBottom: 9,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
          backgroundPosition: "center",
          zIndex: 100,
        }}
      >
        {children}
        <Box display={{ xs: "none", md: "flex" }}>
          <img
            src="/images/lacet.svg"
            alt=""
            style={{
              width: "444.64px",
              height: "42.69px",
              position: "absolute",
              top: "-20px",
              left: "-250px",
            }}
          />
        </Box>
        <Box display={{ xs: "none", md: "flex" }}>
          <img
            src="/images/lacet.svg"
            alt=""
            style={{
              width: "444.64px",
              height: "42.69px",
              position: "absolute",
              bottom: "-23px",
              right: "-110px",
            }}
          />
        </Box>
      </Stack>
      <CircleBlur
        background={"secondary.main"}
        width="1072px"
        height="592px"
        blur="400px"
        propsStyle={{
          position: "absolute",
          opacity: "0.2",
          zIndex: 1,
        }}
      />
    </Stack>
  );
};
