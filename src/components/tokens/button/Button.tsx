import { FC } from "react";
import { Button as AriaButton } from "react-aria-components";

type Size = "small" | "medium";
type Variant = "contained" | "outlined";
type Theme = "primary" | "secondary";

interface ButtonProps {
  size?: Size;
  variant?: Variant;
  theme?: Theme;
  disabled?: boolean;
  children: React.ReactNode;
  onPress?: () => void;
}

export const Button: FC<ButtonProps> = ({
  size,
  variant,
  theme,
  disabled,
  children,
  onPress,
}) => {
  return (
    <AriaButton onPress={onPress} isDisabled={disabled}>
      {children}
    </AriaButton>
  );
};
