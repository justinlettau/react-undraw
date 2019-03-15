import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawNewMessage = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 867.19 752.72" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={8.15}
          y1={612.92}
          x2={8.15}
          y2={548.54}
          gradientTransform="matrix(-1 0 0 1 631.86 -7.83)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={-193.49}
          y1={331.29}
          x2={-193.49}
          y2={266.91}
          gradientTransform="matrix(0 -1 -1 0 1165.49 229)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__c"
          x1={-246.01}
          y1={452.36}
          x2={-246.01}
          y2={387.98}
          gradientTransform="matrix(0 -1 -1 0 1296.56 320.52)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__d"
          x1={-14.86}
          y1={303.11}
          x2={-14.86}
          y2={238.73}
          gradientTransform="matrix(-1 0 0 1 542.37 -1.49)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__e"
          x1={-70.23}
          y1={46.12}
          x2={-70.23}
          y2={-18.26}
          gradientTransform="matrix(0 -1 -1 0 813.84 48.8)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__f"
          x1={58.85}
          y1={392.6}
          x2={58.85}
          y2={328.22}
          gradientTransform="matrix(0 -1 -1 0 1170.31 321.92)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__g"
          x1={320.67}
          y1={441.4}
          x2={320.67}
          y2={377.01}
          gradientTransform="matrix(-1 0 0 1 595.88 88.63)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__h"
          x1={162.93}
          y1={324.23}
          x2={162.93}
          y2={259.85}
          gradientTransform="matrix(0 -1 -1 0 809.92 510.37)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__i"
          x1={-38.47}
          y1={742.22}
          x2={-38.47}
          y2={677.84}
          gradientTransform="matrix(0 -1 -1 0 1237.91 453)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__j"
          x1={257.58}
          y1={271.1}
          x2={257.58}
          y2={206.72}
          gradientTransform="matrix(-1 0 0 1 544.58 77.7)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__k"
          x1={186}
          y1={144.09}
          x2={186}
          y2={79.71}
          gradientTransform="matrix(0 -1 -1 0 641.58 352.21)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__l"
          x1={123.1}
          y1={659.28}
          x2={123.1}
          y2={594.9}
          gradientTransform="matrix(0 -1 -1 0 1166.77 433.34)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__m" x1={438.22} y1={567.33} x2={541.4} y2={567.33} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={554.46} y1={525.12} x2={586.43} y2={525.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={669.68} y1={582.71} x2={700.58} y2={582.71} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={571.06} y1={506.59} x2={571.06} y2={139.02} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__q"
          x1={19.14}
          y1={784.71}
          x2={19.14}
          y2={618.86}
          gradientTransform="matrix(-1 0 0 1 619.95 34.86)"
          xlinkHref="#prefix__a"
        />
      </defs>
      <path transform="rotate(-16.6 288.328 1106.544)" fill="url(#prefix__a)" d="M571.33 540.71h104.76v64.38H571.33z" />
      <path fill="#fff" d="M399.568 484.6l96.992-28.914 17.167 57.585-96.992 28.915z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M420.202 493.075l-12.343 3.68-2.723-9.133 12.343-3.68zM470.659 497.376l-47.38 14.124-.883-2.961 47.38-14.125zM472.577 503.79l-34.548 10.298-.588-1.974 34.547-10.299z" />
      </g>
      <path transform="rotate(-78.98 738.507 486.644)" fill="url(#prefix__b)" d="M834.2 370.12h64.38v104.76H834.2z" />
      <path fill="#fff" d="M642.65 368.919l11.416-58.888 99.186 19.23-11.417 58.888z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M669.925 326.216l-12.642-2.462 1.822-9.355 12.642 2.462zM712.635 353.418l-48.528-9.45.59-3.033 48.529 9.45zM711.36 360l-35.385-6.892.394-2.022 35.385 6.891z" />
      </g>
      <path transform="rotate(-23.45 615.71 930.58)" fill="url(#prefix__c)" d="M844.2 514.16h64.38v104.76H844.2z" />
      <path fill="#fff" d="M662.594 457.74l55.127-23.913 40.277 92.85-55.127 23.913z" />
      <g opacity={0.6} fill="#47e6b1">
        <path d="M711.62 455.288l-5.126-11.816 8.743-3.792 5.125 11.816zM713.366 505.9l-19.675-45.357 2.835-1.23 19.675 45.357zM707.215 508.569l-14.346-33.073 1.89-.82 14.346 33.073z" />
      </g>
      <path transform="rotate(-16.6 221.793 802.986)" fill="url(#prefix__d)" d="M504.85 237.24h104.76v64.38H504.85z" />
      <path fill="#fff" d="M333.11 181.12l96.993-28.914 17.167 57.586-96.992 28.914z" />
      <g opacity={0.6} fill="#f55f44">
        <path d="M353.689 189.615l-12.343 3.68-2.723-9.134 12.343-3.68zM404.155 193.912l-47.379 14.125-.883-2.961 47.38-14.125zM406.064 200.329l-34.548 10.299-.588-1.974 34.547-10.3z" />
      </g>
      <path transform="rotate(-78.98 672.023 183.172)" fill="url(#prefix__e)" d="M767.72 66.65h64.38v104.76h-64.38z" />
      <path fill="#fff" d="M577.72 64.58l11.485-58.983 99.344 19.347-11.486 58.982z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M603.44 22.748l-12.642-2.463 1.822-9.354 12.642 2.462zM646.15 49.95l-48.528-9.45.591-3.033 48.528 9.45zM644.877 56.523l-35.385-6.89.394-2.023 35.385 6.891z" />
      </g>
      <path transform="rotate(-23.45 549.228 627.121)" fill="url(#prefix__f)" d="M777.71 210.69h64.38v104.76h-64.38z" />
      <path fill="#fff" d="M596.11 154.27l55.127-23.913 40.276 92.85-55.127 23.913z" />
      <g opacity={0.6} fill="#47e6b1">
        <path d="M645.14 151.823l-5.126-11.816 8.743-3.793 5.125 11.816zM646.876 202.435L627.2 157.078l2.835-1.23 19.675 45.357zM640.73 205.112l-14.347-33.072 1.89-.82 14.346 33.073z" />
      </g>
      <path transform="rotate(-16.6 -60.306 1031.462)" fill="url(#prefix__g)" d="M222.82 465.65h104.76v64.38H222.82z" />
      <path fill="#fff" d="M51.069 409.511l96.992-28.914 17.167 57.585-96.992 28.915z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M71.694 418.044l-12.343 3.68-2.723-9.133 12.343-3.68zM122.16 422.342l-47.38 14.124-.882-2.961 47.38-14.124zM124.078 428.755l-34.547 10.3-.589-1.975 34.548-10.299z" />
      </g>
      <path transform="rotate(-78.98 390.003 411.583)" fill="url(#prefix__h)" d="M485.7 295.06h64.38v104.76H485.7z" />
      <path fill="#fff" d="M294.665 293.397l11.417-58.888 99.186 19.23-11.417 58.888z" />
      <g opacity={0.6} fill="#f55f44">
        <path d="M321.411 251.148l-12.642-2.462 1.822-9.354 12.642 2.462zM364.131 278.353l-48.528-9.451.59-3.033 48.529 9.45zM362.856 284.933l-35.385-6.89.393-2.023 35.386 6.891z" />
      </g>
      <path transform="rotate(-23.45 267.223 855.514)" fill="url(#prefix__i)" d="M495.69 439.09h64.38v104.76h-64.38z" />
      <path fill="#fff" d="M314.094 382.675l55.127-23.913 40.276 92.85-55.127 23.914z" />
      <g opacity={0.6} fill="#47e6b1">
        <path d="M363.115 380.229l-5.126-11.816 8.743-3.793 5.126 11.816zM364.861 430.83l-19.674-45.356 2.835-1.23 19.674 45.357zM358.714 433.504l-14.346-33.072 1.89-.82 14.346 33.073z" />
      </g>
      <path transform="rotate(-16.6 -48.492 850.189)" fill="url(#prefix__j)" d="M234.62 284.42h104.76v64.38H234.62z" />
      <path fill="#fff" d="M64.504 227.75l97.162-29.352 17.426 57.687-97.162 29.35z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M83.478 236.82l-12.343 3.679-2.723-9.133 12.343-3.68zM133.935 241.12l-47.38 14.125-.883-2.962 47.38-14.124zM135.853 247.534l-34.548 10.299-.588-1.974 34.547-10.3z" />
      </g>
      <path transform="rotate(-79 401.601 231.038)" fill="url(#prefix__k)" d="M497.49 113.83h64.38v104.76h-64.38z" />
      <path fill="#fff" d="M307.494 111.765l11.486-58.982 99.344 19.346-11.486 58.982z" />
      <g opacity={0.6}>
        <path
          fill={primaryColor}
          d="M333.216 69.932l-12.642-2.462 1.822-9.354 12.642 2.462zM375.928 97.125l-48.528-9.45.59-3.033 48.529 9.45z"
        />
        <path fill="#f55f44" d="M374.643 103.706l-35.385-6.89.394-2.023 35.385 6.891z" />
      </g>
      <path transform="rotate(-23.45 279.027 674.297)" fill="url(#prefix__l)" d="M507.49 257.87h64.38v104.76h-64.38z" />
      <path fill="#fff" d="M325.884 201.46l55.127-23.912 40.276 92.85-55.127 23.913z" />
      <g opacity={0.6} fill="#47e6b1">
        <path d="M374.92 199.009l-5.125-11.816 8.743-3.793 5.125 11.816zM376.657 249.62l-19.675-45.356 2.835-1.23 19.675 45.357zM370.515 252.275l-14.346-33.072 1.89-.82 14.346 33.072z" />
      </g>
      <circle cx={63.9} cy={61.26} r={5.47} fill="#535461" opacity={0.25} />
      <circle cx={634.96} cy={540.36} r={5.47} fill="#535461" opacity={0.25} />
      <circle cx={151.79} cy={513.16} r={5.47} fill="#535461" opacity={0.25} />
      <circle cx={685.81} cy={437.02} r={5.47} fill="#535461" opacity={0.25} />
      <circle cx={737.28} cy={186.1} r={5.47} fill="#535461" opacity={0.25} />
      <path
        fill="#535461"
        opacity={0.25}
        d="M333.44 4.87h-4.86V0h-1.99v4.87h-4.86v1.98h4.86v4.86h1.99V6.85h4.86V4.87zM146.29 79.4h-4.86v-4.86h-1.99v4.86h-4.86v1.99h4.86v4.86h1.99v-4.86h4.86V79.4zM70.16 357.13H65.3v-4.86h-1.99v4.86h-4.86v1.99h4.86v4.86h1.99v-4.86h4.86v-1.99zM59.23 159.07h-4.87v-4.87h-1.98v4.87h-4.87v1.98h4.87v4.87h1.98v-4.87h4.87v-1.98zM11.71 295.17H6.85v-4.87H4.87v4.87H0v1.98h4.87v4.86h1.98v-4.86h4.86v-1.98zM867.19 224.99h-4.86v-4.86h-1.99v4.86h-4.86v1.99h4.86v4.86h1.99v-4.86h4.86v-1.99zM697.76 288.26h-4.86v-4.87h-1.99v4.87h-4.86v1.98h4.86v4.87h1.99v-4.87h4.86v-1.98zM553.08 117.62h-4.87v-4.86h-1.98v4.86h-4.87v1.99h4.87v4.86h1.98v-4.86h4.87v-1.99z"
      />
      <path
        d="M440.3 469.38c-3.5 11.36 1.75 24.79 12 30.77 4.29 2.5 9.24 3.77 13.41 6.48 9.05 5.89 12.62 17.19 15.56 27.58 3.37 11.95 6.76 24.58 3.67 36.6-2 7.66-6.45 14.44-9 21.94a45.78 45.78 0 0 0-2.17 19.54c.37 3.5 1.25 7.14 3.64 9.72 3.46 3.73 9 4.29 14 5.19a68.19 68.19 0 0 1 49 38"
        transform="translate(-166.4 -73.64)"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke="url(#prefix__m)"
      />
      <path
        d="M274.97 395.74c-3.5 11.36 1.75 24.79 12 30.77 4.29 2.5 9.24 3.77 13.41 6.48 9.05 5.89 12.62 17.19 15.56 27.58 3.37 11.95 6.76 24.58 3.67 36.6-2 7.66-6.45 14.44-9 21.94a45.78 45.78 0 0 0-2.17 19.54c.37 3.5 1.25 7.14 3.64 9.72 3.46 3.73 9 4.29 14 5.19a68.19 68.19 0 0 1 49 38"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M573.84 384.5c-8.63 12-17.59 25-18.33 39.77-1.13 22.73 17 41.32 25.17 62.58a74.38 74.38 0 0 1-2.5 58.15c-4 8.19-9.61 16.32-8.92 25.39.42 5.54 3.19 10.57 5.42 15.66a88.29 88.29 0 0 1-5.12 79.72"
        transform="translate(-166.4 -73.64)"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke="url(#prefix__n)"
      />
      <path
        d="M408.51 310.86c-8.63 12-17.59 25-18.33 39.77-1.13 22.73 17 41.32 25.17 62.58a74.38 74.38 0 0 1-2.49 58.15c-4 8.19-9.61 16.32-8.92 25.39.42 5.54 3.19 10.57 5.42 15.66a88.29 88.29 0 0 1-5.12 79.72"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M695 492.76l4.17 34c.55 4.52 1 9.45-1.4 13.3-2.3 3.65-6.61 5.39-10 8.09-11 8.85-10 25.85-6.24 39.48s9.28 28.27 4 41.38c-2.18 5.41-6 10-8.91 15a46.07 46.07 0 0 0-5.51 28.58"
        transform="translate(-166.4 -73.64)"
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={2}
        stroke="url(#prefix__o)"
      />
      <path
        d="M529.6 419.12l4.17 34c.55 4.52 1 9.45-1.4 13.3-2.3 3.65-6.61 5.39-10 8.09-11 8.85-10 25.85-6.24 39.48s9.28 28.27 4 41.38c-2.18 5.41-6 10-8.91 15a46.07 46.07 0 0 0-5.51 28.58"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        d="M803.22 352.89A100.9 100.9 0 0 0 671.17 257a121.19 121.19 0 0 0 1.29-17.12A100.84 100.84 0 0 0 471 232.63a100.9 100.9 0 0 0-132.1 95.88c0 50.6 37.26 122.57 85.85 135.32l7.55 4.32-4.1 14.06h24.3l-5.28-14.08 7.52-4.3c37.54-9.85 68.31-55.05 80.37-98.44a73.68 73.68 0 0 0 21.51 9.79l7.55 4.32-4.1 14.06h24.3l-5.28-14.08 7.52-4.3a70.36 70.36 0 0 0 16-6.5c6.49 48.65 41 108.06 84.74 119.53l7.55 4.32-4.1 14.06h24.3l-5.28-14.08 7.52-4.3c48.66-12.75 85.88-84.72 85.88-135.32z"
        transform="translate(-166.4 -73.64)"
        fill="url(#prefix__p)"
        opacity={0.7}
      />
      <path
        fill="#f55f44"
        d="M289.93 403.41h-23.51l4.11-14.11h14.11l5.29 14.11zM375.17 254.69c0 53.89-43.69 132.85-97.58 132.85s-97.58-79-97.58-132.85a97.58 97.58 0 0 1 195.16 0z"
      />
      <path fill="#535461" d="M284.64 389.89h-14.11l-8.23-4.7h30.57l-8.23 4.7z" />
      <path d="M242.32 178.86s-41.15 22.34-47 67" fill="#fff" opacity={0.1} />
      <path
        fill="#4d8af0"
        d="M417.54 317.63h-23.51l4.11-14.11h14.11l5.29 14.11zM502.78 168.9c0 53.89-43.69 132.85-97.58 132.85s-97.6-78.95-97.6-132.85a97.58 97.58 0 1 1 195.16 0z"
      />
      <path fill="#535461" d="M412.25 304.11h-14.11l-8.23-4.71h30.57l-8.23 4.71z" />
      <path d="M369.93 93.07s-41.15 22.34-47 67" fill="#fff" opacity={0.1} />
      <path
        fill="#3ad29f"
        d="M544.08 427h-23.52l4.12-14.1h14.1l5.3 14.1zM629.32 278.28c0 53.89-43.69 132.85-97.58 132.85s-97.58-79-97.58-132.85a97.58 97.58 0 0 1 195.16 0z"
      />
      <path fill="#535461" d="M538.78 413.48h-14.1l-8.23-4.7h30.56l-8.23 4.7z" />
      <path d="M496.46 202.45s-41.15 22.34-47 67" fill="#fff" opacity={0.1} />
      <path transform="translate(-203.25 -41.98)" fill="url(#prefix__q)" d="M465.87 653.73h269.86v165.85H465.87z" />
      <path fill="#eee" d="M298.947 591.03l260.37-13.326 7.91 154.578-260.368 13.326z" />
      <path
        fill={primaryColor}
        d="M345.16 625.076l-33.126 1.696-1.255-24.518 33.127-1.696zM468.848 666.577l-127.203 6.51-.407-7.95 127.203-6.51zM469.723 683.802l-92.758 4.748-.272-5.303 92.759-4.748z"
      />
    </svg>
  );
};

UndrawNewMessage.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawNewMessage;
