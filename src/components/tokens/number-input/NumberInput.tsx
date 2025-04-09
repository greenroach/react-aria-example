import {
  Input,
  Button,
  Group,
  Label,
  NumberField,
} from "react-aria-components";

import { FC } from "react";

import { IconMinus, IconPlus } from "@components/icons";
import styles from "./NumberInput.module.scss";
import cx from "classnames";

type InputProps = {
  label?: string;
  value?: number;
  onChange?: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  defaultValue?: number;
  minValue?: number;
};

export const NumberInput: FC<InputProps> = ({
  label,
  value,
  onChange,
  disabled = false,
  placeholder,
  name,
  minValue,
  defaultValue,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onChange) return;
    onChange(e.target.value);
  };

  return (
    <NumberField
      defaultValue={defaultValue}
      minValue={minValue}
      className={styles.inputWrapper}
    >
      <Label className={styles.label}>{label}</Label>
      <Group className={cx(styles.inputGroup, { [styles.disabled]: disabled })}>
        <Button slot="decrement" className={styles.button}>
          <IconMinus aria-label="decrement" />
        </Button>
        <Input
          className={styles.input}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
        />
        <Button slot="increment" className={styles.button}>
          <IconPlus aria-label="increment" />
        </Button>
      </Group>
    </NumberField>
  );
};
