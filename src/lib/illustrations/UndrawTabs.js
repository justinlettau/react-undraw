import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawTabs = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 882.5 686.51" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__c"
          x1={-121.09}
          y1={464.11}
          x2={-121.09}
          y2={77.38}
          gradientTransform="translate(704.36 124.53)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__a"
          x1={-402.3}
          y1={269.44}
          x2={-402.3}
          y2={170.67}
          gradientTransform="rotate(-15.27 695.59 -2294.214)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient
          id="prefix__d"
          x1={-402.3}
          y1={252.79}
          x2={-402.3}
          y2={231.21}
          gradientTransform="translate(706.72 199.61)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__e"
          x1={-402.26}
          y1={234.11}
          x2={-402.26}
          y2={194.99}
          gradientTransform="translate(699.49 200.57)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__f" x1={-402.3} y1={272.44} x2={-402.3} y2={239.1} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={-402.26} y1={216.85} x2={-402.26} y2={180.15} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__b"
          x1={-261.96}
          y1={207}
          x2={-229.82}
          y2={207}
          gradientTransform="translate(691.98 159.65)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.09} />
          <stop offset={0.55} stopOpacity={0.07} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient
          id="prefix__h"
          x1={-91.63}
          y1={207}
          x2={-59.49}
          y2={207}
          gradientTransform="translate(685.97 114.79)"
          xlinkHref="#prefix__b"
        />
        <linearGradient
          id="prefix__i"
          x1={84.06}
          y1={207}
          x2={116.2}
          y2={207}
          gradientTransform="translate(679.76 68.52)"
          xlinkHref="#prefix__b"
        />
        <linearGradient
          id="prefix__j"
          x1={-261.96}
          y1={370.91}
          x2={-229.82}
          y2={370.91}
          gradientTransform="translate(735.15 153.86)"
          xlinkHref="#prefix__b"
        />
        <linearGradient
          id="prefix__k"
          x1={-91.63}
          y1={370.91}
          x2={-59.49}
          y2={370.91}
          gradientTransform="translate(729.13 109)"
          xlinkHref="#prefix__b"
        />
        <linearGradient
          id="prefix__l"
          x1={84.06}
          y1={370.91}
          x2={116.2}
          y2={370.91}
          gradientTransform="translate(722.93 62.73)"
          xlinkHref="#prefix__b"
        />
        <linearGradient id="prefix__m" x1={495.23} y1={686.51} x2={495.23} y2={299.78} xlinkHref="#prefix__c" />
        <linearGradient id="prefix__n" x1={372.77} y1={598.59} x2={372.77} y2={499.81} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={214.02} y1={475.19} x2={214.02} y2={453.62} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={214.05} y1={456.51} x2={214.05} y2={417.4} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__q" x1={372.77} y1={601.58} x2={372.77} y2={568.25} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__r" x1={372.81} y1={545.99} x2={372.81} y2={509.29} xlinkHref="#prefix__a" />
      </defs>
      <path fill="#f5f5f5" d="M5.257 203.045L743.153 1.595l99.419 364.163-737.896 201.45z" />
      <path
        transform="rotate(-15.27 105.762 934.031)"
        fill="url(#prefix__c)"
        d="M196.01 201.91h774.54v386.73H196.01z"
      />
      <path fill="#fff" d="M15.286 239.79L753.182 38.34l89.321 327.176-737.895 201.45z" />
      <circle cx={186.41} cy={322.7} r={9.64} transform="matrix(.96 -.26 .26 .96 -237.16 -46.26)" fill="#ff5252" />
      <circle cx={214.31} cy={315.08} r={9.64} transform="rotate(-15.27 -263.224 853.85)" fill="#ff0" />
      <circle cx={242.22} cy={307.46} r={9.64} transform="rotate(-15.27 -235.321 846.238)" fill="#69f0ae" />
      <path fill={primaryColor} d="M15.164 239.354l194.29-53.042 89.44 327.61-194.29 53.043z" />
      <path
        d="M350.71 407.77c-7.4-27.11-36.54-42.77-65.07-35S240 408.88 247.36 436c5.81 21.28 25 35.5 46.79 36.87l-3.45-12.65c-2.5-9.14 3.34-18.77 13-21.4 9.62-2.63 19.54 2.7 22 11.85l3.45 12.65c18.06-12.27 27.37-34.32 21.56-55.55z"
        transform="translate(-158.75 -106.74)"
        fill="url(#prefix__a)"
      />
      <rect
        x={301.2}
        y={430.82}
        width={6.44}
        height={21.58}
        rx={2.86}
        ry={2.86}
        transform="rotate(-15.27 -173.11 980.371)"
        fill="url(#prefix__d)"
      />
      <ellipse
        cx={297.22}
        cy={415.12}
        rx={20.59}
        ry={19.56}
        transform="rotate(-15.27 -180.306 953.891)"
        fill="url(#prefix__e)"
      />
      <path
        d="M303.66 438.81c-9.62 2.63-15.45 12.26-13 21.4l3.45 12.65a56.43 56.43 0 0 0 35-9.55l-3.45-12.65c-2.46-9.14-12.38-14.47-22-11.85z"
        transform="translate(-158.75 -106.74)"
        fill="url(#prefix__f)"
      />
      <path
        d="M276.91 419.54a18.18 18.18 0 0 1-4.71-8.91 12.92 12.92 0 0 1 2.05-9.81c2.25-3.13 6-5 9.66-6.35s7.6-2.2 11.14-3.91a24.69 24.69 0 0 0 12.5-13.91 29.89 29.89 0 0 1 2.18 8.33 10.56 10.56 0 0 1-2.65 8.1c2.65-2.15 3.18 1 3 3.09 2 1.31 5.67.6 6.46 2.77a13.8 13.8 0 0 1 1 6.76c-.35 2.29 1.61 5.64-.68 6.43"
        transform="translate(-158.75 -106.74)"
        fill="url(#prefix__g)"
      />
      <path
        d="M187.36 294.51a50.89 50.89 0 1 0-53.11 64.15l-3.45-12.65a17.28 17.28 0 0 1 12.08-21.16 17.28 17.28 0 0 1 21.16 12.08l3.45 12.65a50.9 50.9 0 0 0 19.87-55.07z"
        fill={primaryColor}
      />
      <rect
        x={299.35}
        y={423.6}
        width={6.12}
        height={21.58}
        rx={2.86}
        ry={2.86}
        transform="rotate(-15.27 -175.104 973.156)"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <circle
        cx={295.21}
        cy={407.9}
        r={19.56}
        transform="rotate(-15.27 -182.3 946.675)"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path
        d="M142.89 324.85h0a17.28 17.28 0 0 0-12.08 21.16l3.44 12.65a51.08 51.08 0 0 0 33.24-9.08l-3.45-12.65a17.28 17.28 0 0 0-21.15-12.08zM117.14 305.26a19 19 0 0 1-4.6-8.94 13.16 13.16 0 0 1 1.83-9.75c2.11-3.09 5.61-4.94 9.13-6.21s7.22-2.09 10.57-3.76a23.39 23.39 0 0 0 11.74-13.71 31.45 31.45 0 0 1 2.19 8.33 10.61 10.61 0 0 1-2.43 8c2.5-2.11 3 1.08 2.93 3.12 1.89 1.33 5.42.67 6.2 2.84a14.47 14.47 0 0 1 1.07 6.75c-.31 2.28 1.61 5.64-.57 6.4"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path d="M146.49 278.57s13.48-2.45 9.44 19.65" fill="#fff" />
      <path opacity={0.1} d="M59.374 403.294l194.29-53.043 44.577 163.285-194.29 53.042z" />
      <path
        fill="#fff"
        d="M106.17 428.288l95.08-25.958 2.54 9.3-95.08 25.957zM112.094 449.99l117.819-32.165 2.538 9.3-117.818 32.164z"
      />
      <path fill="#f5f5f5" d="M248.047 197.346l140.546-38.37 18.905 69.246-140.547 38.37z" />
      <path fill="#e0e0e0" d="M266.39 264.515l140.546-38.37 18.905 69.245-140.547 38.37z" />
      <path fill="#f5f5f5" d="M581.861 106.219l140.547-38.37 18.904 69.245-140.546 38.37z" />
      <path fill="#e0e0e0" d="M600.194 173.387l140.547-38.37 18.904 69.246-140.546 38.37z" />
      <path fill="#f5f5f5" d="M414.438 151.918l140.546-38.37 18.905 69.246-140.547 38.37z" />
      <path
        fill="#e0e0e0"
        d="M432.774 219.099l140.546-38.37 18.905 69.246-140.547 38.37zM287.305 353.896l139.862-37.88 18.663 68.909-139.862 37.88z"
      />
      <path fill="#bdbdbd" d="M309.268 421.605l140.547-38.37 18.904 69.246-140.546 38.37z" />
      <path fill="#f5f5f5" d="M624.737 263.3l140.547-38.37 18.904 69.245-140.546 38.37z" />
      <path fill="#bdbdbd" d="M643.083 330.478l140.546-38.37 18.905 69.246-140.547 38.37z" />
      <path fill="#f5f5f5" d="M457.316 309.009l140.547-38.37 18.904 69.246-140.546 38.37z" />
      <path fill="#bdbdbd" d="M475.66 376.177l140.546-38.37 18.904 69.246-140.546 38.37z" />
      <ellipse
        cx={446.09}
        cy={366.65}
        rx={16.07}
        ry={15}
        transform="rotate(-15.27 -31.423 905.428)"
        fill="url(#prefix__b)"
      />
      <circle
        cx={445.81}
        cy={365.62}
        r={13.93}
        transform="matrix(.96 -.26 .26 .96 -239.31 23.58)"
        fill={primaryColor}
      />
      <ellipse
        cx={610.41}
        cy={321.79}
        rx={16.07}
        ry={15}
        transform="rotate(-15.27 132.889 860.551)"
        fill="url(#prefix__h)"
      />
      <circle cx={610.13} cy={320.76} r={13.93} transform="rotate(-15.27 132.608 859.526)" fill={primaryColor} />
      <ellipse
        cx={779.9}
        cy={275.52}
        rx={16.07}
        ry={15}
        transform="rotate(-15.27 302.361 814.278)"
        fill="url(#prefix__i)"
      />
      <circle cx={779.62} cy={274.49} r={13.93} transform="rotate(-15.27 302.081 813.253)" fill={primaryColor} />
      <ellipse
        cx={489.26}
        cy={524.77}
        rx={16.07}
        ry={15}
        transform="rotate(-15.27 11.74 1063.548)"
        fill="url(#prefix__j)"
      />
      <circle cx={488.97} cy={523.74} r={13.93} transform="rotate(-15.27 11.465 1062.486)" fill="#2196f3" />
      <ellipse
        cx={653.58}
        cy={479.91}
        rx={16.07}
        ry={15}
        transform="rotate(-15.27 176.051 1018.671)"
        fill="url(#prefix__k)"
      />
      <circle cx={653.29} cy={478.88} r={13.93} transform="rotate(-15.27 175.771 1017.647)" fill="#2196f3" />
      <ellipse
        cx={823.06}
        cy={433.64}
        rx={16.07}
        ry={15}
        transform="rotate(-15.27 345.524 972.398)"
        fill="url(#prefix__l)"
      />
      <circle cx={822.78} cy={432.61} r={13.93} transform="rotate(-15.27 345.244 971.373)" fill="#2196f3" />
      <path fill="#f5f5f5" d="M113.28 300.25h764.9v377.49h-764.9z" />
      <path fill="url(#prefix__m)" d="M107.96 299.78H882.5v386.73H107.96z" />
      <path fill="#fff" d="M113.28 338.35h764.9V677.5h-764.9z" />
      <circle cx={131.49} cy={318.61} r={9.64} fill="#ff5252" />
      <circle cx={160.41} cy={318.61} r={9.64} fill="#ff0" />
      <circle cx={189.34} cy={318.61} r={9.64} fill="#69f0ae" />
      <path fill={primaryColor} d="M113.28 337.9h201.4v339.6h-201.4z" />
      <path
        d="M426.33 550.7c0-28.1-24-50.89-53.56-50.89s-53.57 22.78-53.57 50.89c0 22.06 14.77 40.83 35.43 47.89v-13.11c0-9.48 8.16-17.23 18.14-17.23 10 0 18.14 7.75 18.14 17.23v13.11c20.65-7.06 35.42-25.84 35.42-47.89z"
        transform="translate(-158.75 -106.74)"
        fill="url(#prefix__n)"
      />
      <rect x={210.79} y={453.62} width={6.44} height={21.58} rx={2.86} ry={2.86} fill="url(#prefix__o)" />
      <ellipse cx={214.05} cy={436.96} rx={20.59} ry={19.56} fill="url(#prefix__p)" />
      <path
        d="M372.77 568.25c-10 0-18.14 7.75-18.14 17.23v13.11a56.43 56.43 0 0 0 36.27 0v-13.11c0-9.48-8.16-17.23-18.13-17.23z"
        transform="translate(-158.75 -106.74)"
        fill="url(#prefix__q)"
      />
      <path
        d="M352 542.61a18.18 18.18 0 0 1-2.2-9.84 12.92 12.92 0 0 1 4.56-8.92c3-2.43 7.07-3.29 11-3.59s7.91-.12 11.78-.84a24.69 24.69 0 0 0 15.72-10.13 29.89 29.89 0 0 1-.09 8.61 10.56 10.56 0 0 1-4.69 7.11c3.13-1.37 2.79 1.85 2.11 3.78 1.55 1.78 5.32 2.07 5.51 4.37a13.8 13.8 0 0 1-.79 6.8c-.95 2.12.07 5.86-2.35 6"
        transform="translate(-158.75 -106.74)"
        fill="url(#prefix__r)"
      />
      <path
        d="M264.86 436.46a50.89 50.89 0 1 0-68.12 47.89v-13.09a17.28 17.28 0 0 1 17.23-17.23 17.28 17.28 0 0 1 17.28 17.23v13.11a50.9 50.9 0 0 0 33.61-47.91z"
        fill={primaryColor}
      />
      <rect
        x={210.92}
        y={446.12}
        width={6.12}
        height={21.58}
        rx={2.86}
        ry={2.86}
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <circle cx={214.01} cy={429.46} r={19.56} fill="#fff" stroke="#fff" strokeMiterlimit={10} />
      <path
        d="M213.98 454.01h0a17.28 17.28 0 0 0-17.23 17.25v13.11a51.08 51.08 0 0 0 34.46 0v-13.11a17.28 17.28 0 0 0-17.23-17.25zM194.25 428.38a19 19 0 0 1-2.09-9.84 13.16 13.16 0 0 1 4.34-8.92c2.85-2.43 6.71-3.29 10.44-3.59s7.51-.12 11.19-.84a23.39 23.39 0 0 0 14.94-10.13 31.45 31.45 0 0 1-.08 8.61 10.61 10.61 0 0 1-4.46 7.11c3-1.37 2.65 1.85 2 3.78 1.47 1.78 5 2.07 5.23 4.37a14.47 14.47 0 0 1-.75 6.8c-.9 2.12.06 5.86-2.23 6"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path d="M229.64 410.26s13.65 1.19 3.93 21.45" fill="#fff" />
      <path opacity={0.1} d="M112.74 507.7h201.4v169.26h-201.4z" />
      <path fill="#fff" d="M151.31 544.12h98.56v9.64h-98.56z" />
      <path fill="#bdbdbd" d="M390.2 395.21h98.56v9.64H390.2z" />
      <path fill="#e0e0e0" d="M390.2 453.06h352.45v9.64H390.2zM390.2 510.91h352.45v9.64H390.2z" />
      <path fill="#64ffda" d="M390.2 568.76h98.56v9.64H390.2z" />
      <path fill="#f5f5f5" d="M516.61 568.76h98.56v9.64h-98.56z" />
      <path fill="#64ffda" d="M644.1 568.76h98.56v9.64H644.1z" />
      <path fill="#fff" d="M151.31 566.62h122.13v9.64H151.31z" />
    </svg>
  );
};

UndrawTabs.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawTabs;
