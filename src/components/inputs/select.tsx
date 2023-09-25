import { ReactNode, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Stack } from "@mui/material";

interface IProps {
  icon?: ReactNode;
  label?: string;
  options: { value: string; label: string }[];
}

export const InputSelect = ({ icon, label, options }: IProps) => {
  const [value, setValue] = useState(options?.[0]?.value);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl>
      {label ? (
        <InputLabel
          sx={{
            "& .MuiInputLabel-animated": {
              color: "blue",
            },
          }}
          id={label ? "select-label" + label : undefined}
        >
          {label}
        </InputLabel>
      ) : null}
      <Select
        displayEmpty
        autoWidth
        labelId={label ? "select-label" + label : undefined}
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
        sx={{
          borderRadius: "64px",
          "& .MuiSelect-icon": {
            display: "none",
          },
        }}
        startAdornment={
          icon ? (
            <Stack alignItems={"center"} marginRight={1}>
              {icon}
            </Stack>
          ) : null
        }
      >
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
