import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCloudSync = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 873.79 740.57" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={690.86} y1={478.35} x2={690.86} y2={70} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={817.66} y1={176.95} x2={817.66} y2={105.63} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={817.66} y1={309.58} x2={817.66} y2={238.27} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={817.66} y1={441.33} x2={817.66} y2={370.02} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__e"
          x1={396.11}
          y1={788.96}
          x2={396.11}
          y2={547.06}
          gradientTransform="translate(.01 -.01)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__f"
          x1={246.98}
          y1={374.4}
          x2={246.98}
          y2={249.5}
          gradientTransform="translate(.01 -.01)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__g"
          x1={359.21}
          y1={674.95}
          x2={359.21}
          y2={188.22}
          gradientTransform="translate(-163.09 -79.23)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__h"
          x1={510.05}
          y1={629.56}
          x2={510.05}
          y2={397.67}
          gradientTransform="translate(.01 -.01)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__i"
          x1={436.5}
          y1={819.79}
          x2={436.5}
          y2={762.08}
          gradientTransform="translate(-163.09 -79.23)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__j"
          x1={226.52}
          y1={546.99}
          x2={226.52}
          y2={443.79}
          gradientTransform="translate(.01 -.01)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__k"
          x1={222.5}
          y1={632.54}
          x2={222.5}
          y2={540.94}
          gradientTransform="translate(.01 -.01)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__l" x1={196.1} y1={427.59} x2={196.1} y2={277.14} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__m"
          x1={234.19}
          y1={462.07}
          x2={234.19}
          y2={347.46}
          gradientTransform="translate(.01 -.01)"
          xlinkHref="#prefix__a"
        />
      </defs>
      <path fill="url(#prefix__a)" d="M507.92 70h365.87v408.35H507.92z" opacity={0.8} />
      <path fill="#fff" d="M513.97 342.63h353.77v126.82H513.97z" />
      <path fill="#64ffda" d="M543.01 372.72h13.71v64.98h-13.71z" />
      <path fill="#64ffda" d="M570.07 372.72h13.71v64.98h-13.71z" opacity={0.7} />
      <path fill="#64ffda" d="M597.13 372.72h13.71v64.98h-13.71z" opacity={0.6} />
      <path fill="#64ffda" d="M624.2 372.72h13.71v64.98H624.2zM651.26 372.72h13.71v64.98h-13.71z" opacity={0.5} />
      <path fill="#64ffda" d="M678.33 372.72h13.71v64.98h-13.71z" opacity={0.4} />
      <path fill="#64ffda" d="M705.39 372.72h13.71v64.98h-13.71z" opacity={0.3} />
      <circle cx={817.66} cy={404.79} r={33.08} fill={primaryColor} />
      <path fill="#fff" d="M513.97 210.88h353.77V337.7H513.97z" />
      <path fill="#64ffda" d="M543.01 240.96h13.71v64.98h-13.71z" />
      <path fill="#64ffda" d="M570.07 240.96h13.71v64.98h-13.71z" opacity={0.7} />
      <path fill="#64ffda" d="M597.13 240.96h13.71v64.98h-13.71z" opacity={0.6} />
      <path fill="#64ffda" d="M624.2 240.96h13.71v64.98H624.2zM651.26 240.96h13.71v64.98h-13.71z" opacity={0.5} />
      <path fill="#64ffda" d="M678.33 240.96h13.71v64.98h-13.71z" opacity={0.4} />
      <path fill="#64ffda" d="M705.39 240.96h13.71v64.98h-13.71z" opacity={0.3} />
      <circle cx={817.66} cy={273.04} r={33.08} fill={primaryColor} />
      <path fill="#fff" d="M513.97 79.13h353.77v126.82H513.97z" />
      <path fill="#64ffda" d="M543.01 109.21h13.71v64.98h-13.71z" />
      <path fill="#64ffda" d="M570.07 109.21h13.71v64.98h-13.71z" opacity={0.7} />
      <path fill="#64ffda" d="M597.13 109.21h13.71v64.98h-13.71z" opacity={0.6} />
      <path fill="#64ffda" d="M624.2 109.21h13.71v64.98H624.2zM651.26 109.21h13.71v64.98h-13.71z" opacity={0.5} />
      <path fill="#64ffda" d="M678.33 109.21h13.71v64.98h-13.71z" opacity={0.4} />
      <path fill="#64ffda" d="M705.39 109.21h13.71v64.98h-13.71z" opacity={0.3} />
      <circle cx={817.66} cy={141.29} r={35.66} fill="url(#prefix__b)" />
      <circle cx={817.66} cy={273.93} r={35.66} fill="url(#prefix__c)" />
      <circle cx={817.66} cy={405.67} r={35.66} fill="url(#prefix__d)" />
      <circle cx={817.66} cy={141.29} r={33.08} fill={primaryColor} />
      <path
        d="M567.81 615a67.92 67.92 0 0 0-134.65-12.66l-208.75-5.66 2.29 35.87s-29.76 68.68 126.67 87V789h180.86V673.57A67.88 67.88 0 0 0 567.81 615z"
        transform="translate(-163.1 -79.21)"
        fill="url(#prefix__e)"
      />
      <path d="M70.77 554.79s-28.5 65.77 121.32 83.32v66.51h173.2V528.5l-296.72-8z" fill="#fda57d" />
      <path
        d="M320.43 359.55a31.93 31.93 0 0 1-43.91 10l-93-61.28a31.93 31.93 0 0 1-10-43.91 31.93 31.93 0 0 1 43.91-10l93 61.28a31.93 31.93 0 0 1 10 43.91z"
        transform="translate(-163.1 -79.21)"
        fill="url(#prefix__f)"
      />
      <path
        d="M152.16 276.99a29.69 29.69 0 0 1-40.82 9.28l-86.45-57a29.69 29.69 0 0 1-9.28-40.82 29.69 29.69 0 0 1 40.82-9.28l86.45 57a29.69 29.69 0 0 1 9.28 40.82z"
        fill="#fda57d"
      />
      <circle cx={332.4} cy={538} r={65.04} fill="#fda57d" />
      <rect x={61.27} y={109} width={269.65} height={486.73} rx={10.24} ry={10.24} fill="url(#prefix__g)" />
      <rect x={64.92} y={115.58} width={262.37} height={473.58} rx={13.64} ry={13.64} fill="#fff" />
      <path
        d="M262.02 127.46a21.27 21.27 0 0 1-21 18.09h-90.58a21.27 21.27 0 0 1-21-18.09h-48a10 10 0 0 0-10 10v429.9a10 10 0 0 0 10 10h229.3a10 10 0 0 0 10-10V137.42a10 10 0 0 0-10-10z"
        fill={primaryColor}
      />
      <rect x={167.24} y={133.12} width={58.47} height={3.65} rx={1.83} ry={1.83} fill="#dbdbdb" />
      <circle cx={238.13} cy={134.58} r={2.19} fill="#dbdbdb" />
      <path
        d="M537.55 628.68c-18.87 4.36-31.83-7.94-36.2-26.82L458 440.82a35.32 35.32 0 0 1 26.38-42.25A35.32 35.32 0 0 1 526.61 425L562 590.17c4.37 18.83-5.58 34.15-24.45 38.51z"
        transform="translate(-163.1 -79.21)"
        fill="url(#prefix__h)"
      />
      <rect
        x={483.27}
        y={403.64}
        width={59.2}
        height={236.37}
        rx={29.6}
        ry={29.6}
        transform="rotate(-13.01 84.168 1197.624)"
        fill="#fda57d"
      />
      <path fill="url(#prefix__i)" d="M149.61 682.86h247.56v57.71H149.61z" />
      <path fill="#4d8af0" d="M156.3 689.55h234.18v45.16H156.3z" />
      <path
        d="M284.32 532.32a31.55 31.55 0 0 1-43.38 9.86l-62.36-40.35a31.55 31.55 0 0 1-9.86-43.38 31.55 31.55 0 0 1 43.38-9.86l62.36 40.35a31.55 31.55 0 0 1 9.86 43.38z"
        transform="translate(-163.1 -79.21)"
        fill="url(#prefix__j)"
      />
      <path
        d="M268.68 617.74a31.83 31.83 0 0 1-43.77 9.95l-38.63-28.18a31.83 31.83 0 0 1-9.95-43.77 31.83 31.83 0 0 1 43.77-9.95L258.73 574a31.83 31.83 0 0 1 9.95 43.74z"
        transform="translate(-163.1 -79.21)"
        fill="url(#prefix__k)"
      />
      <circle cx={196.1} cy={352.37} r={75.22} fill="url(#prefix__l)" opacity={0.5} />
      <circle cx={196.1} cy={352.37} r={70.8} fill="#69f0ae" />
      <path fill="#fff" d="M165.37 342.93l26.55 24.33 37.61-55.31 13.28 11.06-50.89 66.38-37.61-42.04 11.06-4.42z" />
      <path
        d="M102.46 536.43a29.69 29.69 0 0 1-40.82 9.28l-36-26.27a29.69 29.69 0 0 1-9.28-40.82 29.69 29.69 0 0 1 40.82-9.28l36 26.27a29.69 29.69 0 0 1 9.28 40.82zM117.81 450.93a29.69 29.69 0 0 1-40.82 9.28l-58.68-38a29.69 29.69 0 0 1-9.28-40.82 29.69 29.69 0 0 1 40.87-9.25l58.68 38a29.69 29.69 0 0 1 9.23 40.79z"
        fill="#fda57d"
      />
      <path
        d="M300.46 447.33a31.69 31.69 0 0 1-43.58 9.91l-79-51.46a31.69 31.69 0 0 1-9.91-43.58 31.69 31.69 0 0 1 43.58-9.91l79 51.46a31.69 31.69 0 0 1 9.91 43.58z"
        transform="translate(-163.1 -79.21)"
        fill="url(#prefix__m)"
      />
      <path
        d="M133.16 365.42a29.69 29.69 0 0 1-40.82 9.28l-74-48.2a29.69 29.69 0 0 1-9.28-40.82 29.69 29.69 0 0 1 40.84-9.28l74 48.2a29.69 29.69 0 0 1 9.26 40.82z"
        fill="#fda57d"
      />
      <path
        fill="none"
        stroke="#3ad29f"
        strokeMiterlimit={10}
        strokeWidth={2}
        strokeDasharray="12"
        d="M207.36 91V1h396v54M441.36 586h171v-90"
      />
    </svg>
  );
};

UndrawCloudSync.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCloudSync;
