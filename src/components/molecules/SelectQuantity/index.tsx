// @packages
import DateShow from "../dateShow";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { SelectChangeEvent } from "@mui/material/Select";

// @scripts
import CustomSelect from "../../atoms/customSelect";
import { config } from "../../../core/config";

// @styles
import styles from "./styles";

const text = config.text;

export interface Props {
  onChange?: (event: SelectChangeEvent) => void;
  quantity: number;
  value?: string;
}

const SelectQuantity: FC<Props> = ({ value, onChange, quantity }) => {
  return (
    <Grid
      container
      direction="column"
      item
      justifyContent="space-between"
      sx={styles.borderSolid}
    >
      <Grid container item justifyContent="space-between">
        <Typography sx={styles.titleLabel}>ShowName</Typography>
        <DateShow date="10-10-2022" />
      </Grid>
      <Grid alignItems="flex-end" container item justifyContent="flex-end">
        <Typography sx={styles.label}>{text.selectQuantity}</Typography>
        <CustomSelect
          onChange={onChange}
          quantity={quantity}
          value={value}
        />
      </Grid>
    </Grid>
  );
};

export default SelectQuantity;
