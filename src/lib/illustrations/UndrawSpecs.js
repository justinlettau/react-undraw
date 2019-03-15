import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSpecs = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 887.37 759.32" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={506.4}
          y1={439.52}
          x2={506.4}
          y2={130.8}
          gradientTransform="translate(-16.76 -20.68)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={379.37}
          y1={769.66}
          x2={379.37}
          y2={327.66}
          gradientTransform="translate(59.33 9.94)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__c" x1={730.07} y1={729.34} x2={730.07} y2={659.46} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={607.9} y1={698.71} x2={607.9} y2={670.12} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__e"
          x1={854.95}
          y1={374.84}
          x2={985.81}
          y2={65.83}
          gradientTransform="rotate(90 923.425 234.135)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__f"
          x1={485.61}
          y1={585.05}
          x2={485.61}
          y2={381.09}
          gradientTransform="rotate(90 683.55 551.03)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__g"
          x1={509.53}
          y1={656.67}
          x2={509.53}
          y2={453.47}
          gradientTransform="translate(209.29 -186.27)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__h"
          x1={502.64}
          y1={656.89}
          x2={502.64}
          y2={453.69}
          gradientTransform="translate(200.82 -175.06)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__i"
          x1={504.18}
          y1={668.85}
          x2={504.18}
          y2={465.65}
          gradientTransform="translate(190.32 -175.35)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__j" x1={695.2} y1={610.94} x2={695.2} y2={400.94} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={841.52} y1={638.78} x2={841.52} y2={513.78} xlinkHref="#prefix__a" />
      </defs>
      <rect
        x={383}
        y={110.12}
        width={213.27}
        height={308.72}
        rx={13.44}
        transform="rotate(-12.75 96.808 928.906)"
        fill="url(#prefix__a)"
      />
      <rect
        x={384.68}
        y={114.08}
        width={207.97}
        height={302.01}
        rx={13.44}
        transform="rotate(-12.75 95.833 929.522)"
        fill={primaryColor}
      />
      <path transform="rotate(-20.67 167.774 952.108)" fill="url(#prefix__b)" d="M256.6 337.6h364.19v442H256.6z" />
      <path fill="#fff" d="M38.235 347.74l334.553-126.217 153.097 405.8L191.332 753.54z" />
      <path
        fill={primaryColor}
        d="M217.051 627.065l150.244-56.682 2.336 6.194-150.243 56.682zM231.076 664.235l246.266-92.91 2.337 6.195-246.267 92.909zM399.818 558.118l63.501-23.957 2.337 6.194-63.501 23.957zM224.055 645.66l63.501-23.958 2.337 6.194-63.501 23.957zM315.451 611.18l63.501-23.958 2.337 6.194-63.501 23.957zM406.838 576.703l63.501-23.957 2.337 6.194-63.501 23.957zM149.19 417.81l185.863-70.12 25.712 68.15-185.863 70.12z"
      />
      <path
        d="M748.93 687.15a24.07 24.07 0 0 0 .36-4.11 23.59 23.59 0 1 0-38.07 18.61 23.18 23.18 0 0 0-.37 4.11 23.59 23.59 0 1 0 38.08-18.61z"
        transform="translate(-156.32 -70.34)"
        fill="url(#prefix__c)"
      />
      <circle cx={577.73} cy={634.39} r={21.44} fill={primaryColor} />
      <circle cx={607.9} cy={684.42} r={14.3} fill="url(#prefix__d)" />
      <circle cx={607.9} cy={684.42} r={12.71} fill={primaryColor} />
      <circle cx={569.78} cy={613.74} r={21.44} fill={primaryColor} />
      <g opacity={0.5} fill="#47e6b1">
        <path d="M668 0h3v17h-3z" />
        <path d="M678 7v3h-17V7z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M174 135h3v17h-3z" />
        <path d="M184 142v3h-17v-3z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M401 717h3v17h-3z" />
        <path d="M411 724v3h-17v-3z" />
      </g>
      <path
        d="M789.89 588.95a3.67 3.67 0 0 1-2.05-4.44 1.89 1.89 0 0 0 .08-.4 1.84 1.84 0 0 0-3.31-1.23 1.9 1.9 0 0 0-.2.37 3.68 3.68 0 0 1-4.45 2 1.77 1.77 0 0 0-.4-.08 1.84 1.84 0 0 0-1.22 3.31 1.62 1.62 0 0 0 .36.21 3.68 3.68 0 0 1 2.05 4.44 1.15 1.15 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 2.53 2.53 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.86 1.86 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 2.6 2.6 0 0 0-.36-.22zM713.89 689.95a3.67 3.67 0 0 1-2.05-4.44 1.89 1.89 0 0 0 .08-.4 1.84 1.84 0 0 0-3.31-1.23 1.9 1.9 0 0 0-.2.37 3.68 3.68 0 0 1-4.45 2 1.77 1.77 0 0 0-.4-.08 1.84 1.84 0 0 0-1.22 3.31 1.62 1.62 0 0 0 .36.21 3.68 3.68 0 0 1 2.05 4.44 1.15 1.15 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 2.53 2.53 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.86 1.86 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 2.6 2.6 0 0 0-.36-.22zM96.89 641.95a3.67 3.67 0 0 1-2.05-4.44 1.89 1.89 0 0 0 .08-.4 1.84 1.84 0 0 0-3.31-1.23 1.9 1.9 0 0 0-.2.37 3.68 3.68 0 0 1-4.45 2 1.77 1.77 0 0 0-.4-.08 1.84 1.84 0 0 0-1.22 3.31 1.62 1.62 0 0 0 .36.21 3.68 3.68 0 0 1 2 4.44 1.15 1.15 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 2.53 2.53 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.86 1.86 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 2.6 2.6 0 0 0-.31-.22z"
        fill="#4d8af0"
        opacity={0.5}
      />
      <circle cx={493} cy={56} r={6} fill="#f55f44" opacity={0.5} />
      <circle cx={6} cy={73} r={6} fill="#4d8af0" opacity={0.5} />
      <circle cx={843} cy={411} r={6} fill="#47e6b1" opacity={0.5} />
      <circle cx={59} cy={301} r={6} fill="#f55f44" opacity={0.5} />
      <path
        d="M794.22 148.35h286a6.29 6.29 0 0 1 6.29 6.29v152.92a6.28 6.28 0 0 1-6.28 6.28h-286a6.29 6.29 0 0 1-6.29-6.29V154.64a6.29 6.29 0 0 1 6.29-6.29z"
        transform="rotate(-79.98 817.146 289.099)"
        fill="url(#prefix__e)"
        opacity={0.5}
      />
      <rect
        x={856.72}
        y={85.71}
        width={161.02}
        height={290.64}
        rx={13.64}
        transform="rotate(10.02 1260.163 -695.729)"
        fill="#fff"
      />
      <path
        d="M844.76 31.8a13 13 0 0 1-14.6 8.69l-54.77-9.67a13.06 13.06 0 0 1-10.71-13.16l-29-5.13a6.11 6.11 0 0 0-7.08 5l-45.92 259.76a6.12 6.12 0 0 0 4.95 7.09l138.55 24.48a6.11 6.11 0 0 0 7.09-5l45.9-259.81a6.11 6.11 0 0 0-5-7.09z"
        fill="#e0e0e0"
      />
      <rect
        x={941.07}
        y={98.26}
        width={35.88}
        height={2.24}
        rx={1.12}
        transform="rotate(9.3 1312.92 -896.745)"
        fill="#dbdbdb"
      />
      <circle cx={827.96} cy={32.96} r={1.35} fill="#dbdbdb" />
      <path fill="#fff" d="M736.697 62.668l43.482 6.731-5.813 37.553-43.482-6.731z" />
      <path fill={primaryColor} opacity={0.3} d="M728.281 117.01l43.482 6.731-5.813 37.553-43.482-6.731z" />
      <path fill="#fff" d="M719.876 171.364l43.482 6.731-5.814 37.553-43.482-6.732z" />
      <path fill="#3ad29f" opacity={0.3} d="M711.46 225.716l43.482 6.731L749.129 270l-43.483-6.732z" />
      <path
        fill="#fff"
        d="M789.681 79.97L847 88.843l-.612 3.953-57.318-8.873zM787.849 91.829l57.317 8.873-.612 3.953-57.317-8.873zM781.414 133.337l57.317 8.873-.612 3.953-57.317-8.874zM781.895 142.793l57.42 8.7-.6 3.96-57.42-8.7zM773.158 186.705l57.317 8.873-.612 3.953-57.317-8.873zM771.325 198.564l57.317 8.873-.612 3.953-57.317-8.873zM764.892 240.061l57.317 8.874-.612 3.952-57.317-8.873zM763.059 251.92l57.317 8.873-.612 3.953-57.317-8.873z"
      />
      <path
        transform="rotate(-89.44 637.817 396.862)"
        fill="url(#prefix__f)"
        d="M649.53 321.92h203.96v62.36H649.53z"
        opacity={0.5}
      />
      <path fill="#e0e0e0" d="M567.068 181.818l59.287.58-1.967 201.22-59.287-.58z" />
      <path fill="#4d8af0" d="M575.786 185.141l41.908.41-.41 41.908-41.908-.41z" />
      <path fill="#4d8af0" opacity={0.5} d="M575.281 235.744l41.908.41-.41 41.907-41.907-.41z" />
      <path fill="#4d8af0" opacity={0.3} d="M574.787 286.336l41.908.41-.41 41.908-41.908-.41z" />
      <path
        transform="rotate(-18.2 405.546 822.217)"
        fill="url(#prefix__g)"
        d="M687.64 267.19H750v203.2h-62.36z"
        opacity={0.5}
      />
      <path fill="#f5f5f5" d="M504.139 211.954l56.458-18.105 61.216 190.894-56.458 18.105z" />
      <path fill="#ff5252" d="M513.436 212.374l39.908-12.798 12.798 39.908-39.908 12.798z" />
      <path fill="#ff5252" opacity={0.5} d="M528.903 260.561l39.908-12.798 12.798 39.908L541.7 300.47z" />
      <path fill="#ff5252" opacity={0.3} d="M544.347 308.742l39.909-12.798 12.797 39.908-39.908 12.798z" />
      <path
        transform="rotate(-29.48 491.571 642.13)"
        fill="url(#prefix__h)"
        d="M672.28 278.64h62.36v203.2h-62.36z"
        opacity={0.5}
      />
      <path fill="#f5f5f5" d="M472.452 236.953l51.614-29.177 98.655 174.514-51.613 29.178z" />
      <path fill="#69f0ae" d="M481.623 235.485l36.484-20.625 20.624 36.484-36.483 20.625z" />
      <path fill="#69f0ae" opacity={0.5} d="M506.522 279.537l36.484-20.625 20.624 36.484-36.483 20.624z" />
      <path fill="#69f0ae" opacity={0.3} d="M531.426 323.59l36.484-20.625 20.624 36.484-36.483 20.624z" />
      <path
        transform="rotate(-36.68 510.265 592.506)"
        fill="url(#prefix__i)"
        d="M663.32 290.3h62.36v203.2h-62.36z"
        opacity={0.5}
      />
      <path fill="#fff" d="M454.94 258.596l47.55-35.416 119.75 160.773-47.55 35.417z" />
      <path fill={primaryColor} d="M463.831 255.991l33.611-25.035 25.035 33.611-33.611 25.035z" />
      <path fill={primaryColor} opacity={0.5} d="M494.071 296.586l33.611-25.035 25.035 33.611-33.611 25.035z" />
      <path fill={primaryColor} opacity={0.3} d="M524.296 337.163l33.61-25.035 25.035 33.611-33.61 25.035z" />
      <circle cx={695.2} cy={505.94} r={105} fill="url(#prefix__j)" />
      <circle cx={695.2} cy={505.94} r={100} fill="#f5f5f5" />
      <path
        d="M854.28 513.81A62.5 62.5 0 0 0 790 569.63h-18a3.64 3.64 0 0 0-3.64 3.64v6a3.64 3.64 0 0 0 3.64 3.64h18a62.5 62.5 0 1 0 64.27-69.11z"
        transform="translate(-156.32 -70.34)"
        fill="url(#prefix__k)"
        opacity={0.5}
      />
      <path
        d="M697.19 447.22a58.75 58.75 0 0 0-60.41 52.44h-17.42a2.91 2.91 0 0 0-2.91 2.91v6.67a2.91 2.91 0 0 0 2.91 2.92h17.42a58.75 58.75 0 1 0 60.41-65z"
        fill="#fff"
      />
      <circle cx={695.2} cy={505.94} r={41.25} fill="#795548" />
      <path d="M716.45 485.94s11.76 18.28 8.4 32.5c0 0 13.45-22.35-8.4-32.5z" fill="#fff" opacity={0.2} />
      <circle cx={721.45} cy={528.44} r={3.75} fill="#fff" opacity={0.2} />
    </svg>
  );
};

UndrawSpecs.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSpecs;
