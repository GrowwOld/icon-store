/* Ref: https://github.com/levrik/mdi-react/blob/master/scripts/generate-react.js */
import {
  ComponentType,
  SVGProps,
} from 'react';

interface ReactIconProps extends SVGProps<SVGSVGElement> {
  /**
   * size is a common prop for height and width
   * @example
   * size => 24 will set height => 24, width => 24
   *  */
  size?: number | string;
}

export type ReactIconComponentType = ComponentType<ReactIconProps>;
