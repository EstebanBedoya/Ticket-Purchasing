// @packages
import Chip from "@mui/material/Chip";
import { SxProps, Theme } from "@mui/material/styles";
import { FC } from "react";

// @scripts
import { config } from "../../../core/config";

// @styles
import styles from "./styles";

const text = config.text;

export interface Props {
  isAvailable: boolean;
  sx?: SxProps<Theme>;
}

const AvailableChip: FC<Props> = ({ isAvailable, sx }) => {
  return (
    <Chip
      label={isAvailable ? text.available : text.notAvailable}
      sx={{
        backgroundColor: isAvailable ? "success.main" : "error.main",
        ...sx,
        ...styles,
      }}
    />
  );
};

export default AvailableChip;
