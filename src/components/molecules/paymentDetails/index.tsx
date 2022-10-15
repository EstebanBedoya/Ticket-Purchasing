// @packages
import CustomSelect from "../../atoms/customSelect";
import { FC, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { SelectChangeEvent } from "@mui/material";

// @scripts
import { config } from "../../../core/config";

// @styles
import styles from "./styles";

const text = config.text;

export interface Props {
  priceTicket: number;
  quantityTickets: number;
  setQuantityTickets: (param: number) => void;
  total: number;
  setTotal: (param: number) => void;
}

const PaymentDetails: FC<Props> = ({
  priceTicket,
  quantityTickets,
  setQuantityTickets,
  setTotal,
  total,
}) => {
  useEffect(() => {
    setTotal(priceTicket * quantityTickets);
  }, [quantityTickets]);

  function handleChangeQuantityTickets(event: SelectChangeEvent) {
    setQuantityTickets(Number(event.target.value));
  }

  return (
    <>
      <Typography sx={styles.title}>Payment details</Typography>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        sx={styles.container}
      >
        <Grid
          alignItems="flex-end"
          container
          item
          justifyContent="space-between"
        >
          <Typography sx={styles.label}>{text.quantityTickets}</Typography>
          <CustomSelect
            onChange={handleChangeQuantityTickets}
            quantity={5}
            value={quantityTickets}
          />
        </Grid>
        <Grid container item justifyContent="space-between">
          <Typography sx={styles.label}>{text.pricePerTickets}</Typography>
          <Typography sx={styles.label}>{`$${priceTicket}`}</Typography>
        </Grid>
        <Grid container item justifyContent="space-between">
          <Typography sx={styles.label}>{text.total}</Typography>
          <Typography sx={styles.label}>{`$${total}`}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default PaymentDetails;
