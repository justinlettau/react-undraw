import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawStatistics = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 863 769.5" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={279.59} y1={769.5} x2={279.59} y2={175.12} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={583.59} x2={583.59} y2={175.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={434} x2={434} y2={118.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={431.5} y1={426.5} x2={431.5} y2={23.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={751.69} y1={377.75} x2={751.69} y2={246.43} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__f"
          x1={415.98}
          y1={335.24}
          x2={415.98}
          y2={303.64}
          gradientTransform="rotate(-90 295.375 407.625)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__g"
          x1={454.87}
          y1={357.11}
          x2={454.87}
          y2={325.52}
          gradientTransform="rotate(-90 295.375 407.625)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__h"
          x1={435.42}
          y1={378.98}
          x2={435.42}
          y2={347.39}
          gradientTransform="rotate(-90 295.375 407.625)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__i"
          x1={489.7}
          y1={400.86}
          x2={489.7}
          y2={369.26}
          gradientTransform="rotate(-90 295.375 407.625)"
          xlinkHref="#prefix__a"
        />
      </defs>
      <path fill="url(#prefix__a)" d="M149.58 769.31l-24.58.19 289.42-594.38 19.75 9.77-284.59 584.42z" />
      <path fill="url(#prefix__b)" d="M715.76 769.31l20.24.19-285.08-594.38-19.75 9.77 284.59 584.42z" />
      <path fill="url(#prefix__c)" d="M423 118.5h22v651h-22z" />
      <path fill="#bdbdbd" d="M149.58 764.31l-24.58.19 289.42-589.81 19.75 9.69-284.59 579.93z" />
      <path fill="#bdbdbd" d="M715.76 764.31l20.24.19-285.08-589.81-19.75 9.69 284.59 579.93z" />
      <path
        fill="#bdbdbd"
        d="M423 118.5h22v646h-22zM431.5 66a28 28 0 0 1-28-28V28a28 28 0 0 1 56 0v10a28 28 0 0 1-28 28zm0-59a21 21 0 0 0-21 21v10a21 21 0 0 0 42 0V28a21 21 0 0 0-21-21z"
      />
      <path fill="url(#prefix__d)" d="M0 23.5h863v403H0z" />
      <path fill="#bdbdbd" d="M8.5 31h846v382H8.5z" />
      <path fill="#fff" d="M23.5 43h814v348h-814z" />
      <path d="M650.19 55.5h-.75v250.18h.75a125.1 125.1 0 1 0 0-250.2z" fill="#2196f3" />
      <path d="M649.44 55.52a125.08 125.08 0 0 0-124.33 124.33h124.33z" fill="#69f0ae" />
      <path
        d="M686.83 246.43v.79a130.54 130.54 0 0 0 129.74 130.53V246.43z"
        transform="translate(-168.5 -65.25)"
        fill="url(#prefix__e)"
      />
      <path d="M522.09 182.86v.75A125.09 125.09 0 0 0 646.42 308.7V182.86z" fill={primaryColor} />
      <path fill="#bdbdbd" d="M47 67.5h241.4v17.08H47z" />
      <path fill="#e0e0e0" d="M47 95.45h386v17.08H47zM47 123.4h386v17.08H47zM47 151.36h386v17.08H47z" />
      <path fill="#2196f3" d="M695 344.5h27v27h-27z" />
      <path fill="#e0e0e0" d="M733 350.5h88v16h-88z" />
      <path fill={primaryColor} d="M542 344.5h27v27h-27z" />
      <path fill="#e0e0e0" d="M580 350.5h88v16h-88z" />
      <path fill="#69f0ae" d="M394 344.5h27v27h-27z" />
      <path
        fill="#e0e0e0"
        d="M432 350.5h88v16h-88zM203.05 205.8h8.51v135.7h-8.51zM224.92 205.8h8.51v135.7h-8.51zM246.8 205.8h8.51v135.7h-8.51zM268.67 205.8h8.51v135.7h-8.51z"
      />
      <circle cx={207.19} cy={287.02} r={15.8} fill="url(#prefix__f)" />
      <circle cx={229.06} cy={248.13} r={15.8} fill="url(#prefix__g)" />
      <circle cx={250.94} cy={267.58} r={15.8} fill="url(#prefix__h)" />
      <circle cx={272.81} cy={213.3} r={15.8} fill="url(#prefix__i)" />
      <circle cx={207.19} cy={287.02} r={13.37} fill={primaryColor} />
      <circle cx={229.06} cy={248.13} r={13.37} fill="#69f0ae" />
      <circle cx={250.94} cy={267.58} r={13.37} fill="#2196f3" />
      <circle cx={272.81} cy={213.3} r={13.37} fill={primaryColor} />
    </svg>
  );
};

UndrawStatistics.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawStatistics;
