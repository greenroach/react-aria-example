import { Icon } from "@adobe/react-spectrum";
import { FC } from "react";
import { IconProps } from "./types";

export const IconMinus: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <svg viewBox="0 0 24 24">
        <g>
          <path d="M5 12.9992V10.9993H18.9992V12.9992H5Z" />
        </g>
      </svg>
    </Icon>
  );
};
