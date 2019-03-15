import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawChecklist = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 564.9 858" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={335} y1={661.45} x2={335} y2={421.53} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={400.46} y1={395.09} x2={400.46} y2={209.89} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__b" x1={232.62} y1={532.26} x2={498.42} y2={532.26} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#dadada" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient id="prefix__d" x1={232.62} y1={574.59} x2={498.42} y2={574.59} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__e" x1={397.92} y1={858} x2={397.92} y2={732.95} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={401.35} y1={222.24} x2={401.35} y2={0} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={392.58} y1={860.42} x2={392.58} y2={498.06} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M564.9 421.53l-459.81 76.34v163.58l459.81-7.49V421.53z" />
      <path fill={primaryColor} d="M110.38 499.16l444.48-74.08v218.71L110.38 657.9V499.16z" />
      <path fill="url(#prefix__c)" d="M560.02 209.89l-319.11 90.84v94.36l319.11-68.43V209.89z" />
      <path fill="#fff" d="M551.33 213.42l-303.37 88.19v88.19l303.37-70.55V213.42z" />
      <path
        d="M297.34 333.2c0 13.11-6.35 25.29-14.11 27.19s-13.84-7-13.84-19.89 6.16-25 13.84-27.12 14.11 6.71 14.11 19.82z"
        fill="none"
        stroke="#dbdbdb"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="#dbdbdb"
        d="M516.06 273.39l-192.7 50.69v-10.82l192.7-52.12v12.25zM516.06 298.08l-192.7 50.69v-10.82l192.7-52.11v12.24z"
      />
      <path
        d="M198.57 570.68c0-24.85-11.17-43.47-24.69-41.62-13.25 1.82-23.8 22.68-23.8 46.63s10.55 42.63 23.8 41.71c13.57-.94 24.69-21.86 24.69-46.72z"
        fill="#fff"
      />
      <path fill="url(#prefix__b)" d="M498.42 527.38l-265.8 29.47v-16.51l265.8-32.66v19.7z" />
      <path fill="url(#prefix__d)" d="M498.42 569.71l-265.8 29.47v-16.51l265.8-32.66v19.7z" />
      <path fill="url(#prefix__e)" d="M553.16 736.64l-314.02-3.69v95.68L556.69 858l-3.53-121.36z" />
      <path fill="#fff" d="M551.33 742.56l-303.37-3.53v84.67l303.37 24.69V742.56z" />
      <path
        d="M300.87 785.64c0 13.08-6.35 23.24-14.11 22.7s-13.83-11.34-13.83-24.18 6.16-23 13.84-22.71 14.1 11.11 14.1 24.19z"
        fill="none"
        stroke="#dbdbdb"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="#dbdbdb"
        d="M516.06 788.42l-186.43-8.93v-11.04l186.43 7.53v12.44zM516.06 813.11l-186.43-8.93v-11.04l186.43 7.53v12.44z"
      />
      <path fill="url(#prefix__f)" d="M560.02 0L242.67 127.17v95.07l317.35-105.83V0z" />
      <path fill="#fff" d="M554.86 5.29l-306.9 126.99v81.14l306.9-102.3V5.29z" />
      <path
        d="M311.45 148c0 13-6.35 25.86-14.11 28.73s-13.84-5.2-13.84-17.93 6.16-25.53 13.84-28.63S311.45 135 311.45 148z"
        fill="none"
        stroke="#dbdbdb"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <path
        fill="#dbdbdb"
        d="M523.11 61.73l-186.47 72.58v-12.64L523.11 47.5v14.23zM523.11 93.48l-186.47 72.57v-12.63l186.47-74.17v14.23z"
      />
      <path
        d="M439.5 843.65l-9.45-6.44-15.14-57.35 3.06-3.31s0-18.5-4.31-30.71c2.67-1.69 4.34-2.84 4.34-2.84-9.22-8.39-9.22-39.14-9.22-39.14s-3.91-23.68-11.72-45.61l14.79 3.67 21.52-47.53v-11.2l9.22-5.59s-12.3-16.78-24.6 0c0 0 3.07 11.18 0 16.78s-12.3 25.16-12.3 25.16h-7.83l1.68-8.39h-16.07c-.78-1-1.57-1.93-2.38-2.8l12.3-25.16-5.76-3.93 21.14-24 3.07-50.33c12.22-3.7 15-14.77 15.48-21.82.22-3.22-3.12-5.67-6.56-4.87-26.54 6.19-21.21 18.3-21.21 18.3L390.31 564l-12.71 18.21c-1.54-8.33-7.56-15.25-15.75-18.67l6.94-7.89s-15.69-3.81-30.6 1.35c-27.55 9.52-27.49 46 0 55.57a30.11 30.11 0 0 0 12.14 1.8v-2.8c.39 0 .77 0 1.15-.05-.47 2.6-.91 5.54-1.14 8.44-6.15 0-6.15 30.76 3.07 36.35l-3.07 30.76v16.78c6.15 14 18.45 14 18.45 14L378 757c2.92 1.33 6.72 1.23 10.8.31l1.49 10.87s-27.67 19.57-27.67 47.53l-1 1.83-2.07-1.83-18.45 14 24.6 28h24.6c6.15-14-18.45-16.78-18.45-16.78l-.12-14.37 24.93-26.92c4.23 11.25 11.77 29.95 18 38l-2.81.51v22.37h52.25c15.37-19.67-24.6-16.87-24.6-16.87z"
        transform="translate(-317.55 -21)"
        fill="url(#prefix__g)"
      />
      <path d="M40.26 584.43s-6.1 25.62 0 29.28l18.3-11-12.2-23.18z" fill="#f6b9ad" />
      <path d="M107.74 810.56l-16.16-67.34-16.13 21.54s13.47 43.1 21.55 48.48z" fill="#b98b82" />
      <path
        d="M118.52 578.91s-10.77-16.16-21.55 0c0 0 2.69 10.77 0 16.16S86.2 619.31 86.2 619.31H61.95v13.47l29.63 8.08 18.87-45.79v-10.78z"
        fill="#f6b9ad"
      />
      <path fill="#5989a1" d="M80.81 611.23l-5.39 29.63-21.55-5.39v-24.24h26.94z" />
      <circle cx={37.71} cy={568.13} r={24.24} fill="#f6b9ad" />
      <path
        d="M32.32 565.44l21.55-26.94s-13.75-3.67-26.81 1.3c-24.13 9.17-24.09 44.27 0 53.53a24.15 24.15 0 0 0 10.63 1.74v-16.16h-8.08z"
        fill="#3d213c"
      />
      <path
        d="M91.58 508.87l-2.69 48.48-21.55 26.94-13.47-8.08 18.86-29.63 8.08-45.79s-4.67-11.67 18.59-17.63a4.59 4.59 0 0 1 5.75 4.69c-.43 6.79-2.86 17.45-13.57 21.02zM70.03 721.67l2.69 21.55S48.45 762.07 48.45 789l-2.69 5.39 8.08 8.08 43.1-51.18s0-29.63-8.08-37.71z"
        fill="#f6b9ad"
      />
      <path
        d="M56.45 799.41l.11 13.84s21.55 2.69 16.16 16.16H51.18l-21.55-26.94L45.79 789zM105.05 807.86l10.77 8.08s35-2.69 21.55 16.16H91.58v-21.54zM96.97 719s-24.24 18.86-35 13.47l-8.08-37.71s-10.77 0-16.16-13.47V665.1l51.18 16.16s-.02 29.63 8.06 37.74z"
        fill={primaryColor}
      />
      <path
        d="M75.45 584.29L53.9 568.13s-10.77 32.32-16.16 32.32-5.39 29.63 2.69 35l-2.69 29.63 51.18 16.16s-8.08-53.87-24.24-72.73z"
        fill="#76b6d7"
      />
      <path fill="#47e6b1" d="M284.45 149.84l6.16-.94 6.16 6.15 7.1-13.26h7.58l-14.68 18.47-12.32-10.42z" />
      <path fill={primaryColor} d="M152.45 572.35l9.81-1.51 9.81 9.81 11.31-21.12h12.07l-23.38 29.42-19.62-16.6z" />
      <path opacity={0.2} d="M152.45 572.35l9.81-1.51 9.81 9.81 11.31-21.12h12.07l-23.38 29.42-19.62-16.6z" />
    </svg>
  );
};

UndrawChecklist.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawChecklist;
