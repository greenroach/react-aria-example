import { Icon } from "@adobe/react-spectrum";
import { FC } from "react";
import { IconProps } from "./types";

export const IconBin: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <svg viewBox="0 0 24 24">
        <g>
          <path d="M7.00007 20.9988C6.4501 20.9988 5.97929 20.8029 5.58765 20.4113C5.19601 20.0196 5.00018 19.5488 5.00018 18.9989V5.99964H4.00024V3.99976H8.99995V2.99982H14.9996V3.99976H19.9993V5.99964H18.9994V18.9989C18.9994 19.5488 18.8035 20.0196 18.4119 20.4113C18.0202 20.8029 17.5494 20.9988 16.9995 20.9988H7.00007ZM16.9995 5.99964H7.00007V18.9989H16.9995V5.99964ZM8.99995 16.999H10.9998V7.99952H8.99995V16.999ZM12.9997 16.999H14.9996V7.99952H12.9997V16.999Z" />
        </g>
      </svg>
    </Icon>
  );
};
