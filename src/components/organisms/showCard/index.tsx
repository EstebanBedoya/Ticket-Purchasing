// @packages
import Button from "@mui/material/Button";
import DateShow from "../../molecules/dateShow";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

// @scripts
import AvailableChip from "../../atoms/availableChip";

// @styles
import styles from "./styles";

const ShowCard = () => {
  return (
    <Grid sx={styles.container}>
      <Grid container item direction="column" sx={styles.contentCard}>
        <Grid item sx={styles.imageContent}>
          <AvailableChip isAvailable sx={styles.availableChip} />
        </Grid>
        <Grid
          alignItems="center"
          container
          item
          justifyContent="center"
          sx={styles.titleContent}
        >
          <Typography sx={styles.title}>TITLE</Typography>
        </Grid>
        <Divider variant="middle" />
        <Grid
          alignItems="center"
          columns={10}
          container
          item
          justifyContent="center"
          sx={styles.bottomContent}
        >
          <Grid item xs={4}>
            <DateShow date="10-10-2022" />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={styles.placeLabel}>la macarena</Typography>
            <Button sx={styles.buyButton} size="large" variant="contained">
              Buy Ticket
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShowCard;
