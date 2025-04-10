import { FC, ReactNode } from "react";
import {
  Button as AriaButton,
  ButtonProps as AriaButtonProps,
} from "react-aria-components";
import cx from "classnames";
import styles from "./Button.module.scss";

type Size = "small" | "medium";
type Variant = "contained" | "outlined";
type Theme = "primary" | "secondary";
type IconPosition = "left" | "right";

interface ButtonProps {
  size?: Size;
  variant?: Variant;
  theme?: Theme;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  children?: ReactNode;
  onPress?: AriaButtonProps["onPress"];
}

export const Button: FC<ButtonProps> = ({
  size = "medium",
  variant = "contained",
  theme = "primary",
  disabled,
  icon,
  iconPosition = "left",
  onPress,
  children,
}) => {
  const isIconOnly = !!icon && !children;

  const classes = cx(
    styles.button,
    styles[size],
    styles[variant],
    styles[theme],
    disabled && styles.disabled,
    isIconOnly && styles.iconOnly,
    !!icon &&
      !isIconOnly &&
      (iconPosition === "right" ? styles.iconRight : styles.iconLeft),
  );

  return (
    <AriaButton onPress={onPress} isDisabled={disabled} className={classes}>
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children && <span className={styles.label}>{children}</span>}
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </AriaButton>
  );
};
