import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawDocuments = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 814 778.22" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={253.26} y1={778.22} x2={253.26} y2={105.1} gradientUnits="userSpaceOnUse">
          <stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={49.76} y1={202.38} x2={49.76} y2={112.93} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={408.68} y1={722.31} x2={408.68} y2={49.2} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={205.18} y1={146.48} x2={205.18} y2={57.02} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__e" x1={560.74} y1={673.12} x2={560.74} y2={0} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={357.24} y1={97.28} x2={357.24} y2={7.83} xlinkHref="#prefix__b" />
      </defs>
      <path fill="url(#prefix__a)" d="M506.51 778.22H0V189.97l76.53-84.87h429.98v673.12z" />
      <path fill="#fafafa" d="M498.69 760.33H8.95V194.56l73.99-81.63h415.75v647.4z" />
      <path fill="#e0e0e0" d="M56.76 182.81h238.59v40.25H56.76zM57.24 292.95h174.84v40.25H57.24z" />
      <path fill={primaryColor} d="M57.24 458.43h392.18v147.59H57.24z" />
      <path fill="#f5f5f5" d="M360.55 183.37h88.87v40.25h-88.87zM360.55 245.99h88.87v40.25h-88.87z" />
      <path fill="url(#prefix__b)" d="M90.57 112.93v89.45H8.95v-7.82l73.79-81.63h7.83z" />
      <path fill="#eee" d="M8.75 194.56l73.99-81.63v81.63H8.75z" />
      <path fill="url(#prefix__c)" d="M661.93 722.31H155.42V134.06l76.53-84.86h429.98v673.11z" />
      <path fill="#fafafa" d="M654.11 704.42H164.37V138.65l73.99-81.63h415.75v647.4z" />
      <path fill="#e0e0e0" d="M212.18 126.91h238.59v40.25H212.18zM212.66 237.04H387.5v40.25H212.66z" />
      <path fill={primaryColor} d="M212.66 402.53h392.18v147.59H212.66z" />
      <path fill="#f5f5f5" d="M515.97 127.47h88.87v40.25h-88.87zM515.97 190.08h88.87v40.25h-88.87z" />
      <path fill="url(#prefix__d)" d="M245.99 57.02v89.45h-81.62v-7.82l73.79-81.63h7.83z" />
      <path fill="#eee" d="M164.17 138.65l73.99-81.63v81.63h-73.99z" />
      <path fill="url(#prefix__e)" d="M814 673.12H307.49V84.87L384.01 0H814v673.12z" />
      <path fill="#fff" d="M806.17 655.23H316.43V89.45l74-81.62h415.74v647.4z" />
      <path fill="#e0e0e0" d="M364.25 77.71h238.59v40.25H364.25zM364.73 187.85h174.84v40.25H364.73z" />
      <path fill={primaryColor} d="M364.73 353.33h392.18v147.59H364.73z" />
      <path
        fill="#e0e0e0"
        d="M668.04 78.27h88.87v40.25h-88.87zM668.04 140.88h88.87v40.25h-88.87zM668.04 203.5h88.87v40.25h-88.87z"
      />
      <path fill="url(#prefix__f)" d="M398.06 7.83v89.45h-81.63v-7.83l73.8-81.62h7.83z" />
      <path fill="#eee" d="M316.23 89.45l74-81.62v81.62h-74z" />
    </svg>
  );
};

UndrawDocuments.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawDocuments;
