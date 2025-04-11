import {
  Slider as AriaSlider,
  type SliderProps as AriaSliderProps,
  SliderTrack,
  SliderThumb,
} from 'react-aria-components';
import { FC } from 'react';
import styles from './Slider.module.scss';
import type { OmitStyleProps } from '@components/common/types';

type SliderProps = OmitStyleProps<AriaSliderProps>;

export const Slider: FC<SliderProps> = (props) => {
  return (
    <AriaSlider {...props} className={styles.slider} style={undefined}>
      <div className={styles.trackWrapper}>
        <SliderTrack className={styles.track}>
          {({ state }) => (
            <>
              <div
                className={styles.filledTrack}
                style={{ width: state.getThumbPercent(0) * 100 + '%' }}
              />
              <SliderThumb className={styles.thumb} />
            </>
          )}
        </SliderTrack>
      </div>
    </AriaSlider>
  );
};
