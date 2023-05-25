import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const IconArrowLeft = (props: SvgProps) => (
  <Svg width={14} height={11} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 5.09H1m0 0L5.667 1M1 5.09l4.667 4.092"
    />
  </Svg>
);
