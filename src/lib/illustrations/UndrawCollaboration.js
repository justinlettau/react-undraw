import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCollaboration = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1038.87 810.47" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={534.92} y1={810.47} x2={534.92} y2={222.47} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={717.42} y1={294.47} x2={717.42} y2={230.47} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={395.42} y1={397.47} x2={395.42} y2={329.47} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={395.42} y1={535.47} x2={395.42} y2={467.47} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={395.42} y1={673.47} x2={395.42} y2={605.47} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={908.9} y1={430.51} x2={908.9} y2={279} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={540.9} y1={151.51} x2={540.9} y2={0} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={179.9} y1={645.51} x2={179.9} y2={494} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M755.41 810.47H314.42v-588h371l69.99 72v516z" opacity={0.5} />
      <path fill="#fff" d="M752.41 801.47H319.42v-575h366.33l66.66 65v510z" />
      <path fill="url(#prefix__b)" d="M682.41 294.47v-64h5.76l64.24 64h-70z" opacity={0.5} />
      <path fill="#fafafa" d="M685.41 291.47v-65l67 65h-67z" />
      <circle cx={395.42} cy={363.47} r={34} fill="url(#prefix__c)" opacity={0.5} />
      <circle cx={395.42} cy={363.47} r={32} fill="#69f0ae" />
      <circle cx={395.42} cy={501.47} r={34} fill="url(#prefix__d)" opacity={0.5} />
      <circle cx={395.42} cy={501.47} r={32} fill="#e0e0e0" />
      <circle cx={395.42} cy={639.47} r={34} fill="url(#prefix__e)" opacity={0.5} />
      <circle cx={395.42} cy={639.47} r={32} fill="#e0e0e0" />
      <path
        fill="#e0e0e0"
        d="M474.42 351.47h86v6h-86zM474.42 360.47h142v6h-142zM474.42 369.47h132v6h-132zM474.42 489.47h86v6h-86zM474.42 498.47h142v6h-142zM474.42 507.47h132v6h-132zM474.42 627.47h86v6h-86zM474.42 636.47h142v6h-142zM474.42 645.47h132v6h-132z"
      />
      <path
        fill="#fff"
        d="M383.42 361.47l12 11 17-25 6 5-23 30-17-19 5-2zM383.42 498.47l12 11 17-25 6 5-23 30-17-19 5-2zM383.42 635.47l12 11 17-25 6 5-23 30-17-19 5-2z"
      />
      <rect
        x={837.88}
        y={279}
        width={142.04}
        height={151.51}
        rx={41.07}
        ry={41.07}
        fill="url(#prefix__f)"
        opacity={0.5}
      />
      <rect x={841.51} y={282.41} width={134} height={142.93} rx={41.07} ry={41.07} fill={primaryColor} />
      <path
        d="M916.17 382.01v-5.07a32 32 0 1 0-16 0v5.07a31.12 31.12 0 0 0-23 29.94v14h62v-14a31.12 31.12 0 0 0-23-29.94z"
        fill="#fff"
      />
      <circle cx={908.17} cy={338.95} r={34} fill="#fff" />
      <path
        d="M942.08 341.3s-1.91 36.65 13.09 40.65c0 0-31 17-37-20zM874.26 341.3s1.91 36.65-13.09 40.65c0 0 31 17 37-20z"
        fill="#fff"
      />
      <rect x={469.88} width={142.04} height={151.51} rx={41.07} ry={41.07} fill="url(#prefix__g)" opacity={0.5} />
      <rect x={473.9} y={4.29} width={134} height={142.93} rx={41.07} ry={41.07} fill={primaryColor} />
      <path
        d="M585.94 60.85c-1-8.49-2.5-17-5.75-24.94s-8.47-15.23-15.75-19.75a18 18 0 0 0-8.7-3c-5.69-.2-10.95 3.64-13.88 8.52a39.74 39.74 0 0 0-2.59 5.27 12.27 12.27 0 0 0-10.18 11.24 31.28 31.28 0 0 0 4.44 59.05v5.33a31.39 31.39 0 0 0-23.45 30.27v14.5h62.53v-14.51a31.39 31.39 0 0 0-23.45-30.27v-5.32a31.28 31.28 0 0 0 23.45-30.28v-.22l3.52 7.83c3.35 7.46 6.78 15.46 5.47 23.54 6.43-11 5.9-24.62 4.34-37.26z"
        fill="#fff"
      />
      <rect
        x={108.88}
        y={494}
        width={142.04}
        height={151.51}
        rx={41.07}
        ry={41.07}
        fill="url(#prefix__h)"
        opacity={0.5}
      />
      <rect x={112.9} y={498.29} width={134} height={142.93} rx={41.07} ry={41.07} fill={primaryColor} />
      <path
        d="M153.89 557.94a23.91 23.91 0 0 1-2.63-12.4 16.58 16.58 0 0 1 5.46-11.25c3.59-3.06 8.46-4.14 13.16-4.52s9.47-.15 14.1-1.06a29.47 29.47 0 0 0 18.82-12.76 39.63 39.63 0 0 1-.1 10.85c-.7 3.56-2.53 7.06-5.62 9 3.74-1.73 3.34 2.33 2.52 4.76 1.86 2.24 6.36 2.61 6.59 5.51a18.24 18.24 0 0 1-.94 8.57c-1.13 2.67.08 7.38-2.81 7.59"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path
        d="M199.22 534.4s16.45 1.43 4.74 25.86M187.17 598.01v-5.07a32 32 0 1 0-16 0v5.07a31.12 31.12 0 0 0-23 29.94v14h62v-14a31.12 31.12 0 0 0-23-29.94z"
        fill="#fff"
      />
      <path fill="none" stroke="#cfd8dc" strokeMiterlimit={10} strokeWidth={2} d="M178.92 451.47v-6" />
      <path
        fill="none"
        stroke="#cfd8dc"
        strokeMiterlimit={10}
        strokeWidth={2}
        strokeDasharray="12 12"
        d="M178.92 433.47v-330"
      />
      <path fill="none" stroke="#cfd8dc" strokeMiterlimit={10} strokeWidth={2} d="M178.91 97.47v-6h6" />
      <path
        fill="none"
        stroke="#cfd8dc"
        strokeMiterlimit={10}
        strokeWidth={2}
        strokeDasharray="11.86 11.86"
        d="M196.77 91.47h231.22"
      />
      <path fill="none" stroke="#cfd8dc" strokeMiterlimit={10} strokeWidth={2} d="M433.92 91.47h6M651.92 91.47h6" />
      <path
        fill="none"
        stroke="#cfd8dc"
        strokeMiterlimit={10}
        strokeWidth={2}
        strokeDasharray="11.87 11.87"
        d="M669.78 91.47h255.2"
      />
      <path fill="none" stroke="#cfd8dc" strokeMiterlimit={10} strokeWidth={2} d="M930.91 91.47h6v6" />
      <path
        fill="none"
        stroke="#cfd8dc"
        strokeMiterlimit={10}
        strokeWidth={2}
        strokeDasharray="12.73 12.73"
        d="M936.92 110.2v120.91"
      />
      <path fill="none" stroke="#cfd8dc" strokeMiterlimit={10} strokeWidth={2} d="M936.92 237.47v6" />
      <path
        fill="#69f0ae"
        opacity={0.3}
        d="M5.063 540.554l8.764 5.06-5.06 8.764-8.764-5.06zM704.065 42.553l8.764 5.06-5.06 8.765-8.764-5.06z"
      />
      <path
        fill="#4d8af0"
        opacity={0.3}
        d="M223.066 687.56l8.765 5.06-5.06 8.764-8.765-5.06zM792.065 197.557l8.764 5.06-5.06 8.765-8.764-5.06z"
      />
      <circle cx={831.92} cy={667.47} r={6} fill="#69f0ae" opacity={0.3} />
      <circle cx={261.92} cy={262.47} r={6} fill="#69f0ae" opacity={0.3} />
      <circle cx={873.92} cy={533.47} r={6} fill="#ff5252" opacity={0.3} />
      <path
        d="M1034.87 44.89a2.05 2.05 0 0 0 2 1.42 2.05 2.05 0 0 1 1.21 3.71 2.05 2.05 0 0 0-.75 2.29 2.05 2.05 0 0 1-3.16 2.29 2.05 2.05 0 0 0-2.41 0 2.05 2.05 0 0 1-3.16-2.29 2.05 2.05 0 0 0-.75-2.29 2.05 2.05 0 0 1 1.21-3.71 2.05 2.05 0 0 0 2-1.42 2.05 2.05 0 0 1 3.81 0zM269.87 511.89a2.05 2.05 0 0 0 2 1.42 2.05 2.05 0 0 1 1.21 3.71 2.05 2.05 0 0 0-.75 2.29 2.05 2.05 0 0 1-3.16 2.29 2.05 2.05 0 0 0-2.41 0 2.05 2.05 0 0 1-3.16-2.29 2.05 2.05 0 0 0-.75-2.29 2.05 2.05 0 0 1 1.21-3.71 2.05 2.05 0 0 0 2-1.42 2.05 2.05 0 0 1 3.81 0zM135.87 75.89a2.05 2.05 0 0 0 2 1.42 2.05 2.05 0 0 1 1.21 3.71 2.05 2.05 0 0 0-.75 2.29 2.05 2.05 0 0 1-3.16 2.29 2.05 2.05 0 0 0-2.41 0 2.05 2.05 0 0 1-3.16-2.29 2.05 2.05 0 0 0-.75-2.29 2.05 2.05 0 0 1 1.21-3.71 2.05 2.05 0 0 0 2-1.42 2.05 2.05 0 0 1 3.81 0z"
        fill="#ff5252"
        opacity={0.3}
      />
      <path
        d="M430.87 8.89a2.05 2.05 0 0 0 2 1.42 2.05 2.05 0 0 1 1.21 3.71 2.05 2.05 0 0 0-.75 2.29 2.05 2.05 0 0 1-3.16 2.29 2.05 2.05 0 0 0-2.41 0 2.05 2.05 0 0 1-3.16-2.29 2.05 2.05 0 0 0-.75-2.29 2.05 2.05 0 0 1 1.21-3.71 2.05 2.05 0 0 0 2-1.42 2.05 2.05 0 0 1 3.81 0zM987.87 286.89a2.05 2.05 0 0 0 2 1.42 2.05 2.05 0 0 1 1.21 3.71 2.05 2.05 0 0 0-.75 2.29 2.05 2.05 0 0 1-3.16 2.29 2.05 2.05 0 0 0-2.41 0 2.05 2.05 0 0 1-3.16-2.29 2.05 2.05 0 0 0-.75-2.29 2.05 2.05 0 0 1 1.21-3.71 2.05 2.05 0 0 0 2-1.42 2.05 2.05 0 0 1 3.81 0z"
        fill="#4d8af0"
        opacity={0.3}
      />
    </svg>
  );
};

UndrawCollaboration.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCollaboration;
