import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawMail = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 798.82 755.15" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={589.65}
          y1={790.71}
          x2={589.65}
          y2={501.48}
          gradientTransform="translate(.01 -.01)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={411.34} y1={295.04} x2={411.34} y2={145.7} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__d"
          x1={545.52}
          y1={654.39}
          x2={545.52}
          y2={72.43}
          gradientTransform="translate(-198.33 -72.44)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__e" x1={725.88} y1={600.13} x2={725.88} y2={322.86} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__f"
          x1={637.94}
          y1={827.57}
          x2={637.94}
          y2={758.57}
          gradientTransform="translate(-198.33 -72.44)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__b" x1={544.65} y1={346} x2={544.65} y2={205.86} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__g" x1={544.65} y1={339.86} x2={544.65} y2={212} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__h"
          x1={551.34}
          y1={291.95}
          x2={551.34}
          y2={217.12}
          gradientTransform="rotate(.13 32405.658 -87007.424)"
          xlinkHref="#prefix__b"
        />
        <linearGradient id="prefix__i" x1={396.05} y1={399.86} x2={396.05} y2={262.83} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={386.87} y1={501.4} x2={386.87} y2={378} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={382.07} y1={603.69} x2={382.07} y2={494.16} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={347.18} y1={384.57} x2={347.18} y2={323.57} xlinkHref="#prefix__b" />
        <linearGradient
          id="prefix__m"
          x1={958.8}
          y1={334.16}
          x2={958.8}
          y2={269.01}
          gradientTransform="rotate(32.36 1024.203 -101.538)"
          xlinkHref="#prefix__a"
        />
      </defs>
      <path d="M23.66 448.57s-.68-2-1.78-5.72" fill="none" stroke="#69f0ae" strokeMiterlimit={10} strokeWidth={9} />
      <path
        d="M18.66 431.25c-24.31-93.6-100.1-524.98 659.66-255.68"
        fill="none"
        stroke="#69f0ae"
        strokeMiterlimit={10}
        strokeWidth={9}
        strokeDasharray="12.04 12.04"
      />
      <path d="M684.01 177.57l5.65 2" fill="none" stroke="#69f0ae" strokeMiterlimit={10} strokeWidth={9} />
      <path
        d="M794.94 582.69a81.21 81.21 0 0 0-161-15.14l-249.59-6.77 2.74 42.88s-35.59 82.12 151.46 104v83h216.24v-138a81.16 81.16 0 0 0 40.15-69.97z"
        transform="translate(-198.34 -72.43)"
        fill="url(#prefix__a)"
      />
      <path d="M197.32 533.03s-34.08 78.64 145.05 99.62v79.52h207.09v-210.6l-354.8-9.61z" fill="#f6b9ad" />
      <path
        d="M499.16 277.29a38.18 38.18 0 0 1-52.5 11.93l-111.19-73.27a38.18 38.18 0 0 1-11.93-52.5A38.18 38.18 0 0 1 376 151.52l111.19 73.27a38.18 38.18 0 0 1 11.97 52.5z"
        transform="translate(-198.34 -72.43)"
        fill="url(#prefix__c)"
      />
      <path
        d="M294.66 200.85a35.49 35.49 0 0 1-48.8 11.09l-103.39-68.11a35.49 35.49 0 0 1-11.09-48.8 35.49 35.49 0 0 1 48.8-11.09l103.37 68.12a35.49 35.49 0 0 1 11.11 48.79z"
        fill="#f6b9ad"
      />
      <circle cx={510.14} cy={512.94} r={77.77} fill="#f6b9ad" />
      <rect x={185.97} width={322.42} height={581.96} rx={12.25} ry={12.25} fill="url(#prefix__d)" />
      <rect x={190.33} y={7.87} width={313.7} height={566.24} rx={13.64} ry={13.64} fill="#fff" />
      <path
        d="M425.99 22.06a25.43 25.43 0 0 1-25.07 21.63H292.58a25.43 25.43 0 0 1-25.06-21.63h-57.4a11.91 11.91 0 0 0-11.92 11.91v514a11.91 11.91 0 0 0 11.91 11.92h274.14a11.91 11.91 0 0 0 11.92-11.91v-514a11.91 11.91 0 0 0-11.91-11.92z"
        fill={primaryColor}
      />
      <rect x={312.67} y={28.84} width={69.91} height={4.37} rx={2} ry={2} fill="#dbdbdb" />
      <circle cx={397.43} cy={30.59} r={2.62} fill="#dbdbdb" />
      <path
        d="M758.76 599.08c-22.57 5.22-38.06-9.5-43.28-32.06l-51.86-192.56a42.24 42.24 0 0 1 31.55-50.51 42.24 42.24 0 0 1 50.51 31.55L788 553c5.22 22.6-6.68 40.86-29.24 46.08z"
        transform="translate(-198.34 -72.43)"
        fill="url(#prefix__e)"
      />
      <rect
        x={693.86}
        y={330.01}
        width={70.78}
        height={282.61}
        rx={35.39}
        ry={35.39}
        transform="rotate(-13.01 312.775 1304.98)"
        fill="#f6b9ad"
      />
      <path fill="url(#prefix__f)" d="M291.59 686.15h296v69h-296z" />
      <path fill="#ff8976" d="M299.59 694.15h280v54h-280z" />
      <path
        d="M611.56 254.81l-22.94-17.27 10-13-16.69-13.1-10.43 13.22-23.59-17.75a5.19 5.19 0 0 0-6.23 0l-62.53 46.55c-2.37 2-4.59 4.29-4.61 9.53h-.07l-.16 71.72v3.19a7.82 7.82 0 0 0 7.8 7.84h3.08l59.29.13 62.38.14a7.82 7.82 0 0 0 7.84-7.8l.17-74.78h.13c0-5.25-1.07-6.62-3.44-8.62z"
        transform="translate(-198.34 -72.43)"
        fill="url(#prefix__b)"
      />
      <path
        d="M608.84 264.52c0-4.78-1-6-3.14-7.85L547.63 213a4.74 4.74 0 0 0-5.69 0l-57.05 42.48a10.06 10.06 0 0 0-4.2 8.69h-.06l-.15 65.44v2.91a7.14 7.14 0 0 0 7.12 7.15h2.81l54.1.12 56.91.13a7.14 7.14 0 0 0 7.15-7.12l.15-68.23z"
        transform="translate(-198.34 -72.43)"
        fill="url(#prefix__g)"
      />
      <path
        d="M283.339 192.002l125.83.286-.158 69.23a4.18 4.18 0 0 1-4.19 4.17l-117-.266a4.61 4.61 0 0 1-4.599-4.62l.157-68.8z"
        fill={primaryColor}
      />
      <path
        d="M283.339 192.002l125.83.286-.158 69.23a4.18 4.18 0 0 1-4.19 4.17l-117-.266a4.61 4.61 0 0 1-4.599-4.62l.157-68.8z"
        fill="#fff"
        opacity={0.2}
      />
      <path d="M283.35 191.98l-.14 63.59a9.77 9.77 0 0 0 9.75 9.79l106.29.24" fill="#f5f5f5" />
      <path d="M409.19 192.26l-.14 63.63a9.77 9.77 0 0 1-9.79 9.75l-106.29-.24" fill="#fff" />
      <path
        d="M343.59 142.23l-56 41.3a9.75 9.75 0 0 0-4.13 8.45l125.89.4c0-4.65-1-5.87-3.08-7.63l-57.05-42.5a4.69 4.69 0 0 0-5.63-.02z"
        fill={primaryColor}
      />
      <path
        d="M343.59 142.23l-56 41.3a9.75 9.75 0 0 0-4.13 8.45l125.89.4c0-4.65-1-5.87-3.08-7.63l-57.05-42.5a4.69 4.69 0 0 0-5.63-.02z"
        opacity={0.2}
      />
      <path
        fill="url(#prefix__h)"
        d="M395.56 156.6l-15.23-11.94-36.81 46.62-19.78-15.34-12.39 15.75 28.79 21.99 7.14 5.73 48.28-62.81z"
      />
      <path
        fill="#fff"
        d="M394.44 156.31l-13.8-10.58-36.57 47.69-20.31-15.57-10.59 13.8 27.21 20.84 6.98 5.23 47.08-61.41z"
      />
      <path
        d="M475.28 382.24a37.9 37.9 0 0 1-52.11 11.84l-94.5-61.53a37.9 37.9 0 0 1-11.84-52.11 37.9 37.9 0 0 1 52.11-11.84l94.5 61.53a37.9 37.9 0 0 1 11.84 52.11z"
        transform="translate(-198.34 -72.43)"
        fill="url(#prefix__i)"
      />
      <path
        d="M271.92 306.57a35.49 35.49 0 0 1-48.8 11.09l-88.51-57.63a35.49 35.49 0 0 1-11.09-48.8 35.49 35.49 0 0 1 48.8-11.09l88.51 57.63a35.49 35.49 0 0 1 11.09 48.8z"
        fill="#f6b9ad"
      />
      <path
        d="M456 483.86a37.72 37.72 0 0 1-51.87 11.79l-74.58-48.25a37.72 37.72 0 0 1-11.79-51.87 37.72 37.72 0 0 1 51.87-11.79L444.2 432a37.72 37.72 0 0 1 11.8 51.86z"
        transform="translate(-198.34 -72.43)"
        fill="url(#prefix__j)"
      />
      <path
        d="M437.28 586a38.06 38.06 0 0 1-52.34 11.9l-46.19-33.7a38.06 38.06 0 0 1-11.9-52.34A38.06 38.06 0 0 1 379.19 500l46.19 33.69a38.06 38.06 0 0 1 11.9 52.31z"
        transform="translate(-198.34 -72.43)"
        fill="url(#prefix__k)"
      />
      <path
        d="M235.21 511.06a35.49 35.49 0 0 1-48.8 11.09l-43.07-31.42a35.49 35.49 0 0 1-11.09-48.8 35.49 35.49 0 0 1 48.8-11.09l43.07 31.42a35.49 35.49 0 0 1 11.09 48.8z"
        fill="#f6b9ad"
      />
      <path fill="url(#prefix__l)" d="M245.18 323.57h204v61h-204z" />
      <path fill="#69f0ae" d="M252.18 329.57h190v44h-190z" />
      <path
        fill="url(#prefix__m)"
        d="M795.23 214.52l3.59.56-.56-.53h.3l-.47-.16L733 152.66l-15.8 24.93-13.14 22.74 6.09.95-2.7 12.32 87.78.92z"
      />
      <path fill={primaryColor} d="M719.93 178.89l-12 20.81 88 14.33-56.68-39.47-19.32 4.33z" />
      <path opacity={0.2} d="M719.93 178.89l-12 20.81 88 14.33-56.68-39.47-19.32 4.33z" />
      <path fill={primaryColor} d="M734.38 156.09l61.55 57.94-76-35.14 14.45-22.8z" />
      <path fill={primaryColor} d="M711.17 211.93l84.52 1.61-78.9-28.02-5.62 26.41z" />
      <path
        d="M253.56 408.82a35.49 35.49 0 0 1-48.8 11.09l-70.16-45.4a35.49 35.49 0 0 1-11.09-48.8 35.49 35.49 0 0 1 48.8-11.14l70.16 45.4a35.49 35.49 0 0 1 11.09 48.85z"
        fill="#f6b9ad"
      />
    </svg>
  );
};

UndrawMail.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMail;
