// @packages
import { ChangeEvent, useState } from "react";
import Grid from "@mui/material/Grid";
import Cards, { Focused } from "react-credit-cards";
import Input from "@mui/material/Input";

// @styles
import "react-credit-cards/es/styles-compiled.css";
import styles from "./styles";

const CreditCard = () => {
  const [cvc, setCvc] = useState<string | number>("");
  const [expiry, setExpiry] = useState<string | number>("");
  const [focus, setFocus] = useState<Focused | undefined>();
  const [name, setName] = useState<string>("");
  const [number, setNumber] = useState<string | number>("");

  const handleFocus = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFocus(event.target.name as Focused);
  };

  return (
    <>
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <Grid container spacing={1} sx={styles.inputsContent}>
        <Grid item xs={12}>
          <Input
            disableUnderline
            fullWidth
            name="number"
            onChange={(e) => setNumber(e.target.value)}
            onFocus={handleFocus}
            placeholder="Card Number"
            sx={styles.input}
            type="tel"
            value={number}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            disableUnderline
            fullWidth
            name="name"
            onChange={(e) => setName(e.target.value)}
            onFocus={handleFocus}
            placeholder="Name"
            sx={styles.input}
            type="text"
            value={name}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            disableUnderline
            fullWidth
            name="expiry"
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={handleFocus}
            placeholder="MM/YY"
            sx={styles.input}
            type="text"
            value={expiry}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            disableUnderline
            fullWidth
            name="cvc"
            onChange={(e) => setCvc(e.target.value)}
            onFocus={handleFocus}
            placeholder="CVC"
            sx={styles.input}
            type="tel"
            value={cvc}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default CreditCard;
