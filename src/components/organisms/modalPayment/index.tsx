// @packages
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { FC } from "react";
import Button from "@mui/material/Button";

// @scripts
import CreditCard from "../../molecules/creditCard";
import PaymentDetails from "../../molecules/paymentDetails";
import ShowDetails from "../../molecules/showDetails";
import { config } from "../../../core/config";

// @styles
import styles from "./styles";

export interface Props {
  isOpen: boolean;
  onClose?: () => void;
}

const text = config.text;

const ModalPayment: FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={styles.boxStyle}>
        <Grid container sx={styles.container}>
          <Grid container item md={6} direction="column">
            <Grid container item md={4} sx={styles.content}>
              <ShowDetails />
            </Grid>
            <Grid container item md={8} sx={styles.content}>
              <Box sx={styles.borderSolid}>
                <PaymentDetails priceTicket={150} />
              </Box>
            </Grid>
          </Grid>
          <Grid item md={6} sx={styles.content}>
            <Grid
              container
              direction="column"
              justifyContent="space-between"
              sx={styles.borderSolid}
            >
              <CreditCard />
              <Button
                color="success"
                fullWidth
                variant="contained"
                sx={styles.button}
              >
                Place Order
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalPayment;
