import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const IconArrowRight = (props: SvgProps) => (
  <Svg width={14} height={11} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 5.09h12m0 0L8.333 1M13 5.09 8.333 9.183"
    />
  </Svg>
);
