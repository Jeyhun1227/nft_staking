// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/pie
import { Box } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const NftProjectBreackDownChart = () => {
  const data = [
    {
      id: "basic",
      label: "basic",
      value: 100,
      color: "hsla(262, 22%, 19%, 1)",
    },
    {
      id: "diamond",
      label: "diamond",
      value: 100,
      color: "hsla(220, 100%, 66%, 1)",
    },
    {
      id: "platinium",
      label: "platinium",
      value: 100,
      color: "hsla(0, 0%, 100%, 1)",
    },
    {
      id: "gold",
      label: "gold",
      value: 100,
      color: "hsla(37, 66%, 55%, 1)",
    },
    {
      id: "tokens",
      label: "tokens",
      value: 400,
      color: "hsla(281, 65%, 65%, 1)",
    },
  ];

  return (
    <Box minHeight={360} height={400} width="100%" paddingY={5}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        arcLinkLabel={function (e) {
          return e.id + " (" + e.value + ")";
        }}
        arcLinkLabelsTextOffset={7}
        arcLinkLabelsTextColor="#FFF"
        arcLinkLabelsOffset={-8}
        arcLinkLabelsDiagonalLength={36}
        arcLinkLabelsStraightLength={36}
        arcLinkLabelsColor="#FFF"
        enableArcLabels={false}
        arcLabelsRadiusOffset={0.7}
        arcLabelsSkipAngle={10}
        isInteractive={false}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[]}
      />
    </Box>
  );
};

export default NftProjectBreackDownChart;
