// @packages
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FC } from "react";
import { Typography } from "@mui/material";

// @scripts
import { CardData, ShowType } from "../../../utils/types";
import { config } from "../../../core/config";

// @styles
import styles from "./styles";
import dayjs from "dayjs";

export interface Props {
  isOpen: boolean;
  onClose?: () => void;
  quantityTickets: number;
  showData: ShowType;
  totalPrice: number;
}

const initCardData: CardData = {
  name: "",
  number: "",
  cvc: "",
  expiry: "",
};

interface summaryModel {
  place: string;
  showDate: string;
  quantityTickets: number;
  transactionValue: number;
  transactionDate: string;
}

const SummaryPaymentModal: FC<Props> = ({
  isOpen,
  onClose,
  quantityTickets,
  showData,
  totalPrice,
}) => {
  if (!isOpen) {
    return null;
  }

  const summary: summaryModel = {
    place: showData.place,
    showDate: showData.date,
    quantityTickets,
    transactionValue: totalPrice,
    transactionDate: dayjs().format("MM-DD-YYYY"),
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={styles.boxStyle}>
        <Typography sx={styles.titleLabel}>tanks title</Typography>
        <Typography sx={styles.showNameLabel}>show name</Typography>
        {config.masterData.summaryPaymentsLabels.map(
          (item: any, index: number) => (
            <Typography key={index} sx={styles.label}>{`${item.label}: ${
              summary[item.value as keyof typeof summary]
            }`}</Typography>
          )
        )}
      </Box>
    </Modal>
  );
};

export default SummaryPaymentModal;
