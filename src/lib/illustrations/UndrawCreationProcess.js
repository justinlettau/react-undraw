import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCreationProcess = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 888 656.53" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={444} y1={377.21} x2={444} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={565.58} y1={184.63} x2={565.58} y2={139.97} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={296.27} y1={331.11} x2={296.27} y2={286.45} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={698.58} y1={174.13} x2={698.58} y2={129.47} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={565.74} y1={302.42} x2={565.74} y2={257.75} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={272.78} y1={77.69} x2={272.78} y2={33.02} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={721.33} y1={67.68} x2={721.33} y2={23.02} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={830.51} y1={228.72} x2={830.51} y2={184.06} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={107.19} y1={61.31} x2={107.19} y2={16.65} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={627.61} y1={100.82} x2={627.61} y2={56.16} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={348.29} y1={195.45} x2={348.29} y2={150.78} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={503.87} y1={244.58} x2={503.87} y2={199.91} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={557.8} y1={77.88} x2={557.8} y2={33.22} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={638.78} y1={273.5} x2={638.78} y2={228.83} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={360.37} y1={77.88} x2={360.37} y2={33.22} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={421.32} y1={321.72} x2={421.32} y2={277.06} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__q" x1={428.7} y1={336.02} x2={428.7} y2={260.98} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__r" x1={329.22} y1={778.26} x2={329.22} y2={215.99} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__s" x1={494.8} y1={139.13} x2={494.8} y2={94.47} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__t" x1={261.88} y1={153.69} x2={261.88} y2={109.02} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__u" x1={830.53} y1={110.92} x2={830.53} y2={66.26} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__v" x1={744.09} y1={322.01} x2={744.09} y2={277.34} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M0 0h888v377.21H0z" />
      <path fill="#eee" d="M9.93 2.66h869.39V372.7H9.93z" />
      <path fill="url(#prefix__b)" d="M542.51 139.97h46.13v44.66h-46.13z" />
      <path fill="#f5f5f5" d="M543.31 140.74h44.54v43.12h-44.54z" />
      <path fill="url(#prefix__c)" d="M273.2 286.45h46.13v44.66H273.2z" />
      <path fill="#f5f5f5" d="M274 287.22h44.54v43.12H274z" />
      <path fill="url(#prefix__d)" d="M675.52 129.47h46.13v44.66h-46.13z" />
      <path fill="#f5f5f5" d="M676.31 130.24h44.54v43.12h-44.54z" />
      <path fill="url(#prefix__e)" d="M542.68 257.75h46.13v44.66h-46.13z" />
      <path fill="#f5f5f5" d="M543.47 258.52h44.54v43.12h-44.54z" />
      <path fill="url(#prefix__f)" d="M249.71 33.02h46.13v44.66h-46.13z" />
      <path fill="#f5f5f5" d="M250.51 33.79h44.54v43.12h-44.54z" />
      <path fill="url(#prefix__g)" d="M698.26 23.02h46.13v44.66h-46.13z" />
      <path fill="#f5f5f5" d="M699.06 23.78h44.54V66.9h-44.54z" />
      <path fill="url(#prefix__h)" d="M807.44 184.06h46.13v44.66h-46.13z" />
      <path fill="#f5f5f5" d="M808.24 184.83h44.54v43.12h-44.54z" />
      <path fill="url(#prefix__i)" d="M84.12 16.65h46.13v44.66H84.12z" />
      <path fill="#f5f5f5" d="M84.92 17.42h44.54v43.12H84.92z" />
      <path fill="url(#prefix__j)" d="M604.54 56.16h46.13v44.66h-46.13z" />
      <path fill="#7cfcff" d="M605.34 56.93h44.54v43.12h-44.54z" />
      <path fill="url(#prefix__k)" d="M325.22 150.78h46.13v44.66h-46.13z" />
      <path fill="#7cfcff" d="M326.02 151.55h44.54v43.12h-44.54z" />
      <path fill="url(#prefix__l)" d="M480.8 199.91h46.13v44.66H480.8z" />
      <path fill="#7cfcff" d="M481.6 200.68h44.54v43.12H481.6z" />
      <path fill="url(#prefix__m)" d="M534.73 33.22h46.13v44.66h-46.13z" />
      <path fill="#ffffa5" d="M535.53 33.99h44.54v43.12h-44.54z" />
      <path fill="url(#prefix__n)" d="M615.71 228.83h46.13v44.66h-46.13z" />
      <path fill="#ffffa5" d="M616.5 229.6h44.54v43.12H616.5z" />
      <path fill="url(#prefix__o)" d="M337.3 33.22h46.13v44.66H337.3z" />
      <path fill="#ffffa5" d="M338.09 33.99h44.54v43.12h-44.54z" />
      <path fill="url(#prefix__p)" d="M398.26 277.06h46.13v44.66h-46.13z" />
      <path fill="#ffffa5" d="M399.05 277.82h44.54v43.12h-44.54z" />
      <path
        d="M434.68 270.18v2.66l-7.71-.67v16.63l-20.24 28.66-1.28-.73-2.75 3.33 26.14 16v-6l-1.47-.83c1.83-6.6 9.32-32.92 13.6-36.41 0 0 7.71-5.32 11.91-12.64s2.12-32.61-18.2-10z"
        transform="translate(-156 -121.74)"
        fill="url(#prefix__q)"
      />
      <path
        d="M393.76 332.91s-28-5.72-43.4-11.75a67.69 67.69 0 0 0-22.56-4.67L311 316l-8.38-4.86 2.62-6.54c.26-.11.52-.23.77-.36l.24-1.4a40.87 40.87 0 0 0 4-1.16c-.41 3.26 20.08-13.6 20.08-13.6l-.61.31-.08-1-.23.12a37.69 37.69 0 0 0 .68-43.72l.65-.58V227l-.69-.59v-.07c-13.86-12.48-32.92-11.48-46.7-8.33A24.76 24.76 0 0 0 264 239.28c-18.39 4.85-12.25 14.17-12.54 17.78-1.43 17.56 4.42 27.89 10.78 33.87a33.24 33.24 0 0 0 9.13 6.43l-4 7.78h-1.18l-3.28 9.32h-.16l-3.57 2.34c-22.18 14.4-33.29 40.1-28.48 65.46s20 37.73 13.76 75.47c-2.08 12.68-1.21 20.44.87 25.16a45.09 45.09 0 0 1-4.33 14.73c-7.57 15.3-7.57 31.26 2.06 49.88l2.75 96.43s3.44 45.22 0 54.53 1.38 53.87 1.38 53.87h-.69v24.61l51.6 1.33s12-5.52 14.19-9.68l25.91 7.7s28.51-4.75 11.83-11.31c-12.45-4.9-15.54-11.88-16.31-15.12l40.78-113.25s-7.57-96.43-35.09-129.68l-2.79-19.61h.38l5.85-114.49.48.06h-.14a135.81 135.81 0 0 0 45.41-.68 72.66 72.66 0 0 0 13.15-3.56l.78-.3h.16a40.2 40.2 0 0 0 9-4.94l17.2-25.4-26.19-17.43zm-108 389.49l13.05-88.4v-45.27l23.39 47.22L297 738.27l-1.32-.36-5.81 20.15a13.2 13.2 0 0 1-4.17-5.73z"
        transform="translate(-156 -121.74)"
        fill="url(#prefix__r)"
      />
      <path fill="url(#prefix__s)" d="M471.73 94.47h46.13v44.66h-46.13z" />
      <path fill="#ff69b4" d="M472.53 95.23h44.54v43.12h-44.54z" />
      <path opacity={0.1} d="M244.27 112.66h46.13v44.66h-46.13z" />
      <path fill="url(#prefix__t)" d="M238.82 109.02h46.13v44.66h-46.13z" />
      <path fill="#ff69b4" d="M239.61 109.79h44.54v43.12h-44.54z" />
      <path fill="url(#prefix__u)" d="M807.46 66.26h46.13v44.66h-46.13z" />
      <path fill="#ff69b4" d="M808.26 67.03h44.54v43.12h-44.54z" />
      <path fill="url(#prefix__v)" d="M721.03 277.34h46.13V322h-46.13z" />
      <path fill="#ff69b4" d="M721.82 278.11h44.54v43.12h-44.54z" />
      <path fill="#333" d="M72.16 220.31l6.07 35.75" />
      <path
        d="M266.7 153.09v16.42l-19.56 28.66 19.56 12.73s8.7-33.5 13.38-37.45c0 0 7.36-5.26 11.37-12.48s2-32.19-17.39-9.85v1.72zM110.95 192.26l7.74-15.49a2.87 2.87 0 0 1 2.42-1.58l29.42-1.5a2.87 2.87 0 0 1 2.82 3.9l-7.59 19.62a2.87 2.87 0 0 1-2.93 1.82l-29.57-2.63a2.87 2.87 0 0 1-2.31-4.14z"
        fill="#fda57d"
      />
      <path
        fill="#edeef9"
        d="M113.13 185.61l-5 14.65 51.31-1.84-19.71-11.82-26.6-.99zM243.53 200.39l2.63-3.28 22.33 13.14v5.91l-24.96-15.77z"
      />
      <path
        d="M92.61 345.72a48.81 48.81 0 0 1-3.47 30.07c-7.23 15.11-7.23 30.88 2 49.27l2.63 95.26s3.28 44.67 0 53.87 1.31 53.21 1.31 53.21h36.79v-29.56l12.48-87.37v-44.68l22.34 46.64L141 620.17l33.5 13.8 42-120.88s-7.23-95.26-33.5-128.1l-4.93-35.8z"
        fill={primaryColor}
      />
      <path d="M94.4 651.71V627.4h37.45s2.63 9.86 19.71 11.86-7.88 13.8-7.88 13.8z" fill="#333" />
      <path d="M134.85 636.57l6.52-23.42 36.07 10s-.11 10.2 15.81 16.68S182 651.06 182 651.06z" fill="#333" />
      <path
        d="M178.16 351.16l-85.55-3.46a47.86 47.86 0 0 1 .65 15.51c3.91 9.21 12.31 6.69 12.31 6.69l74.85-2.3z"
        opacity={0.1}
      />
      <path
        d="M109.84 194.8l-3.41 2.31a64.19 64.19 0 0 0-27.14 64.72s19.05 37.28 13.14 74.55 13.14 31.54 13.14 31.54l75.22-2.31 5.58-113.1s45.33 6.45 65.69-9.32l16.42-25.09-25-17.2-8.48 12.18s-26.76-5.65-41.44-11.61a62.77 62.77 0 0 0-21.56-4.61z"
        fill="#333"
      />
      <path
        d="M110.5 376.78s-4.6 23 21.68 61.1M186.7 252.61s31.53-10.51 45.33-10.51 11.5 6 11.5 6-22.01 9.77-56.83 4.51zM150.95 175l-12.55 1.5c-.4 0-.76.55-1 1.32 2.76 5 6.21 7.94 10 7.94a7.74 7.74 0 0 0 3.8-1.05l1-5.81c.27-1.94-.37-4.01-1.25-3.9z"
        opacity={0.1}
      />
      <circle cx={142.19} cy={146.14} r={38.32} fill="#fda57d" />
      <path
        d="M174.78 108.48v16l-1.93 1.77a6.63 6.63 0 0 0 1.93 11s-3.19 25.54-7.18 35.12c0 0-6.2.68-4.79-4 5.19-17.16-5.19-14-7.58-10.78s.4 11.57.4 11.57 7.58 14-32.33 10.78c0 0-26.34-5.59-23.55-41.11.28-3.56-5.59-12.77 12-17.56a24.17 24.17 0 0 1 18.47-21c13.12-3.13 31.32-4.12 44.56 8.21z"
        opacity={0.1}
      />
      <path
        d="M174.12 107.82v16l-1.93 1.77a6.63 6.63 0 0 0 1.93 11s-3.19 25.54-7.18 35.12c0 0-6.2.68-4.79-4 5.19-17.16-5.19-14-7.58-10.78s.4 11.57.4 11.57 7.58 14-32.33 10.78c0 0-26.34-5.59-23.55-41.11.28-3.56-5.59-12.77 12-17.56a24.17 24.17 0 0 1 18.47-21c13.13-3.13 31.32-4.12 44.56 8.21z"
        fill="#72351c"
      />
    </svg>
  );
};

UndrawCreationProcess.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCreationProcess;
