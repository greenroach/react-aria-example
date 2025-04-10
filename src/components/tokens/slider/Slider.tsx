import {
  Slider as AriaSlider,
  SliderTrack,
  SliderThumb,
} from "react-aria-components";
import { FC } from "react";
import styles from "./Slider.module.scss";

interface SliderProps {
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export const Slider: FC<SliderProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
}) => {
  return (
    <AriaSlider
      value={value}
      onChange={onChange}
      minValue={min}
      maxValue={max}
      step={step}
      className={styles.slider}
    >
      <SliderTrack className={styles.track}>
        <SliderThumb className={styles.thumb} />
      </SliderTrack>
    </AriaSlider>
  );
};
