import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawUpvote = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 884.93 613.66" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={442.47} y1={613.66} x2={442.47} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path fill="url(#prefix__a)" d="M0 0V613.66h884.93V0H0z" opacity={0.5} />
      <path fill="#fff" d="M13.13 38.18h862.43v564.57H13.13z" />
      <path fill="#f5f5f5" d="M13.13 11.33h862.43v41.54H13.13z" />
      <circle cx={45.95} cy={31.47} r={10.07} fill="#ff5252" />
      <circle cx={73.64} cy={31.47} r={10.07} fill="#ff0" />
      <circle cx={101.33} cy={31.47} r={10.07} fill="#69f0ae" />
      <path fill={primaryColor} d="M180.54 158.51h289.13v28.28H180.54z" />
      <path fill="#e0e0e0" d="M179.49 219.26h645.3v28.28h-645.3zM179.49 280.02h645.3v28.28h-645.3z" />
      <path
        fill={primaryColor}
        opacity={0.5}
        d="M180.54 338.91h289.13v28.28H180.54zM179.49 399.67h645.3v28.28h-645.3z"
      />
      <path fill="#e0e0e0" d="M179.49 460.42h645.3v28.28h-645.3z" />
      <path fill="none" stroke="#3ad29f" strokeMiterlimit={10} strokeWidth={6} d="M131.11 158.33v25.66" />
      <path fill="#3ad29f" d="M120.94 170.28l10.17-10.17 10.17 10.17v-8.63l-10.17-10.18-10.17 10.18v8.63z" />
      <path fill="none" stroke="#e0e0e0" strokeMiterlimit={10} strokeWidth={6} d="M131.11 223.37v25.65" />
      <path fill="#e0e0e0" d="M120.94 235.32l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z" />
      <path fill="none" stroke="#e0e0e0" strokeMiterlimit={10} strokeWidth={6} d="M131.11 288.4v25.66" />
      <path fill="#e0e0e0" d="M120.94 300.35l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z" />
      <path fill="none" stroke="#e0e0e0" strokeMiterlimit={10} strokeWidth={6} d="M131.11 342.59v25.66" />
      <path fill="#e0e0e0" d="M120.94 354.54l10.17-10.17 10.17 10.17v-8.63l-10.17-10.17-10.17 10.17v8.63z" />
      <path fill="none" stroke="#e0e0e0" strokeMiterlimit={10} strokeWidth={6} d="M131.11 407.62v25.66" />
      <path fill="#e0e0e0" d="M120.94 419.58l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z" />
      <path fill="none" stroke="#e0e0e0" strokeMiterlimit={10} strokeWidth={6} d="M131.11 472.66v25.66" />
      <path fill="#e0e0e0" d="M120.94 484.61l10.17-10.18 10.17 10.18v-8.64l-10.17-10.17-10.17 10.17v8.64z" />
    </svg>
  );
};

UndrawUpvote.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawUpvote;
