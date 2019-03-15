import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawNotebook = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 808.12 716.61" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={404.06} y1={716.61} x2={404.06} y2={268.61} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={210.22} y1={700.35} x2={210.22} y2={285.07} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__c"
          x1={428.16}
          y1={792.05}
          x2={428.16}
          y2={376.77}
          gradientTransform="matrix(-1 0 0 1 1026.06 -91.7)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__d" x1={175.09} y1={610.02} x2={175.09} y2={495.85} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={584.09} y1={610.02} x2={584.09} y2={495.85} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={872.5} y1={269.91} x2={872.5} y2={127.91} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__g"
          x1={458.97}
          y1={247.52}
          x2={458.97}
          y2={101.87}
          gradientTransform="rotate(90 455.065 179.095)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__h"
          x1={359.97}
          y1={267.52}
          x2={359.97}
          y2={121.87}
          gradientTransform="rotate(90 363.365 189.855)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__i" x1={395.06} y1={492.11} x2={413.06} y2={492.11} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#fff" stopOpacity={0.12} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.12} />
        </linearGradient>
      </defs>
      <path fill="url(#prefix__a)" d="M0 268.61h808.12v448H0z" />
      <path fill="#f5f5f5" d="M8.55 274.55h791.03v436.12H8.55z" />
      <path fill="url(#prefix__b)" d="M16.37 285.07h387.68v415.29H16.37z" />
      <path fill="url(#prefix__c)" d="M404.06 285.07h387.68v415.29H404.06z" />
      <path fill="#fff" d="M22.65 291.34h381.41v402.74H22.65zM404.06 291.34h381.41v402.74H404.06z" />
      <path
        fill={primaryColor}
        opacity={0.2}
        d="M56.52 318.94h268.49V334H56.52zM56.52 351.56h100.37v15.06H56.52zM194.53 351.56H294.9v15.06H194.53z"
      />
      <path fill={primaryColor} d="M224.64 638.88h100.37v15.06H224.64z" />
      <path opacity={0.2} d="M224.64 638.88h100.37v15.06H224.64z" />
      <path
        fill={primaryColor}
        opacity={0.2}
        d="M56.52 384.19h268.49v15.06H56.52zM56.52 416.81h160.59v15.06H56.52zM463.03 318.94h268.49V334H463.03zM463.03 351.56H563.4v15.06H463.03zM601.04 351.56h100.37v15.06H601.04zM463.03 384.19h268.49v15.06H463.03zM463.03 416.81h160.59v15.06H463.03z"
      />
      <path fill="url(#prefix__d)" d="M52.76 495.85h244.66v114.17H52.76z" />
      <path fill={primaryColor} d="M56.52 500.87H294.9v105.39H56.52z" />
      <path fill="url(#prefix__e)" d="M461.76 495.85h244.66v114.17H461.76z" />
      <path fill={primaryColor} d="M465.52 500.87H703.9v105.39H465.52z" />
      <path
        fill="#fccc63"
        stroke="#37474f"
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={5}
        d="M648 569.33l16.32 9.38M462.51 462.78l16.32 9.37"
      />
      <circle cx={608.83} cy={546.84} r={45.17} fill="#cfd8dc" />
      <circle cx={518.31} cy={494.11} r={45.17} fill="#cfd8dc" />
      <circle cx={518.31} cy={494.11} r={38.89} fill="#fff" opacity={0.2} />
      <circle cx={609.69} cy={546.6} r={38.89} fill="#fff" opacity={0.2} />
      <path fill="#fccc63" stroke="#37474f" strokeMiterlimit={10} strokeWidth={5} d="M557.24 515.75l13.05 7.5" />
      <path
        d="M489.7 483.46a38.89 38.89 0 0 1 64.42-4.51 38.89 38.89 0 1 0-66.51 39 38.82 38.82 0 0 1 2.09-34.49zM581.06 535.95a38.91 38.91 0 0 1 64.43-4.51 38.9 38.9 0 1 0-66.52 39.05 38.87 38.87 0 0 1 2.09-34.54z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M950.92 188.37h-24.5c-4.66-34.7-34.37-60.46-70.35-60.46a71 71 0 1 0 0 142c36.35 0 66.29-26.31 70.48-61.52h24.37c5 0 9-5.06 9-10s-4.05-10.02-9-10.02z"
        transform="translate(-195.94 -91.7)"
        fill="url(#prefix__f)"
      />
      <path d="M750.56 98.21h-23.12a67 67 0 1 0 .13 17h23a8.5 8.5 0 0 0 0-17z" fill="#f2f2f2" />
      <circle cx={663.06} cy={107.21} r={52} fill="#985454" />
      <path
        d="M671.06 64.21s35 2 32 46"
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={4}
        opacity={0.2}
      />
      <path transform="rotate(-80.54 307.386 252.793)" fill="url(#prefix__g)" d="M386.64 64.51h145.65V301.5H386.64z" />
      <path fill="#fff" d="M140.74 138.504L163.083 4.423l225.846 37.632-22.341 134.08z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M348.694 45.862l28.734 4.787-3.543 21.267-28.734-4.788zM234.246 84.082l110.339 18.386-1.149 6.894-110.339-18.385zM231.364 101.314l80.45 13.405-.765 4.597-80.451-13.405z" />
      </g>
      <path transform="rotate(-80.54 206.446 256.26)" fill="url(#prefix__h)" d="M285.7 67.97h145.65v236.99H285.7z" />
      <path fill="#fff" d="M39.793 141.96L62.135 7.88 287.98 45.51 265.64 179.592z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M247.748 49.324l28.734 4.788-3.543 21.267-28.734-4.788zM133.3 87.545L243.64 105.93l-1.149 6.895L132.151 94.44zM130.428 104.777l80.45 13.405-.765 4.596-80.451-13.405z" />
      </g>
      <path fill="url(#prefix__i)" d="M395.06 290.61h18v403h-18z" />
    </svg>
  );
};

UndrawNotebook.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawNotebook;
