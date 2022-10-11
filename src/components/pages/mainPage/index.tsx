// @packages
import Grid from "@mui/material/Grid";
import ShowCard from "../../organisms/showCard";
import Typography from "@mui/material/Typography";

// @styles
import styles from "./styles";
import Divider from "@mui/material/Divider";

const MainPage = () => {
  return (
    <Grid container direction="column">
      <Grid item sx={styles.carouselContent}>\
      {/* image carousel */}
      </Grid>
      <Grid container item spacing={2}>
        <Grid container item justifyContent="center">
          <Grid item sx={styles.titleContent}>
            <Typography sx={styles.titleLabel}>Shows</Typography>
            <Divider sx={styles.titleDivider} />
          </Grid>
        </Grid>
        <Grid
          alignItems="center"
          container
          item
          justifyContent="center"
        >
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
          <ShowCard />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainPage;
