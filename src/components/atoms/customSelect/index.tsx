// @packages
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import _ from "lodash";
import { FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";

// @styles
import styles from "./styles";

export interface Props {
  onChange?: (event: SelectChangeEvent) => void;
  quantity: number;
  sx?: SxProps<Theme>;
  value?: number;
}

const CustomSelect: FC<Props> = ({ value, onChange, quantity, sx }) => {
  const items = _.range(quantity);
  return (
    <Select
      onChange={onChange}
      sx={{ ...sx, ...styles.content }}
      value={value?.toString()}
    >
      {items.map((item, index) => (
        <MenuItem key={index} value={item + 1}>
          {item + 1}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
