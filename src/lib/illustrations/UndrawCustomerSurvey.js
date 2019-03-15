import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCustomerSurvey = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 873.56 795" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={441} y1={598} x2={441} y2={55} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={441.5} y1={91} x2={441.5} y2={44.98} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={604.72} y1={106.89} x2={604.72} y2={52.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={308.5} y1={227} x2={308.5} y2={145} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={308.78} y1={389.5} x2={308.78} y2={307.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={309.06} y1={550} x2={309.06} y2={468} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={308.5} y1={205.63} x2={308.5} y2={165.37} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={796.5} y1={193} x2={796.5} y2={42} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={796.5} y1={176} x2={796.5} y2={69} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={628} y1={795} x2={628} y2={620} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={102} y1={464.25} x2={102} y2={319.75} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M244.5 55h393v543h-393z" opacity={0.5} />
      <path fill="#fff" d="M249.5 59h383v531h-383z" />
      <path fill="url(#prefix__b)" d="M346.5 44.98h190V91h-190z" />
      <path
        d="M604.72 52.5c-14.67 0-26.56 12.18-26.56 27.2s11.89 27.2 26.56 27.2 26.56-12.18 26.56-27.2-11.89-27.2-26.56-27.2zm0 42.89A15.69 15.69 0 1 1 620 79.7a15.51 15.51 0 0 1-15.28 15.69z"
        transform="translate(-163.22 -52.5)"
        fill="url(#prefix__c)"
      />
      <path fill={primaryColor} d="M348.5 45h186v44h-186z" />
      <path
        d="M441.5 2a26 26 0 1 0 26 26 26 26 0 0 0-26-26zm0 41a15 15 0 1 1 15-15 15 15 0 0 1-15 15z"
        fill={primaryColor}
      />
      <path fill="url(#prefix__d)" d="M267.5 145h82v82h-82z" />
      <path fill="url(#prefix__e)" d="M267.78 307.5h82v82h-82z" />
      <path fill="url(#prefix__f)" d="M268.06 468h82v82h-82z" />
      <path fill="#69f0ae" d="M270.5 148h76v76h-76z" />
      <path fill={primaryColor} d="M270.5 309h76v76h-76zM270.5 470h76v76h-76z" />
      <path
        fill="#e0e0e0"
        d="M396.5 171.46h104.17v7.27H396.5zM396.5 182.37h172v7.27h-172zM396.5 193.27h159.89v7.27H396.5zM396.5 332.46h104.17v7.27H396.5zM396.5 343.37h172v7.27h-172zM396.5 354.27h159.89v7.27H396.5zM396.5 493.46h104.17v7.27H396.5zM396.5 504.37h172v7.27h-172zM396.5 515.27h159.89v7.27H396.5z"
      />
      <path
        fill="url(#prefix__g)"
        d="M291.25 181.47l13.8 12.66 19.55-28.75 6.9 5.75-26.45 34.5-19.55-21.85 5.75-2.31z"
      />
      <path
        fill="#fff"
        d="M293.5 182l12 11 17-25 6 5-23 30-17-19 5-2zM293.5 344l12 11 17-25 6 5-23 30-17-19 5-2zM293.5 506l12 11 17-25 6 5-23 30-17-19 5-2z"
      />
      <g opacity={0.5} fill="none" stroke="#69f0ae" strokeMiterlimit={10} strokeWidth={5}>
        <path d="M651 351h6" />
        <path strokeDasharray="11.54 11.54" d="M668.54 351h132.69" />
        <path d="M807 351h6v-6" />
        <path strokeDasharray="11.45 11.45" d="M813 333.55V224.73" />
        <path d="M813 219v-6" />
      </g>
      <path
        fill="none"
        stroke="#69f0ae"
        strokeMiterlimit={10}
        strokeWidth={5}
        strokeDasharray="12"
        opacity={0.5}
        d="M231.5 182.5h-134v126M308.5 611.5v72h200"
      />
      <path
        fill="url(#prefix__h)"
        d="M873.56 107.09L796.5 42l-75.86 64.95-.68-.38v.52h-.52l.52.29V193h153.08l-.93-.52h1.45v-85.39z"
        opacity={0.5}
      />
      <path fill="#fff" d="M870.5 189.5h-147v-82l73-62.5 74 62.5v82z" />
      <path fill="#e0e0e0" d="M722.5 107.5l73 41 74-41" />
      <path fill="url(#prefix__i)" d="M797.02 147.47L752 176V69h89v54.42l-43.98 24.05z" opacity={0.5} />
      <path fill="#fafafa" d="M797 148l-43 28V71h85v53.4L797 148z" />
      <path opacity={0.05} d="M723 189h147l-147-82v82z" />
      <path fill="#f5f5f5" d="M723 190h147l-147-82v82z" />
      <path fill="#fff" d="M765 87h62v4h-62zM765 95h62v4h-62z" />
      <path fill={primaryColor} d="M765 103h62v4h-62z" />
      <path fill="#fff" d="M765 111h62v4h-62z" />
      <path fill={primaryColor} d="M765 119h62v4h-62z" />
      <path opacity={0.05} d="M839 125v-2l-43.74 24.31 1.19.66L839 125z" />
      <path fill="url(#prefix__j)" d="M541.02 620h173.95v175H541.02z" opacity={0.5} />
      <path fill="#f5f5f5" d="M545 624h166v167H545z" />
      <path fill="#fff" d="M556 629h146v128H556z" />
      <path d="M702 716c-40.35 0-73-10.29-73-23-40.35 0-73 8.95-73 20v48h146z" fill="#e0e0e0" />
      <circle cx={678} cy={657} r={15} fill={primaryColor} />
      <path fill="url(#prefix__k)" d="M0 319.75h204v144.5H0z" opacity={0.5} />
      <path fill="#fff" d="M6 324h192v136H6z" />
      <path
        d="M105.95 358.34a37.29 37.29 0 0 0-4.8.32l4.8 36.68-36.91-2.46c-.05.81-.09 1.63-.09 2.46a37 37 0 1 0 37-37z"
        fill="#e0e0e0"
      />
      <path d="M93.15 351.66a37 37 0 0 0-32.11 34.22l36.91 2.46z" fill={primaryColor} />
    </svg>
  );
};

UndrawCustomerSurvey.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCustomerSurvey;
