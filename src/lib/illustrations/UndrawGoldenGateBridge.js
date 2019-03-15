import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawGoldenGateBridge = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1197.6 853.87" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={331.45} y1={247.79} x2={331.45} y2={152.96} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={909} y1={362.49} x2={909} y2={247.4} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={909} y1={263.84} x2={909} y2={193.96} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={227} y1={362.49} x2={227} y2={247.4} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={227} y1={263.84} x2={227} y2={193.96} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={568.5} y1={472.96} x2={568.5} y2={444.96} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={732.11} y1={433.3} x2={732.11} y2={428.93} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={732.16} y1={437.84} x2={732.16} y2={433.48} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={732.21} y1={442.39} x2={732.21} y2={438.02} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={716.77} y1={454.5} x2={716.77} y2={445.29} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={747.35} y1={454.59} x2={747.35} y2={445.38} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={444.11} y1={433.3} x2={444.11} y2={428.93} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={444.16} y1={437.84} x2={444.16} y2={433.48} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={444.21} y1={442.39} x2={444.21} y2={438.02} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={428.77} y1={454.5} x2={428.77} y2={445.29} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={459.35} y1={454.59} x2={459.35} y2={445.38} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__q" x1={300.11} y1={433.3} x2={300.11} y2={428.93} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__r" x1={300.16} y1={437.84} x2={300.16} y2={433.48} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__s" x1={300.21} y1={442.39} x2={300.21} y2={438.02} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__t" x1={284.77} y1={454.5} x2={284.77} y2={445.29} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__u" x1={315.35} y1={454.59} x2={315.35} y2={445.38} xlinkHref="#prefix__a" />
      </defs>
      <path
        d="M671.64 140.78c-74.11-2.85-144.69-29.25-212.09-58.13s-134.16-60.9-206.48-76.2C206.55-3.4 153.34-4.79 115.86 22.74c-36.1 26.49-47.79 72.19-54.02 114.65-4.71 31.92-7.49 65.52 5.43 95.41 9 20.75 24.9 38.19 35.91 58.06 38.32 69.15 11.24 154.43-30.29 222-19.48 31.68-42.08 61.89-57.11 95.61s-22 72.35-8.83 106.75c13 34.09 44.1 59.7 77.75 77.71 68.35 36.58 148.89 47 227.42 53 173.85 13.12 348.63 7.44 523 1.75 64.5-2.11 129.3-4.24 192.76-15.25 35.24-6.12 71.62-15.82 97.21-39.24 32.48-29.74 40.53-80.09 18.76-117.38-36.5-62.54-137.44-78.07-163-145.19-14-37 .38-78.1 20.79-112.37 43.78-73.5 117.17-138 121-222 2.65-57.71-32.63-115.5-87.18-142.8-57.14-28.69-136.39-25.09-178.61 22.29-43.44 48.78-119.78 67.54-185.21 65.04z"
        fill={primaryColor}
        opacity={0.1}
      />
      <path
        d="M410.5 562.33s22-7.58 38 0 42 2.52 50-1.52 44 1.52 48 5.56 20 9.09 31 5 33-13.13 42-7.58"
        fill="#2196f3"
      />
      <path
        d="M410.5 562.33s22-7.58 38 0 42 2.52 50-1.52 44 1.52 48 5.56 20 9.09 31 5 33-13.13 42-7.58"
        opacity={0.2}
      />
      <path
        d="M331.5 502.93s50.42-15 87.09 0 96.25 5 114.59-3 100.84 3 110 11 45.84 18 71 10 75.63-26 96.26-15"
        fill="#2196f3"
      />
      <path
        d="M331.5 502.93s50.42-15 87.09 0 96.25 5 114.59-3 100.84 3 110 11 45.84 18 71 10 75.63-26 96.26-15"
        opacity={0.2}
      />
      <ellipse cx={331.45} cy={200.38} rx={48.05} ry={47.41} fill="url(#prefix__a)" />
      <circle cx={331.45} cy={200.38} r={41.88} fill="#ff9800" />
      <path fill="url(#prefix__b)" d="M899.04 247.4h19.92v115.09h-19.92z" />
      <path fill="url(#prefix__c)" d="M904.73 193.96h8.54v69.88h-8.54z" />
      <path fill="url(#prefix__d)" d="M217.04 247.4h19.92v115.09h-19.92z" />
      <path fill="url(#prefix__e)" d="M222.73 193.96h8.54v69.88h-8.54z" />
      <path fill="url(#prefix__f)" d="M125.5 444.96h886v28h-886z" />
      <path fill={primaryColor} d="M128.5 448.96h879v17h-879zM128.5 465.96h879v3h-879z" />
      <path opacity={0.2} d="M132 468.93h879v3H132z" />
      <path fill={primaryColor} d="M214 351.46h26v116h-26z" />
      <path fill={primaryColor} d="M220 250.46h14v112h-14z" />
      <path fill={primaryColor} d="M224 198.46h6v68h-6zM922 467.46h-26v-116h26z" />
      <path fill={primaryColor} d="M902 250.46h14v112h-14z" />
      <path fill={primaryColor} d="M906 198.46h6v68h-6zM557 391.93h6v68h-6z" />
      <path
        d="M1016.5 292.93s-61-4-107.5-86.5c-351 476-682 0-682 0-46.5 82.5-107.5 86.5-107.5 86.5"
        fill="none"
        stroke={primaryColor}
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="none"
        stroke={primaryColor}
        strokeMiterlimit={10}
        d="M140.39 287.67v161.29M171.82 270.61v178.35M532.53 414.75v34.21M604.5 418.02v30.94M459.85 395.07v53.89M390.35 359.79v89.17M319.14 306.46v142.5M677.24 399.96v49M751.55 362.46v86M821.83 306.46v142.5M281.48 270.61v178.35M856.8 270.61v178.35M995.61 287.67v161.29M964.18 270.61v178.35M355.35 335.82v112.64M426.83 380.31v68.65M490.3 405.46v43M643.53 410.07v38.89M713.25 384.46v64.5M783.45 339.63v108.83"
      />
      <path
        opacity={0.2}
        d="M220.5 349.96h13v2h-13zM224.5 248.96h5v2h-5zM902.5 348.96h13v2h-13zM906.5 248.96h5v2h-5z"
      />
      <path
        d="M330.5 599.33s9.05-7.58 15.63 0 17.28 2.52 20.58-1.52 18.1 1.52 19.75 5.56 8.23 9.09 12.75 5 13.58-13.13 17.29-7.58"
        fill="#2196f3"
      />
      <path
        d="M330.5 599.33s9.05-7.58 15.63 0 17.28 2.52 20.58-1.52 18.1 1.52 19.75 5.56 8.23 9.09 12.75 5 13.58-13.13 17.29-7.58"
        opacity={0.2}
      />
      <path
        d="M170.5 526.33s9-7.58 15.63 0 17.28 2.52 20.58-1.52 18.1 1.52 19.75 5.56 8.23 9.09 12.75 5 13.58-13.13 17.29-7.58"
        fill="#2196f3"
      />
      <path
        d="M170.5 526.33s9-7.58 15.63 0 17.28 2.52 20.58-1.52 18.1 1.52 19.75 5.56 8.23 9.09 12.75 5 13.58-13.13 17.29-7.58"
        opacity={0.2}
      />
      <path
        d="M76.5 613.33s9-7.58 15.63 0 17.28 2.52 20.58-1.52 18.1 1.52 19.75 5.56 8.23 9.09 12.75 5 13.58-13.13 17.29-7.58"
        fill="#2196f3"
      />
      <path
        d="M76.5 613.33s9-7.58 15.63 0 17.28 2.52 20.58-1.52 18.1 1.52 19.75 5.56 8.23 9.09 12.75 5 13.58-13.13 17.29-7.58"
        opacity={0.2}
      />
      <path
        d="M802.5 539.33s9.05-7.58 15.63 0 17.28 2.52 20.58-1.52 18.1 1.52 19.75 5.56 8.23 9.09 12.75 5 13.58-13.13 17.29-7.58"
        fill="#2196f3"
      />
      <path
        d="M802.5 539.33s9.05-7.58 15.63 0 17.28 2.52 20.58-1.52 18.1 1.52 19.75 5.56 8.23 9.09 12.75 5 13.58-13.13 17.29-7.58"
        opacity={0.2}
      />
      <path
        d="M947.5 668.33s9.05-7.58 15.63 0 17.28 2.52 20.58-1.52 18.1 1.52 19.75 5.56 8.23 9.09 12.75 5 13.58-13.13 17.29-7.58"
        fill="#2196f3"
      />
      <path
        d="M947.5 668.33s9.05-7.58 15.63 0 17.28 2.52 20.58-1.52 18.1 1.52 19.75 5.56 8.23 9.09 12.75 5 13.58-13.13 17.29-7.58"
        opacity={0.2}
      />
      <path
        d="M225.5 675.33s31.26-7.58 54 0 59.68 2.52 71.05-1.52 62.52 1.52 68.21 5.56 28.42 9.09 44.05 5 46.9-13.13 59.69-7.58M132.5 748.57s31.26-8.12 54 0 59.68 2.7 71.05-1.63 62.52 1.63 68.21 6 28.42 9.74 44.05 5.41 46.9-14.07 59.69-8.12M470.5 762.33s13.15-7.58 22.72 0 25.12 2.52 29.91-1.52 26.31 1.52 28.7 5.56 12 9.09 18.55 5 19.73-13.13 25.12-7.58M832.5 727.33s13.15-7.58 22.72 0 25.12 2.52 29.91-1.52 26.31 1.52 28.7 5.56 12 9.09 18.55 5 19.73-13.13 25.12-7.58M595.5 668.33s13.15-7.58 22.72 0 25.12 2.52 29.91-1.52 26.31 1.52 28.7 5.56 12 9.09 18.55 5 19.73-13.13 25.12-7.58M650.5 774.33s13.15-7.58 22.72 0 25.12 2.52 29.91-1.52 26.31 1.52 28.7 5.56 12 9.09 18.55 5 19.73-13.13 25.12-7.58M753.5 620.33s16.63-7.58 28.72 0 31.75 2.52 37.8-1.52 33.26 1.52 36.29 5.56 15.12 9.09 23.43 5 25-13.13 31.76-7.58"
        fill="#2196f3"
      />
      <path
        d="M753.5 620.33s16.63-7.58 28.72 0 31.75 2.52 37.8-1.52 33.26 1.52 36.29 5.56 15.12 9.09 23.43 5 25-13.13 31.76-7.58"
        opacity={0.2}
      />
      <path d="M1196.14 658.31a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3z" fill={primaryColor} />
      <rect x={716.22} y={430.32} width={2.3} height={14.39} rx={1.15} fill={primaryColor} />
      <rect x={745.64} y={430.32} width={2.3} height={13.82} rx={1.15} fill={primaryColor} />
      <rect x={712.42} y={428.93} width={39.39} height={4.37} rx={2.18} fill="url(#prefix__g)" />
      <rect x={712.47} y={433.48} width={39.39} height={4.37} rx={2.18} fill="url(#prefix__h)" />
      <rect x={712.52} y={438.02} width={39.39} height={4.37} rx={2.18} fill="url(#prefix__i)" />
      <rect x={712.82} y={429.17} width={38.58} height={3.45} rx={1.73} fill="#ccc" />
      <rect x={712.82} y={433.78} width={38.58} height={3.45} rx={1.73} fill="#ccc" />
      <rect x={712.82} y={438.38} width={38.58} height={3.45} rx={1.73} fill="#ccc" />
      <rect x={712.82} y={442.41} width={38.58} height={3.45} rx={1.73} fill={primaryColor} />
      <circle cx={717.37} cy={430.9} r={0.58} fill={primaryColor} />
      <circle cx={717.37} cy={435.5} r={0.58} fill={primaryColor} />
      <circle cx={717.37} cy={440.11} r={0.58} fill={primaryColor} />
      <circle cx={746.79} cy={440.11} r={0.58} fill={primaryColor} />
      <circle cx={746.79} cy={435.5} r={0.58} fill={primaryColor} />
      <circle cx={746.79} cy={430.9} r={0.58} fill={primaryColor} />
      <rect x={715.9} y={445.29} width={1.75} height={9.21} rx={0.87} fill="url(#prefix__j)" />
      <rect x={746.48} y={445.38} width={1.75} height={9.21} rx={0.87} fill="url(#prefix__k)" />
      <rect x={716.22} y={445.29} width={1.15} height={9.21} rx={0.58} fill={primaryColor} />
      <rect x={746.79} y={445.29} width={1.15} height={9.21} rx={0.58} fill={primaryColor} />
      <rect x={428.22} y={430.32} width={2.3} height={14.39} rx={1.15} fill={primaryColor} />
      <rect x={457.64} y={430.32} width={2.3} height={13.82} rx={1.15} fill={primaryColor} />
      <rect x={424.42} y={428.93} width={39.39} height={4.37} rx={2.18} fill="url(#prefix__l)" />
      <rect x={424.47} y={433.48} width={39.39} height={4.37} rx={2.18} fill="url(#prefix__m)" />
      <rect x={424.52} y={438.02} width={39.39} height={4.37} rx={2.18} fill="url(#prefix__n)" />
      <rect x={424.82} y={429.17} width={38.58} height={3.45} rx={1.73} fill="#ccc" />
      <rect x={424.82} y={433.78} width={38.58} height={3.45} rx={1.73} fill="#ccc" />
      <rect x={424.82} y={438.38} width={38.58} height={3.45} rx={1.73} fill="#ccc" />
      <rect x={424.82} y={442.41} width={38.58} height={3.45} rx={1.73} fill={primaryColor} />
      <circle cx={429.37} cy={430.9} r={0.58} fill={primaryColor} />
      <circle cx={429.37} cy={435.5} r={0.58} fill={primaryColor} />
      <circle cx={429.37} cy={440.11} r={0.58} fill={primaryColor} />
      <circle cx={458.79} cy={440.11} r={0.58} fill={primaryColor} />
      <circle cx={458.79} cy={435.5} r={0.58} fill={primaryColor} />
      <circle cx={458.79} cy={430.9} r={0.58} fill={primaryColor} />
      <rect x={427.9} y={445.29} width={1.75} height={9.21} rx={0.87} fill="url(#prefix__o)" />
      <rect x={458.48} y={445.38} width={1.75} height={9.21} rx={0.87} fill="url(#prefix__p)" />
      <rect x={428.22} y={445.29} width={1.15} height={9.21} rx={0.58} fill={primaryColor} />
      <rect x={458.79} y={445.29} width={1.15} height={9.21} rx={0.58} fill={primaryColor} />
      <rect x={284.22} y={430.32} width={2.3} height={14.39} rx={1.15} fill={primaryColor} />
      <rect x={313.64} y={430.32} width={2.3} height={13.82} rx={1.15} fill={primaryColor} />
      <rect x={280.42} y={428.93} width={39.39} height={4.37} rx={2.18} fill="url(#prefix__q)" />
      <rect x={280.47} y={433.48} width={39.39} height={4.37} rx={2.18} fill="url(#prefix__r)" />
      <rect x={280.52} y={438.02} width={39.39} height={4.37} rx={2.18} fill="url(#prefix__s)" />
      <rect x={280.82} y={429.17} width={38.58} height={3.45} rx={1.73} fill="#ccc" />
      <rect x={280.82} y={433.78} width={38.58} height={3.45} rx={1.73} fill="#ccc" />
      <rect x={280.82} y={438.38} width={38.58} height={3.45} rx={1.73} fill="#ccc" />
      <rect x={280.82} y={442.41} width={38.58} height={3.45} rx={1.73} fill={primaryColor} />
      <circle cx={285.37} cy={430.9} r={0.58} fill={primaryColor} />
      <circle cx={285.37} cy={435.5} r={0.58} fill={primaryColor} />
      <circle cx={285.37} cy={440.11} r={0.58} fill={primaryColor} />
      <circle cx={314.79} cy={440.11} r={0.58} fill={primaryColor} />
      <circle cx={314.79} cy={435.5} r={0.58} fill={primaryColor} />
      <circle cx={314.79} cy={430.9} r={0.58} fill={primaryColor} />
      <rect x={283.9} y={445.29} width={1.75} height={9.21} rx={0.87} fill="url(#prefix__t)" />
      <rect x={314.48} y={445.38} width={1.75} height={9.21} rx={0.87} fill="url(#prefix__u)" />
      <rect x={284.22} y={445.29} width={1.15} height={9.21} rx={0.58} fill={primaryColor} />
      <rect x={314.79} y={445.29} width={1.15} height={9.21} rx={0.58} fill={primaryColor} />
      <path
        d="M560.5 185.93h-3.56a2.07 2.07 0 0 0 .06-.5 2.51 2.51 0 0 0-2.5-2.5h-78a2.5 2.5 0 0 0 0 5h3.57a2.07 2.07 0 0 0-.05.5 2.5 2.5 0 0 0 2.5 2.5h-13a2.5 2.5 0 0 0 0 5h78a2.5 2.5 0 0 0 0-5h13a2.5 2.5 0 0 0 0-5zM957.5 145.93h-3.56a2.07 2.07 0 0 0 .06-.5 2.51 2.51 0 0 0-2.5-2.5h-78a2.5 2.5 0 1 0 0 5h3.57a2.07 2.07 0 0 0-.05.5 2.5 2.5 0 0 0 2.5 2.5h-13a2.5 2.5 0 1 0 0 5h78a2.5 2.5 0 0 0 0-5h13a2.5 2.5 0 0 0 0-5zM777.5 266.93h-3.56a2.07 2.07 0 0 0 .06-.5 2.51 2.51 0 0 0-2.5-2.5h-78a2.5 2.5 0 0 0 0 5h3.57a2.07 2.07 0 0 0-.05.5 2.5 2.5 0 0 0 2.5 2.5h-13a2.5 2.5 0 0 0 0 5h78a2.5 2.5 0 0 0 0-5h13a2.5 2.5 0 0 0 0-5z"
        fill={primaryColor}
        opacity={0.1}
      />
    </svg>
  );
};

UndrawGoldenGateBridge.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawGoldenGateBridge;
