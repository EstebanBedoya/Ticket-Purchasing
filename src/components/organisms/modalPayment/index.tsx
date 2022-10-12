// @packages
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { FC, useState } from "react";
import { SelectChangeEvent } from "@mui/material";

// @scripts
import SelectQuantity from "../..//molecules/SelectQuantity";
import { config } from "../../../core/config";

// @styles
import styles from "./styles";
import CreditCard from "../../molecules/creditCard";

export interface Props {
  isOpen: boolean;
  onClose?: () => void;
}

const text = config.text;

const ModalPayment: FC<Props> = ({ isOpen, onClose }) => {
  const [quantityTickets, setQuantityTickets] = useState<number | string>("");

  if (!isOpen) {
    return null;
  }

  const handleChangeQuantityTickets = (event: SelectChangeEvent) => {
    setQuantityTickets(Number(event.target.value));
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={styles.boxStyle}>
        <Grid container sx={styles.container}>
          <Grid container item md={6} direction="column">
            <Grid container item md={4} sx={styles.content}>
              <SelectQuantity
                quantity={5}
                value={quantityTickets?.toString()}
                onChange={handleChangeQuantityTickets}
              />
            </Grid>
            <Grid container item md={8} sx={styles.content}>
              <Box sx={styles.borderSolid}>
                <CreditCard />
              </Box>
            </Grid>
          </Grid>
          <Grid item container md={6} sx={styles.content}>
            <Box sx={styles.borderSolid}>{/* pay */}</Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalPayment;
