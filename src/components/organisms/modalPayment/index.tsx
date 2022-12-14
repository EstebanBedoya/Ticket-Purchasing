// @packages
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { FC, useState } from "react";
import Button from "@mui/material/Button";

// @scripts
import CreditCard from "../../molecules/creditCard";
import PaymentDetails from "../../molecules/paymentDetails";
import ShowDetails from "../../molecules/showDetails";
import SummaryPaymentModal from "../../molecules/summaryPaymentModal";
import { CardData, ShowType } from "../../../utils/types";
import { config } from "../../../core/config";
import { validateCardData } from "../../../utils/payment";

// @styles
import styles from "./styles";
import Alert from "@mui/lab/Alert/Alert";

export interface Props {
  isOpen: boolean;
  onClose: () => void;
  showData: ShowType;
}

const text = config.text;

const initCardData: CardData = {
  name: "",
  number: "",
  cvc: "",
  expiry: "",
};

const ModalPayment: FC<Props> = ({ isOpen, onClose, showData }) => {
  const [cardData, setCardData] = useState<CardData>(initCardData);
  const [openAlert, setOpenAlert] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [quantityTickets, setQuantityTickets] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);

  if (!isOpen) {
    return null;
  }

  const handelClick = () => {
    if (validateCardData(cardData)) {
      setOpenModal(true);
      setOpenAlert(false);
    }

    setOpenAlert(true);
  };

  const onClosePaymentModal = () => {
    setOpenModal(false);
    onClose();
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={styles.boxStyle}>
        <Grid container sx={styles.container}>
          <Grid container item md={6} direction="column">
            <Grid container item md={4} sx={styles.content}>
              <ShowDetails date={showData.date} />
            </Grid>
            <Grid container item md={8} sx={styles.content}>
              <Box sx={styles.borderSolid}>
                <PaymentDetails
                  priceTicket={showData.price}
                  quantityTickets={quantityTickets}
                  setQuantityTickets={setQuantityTickets}
                  setTotal={setTotal}
                  total={total}
                />
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
              <CreditCard setCardData={setCardData} />
              {openAlert ? (
                <Alert severity="error">missing complete information</Alert>
              ) : null}
              <Button
                color="success"
                fullWidth
                onClick={handelClick}
                sx={styles.button}
                variant="contained"
              >
                {text.placeOrder}
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <SummaryPaymentModal
          isOpen={openModal}
          onClose={onClosePaymentModal}
          showData={showData}
          quantityTickets={quantityTickets}
          totalPrice={total}
        />
      </Box>
    </Modal>
  );
};

export default ModalPayment;
