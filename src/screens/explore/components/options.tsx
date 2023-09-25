import { Stack } from "@mui/material";
import React, { useState } from "react";
import NextImage from "next/image";

import { ExploreOptionsSelectInput } from "./options-select-input";
import { ExploreOptionsCurrentValue } from "./options-current-value";

const ICON_SIZE = 25;

interface Props {
  selectedIndex: number;
  options:{ label: string, value: string }[]
  onOptionSelected:any;
}

export const ExploreOptions = ({ selectedIndex, options, onOptionSelected }: Props) => {
 
  const [option, setOption] = useState("");
  const [sort, setSortValue] = useState("");

  const handleChange = (value:string) => {
    setOption(value);
    onOptionSelected(value, sort);
  }

  const handleSortChange = (value:string) => {
    setSortValue(value);
    onOptionSelected(option, value);
  }

  let optionSorts = [
    {
      label: "New",
      value: "createdAt",
    },
    {
      label: "Most popular",
      value: "popularityScore"
    },
    {
      label: "Trendy",
      value: "trendingScore"
    }
  ]
  if(selectedIndex===1){
    optionSorts.push(    {
      label: "Scarcity",
      value: "Scarcity",
    })
  }
  
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={"space-between"}
      alignItems={{ xs: "flex-start", sm: "center" }}
      spacing={{ xs: 4, sm: 0 }}
      flexWrap="wrap"
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={{ xs: "space-between", sm: "flex-start" }}
        spacing={{ xs: 0, sm: 3 }}
        flexWrap="wrap"
        width={{ xs: "100%", sm: "auto" }}
      >
        <ExploreOptionsCurrentValue />

        <ExploreOptionsSelectInput
          withDefault={true}
          onChange={handleChange}
          icon={
            <NextImage
              layout="fixed"
              src="/images/category.svg"
              height={ICON_SIZE}
              width={ICON_SIZE}
            />
          }
          options={options}
        />
      </Stack>

      <ExploreOptionsSelectInput
        icon={
          <NextImage
            layout="fixed"
            src="/images/filter.svg"
            height={ICON_SIZE}
            width={ICON_SIZE}
          />
        }
        textFieldProps={{
          label: "Filter & sort",
        }}
        isSort
        onChange={handleSortChange}
        options={optionSorts}
      />
    </Stack>
  );
};
