import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawBrowserStats = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 901.27 699.5" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={551.11}
          y1={673.8}
          x2={551.11}
          y2={209.77}
          gradientTransform="rotate(-18.05 215.19 770.801)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={343.1}
          y1={301.6}
          x2={343.1}
          y2={283.2}
          gradientTransform="rotate(.03 -160487.995 -9583.676)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__c"
          x1={259.93}
          y1={498.37}
          x2={259.93}
          y2={451.06}
          gradientTransform="rotate(.03 -192619.7 106257.71)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__d"
          x1={259.89}
          y1={582.27}
          x2={259.89}
          y2={534.96}
          gradientTransform="rotate(.03 -184738.065 155969.286)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__e" x1={299.41} y1={322.19} x2={299.41} y2={100.25} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={981.21} y1={492.23} x2={981.21} y2={304.03} xlinkHref="#prefix__a" />
      </defs>
      <path
        fill="url(#prefix__a)"
        d="M38.44 238.68l8.72 26.8 134.72 414.17 644.9-210.45L692.06 55.03l-8.71-26.8L38.44 238.68z"
      />
      <path
        fill={primaryColor}
        opacity={0.7}
        d="M19.59 281.74l8.25 25.39L155.47 699.5l623.89-203.59-127.63-392.38-8.25-25.38L19.59 281.74z"
      />
      <path fill="#f5f5f5" d="M51.48 242.277L674.936 38.833l8.274 25.355L59.754 267.632z" />
      <path fill="#fff" d="M59.835 267.47l624.08-203.017 127.64 392.371-624.08 203.016z" />
      <path d="M77.42 247.63a7.62 7.62 0 1 1-9.61-4.89 7.63 7.63 0 0 1 9.61 4.89z" fill="#ff5252" />
      <path d="M97.7 241.01a7.62 7.62 0 1 1-9.61-4.89 7.63 7.63 0 0 1 9.61 4.89z" fill="#ff0" />
      <path d="M117.99 234.38a7.62 7.62 0 1 1-9.61-4.89 7.63 7.63 0 0 1 9.61 4.89z" fill="#69f0ae" />
      <path transform="rotate(-18.07 -51.935 796.181)" fill="url(#prefix__b)" d="M232.73 367.44H443.1v18.3H232.73z" />
      <path
        fill={primaryColor}
        d="M86.665 300.775l198.55-64.78 4.73 14.498-198.55 64.78zM482.315 171.684l198.549-64.78 4.73 14.497-198.55 64.781z"
      />
      <path opacity={0.2} d="M482.315 171.684l198.549-64.78 4.73 14.497-198.55 64.781z" />
      <path fill={primaryColor} opacity={0.2} d="M118.279 397.965l8.698-2.838 2.838 8.698-8.698 2.838z" />
      <path fill={primaryColor} opacity={0.5} d="M708.127 205.515l8.699-2.838 2.838 8.698-8.699 2.839z" />
      <path
        d="M176.23 383.85a16.77 16.77 0 1 1-21.13-10.75 16.79 16.79 0 0 1 21.13 10.75z"
        fill={primaryColor}
        opacity={0.2}
      />
      <path
        d="M695.05 214.55a16.77 16.77 0 1 1-21.13-10.8 16.79 16.79 0 0 1 21.13 10.8zM187.844 375.266l89.849-29.315 2.838 8.698-89.849 29.315z"
        fill={primaryColor}
        opacity={0.5}
      />
      <path fill={primaryColor} opacity={0.8} d="M213.79 455.052l89.849-29.315 2.838 8.698-89.849 29.315z" />
      <path fill={primaryColor} opacity={0.7} d="M336.975 414.854l89.849-29.315 2.838 8.698-89.849 29.315z" />
      <path fill={primaryColor} opacity={0.5} d="M460.164 374.668l89.848-29.315 2.838 8.699-89.848 29.315z" />
      <path fill={primaryColor} opacity={0.2} d="M583.358 334.47l89.849-29.315 2.838 8.698-89.848 29.315z" />
      <path fill={primaryColor} opacity={0.8} d="M239.736 534.838l89.849-29.315 2.838 8.698-89.849 29.315z" />
      <path fill={primaryColor} opacity={0.7} d="M362.921 494.64l89.849-29.315 2.838 8.698-89.849 29.315z" />
      <path fill={primaryColor} opacity={0.5} d="M486.11 454.454l89.848-29.315 2.838 8.699-89.848 29.315z" />
      <path
        fill={primaryColor}
        opacity={0.2}
        d="M609.305 414.256l89.848-29.315 2.838 8.698-89.848 29.315zM311.029 335.068l89.848-29.315 2.839 8.698-89.849 29.315z"
      />
      <path fill="#64ffda" d="M434.217 294.882l89.849-29.315 2.838 8.699-89.849 29.315z" />
      <path fill={primaryColor} opacity={0.2} d="M557.403 254.697l89.848-29.315 2.838 8.699-89.848 29.315z" />
      <path transform="rotate(-18.07 -74.544 995.34)" fill="url(#prefix__c)" d="M291.69 552.06h47.26v47.29h-47.26z" />
      <path transform="rotate(-18.07 -48.577 1075.135)" fill="url(#prefix__d)" d="M317.64 631.84h47.26v47.29h-47.26z" />
      <path
        fill={primaryColor}
        d="M139.018 461.792l40.575-13.238 13.248 40.603-40.575 13.239zM164.964 541.578l40.575-13.238 13.248 40.603-40.575 13.239z"
      />
      <path
        d="M409.59 100.25l-260.22 84.92 39.87 122.57 37.07-12.1c.14 5.4-.11 22.34-8.67 26.55 0 0 18.15.59 29.4-33.32l202.41-66.05z"
        transform="translate(-149.37 -100.25)"
        fill="url(#prefix__e)"
      />
      <path
        d="M254.54 6.11L8.17 86.51l37.75 116 35.1-11.45c.14 5.12-.11 21.15-8.21 25.14 0 0 17.18.55 27.84-31.55l191.64-62.5z"
        fill={primaryColor}
      />
      <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M32.71 92.94h0" />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0 4.07"
        d="M33.97 96.8l24.54 75.43"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M59.14 174.17h0M61.01 182.38l204.34-66.68"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.3}
        d="M65.52 156.84l172.46-56.28M58.45 135.08L230.9 78.81M51.37 113.32l172.45-56.27M44.29 91.57l172.46-56.28"
      />
      <path
        d="M100.79 147.66a3.58 3.58 0 0 1-.07-1 6.15 6.15 0 0 1 5.18-5.6l.74-.15c4.84-1.21 9.81-3 13.07-6.77 5.12-6 4.53-15.11 3.65-22.49a12.85 12.85 0 0 1 .93-6.85c3.17-7 10.15-5.18 16.1-5.48a22.88 22.88 0 0 0 20.73-18.3c.74-4.2.27-8.53.87-12.75a25.23 25.23 0 0 1 8.11-15.09c4.5-4 10.33-6.28 15.93-8.23a39.6 39.6 0 0 1 13.91-2.29h.25a20.34 20.34 0 0 1 18.23 13.12c1.24 3.21 2.3 6.49 3.41 9.89 6.13 18.86 11.8 36.26 18.88 58.1-8.7 2.76-29.1 9.41-31.89 10.32l-30.43 9.93c-20.29 6.62-39.69 13.58-62.32 20.34-4.67 1.39 0 0-10.14 3.31-1.8-5.48-1.89-5.74-5.14-20.01z"
        fill="#fff"
        opacity={0.2}
      />
      <path fill={primaryColor} opacity={0.1} d="M71.186 280.702l246.192-80.337 1.891 5.795-246.192 80.337z" />
      <path
        d="M1050.63 467.2L997.56 304l-76.72 25 7.56 23.25c-3.38.09-14-.07-16.62-5.43 0 0-.37 11.38 20.85 18.43l41.29 126.92z"
        transform="translate(-149.37 -100.25)"
        fill="url(#prefix__f)"
      />
      <path
        d="M896.17 362.2l-49.31-151.59-71.23 23.26 7 21.6c-3.14.08-13-.06-15.44-5 0 0-.34 10.57 19.37 17.12l38.36 117.92z"
        fill={primaryColor}
      />
      <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M842.91 225.71h0" />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="0 4.04"
        d="M839.07 226.96l-44.13 14.41"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M793.02 241.99h0M787.97 243.14l40.9 125.74"
      />
      <path
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.3}
        d="M803.66 245.92l34.52 106.11M817.02 241.56l34.52 106.11M830.39 237.2l34.51 106.11M843.75 232.84l34.52 106.11"
      />
      <path
        d="M809.28 267.63a2.19 2.19 0 0 1 .59 0 3.78 3.78 0 0 1 3.44 3.19c0 .19.06.34.09.45.74 3 1.83 6 4.15 8 3.66 3.15 9.28 2.79 13.81 2.24a7.87 7.87 0 0 1 4.21.57c4.28 2 3.18 6.25 3.36 9.9a14.05 14.05 0 0 0 11.23 12.77c2.58.46 5.24.16 7.83.54a15.47 15.47 0 0 1 9.27 5c2.46 2.77 3.86 6.35 5.05 9.8a24.4 24.4 0 0 1 1.4 8.56v.1a12.53 12.53 0 0 1-8.06 11.22c-2 .76-4 1.42-6.08 2.1l-35.68 11.68c-1.69-5.36-5.77-17.91-6.33-19.62-2.13-6.54-4-12.18-6.09-18.73-4.06-12.48-8.33-24.42-12.47-38.34-.85-2.87 0 0-2-6.24 3.36-1.14 3.52-1.19 12.28-3.19z"
        fill="#fff"
        opacity={0.2}
      />
      <path fill={primaryColor} opacity={0.1} d="M712.057 254.784l7.244-2.363 49.207 150.815-7.244 2.364z" />
    </svg>
  );
};

UndrawBrowserStats.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawBrowserStats;
