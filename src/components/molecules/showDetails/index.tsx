// @packages
import DateShow from "../dateShow";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FC } from "react";

// @scripts

// @styles
import styles from "./styles";

export interface Props {}

const ShowDetails: FC<Props> = () => {
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
    </Grid>
  );
};

export default ShowDetails;
