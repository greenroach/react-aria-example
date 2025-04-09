import { Input as AriaInput, Label, TextField } from "react-aria-components";
import styles from "./Input.module.scss";
import { FC } from "react";

type InputProps = {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
};

export const Input: FC<InputProps> = ({
  label,
  value,
  onChange,
  disabled = false,
  placeholder,
  name,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    onChange(e.target.value);
  };

  return (
    <TextField className={styles.inputWrapper}>
      {label && <Label className={styles.label}>{label}</Label>}
      <AriaInput
        className={styles.input}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        name={name}
      />
    </TextField>
  );
};
