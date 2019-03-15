import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawAlert = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 983.63 745.7" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={420.85} y1={723.28} x2={420.85} y2={693.5} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={530.19} y1={631.15} x2={530.19} y2={77.15} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__b" x1={414} y1={352.05} x2={414} y2={107.83} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__d" x1={414} y1={334.64} x2={414} y2={305.64} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={414} y1={296.64} x2={414} y2={210.64} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__f"
          x1={966.26}
          y1={815.71}
          x2={966.26}
          y2={378.25}
          gradientTransform="matrix(1 0 0 1.03 .2 -14.4)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__g" x1={858.27} y1={519.31} x2={858.27} y2={400.85} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__h" x1={858.27} y1={510.86} x2={858.27} y2={496.8} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={858.27} y1={492.43} x2={858.27} y2={450.72} xlinkHref="#prefix__a" />
      </defs>
      <path d="M526.47 505.53s20.89 141 144.11 188H171.42c123.22-47 144.11-188 144.11-188z" fill="#e0e0e0" />
      <path fill="url(#prefix__a)" d="M168.91 693.5h503.87v29.78H168.91z" />
      <path fill="#f5f5f5" d="M171.42 693.5h499.16v22.97H171.42z" />
      <path
        d="M941.17 77.15h-822a11.12 11.12 0 0 0-11 11.22v521.87a20.72 20.72 0 0 0 20.53 20.91h802.95a20.72 20.72 0 0 0 20.53-20.91V88.37a11.12 11.12 0 0 0-11.01-11.22z"
        transform="translate(-108.19 -77.15)"
        fill="url(#prefix__c)"
      />
      <path
        d="M832.96 467.94H9.03V22.85a10.75 10.75 0 0 1 10.78-10.73H822.2a10.75 10.75 0 0 1 10.76 10.73z"
        fill="#f5f5f5"
      />
      <path d="M812.91 543.13H29.08a20 20 0 0 1-20-20v-55.19h823.88v55.14a20 20 0 0 1-20.05 20.05z" fill="#fff" />
      <path fill={primaryColor} d="M50.76 68.72h745.6v348.29H50.76z" />
      <path fill="#e0e0e0" d="M49.76 49.04h746.6v30.68H49.76z" />
      <circle cx={66} cy={64.72} r={9} fill="#ff5252" />
      <circle cx={87} cy={64.72} r={9} fill="#ff0" />
      <circle cx={108} cy={64.72} r={9} fill="#69f0ae" />
      <path fill="url(#prefix__b)" d="M414 107.83L279 352.05h270L414 107.83z" />
      <path fill="#fff" d="M414 126.64l-118.71 216h237.42L414 126.64z" />
      <circle cx={414} cy={320.14} r={14.5} fill="url(#prefix__d)" />
      <circle cx={414} cy={320.14} r={12} fill={primaryColor} />
      <path fill="url(#prefix__e)" d="M410 210.64h8v86h-8z" />
      <path fill={primaryColor} d="M411.5 211.14h5v84h-5z" />
      <rect
        x={841.39}
        y={373.76}
        width={250.13}
        height={448.93}
        rx={10}
        ry={10}
        transform="rotate(-.08 -54378.047 78020.4)"
        fill="url(#prefix__f)"
      />
      <rect
        x={847.14}
        y={378.4}
        width={238.61}
        height={427.15}
        rx={10}
        ry={10}
        transform="rotate(-.08 -54378.042 78013.238)"
        fill="#fff"
      />
      <path fill={primaryColor} d="M765.67 331.53l184.73-.259.485 347.61-184.73.258z" />
      <circle cx={966.71} cy={781.25} r={14.73} transform="rotate(-.08 -54378.172 78199.45)" fill="#dbdbdb" />
      <circle cx={938.2} cy={392.43} r={2.95} transform="translate(-108.71 -75.89)" fill="#dbdbdb" />
      <rect
        x={951.45}
        y={390.17}
        width={45.66}
        height={4.42}
        rx={1.5}
        ry={1.5}
        transform="rotate(-.08 -54370.745 77819.87)"
        fill="#dbdbdb"
      />
      <path fill="url(#prefix__g)" d="M858.27 400.85l-65.48 118.46h130.96l-65.48-118.46z" />
      <path fill="#fff" d="M858.27 409.97l-57.58 104.77h115.16l-57.58-104.77z" />
      <circle cx={858.27} cy={503.83} r={7.03} fill="url(#prefix__h)" />
      <circle cx={858.27} cy={503.83} r={5.82} fill={primaryColor} />
      <path fill="url(#prefix__i)" d="M856.33 450.72h3.88v41.71h-3.88z" />
      <path fill={primaryColor} d="M857.06 450.96h2.43v40.74h-2.43z" />
    </svg>
  );
};

UndrawAlert.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawAlert;
