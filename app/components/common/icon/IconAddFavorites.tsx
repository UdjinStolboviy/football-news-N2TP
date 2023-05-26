import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
export const IconAddFavorites = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#fff"
      d="m8 12.472 4.12 2.166-.787-4.587 3.333-3.25-4.606-.669L8 1.96 5.94 6.131l-4.606.67 3.333 3.249-.787 4.587L8 12.472Zm-3.596 3.162a1.125 1.125 0 0 1-1.633-1.186l.687-4.005-2.91-2.836a1.125 1.125 0 0 1 .624-1.919l4.02-.584 1.8-3.643a1.125 1.125 0 0 1 2.017 0l1.798 3.643 4.02.584a1.125 1.125 0 0 1 .624 1.92l-2.91 2.836.688 4.004a1.125 1.125 0 0 1-1.633 1.186L8 13.744l-3.596 1.89Z"
    />
  </Svg>
);
