import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawResume = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 742 751" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={294.5} y1={751} x2={294.5} y2={73} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={295.5} y1={394} x2={295.5} y2={175} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={472} y1={709} x2={472} y2={0.67} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={472} y1={269.98} x2={472} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient
          id="prefix__e"
          x1={713.21}
          y1={420.46}
          x2={718.93}
          y2={557.24}
          gradientTransform="rotate(180 625.234 347.191)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
      </defs>
      <path fill="url(#prefix__a)" d="M19 73h551v678H19z" />
      <path fill="#f5f5f5" d="M26.6 80.56h535.57V739H26.6z" />
      <path fill={primaryColor} d="M26.6 80h535.57v81.73H26.6z" />
      <path
        fill="#fff"
        d="M40.79 89.21h43.19v10.36H40.79zM40.79 108.78h43.19v10.36H40.79zM40.79 128.35h43.19v10.36H40.79z"
      />
      <path fill="url(#prefix__b)" d="M0 175h591v219H0z" />
      <path fill="#fff" d="M5 182.46h578.76V386.8H5z" />
      <path fill="#bdbdbd" d="M129.02 258.72h145.61v10.36H129.02z" />
      <path fill="#69f0ae" d="M129.02 300.17h145.61v10.36H129.02z" />
      <path fill="#e0e0e0" d="M129.02 279.44h420.8v10.36h-420.8z" />
      <ellipse cx={66.7} cy={284.62} rx={25.91} ry={24.18} fill="#69f0ae" />
      <path fill="url(#prefix__c)" d="M202.62.67h538.76V709H202.62z" />
      <path fill="url(#prefix__d)" d="M202 0h540v269.98H202z" />
      <path fill="#fff" d="M209.52 6.15h524.97V698H209.52z" />
      <path fill={primaryColor} d="M208.91 5.5h526.18v263.69H208.91z" />
      <path fill="#bdbdbd" d="M319.59 343.59h142.73v10.89H319.59z" />
      <path fill="#f5f5f5" d="M319.59 387.13h142.73v10.89H319.59z" />
      <path fill="#69f0ae" d="M319.59 365.36h372.56v10.89H319.59z" />
      <path fill="#fff" d="M415.15 104.08h142.73v10.89H415.15zM415.15 128.28h229.83v10.89H415.15z" />
      <rect x={458.69} y={159.72} width={142.73} height={12.1} rx={5} ry={5} opacity={0.2} />
      <circle cx={258.5} cy={356.29} r={25.4} fill="#69f0ae" />
      <path fill="#bdbdbd" d="M319.59 448.82h142.73v10.89H319.59z" />
      <path fill="#f5f5f5" d="M319.59 492.37h142.73v10.89H319.59z" />
      <path fill="#e0e0e0" d="M319.59 470.59h372.56v10.89H319.59z" />
      <circle cx={258.5} cy={461.52} r={25.4} fill="#e0e0e0" />
      <path fill="#bdbdbd" d="M319.59 554.06h142.73v10.89H319.59z" />
      <path fill="#f5f5f5" d="M319.59 597.6h142.73v10.89H319.59z" />
      <path fill="#e0e0e0" d="M319.59 575.83h372.56v10.89H319.59z" />
      <circle cx={258.5} cy={566.76} r={25.4} fill="#e0e0e0" />
      <path
        d="M461.9 207.23a70 70 0 1 0 93-67l.22 18a23.79 23.79 0 0 1-23.43 24 23.79 23.79 0 0 1-24-23.43l-.22-18a70.07 70.07 0 0 0-45.57 66.43z"
        transform="translate(-229 -74.5)"
        fill="url(#prefix__e)"
      />
      <path
        d="M373 125.36a70 70 0 1 0-93.76 65.92v-18A23.79 23.79 0 0 1 303 149.5a23.79 23.79 0 0 1 23.72 23.72v18A70.07 70.07 0 0 0 373 125.36z"
        fill={primaryColor}
      />
      <circle cx={303} cy={115.73} r={26.92} fill="#fff" stroke="#fff" strokeMiterlimit={10} />
      <path
        d="M303 149.5h0a23.79 23.79 0 0 0-23.72 23.72v18a70.3 70.3 0 0 0 47.43 0v-18A23.79 23.79 0 0 0 303 149.5zM275.85 114.24a26.12 26.12 0 0 1-2.85-13.55 18.11 18.11 0 0 1 6-12.28c3.92-3.34 9.24-4.53 14.38-4.94s10.34-.16 15.4-1.16a32.19 32.19 0 0 0 20.56-13.94c.32 4 .65 8-.11 11.85s-2.76 7.71-6.14 9.79c4.09-1.89 3.64 2.54 2.76 5.2 2 2.45 7 2.85 7.2 6a19.92 19.92 0 0 1-1 9.36c-1.24 2.92.09 8.07-3.07 8.29"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path d="M324.51 89.37s18.79 1.64 5.41 29.52" fill="#fff" />
    </svg>
  );
};

UndrawResume.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawResume;
