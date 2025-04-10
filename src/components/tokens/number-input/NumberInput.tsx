import {
  Input,
  Button,
  Group,
  Label,
  NumberField,
  type NumberFieldProps,
} from "react-aria-components";

import { FC } from "react";

import { IconMinus, IconPlus } from "@components/icons";
import styles from "./NumberInput.module.scss";
import cx from "classnames";
import { OmitStyleProps } from "@components/common/types";

interface InputProps extends OmitStyleProps<NumberFieldProps> {
  label?: string;
  placeholder?: string;
}

export const NumberInput: FC<InputProps> = ({
  label,
  value,
  onChange,
  minValue,
  maxValue,
  defaultValue,
  placeholder,
  ...otherProps
}) => {
  return (
    <NumberField
      defaultValue={defaultValue}
      minValue={minValue}
      maxValue={maxValue}
      onChange={onChange}
      value={value}
      {...otherProps}
      className={styles.inputWrapper}
      style={undefined}
    >
      <Label className={styles.label}>{label}</Label>
      <Group className={cx(styles.inputGroup)}>
        <Button
          slot="decrement"
          className={styles.button}
          aria-label="decrement"
        >
          <IconMinus />
        </Button>
        <Input placeholder={placeholder} className={styles.input} />
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
