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
  onChange?: (value: number) => void;
  disabled?: boolean;
  placeholder?: string;
  name?: string;
  defaultValue?: number;
  minValue?: number;
  maxValue?: number;
};

export const NumberInput: FC<InputProps> = ({
  label,
  value,
  onChange,
  disabled = false,
  placeholder,
  name,
  minValue,
  maxValue,
  defaultValue,
}) => {
  return (
    <NumberField
      defaultValue={defaultValue}
      minValue={minValue}
      maxValue={maxValue}
      className={styles.inputWrapper}
      onChange={onChange}
      value={value}
    >
      <Label className={styles.label}>{label}</Label>
      <Group className={cx(styles.inputGroup, { [styles.disabled]: disabled })}>
        <Button
          slot="decrement"
          className={styles.button}
          aria-label="decrement"
        >
          <IconMinus />
        </Button>
        <Input
          className={styles.input}
          disabled={disabled}
          placeholder={placeholder}
          name={name}
        />
        <Button
          slot="increment"
          className={styles.button}
          aria-label="increment"
        >
          <IconPlus />
        </Button>
      </Group>
    </NumberField>
  );
};
