// @packages
import Grid from "@mui/material/Grid/Grid";
import dayjs from "dayjs";
import { FC } from "react";

// @styles
import styles from "./styles";

export interface Props {
  date: string;
}

interface DateParse {
  dayOfWeek: string;
  day: number;
  monthAndYear: string;
}

const DateShow: FC<Props> = ({ date }) => {
  const { dayOfWeek, day, monthAndYear }: DateParse = {
    dayOfWeek: dayjs(date).format("ddd"),
    day: dayjs(date).date(),
    monthAndYear: dayjs(date).format("MMM YYYY"),
  };

  return (
    <Grid container item direction="column" spacing={0} sx={styles.container}>
      <Grid item>{dayOfWeek}</Grid>
      <Grid item sx={styles.dayText}>
        {day}
      </Grid>
      <Grid item>{monthAndYear}</Grid>
    </Grid>
  );
};

export default DateShow;
