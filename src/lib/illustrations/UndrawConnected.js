import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawConnected = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 874.11 733.63" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={875.04}
          y1={475.49}
          x2={303.77}
          y2={474.73}
          gradientTransform="matrix(0 1 -1.02 0 1081.62 -103.54)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={590.41}
          y1={841.63}
          x2={590.41}
          y2={111.52}
          gradientTransform="matrix(0 1 -1.02 0 1082.43 -102.87)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.09} />
          <stop offset={0.55} stopOpacity={0.07} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={837.64} y1={295.46} x2={837.64} y2={83.19} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={305.44} y1={442.78} x2={305.44} y2={230.5} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__e"
          x1={-537.55}
          y1={760.23}
          x2={-537.55}
          y2={547.95}
          gradientTransform="matrix(-1 0 0 1 48 0)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__f" x1={137.34} y1={416.18} x2={137.34} y2={343.15} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={677.83} y1={259.53} x2={677.83} y2={186.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={425.74} y1={733.63} x2={425.74} y2={660.6} xlinkHref="#prefix__a" />
      </defs>
      <path
        d="M163.68 752.21L162.94 222a20 20 0 0 1 20-20l833.41-1.11a20 20 0 0 1 20 20l.73 530.21a20 20 0 0 1-20 20l-833.41 1.11a20 20 0 0 1-19.99-20z"
        transform="translate(-162.94 -83.19)"
        fill="url(#prefix__a)"
        opacity={0.5}
      />
      <path
        transform="rotate(-.08 -59067.805 117142.994)"
        fill="url(#prefix__b)"
        d="M227.85 241.33h741.32v492.4H227.85z"
      />
      <rect
        x={180.15}
        y={218.77}
        width={843.16}
        height={535.49}
        rx={12.68}
        ry={12.68}
        transform="rotate(-.08 -59067.8 117135.832)"
        fill="#fff"
      />
      <path fill={primaryColor} opacity={0.2} d="M795.12 172.38v462.44H87.93V172.38z" />
      <ellipse cx={216.59} cy={489.24} rx={19.52} ry={19.06} transform="translate(-163.62 -82.89)" fill="#dbdbdb" />
      <ellipse cx={989.37} cy={406.92} rx={6.51} ry={6.35} transform="translate(-163.5 -81.82)" fill="#dbdbdb" />
      <rect
        x={948.83}
        y={476.71}
        width={82.58}
        height={6.51}
        rx={0.76}
        ry={0.76}
        transform="rotate(89.92 950.305 356.802)"
        fill="#dbdbdb"
      />
      <path
        d="M943.46 189a105.82 105.82 0 1 0-164.86 87.83l.07.47a36.22 36.22 0 0 0 12 7.64l.14-.47c5 4.25 25.81 11.05 49.79 11h.52c15.18 0 31.66-2.68 46.16-10.52 0 0 .13-.28.33-.8a37.7 37.7 0 0 0 10-6.83q.09-.61.17-1.2A105.7 105.7 0 0 0 943.46 189z"
        transform="translate(-162.94 -83.19)"
        fill="url(#prefix__c)"
        opacity={0.5}
      />
      <circle cx={674.7} cy={105.83} r={102.64} fill="#f5f5f5" />
      <path
        d="M635.49 148.03s-24.46 2-18 46.56a35.13 35.13 0 0 0 11.64 7.41l13.76-46.56zM714.85 148.03s24.46 2 18 46.56a35.13 35.13 0 0 1-11.64 7.41l-13.76-46.56z"
        fill="#fda57d"
      />
      <path d="M636.55 75.01s-11.64 33.86-18 30.69c0 0 61.26 52.91 115.34 0 0 0-9.52-16.93-23.28-30.69z" fill="#333" />
      <circle cx={675.81} cy={71.84} r={45.5} fill="#333" />
      <path
        d="M714.38 148.03h-79.32l-7.45 31.78s-4.35 14.7 1.06 21.16 56 21.16 93.12 1.06a41.4 41.4 0 0 0 1.06-26.45c-4.23-14.81-1.06-1.06-1.06-1.06z"
        opacity={0.1}
      />
      <path
        d="M715.44 148.03h-79.38l-7.39 31.78s-4.35 14.7 1.06 21.16 56 21.16 93.12 1.06a41.4 41.4 0 0 0 1.06-26.45c-4.23-14.81-1.06-1.06-1.06-1.06z"
        opacity={0.1}
      />
      <path
        d="M714.85 148.03h-79.36l-7.43 31.78s-4.35 14.7 1.06 21.16 56 21.16 93.12 1.06a41.4 41.4 0 0 0 1.06-26.45c-4.23-14.81-1.06-1.06-1.06-1.06z"
        fill={primaryColor}
      />
      <path d="M659.82 121.7h31.75v26a15.3 15.3 0 0 1-15.3 15.3h-1.15a15.3 15.3 0 0 1-15.3-15.3v-26z" opacity={0.1} />
      <path d="M659.82 120.52h31.75v26a15.3 15.3 0 0 1-15.3 15.3h-1.15a15.3 15.3 0 0 1-15.3-15.3v-26z" fill="#fda57d" />
      <path d="M659.89 125.09a45.69 45.69 0 0 0 31.75.09v-3.9h-31.75z" opacity={0.1} />
      <circle cx={675.81} cy={81.72} r={45.5} fill="#fda57d" />
      <path d="M632.31 64.43h86.75s-7.41-35-40.21-32.8-46.54 32.8-46.54 32.8z" fill="#333" />
      <ellipse cx={631.25} cy={79.78} rx={4.23} ry={7.94} fill="#fda57d" />
      <ellipse cx={720.14} cy={79.78} rx={4.23} ry={7.94} fill="#fda57d" />
      <path d="M632.31 65.61h86.75s-7.41-35-40.21-32.8-46.54 32.8-46.54 32.8z" opacity={0.1} />
      <path
        d="M411.26 336.32a105.82 105.82 0 1 0-164.85 87.83l.07.47a36.22 36.22 0 0 0 12 7.64l.14-.47c5 4.25 25.81 11.05 49.79 11h.52c15.18 0 31.66-2.68 46.16-10.52 0 0 .13-.28.33-.8a37.7 37.7 0 0 0 10-6.83q.09-.61.17-1.2a105.7 105.7 0 0 0 45.67-87.12z"
        transform="translate(-162.94 -83.19)"
        fill="url(#prefix__d)"
        opacity={0.5}
      />
      <circle cx={142.5} cy={253.14} r={102.64} fill="#f5f5f5" />
      <path
        d="M98.06 293.27s-24.46 2-18 46.56a35.13 35.13 0 0 0 11.64 7.41l13.76-46.56zM177.47 293.27s24.46 2 18 46.56a35.13 35.13 0 0 1-11.64 7.41l-13.77-46.57z"
        fill={primaryColor}
      />
      <circle cx={138.43} cy={217.08} r={45.5} fill="#333" />
      <path
        d="M177 293.27H97.63l-7.41 31.75s-4.35 14.7 1.06 21.16 56 21.16 93.12 1.06a41.4 41.4 0 0 0 1.06-26.43c-4.23-14.81-1.06-1.06-1.06-1.06z"
        fill="#4d8af0"
      />
      <path
        d="M178.06 293.27H98.69l-7.41 31.75s-4.35 14.7 1.06 21.16 56 21.16 93.12 1.06a41.4 41.4 0 0 0 1.06-26.43c-4.23-14.81-1.06-1.06-1.06-1.06z"
        fill="#4d8af0"
      />
      <path
        d="M177.47 293.27H98.06l-7.41 31.75s-4.35 14.7 1.06 21.16 56 21.16 93.12 1.06a41.4 41.4 0 0 0 1.1-26.43c-4.23-14.81-1.06-1.06-1.06-1.06z"
        fill={primaryColor}
      />
      <path d="M122.44 266.93h31.75v26a15.3 15.3 0 0 1-15.3 15.3h-1.15a15.3 15.3 0 0 1-15.3-15.3v-26z" opacity={0.1} />
      <path d="M122.44 265.76h31.75v26a15.3 15.3 0 0 1-15.3 15.3h-1.15a15.3 15.3 0 0 1-15.3-15.3v-26z" fill="#fdb797" />
      <path d="M122.5 270.33a45.69 45.69 0 0 0 31.75.09v-3.9H122.5z" opacity={0.1} />
      <circle cx={138.43} cy={226.96} r={45.5} fill="#fdb797" />
      <path d="M94.93 210.81h86.77s-7.41-35-40.21-32.8-46.56 32.8-46.56 32.8z" opacity={0.1} />
      <path d="M94.93 209.67h86.77s-7.41-35-40.21-32.8-46.56 32.8-46.56 32.8z" fill="#333" />
      <ellipse cx={93.87} cy={225.02} rx={4.23} ry={7.94} fill="#fdb797" />
      <ellipse cx={182.75} cy={225.02} rx={4.23} ry={7.94} fill="#fdb797" />
      <path
        d="M101.67 186.46a16.13 16.13 0 0 1 5.85-8.67c2.22-1.54 4.87-2.28 7.41-3.18a56.65 56.65 0 0 0 10.78-5.15c3.86-2.38 7.48-5.24 11.73-6.81 7.31-2.7 15.45-1.24 23 .7a19.35 19.35 0 0 1 5.38 2 20.36 20.36 0 0 1 4.77 4.62l12 14.45a23 23 0 0 1 3 4.19 14.43 14.43 0 0 1 1.36 4.73 12.38 12.38 0 0 1-1.28 7.76c-2 3.46-6.2 5.2-10.2 5.36s-7.93-1-11.78-2.13c-12.4-3.63-25-7-37.82-8.52a106.67 106.67 0 0 0-19.24-.62c-2 .13-4.68 1.06-5.9-1-1.11-1.79.39-5.95.94-7.73z"
        fill="#333"
      />
      <path
        d="M479.73 653.77a105.82 105.82 0 1 1 164.85 87.83l-.07.47a36.22 36.22 0 0 1-12 7.64l-.14-.47c-5 4.25-25.81 11.05-49.79 11h-.52c-15.18 0-31.66-2.68-46.16-10.52 0 0-.13-.28-.33-.8a37.7 37.7 0 0 1-10-6.83q-.09-.61-.17-1.2a105.7 105.7 0 0 1-45.67-87.12z"
        transform="translate(-162.94 -83.19)"
        fill="url(#prefix__e)"
        opacity={0.5}
      />
      <circle cx={422.6} cy={570.59} r={102.64} fill="#f5f5f5" />
      <path
        d="M382.36 609.68s-24.46 2-18 46.56a35.13 35.13 0 0 0 11.64 7.41l13.76-46.56zM461.72 609.68s24.46 2 18 46.56a35.13 35.13 0 0 1-11.66 7.41l-13.76-46.56z"
        fill="#be7c5e"
      />
      <path
        d="M383.42 536.67s-1.88 5.48-4.55 11.82c-5.82 13.87.82 67.13 14.75 72.8 15.63 6.37 36.18 10.45 57.53 2.66 18.56-6.77 24.28-67.39 11.16-82.16-1.54-1.73-3.15-3.45-4.83-5.13z"
        fill="#333"
      />
      <circle cx={422.68} cy={533.5} r={45.5} fill="#333" />
      <path
        d="M461.25 609.68h-79.36l-7.41 31.75s-4.35 14.7 1.06 21.16 56 21.16 93.12 1.06a41.4 41.4 0 0 0 1.06-26.45c-4.23-14.81-1.06-1.06-1.06-1.06z"
        opacity={0.1}
      />
      <path
        d="M462.31 609.68h-79.36l-7.41 31.75s-4.35 14.7 1.06 21.16 56 21.16 93.12 1.06a41.4 41.4 0 0 0 1.06-26.45c-4.23-14.81-1.06-1.06-1.06-1.06z"
        opacity={0.1}
      />
      <path
        d="M461.72 609.68h-79.36l-7.41 31.75s-4.35 14.7 1.06 21.16 56 21.16 93.12 1.06a41.4 41.4 0 0 0 1.06-26.45c-4.23-14.81-1.06-1.06-1.06-1.06z"
        fill={primaryColor}
      />
      <path
        d="M406.69 583.35h31.75v26a15.3 15.3 0 0 1-15.3 15.3H422a15.3 15.3 0 0 1-15.3-15.3v-26h-.01z"
        opacity={0.1}
      />
      <path
        d="M406.69 582.17h31.75v26a15.3 15.3 0 0 1-15.3 15.3H422a15.3 15.3 0 0 1-15.3-15.3v-26h-.01z"
        fill="#be7c5e"
      />
      <path d="M406.76 586.74a45.69 45.69 0 0 0 31.75.09v-3.9h-31.75z" opacity={0.1} />
      <circle cx={422.68} cy={543.37} r={45.5} fill="#be7c5e" />
      <path d="M379.18 526.09h86.77s-7.41-35-40.21-32.8-46.56 32.8-46.56 32.8z" fill="#333" />
      <ellipse cx={378.12} cy={541.43} rx={4.23} ry={7.94} fill="#be7c5e" />
      <ellipse cx={467.01} cy={541.43} rx={4.23} ry={7.94} fill="#be7c5e" />
      <path d="M379.18 527.26h86.77s-7.41-35-40.21-32.8-46.56 32.8-46.56 32.8z" opacity={0.1} />
      <path
        fill="none"
        stroke={primaryColor}
        strokeMiterlimit={10}
        strokeWidth={2}
        strokeDasharray="12"
        d="M672.1 240.44v382.81H569.4M139.91 380.49v242.76h149.38"
      />
      <circle cx={137.34} cy={379.66} r={36.52} fill="url(#prefix__f)" opacity={0.5} />
      <circle cx={137.34} cy={379.66} r={34.37} fill="#69f0ae" />
      <path fill="#fff" d="M122.42 375.08l12.89 11.81 18.25-26.85 6.45 5.37-24.7 32.22-18.26-20.4 5.37-2.15z" />
      <circle cx={677.83} cy={223.01} r={36.52} fill="url(#prefix__g)" opacity={0.5} />
      <circle cx={677.83} cy={223.01} r={34.37} fill="#69f0ae" />
      <path fill="#fff" d="M662.91 218.43l12.89 11.81 18.26-26.85 6.44 5.37-24.7 32.22-18.26-20.41 5.37-2.14z" />
      <circle cx={425.74} cy={697.11} r={36.52} fill="url(#prefix__h)" opacity={0.5} />
      <circle cx={425.74} cy={697.11} r={34.37} fill="#69f0ae" />
      <path fill="#fff" d="M410.82 692.53l12.89 11.81 18.26-26.85 6.44 5.37-24.7 32.22-18.26-20.4 5.37-2.15z" />
    </svg>
  );
};

UndrawConnected.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawConnected;
