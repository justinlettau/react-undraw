import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSetup = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 907.03 730" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={219.02} y1={323.78} x2={219.02} y2={74.96} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={33.88} y1={206.96} x2={182.23} y2={206.96} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={749.04} y1={221.83} x2={749.04} y2={112.64} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={628.36} y1={671.95} x2={628.36} y2={527.93} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={499.83} y1={650.24} x2={499.83} y2={549.64} xlinkHref="#prefix__a" />
      </defs>
      <circle
        cx={423.15}
        cy={365}
        r={363}
        fill="none"
        stroke="#64ffda"
        strokeMiterlimit={10}
        strokeWidth={4}
        strokeDasharray="12.07 15.09"
      />
      <path fill={primaryColor} opacity={0.2} d="M76.24 109.89h381.98v242.97H76.24z" />
      <path fill="url(#prefix__a)" d="M0 74.96h438.05v248.81H0z" />
      <path fill="#fff" d="M4.67 111.18h427.54v206.76H4.67z" />
      <path fill="url(#prefix__b)" d="M33.88 128.7h148.35v156.53H33.88z" />
      <path fill={primaryColor} d="M38.55 132.2h140.18v149.52H38.55z" />
      <path
        d="M147.79 191.24c-1.1-8.88-2.61-17.81-6-26.09s-8.86-15.94-16.46-20.66a18.81 18.81 0 0 0-9.1-3.15c-6-.21-11.45 3.8-14.52 8.91a41.57 41.57 0 0 0-2.71 5.51 12.83 12.83 0 0 0-10.65 11.75 32.72 32.72 0 0 0 4.63 61.78v5.58a32.84 32.84 0 0 0-24.53 31.67v15.19h65.42v-15.19a32.84 32.84 0 0 0-24.53-31.67v-5.58a32.72 32.72 0 0 0 24.53-31.68v-.23l3.68 8.19c3.5 7.8 7.09 16.18 5.73 24.62 6.7-11.48 6.14-25.73 4.51-38.95z"
        fill="#fff"
      />
      <path fill={primaryColor} d="M4.67 79.64h427.54v31.54H4.67z" />
      <path fill="#e0e0e0" d="M235.96 176.01h162.37v10.51H235.96z" />
      <path fill="#f5f5f5" d="M235.96 220.4h162.37v10.51H235.96z" />
      <path fill={primaryColor} opacity={0.2} d="M234.79 198.2h95.79v10.51h-95.79z" />
      <path fill="#69f0ae" opacity={0.2} d="M234.79 242.59h65.42v10.51h-65.42z" />
      <path fill="#69f0ae" d="M311.89 242.59h65.42v10.51h-65.42z" />
      <path fill="#ff6e40" opacity={0.2} d="M667.36 136.67h215.55v100.52H667.36z" />
      <path fill="url(#prefix__c)" d="M633.47 112.64h231.14v109.19H633.47z" />
      <path fill="#fff" d="M641.97 115.24h215.55v100.52H641.97z" />
      <path fill="#ff6e40" opacity={0.3} d="M674.63 137.22h125.74v11.93H674.63z" />
      <path fill="#ff6e40" d="M674.63 164.52h65.21v11.93h-65.21z" />
      <path fill={primaryColor} opacity={0.2} d="M404.2 557.44h502.83v135.25H404.2z" />
      <path fill="url(#prefix__d)" d="M373.29 527.93h510.15v144.01H373.29z" />
      <path fill="#fff" d="M376.95 532.81h502.83v134.25H376.95z" />
      <circle cx={499.83} cy={599.94} r={50.3} fill="url(#prefix__e)" />
      <circle cx={499.83} cy={599.94} r={44.71} fill={primaryColor} />
      <g opacity={0.2} fill={primaryColor}>
        <path d="M587.85 566.41h79.64v13.97h-79.64zM587.85 592.95H807.2v13.97H587.85zM587.85 619.5H807.2v13.97H587.85z" />
      </g>
      <path
        fill="#fff"
        d="M529.17 582.01l-9.82-7.49-25.88 33.91-14.44-11.02-7.49 9.81L490.9 622l.05-.07 4.9 3.74 33.32-43.66z"
      />
    </svg>
  );
};

UndrawSetup.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSetup;
