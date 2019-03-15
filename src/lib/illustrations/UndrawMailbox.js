import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawMailbox = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 733.51 728.97" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={383.47} y1={728.97} x2={383.47} y2={400.92} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={238.26} y1={361.82} x2={838.21} y2={361.82} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={465.73} y1={249.13} x2={465.73} y2={125.75} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__d"
          x1={264.33}
          y1={382.43}
          x2={264.33}
          y2={305.75}
          gradientTransform="matrix(0 -1 -1 0 760.81 597.66)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__e"
          x1={212.21}
          y1={392.96}
          x2={212.21}
          y2={316.28}
          gradientTransform="matrix(0 -1 -1 0 821.81 562.29)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__f"
          x1={295.6}
          y1={440.27}
          x2={295.6}
          y2={336.33}
          gradientTransform="matrix(0 -1 -1 0 768.63 669.04)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__g"
          x1={224.95}
          y1={454.54}
          x2={224.95}
          y2={350.6}
          gradientTransform="matrix(0 -1 -1 0 851.31 621.1)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__h"
          x1={627.39}
          y1={372.38}
          x2={627.39}
          y2={313.03}
          gradientTransform="matrix(-.65 .76 .76 .65 837.43 -649.66)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__i"
          x1={303.02}
          y1={618.34}
          x2={303.02}
          y2={531.38}
          gradientTransform="rotate(32.36 1049.232 -85.334)"
          xlinkHref="#prefix__a"
        />
      </defs>
      <path fill="url(#prefix__a)" d="M346.26 400.92h74.42v328.05h-74.42z" />
      <path fill="#eceff1" d="M353.11 400.92h62.67V723.1h-62.67z" />
      <path
        d="M779.59 228.64H444.43a88.94 88.94 0 0 0-33.43 7.45c-34.07 15.1-53.9 38.8-59.5 91.36v121.43l-88.81-.94c-17.86 0-24.39 28.08-24.39 47.06h599.91V290.93c0-34.4-26.21-62.29-58.62-62.29z"
        transform="translate(-185.78 -83.31)"
        fill="url(#prefix__b)"
      />
      <path d="M270.85 158.06h332.08a40.68 40.68 0 0 1 40.68 40.68v202.18H270.85V158.06z" fill={primaryColor} />
      <path
        d="M263 158.06a90.09 90.09 0 0 1 90.09 90.09v108.68A44.09 44.09 0 0 1 309 400.92h-92a44.09 44.09 0 0 1-44.09-44.09V248.15A90.09 90.09 0 0 1 263 158.06z"
        fill={primaryColor}
      />
      <path
        d="M263 158.06a90.09 90.09 0 0 1 90.09 90.09v108.68A44.09 44.09 0 0 1 309 400.92h-92a44.09 44.09 0 0 1-44.09-44.09V248.15A90.09 90.09 0 0 1 263 158.06z"
        opacity={0.2}
      />
      <path fill="url(#prefix__c)" d="M502.94 125.75h-74.42v123.38h33.78v-68.07h40.64v-55.31z" />
      <path fill="#ffcc80" d="M497.06 125.75h-62.67v113.59h23.5v-62.67h39.17v-50.92z" />
      <path transform="rotate(-83.06 276.792 396.563)" fill="url(#prefix__d)" d="M378.38 270.95h76.68v124.77h-76.68z" />
      <path fill="#faf8e4" d="M166.283 277.535l8.647-71.035 119.656 14.565-8.646 71.035z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M193.296 225.682l-15.228-1.854 1.371-11.267 15.228 1.854zM246.347 254.378l-58.458-7.115.445-3.653 58.458 7.115zM245.387 262.298l-42.626-5.188.296-2.433 42.626 5.189z" />
      </g>
      <path transform="rotate(-83.06 327.256 413.312)" fill="url(#prefix__e)" d="M428.85 287.7h76.68v124.77h-76.68z" />
      <path fill="#faf8e4" d="M216.749 294.29l8.646-71.037 119.657 14.565-8.647 71.036z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M243.77 242.437l-15.228-1.853 1.371-11.267 15.228 1.853zM296.821 271.134l-58.459-7.116.445-3.653 58.459 7.116zM295.84 279.052l-42.625-5.188.296-2.432 42.625 5.188z" />
      </g>
      <path transform="rotate(-83.06 240.401 436.673)" fill="url(#prefix__f)" d="M328.36 288.88H432.3V458H328.36z" />
      <path fill="#fff" d="M106.914 327.421l11.721-96.299 162.193 19.742-11.722 96.3z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M143.527 257.131l-20.637-2.512 1.858-15.267 20.638 2.512zM215.43 296.04l-79.244-9.646.603-4.953 79.245 9.646zM214.134 306.768l-57.784-7.033.402-3.306 57.784 7.034z" />
      </g>
      <path
        transform="rotate(-83.06 308.803 459.376)"
        fill="url(#prefix__g)"
        d="M396.77 311.59h103.94v169.12H396.77z"
      />
      <path fill="#fff" d="M175.312 350.135l11.722-96.299 162.193 19.742-11.722 96.3z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M211.933 279.841l-20.638-2.512 1.858-15.267 20.638 2.512zM283.836 318.75l-79.245-9.645.603-4.954 79.245 9.646zM282.538 329.479l-57.784-7.034.402-3.305 57.784 7.033z" />
      </g>
      <path
        d="M262.04 159.04a89.8 89.8 0 0 0-34.35 6.8 90.77 90.77 0 0 1 12.81-.92 90.09 90.09 0 0 1 90.09 90.09v143h21.54V249.13a90.09 90.09 0 0 0-90.09-90.09z"
        opacity={0.2}
      />
      <path d="M94.59 369.58h258.52v31.34H63.25a31.34 31.34 0 0 1 31.34-31.34z" fill={primaryColor} />
      <path d="M94.59 369.58h258.52v31.34H63.25a31.34 31.34 0 0 1 31.34-31.34z" fill="#fff" opacity={0.2} />
      <path
        fill="url(#prefix__h)"
        d="M657.37 70.58l-2.97 1.45.34-.61-.26.08.37-.27L694.87 0l20.46 17.45 17.56 16.25-5.04 2.46 5.66 9.99-76.14 24.43z"
      />
      <path fill={primaryColor} d="M713.31 19.31l16.04 14.88-72.72 36.15 38.7-49.6 17.98-1.43z" />
      <path opacity={0.2} d="M713.31 19.31l16.04 14.88-72.72 36.15 38.7-49.6 17.98-1.43z" />
      <path fill={primaryColor} d="M694.59 3.35l-37.96 66.99 56.68-51.03-18.72-15.96z" />
      <path fill={primaryColor} d="M729.82 45.7l-73.11 24.15 61.11-45.62 12 21.47z" />
      <path
        fill="url(#prefix__i)"
        d="M121.67 86.97l4.78.74-.74-.7h.41l-.64-.22L38.62 4.42 17.54 37.69 0 68.04l8.12 1.26-3.6 16.44 117.15 1.23z"
      />
      <path fill={primaryColor} d="M21.18 39.42L5.16 67.19 122.6 86.31 46.96 33.64l-25.78 5.78z" />
      <path opacity={0.2} d="M21.18 39.42L5.16 67.19 122.6 86.31 46.96 33.64l-25.78 5.78z" />
      <path fill={primaryColor} d="M40.47 8.99l82.13 77.32L21.18 39.42 40.47 8.99z" />
      <path fill={primaryColor} d="M9.49 83.51l112.79 2.16-105.29-37.4-7.5 35.24z" />
    </svg>
  );
};

UndrawMailbox.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMailbox;
