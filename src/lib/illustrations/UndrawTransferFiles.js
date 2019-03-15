import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawTransferFiles = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 873.05 765.75" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={710.94} y1={765.75} x2={710.94} y2={317.76} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={681} y1={749.66} x2={681} y2={301.67} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={652.84} y1={734.91} x2={652.84} y2={286.93} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={162.11} y1={447.98} x2={162.11} y2={0} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M548.82 317.76h324.23v447.98H548.82z" opacity={0.5} />
      <path fill="#fff" d="M552.95 321.06h315.98v438.08H552.95z" />
      <path fill="url(#prefix__b)" d="M518.88 301.67h324.23v447.98H518.88z" opacity={0.5} />
      <path fill="#f5f5f5" d="M523.01 304.97h315.98v438.08H523.01z" />
      <path fill="url(#prefix__c)" d="M490.72 286.93h324.23v447.98H490.72z" opacity={0.5} />
      <path fill="#fff" d="M494.85 290.23h315.98v438.08H494.85z" />
      <path fill={primaryColor} d="M523.91 363.35h87.6v8.04h-87.6z" />
      <path
        fill="#e0e0e0"
        d="M523.91 391.51h257.43v8.04H523.91zM523.91 419.66h200.22v8.04H523.91zM523.91 447.82h236.42v8.04H523.91zM551.18 475.98h209.16v8.04H551.18z"
      />
      <path fill="#3ad29f" opacity={0.3} d="M571.29 504.13h164.92v8.04H571.29z" />
      <path
        fill="#e0e0e0"
        d="M551.18 532.29h205.14v8.04H551.18zM523.91 560.44h257.43v8.04H523.91zM523.91 588.6h257.43v8.04H523.91zM523.91 616.76h257.43v8.04H523.91zM523.91 644.91h257.43v8.04H523.91z"
      />
      <path fill="url(#prefix__d)" d="M0 0h324.23v447.98H0z" opacity={0.5} />
      <path fill="#fff" d="M4.13 3.3h315.98v438.08H4.13z" />
      <path
        fill="#e0e0e0"
        d="M58.66 160.89h210.95v8.04H58.66zM60.45 189.05h209.16v8.04H60.45zM80.56 217.21h164.92v8.04H80.56zM60.45 245.36h205.14v8.04H60.45zM58.66 273.52h209.16v8.04H58.66zM58.66 301.67h209.16v8.04H58.66zM58.66 329.83h209.16v8.04H58.66zM58.66 357.99h209.16v8.04H58.66z"
      />
      <path fill={primaryColor} d="M61.56 65.7h56.31v48.27H61.56z" />
      <path fill="#e0e0e0" d="M158.09 73.74h104.58v8.04H158.09z" />
      <path fill="#3ad29f" opacity={0.3} d="M158.09 101.9h104.58v8.04H158.09z" />
      <g opacity={0.3} fill="none" stroke="#3ad29f" strokeMiterlimit={10} strokeWidth={3}>
        <path d="M366.15 101.9h6" />
        <path strokeDasharray="11.69 11.69" d="M383.84 101.9h227.89" />
        <path d="M617.58 101.9h6v6" />
        <path strokeDasharray="12.8 12.8" d="M623.58 120.7v121.65" />
        <path d="M623.58 248.75v6" />
      </g>
      <g opacity={0.3} fill="none" stroke="#3ad29f" strokeMiterlimit={10} strokeWidth={3}>
        <path d="M458.66 636.87h-6" />
        <path strokeDasharray="11.69 11.69" d="M440.97 636.87H213.08" />
        <path d="M207.23 636.87h-6v-6" />
        <path strokeDasharray="12.8 12.8" d="M201.23 618.06V496.42" />
        <path d="M201.23 490.02v-6" />
      </g>
      <path
        d="M513.95 166.14a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2zM385.14 257.27a7.74 7.74 0 0 1-4.31-9.4 3.72 3.72 0 0 0 .17-.86 3.88 3.88 0 0 0-7-2.57 3.72 3.72 0 0 0-.43.76 7.74 7.74 0 0 1-9.36 4.31 3.72 3.72 0 0 0-.86-.17 3.88 3.88 0 0 0-2.57 7 3.72 3.72 0 0 0 .76.43 7.74 7.74 0 0 1 4.31 9.36 3.72 3.72 0 0 0-.17.86 3.88 3.88 0 0 0 7 2.57 3.72 3.72 0 0 0 .43-.76 7.74 7.74 0 0 1 9.36-4.31 3.72 3.72 0 0 0 .86.17 3.88 3.88 0 0 0 2.57-7 3.72 3.72 0 0 0-.76-.39zM464.15 519.47a7.74 7.74 0 0 1-8.9-5.19 3.72 3.72 0 0 0-.35-.8 3.88 3.88 0 0 0-7.19 1.89 3.72 3.72 0 0 0 .08.87 7.74 7.74 0 0 1-5.19 8.9 3.72 3.72 0 0 0-.8.35 3.88 3.88 0 0 0 1.89 7.19 3.72 3.72 0 0 0 .87-.08 7.74 7.74 0 0 1 8.9 5.19 3.72 3.72 0 0 0 .35.8 3.88 3.88 0 0 0 7.19-1.89 3.72 3.72 0 0 0-.08-.87 7.74 7.74 0 0 1 5.19-8.9 3.72 3.72 0 0 0 .8-.35 3.88 3.88 0 0 0-1.89-7.19 3.72 3.72 0 0 0-.87.08zM305.95 571.14a3.67 3.67 0 0 1-2-4.44 1.77 1.77 0 0 0 .08-.41 1.84 1.84 0 0 0-3.31-1.22 1.77 1.77 0 0 0-.2.36 3.67 3.67 0 0 1-4.44 2 1.77 1.77 0 0 0-.41-.08 1.84 1.84 0 0 0-1.22 3.31 1.77 1.77 0 0 0 .36.2 3.67 3.67 0 0 1 2 4.44 1.77 1.77 0 0 0-.08.41 1.84 1.84 0 0 0 3.31 1.22 1.77 1.77 0 0 0 .2-.36 3.67 3.67 0 0 1 4.44-2 1.77 1.77 0 0 0 .41.08 1.84 1.84 0 0 0 1.22-3.31 1.77 1.77 0 0 0-.36-.2z"
        fill={primaryColor}
        opacity={0.3}
      />
    </svg>
  );
};

UndrawTransferFiles.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawTransferFiles;
