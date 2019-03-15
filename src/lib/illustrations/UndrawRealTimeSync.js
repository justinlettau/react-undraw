import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawRealTimeSync = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 916.48 762" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={300.81}
          y1={541.67}
          x2={300.81}
          y2={274.21}
          gradientTransform="matrix(1 0 0 1.02 -.05 -12.24)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={158.98} y1={409.32} x2={158.98} y2={343.76} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={300.75} y1={478.32} x2={300.75} y2={421.45} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__d"
          x1={776.75}
          y1={675.12}
          x2={776.75}
          y2={654.79}
          gradientTransform="translate(.31 -.31)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__e"
          x1={776.86}
          y1={561.94}
          x2={776.86}
          y2={194.31}
          gradientTransform="matrix(1 0 0 1.04 -.63 -19.87)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__f" x1={797.19} y1={255.67} x2={797.19} y2={163.33} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={912.19} y1={283.02} x2={963.04} y2={283.02} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={797.7} y1={366.44} x2={797.7} y2={274.1} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={939.46} y1={435.64} x2={939.46} y2={351.13} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={36.3} y1={72.59} x2={36.3} y2={0} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__k"
          x1={444.71}
          y1={829.36}
          x2={444.71}
          y2={406.22}
          gradientTransform="matrix(1 0 0 1.02 .24 -11.29)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__l"
          x1={445.2}
          y1={793.45}
          x2={445.2}
          y2={438.54}
          gradientTransform="matrix(1 0 0 1.02 .24 -11.29)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.09} />
          <stop offset={0.55} stopOpacity={0.07} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__m" x1={346.25} y1={674.14} x2={346.25} y2={581.8} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={462.59} y1={701.49} x2={513.44} y2={701.49} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={256.25} y1={673.14} x2={256.25} y2={580.8} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={372.59} y1={700.49} x2={423.44} y2={700.49} xlinkHref="#prefix__a" />
      </defs>
      <rect
        x={226.09}
        y={266.58}
        width={149.32}
        height={271.94}
        rx={10}
        ry={10}
        transform="translate(-142.32 -68.58)"
        fill="url(#prefix__a)"
      />
      <rect
        x={229.53}
        y={271.05}
        width={142.44}
        height={261.15}
        rx={10}
        ry={10}
        transform="translate(-142.32 -68.58)"
        fill="#fff"
      />
      <path fill="#e6e6e6" d="M103.694 220.597l110.28-.154.297 212.52-110.28.154z" />
      <ellipse
        cx={300.9}
        cy={517.35}
        rx={8.79}
        ry={9.01}
        transform="rotate(-.08 -49188.039 102009.477)"
        fill="#dbdbdb"
      />
      <ellipse
        cx={283.88}
        cy={279.63}
        rx={1.76}
        ry={1.8}
        transform="rotate(-.08 -49209.36 101773.117)"
        fill="#dbdbdb"
      />
      <rect
        x={291.79}
        y={278.25}
        width={27.26}
        height={2.7}
        rx={1}
        ry={1}
        transform="rotate(-.08 -49187.874 101773.132)"
        fill="#dbdbdb"
      />
      <path fill="url(#prefix__b)" d="M127.76 343.76h62.44v65.56h-62.44z" />
      <path fill={primaryColor} d="M130.48 346.61h57.01v59.86h-57.01z" />
      <path
        d="M305.06 442.74v-1.13h3v-5.79a9.27 9.27 0 1 0-15.75-.43v6.22h3.31v1.33a19.22 19.22 0 0 0-14.11 18.52v16.86H320v-16.86a19.21 19.21 0 0 0-14.94-18.72z"
        transform="translate(-141.76 -69)"
        fill="url(#prefix__c)"
        opacity={0.5}
      />
      <path fill="#f55f44" d="M151.38 362h14.25v11.4h-14.25z" />
      <path
        d="M154.46 374h9a12.86 12.86 0 0 1 12.86 12.86v19.78H141.6v-19.8A12.86 12.86 0 0 1 154.46 374z"
        fill="#fdd835"
      />
      <rect x={154.37} y={368.3} width={8.51} height={10.64} rx={3.15} ry={3.15} fill="#fda57d" />
      <path fill="#fda57d" d="M157 378.62l1.59 2.32 1.67-2.32H157z" />
      <path d="M148.14 387s-1.69 16.82-.6 17.91M169.04 387s1.69 16.82.6 17.91" opacity={0.1} />
      <path
        d="M158.63 373.47a7.06 7.06 0 0 0 4.2-1.38 4.26 4.26 0 0 0-4.2-3.59 4.26 4.26 0 0 0-4.2 3.59 7.06 7.06 0 0 0 4.2 1.38z"
        opacity={0.05}
      />
      <circle cx={158.63} cy={363.55} r={8.39} fill="#f55f44" />
      <circle cx={158.63} cy={366.17} r={7.09} fill="#fda57d" />
      <ellipse cx={151.52} cy={365.71} rx={0.5} ry={0.9} fill="#fda57d" />
      <ellipse cx={165.75} cy={365.71} rx={0.5} ry={0.9} fill="#fda57d" />
      <path
        fill="#fff"
        d="M110.86 234.26h96.24v4.18h-96.24zM110.86 242.62h96.24v4.18h-96.24zM110.86 250.99h54.4v4.18h-54.4zM110.86 259.36h79.5v4.18h-79.5zM110.86 267.73h66.95v4.18h-66.95zM110.86 276.1h96.24v4.18h-96.24zM115.05 288.65h83.69v33.47h-83.69z"
      />
      <path
        d="M705.47 457.13s14 96.19 96.19 128.14l-166.3.23-166.3.23c82.06-32.18 95.85-128.41 95.85-128.41z"
        fill="#e0e0e0"
      />
      <path
        transform="rotate(-.08 -48722.61 102153.041)"
        fill="url(#prefix__d)"
        d="M609.17 654.5h335.74v20.32H609.17z"
      />
      <path fill="#f5f5f5" d="M469.083 585.716l332.6-.464.022 15.68-332.6.464z" />
      <path
        d="M1047 180l-540.9.75a11.1 11.1 0 0 0-10.83 11.36l.42 315.58v10.51c0 24 18.63 43.39 41.55 43.36l479.61-.66c22.91 0 41.46-19.49 41.43-43.47v-10.5l-.42-315.58A11.1 11.1 0 0 0 1047 180z"
        transform="translate(-141.76 -69)"
        fill="url(#prefix__e)"
      />
      <path
        d="M370.76 121.57h527.49A10.75 10.75 0 0 1 909 132.32v300.32H360V132.32a10.75 10.75 0 0 1 10.76-10.75z"
        fill="#fff"
      />
      <path
        d="M871.41 482.56l-472.36.65a38.32 38.32 0 0 1-38.37-38.27v-13l549-.76v13a38.32 38.32 0 0 1-38.27 38.38z"
        fill="#f5f5f5"
      />
      <path fill="#e6e6e6" d="M387.12 146.77h496.81v251.12H387.12z" />
      <path fill="url(#prefix__f)" d="M753.22 163.33h87.94v92.34h-87.94z" />
      <path fill={primaryColor} d="M757.04 167.35h80.3v84.31h-80.3z" />
      <path
        d="M944.44 273.84l-1-.36-.06.09h-.06v-2.72a6.27 6.27 0 0 0-.08-1 10.41 10.41 0 0 0 3.57-4.71 12.27 12.27 0 1 0-19.43 0 10.41 10.41 0 0 0 3.57 4.71 6.27 6.27 0 0 0-.08 1v3a25.44 25.44 0 0 0-18.67 24.52v22.31H963v-22.34a25.44 25.44 0 0 0-18.56-24.5z"
        transform="translate(-141.76 -69)"
        fill="url(#prefix__g)"
        opacity={0.5}
      />
      <path
        d="M794.3 204.29h3.1a22.93 22.93 0 0 1 22.93 22.93v23h-49v-23a22.93 22.93 0 0 1 22.97-22.93z"
        fill="#514abf"
      />
      <rect x={789.36} y={196.3} width={11.99} height={14.99} rx={5.62} ry={5.62} fill="#fda57d" />
      <path opacity={0.05} d="M785.2 206.94l4.02 8.62 3.99-3.99-3.99-6.13-4.02 1.5z" />
      <path d="M785.34 206.52l4 8.62 4-4-4-6.12-1.84.56a4.61 4.61 0 0 0-.53.2z" fill="#fff" />
      <path opacity={0.05} d="M805.52 206.52l-4.03 9.04-4-3.99 4.11-6.45 3.92 1.4z" />
      <path d="M805.38 206.1l-4 9-4-4 4.11-6.45.75.22a20 20 0 0 1 2.39.85z" fill="#fff" />
      <path fill="#fda57d" d="M793.05 210.83l2.24 3.26 2.36-3.26h-4.6z" />
      <path d="M780.57 222.64s-2.38 23.69-.84 25.23M810.01 222.64s2.38 23.69.84 25.23" opacity={0.1} />
      <path
        d="M795.35 203.57a10 10 0 0 0 5.92-1.94 6 6 0 0 0-5.92-5.05 6 6 0 0 0-5.92 5.05 10 10 0 0 0 5.92 1.94z"
        opacity={0.05}
      />
      <circle cx={795.35} cy={189.6} r={11.81} />
      <circle cx={795.35} cy={193.3} r={9.99} fill="#fda57d" />
      <path d="M787.3 183.4l2.52 3.08s11.07 1 12.33-1.54-7.29-4.35-7.29-4.35z" opacity={0.05} />
      <path d="M787.3 183.12l2.52 3.08s11.07 1 12.33-1.54-7.29-4.35-7.29-4.35z" />
      <ellipse cx={785.34} cy={192.65} rx={0.7} ry={1.26} fill="#fda57d" />
      <ellipse cx={805.38} cy={192.65} rx={0.7} ry={1.26} fill="#fda57d" />
      <path fill="url(#prefix__h)" d="M753.73 274.1h87.94v92.34h-87.94z" />
      <path fill={primaryColor} d="M757.55 278.11h80.3v84.31h-80.3z" />
      <path
        d="M945.53 385.1V382v-.46a11.07 11.07 0 0 0 3.74-5 13.05 13.05 0 0 0-5.45-20.07 4.44 4.44 0 1 0-8.73-.37 13.05 13.05 0 0 0-6.49 20.45 11.07 11.07 0 0 0 3.74 5V385.29a24.48 24.48 0 0 0-19.87 24v26.31h54.1v-26.27a24.48 24.48 0 0 0-21.04-24.23z"
        transform="translate(-141.76 -69)"
        fill="url(#prefix__i)"
        opacity={0.5}
      />
      <path
        d="M796.15 316.66h3.1a22.93 22.93 0 0 1 22.93 22.93v23h-49v-23a22.93 22.93 0 0 1 22.93-22.93z"
        fill="#fff"
      />
      <rect x={791.2} y={308.67} width={11.99} height={14.99} rx={5.62} ry={5.62} fill="#fdb797" />
      <path fill="#fdb797" d="M794.9 323.2l2.24 3.26 2.35-3.26h-4.59z" />
      <path d="M782.42 335s-2.38 23.69-.84 25.23M811.86 335s2.38 23.69.84 25.23" opacity={0.1} />
      <path
        d="M797.24 315.94a10 10 0 0 0 5.92-1.94 6 6 0 0 0-5.92-5.05 6 6 0 0 0-6 5.05 10 10 0 0 0 6 1.94z"
        opacity={0.05}
      />
      <circle cx={797.2} cy={301.97} r={11.81} fill="#fdd835" />
      <circle cx={797.2} cy={305.67} r={9.99} fill="#fdb797" />
      <ellipse cx={787.18} cy={305.02} rx={0.7} ry={1.26} fill="#fdb797" />
      <ellipse cx={807.23} cy={305.02} rx={0.7} ry={1.26} fill="#fdb797" />
      <circle cx={797.7} cy={290.16} r={4.01} fill="#fdd835" />
      <path d="M789.67 294.17s4 8 16.06 4l-4-4z" fill="#fdd835" />
      <path
        fill="#fff"
        d="M427.01 178.28h220.98v9.61H427.01zM427.01 197.49h220.98v9.61H427.01zM427.01 216.71h124.9v9.61h-124.9zM427.01 235.92h182.55v9.61H427.01zM427.01 255.14h153.72v9.61H427.01zM427.01 274.35h220.98v9.61H427.01zM436.62 303.18h192.15v76.86H436.62z"
      />
      <path
        fill="none"
        stroke="#3ad29f"
        strokeMiterlimit={10}
        strokeWidth={6}
        strokeDasharray="12"
        d="M138.78 610.63H33.09V34.16H657.6V82.2"
      />
      <circle cx={36.3} cy={36.3} r={36.3} fill="url(#prefix__j)" opacity={0.5} />
      <circle cx={36.3} cy={36.3} r={34.16} fill="#69f0ae" />
      <path fill="#fff" d="M23.49 34.16L36.3 45.9l18.14-26.69 6.41 5.34L36.3 56.58 18.15 36.3l5.34-2.14z" />
      <rect
        x={306.35}
        y={401.2}
        width={277.16}
        height={429.64}
        rx={17.17}
        ry={17.17}
        transform="rotate(-.08 -49044.865 102102.682)"
        fill="url(#prefix__k)"
      />
      <path
        transform="rotate(-.08 -49044.865 102102.682)"
        fill="url(#prefix__l)"
        d="M325.75 434.02H565.1v360.35H325.75z"
      />
      <rect
        x={314.78}
        y={407.7}
        width={260.3}
        height={409.85}
        rx={12.68}
        ry={12.68}
        transform="rotate(-.08 -49052.027 102102.677)"
        fill="#fff"
      />
      <path fill="#e6e6e6" d="M191.003 370.165l224.79-.314.48 343.76-224.79.313z" />
      <ellipse cx={446.25} cy={799.84} rx={9.26} ry={9.49} transform="translate(-142.86 -68.38)" fill="#dbdbdb" />
      <ellipse
        cx={406.24}
        cy={424.2}
        rx={3.09}
        ry={3.16}
        transform="rotate(-.08 -49087.706 101916.441)"
        fill="#dbdbdb"
      />
      <rect
        x={421.68}
        y={422.25}
        width={40.14}
        height={3.16}
        rx={0.76}
        ry={0.76}
        transform="rotate(-.08 -49051.897 101916.466)"
        fill="#dbdbdb"
      />
      <path fill="url(#prefix__m)" d="M302.28 581.8h87.94v92.34h-87.94z" />
      <path fill={primaryColor} d="M306.1 585.82h80.3v84.31h-80.3z" />
      <path
        d="M494.84 692.32l-1-.36-.06.09h-.06v-2.72a6.27 6.27 0 0 0-.08-1 10.41 10.41 0 0 0 3.57-4.71 12.27 12.27 0 1 0-19.43 0 10.41 10.41 0 0 0 3.57 4.71 6.27 6.27 0 0 0-.08 1v3a25.44 25.44 0 0 0-18.67 24.52v22.31h50.85v-22.35a25.44 25.44 0 0 0-18.61-24.49z"
        transform="translate(-141.76 -69)"
        fill="url(#prefix__n)"
        opacity={0.5}
      />
      <path
        d="M344.7 622.76h3.1a22.93 22.93 0 0 1 22.93 22.93v23h-49v-23a22.93 22.93 0 0 1 22.97-22.93z"
        fill="#3ad29f"
      />
      <rect x={339.76} y={614.77} width={11.99} height={14.99} rx={5.62} ry={5.62} fill="#be7c5e" />
      <path fill="#be7c5e" d="M343.45 629.3l2.24 3.26 2.36-3.26h-4.6z" />
      <path d="M330.97 641.11s-2.38 23.69-.84 25.23M360.41 641.11s2.38 23.69.84 25.23" opacity={0.1} />
      <path
        d="M345.75 622a10 10 0 0 0 5.92-1.94 6 6 0 0 0-5.92-5.05 6 6 0 0 0-5.92 5.05 10 10 0 0 0 5.92 1.94z"
        opacity={0.05}
      />
      <circle cx={345.75} cy={608.07} r={11.81} fill="#444" />
      <circle cx={345.75} cy={611.77} r={9.99} fill="#be7c5e" />
      <path d="M337.7 601.87l2.52 3.08s11.07 1 12.33-1.54-7.29-4.35-7.29-4.35z" opacity={0.05} />
      <path d="M337.7 601.59l2.52 3.08s11.07 1 12.33-1.54-7.29-4.35-7.29-4.35z" fill="#444" />
      <ellipse cx={335.74} cy={611.12} rx={0.7} ry={1.26} fill="#be7c5e" />
      <ellipse cx={355.78} cy={611.12} rx={0.7} ry={1.26} fill="#be7c5e" />
      <path
        d="M337.94 597.09a6 6 0 0 1 3.08-2.07c2.21-.88 4.51-1.78 6.88-1.62a1.16 1.16 0 0 1 .65.19 2.24 2.24 0 0 1 .39.57c.72 1.07 2.74 1 3 2.26.07.41-.1.85 0 1.25.26 1 1.67.9 2.5 1.47a2.28 2.28 0 0 1 .2 3.18 6 6 0 0 1-3.06 1.74 11.8 11.8 0 0 1-6.45.57c-3.03-.79-10.12-2.75-7.19-7.54z"
        fill="#444"
      />
      <path fill="url(#prefix__o)" d="M212.28 580.8h87.94v92.34h-87.94z" />
      <path fill={primaryColor} d="M216.1 584.82h80.3v84.31h-80.3z" />
      <path
        d="M404.84 691.32l-1-.36-.06.09h-.06v-2.72a6.27 6.27 0 0 0-.08-1 10.41 10.41 0 0 0 3.57-4.71 12.27 12.27 0 1 0-19.43 0 10.41 10.41 0 0 0 3.57 4.71 6.27 6.27 0 0 0-.08 1v3a25.44 25.44 0 0 0-18.67 24.52v22.31h50.85v-22.35a25.44 25.44 0 0 0-18.61-24.49z"
        transform="translate(-141.76 -69)"
        fill="url(#prefix__p)"
        opacity={0.5}
      />
      <path
        d="M254.7 621.76h3.1a22.93 22.93 0 0 1 22.93 22.93v23h-49v-23a22.93 22.93 0 0 1 22.97-22.93z"
        fill="#514abf"
      />
      <rect x={249.76} y={613.77} width={11.99} height={14.99} rx={5.62} ry={5.62} fill="#fda57d" />
      <path d="M240.97 640.11s-2.38 23.69-.84 25.23M270.41 640.11s2.38 23.69.84 25.23" opacity={0.1} />
      <path
        d="M255.75 621a10 10 0 0 0 5.92-1.94 6 6 0 0 0-5.92-5.05 6 6 0 0 0-5.92 5.05 10 10 0 0 0 5.92 1.94z"
        opacity={0.05}
      />
      <circle cx={255.75} cy={607.07} r={11.81} fill="#444" />
      <circle cx={255.75} cy={610.77} r={9.99} fill="#fda57d" />
      <path d="M247.7 600.87l2.52 3.08s11.07 1 12.33-1.54-7.29-4.35-7.29-4.35z" opacity={0.05} />
      <path d="M247.7 600.59l2.52 3.08s11.07 1 12.33-1.54-7.29-4.35-7.29-4.35z" fill="#444" />
      <ellipse cx={245.74} cy={610.12} rx={0.7} ry={1.26} fill="#fda57d" />
      <ellipse cx={265.78} cy={610.12} rx={0.7} ry={1.26} fill="#fda57d" />
      <path
        fill="#fff"
        d="M215.64 413.83h163.33v7.1H215.64zM215.64 428.03h163.33v7.1H215.64zM215.64 442.23h92.32v7.1h-92.32zM215.64 456.44h134.93v7.1H215.64zM215.64 470.64h113.62v7.1H215.64zM215.64 484.84h163.33v7.1H215.64zM222.74 506.15h142.03v56.81H222.74z"
      />
      <path
        d="M248.81 607a16.26 16.26 0 0 0 1.25-2.8 6.87 6.87 0 0 1 12.23-.48c.82 1.47 1.09 3.21 2 4.63a1.17 1.17 0 0 0 1.69-.31 2.22 2.22 0 0 0 .11-1.9c-.21-.62-.56-1.19-.79-1.8a14.26 14.26 0 0 0-1-2.88 5.94 5.94 0 0 0-2-1.67c-2.21-1.36-4.77-2.77-7.27-2a9.37 9.37 0 0 0-2.37 1.21l-3.18 2a10 10 0 0 0-2.7 2.21c-.69.9-2 3.59-1.39 4.75.72 1.32 2.79-.13 3.42-.96z"
        fill="#444"
      />
      <path fill="#fff" d="M253.24 628v39.73h5.87l-.87-39.73h-5z" />
      <path fill="#fda57d" d="M252.26 627.46l3.4 4.95 3.58-4.95h-6.98z" />
    </svg>
  );
};

UndrawRealTimeSync.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawRealTimeSync;
