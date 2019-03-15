import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawLighthouse = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 936.51 707.22" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={326.5} y1={672.4} x2={326.5} y2={143.43} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path fill="#3ad29f" d="M570.22 408.02l10.04 34.77 10.04 34.77h-40.16l10.04-34.77 10.04-34.77z" />
      <path fill="#3ad29f" d="M589.99 403.31l10.03 34.77 10.04 34.78h-40.15l10.04-34.78 10.04-34.77z" />
      <path
        fill="#3ad29f"
        d="M609.75 403.31l10.04 34.77 10.04 34.78h-40.16l10.04-34.78 10.04-34.77zM762.4 424.54l10.04 34.77 10.04 34.78h-40.16l10.04-34.78 10.04-34.77zM120.25 390.33l17.19 31.85 17.19 31.85-19.61 4.26-19.62 4.27 2.42-36.12 2.43-36.11z"
      />
      <path
        fill="#e0e0e0"
        d="M0 707.09l38-179 28-37 28-48 52-31 39-22 16 48 30.74 20.58L251 487.09l30-10 38-31 29-8 41-26 38 10 39-14 26-18 25 30 14 39 3 14h76l25-27 39-8h38l26 8 46 13 102 248H0z"
      />
      <g opacity={0.3} fill="#e0e0e0">
        <rect x={145.62} y={178.78} width={154.36} height={30.12} rx={15.06} ry={15.06} />
        <rect x={107.97} y={208.9} width={154.36} height={30.12} rx={15.06} ry={15.06} />
        <rect x={145.62} y={239.02} width={154.36} height={30.12} rx={15.06} ry={15.06} />
      </g>
      <path fill="url(#prefix__a)" d="M427 672.4H226l11.77-528.97h177.46L427 672.4z" opacity={0.5} />
      <path fill="#fff" d="M423.08 672.4H230.13l11.29-528.97h170.36l11.3 528.97z" />
      <path d="M276.25 672.4h-46.12l11.29-528.97h23.53l11.3 528.97z" opacity={0.05} />
      <path
        d="M200.95 472.86H453.2a35.77 35.77 0 0 1-35.77 35.77H236.72a35.77 35.77 0 0 1-35.77-35.77zM200.95 295H453.2a35.77 35.77 0 0 1-35.77 35.77H236.72A35.77 35.77 0 0 1 200.95 295z"
        fill={primaryColor}
      />
      <circle cx={327.07} cy={219.2} r={46.12} fill="#ffffa5" />
      <path opacity={0.1} d="M233.89 508.62h185.42v2.82H233.89zM236.72 330.73h178.83v1.88H236.72z" />
      <path d="M377.9 672.4h-59.3v-81.42a29.65 29.65 0 0 1 29.65-29.65 29.66 29.66 0 0 1 29.65 29.65z" fill="#e0e0e0" />
      <path
        d="M883.33 707.22H.46s57-131 143.4-154.18a98.17 98.17 0 0 1 38.27-2.71c20.84 2.65 39.69 13.58 53.08 29.77 28.32 34.24 115.05 108.85 288.58 23.59 0 0 62.12-62.12 161.89 11.29a191.58 191.58 0 0 0 19 8.2c30.61 11.57 91.84 27.69 135.37-6.32 60.23-47.06 43.28 90.36 43.28 90.36z"
        fill="#4d8af0"
      />
      <g opacity={0.3} fill="#e0e0e0">
        <rect x={557.62} y={39.78} width={154.36} height={30.12} rx={15.06} ry={15.06} />
        <rect x={519.97} y={69.9} width={154.36} height={30.12} rx={15.06} ry={15.06} />
        <rect x={557.62} y={100.02} width={154.36} height={30.12} rx={15.06} ry={15.06} />
      </g>
      <g opacity={0.3} fill="#e0e0e0">
        <rect x={685.62} y={249.78} width={154.36} height={30.12} rx={15.06} ry={15.06} />
        <rect x={647.97} y={279.9} width={154.36} height={30.12} rx={15.06} ry={15.06} />
        <rect x={685.62} y={310.02} width={154.36} height={30.12} rx={15.06} ry={15.06} />
      </g>
      <g opacity={0.3} fill="#030b44">
        <path d="M634.85 259.2h32.94s-12.41 21.96-32.94 0z" />
        <path d="M636.84 268.54l21.6-24.87s8.44 23.77-21.6 24.87z" />
      </g>
      <g opacity={0.3} fill="#030b44">
        <path d="M517.2 327.91h32.94s-12.41 21.96-32.94 0z" />
        <path d="M519.19 337.25l21.59-24.87s8.45 23.77-21.59 24.87z" />
      </g>
      <g opacity={0.3} fill="#030b44">
        <path d="M474.59 70.01h35.33s-13.31 23.6-35.33 0z" />
        <path d="M476.72 80.04l23.17-26.69s9.06 25.5-23.17 26.69z" />
      </g>
      <path
        d="M231.74 508.48c1 .09 2.05.14 3.09.14h36l-.76-35.76h-37.54zM268.19 294.97h-30l-.77 35.76h31.53l-.76-35.76z"
        opacity={0.05}
      />
      <path d="M935.06 460.17a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#4d8af0" />
      <path
        d="M453.67 106.21c0 35.19-56.89 63.71-127.07 63.71s-127.07-28.52-127.07-63.71S256.42 0 326.6 0s127.07 71.03 127.07 106.21z"
        fill={primaryColor}
      />
      <path d="M198.79 106.21c0 35.19 56.89 63.71 127.07 63.71V0c-70.18 0-127.07 71.03-127.07 106.21z" opacity={0.05} />
    </svg>
  );
};

UndrawLighthouse.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawLighthouse;
