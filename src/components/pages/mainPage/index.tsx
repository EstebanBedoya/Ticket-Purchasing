// @packages
import Grid from "@mui/material/Grid";
import ShowCard from "../../organisms/showCard";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";

// @scripts
import { config } from "../../../core/config";
import { ShowsSate } from "../../../core/store/shows/showsSlice";

// @styles
import styles from "./styles";
import { ShowType } from "../../../utils/types";

const text = config.text;

const MainPage = () => {
  const shows: ShowType[] = useSelector((state: any) => state.schedules.shows);

  console.log(shows);

  return (
    <Grid container direction="column">
      <Grid item sx={styles.carouselContent}>
        {/* image carousel */}
      </Grid>
      <Grid container item spacing={2}>
        <Grid container item justifyContent="center">
          <Grid item sx={styles.titleContent}>
            <Typography sx={styles.titleLabel}>{text.shows}</Typography>
            <Divider sx={styles.titleDivider} />
          </Grid>
        </Grid>
        <Grid alignItems="center" container item justifyContent="center">
          {shows.map((item, index) => (
            <ShowCard showData={item} key={index} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainPage;
