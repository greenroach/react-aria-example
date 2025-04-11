import { Icon } from '@adobe/react-spectrum';
import { FC } from 'react';
import { IconProps } from './types';

export const IconPlus: FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <svg viewBox="0 0 24 24">
        <g>
          <path d="M10.9995 12.9992H4.99988V10.9993H10.9995V4.99969H12.9994V10.9993H18.999V12.9992H12.9994V18.9989H10.9995V12.9992Z" />
        </g>
      </svg>
    </Icon>
  );
};
