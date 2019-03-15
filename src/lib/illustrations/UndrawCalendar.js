import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCalendar = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 835.61 660.05" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={435.61} y1={529} x2={435.61} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={435.61} y1={488} x2={435.61} y2={95} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={171.55} y1={660.05} x2={171.55} y2={316.95} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={171.55} y1={496.61} x2={171.55} y2={480.38} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={194.61} y1={489.5} x2={194.61} y2={382.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={187.61} y1={544.5} x2={187.61} y2={488.5} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__g"
          x1={509.54}
          y1={778.88}
          x2={509.54}
          y2={769.85}
          gradientTransform="rotate(120 443.15 583.787)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__h"
          x1={246.07}
          y1={679.17}
          x2={246.07}
          y2={670.14}
          gradientTransform="rotate(30 246.076 674.664)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__i"
          x1={364.44}
          y1={766.03}
          x2={364.44}
          y2={756.99}
          gradientTransform="rotate(30 707.775 31.032)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__j"
          x1={643.63}
          y1={719.48}
          x2={643.63}
          y2={710.44}
          gradientTransform="rotate(120 529.496 505.511)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__k"
          x1={627.41}
          y1={656.89}
          x2={627.41}
          y2={647.85}
          gradientTransform="rotate(120 539.293 488.854)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__l"
          x1={643.63}
          y1={594.29}
          x2={643.63}
          y2={585.26}
          gradientTransform="rotate(120 555.95 479.058)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__m"
          x1={690}
          y1={547.93}
          x2={690}
          y2={538.89}
          gradientTransform="rotate(120 575.548 479.06)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__n"
          x1={818.66}
          y1={549.09}
          x2={818.66}
          y2={540.05}
          gradientTransform="rotate(120 602.492 506.489)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__o"
          x1={863.87}
          y1={596.61}
          x2={863.87}
          y2={587.58}
          gradientTransform="rotate(120 602.004 526.087)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__p"
          x1={877.78}
          y1={656.89}
          x2={877.78}
          y2={647.85}
          gradientTransform="rotate(120 592.206 541.764)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__q"
          x1={863.87}
          y1={717.16}
          x2={863.87}
          y2={708.13}
          gradientTransform="rotate(120 576.527 551.565)"
          xlinkHref="#prefix__a"
        />
      </defs>
      <path fill="url(#prefix__a)" d="M35.61 0h800v529h-800z" />
      <path fill="#fff" d="M42.61 62.5h784V513h-784z" />
      <path fill={primaryColor} d="M42.61 11h784v51.5h-784z" />
      <path fill="url(#prefix__b)" d="M53.61 95h764v393h-764z" />
      <path fill={primaryColor} opacity={0.5} d="M63.11 102h92v73.5h-92z" />
      <path fill="#fff" d="M156.11 102h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.2} d="M249.11 102h92v73.5h-92z" />
      <path fill="#fff" d="M342.11 102h92v73.5h-92zM435.11 102h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.5} d="M528.11 102h92v73.5h-92z" />
      <path fill="#fff" d="M621.11 102h92v73.5h-92z" />
      <path
        fill={primaryColor}
        opacity={0.2}
        d="M714.11 102h92v73.5h-92zM63.11 177h92v73.5h-92zM156.11 177h92v73.5h-92z"
      />
      <path fill="#fff" d="M249.11 177h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.5} d="M342.11 177h92v73.5h-92z" />
      <path fill="#fff" d="M435.11 177h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.2} d="M528.11 177h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.5} d="M621.11 177h92v73.5h-92z" />
      <path fill="#fff" d="M714.11 177h92v73.5h-92zM63.11 251h92v73.5h-92zM156.11 251h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.2} d="M249.11 251h92v73.5h-92z" />
      <path fill="#fff" d="M342.11 251h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.2} d="M435.11 251h92v73.5h-92z" />
      <path fill="#fff" d="M528.11 251h92v73.5h-92zM621.11 251h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.2} d="M714.11 251h92v73.5h-92z" />
      <path fill="#fff" d="M63.11 325h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.5} d="M156.11 325h92v73.5h-92zM249.11 325h92v73.5h-92z" />
      <path fill="#fff" d="M342.11 325h92v73.5h-92zM435.11 325h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.5} d="M528.11 325h92v73.5h-92z" />
      <path fill="#fff" d="M621.11 325h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.5} d="M714.11 325h92v73.5h-92zM63.11 400h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.2} d="M156.11 400h92v73.5h-92z" />
      <path fill="#fff" d="M249.11 400h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.5} d="M342.11 400h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.2} d="M435.11 400h92v73.5h-92z" />
      <path fill="#fff" d="M528.11 400h92v73.5h-92z" />
      <path fill={primaryColor} opacity={0.2} d="M621.11 400h92v73.5h-92z" />
      <path fill="#fff" d="M714.11 400h92v73.5h-92z" />
      <path
        fill="#69f0ae"
        d="M70.61 258h28v28h-28zM348.61 110h28v28h-28zM345.61 258h28v28h-28zM440.61 329h28v28h-28zM625.61 258h28v28h-28z"
      />
      <circle cx={171.55} cy={488.5} r={171.55} fill="url(#prefix__c)" />
      <circle cx={171.55} cy={488.5} r={166.92} fill={primaryColor} />
      <circle cx={171.55} cy={488.5} r={135.62} fill="#fff" />
      <circle cx={171.55} cy={488.5} r={8.11} fill="url(#prefix__d)" />
      <path fill={primaryColor} d="M216.76 384.18L172.71 488.5" />
      <path fill="url(#prefix__e)" d="M174.61 489.5l-5-1.68 45-105.32 5 2.35-45 104.65z" />
      <path fill="#2196f3" d="M171.098 487.79l44.046-104.322 3.206 1.354-44.046 104.322z" />
      <path fill={primaryColor} d="M172.71 489.66l28.98 53.32" />
      <path fill="url(#prefix__f)" d="M199.61 544.5l-29-54 4-2 30 53-5 3z" />
      <path fill="#2196f3" d="M171.165 490.523l3.058-1.661 28.977 53.325-3.058 1.662z" />
      <circle cx={297.9} cy={491.98} r={3.48} fill={primaryColor} />
      <circle cx={244.91} cy={545.99} r={4.52} transform="rotate(-60 49.913 643.788)" fill="url(#prefix__g)" />
      <circle cx={246.07} cy={674.66} r={4.52} transform="rotate(-30 -68.919 954.653)" fill="url(#prefix__h)" />
      <circle cx={45.21} cy={491.98} r={4.52} fill="url(#prefix__i)" />
      <circle cx={291.04} cy={499.63} r={4.52} transform="rotate(-30 -23.94 779.625)" fill="url(#prefix__j)" />
      <circle cx={353.63} cy={483.41} r={4.52} transform="rotate(-30 38.649 763.396)" fill="url(#prefix__k)" />
      <circle cx={416.23} cy={499.63} r={4.52} transform="rotate(-30 101.258 779.632)" fill="url(#prefix__l)" />
      <circle cx={462.59} cy={546} r={4.52} transform="rotate(-30 147.616 825.994)" fill="url(#prefix__m)" />
      <circle cx={461.43} cy={674.66} r={4.52} transform="rotate(-30 146.464 954.645)" fill="url(#prefix__n)" />
      <circle cx={413.91} cy={719.87} r={4.52} transform="rotate(-30 98.926 999.867)" fill="url(#prefix__o)" />
      <circle cx={353.63} cy={733.78} r={4.52} transform="rotate(-30 38.659 1013.779)" fill="url(#prefix__p)" />
      <circle cx={293.36} cy={719.87} r={4.52} transform="rotate(-30 -21.614 999.869)" fill="url(#prefix__q)" />
      <circle cx={171.55} cy={363.31} r={3.48} fill="#69f0ae" />
      <circle cx={416.34} cy={500.06} r={3.48} transform="rotate(-60 221.336 597.855)" fill="#69f0ae" />
      <circle cx={462.16} cy={545.88} r={3.48} transform="rotate(-30 147.187 825.879)" fill="#69f0ae" />
      <circle cx={461.43} cy={674.66} r={3.48} transform="rotate(-60 266.428 772.453)" fill="#69f0ae" />
      <circle cx={413.91} cy={719.63} r={3.48} transform="rotate(-30 98.93 999.628)" fill="#69f0ae" />
      <circle cx={291.15} cy={500.06} r={3.48} transform="rotate(-30 -23.816 780.059)" fill="#69f0ae" />
      <circle cx={245.33} cy={545.88} r={3.48} transform="rotate(-60 50.337 643.674)" fill="#69f0ae" />
      <circle cx={479.98} cy={612.07} r={4.52} transform="rotate(-30 165.014 892.055)" fill="#69f0ae" />
      <circle cx={246.07} cy={674.66} r={3.48} transform="rotate(-30 -68.919 954.653)" fill="#69f0ae" />
      <circle cx={293.58} cy={719.63} r={3.48} transform="rotate(-60 98.584 817.427)" fill="#69f0ae" />
      <circle cx={45.21} cy={491.98} r={3.48} fill="#69f0ae" />
      <circle cx={171.55} cy={613.68} r={3.48} fill="#69f0ae" />
      <path
        d="M42.89 501.25a135.64 135.64 0 0 1 253.28-67.48A135.64 135.64 0 1 0 53.89 554.83a135.16 135.16 0 0 1-11-53.58z"
        fill={primaryColor}
        opacity={0.2}
      />
      <circle cx={171.55} cy={488.5} r={5.8} fill="#69f0ae" />
    </svg>
  );
};

UndrawCalendar.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCalendar;
