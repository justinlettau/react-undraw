import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPlainCreditCard = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 910 574.86" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={455} y1={574.86} x2={455} gradientUnits="userSpaceOnUse">
          <stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={187} y1={491.9} x2={187} y2={398} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
        </linearGradient>
      </defs>
      <rect width={910} height={574.86} rx={16.5} ry={16.5} fill="url(#prefix__a)" />
      <rect x={12.41} y={8.56} width={877.18} height={543.02} rx={16.5} ry={16.5} fill="#fff" />
      <path fill={primaryColor} d="M12.41 121.93h877.18v119.34H12.41z" />
      <path fill="#e0e0e0" d="M134.74 293.49h641.48v53.7H134.74z" />
      <path
        fill={primaryColor}
        d="M315.25 403.89h356.54v26.85H315.25zM315.25 445.66h140.23v26.85H315.25zM531.56 445.66h140.23v26.85H531.56z"
      />
      <rect x={127} y={398} width={120} height={93.9} rx={18.5} ry={18.5} fill="url(#prefix__b)" />
      <rect x={134.74} y={403.89} width={104.43} height={82.05} rx={18.5} ry={18.5} fill="#64ffda" />
    </svg>
  );
};

UndrawPlainCreditCard.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPlainCreditCard;
