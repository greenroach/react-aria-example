import {
  Input as AriaInput,
  Label,
  TextField,
  type TextFieldProps,
} from 'react-aria-components';
import styles from './Input.module.scss';
import { FC } from 'react';
import { useHover } from 'react-aria';
import cx from 'classnames';
import type { OmitStyleProps } from '@components/common/types';

interface InputProps extends OmitStyleProps<TextFieldProps> {
  label?: string;

  placeholder?: string;
}

export const Input: FC<InputProps> = ({ label, ...otherProps }) => {
  const { isHovered, hoverProps } = useHover({});

  return (
    <TextField {...otherProps} className={styles.inputWrapper}>
      {label && <Label className={styles.label}>{label}</Label>}
      <AriaInput
        className={cx(styles.input, {
          [styles.hover]: isHovered,
        })}
        {...hoverProps}
      />
    </TextField>
  );
};
