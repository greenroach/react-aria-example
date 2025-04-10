import {
  Slider as AriaSlider,
  type SliderProps as AriaSliderProps,
  SliderTrack,
  SliderThumb,
} from "react-aria-components";
import { FC } from "react";
import styles from "./Slider.module.scss";
import type { OmitStyleProps } from "@components/common/types";

type SliderProps = OmitStyleProps<AriaSliderProps>;

export const Slider: FC<SliderProps> = (props) => {
  return (
    <AriaSlider {...props} className={styles.slider} style={undefined}>
      <SliderTrack className={styles.track}>
        <SliderThumb className={styles.thumb} />
      </SliderTrack>
    </AriaSlider>
  );
};
