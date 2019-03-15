import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawAboutUsPage = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 871 599" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={600} y1={749.5} x2={600} y2={150.5} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={322.6} y1={356.71} x2={322.6} y2={261.21} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={433.18} y1={460.65} x2={433.18} y2={365.14} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={433.13} y1={354.37} x2={433.13} y2={258.86} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={546.97} y1={354.15} x2={546.97} y2={258.65} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={322.25} y1={457.52} x2={322.25} y2={362.01} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={548.75} y1={462.81} x2={548.75} y2={367.31} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={322.6} y1={564.88} x2={322.6} y2={469.37} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={436.04} y1={570.35} x2={436.04} y2={474.85} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={4} y1={187} x2={436} y2={187} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#fff" stopOpacity={0.05} />
          <stop offset={0.99} stopColor="#fff" stopOpacity={0.07} />
        </linearGradient>
        <linearGradient id="prefix__k" x1={4} y1={91.5} x2={434} y2={91.5} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#fff" stopOpacity={0.02} />
          <stop offset={0.99} stopColor="#fff" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient id="prefix__l" x1={436} y1={187} x2={867} y2={187} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#fff" stopOpacity={0.02} />
          <stop offset={0.99} stopColor="#fff" stopOpacity={0.04} />
        </linearGradient>
      </defs>
      <path
        d="M176.67 150.5a12.17 12.17 0 0 0-12.17 12.17v574.66a12.17 12.17 0 0 0 12.17 12.17h846.67a12.17 12.17 0 0 0 12.17-12.17V162.67a12.17 12.17 0 0 0-12.17-12.17z"
        transform="translate(-164.5 -150.5)"
        fill="url(#prefix__a)"
      />
      <path d="M4 29.35v554.84a9.73 9.73 0 0 0 9.73 9.73h843.54a9.73 9.73 0 0 0 9.73-9.73V29.35z" fill="#fff" />
      <path d="M856.9 2.5h-843a9.73 9.73 0 0 0-9.73 9.73v31.81H866.6V12.23a9.73 9.73 0 0 0-9.7-9.73z" fill="#eee" />
      <circle cx={37.01} cy={22.64} r={10.07} fill="#ff5252" />
      <circle cx={64.71} cy={22.64} r={10.07} fill="#ff0" />
      <circle cx={92.4} cy={22.64} r={10.07} fill="#69f0ae" />
      <path fill="#3ad29f" d="M4 44h863v191H4z" />
      <circle cx={322.6} cy={308.96} r={47.75} fill="url(#prefix__b)" opacity={0.5} />
      <circle cx={322.6} cy={308.7} r={46.75} fill="#f5f5f5" />
      <path
        d="M322.73 355.59a46.53 46.53 0 0 0 25.69-7.69c-1.72-9.41-8.28-10-8.28-10H304s-6.19.51-8.12 9.17a46.53 46.53 0 0 0 26.85 8.52z"
        fill={primaryColor}
      />
      <circle cx={322.24} cy={307.67} r={20.72} fill="#333" />
      <path d="M315 326.46h14.46V338a7.23 7.23 0 0 1-7.23 7.23A7.23 7.23 0 0 1 315 338v-11.54z" opacity={0.1} />
      <path
        d="M316.33 325.93H328a1.38 1.38 0 0 1 1.38 1.38v10.19a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-10.19a1.38 1.38 0 0 1 1.38-1.38z"
        fill="#be7c5e"
      />
      <path d="M314.98 331.92a20.81 20.81 0 0 0 14.46 0v-1.78h-14.46z" opacity={0.1} />
      <circle cx={322.24} cy={312.17} r={20.72} fill="#be7c5e" />
      <path
        d="M309.68 303.62a3.62 3.62 0 0 1 1.35-2.35 3.83 3.83 0 0 1 2.16-.27c5.73.31 11.41-1 17-2.36 3.18-.78 6.6-1.73 8.64-4.29s-.63-10.63-3.76-11.59c-2.07-.63-4.45.55-6.4-.38a12.41 12.41 0 0 1-2.26-1.79 13.67 13.67 0 0 0-5.42-2.21c-2.23-.55-4.65-1.09-6.77-.2-1.64.69-2.85 2.13-4.41 3-3 1.63-6.61.88-10 .87-1.15 0-2.52.23-3 1.29a5.27 5.27 0 0 0 0 2.31c.1 2.46-1.94 4.4-3.65 6.17s-3.33 4.33-2.24 6.55c.41.85 1.17 1.48 1.59 2.32.74 1.45.37 3.2.63 4.81a12.09 12.09 0 0 0 1.35 3.46c1.27 2.47 7.64 15.78 10.58 12.4 1.42-1.64 1.66-6.41 2.22-8.55q1.16-4.6 2.39-9.19z"
        fill="#333"
      />
      <ellipse cx={307.49} cy={311.41} rx={1.93} ry={3.61} fill="#be7c5e" />
      <circle cx={433.18} cy={412.89} r={47.75} fill="url(#prefix__c)" opacity={0.5} />
      <circle cx={433.27} cy={412.59} r={46.75} fill="#f5f5f5" />
      <path
        d="M433.31 459.5a46.53 46.53 0 0 0 25.69-7.69c-1.72-9.41-8.28-10-8.28-10h-36.14s-6.19.51-8.12 9.17a46.53 46.53 0 0 0 26.85 8.52z"
        fill={primaryColor}
      />
      <circle cx={432.82} cy={411.6} r={22.56} fill="#f55f44" />
      <path d="M425.53 430.4H440V442a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-11.6z" opacity={0.1} />
      <path
        d="M426.91 429.86h11.7a1.38 1.38 0 0 1 1.38 1.38v10.19a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-10.19a1.38 1.38 0 0 1 1.38-1.38z"
        fill="#fda57d"
      />
      <path d="M425.56 435.86a20.81 20.81 0 0 0 14.46 0v-1.78h-14.46z" opacity={0.1} />
      <circle cx={432.82} cy={416.1} r={20.72} fill="#fda57d" />
      <circle cx={432.79} cy={388.65} r={8.34} fill="#f55f44" />
      <circle cx={432.79} cy={380.44} r={5.47} fill="#f55f44" />
      <path
        d="M429.17 393.22a8.34 8.34 0 0 1-4.35-10.66l-.17.35a8.341 8.341 0 1 0 15.22 6.83l.15-.36a8.34 8.34 0 0 1-10.85 3.84z"
        fill="#f55f44"
      />
      <path d="M418.06 397.25s8.73 17.73 33.37 7.43l-5.74-9-10.19-3.64z" opacity={0.1} />
      <path d="M418.06 396.99s8.73 17.73 33.37 7.43l-5.74-9-10.19-3.64z" fill="#f55f44" />
      <path d="M424.77 390.5a103 103 0 0 1 16.14 0s-11.9 1.15-16.14 0z" fill="#333" />
      <path
        d="M434.04 374.63a5.49 5.49 0 0 0-1.23.09h.32a5.47 5.47 0 0 1 .82 10.85 5.47 5.47 0 0 0 .1-10.94z"
        fill="#f55f44"
      />
      <ellipse cx={412.09} cy={416.08} rx={1.93} ry={3.61} fill="#fda57d" />
      <ellipse cx={453.54} cy={416.08} rx={1.93} ry={3.61} fill="#fda57d" />
      <path fill="#f55f44" d="M416.75 397.51l4.04-2.08.92 3.34-2.48 1.69-2.48-2.95z" />
      <circle cx={433.13} cy={306.61} r={47.75} fill="url(#prefix__d)" opacity={0.5} />
      <circle cx={433.13} cy={306.35} r={46.75} fill="#f5f5f5" />
      <path d="M414.89 306.77s-5.3 26.11-8.19 24.66c0 0 27.9 24.1 52.53 0 0 0-4.34-18.4-10.6-24.66z" fill="#333" />
      <path
        d="M433.26 353.24a46.53 46.53 0 0 0 25.7-7.74c-1.72-9.41-8.28-10-8.28-10H414.5s-6.19.51-8.12 9.17a46.53 46.53 0 0 0 26.88 8.57z"
        fill={primaryColor}
      />
      <circle cx={432.77} cy={305.32} r={20.72} fill="#333" />
      <path d="M425.49 324.12h14.46v11.57a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-11.57z" opacity={0.1} />
      <path
        d="M426.87 323.58h11.7a1.38 1.38 0 0 1 1.38 1.38v10.19a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23V325a1.38 1.38 0 0 1 1.38-1.42z"
        fill="#be7c5e"
      />
      <path d="M425.5 329.58a20.81 20.81 0 0 0 14.46 0v-1.78H425.5z" opacity={0.1} />
      <circle cx={432.77} cy={309.82} r={20.72} fill="#be7c5e" />
      <path d="M412.96 301.95h39.54s-3.37-16-18.31-14.94-21.23 14.94-21.23 14.94z" fill="#333" />
      <ellipse cx={412.48} cy={308.94} rx={1.93} ry={3.61} fill="#be7c5e" />
      <ellipse cx={452.96} cy={308.94} rx={1.93} ry={3.61} fill="#be7c5e" />
      <path d="M412.96 302.5h39.54s-3.4-16-18.34-15-21.2 15-21.2 15z" opacity={0.1} />
      <circle cx={546.97} cy={306.4} r={47.75} fill="url(#prefix__e)" opacity={0.5} />
      <circle cx={547.06} cy={306.1} r={46.75} fill="#f5f5f5" />
      <path
        d="M547.1 353.03a46.53 46.53 0 0 0 25.69-7.69c-1.72-9.41-8.28-10-8.28-10h-36.14s-6.19.51-8.12 9.17a46.53 46.53 0 0 0 26.85 8.52z"
        fill={primaryColor}
      />
      <circle cx={546.61} cy={305.11} r={22.56} fill="#72351c" />
      <path d="M539.33 323.91h14.46v11.57a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-11.57z" opacity={0.1} />
      <path
        d="M540.71 323.37h11.7a1.38 1.38 0 0 1 1.38 1.38v10.19a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-10.19a1.38 1.38 0 0 1 1.38-1.38z"
        fill="#fda57d"
      />
      <path d="M539.35 329.36a20.81 20.81 0 0 0 14.46 0v-1.78h-14.46z" opacity={0.1} />
      <circle cx={546.61} cy={309.61} r={20.72} fill="#fda57d" />
      <path d="M531.85 290.76s8.73 17.73 33.37 7.43l-5.74-9-10.17-3.69z" opacity={0.1} />
      <path d="M531.85 290.5s8.73 17.73 33.37 7.43l-5.74-9-10.17-3.65z" fill="#72351c" />
      <path
        d="M531.77 289.3a12 12 0 0 1 3-4.83c4.08-4 10.76-4.88 14.19-9.47a2.68 2.68 0 0 1-1.23 3.78c3.28 0 7.09-.31 8.95-3a6.14 6.14 0 0 1-1 6.49c2.91.13 6 2.11 6.2 5a5.79 5.79 0 0 1-2.68 4.88 14.9 14.9 0 0 1-5.41 2c-5.61 1.26-25.63 6.35-22.02-4.85zM567.33 309.79h-.55l-10.69 9.52c-10.3-4.82-17.86 0-17.86 0l-11.21-9.12-1.13.14a20.722 20.722 0 0 0 41.44-.53zm-20.75 13.16c-4 0-7.3-.82-7.3-1.82s3.27-1.82 7.3-1.82 7.3.82 7.3 1.82-3.27 1.83-7.3 1.83z"
        fill="#72351c"
      />
      <ellipse cx={525.88} cy={309.59} rx={1.93} ry={3.61} fill="#fda57d" />
      <ellipse cx={567.33} cy={309.59} rx={1.93} ry={3.61} fill="#fda57d" />
      <circle cx={322.25} cy={409.77} r={47.75} fill="url(#prefix__f)" opacity={0.5} />
      <circle cx={322.34} cy={409.46} r={46.75} fill="#f5f5f5" />
      <path
        d="M322.38 456.39a46.53 46.53 0 0 0 25.69-7.69c-1.72-9.41-8.28-10-8.28-10h-36.13s-6.19.51-8.12 9.17a46.53 46.53 0 0 0 26.84 8.52z"
        fill={primaryColor}
      />
      <circle cx={321.89} cy={408.48} r={22.56} fill="#333" />
      <path d="M314.61 427.27h14.46v11.57a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-11.57z" opacity={0.1} />
      <path
        d="M316 426.73h11.7a1.38 1.38 0 0 1 1.38 1.38v10.19a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-10.19a1.38 1.38 0 0 1 1.38-1.38z"
        fill="#fdb797"
      />
      <path d="M314.64 432.73a20.81 20.81 0 0 0 14.46 0v-1.78h-14.46z" opacity={0.1} />
      <circle cx={321.89} cy={412.97} r={20.72} fill="#fdb797" />
      <path d="M307.13 394.13s8.73 17.73 33.37 7.43l-5.74-9-10.17-3.65z" opacity={0.1} />
      <path d="M307.13 393.86s8.73 17.73 33.37 7.43l-5.74-9-10.17-3.65z" fill="#333" />
      <path
        d="M307.05 392.67a12 12 0 0 1 3-4.83c4.08-4 10.76-4.88 14.19-9.47a2.68 2.68 0 0 1-1.23 3.78c3.28 0 7.09-.31 8.95-3a6.14 6.14 0 0 1-1 6.49c2.91.13 6 2.11 6.2 5a5.79 5.79 0 0 1-2.68 4.88 14.9 14.9 0 0 1-5.41 2c-5.57 1.26-25.63 6.37-22.02-4.85z"
        fill="#333"
      />
      <ellipse cx={301.16} cy={412.95} rx={1.93} ry={3.61} fill="#fdb797" />
      <ellipse cx={342.61} cy={412.95} rx={1.93} ry={3.61} fill="#fdb797" />
      <circle cx={548.75} cy={415.06} r={47.75} fill="url(#prefix__g)" opacity={0.5} />
      <circle cx={548.75} cy={414.8} r={46.75} fill="#f5f5f5" />
      <path
        d="M548.88 461.69a46.53 46.53 0 0 0 25.69-7.69c-1.72-9.41-8.28-10-8.28-10h-36.14s-6.19.51-8.12 9.17a46.53 46.53 0 0 0 26.85 8.52z"
        fill={primaryColor}
      />
      <path d="M541.11 432.56h14.46v11.57a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-11.57z" opacity={0.1} />
      <path
        d="M542.49 432h11.7a1.38 1.38 0 0 1 1.38 1.38v10.22a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-10.19a1.38 1.38 0 0 1 1.38-1.38z"
        fill="#fdb797"
      />
      <path d="M541.13 438.02a20.81 20.81 0 0 0 14.46 0v-1.78h-14.46z" opacity={0.1} />
      <circle cx={548.39} cy={418.27} r={20.72} fill="#fdb797" />
      <ellipse cx={528.09} cy={417.39} rx={1.93} ry={3.61} fill="#fdb797" />
      <ellipse cx={568.57} cy={417.39} rx={1.93} ry={3.61} fill="#fdb797" />
      <rect
        x={535.76}
        y={418.37}
        width={8.86}
        height={4.43}
        rx={2.22}
        ry={2.22}
        fill="none"
        stroke="#333"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <rect
        x={716.65}
        y={568.87}
        width={8.86}
        height={4.43}
        rx={2.22}
        ry={2.22}
        transform="rotate(180 638.835 495.835)"
        fill="none"
        stroke="#333"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path d="M544.27 418.8s2.81-1.53 8 0" fill="none" stroke="#333" strokeMiterlimit={10} strokeWidth={2} />
      <path d="M562.71 403.25l5.08 11.81s6.22-7.83-5.08-11.81z" fill="#858585" />
      <path
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M561.02 420.59l7.59-6.78"
      />
      <path d="M534.06 403.25l-5.08 11.81s-6.22-7.83 5.08-11.81z" fill="#858585" />
      <path
        fill="none"
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M535.76 420.59l-7.69-6.78"
      />
      <circle cx={322.6} cy={517.12} r={47.75} fill="url(#prefix__h)" opacity={0.5} />
      <circle cx={322.6} cy={516.86} r={46.75} fill="#f5f5f5" />
      <path
        d="M348.5 521.07c0 17.21-11.23 36.38-25.09 36.38s-25.09-19.17-25.09-36.38 11.23-26 25.09-26 25.09 8.78 25.09 26z"
        fill="#fdd835"
      />
      <path
        d="M322.73 563.75a46.53 46.53 0 0 0 25.69-7.69c-1.72-9.41-8.28-10-8.28-10H304s-6.19.51-8.12 9.17a46.53 46.53 0 0 0 26.85 8.52z"
        fill={primaryColor}
      />
      <path d="M315 534.63h14.46v11.57a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-11.57z" opacity={0.1} />
      <path
        d="M316.33 534.09H328a1.38 1.38 0 0 1 1.38 1.38v10.19a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-10.19a1.38 1.38 0 0 1 1.38-1.38z"
        fill="#fdb797"
      />
      <path d="M314.98 540.08a20.81 20.81 0 0 0 14.46 0v-1.78h-14.46z" opacity={0.1} />
      <circle cx={322.24} cy={520.33} r={20.72} fill="#fdb797" />
      <ellipse cx={301.94} cy={519.45} rx={1.93} ry={3.61} fill="#fdb797" />
      <ellipse cx={342.42} cy={519.45} rx={1.93} ry={3.61} fill="#fdb797" />
      <path d="M303.87 509.09s11.73 16 38.58 10.56c0 0 3-3.65-4.3-14.86s-27.65-9.39-34.28 4.3z" opacity={0.1} />
      <path d="M303.87 508.83s11.73 16 38.58 10.56c0 0 3-3.65-4.3-14.86s-27.65-9.39-34.28 4.3z" fill="#fdd835" />
      <circle cx={436.04} cy={522.6} r={47.75} fill="url(#prefix__i)" opacity={0.5} />
      <circle cx={436.14} cy={522.29} r={46.75} fill="#f5f5f5" />
      <path
        d="M461.85 526.9c0 15.55-11.17 23.2-25.68 23.2s-26.85-7.65-26.85-23.2 11.76-28.15 26.26-28.15 26.27 12.6 26.27 28.15z"
        fill="#333"
      />
      <path
        d="M436.17 569.22a46.53 46.53 0 0 0 25.7-7.72c-1.72-9.41-8.28-10-8.28-10h-36.14s-6.19.51-8.12 9.17a46.53 46.53 0 0 0 26.84 8.55z"
        fill={primaryColor}
      />
      <path d="M428.4 540.1h14.46v11.57a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23V540.1z" opacity={0.1} />
      <path
        d="M429.78 539.57h11.7a1.38 1.38 0 0 1 1.38 1.38v10.19a7.23 7.23 0 0 1-7.23 7.23 7.23 7.23 0 0 1-7.23-7.23v-10.2a1.38 1.38 0 0 1 1.38-1.37z"
        fill="#fda57d"
      />
      <path d="M428.43 545.56a20.81 20.81 0 0 0 14.46 0v-1.78h-14.46z" opacity={0.1} />
      <circle cx={435.68} cy={525.81} r={20.72} fill="#fda57d" />
      <path
        d="M411.8 527.16s12.9-1.56 22.68-14.08c0 0 12.9 14.21 21.9 12.64 0 0 5.21-5.47 0-10.95s-9.25-12.38-16.16-11.47-15.38 1.3-19 4.56-9.42 19.3-9.42 19.3z"
        opacity={0.1}
      />
      <path
        d="M411.8 526.9s12.9-1.56 22.68-14.08c0 0 12.9 14.21 21.9 12.64 0 0 5.21-5.47 0-10.95s-9.25-12.38-16.16-11.47-15.38 1.3-19 4.56-9.42 19.3-9.42 19.3z"
        fill="#333"
      />
      <ellipse cx={414.95} cy={525.79} rx={1.93} ry={3.61} fill="#fda57d" />
      <ellipse cx={456.4} cy={525.79} rx={1.93} ry={3.61} fill="#fda57d" />
      <path fill="url(#prefix__j)" d="M4 139h432v96H4z" />
      <path fill="url(#prefix__k)" d="M434 139H4V44h338l92 95z" />
      <path fill="url(#prefix__l)" d="M436 139h431v96H436z" />
      <path
        fill="#e0e0e0"
        d="M297 130h276v18H297zM30 57h35v18H30zM808 57h32v3h-32zM808 65h32v3h-32zM808 72h32v3h-32z"
      />
    </svg>
  );
};

UndrawAboutUsPage.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawAboutUsPage;
