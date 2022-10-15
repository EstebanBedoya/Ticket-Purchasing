// @packages
import DateShow from "../dateShow";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FC } from "react";

// @styles
import styles from "./styles";

export interface Props {
  date: string;
}

const ShowDetails: FC<Props> = ({ date }) => {
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
        <DateShow date={date} />
      </Grid>
    </Grid>
  );
};

export default ShowDetails;
