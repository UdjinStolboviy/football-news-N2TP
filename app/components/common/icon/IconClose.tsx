import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
export const IconClose = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#fff"
        d="m8.94 8 2.867-2.86a.67.67 0 1 0-.947-.947L8 7.06 5.14 4.193a.67.67 0 1 0-.947.947L7.06 8l-2.867 2.86a.666.666 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L8 8.94l2.86 2.867a.665.665 0 0 0 .947 0 .667.667 0 0 0 0-.947L8.94 8Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
