import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawWindows = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1014.92 616.5" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={223} y1={366.33} x2={223} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={315}
          y1={481.74}
          x2={315}
          y2={115.42}
          gradientTransform="matrix(-1 0 0 1 1106.92 -115.42)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__c" x1={508} y1={616.5} x2={508} y2={159.83} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M0 0h446v366.33H0z" opacity={0.5} />
      <path fill="#f2f2f2" d="M5.2 6.93h434.74v353.34H5.2z" />
      <path fill={primaryColor} d="M5.2 6.93h434.74v78.81H5.2z" />
      <path opacity={0.1} d="M5.2 6.93h434.74v78.81H5.2z" />
      <path
        fill="#e0e0e0"
        d="M39.84 114.31H405.3v45.9H39.84zM39.84 194.85h266.73v15.59H39.84zM39.84 221.7h173.2v15.59H39.84zM39.84 248.55h228.63v15.59H39.84zM39.84 275.39h266.73v15.59H39.84zM39.84 302.24h89.2v15.59h-89.2z"
      />
      <path fill="url(#prefix__b)" d="M568.92 0h446v366.33h-446z" opacity={0.5} />
      <path fill="#f2f2f2" d="M1009.73 360.26H574.99V6.92h434.74z" />
      <path fill={primaryColor} d="M1009.73 85.73H574.99V6.92h434.74z" />
      <path opacity={0.1} d="M1009.73 85.73H574.99V6.92h434.74z" />
      <path
        fill="#e0e0e0"
        d="M975.09 160.22H609.63v-45.9h365.46zM975.08 210.45H708.35v-15.59h266.73zM975.08 237.29h-173.2V221.7h173.2zM975.09 264.13H746.46v-15.59h228.63zM975.08 290.98H708.35v-15.59h266.73zM975.09 317.83h-89.2v-15.59h89.2z"
      />
      <path fill="url(#prefix__c)" d="M230 159.83h556v456.68H230z" opacity={0.5} />
      <path fill="#fff" d="M236.48 168.46h541.97v440.48H236.48z" />
      <path fill={primaryColor} d="M236.48 168.46h541.97v98.24H236.48z" />
      <path fill="#f5f5f5" d="M279.66 302.33h455.6v57.22h-455.6z" />
      <path
        fill="#e0e0e0"
        d="M279.66 402.74h332.52v19.43H279.66zM279.66 436.21h215.92v19.43H279.66zM279.66 469.67h285.02v19.43H279.66zM279.66 503.14h332.52v19.43H279.66zM279.66 536.61h111.2v19.43h-111.2z"
      />
      <path fill="#69f0ae" d="M303.41 321.77h129.55v17.27H303.41z" />
    </svg>
  );
};

UndrawWindows.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawWindows;
