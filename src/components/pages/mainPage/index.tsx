// @packages
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import ShowCard from "../../organisms/showCard";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";

// @scripts
import { ShowType } from "../../../utils/types";
import { config } from "../../../core/config";

// @styles
import styles from "./styles";

const text = config.text;

const MainPage = () => {
  const shows: ShowType[] = useSelector((state: any) => state.schedules.shows);

  return (
    <Grid container spacing={2}>
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
  );
};

export default MainPage;
