import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPhotos = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 837.99 773.52" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={510.79} y1={662.26} x2={510.79} y2={179.29} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={648.13}
          y1={772.62}
          x2={648.13}
          y2={93.76}
          gradientTransform="rotate(90 641.7 434.57)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__c" x1={364.83} y1={773.52} x2={364.83} y2={94.66} xlinkHref="#prefix__a" />
        <clipPath id="prefix__d" transform="translate(-147.54 -63.24)">
          <path fill="url(#prefix__a)" d="M243.97 179.29H777.6v482.97H243.97z" />
        </clipPath>
        <linearGradient id="prefix__e" x1={551.85} y1={711.91} x2={551.85} y2={333.23} xlinkHref="#prefix__a" />
        <clipPath id="prefix__f" transform="translate(-147.54 -63.24)">
          <path data-name="<Rectangle>" fill="#fff" d="M247.91 183.23h526.88v469.46H247.91z" />
        </clipPath>
      </defs>
      <path transform="rotate(-81.96 532.894 494.31)" fill="url(#prefix__b)" d="M303.64 143.1H982.5v595.81H303.64z" />
      <path fill="#fff" d="M162.508 655.324L253.519 11.01l576.13 81.38-91.01 644.314z" />
      <path
        data-name="<Rectangle>"
        fill={primaryColor}
        d="M277.611 29.754l521.701 73.692-65.66 464.846L211.95 494.6z"
      />
      <path
        data-name="<Rectangle>"
        fill="none"
        stroke={primaryColor}
        strokeMiterlimit={10}
        strokeWidth={5}
        d="M277.611 29.754l521.701 73.692-65.66 464.846L211.95 494.6z"
      />
      <path fill="url(#prefix__c)" d="M66.92 94.66h595.81v678.86H66.92z" />
      <path fill="#fff" d="M73.91 104.8h581.85v650.71H73.91z" />
      <path fill="url(#prefix__a)" d="M96.43 116.05h533.63v482.97H96.43z" />
      <g clipPath="url(#prefix__d)">
        <path
          d="M358.85 459c17.44 19.24 31.75 43 55 54.18 33.73 16.24 74.78-.11 102.56-25.42s47.25-58.7 73.5-85.66c75.33-77.38 203.3-89.22 297.3-37 13.42 7.45 26.46 16.25 35.94 28.44 12.33 15.86 17.64 36.09 21.61 55.89a585 585 0 0 1 11.07 134.52c-1 30.69-6.84 65.43-32.12 82.25-8 5.31-17.23 8.27-26.39 11-135.88 40.07-280 37.32-421.39 31.3-105.4-4.49-212-10.85-312.67-43-4.63-1.48-9.53-3.21-12.51-7.1-3.37-4.4-3.46-10.48-3-16 1.45-18.27 7-35.91 11.21-53.74a364.51 364.51 0 0 0 8.3-113.43c-2.81-33.67-21.67-62.13 17.27-71.55 61.06-14.88 132.24 8.87 174.32 55.32z"
          transform="translate(-147.54 -63.24)"
          fill="url(#prefix__e)"
        />
      </g>
      <path data-name="<Rectangle>" fill="#fff" d="M100.37 119.99h526.88v469.46H100.37z" />
      <g clipPath="url(#prefix__f)">
        <path
          d="M213.79 391.85c17.22 18.7 31.34 41.78 54.31 52.66 33.3 15.78 73.83-.1 101.26-24.71s46.65-57.06 72.57-83.26c74.38-75.21 200.73-86.73 293.53-36 13.25 7.25 26.13 15.8 35.49 27.64 12.18 15.41 17.41 35.08 21.33 54.33a560.08 560.08 0 0 1 10.93 130.75c-1 29.83-6.75 63.6-31.72 80-7.88 5.16-17 8-26.05 10.66-134.16 39-276.48 36.28-416.06 30.42-104.05-4.38-209.33-10.58-308.7-41.79-4.57-1.44-9.41-3.12-12.35-6.9-3.33-4.28-3.42-10.19-3-15.59 1.44-17.76 6.93-34.9 11.07-52.24a349 349 0 0 0 8.19-110.26c-2.77-32.72-21.39-60.39 17.05-69.55 60.33-14.37 130.61 8.75 172.15 53.84z"
          fill="#bdbdbd"
        />
      </g>
      <circle cx={165.66} cy={185.29} r={38.28} fill="#ff5252" />
      <path
        fill={primaryColor}
        stroke={primaryColor}
        strokeMiterlimit={10}
        strokeWidth={5}
        d="M448.24 435.22h18.01v138.47h-18.01z"
      />
      <path
        fill={primaryColor}
        stroke={primaryColor}
        strokeMiterlimit={10}
        strokeWidth={5}
        d="M516.5 429.52l-17.06-10.5 14.65 2.61-8.29-27.08-20.06-12.35 17.38 3.6-11.69-38.17-19.55-12.04 16.79 3-11.26-36.77-19.9-12.25 17.08 3.05-17.34-56.67-12.54 41.63 12.54-4.48-14.72 11.73-9.1 30.25 23.82-5.95-28.06 20.04-9.78 32.48 25.45-6.36-29.98 21.42-7.56 25.12 19.53-4.89-23.01 16.44-13.02 43.23h133.97l-8.29-27.09z"
      />
      <path fill={primaryColor} d="M73.91 671.08h581.85v84.44H73.91z" />
    </svg>
  );
};

UndrawPhotos.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPhotos;
