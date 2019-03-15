import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawMessages = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 664 779.55" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={324.23}
          y1={775.01}
          x2={630.7}
          y2={51.33}
          gradientTransform="rotate(-.14 -841.696 5577.13)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={557.77} y1={856.45} x2={863.06} y2={135.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={430.18} y1={453.24} x2={430.18} y2={294.18} xlinkHref="#prefix__a" />
      </defs>
      <g opacity={0.5}>
        <path
          d="M645.11 60.78l-362.25.88A14.89 14.89 0 0 0 268 76.57l1.65 667.73a14.89 14.89 0 0 0 14.93 14.85l362.25-.88a14.89 14.89 0 0 0 14.85-14.92L660 75.62a14.89 14.89 0 0 0-14.89-14.84z"
          transform="translate(-268 -60.22)"
          fill="url(#prefix__a)"
        />
        <rect
          x={274.12}
          y={60.65}
          width={381.44}
          height={688.5}
          rx={13.64}
          ry={13.64}
          transform="rotate(-.14 -24317.39 110051.963)"
          fill="#fff"
        />
        <path
          d="M377.62 190.78l-.38-159a14.49 14.49 0 0 0-14.52-14.45l-70.85.17a30.92 30.92 0 0 1-30.41 26.38l-131.75.32a30.92 30.92 0 0 1-30.54-26.23l-69.79.17a14.49 14.49 0 0 0-14.45 14.52L15.32 193l1.13 464.66A14.49 14.49 0 0 0 31 672.08l333.34-.81a14.49 14.49 0 0 0 14.41-14.49z"
          fill="#bbb"
        />
        <rect
          x={418.12}
          y={86.18}
          width={85}
          height={5.31}
          rx={2}
          ry={2}
          transform="rotate(-.86 -3684.913 17913.26)"
          fill="#dbdbdb"
        />
        <circle cx={521.17} cy={87.39} r={3.19} transform="rotate(-.86 -3624.272 17911.716)" fill="#dbdbdb" />
        <path fill="#e0e0e0" d="M166.1 103.52h177.59v14.16H166.1zM166.1 131.84h177.59V146H166.1z" />
        <ellipse cx={78.09} cy={118.92} rx={33.54} ry={33.7} fill="#f5f5f5" />
        <path
          d="M92.54 142.51H63.45a8.67 8.67 0 0 0-7.08 3.76 43.63 43.63 0 0 0 43 .24 8.66 8.66 0 0 0-6.83-4z"
          fill={primaryColor}
        />
        <path
          d="M63.69 119.78s-4.26 12.4-6.59 11.24c0 0 22.44 19.38 42.25 0a59.07 59.07 0 0 0-8.53-11.24z"
          fill="#333"
        />
        <circle cx={78.07} cy={118.62} r={16.67} fill="#333" />
        <path
          d="M72.21 136.73h11.63v4.52a5.34 5.34 0 0 1-5.34 5.34h-1a5.34 5.34 0 0 1-5.34-5.34v-4.52h.05z"
          opacity={0.1}
        />
        <path
          d="M73.44 136.45h9.18a1.23 1.23 0 0 1 1.23 1.23V141a5.34 5.34 0 0 1-5.34 5.34h-1a5.34 5.34 0 0 1-5.3-5.34v-3.29a1.23 1.23 0 0 1 1.23-1.26z"
          fill="#fda57d"
        />
        <path d="M72.24 138.13a16.73 16.73 0 0 0 11.63 0v-1.35H72.24z" opacity={0.1} />
        <circle cx={78.07} cy={122.24} r={16.67} fill="#fda57d" />
        <path d="M62.14 115.91h31.78s-2.71-12.83-14.73-12-17.05 12-17.05 12z" fill="#333" />
        <ellipse cx={61.75} cy={121.53} rx={1.55} ry={2.91} fill="#fda57d" />
        <ellipse cx={94.31} cy={121.53} rx={1.55} ry={2.91} fill="#fda57d" />
        <path d="M62.14 116.35h31.78s-2.71-12.83-14.73-12-17.05 12-17.05 12z" opacity={0.1} />
        <path fill="#e0e0e0" d="M166.1 211.38h177.59v14.16H166.1zM166.1 239.7h177.59v14.16H166.1z" />
        <ellipse cx={78.09} cy={226.78} rx={33.54} ry={33.7} fill="#e0e0e0" />
        <path fill="#e0e0e0" d="M166.1 319.24h177.59v14.16H166.1zM166.1 347.56h177.59v14.16H166.1z" />
        <ellipse cx={78.09} cy={334.64} rx={33.54} ry={33.7} fill="#e0e0e0" />
        <path fill="#e0e0e0" d="M166.1 427.1h177.59v14.16H166.1zM166.1 455.42h177.59v14.16H166.1z" />
        <ellipse cx={78.09} cy={442.5} rx={33.54} ry={33.7} fill="#e0e0e0" />
        <path fill="#e0e0e0" d="M166.1 534.96h177.59v14.16H166.1zM166.1 563.28h177.59v14.16H166.1z" />
        <ellipse cx={78.09} cy={550.36} rx={33.54} ry={33.7} fill="#e0e0e0" />
      </g>
      <path
        d="M878.26 144.67l-362.26.88a14.89 14.89 0 0 0-14.85 14.92l1.65 664.46a14.89 14.89 0 0 0 14.93 14.85L880 838.9a14.89 14.89 0 0 0 14.83-14.9l-1.65-664.46a14.89 14.89 0 0 0-14.92-14.87z"
        transform="translate(-268 -60.22)"
        fill="url(#prefix__b)"
      />
      <rect
        x={507.27}
        y={141.27}
        width={381.44}
        height={688.5}
        rx={13.64}
        ry={13.64}
        transform="rotate(-.14 -24084.214 110134.099)"
        fill="#fff"
      />
      <path
        data-name="<Path>"
        d="M610.77 272.49l-.38-160.13a14.49 14.49 0 0 0-14.52-14.45l-70.87.17a30.92 30.92 0 0 1-30.41 26.38l-131.74.32a30.92 30.92 0 0 1-30.54-26.23l-69.79.17a14.49 14.49 0 0 0-14.45 14.52l.39 160.34"
        fill="#fafafa"
      />
      <path
        data-name="<Path>"
        d="M248.46 273.59l1.13 464.66a14.49 14.49 0 0 0 14.52 14.45l333.34-.81a14.49 14.49 0 0 0 14.45-14.52l-1.14-466"
        fill="#fafafa"
      />
      <path fill="#e0e0e0" d="M280.5 164.53h70.82v70.82H280.5z" />
      <path fill="url(#prefix__c)" d="M196.37 294.18H664v159.07H196.37z" opacity={0.5} />
      <path fill="#fff" d="M201.94 300.72h456.5V447.8h-456.5z" />
      <path fill={primaryColor} d="M384 355.19h177.59v14.16H384zM384 383.52h177.59v14.16H384z" />
      <path fill="#e0e0e0" d="M384 512.08h177.59v14.16H384z" />
      <path fill="#eee" d="M384 540.4h177.59v14.16H384z" />
      <path fill={primaryColor} d="M433.03 221.18h79.53v25.06h-79.53z" />
      <ellipse cx={295.99} cy={370.59} rx={33.54} ry={33.7} fill="#f5f5f5" />
      <path
        d="M310.44 394.18h-29.1a8.67 8.67 0 0 0-7.08 3.76 43.63 43.63 0 0 0 43 .24 8.66 8.66 0 0 0-6.82-4z"
        fill={primaryColor}
      />
      <path
        d="M281.59 371.46s-4.26 12.4-6.59 11.24c0 0 22.44 19.38 42.25 0a59.07 59.07 0 0 0-8.53-11.24z"
        fill="#333"
      />
      <circle cx={295.97} cy={370.3} r={16.67} fill="#333" />
      <path
        d="M290.11 388.41h11.63v4.52a5.34 5.34 0 0 1-5.34 5.34h-1a5.34 5.34 0 0 1-5.34-5.34v-4.52h.05z"
        opacity={0.1}
      />
      <path
        d="M291.34 388.13h9.18a1.23 1.23 0 0 1 1.23 1.23v3.29a5.34 5.34 0 0 1-5.35 5.35h-1a5.34 5.34 0 0 1-5.34-5.34v-3.29a1.23 1.23 0 0 1 1.23-1.23z"
        fill="#fda57d"
      />
      <path d="M290.13 389.78a16.73 16.73 0 0 0 11.63 0v-1.43h-11.63z" opacity={0.1} />
      <circle cx={295.97} cy={373.91} r={16.67} fill="#fda57d" />
      <path d="M280 367.59h31.78s-2.71-12.83-14.73-12-17.05 12-17.05 12z" fill="#333" />
      <ellipse cx={279.65} cy={373.2} rx={1.55} ry={2.91} fill="#fda57d" />
      <ellipse cx={312.2} cy={373.2} rx={1.55} ry={2.91} fill="#fda57d" />
      <path d="M280 368.02h31.78s-2.71-12.83-14.73-12-17.05 12-17.05 12z" opacity={0.1} />
      <ellipse cx={317.78} cy={528.57} rx={33.54} ry={33.7} fill="#e0e0e0" />
      <ellipse cx={317.78} cy={658.22} rx={33.54} ry={33.7} fill="#e0e0e0" />
      <path fill="#e0e0e0" d="M384 637.37h177.59v14.16H384z" />
      <path fill="#eee" d="M384 665.69h177.59v14.16H384z" />
      <path fill="#e0e0e0" d="M384 164.53h177.59v14.16H384zM384 192.86h177.59v14.16H384z" />
      <rect
        x={651.27}
        y={166.8}
        width={85}
        height={5.31}
        rx={2}
        ry={2}
        transform="rotate(-.86 -3451 17994.3)"
        fill="#dbdbdb"
      />
      <circle cx={754.32} cy={168.02} r={3.19} transform="rotate(-.86 -3390.359 17992.756)" fill="#dbdbdb" />
    </svg>
  );
};

UndrawMessages.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMessages;
