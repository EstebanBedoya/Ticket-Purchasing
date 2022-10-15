// @scripts
import { CardData } from "./types";

// @constants
const ONLY_THREE_NUMBERS = /\d{3}/;
const ONLY_SIXTEEN_NUMBERS = /\d{16}/;
const ONLY_FOUR_NUMBERS = /\d{4}/;

export const validateCardData = ({
  name,
  expiry,
  cvc,
  number,
}: CardData): boolean => {
  const isValidCvc = ONLY_THREE_NUMBERS.test(cvc.toString());
  const isValidExpiry = ONLY_FOUR_NUMBERS.test(expiry.toString());
  const isValidNumber = ONLY_SIXTEEN_NUMBERS.test(number.toString());
  return Boolean(name && isValidCvc && isValidExpiry && isValidNumber);
};
