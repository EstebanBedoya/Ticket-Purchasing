// @packages
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FC } from "react";

// @scripts
import { config } from "../../../core/config";
import { CardData } from "../../../utils/types";

// @styles
import styles from "./styles";
import { Typography } from "@mui/material";

export interface Props {
  isOpen: boolean;
  onClose?: () => void;
}

const initCardData: CardData = {
  name: "",
  number: "",
  cvc: "",
  expiry: "",
};

const SummaryPaymentModal: FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={styles.boxStyle}>
        <Typography sx={styles.titleLabel}>tanks title</Typography>
        <Typography sx={styles.showNameLabel}>show name</Typography>
        <Typography sx={styles.label}>place: place</Typography>
        <Typography sx={styles.label}>show date: 20/12/2022</Typography>
        <Typography sx={styles.label}>quantity tickets</Typography>
        <Typography sx={styles.label}>transaction value: $200</Typography>
        <Typography sx={styles.label}>transaction data: 12/12/2022</Typography>
      </Box>
    </Modal>
  );
};

export default SummaryPaymentModal;
