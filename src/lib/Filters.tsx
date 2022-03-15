import React, { Children, useEffect, useState } from 'react';

interface dropShadow {
  x?: number;
  y?: number;
  blur?: number;
  color?: string;
}

interface Props {
  children: any;
  grayScale?: number;
  blur?: number;
  brightness?: number;
  contrast?: number;
  invert?: number;
  sepia?: number;
  hueRotate?: number;
  saturate?: number;
  dropShadow?: dropShadow;
}

export default function Filters(props: Props) {
  const [filter, setFilter] = useState<any>(null);

  useEffect(() => {
    const {
      grayScale,
      blur,
      brightness,
      contrast,
      invert,
      sepia,
      hueRotate,
      saturate,
      dropShadow,
    } = props;
    const filt = [
      {
        filter: `grayscale(${grayScale})`,
        value: grayScale,
      },
      {
        filter: `blur(${blur}px)`,
        value: blur,
      },
      {
        filter: `brightness(${brightness})`,
        value: brightness,
      },
      {
        filter: `contrast(${contrast})`,
        value: contrast,
      },
      {
        filter: `invert(${invert})`,
        value: invert,
      },
      {
        filter: `sepia(${sepia})`,
        value: sepia,
      },
      {
        filter: `hue-rotate(${hueRotate}deg)`,
        value: hueRotate,
      },
      {
        filter: `saturate(${saturate})`,
        value: saturate,
      },
      {
        filter: `drop-shadow(${dropShadow?.x}px ${dropShadow?.y}px ${dropShadow?.blur}px ${dropShadow?.color})`,
        value: dropShadow,
      },
    ].filter((item) => item.value !== undefined);

    setFilter((prev: any) => {
      let size: number = filt.length - 1;
      const newFilter = filt
        .map((item, index) => {
          return React.createElement('div', {
            key: item.filter,
            style: {
              filter: item.filter,
            },
          });
        })
        .reverse();

      let res: Array<React.ReactHTMLElement<any>> = [];
      let previous: any = React.createElement('div');
      for (let i = 0; i <= size; i++) {
        if (res.length == 0) {
          res.push(React.cloneElement(newFilter[i], {}, props.children));
          previous = res[0];
        } else {
          res.push(React.cloneElement(newFilter[i], {}, previous));
          previous = res[i];
        }
      }
      console.log(previous);
      return previous;
    });
  }, []);

  return <React.Fragment>{filter}</React.Fragment>;
}
