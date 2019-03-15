import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawJasonMask = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1156 853.87" style={style} {...props}>
      <defs>
        <radialGradient id="prefix__a" cx={513.55} cy={208.68} r={10.92} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#212149" />
          <stop offset={0.27} stopColor="#201f45" stopOpacity={0.95} />
          <stop offset={0.63} stopColor="#1c183b" stopOpacity={0.81} />
          <stop offset={1} stopColor="#170f2c" stopOpacity={0.6} />
        </radialGradient>
        <radialGradient id="prefix__b" cx={517.23} cy={248.39} r={10.92} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__c" cx={513.55} cy={283.69} r={10.92} xlinkHref="#prefix__a" />
        <radialGradient
          id="prefix__d"
          cx={491.25}
          cy={277.34}
          r={10.92}
          gradientTransform="matrix(.73 0 0 1 85.29 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__e"
          cx={491.25}
          cy={314.84}
          r={10.92}
          gradientTransform="matrix(.73 0 0 1 85.29 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__f"
          cx={536.66}
          cy={331.02}
          r={10.92}
          gradientTransform="matrix(.36 0 0 1 205.65 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__g"
          cx={504.16}
          cy={378.09}
          r={10.92}
          gradientTransform="matrix(.36 0 0 1 205.65 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__h"
          cx={445.26}
          cy={533.25}
          r={10.92}
          gradientTransform="matrix(.36 0 0 1 205.65 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__i"
          cx={481.82}
          cy={601.64}
          r={10.92}
          gradientTransform="matrix(.36 0 0 1 205.65 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__j"
          cx={569.16}
          cy={670.77}
          r={10.92}
          gradientTransform="matrix(.36 0 0 1 205.65 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__k"
          cx={422.57}
          cy={533.25}
          r={10.92}
          gradientTransform="matrix(-.36 0 0 1 959.68 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__l"
          cx={459.13}
          cy={601.64}
          r={10.92}
          gradientTransform="matrix(-.36 0 0 1 959.68 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__m"
          cx={546.46}
          cy={670.77}
          r={10.92}
          gradientTransform="matrix(-.36 0 0 1 959.68 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__n"
          cx={480.03}
          cy={277.34}
          r={10.92}
          gradientTransform="matrix(-.73 0 0 1 1080.03 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__o"
          cx={480.03}
          cy={314.84}
          r={10.92}
          gradientTransform="matrix(-.73 0 0 1 1080.03 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__p"
          cx={513.96}
          cy={331.02}
          r={10.92}
          gradientTransform="matrix(-.36 0 0 1 959.68 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient
          id="prefix__q"
          cx={481.47}
          cy={378.09}
          r={10.92}
          gradientTransform="matrix(-.36 0 0 1 959.68 -23.07)"
          xlinkHref="#prefix__a"
        />
        <radialGradient id="prefix__r" cx={558.41} cy={294.72} r={10.92} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__s" cx={653.27} cy={285.89} r={10.92} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__t" cx={653.27} cy={217.5} r={10.92} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__u" cx={610.62} cy={294.72} r={10.92} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__v" cx={653.27} cy={252.07} r={10.92} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__w" cx={551.26} cy={647.79} r={11.66} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__x" cx={479.24} cy={650.56} r={11.43} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__y" cx={507.5} cy={647.79} r={11.43} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__z" cx={547.94} cy={692.66} r={11.66} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__A" cx={614.98} cy={692.66} r={11.43} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__B" cx={614.98} cy={724.8} r={12.53} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__C" cx={551.26} cy={724.8} r={12.21} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__D" cx={614.98} cy={647.79} r={11.43} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__E" cx={659.3} cy={650.56} r={11.66} xlinkHref="#prefix__a" />
        <radialGradient id="prefix__F" cx={687.55} cy={664.41} r={11.98} xlinkHref="#prefix__a" />
      </defs>
      <path
        d="M671.65 140.78c-74.11-2.85-144.65-29.25-212.1-58.13s-134.16-60.9-206.49-76.2C206.53-3.4 153.33-4.79 115.84 22.74 79.77 49.23 68.11 94.93 61.85 137.39c-4.72 31.92-7.49 65.52 5.43 95.41 9 20.75 24.89 38.19 35.91 58.06 38.32 69.15 11.23 154.43-30.3 222-19.48 31.68-42.07 61.89-57.11 95.61S-6.2 680.77 7 715.17c13 34.09 44.1 59.7 77.75 77.71 68.35 36.58 148.89 47 227.43 53 173.85 13.12 348.63 7.44 522.94 1.75 64.51-2.11 129.3-4.24 192.76-15.25 35.24-6.12 71.63-15.82 97.21-39.24 32.48-29.74 40.53-80.09 18.77-117.38-36.51-62.54-137.44-78.07-163-145.19-14-37 .38-78.1 20.79-112.37 43.79-73.5 117.18-138 121-222 2.66-57.71-32.62-115.5-87.17-142.8-57.18-28.62-136.47-25-178.66 22.36-43.4 48.76-119.74 67.52-185.17 65.02z"
        fill={primaryColor}
      />
      <path
        d="M778.22 463.23v-72.06h36c-24.29-121.53-100.55-214.5-194.83-233.3v50.92h-72.08v-50.62c-93.61 19.47-169.2 112.1-193.36 233h34.52v72.06H346c-.09 3.67-.16 7.34-.16 11 0 176.68 106.68 319.9 238.27 319.9s238.23-143.2 238.23-319.87c0-3.69-.06-7.36-.15-11z"
        fill="#fff"
      />
      <path
        d="M536.28 403.67a58.83 58.83 0 0 1-117.66 0c0-32.49 26.34-48.54 58.83-48.54s58.83 16.05 58.83 48.54z"
        opacity={0.1}
      />
      <path
        d="M529.66 403.67a52.22 52.22 0 0 1-104.43 0c0-28.84 23.38-41.92 52.22-41.92s52.21 13.08 52.21 41.92z"
        fill={primaryColor}
      />
      <circle cx={513.55} cy={208.68} r={10.92} fill="url(#prefix__a)" />
      <path
        d="M630.41 403.67a58.83 58.83 0 0 0 117.66 0c0-32.49-26.34-48.54-58.83-48.54s-58.83 16.05-58.83 48.54z"
        opacity={0.1}
      />
      <path
        d="M637 403.67a52.21 52.21 0 1 0 104.42 0c0-28.84-23.38-41.92-52.21-41.92S637 374.83 637 403.67z"
        fill={primaryColor}
      />
      <circle cx={517.23} cy={248.39} r={10.92} fill="url(#prefix__b)" />
      <circle cx={513.4} cy={208.91} r={8.74} fill={primaryColor} />
      <circle cx={516.64} cy={248.09} r={8.74} fill={primaryColor} />
      <circle cx={513.55} cy={283.69} r={10.92} fill="url(#prefix__c)" />
      <circle cx={513.4} cy={283.39} r={8.74} fill={primaryColor} />
      <ellipse cx={445.18} cy={254.27} rx={8} ry={10.92} fill="url(#prefix__d)" />
      <ellipse cx={445.07} cy={253.97} rx={6.41} ry={8.74} fill={primaryColor} />
      <ellipse cx={445.18} cy={291.78} rx={8} ry={10.92} fill="url(#prefix__e)" />
      <ellipse cx={445.07} cy={291.47} rx={6.41} ry={8.74} fill={primaryColor} />
      <ellipse cx={399.96} cy={307.96} rx={3.95} ry={10.92} fill="url(#prefix__f)" />
      <ellipse cx={399.9} cy={307.65} rx={3.17} ry={8.74} fill={primaryColor} />
      <ellipse cx={388.19} cy={355.02} rx={3.95} ry={10.92} fill="url(#prefix__g)" />
      <ellipse cx={388.14} cy={354.72} rx={3.17} ry={8.74} fill={primaryColor} />
      <ellipse cx={366.86} cy={510.19} rx={3.95} ry={10.92} fill="url(#prefix__h)" />
      <ellipse cx={366.81} cy={509.88} rx={3.17} ry={8.74} fill={primaryColor} />
      <ellipse cx={380.1} cy={578.58} rx={3.95} ry={10.92} fill="url(#prefix__i)" />
      <ellipse cx={380.05} cy={578.27} rx={3.17} ry={8.74} fill={primaryColor} />
      <ellipse cx={411.72} cy={647.7} rx={3.95} ry={10.92} fill="url(#prefix__j)" />
      <ellipse cx={411.67} cy={647.4} rx={3.17} ry={8.74} fill={primaryColor} />
      <ellipse cx={806.68} cy={510.19} rx={3.95} ry={10.92} fill="url(#prefix__k)" />
      <ellipse cx={806.73} cy={509.88} rx={3.17} ry={8.74} fill={primaryColor} />
      <ellipse cx={793.44} cy={578.58} rx={3.95} ry={10.92} fill="url(#prefix__l)" />
      <ellipse cx={793.49} cy={578.27} rx={3.17} ry={8.74} fill={primaryColor} />
      <ellipse cx={761.82} cy={647.7} rx={3.95} ry={10.92} fill="url(#prefix__m)" />
      <ellipse cx={761.87} cy={647.4} rx={3.17} ry={8.74} fill={primaryColor} />
      <ellipse cx={728.36} cy={254.27} rx={8} ry={10.92} fill="url(#prefix__n)" />
      <ellipse cx={728.47} cy={253.97} rx={6.41} ry={8.74} fill={primaryColor} />
      <ellipse cx={728.36} cy={291.78} rx={8} ry={10.92} fill="url(#prefix__o)" />
      <ellipse cx={728.47} cy={291.47} rx={6.41} ry={8.74} fill={primaryColor} />
      <ellipse cx={773.58} cy={307.96} rx={3.95} ry={10.92} fill="url(#prefix__p)" />
      <ellipse cx={773.64} cy={307.65} rx={3.17} ry={8.74} fill={primaryColor} />
      <ellipse cx={785.35} cy={355.02} rx={3.95} ry={10.92} fill="url(#prefix__q)" />
      <ellipse cx={785.4} cy={354.72} rx={3.17} ry={8.74} fill={primaryColor} />
      <circle cx={558.41} cy={294.72} r={10.92} fill="url(#prefix__r)" />
      <circle cx={653.27} cy={285.89} r={10.92} fill="url(#prefix__s)" />
      <circle cx={653.27} cy={217.5} r={10.92} fill="url(#prefix__t)" />
      <circle cx={610.62} cy={294.72} r={10.92} fill="url(#prefix__u)" />
      <circle cx={653.27} cy={252.07} r={10.92} fill="url(#prefix__v)" />
      <circle cx={558.41} cy={294.72} r={8.74} fill={primaryColor} />
      <circle cx={610.87} cy={294.72} r={8.74} fill={primaryColor} />
      <circle cx={653.29} cy={285.98} r={8.74} fill={primaryColor} />
      <circle cx={653.29} cy={252.3} r={8.74} fill={primaryColor} />
      <circle cx={653.29} cy={217.65} r={8.74} fill={primaryColor} />
      <path opacity={0.1} d="M517.08 320.57l68.17 12.19 64.36-6.09-62.84 36.56-69.69-42.66z" />
      <path fill="#ee1559" d="M517.08 319.1l68.17 12.19 64.36-6.1-62.84 36.56-69.69-42.65z" />
      <circle cx={551.26} cy={647.79} r={11.66} fill="url(#prefix__w)" />
      <circle cx={479.24} cy={650.56} r={11.43} fill="url(#prefix__x)" />
      <circle cx={507.5} cy={647.79} r={11.43} fill="url(#prefix__y)" />
      <circle cx={547.94} cy={692.66} r={11.66} fill="url(#prefix__z)" />
      <circle cx={614.98} cy={692.66} r={11.43} fill="url(#prefix__A)" />
      <circle cx={614.98} cy={724.8} r={12.53} fill="url(#prefix__B)" />
      <circle cx={551.26} cy={724.8} r={12.21} fill="url(#prefix__C)" />
      <circle cx={614.98} cy={647.79} r={11.43} fill="url(#prefix__D)" />
      <circle cx={659.3} cy={650.56} r={11.66} fill="url(#prefix__E)" />
      <circle cx={687.55} cy={664.41} r={11.98} fill="url(#prefix__F)" />
      <circle cx={551.26} cy={647.79} r={10.2} fill={primaryColor} />
      <circle cx={507.34} cy={647.79} r={10.2} fill={primaryColor} />
      <circle cx={479.49} cy={650.53} r={10.2} fill={primaryColor} />
      <circle cx={615.19} cy={647.79} r={10.2} fill={primaryColor} />
      <circle cx={659.12} cy={650.53} r={10.2} fill={primaryColor} />
      <circle cx={687.35} cy={664.65} r={10.2} fill={primaryColor} />
      <circle cx={615.19} cy={692.5} r={10.2} fill={primaryColor} />
      <circle cx={615.19} cy={724.66} r={10.2} fill={primaryColor} />
      <circle cx={547.73} cy={692.5} r={10.2} fill={primaryColor} />
      <circle cx={551.26} cy={724.66} r={10.2} fill={primaryColor} />
      <path d="M425.63 569.54l19.6 15.77s20.89-72 26-75c0-.01-44.32 50.71-45.6 59.23z" opacity={0.1} />
      <path d="M424.89 568.8l19.61 15.77s20.88-72 26-75c-.01-.01-44.33 50.71-45.61 59.23z" fill="#ee1559" />
      <path d="M743.26 564.39l-19.6 15.77s-20.88-72-26-75c0-.01 44.34 50.71 45.6 59.23z" opacity={0.1} />
      <path d="M744 562.93l-19.61 15.77s-20.88-72-26-75c.01-.02 44.33 50.7 45.61 59.23z" fill="#ee1559" />
    </svg>
  );
};

UndrawJasonMask.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawJasonMask;
