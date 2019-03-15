import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawMorningEssentials = _props => {
  const props = Object.assign({}, _props);
  const primaryColor = props.primaryColor || defaultProps.primaryColor;
  const style = Object.assign(
    {
      height: props.height || defaultProps.height,
      width: '100%'
    },
    props.style
  );
  delete props.primaryColor;
  delete props.height;
  delete props.style;
  return (
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 876 420.43" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={550.47}
          y1={647.16}
          x2={553.43}
          y2={564.81}
          gradientTransform="matrix(1.56 .31 .31 1.21 -644.06 -526.45)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={467.14}
          y1={668.24}
          x2={470.1}
          y2={585.89}
          gradientTransform="matrix(-1.56 .31 -.31 1.21 1470.06 -526.45)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__c" x1={474.94} y1={369.76} x2={474.94} y2={26.66} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={474.94} y1={206.33} x2={474.94} y2={190.1} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={498} y1={199.21} x2={498} y2={92.21} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={491} y1={254.21} x2={491} y2={198.21} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__g"
          x1={503.5}
          y1={448.39}
          x2={503.5}
          y2={439.36}
          gradientTransform="rotate(120 535.535 416.798)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__h"
          x1={529.26}
          y1={508.7}
          x2={529.26}
          y2={499.66}
          gradientTransform="rotate(30 529.256 504.186)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__i"
          x1={524.46}
          y1={476.79}
          x2={524.46}
          y2={467.76}
          gradientTransform="rotate(30 941.444 8.821)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__j"
          x1={473.16}
          y1={436.29}
          x2={473.16}
          y2={427.25}
          gradientTransform="rotate(120 553.313 409.642)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__k"
          x1={456.93}
          y1={373.69}
          x2={456.93}
          y2={364.66}
          gradientTransform="rotate(120 563.118 392.983)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__l"
          x1={473.16}
          y1={311.1}
          x2={473.16}
          y2={302.06}
          gradientTransform="rotate(120 579.774 383.186)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__m"
          x1={519.52}
          y1={264.73}
          x2={519.52}
          y2={255.7}
          gradientTransform="rotate(120 599.368 383.185)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__n"
          x1={648.19}
          y1={265.89}
          x2={648.19}
          y2={256.86}
          gradientTransform="rotate(120 626.314 410.622)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__o"
          x1={693.39}
          y1={313.42}
          x2={693.39}
          y2={304.38}
          gradientTransform="rotate(120 625.82 430.218)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__p"
          x1={707.3}
          y1={373.69}
          x2={707.3}
          y2={364.66}
          gradientTransform="rotate(120 616.023 445.894)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__q"
          x1={693.39}
          y1={433.97}
          x2={693.39}
          y2={424.93}
          gradientTransform="rotate(120 600.347 455.69)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__r" x1={325.85} y1={657.2} x2={325.85} y2={412.76} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__s" x1={224.45} y1={595.42} x2={224.45} y2={436.93} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__t" x1={780.95} y1={420.43} x2={780.95} y2={74.52} gradientUnits="userSpaceOnUse">
          <stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        d="M474.94 76.5a38.25 38.25 0 1 1 38.25-38.29 38.29 38.29 0 0 1-38.25 38.29zm0-69.55a31.3 31.3 0 1 0 31.3 31.3 31.33 31.33 0 0 0-31.3-31.3z"
        fill={primaryColor}
      />
      <path fill="url(#prefix__a)" d="M364.02 414.19l50.04 2.74 35.34-61.22-47.18-27.25-38.2 85.73z" />
      <path fill={primaryColor} d="M366.49 412.36l45.08.47 34.19-59.22-41.93-24.21-37.34 82.96z" />
      <path fill="url(#prefix__b)" d="M585.86 414.19l-50.04 2.74-35.35-61.22 47.19-27.25 38.2 85.73z" />
      <path fill={primaryColor} d="M583.39 412.36l-45.08.47-34.2-59.22 41.94-24.21 37.34 82.96z" />
      <circle cx={474.94} cy={198.21} r={171.55} fill="url(#prefix__c)" />
      <circle cx={474.94} cy={198.21} r={166.92} fill={primaryColor} />
      <circle cx={474.94} cy={198.21} r={135.62} fill="#fff" />
      <circle cx={474.94} cy={198.21} r={8.11} fill="url(#prefix__d)" />
      <path fill={primaryColor} d="M520.15 93.89L476.1 198.21" />
      <path fill="url(#prefix__e)" d="M478 199.22l-5-1.68 45-105.33 5 2.36-45 104.65z" />
      <path fill="#2196f3" d="M474.483 197.514l44.046-104.322 3.206 1.353-44.046 104.323z" />
      <path fill={primaryColor} d="M476.1 199.37l28.98 53.32" />
      <path fill="url(#prefix__f)" d="M503 254.22l-29-54 4-2 30 53-5 3z" />
      <path fill="#2196f3" d="M474.562 200.248l3.057-1.662 28.978 53.325-3.058 1.662z" />
      <circle cx={601.28} cy={201.69} r={3.48} fill={primaryColor} />
      <circle cx={528.1} cy={375.52} r={4.52} transform="rotate(-60 239.437 395.922)" fill="url(#prefix__g)" />
      <circle cx={529.26} cy={504.18} r={4.52} transform="rotate(-30 .812 686.578)" fill="url(#prefix__h)" />
      <circle cx={348.59} cy={201.69} r={4.52} fill="url(#prefix__i)" />
      <circle cx={574.23} cy={329.16} r={4.52} transform="rotate(-30 45.786 511.568)" fill="url(#prefix__j)" />
      <circle cx={636.83} cy={312.93} r={4.52} transform="rotate(-30 108.374 495.339)" fill="url(#prefix__k)" />
      <circle cx={699.42} cy={329.16} r={4.52} transform="rotate(-30 170.965 511.57)" fill="url(#prefix__l)" />
      <circle cx={745.78} cy={375.52} r={4.52} transform="rotate(-30 217.341 557.936)" fill="url(#prefix__m)" />
      <circle cx={744.62} cy={504.19} r={4.52} transform="rotate(-30 216.19 686.588)" fill="url(#prefix__n)" />
      <circle cx={697.1} cy={549.39} r={4.52} transform="rotate(-30 168.657 731.792)" fill="url(#prefix__o)" />
      <circle cx={636.83} cy={563.3} r={4.52} transform="rotate(-30 108.39 745.703)" fill="url(#prefix__p)" />
      <circle cx={576.55} cy={549.39} r={4.52} transform="rotate(-30 48.098 731.788)" fill="url(#prefix__q)" />
      <circle cx={474.94} cy={73.03} r={3.48} fill="#69f0ae" />
      <circle cx={699.53} cy={329.58} r={3.48} transform="rotate(-60 410.874 349.986)" fill="#69f0ae" />
      <circle cx={745.35} cy={375.4} r={3.48} transform="rotate(-30 216.917 557.803)" fill="#69f0ae" />
      <circle cx={744.62} cy={504.18} r={3.48} transform="rotate(-60 455.952 524.588)" fill="#69f0ae" />
      <circle cx={697.1} cy={549.16} r={3.48} transform="rotate(-30 168.661 731.553)" fill="#69f0ae" />
      <circle cx={574.35} cy={329.58} r={3.48} transform="rotate(-30 45.896 511.978)" fill="#69f0ae" />
      <circle cx={528.52} cy={375.4} r={3.48} transform="matrix(.5 -.87 .87 .5 -222.85 405.63)" fill="#69f0ae" />
      <circle cx={763.17} cy={441.59} r={4.52} transform="rotate(-30 234.721 623.993)" fill="#69f0ae" />
      <circle cx={529.26} cy={504.18} r={3.48} transform="rotate(-30 .812 686.578)" fill="#69f0ae" />
      <circle cx={576.78} cy={549.16} r={3.48} transform="matrix(.5 -.87 .87 .5 -349.19 534.3)" fill="#69f0ae" />
      <circle cx={348.59} cy={201.69} r={3.48} fill="#69f0ae" />
      <circle cx={474.94} cy={323.4} r={3.48} fill="#69f0ae" />
      <path
        d="M346.27 210.96a135.64 135.64 0 0 1 253.28-67.48 135.64 135.64 0 1 0-242.27 121.05 135.16 135.16 0 0 1-11.01-53.57z"
        fill={primaryColor}
        opacity={0.2}
      />
      <circle cx={474.94} cy={198.21} r={5.8} fill="#69f0ae" />
      <path
        d="M396.17 657.2H255.54a34.44 34.44 0 0 1-34.44-34.44v-210h209.51v210a34.44 34.44 0 0 1-34.44 34.44z"
        transform="translate(-162 -239.79)"
        fill="url(#prefix__r)"
      />
      <path
        d="M224.45 595.42c-34.45 0-62.45-35.55-62.45-79.24s28-79.24 62.45-79.24 62.45 35.55 62.45 79.24-28.01 79.24-62.45 79.24zm0-144.07c-26.78 0-48.57 29.08-48.57 64.83S197.67 581 224.45 581 273 551.92 273 516.18s-21.76-64.84-48.55-64.84z"
        transform="translate(-162 -239.79)"
        fill="url(#prefix__s)"
      />
      <path
        d="M64.47 348.91c-33.33 0-60.44-33.14-60.44-73.87s27.11-73.83 60.44-73.83 60.44 33.14 60.44 73.87-27.12 73.83-60.44 73.83zm0-134.31c-25.92 0-47 27.11-47 60.44s21.09 60.44 47 60.44 47-27.11 47-60.44-21.08-60.44-47-60.44z"
        fill={primaryColor}
      />
      <path
        d="M63.75 175.66H264v199.25a34.44 34.44 0 0 1-34.44 34.44H98.2a34.44 34.44 0 0 1-34.44-34.44V175.66h-.01z"
        fill={primaryColor}
      />
      <path
        d="M248.17 31.11c2 5.36-.37 11.66-4.59 15.54s-9.91 5.74-15.55 6.82c-10.48 2-21.58 1.71-31.32 6.07s-17.62 15.93-13.05 25.57c5.2 11 20.54 10.66 32 14.62A37.39 37.39 0 0 1 239 123.92c1.46 4.87 1.87 10.26 0 15-3.11 7.74-11.41 11.88-19.19 14.88a216.66 216.66 0 0 1-92.84 13.89c-4.72-.33-10.65-1.94-11.22-6.63a127.47 127.47 0 0 0 51.2-17.85c2.94-1.81 5.92-3.85 7.57-6.89 3.37-6.19-.24-14.27-6-18.39s-12.93-5.37-19.81-6.89C131.91 107.28 86 96.21 79.1 77.77c-6.49-17.23 26.56-39.17 39.15-48.08 15.27-10.8 31.17-14.37 49.71-15.81 17.58-1.36 72.04-4.35 80.21 17.23z"
        opacity={0.2}
      />
      <rect x={685.9} y={74.52} width={190.1} height={345.91} rx={24.73} ry={24.73} fill="url(#prefix__t)" />
      <rect x={690.28} y={79.33} width={181.34} height={333.05} rx={24.73} ry={24.73} fill="#fff" />
      <path fill={primaryColor} d="M710.75 102.88h140.4v271.04h-140.4z" />
      <ellipse cx={780.95} cy={393.44} rx={11.19} ry={11.48} fill="#dbdbdb" />
      <ellipse cx={759.68} cy={90.25} rx={2.24} ry={2.3} fill="#dbdbdb" />
      <rect x={769.76} y={88.52} width={34.7} height={3.45} rx={1.49} ry={1.49} fill="#dbdbdb" />
      <path
        d="M76 375.77V176.52l-11-1v199.25a34.44 34.44 0 0 0 34.44 34.44h2.76A34.45 34.45 0 0 1 76 375.77zM718.75 109.88h132.4v-7h-140.4v271.04h8V109.88z"
        opacity={0.2}
      />
    </svg>
  );
};

UndrawMorningEssentials.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMorningEssentials;
