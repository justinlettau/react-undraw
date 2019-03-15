import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawActiveSupport = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 900.1 696.67" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={583.82} y1={763.13} x2={583.82} y2={246.35} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={584.38} y1={798.34} x2={584.38} y2={714.29} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={760.68} y1={248.69} x2={760.68} y2={0} xlinkHref="#prefix__a" />
      </defs>
      <path
        d="M971.12 763.13h-774.6v-501a15.8 15.8 0 0 1 15.8-15.8h743a15.8 15.8 0 0 1 15.8 15.8z"
        transform="translate(-149.95 -101.66)"
        fill="url(#prefix__a)"
        opacity={0.8}
      />
      <path d="M73 153.77h721.69a15.8 15.8 0 0 1 15.8 15.8v491.9H57.24V169.58A15.8 15.8 0 0 1 73 153.77z" fill="#fff" />
      <path fill="#f5f5f5" d="M81.49 183.31h704.75v462.25H81.49z" />
      <path fill="#e0e0e0" opacity={0.8} d="M84.19 205.75h701.76v415.88H84.19z" />
      <path fill="#f5f5f5" d="M84.19 183.65h701.76v22.1H84.19z" />
      <circle cx={99.24} cy={194.37} r={5.36} fill="#ff5252" />
      <circle cx={113.97} cy={194.37} r={5.36} fill="#ff0" />
      <circle cx={128.71} cy={194.37} r={5.36} fill="#69f0ae" />
      <path
        d="M992.79 796.35c-43.12 3.27-783.62 2-809.49 0C149.38 780 150 716.56 150 716.56l339.6-2.27 1.14 19.31h145.32l5.68-17h376.34s7.48 58.16-25.29 79.75z"
        transform="translate(-149.95 -101.66)"
        fill="url(#prefix__b)"
        opacity={0.8}
      />
      <path
        d="M862.62 620.01h-369a11.33 11.33 0 0 1-8.6 18.74H344.14a11.33 11.33 0 0 1-8.6-18.74H5.11s-.57 55.09 32.94 69.33c25.55 1.7 757 2.84 799.59 0 32.41-18.79 24.98-69.33 24.98-69.33z"
        fill="#f5f5f5"
      />
      <circle cx={81.78} cy={631.94} r={4.54} fill="#e0e0e0" />
      <circle cx={95.41} cy={631.94} r={4.54} fill="#e0e0e0" />
      <circle cx={109.03} cy={631.94} r={4.54} fill="#e0e0e0" />
      <path
        d="M419.88 375.85h32.19a139.5 139.5 0 0 1 139.5 139.5v101.41H280.38V515.35a139.5 139.5 0 0 1 139.5-139.5z"
        fill={primaryColor}
      />
      <circle cx={436.28} cy={179.39} r={142.22} fill="#333" />
      <path
        d="M415.34 334.43h41.13a29 29 0 0 1 29 29v28.26a44.34 44.34 0 0 1-44.34 44.34h-10.49a44.34 44.34 0 0 1-44.34-44.34v-28.22a29 29 0 0 1 29-29z"
        opacity={0.1}
      />
      <path
        d="M386.3 331.53h99.22v57.3a44.34 44.34 0 0 1-44.34 44.34h-10.54a44.34 44.34 0 0 1-44.34-44.34v-57.3z"
        fill="#fdb797"
      />
      <path d="M386.48 345.84a142.8 142.8 0 0 0 99.22.27v-12.18h-99.22z" opacity={0.1} />
      <circle cx={436.28} cy={210.26} r={142.22} fill="#fdb797" />
      <path d="M300.31 159.92h271.2S548.36 50.41 445.83 57.34 300.31 159.92 300.31 159.92z" opacity={0.1} />
      <path d="M300.31 156.24h271.2S548.36 46.73 445.83 53.71 300.31 156.24 300.31 156.24z" fill="#333" />
      <ellipse cx={297} cy={204.2} rx={13.23} ry={24.81} fill="#fdb797" />
      <ellipse cx={574.82} cy={204.2} rx={13.23} ry={24.81} fill="#fdb797" />
      <path
        d="M321.36 83.68c3.25-10.62 9.16-20.77 18.28-27.1 6.93-4.81 15.22-7.12 23.17-9.94a177.08 177.08 0 0 0 33.68-16.11c12.06-7.43 23.39-16.38 36.67-21.29 22.85-8.45 48.3-3.88 71.89 2.18 5.81 1.49 11.69 3.11 16.81 6.25 5.93 3.63 10.48 9.09 14.92 14.44l37.44 45.16c3.43 4.13 6.88 8.31 9.3 13.11a45.09 45.09 0 0 1 4.26 14.79c1 8.28.22 17.06-4 24.27-6.33 10.81-19.38 16.24-31.89 16.74s-24.79-3.13-36.81-6.65c-38.76-11.35-78-21.93-118.2-26.64a333.41 333.41 0 0 0-60.15-1.95c-6.3.41-14.62 3.3-18.45-3.12-3.31-5.57 1.37-18.56 3.08-24.14z"
        fill="#333"
      />
      <path
        fill="none"
        stroke="#000"
        strokeMiterlimit={10}
        strokeWidth={4}
        opacity={0.05}
        d="M341.3 506.34v110.42M533.14 506.34v110.42"
      />
      <path fill="url(#prefix__c)" d="M900.1 198.47H721.64l-60.23 50.22v-50.22h-40.15V0H900.1v198.47z" opacity={0.8} />
      <path fill="#fff" d="M625.04 2.36h271.28v189.79H625.04z" />
      <path
        fill="#e0e0e0"
        d="M655.59 30.26h214.95v5.64H655.59zM655.59 55.66h147.78v5.64H655.59zM655.59 81.05h177.34v5.64H655.59z"
      />
      <path fill={primaryColor} d="M655.59 106.45H798v5.64H655.59zM655.59 131.84h214.95v5.64H655.59z" />
      <path fill="#e0e0e0" d="M655.59 157.24h214.95v5.64H655.59z" />
      <path fill="#fff" d="M671.45 188.46v50.2l55.21-55.22-55.21 5.02z" />
    </svg>
  );
};

UndrawActiveSupport.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawActiveSupport;
