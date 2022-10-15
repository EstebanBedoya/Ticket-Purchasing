// @packages
import { ChangeEvent, FC, useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Cards, { Focused } from "react-credit-cards";

// @scripts
import Input from "../../atoms/inputField";
import { CardData } from "../../../utils/types";

// @styles
import "react-credit-cards/es/styles-compiled.css";
import styles from "./styles";

export interface Props {
  setCardData: ({ cvc, expiry, name, number }: CardData) => void;
}

const CreditCard: FC<Props> = ({ setCardData }) => {
  const [cvc, setCvc] = useState<string | number>("");
  const [expiry, setExpiry] = useState<string | number>("");
  const [focus, setFocus] = useState<Focused | undefined>();
  const [name, setName] = useState<string | number>("");
  const [number, setNumber] = useState<string | number>("");

  const handleFocus = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setFocus(event.target.name as Focused);
  };

  useEffect(() => {
    setCardData({ cvc, expiry, name, number });
  }, [cvc, expiry, name, number]);

  return (
    <>
      <Cards
        number={number}
        name={name.toString()}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <Grid container spacing={1} sx={styles.inputsContent}>
        <Grid item xs={12}>
          <Input
            maxLength={16}
            minLength={16}
            name="number"
            onChange={setNumber}
            onFocus={handleFocus}
            placeholder="Card Number"
            sx={styles.input}
            type="tel"
            value={number}
          />
        </Grid>
        <Grid item xs={12}>
          <Input
            name="name"
            onChange={setName}
            onFocus={handleFocus}
            placeholder="Name"
            sx={styles.input}
            type="text"
            value={name}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            maxLength={4}
            minLength={4}
            name="expiry"
            onChange={setExpiry}
            onFocus={handleFocus}
            placeholder="MMYY"
            sx={styles.input}
            type="tel"
            value={expiry}
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            maxLength={3}
            minLength={3}
            name="cvc"
            onChange={setCvc}
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
