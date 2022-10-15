// @packages
import Input from "@mui/material/Input";
import { ChangeEvent, FC } from "react";
import { SxProps, Theme } from "@mui/material/styles";

interface Props {
  forceRule?: boolean;
  maxLength?: number;
  minLength?: number;
  name: string;
  onChange: (value: string | number) => void;
  onFocus: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  placeholder: string;
  regExp?: RegExp;
  sx?: SxProps<Theme>;
  type: string;
  value: string | number;
}

const InputField: FC<Props> = ({
  forceRule,
  maxLength,
  minLength,
  name,
  onChange,
  onFocus,
  placeholder,
  regExp,
  sx,
  type,
  value,
}) => {
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    let val: string | number = event.target.value;

    const successRegex = regExp && forceRule ? regExp.test(val) : true;
    if (successRegex || val === "") {
      if (val !== "" && type === "number") {
        val = Number(val);
      }
      onChange(val);
    }
  };

  const getError = () => {
    if (regExp && !forceRule && value !== "") {
      return !regExp.test(value.toString());
    }
    return false;
  };
  return (
    <Input
      disableUnderline
      error={getError()}
      fullWidth
      inputProps={{ maxLength, minLength, required: true }}
      name={name}
      onChange={handleChange}
      onFocus={onFocus}
      placeholder={placeholder}
      sx={sx}
      type={!forceRule && type ? type : "default"}
      value={value}
    />
  );
};

export default InputField;
