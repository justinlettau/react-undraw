import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawVault = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 678.3 733" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={585.48} y1={733} x2={585.48} y2={673.63} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={93.98} x2={93.98} y2={673.63} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={339.15} y1={681.8} x2={339.15} y2={0} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={339.15} y1={569.14} x2={339.15} y2={111.49} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__e"
          x1={806.95}
          y1={427.79}
          x2={806.95}
          y2={354.24}
          gradientTransform="translate(-.46 -24.57)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__f"
          x1={780.89}
          y1={503.2}
          x2={780.89}
          y2={429.65}
          gradientTransform="rotate(90 788.23 481.69)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__g" x1={565.48} y1={376.26} x2={565.48} y2={302.71} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={339.15} y1={423.21} x2={339.15} y2={255.09} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={290.11} y1={525.36} x2={290.11} y2={499.67} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={322.8} y1={525.36} x2={322.8} y2={499.67} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={355.49} y1={525.36} x2={355.49} y2={499.67} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={388.18} y1={525.36} x2={388.18} y2={499.67} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={339.15} y1={389.93} x2={339.15} y2={288.36} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={377.6} y1={380.54} x2={377.6} y2={283.64} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={377.6} y1={563.83} x2={377.6} y2={466.93} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M560.38 673.63h50.2V733h-50.2z" />
      <path fill="#f5f5f5" d="M609.42 730.83h-47.87v-57.21h47.87z" />
      <path fill="url(#prefix__b)" d="M68.88 673.63h50.2V733h-50.2z" />
      <path fill="#f5f5f5" d="M70.05 673.63h47.87v57.21H70.05z" />
      <rect width={678.3} height={681.8} rx={14.86} ry={14.86} fill="url(#prefix__c)" />
      <rect x={4.67} y={3.5} width={670.12} height={670.12} rx={14.86} ry={14.86} fill="#fafafa" />
      <path fill="url(#prefix__d)" d="M112.66 111.49h452.98v457.65H112.66z" />
      <path transform="rotate(-14.86 353.904 1324.53)" fill="url(#prefix__e)" d="M731.19 329.67h150.6v73.55h-150.6z" />
      <path fill="#fff" d="M464.853 267.018l143.312-38.025 18.265 68.838-143.312 38.025z" />
      <path fill="#69f0ae" d="M470.158 268.021l133.916-35.532 17.068 64.324-133.917 35.532z" />
      <ellipse cx={805.77} cy={366.03} rx={25.68} ry={14.01} transform="rotate(-14.86 353.216 1324.127)" fill="#fff" />
      <path transform="rotate(-71.04 614.22 615.064)" fill="url(#prefix__f)" d="M766.71 399.05h73.55v150.6h-73.55z" />
      <path fill="#fff" d="M484.09 332.578l140.225 48.174-23.14 67.356-140.225-48.174z" />
      <path fill="#69f0ae" d="M487.935 336.373l131.033 45.016-21.623 62.94-131.033-45.016z" />
      <ellipse cx={803.13} cy={473.61} rx={14.01} ry={25.68} transform="rotate(-71.04 613.86 614.322)" fill="#fff" />
      <path fill="url(#prefix__g)" d="M490.18 302.71h150.6v73.55h-150.6z" />
      <path fill="#fff" d="M491.35 303.88h148.27v71.22H491.35z" />
      <path fill="#69f0ae" d="M496.21 306.21h138.55v66.55H496.21z" />
      <ellipse cx={564.9} cy={338.9} rx={25.68} ry={14.01} fill="#fff" />
      <path fill="#fff" d="M116.16 116.16h445.97v445.97H116.16z" />
      <circle cx={339.15} cy={339.15} r={84.06} fill="url(#prefix__h)" />
      <circle cx={339.15} cy={339.15} r={80.56} fill="#fafafa" />
      <path fill="url(#prefix__i)" d="M277.86 499.67h24.52v25.68h-24.52z" />
      <path fill="url(#prefix__j)" d="M310.55 499.67h24.52v25.68h-24.52z" />
      <path fill="url(#prefix__k)" d="M343.23 499.67h24.52v25.68h-24.52z" />
      <path fill="url(#prefix__l)" d="M375.92 499.67h24.52v25.68h-24.52z" />
      <path fill={primaryColor} d="M278.44 500.84h23.35v23.35h-23.35z" />
      <path fill={primaryColor} opacity={0.7} d="M311.13 500.84h23.35v23.35h-23.35z" />
      <path fill={primaryColor} opacity={0.5} d="M343.82 500.84h23.35v23.35h-23.35z" />
      <path fill={primaryColor} opacity={0.3} d="M376.51 500.84h23.35v23.35h-23.35z" />
      <path
        fill={primaryColor}
        d="M372.871 287.937l3.826 2.678L367.325 304l-3.826-2.678zM390.363 372.866l-2.679 3.826-13.385-9.373 2.68-3.825zM305.424 390.358l-3.825-2.678 9.372-13.385 3.825 2.678zM287.941 305.429l2.679-3.825 13.385 9.372-2.679 3.825z"
      />
      <path
        opacity={0.2}
        d="M372.829 287.799l3.825 2.679-9.372 13.385-3.825-2.68zM390.325 372.732l-2.679 3.825-13.385-9.372 2.679-3.825zM305.392 390.218l-3.825-2.679 9.372-13.385 3.826 2.679zM287.904 305.291l2.678-3.825 13.385 9.372-2.678 3.826z"
      />
      <circle cx={339.15} cy={339.15} r={50.78} fill="url(#prefix__m)" />
      <circle cx={339.15} cy={339.15} r={47.87} fill={primaryColor} />
      <path
        d="M300.04 345.57A47.86 47.86 0 0 1 371.71 304a47.86 47.86 0 1 0-57 76 47.71 47.71 0 0 1-14.67-34.43z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M396.28 380.54h-37.36v-93.28a3.63 3.63 0 0 1 3.63-3.62h30.11a3.63 3.63 0 0 1 3.63 3.63z"
        transform="translate(-260.85 -84)"
        fill="url(#prefix__n)"
      />
      <path
        d="M392.47 563.83h-29.74a3.81 3.81 0 0 1-3.81-3.81v-93.09h37.36V560a3.81 3.81 0 0 1-3.81 3.83z"
        transform="translate(-260.85 -84)"
        fill="url(#prefix__o)"
      />
      <path
        d="M102.4 200.8h28.69a3.17 3.17 0 0 1 3.17 3.17v90.23h-35V204a3.17 3.17 0 0 1 3.14-3.2zM99.23 384.1h35v92.33a1.06 1.06 0 0 1-1.06 1.06H100.3a1.06 1.06 0 0 1-1.06-1.06V384.1h-.01z"
        fill="#fafafa"
      />
    </svg>
  );
};

UndrawVault.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawVault;
