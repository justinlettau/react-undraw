import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawAutumn = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 825.88 759.45" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={512.48} y1={232.1} x2={512.48} y2={182.1} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={513.04} y1={284.1} x2={513.04} y2={234.1} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={513.59} y1={336.1} x2={513.59} y2={286.1} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={336.88} y1={474.75} x2={336.88} y2={369.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={686.88} y1={475.75} x2={686.88} y2={370.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={356.45} y1={328.29} x2={356.45} y2={227.37} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={356.5} y1={302.27} x2={356.5} y2={70.27} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={353.58} y1={590.37} x2={353.58} y2={325.69} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={303.11} y1={795.37} x2={303.11} y2={569.52} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={350.12} y1={795.37} x2={350.12} y2={569.52} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={797.27} y1={827.75} x2={797.27} y2={812.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={837.25} y1={772.46} x2={837.25} y2={757.09} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={773.99} y1={773.51} x2={773.99} y2={756.88} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={794.87} y1={793.4} x2={794.87} y2={779.52} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={714.4} y1={655.09} x2={714.4} y2={637.19} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={723.58} y1={732.13} x2={723.58} y2={713.94} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__q" x1={403.85} y1={750.78} x2={403.85} y2={731.52} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__r" x1={439.44} y1={829.73} x2={439.44} y2={810.43} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__s" x1={476.25} y1={777.76} x2={476.25} y2={759.51} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__t" x1={446.77} y1={787.23} x2={446.77} y2={758.87} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__u" x1={673.44} y1={661} x2={673.44} y2={609.37} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__v" x1={656.49} y1={795.34} x2={656.49} y2={586.17} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__w" x1={705.77} y1={801.37} x2={705.77} y2={586.17} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__x" x1={681.12} y1={395.2} x2={681.12} y2={263.37} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__y" x1={676.81} y1={610.3} x2={676.81} y2={365.37} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__z" x1={505.27} y1={550.85} x2={505.27} y2={502.52} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__A" x1={539.41} y1={551.57} x2={539.41} y2={528.36} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__B" x1={480.62} y1={574.4} x2={480.62} y2={554.83} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__C"
          x1={506.19}
          y1={568.26}
          x2={506.19}
          y2={548.96}
          gradientTransform="matrix(1.23 .1 .1 1.46 -174.46 -310.44)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__D" x1={492.95} y1={583.2} x2={492.95} y2={563.1} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__E" x1={514.76} y1={574.07} x2={514.76} y2={555.16} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__F" x1={588.81} y1={570.28} x2={588.81} y2={550.41} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__G" x1={516.76} y1={561.88} x2={516.76} y2={541.2} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__H" x1={539.26} y1={560.16} x2={539.26} y2={540.22} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__I" x1={525.67} y1={574.5} x2={525.67} y2={552.69} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__J" x1={549.07} y1={573.98} x2={549.07} y2={551.11} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__K" x1={512.86} y1={560.86} x2={512.86} y2={513.37} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__L" x1={588.72} y1={530.46} x2={588.72} y2={488.77} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__M" x1={546.05} y1={541.93} x2={546.05} y2={494.37} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__N" x1={927.35} y1={503.2} x2={927.35} y2={466.74} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__O" x1={954.52} y1={503.74} x2={954.52} y2={486.23} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__P" x1={907.72} y1={520.97} x2={907.72} y2={506.2} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__Q"
          x1={855.76}
          y1={508.68}
          x2={855.76}
          y2={494.09}
          gradientTransform="matrix(1.23 .1 .1 1.46 -174.46 -310.44)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__R" x1={917.54} y1={527.6} x2={917.54} y2={512.44} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__S" x1={934.9} y1={520.72} x2={934.9} y2={506.45} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__T" x1={993.85} y1={517.86} x2={993.85} y2={502.86} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__U" x1={936.49} y1={511.52} x2={936.49} y2={495.92} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__V" x1={954.4} y1={510.22} x2={954.4} y2={495.18} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__W" x1={943.59} y1={521.04} x2={943.59} y2={504.58} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__X" x1={962.21} y1={520.65} x2={962.21} y2={503.4} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__Y" x1={933.39} y1={510.75} x2={933.39} y2={474.93} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__Z" x1={993.77} y1={487.82} x2={993.77} y2={456.37} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aa" x1={959.81} y1={496.47} x2={959.81} y2={460.59} xlinkHref="#prefix__a" />
      </defs>
      <g data-name="<Group>">
        <rect
          data-name="<Rectangle>"
          x={330.54}
          y={197.99}
          width={26.36}
          height={164.74}
          rx={7.51}
          ry={7.51}
          fill={primaryColor}
        />
        <rect
          data-name="<Rectangle>"
          x={667.34}
          y={197.99}
          width={26.36}
          height={158.15}
          rx={7.51}
          ry={7.51}
          fill={primaryColor}
        />
        <rect
          x={287.09}
          y={182.1}
          width={450.79}
          height={50}
          rx={11.26}
          ry={11.26}
          fill="url(#prefix__a)"
          data-name="<Rectangle>"
        />
        <rect
          x={287.64}
          y={234.1}
          width={450.79}
          height={50}
          rx={11.26}
          ry={11.26}
          fill="url(#prefix__b)"
          data-name="<Rectangle>"
        />
        <rect
          x={288.2}
          y={286.1}
          width={450.79}
          height={50}
          rx={11.26}
          ry={11.26}
          fill="url(#prefix__c)"
          data-name="<Rectangle>"
        />
        <rect
          x={291.73}
          y={184.81}
          width={441.5}
          height={39.54}
          rx={11.26}
          ry={11.26}
          fill="#e0e0e0"
          data-name="<Rectangle>"
        />
        <rect
          x={291.73}
          y={237.53}
          width={441.5}
          height={39.54}
          rx={11.26}
          ry={11.26}
          fill="#e0e0e0"
          data-name="<Rectangle>"
        />
        <rect
          x={291.73}
          y={290.24}
          width={441.5}
          height={39.54}
          rx={11.26}
          ry={11.26}
          fill="#e0e0e0"
          data-name="<Rectangle>"
        />
        <rect
          data-name="<Rectangle>"
          x={291.73}
          y={336.37}
          width={441.5}
          height={39.54}
          rx={11.26}
          ry={11.26}
          fill={primaryColor}
        />
        <circle data-name="<Path>" cx={343.72} cy={204.58} r={6.59} fill={primaryColor} />
        <circle data-name="<Path>" cx={343.72} cy={257.3} r={6.59} fill={primaryColor} />
        <circle data-name="<Path>" cx={343.72} cy={310.01} r={6.59} fill={primaryColor} />
        <circle data-name="<Path>" cx={680.52} cy={310.01} r={6.59} fill={primaryColor} />
        <circle data-name="<Path>" cx={680.52} cy={257.3} r={6.59} fill={primaryColor} />
        <circle data-name="<Path>" cx={680.52} cy={204.58} r={6.59} fill={primaryColor} />
        <rect
          x={326.88}
          y={369.32}
          width={20}
          height={105.43}
          rx={3.75}
          ry={3.75}
          fill="url(#prefix__d)"
          data-name="<Rectangle>"
        />
        <rect
          x={676.88}
          y={370.32}
          width={20}
          height={105.43}
          rx={3.75}
          ry={3.75}
          fill="url(#prefix__e)"
          data-name="<Rectangle>"
        />
        <rect
          data-name="<Rectangle>"
          x={330.54}
          y={369.32}
          width={13.18}
          height={105.43}
          rx={3.75}
          ry={3.75}
          fill={primaryColor}
        />
        <rect
          data-name="<Rectangle>"
          x={680.52}
          y={369.32}
          width={13.18}
          height={105.43}
          rx={3.75}
          ry={3.75}
          fill={primaryColor}
        />
      </g>
      <g data-name="<Group>">
        <path
          d="M407.13 256.73a19.83 19.83 0 0 0-12.7-3.06l8.68-5.82-8.9-.61 4.19-4c-8.1 3.85-17.33.71-25.23-3.71s-15.48-10.17-24.1-11.76c-12.05-2.22-24.6 4.49-32.44 15.6s-11.24 26-10.83 40.51c.2 7.13 1.36 14.5 4.9 20.26 2.65 4.31 6.87 7.48 11.25 8 6.2 9.84 15.68 16.13 26.31 16.13 18.69 0 33.83-19.44 33.83-43.42a53.74 53.74 0 0 0-3.09-18.16c9.79-1.42 19.73-2.99 28.13-9.96z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__f)"
        />
        <path
          data-name="<Path>"
          d="M166.04 168.99l116.72 250.25s29.11 11.35 42.44-22.53"
          fill="none"
          stroke="#2d5676"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={1.71}
        />
        <ellipse data-name="<Path>" cx={258.95} cy={363.64} rx={12.87} ry={10.68} fill="#ca7070" />
        <path
          d="M320 79c-92.35 30.12-149.87 129.6-128.48 222.19 228.52 14 334.41-109.09 334.41-109.09C504.55 99.48 412.35 48.85 320 79z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__g)"
        />
        <path
          data-name="<Path>"
          d="M134.86 14.34C47.37 42.88-7.14 137.13 13.14 224.85l316.8-103.35C309.71 33.73 222.35-14.2 134.86 14.34z"
          fill={primaryColor}
        />
        <path
          data-name="<Path>"
          d="M13.14 224.85s113.8-81.61 316.8-103.35c0 0-100.3 116.63-316.8 103.35z"
          fill={primaryColor}
        />
        <path
          data-name="<Path>"
          d="M13.14 224.85s113.8-81.61 316.8-103.35c0 0-100.3 116.63-316.8 103.35z"
          opacity={0.2}
        />
        <path
          d="M392.62 421.12s-7-21.79-14.91-42.12c0-6.3-.62-11.74-2-15.82-9.61-28.24-26.2-31.18-26.2-31.18l-27.57-6.35S255.59 338 274.8 496.78l-7.86 93.59h104.4l-14-106s4.62-19.26 10.57-48c3.16 11.61 5.42 13.11 7.68 13.32 7.6.69 64.61-3.1 64.61-3.1v-25.47z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__h)"
        />
        <path
          data-name="<Path>"
          d="M166.37 285.92s16 90.83 23.48 91.5 63.32-3.05 63.32-3.05v-22.1h-50.58s-18.11-64.69-29-69.78-7.22 3.43-7.22 3.43z"
          fill="#263238"
        />
        <path
          d="M314.27 754.53h.89l-1-185h-34.22v225.84h45.36c3.77-3.94-4.24-15.48-8.24-25.06a36.64 36.64 0 0 1-2.79-15.78z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__i)"
        />
        <path
          d="M362.72 770.31a37.11 37.11 0 0 1-2.2-7.43V569.52H328.3v225.85H371c3.72-3.94-4.29-15.48-8.28-25.06z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__j)"
        />
        <path
          data-name="<Path>"
          fill="#00695c"
          d="M96.18 499.25h28.12v213.36H96.18zM143.04 499.25h28.12v213.36h-28.12z"
        />
        <ellipse data-name="<Path>" cx={150.07} cy={252.36} rx={12.83} ry={27.45} fill="#a86576" />
        <ellipse data-name="<Path>" cx={161.62} cy={214.24} rx={32.09} ry={41.18} fill="#ca7070" />
        <path
          data-name="<Path>"
          d="M137.24 255.42s-65 12.11-46.2 168.34l-7.7 92.09h98.4l-13.7-104.29s27.38-91.46 18-119.25-25.67-30.65-25.67-30.65zM96.18 681.79h28.22a38.15 38.15 0 0 0 2.6 15.58c3.72 9.45 11.17 20.84 7.66 24.73H96.18zM143.04 681.79h27.56a38.15 38.15 0 0 0 2.6 15.58c3.72 9.45 11.17 20.84 7.66 24.73h-37.82z"
          fill="#263238"
        />
        <path
          data-name="<Path>"
          d="M124.4 292.02s-25.4 94.89-10.27 119M96.17 432.32l20.53-18.3 7.7 12.2-23.1 15.25-5.13-9.15z"
          fill="#c62828"
        />
        <path
          data-name="<Path>"
          d="M155.94 216.96c-4.29 8.52-7 20-15 22.73-5.48 1.85-11.51-1.69-14.87-7.15s-4.46-12.45-4.65-19.22c-.38-13.74 2.84-27.89 10.27-38.42s19.34-16.9 30.77-14.79c8.17 1.51 15.38 7 22.86 11.15s16.24 7.17 23.92 3.52l-4 3.77 8.44.58-8.24 5.52a18.8 18.8 0 0 1 12 2.9c-19.5 16.18-47.6 1.72-61.5 29.41z"
          fill="#263238"
        />
      </g>
      <g data-name="<Group>">
        <path
          d="M799.68 813.51c8.87 3.33 13.66 12.46 13.66 12.46s-9.61 3.73-18.48.4-13.66-12.47-13.66-12.47 9.61-3.72 18.48-.39z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__k)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M612.2 744.37c7.31 2.74 11.25 10.26 11.25 10.26s-7.91 3.07-15.23.33-11.28-10.23-11.28-10.23 7.94-3.11 15.26-.36z"
          fill="#ffcc80"
        />
        <path
          d="M839.62 758.45c8.73 3.28 13.43 12.26 13.43 12.26s-9.45 3.67-18.18.39-13.43-12.26-13.43-12.26 9.45-3.66 18.18-.39z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__l)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M652.18 689.21c7.31 2.74 11.25 10.26 11.25 10.26s-7.91 3.07-15.23.33-11.26-10.26-11.26-10.26 7.93-3.07 15.24-.33z"
          fill="#00acc1"
        />
        <path
          d="M776.56 758.35c9.44 3.55 14.53 13.26 14.53 13.26s-10.22 4-19.67.42-14.53-13.26-14.53-13.26 10.23-3.96 19.67-.42z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__m)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M588.94 689.63c7.31 2.74 11.25 10.26 11.25 10.26s-7.91 3.07-15.23.33-11.25-10.26-11.25-10.26 7.9-3.07 15.23-.33z"
          fill="#b2ebf2"
        />
        <path
          d="M794 779.68c9.36-1.19 17.81 4.62 17.81 4.62s-6.72 7.75-16.08 8.94-17.81-4.62-17.81-4.62 6.73-7.75 16.08-8.94z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__n)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M607.1 710.58c7.75-1 14.74 3.82 14.74 3.82s-5.56 6.41-13.31 7.4-14.74-3.82-14.74-3.82 5.56-6.41 13.31-7.4z"
          fill="#8d6e63"
        />
      </g>
      <g data-name="<Group>">
        <path
          d="M711.05 652.2c-8.36-4.63-11.79-14.43-11.79-14.43s10.13-2.31 18.49 2.32 11.79 14.43 11.79 14.43-10.13 2.3-18.49-2.32z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__o)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M524.6 580.82c-6.83-3.78-9.64-11.79-9.64-11.79s8.28-1.89 15.11 1.89 9.64 11.81 9.64 11.81-8.27 1.87-15.11-1.91z"
          fill="#ffcc80"
        />
        <path
          data-name="<Path>"
          d="M471.13 648.92c-6.83-3.78-9.64-11.79-9.64-11.79s8.28-1.89 15.11 1.89 9.64 11.79 9.64 11.79-8.3 1.92-15.11-1.89z"
          fill="#00acc1"
        />
        <path
          d="M720.17 729.19c-8.5-4.7-12-14.67-12-14.67s10.3-2.34 18.8 2.36 12 14.67 12 14.67-10.3 2.34-18.8-2.36z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__p)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M533.78 657.73c-6.83-3.78-9.64-11.79-9.64-11.79s8.28-1.89 15.11 1.89 9.69 11.78 9.69 11.78-8.33 1.88-15.16-1.88z"
          fill="#b2ebf2"
        />
        <path
          data-name="<Path>"
          d="M518.84 634.34c-7.81-.15-14-5.93-14-5.93s6.44-5.53 14.25-5.38 14 5.93 14 5.93-6.44 5.53-14.25 5.38z"
          fill="#8d6e63"
        />
      </g>
      <g data-name="<Group>">
        <path
          d="M407.62 746.86c-7.89 5.21-18.06 3.73-18.06 3.73s2.62-9.94 10.51-15.15 18.06-3.73 18.06-3.73-2.62 9.94-10.51 15.15z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__q)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M219.94 675.6c-6.52 4.31-14.92 3.08-14.92 3.08s2.16-8.21 8.68-12.51 14.92-3.08 14.92-3.08-2.2 8.2-8.68 12.51z"
          fill="#ffcc80"
        />
        <path
          d="M443.22 825.8c-7.9 5.22-18.08 3.73-18.08 3.73s2.62-10 10.52-15.17 18.08-3.73 18.08-3.73-2.63 9.95-10.52 15.17z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__r)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M255.49 754.53c-6.52 4.31-14.92 3.08-14.92 3.08s2.16-8.21 8.68-12.51 14.92-3.08 14.92-3.08-2.16 8.2-8.68 12.51z"
          fill="#00acc1"
        />
        <path
          d="M479.82 774c-7.47 4.94-17.11 3.53-17.11 3.53s2.48-9.42 10-14.35 17.11-3.53 17.11-3.53-2.52 9.46-10 14.35z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__s)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M292.31 703.08c-6.52 4.31-14.92 3.08-14.92 3.08s2.16-8.21 8.68-12.51 14.87-3.08 14.87-3.08-2.12 8.16-8.63 12.51z"
          fill="#b2ebf2"
        />
        <path
          d="M452.44 776.15C448.16 784 439 787.23 439 787.23s-2.2-9.46 2.09-17.29 13.44-11.08 13.44-11.08 2.2 9.46-2.09 17.29z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__t)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M264.67 705.49c-3.73 6.85-11.73 9.69-11.73 9.69s-1.92-8.27 1.83-15.12 11.75-9.69 11.75-9.69 1.9 8.27-1.85 15.12z"
          fill="#8d6e63"
        />
      </g>
      <g data-name="<Group>">
        <path
          d="M617.94 610.37l11 40.25a31.73 31.73 0 0 0 47 0l53-41.25z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__u)"
          data-name="<Group>"
        />
        <path data-name="<Path>" d="M432.5 536.24l11.23 43.4a30.44 30.44 0 0 0 45 0l51.39-43.4z" fill="#ff5252" />
        <path
          d="M667.93 765.22V586.17h-35v209.17H679c4-3.65-4.52-14.53-8.77-23.4a30.8 30.8 0 0 1-2.3-6.72z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__v)"
        />
        <path
          d="M719.12 778a30.54 30.54 0 0 1-3-14.82h-.55v-177h-33v215.2h45.3c4.04-3.65-4.5-14.54-8.75-23.38z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__w)"
        />
        <path
          data-name="<Path>"
          fill="#00695c"
          d="M448.47 515.89h29.62v197.5h-29.62zM497.84 515.89h29.62v197.5h-29.62z"
        />
        <ellipse data-name="<Path>" cx={505.52} cy={294.7} rx={14.04} ry={25.28} fill="#f5b89c" />
        <path
          d="M741.58 292.19c-2.94-4.19-7.43-7-11.87-9.51a291.34 291.34 0 0 0-28.07-14.16c-9.53-4.18-20.93-7.76-29.93-2.53-9.86 5.72-12.34 19.57-21.83 25.88-7.4 4.93-18.75 5.19-22.4 13.3-4.7 10.46 8.88 22.45 4.59 33.08-1.76 4.36-6.06 7-9.61 10.12s-6.7 7.82-5.06 12.23c1.71 4.58 7.65 6.2 10 10.47 2 3.49 1 8-1.29 11.31s-5.7 5.57-9 7.79c12.09 12 18.53-.38 34.5-6.25 12.38-4.55 22.66-13.59 30.18-24.52a35.09 35.09 0 0 0 24.53 10.15c20.27 0 36.71-17.75 36.71-39.65a42.74 42.74 0 0 0-1-9.3c4.58-8.6 4.25-21.71-.45-28.41z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__x)"
        />
        <ellipse data-name="<Path>" cx={518.16} cy={259.59} rx={35.11} ry={37.92} fill="#f8c198" />
        <path
          d="M678.58 365.37S606 376.9 627 523.65l-8.59 86.65h109.83L713 512.19s30.56-86 20.05-112.08-28.65-28.83-28.65-28.83z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__y)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M491.48 297.51s-71.15 11.3-50.54 155.16l-8.43 84.95h107.65l-15-96.18s30-84.29 19.66-109.88-28.09-28.26-28.09-28.26zM448.47 683.73h29a30.72 30.72 0 0 0 2.85 14.55c4.07 8.71 12.22 19.4 8.38 23h-40.23zM497.84 689.73h30.15a30.72 30.72 0 0 0 2.85 14.55c4.07 8.71 12.22 19.4 8.38 23h-41.38z"
          fill="#d32f2f"
        />
        <path
          data-name="<Path>"
          d="M477.44 331.21s-27.79 87.37-11.23 109.52M533.61 328.4s-6.26 90.65-16.85 101.11M446.55 460.4l22.46-16.85 8.43 11.23-25.28 14.05-5.61-8.43zM515.92 432.32l7.6 8.42v8.43l-10.82-11.24 3.22-5.61z"
          fill="#ff5252"
        />
        <path
          data-name="<Path>"
          d="M544.58 257.8c-8.54 3-19-3.32-20.4-12.26-1.24 16.19-16.67 18.19-23.9 32.79s-19.17 27.31-34.44 32.92-21.43 17.43-33 6c3.19-2.12 6.45-4.31 8.64-7.45s3.1-7.48 1.23-10.82c-2.29-4.08-8-5.63-9.6-10-1.57-4.21 1.45-8.74 4.84-11.7s7.5-5.5 9.19-9.67c4.1-10.17-8.88-21.64-4.39-31.64 3.49-7.76 14.34-8 21.42-12.72 9.08-6 11.45-19.28 20.88-24.76 8.61-5 19.51-1.58 28.62 2.42a278.64 278.64 0 0 1 26.85 13.55c4.24 2.44 8.54 5.1 11.35 9.1 6.33 8.99 4.39 30.17-7.29 34.24z"
          fill="#263238"
        />
      </g>
      <g data-name="<Group>">
        <path
          d="M514.94 526.69c0 13.34-9.66 24.16-9.66 24.16s-9.66-10.82-9.66-24.16 9.66-24.16 9.66-24.16 9.66 10.81 9.66 24.16z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__z)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M326.75 456.42c0 11.78-8.53 21.34-8.53 21.34s-8.53-9.55-8.53-21.34 8.53-21.34 8.53-21.34 8.53 9.55 8.53 21.34z"
          fill="#00acc1"
        />
        <g data-name="<Group>">
          <path
            data-name="<Path>"
            d="M329.94 469.83c11.59-2.11 22.52 4.58 22.52 4.58s-7.87 10.11-19.46 12.22-22.52-4.58-22.52-4.58 7.89-10.11 19.46-12.22z"
            fill="#81c3bf"
          />
          <path
            d="M542.93 549.6c-13.31 4.86-27.62-.84-27.62-.84s7.27-13.58 20.58-18.44 27.62.84 27.62.84-7.27 13.58-20.58 18.44z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__A)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M355.28 477.73c-11.07 4-23-.7-23-.7s6-11.29 17.11-15.34 23 .7 23 .7-6.04 11.28-17.11 15.34z"
            fill="#b2ebf2"
          />
          <path
            data-name="<Path>"
            d="M343.73 495.29c-11.78-.12-21.25-8.75-21.25-8.75s9.64-8.44 21.42-8.31 21.25 8.75 21.25 8.75-9.64 8.44-21.42 8.31z"
            fill="#f9bc8b"
          />
          <path
            data-name="<Path>"
            d="M366.1 469.73c11.77.66 20.83 9.71 20.83 9.71s-10 8-21.78 7.33-20.83-9.71-20.83-9.71 10.02-8.01 21.78-7.33z"
            fill="#f2937c"
          />
        </g>
        <g data-name="<Group>">
          <path
            d="M478.92 555.29c12.88-2.34 25 5.09 25 5.09s-8.74 11.23-21.62 13.57-25-5.09-25-5.09 8.7-11.23 21.62-13.57z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__B)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M292.03 485.95c11.59-2.11 22.52 4.58 22.52 4.58s-7.87 10.1-19.46 12.2-22.52-4.58-22.52-4.58 7.87-10.09 19.46-12.2z"
            fill="#00acc1"
          />
          <path
            d="M505.87 568.09c-13.17 4.81-28.23-3.3-28.23-3.3s6.29-15.9 19.46-20.71 28.23 3.3 28.23 3.3-6.33 15.9-19.46 20.71z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__C)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M317.35 493.83c-11.07 4-23-.7-23-.7s6-11.29 17.11-15.34 23 .7 23 .7-6.04 11.3-17.11 15.34z"
            fill="#cfe8df"
          />
          <path
            d="M492.84 583.2c-13.87-.14-25-10.31-25-10.31S479.18 563 493 563.1s25 10.31 25 10.31-11.28 9.93-25.16 9.79z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__D)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M305.8 511.42c-11.78-.12-21.25-8.75-21.25-8.75s9.64-8.44 21.42-8.31 21.25 8.75 21.25 8.75-9.64 8.43-21.42 8.31z"
            fill="#ffcc80"
          />
          <path
            d="M515.28 555.2c13 .73 23 10.73 23 10.73s-11.06 8.82-24.06 8.1-23-10.73-23-10.73 11.07-8.82 24.06-8.1z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__E)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M328.17 485.83c11.77.66 20.83 9.71 20.83 9.71s-10 8-21.78 7.33-20.83-9.71-20.83-9.71 10.02-7.99 21.78-7.33z"
            fill="#b56e5d"
          />
        </g>
        <g data-name="<Group>">
          <path
            d="M587.32 569.94c-13.25-2.07-22.49-13.34-22.49-13.34s12.23-7.92 25.48-5.85 22.49 13.34 22.49 13.34-12.24 7.91-25.48 5.85z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__F)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M400.44 498.51c-11.64-1.82-19.77-11.72-19.77-11.72s10.75-7 22.4-5.14 19.77 11.72 19.77 11.72-10.76 6.95-22.4 5.14z"
            fill="#00acc1"
          />
          <path
            data-name="<Path>"
            d="M379.12 482.73c11.78-.18 21.47 8.2 21.47 8.2s-9.42 8.68-21.2 8.86-21.47-8.2-21.47-8.2 9.41-8.66 21.2-8.86z"
            fill="#b2ebf2"
          />
          <path
            data-name="<Path>"
            d="M395.8 469.93c11.09 4 17.19 15.25 17.19 15.25s-11.88 4.8-23 .82-17.15-15.27-17.15-15.27 11.87-4.78 22.96-.8z"
            fill="#ffcc80"
          />
          <path
            data-name="<Path>"
            d="M366.26 486.73c-10.9-4.49-16.48-16-16.48-16s12.08-4.25 23 .23 16.48 16 16.48 16-12.1 4.28-23-.23z"
            fill="#b56e5d"
          />
        </g>
        <g data-name="<Group>">
          <path
            d="M518.25 541.53c13.82 2.07 23.53 13.75 23.53 13.75s-12.7 8.33-26.52 6.27-23.53-13.75-23.53-13.75 12.7-8.33 26.52-6.27z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__G)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M330.94 472.83c11.65 1.74 19.84 11.59 19.84 11.59s-10.71 7-22.36 5.29-19.84-11.59-19.84-11.59 10.72-7.03 22.36-5.29z"
            fill="#b2ebf2"
          />
          <path
            d="M539.47 560.15c-13.76.3-25.13-9.42-25.13-9.42s10.93-10.21 24.69-10.51 25.13 9.42 25.13 9.42-10.93 10.21-24.69 10.51z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__H)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M352.38 488.45c-11.78.26-21.52-8.07-21.52-8.07s9.36-8.74 21.14-9 21.52 8.07 21.52 8.07-9.36 8.74-21.14 9z"
            fill="#b2ebf2"
          />
          <path
            d="M522.44 572.77c-12.67-4.46-19.7-17.25-19.7-17.25s13.5-5.56 26.16-1.1 19.7 17.25 19.7 17.25-13.49 5.56-26.16 1.1z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__I)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M335.78 501.37c-11.11-3.91-17.29-15.14-17.29-15.14s11.84-4.88 23-1 17.29 15.14 17.29 15.14-11.84 4.92-23 1z"
            fill="#ffcc80"
          />
          <path
            d="M552.77 553.41c12.62 5.1 19.15 18.38 19.15 18.38s-13.93 5-26.54-.1-19.15-18.38-19.15-18.38 13.92-5 26.54.1z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__J)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M365.21 484.36c10.92 4.42 16.58 15.91 16.58 15.91s-12.05 4.33-23-.08-16.58-15.91-16.58-15.91 12.07-4.33 23 .08z"
            fill="#b56e5d"
          />
        </g>
        <g data-name="<Group>">
          <path
            d="M522.36 537.12c0 13.11-9.5 23.75-9.5 23.75s-9.5-10.63-9.5-23.75 9.5-23.75 9.5-23.75 9.5 10.63 9.5 23.75z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__K)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M334.33 466.85c0 11.78-8.53 21.34-8.53 21.34s-8.53-9.55-8.53-21.34 8.53-21.34 8.53-21.34 8.53 9.55 8.53 21.34z"
            fill="#ffcc80"
          />
          <path
            d="M597.06 505.21c6.08 11.51 2.67 25.25 2.67 25.25s-13.27-4.93-19.35-16.44-2.67-25.25-2.67-25.25 13.29 4.93 19.35 16.44z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__L)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M409.21 435.36c5.5 10.42 2.42 22.85 2.42 22.85s-12-4.46-17.51-14.88-2.42-22.85-2.42-22.85 12.01 4.46 17.51 14.88z"
            fill="#b56e5d"
          />
        </g>
        <path
          d="M555.56 518.15c0 13.13-9.51 23.78-9.51 23.78s-9.51-10.65-9.51-23.78 9.46-23.78 9.46-23.78 9.56 10.63 9.56 23.78z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__M)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M367.52 447.88c0 11.78-8.53 21.34-8.53 21.34s-8.53-9.55-8.53-21.34 8.48-21.33 8.48-21.33 8.58 9.55 8.58 21.33z"
          fill="#b2ebf2"
        />
      </g>
      <g data-name="<Group>">
        <path
          d="M935 485c0 10.07-7.69 18.23-7.69 18.23s-7.66-8.23-7.66-18.23 7.69-18.23 7.69-18.23S935 474.9 935 485z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__N)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M747.08 414.73c0 8.89-6.79 16.09-6.79 16.09s-6.79-7.21-6.79-16.09 6.79-16.09 6.79-16.09 6.79 7.17 6.79 16.09z"
          fill="#00acc1"
        />
        <g data-name="<Group>">
          <path
            data-name="<Path>"
            d="M749.64 424.82c9.23-1.59 17.93 3.45 17.93 3.45s-6.27 7.62-15.49 9.21-17.93-3.45-17.93-3.45 6.26-7.62 15.49-9.21z"
            fill="#81c3bf"
          />
          <path
            d="M957.32 502.26c-10.6 3.67-22-.63-22-.63s5.79-10.25 16.38-13.91 22 .63 22 .63-5.78 10.24-16.38 13.91z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__O)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M769.79 430.73c-8.81 3-18.28-.53-18.28-.53s4.81-8.52 13.62-11.57 18.28.53 18.28.53-4.81 8.57-13.62 11.57z"
            fill="#b2ebf2"
          />
          <path
            data-name="<Path>"
            d="M760.6 444.03c-9.38-.09-16.91-6.6-16.91-6.6s7.67-6.36 17.05-6.27 16.91 6.6 16.91 6.6-7.71 6.36-17.05 6.27z"
            fill="#f9bc8b"
          />
          <path
            data-name="<Path>"
            d="M778.41 424.73c9.37.5 16.58 7.33 16.58 7.33s-8 6-17.34 5.53-16.58-7.33-16.58-7.33 7.97-6.03 17.34-5.53z"
            fill="#f2937c"
          />
        </g>
        <g data-name="<Group>">
          <path
            d="M906.37 506.55c10.25-1.77 19.91 3.84 19.91 3.84s-7 8.47-17.21 10.24-19.91-3.84-19.91-3.84 6.96-8.48 17.21-10.24z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__P)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M719.45 436.98c9.23-1.59 17.93 3.45 17.93 3.45s-6.27 7.62-15.49 9.21-17.95-3.45-17.95-3.45 6.28-7.62 15.51-9.21z"
            fill="#00acc1"
          />
          <path
            d="M927.82 516.2c-10.48 3.63-22.47-2.49-22.47-2.49s5-12 15.49-15.62 22.47 2.49 22.47 2.49-5.01 11.99-15.49 15.62z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__Q)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M739.6 442.92c-8.81 3-18.28-.53-18.28-.53s4.81-8.52 13.62-11.57 18.28.53 18.28.53-4.81 8.52-13.62 11.57z"
            fill="#cfe8df"
          />
          <path
            d="M917.45 527.6c-11-.11-19.91-7.77-19.91-7.77s9-7.49 20.08-7.38 19.91 7.77 19.91 7.77-9.03 7.49-20.08 7.38z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__R)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M730.41 456.19c-9.38-.09-16.91-6.6-16.91-6.6s7.67-6.36 17.05-6.27 16.91 6.6 16.91 6.6-7.68 6.36-17.05 6.27z"
            fill="#ffcc80"
          />
          <path
            d="M935.32 506.48c10.35.55 18.31 8.09 18.31 8.09s-8.81 6.66-19.15 6.11-18.31-8.09-18.31-8.09 8.83-6.66 19.15-6.11z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__S)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M748.22 436.89c9.37.5 16.58 7.33 16.58 7.33s-8 6-17.34 5.53-16.58-7.33-16.58-7.33 7.97-6.03 17.34-5.53z"
            fill="#b56e5d"
          />
        </g>
        <g data-name="<Group>">
          <path
            d="M992.66 517.6c-10.54-1.56-17.9-10.06-17.9-10.06s9.74-6 20.28-4.41 17.9 10.06 17.9 10.06-9.74 5.97-20.28 4.41z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__T)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M805.74 446.45c-9.27-1.37-15.73-8.84-15.73-8.84s8.56-5.25 17.83-3.88 15.73 8.84 15.73 8.84-8.56 5.25-17.83 3.88z"
            fill="#00acc1"
          />
          <path
            data-name="<Path>"
            d="M788.77 434.56c9.38-.14 17.09 6.19 17.09 6.19s-7.5 6.55-16.88 6.69-17.09-6.19-17.09-6.19 7.5-6.52 16.88-6.69z"
            fill="#b2ebf2"
          />
          <path
            data-name="<Path>"
            d="M802.05 424.9c8.83 3 13.69 11.5 13.69 11.5s-9.45 3.62-18.28.62-13.69-11.5-13.69-11.5 9.45-3.63 18.28-.62z"
            fill="#ffcc80"
          />
          <path
            data-name="<Path>"
            d="M778.53 437.58c-8.67-3.38-13.12-12.08-13.12-12.08s9.62-3.21 18.29.17 13.13 12.06 13.13 12.06-9.62 3.24-18.3-.15z"
            fill="#b56e5d"
          />
        </g>
        <g data-name="<Group>">
          <path
            d="M937.68 496.17c11 1.56 18.73 10.37 18.73 10.37s-10.11 6.29-21.11 4.73-18.73-10.37-18.73-10.37 10.11-6.29 21.11-4.73z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__U)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M750.43 427.08c9.28 1.31 15.79 8.75 15.79 8.75s-8.52 5.3-17.8 4-15.79-8.75-15.79-8.75 8.53-5.35 17.8-4z"
            fill="#b2ebf2"
          />
          <path
            d="M954.57 510.21c-10.95.23-20-7.1-20-7.1s8.7-7.7 19.65-7.93 20 7.1 20 7.1-8.7 7.72-19.65 7.93z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__V)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M767.49 438.87c-9.38.19-17.13-6.08-17.13-6.08s7.45-6.59 16.83-6.79 17.13 6.08 17.13 6.08-7.46 6.59-16.83 6.79z"
            fill="#b2ebf2"
          />
          <path
            d="M941 519.73c-10.08-3.36-15.68-13-15.68-13s10.74-4.19 20.83-.83 15.68 13 15.68 13-10.73 4.2-20.83.83z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__W)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M754.27 448.61c-8.85-3-13.76-11.42-13.76-11.42s9.43-3.68 18.28-.73 13.76 11.42 13.76 11.42-9.43 3.69-18.28.73z"
            fill="#ffcc80"
          />
          <path
            d="M965.15 505.13C975.2 509 980.4 519 980.4 519s-11.08 3.77-21.13-.07S944 505.05 944 505.05s11.11-3.77 21.15.08z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__X)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M777.7 435.78c8.7 3.33 13.2 12 13.2 12s-9.6 3.27-18.29-.06-13.2-12-13.2-12 9.59-3.27 18.29.06z"
            fill="#b56e5d"
          />
        </g>
        <g data-name="<Group>">
          <path
            d="M940.95 492.84c0 9.89-7.56 17.91-7.56 17.91s-7.56-8-7.56-17.91 7.56-17.91 7.56-17.91 7.56 8.02 7.56 17.91z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__Y)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M753.12 422.57c0 8.89-6.79 16.09-6.79 16.09s-6.79-7.21-6.79-16.09 6.79-16.09 6.79-16.09 6.79 7.25 6.79 16.09z"
            fill="#ffcc80"
          />
          <path
            d="M1000.41 468.77c4.84 8.68 2.13 19 2.13 19s-10.56-3.72-15.4-12.4-2.13-19-2.13-19 10.56 3.72 15.4 12.4z"
            transform="translate(-187.06 -70.27)"
            fill="url(#prefix__Z)"
            data-name="<Group>"
          />
          <path
            data-name="<Path>"
            d="M812.72 398.82c4.38 7.86 1.92 17.24 1.92 17.24s-9.56-3.37-13.94-11.22-1.92-17.24-1.92-17.24 9.56 3.36 13.94 11.22z"
            fill="#b56e5d"
          />
        </g>
        <path
          d="M967.38 478.53c0 9.91-7.57 17.94-7.57 17.94s-7.57-8-7.57-17.94 7.57-17.94 7.57-17.94 7.57 8.04 7.57 17.94z"
          transform="translate(-187.06 -70.27)"
          fill="url(#prefix__aa)"
          data-name="<Group>"
        />
        <path
          data-name="<Path>"
          d="M779.54 408.26c0 8.89-6.79 16.09-6.79 16.09s-6.81-7.2-6.81-16.09 6.79-16.09 6.79-16.09 6.81 7.2 6.81 16.09z"
          fill="#b2ebf2"
        />
      </g>
    </svg>
  );
};

UndrawAutumn.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawAutumn;
