import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import RCountdown from "react-countdown";

interface Props {
  date?: Date;
};

const Countdown = ({date}: Props) => {
  return (
    <RCountdown
      date={date || Date.now()}
      renderer={({
        days,
        hours,
        minutes,
        seconds,
      }: {
        days: number;
        hours: number;
        minutes: number;
        seconds: number;
      }) => (
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {[
            { value: days, label: "D" },
            { value: hours, label: "H" },
            { value: minutes, label: "M" },
            { value: seconds, label: "S" },
          ].map((item) => (
            <Stack key={item?.label} direction="row" alignItems="baseline">
              <Typography
                fontSize={{ xs: 30, sm: 60 }}
                lineHeight="110%"
                letterSpacing={"-1px"}
                fontWeight={"600"}
              >
                {item?.value}
              </Typography>
              <Typography
                fontSize={{ xs: 20, sm: 22 }}
                lineHeight="110%"
                letterSpacing={"-1px"}
                fontWeight={"600"}
              >
                {item?.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      )}
    />
  );
};

export default Countdown;
