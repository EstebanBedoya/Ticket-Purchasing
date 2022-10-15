// @packages
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DateShow from "../../molecules/dateShow";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";

// @scripts
import AvailableChip from "../../atoms/availableChip";
import ModalPayment from "../modalPayment";
import { config } from "../../../core/config";

// @styles
import styles from "./styles";

const { text } = config;

const ShowCard = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Box sx={styles.container}>
        <Grid container item direction="column" sx={styles.contentCard}>
          <Grid item sx={styles.imageContent}>
            <AvailableChip isAvailable sx={styles.availableChip} />
          </Grid>
          <Grid
            alignItems="center"
            container
            item
            justifyContent="center"
            sx={styles.titleContent}
          >
            <Typography sx={styles.title}>TITLE</Typography>
          </Grid>
          <Divider variant="middle" />
          <Grid
            alignItems="center"
            columns={10}
            container
            item
            justifyContent="space-between"
            sx={styles.bottomContent}
          >
            <Grid item xs={5}>
              <DateShow date="10-10-2022" />
            </Grid>
            <Grid item xs={5}>
              <Typography sx={styles.placeLabel}>la macarena</Typography>
              <Button
                onClick={handleOpenModal}
                size="large"
                sx={styles.buyButton}
                variant="contained"
              >
                {text.buyTicket}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <ModalPayment isOpen={openModal} onClose={handleCloseModal} />
    </>
  );
};

export default ShowCard;
