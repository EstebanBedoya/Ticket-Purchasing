// @packages
import Button from "@mui/material/Button";
import DateShow from "../../molecules/dateShow";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";

// @scripts
import AvailableChip from "../../atoms/availableChip";

// @styles
import styles from "./styles";
import ModalPayment from "../modalPayment";
import Box from "@mui/material/Box";

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
            justifyContent="center"
            sx={styles.bottomContent}
          >
            <Grid item xs={4}>
              <DateShow date="10-10-2022" />
            </Grid>
            <Grid item xs={6}>
              <Typography sx={styles.placeLabel}>la macarena</Typography>
              <Button
                onClick={handleOpenModal}
                size="large"
                sx={styles.buyButton}
                variant="contained"
              >
                Buy Ticket
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
