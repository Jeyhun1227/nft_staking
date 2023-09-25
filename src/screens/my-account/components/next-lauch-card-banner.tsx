import { TextCounter, TextCounterProps } from "@/components/typography/counter";
import { Stack } from "@mui/material";

interface Props extends Partial<TextCounterProps> {
  bottom?: string | number;
  left?: string | number;
  deg?: number;
}

export const NextLaunchCardBanner = ({
  bottom = -25,
  left = 60,
  deg = -12,
  ...textProps
}: Props) => {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      justifyContent="center"
      width="120%"
      bottom={bottom}
      left={left}
      height="46px"
      position="absolute"
      sx={{
        background: "#FFF",
        transform: `rotate(${deg}deg)`,
      }}
    >
      <TextCounter
        counter={[
          { value: "12", unit: "DAYS" },
          { value: "22", unit: "HRS" },
          { value: "28", unit: "MIN" },
        ]}
        {...textProps}
        variantStyle="banner"
      />
    </Stack>
  );
};
