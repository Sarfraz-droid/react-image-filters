import React from 'react';
import Filters from '../lib/Filters';

interface dropShadow {
  x?: number;
  y?: number;
  blur?: number;
  color?: string;
}

interface Props {
  grayscale?: number;
  blur?: number;
  brightness?: number;
  contrast?: number;
  invert?: number;
  sepia?: number;
  hueRotate?: number;
  saturate?: number;
  dropShadow?: dropShadow;
}
export default function FilterIcon(props: Props) {
  return (
    <React.Fragment>
      <Filters {...props}>
        <img src="https://picsum.photos/200" alt="test" />
      </Filters>
    </React.Fragment>
  );
}
