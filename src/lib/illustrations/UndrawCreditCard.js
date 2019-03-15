import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCreditCard = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 915.69 679.28" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={549.23}
          y1={734.77}
          x2={549.23}
          y2={126.57}
          gradientTransform="matrix(.97 .31 -.3 .99 144.2 -171.29)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={549.32} y1={679.28} x2={549.32} y2={233.84} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__b" x1={888.78} y1={569.3} x2={888.78} y2={526.2} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__d" x1={888.78} y1={646.14} x2={888.78} y2={603.03} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__e" x1={741.39} y1={487.05} x2={741.39} y2={464.56} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__f" x1={949.9} y1={646.14} x2={949.9} y2={603.03} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__g" x1={949.9} y1={569.3} x2={949.9} y2={526.2} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__h" x1={812.99} y1={487.05} x2={812.99} y2={464.56} xlinkHref="#prefix__b" />
      </defs>
      <rect
        x={184.86}
        y={201.53}
        width={728.62}
        height={445}
        rx={27.5}
        ry={27.5}
        transform="rotate(-17.26 114.553 837.215)"
        fill="url(#prefix__a)"
      />
      <rect
        x={193.72}
        y={205.56}
        width={713.76}
        height={429.25}
        rx={27.5}
        ry={27.5}
        transform="rotate(-17.26 115.981 833.353)"
        fill="#fff"
      />
      <path fill={primaryColor} d="M20.724 264.786L702.342 53.008l18.265 58.787L38.989 323.574z" />
      <path fill="#bdbdbd" d="M161.633 527.647l173.183-53.808 7.898 25.421-173.183 53.808z" />
      <path fill="#e0e0e0" d="M148.3 484.744l300.289-93.3 7.898 25.421-300.29 93.3z" />
      <rect x={182.96} y={233.84} width={732.73} height={445.44} rx={27.5} ry={27.5} fill="url(#prefix__c)" />
      <rect x={191.28} y={238.38} width={713.76} height={429.25} rx={27.5} ry={27.5} fill="#fff" />
      <path
        fill="#e0e0e0"
        d="M247.01 305.76h20.8v59.06h-20.8zM273.63 305.76h20.8v59.06h-20.8zM300.25 305.76h20.8v59.06h-20.8zM346.84 305.76h20.8v59.06h-20.8zM373.46 305.76h20.8v59.06h-20.8zM400.08 305.76h20.8v59.06h-20.8zM446.66 305.76h20.8v59.06h-20.8zM473.29 305.76h20.8v59.06h-20.8zM499.91 305.76h20.8v59.06h-20.8zM546.49 305.76h20.8v59.06h-20.8zM573.11 305.76h20.8v59.06h-20.8zM599.73 305.76h20.8v59.06h-20.8z"
      />
      <path fill="#bdbdbd" d="M247.01 603.57h181.35v26.62H247.01z" />
      <path fill="#e0e0e0" d="M247.01 558.65h314.45v26.62H247.01z" />
      <path
        d="M906.25 568.21a4.38 4.38 0 0 1 4.22-4.53h6.26V526.2h-55.89v43.1h45.4z"
        transform="translate(-142.16 -110.36)"
        fill="url(#prefix__b)"
      />
      <path
        d="M910.47 608.66a4.38 4.38 0 0 1-4.22-4.53V603h-45.4v43.1h55.88v-37.44z"
        transform="translate(-142.16 -110.36)"
        fill="url(#prefix__d)"
      />
      <path fill="url(#prefix__e)" d="M718.69 464.56h45.4v22.49h-45.4z" />
      <path
        d="M932.44 604.13a4.38 4.38 0 0 1-4.22 4.53H922v37.48h55.88V603h-45.4z"
        transform="translate(-142.16 -110.36)"
        fill="url(#prefix__f)"
      />
      <path
        d="M922 526.2v37.48h6.26a4.38 4.38 0 0 1 4.22 4.53v1.09h45.4v-43.1z"
        transform="translate(-142.16 -110.36)"
        fill="url(#prefix__g)"
      />
      <path fill="url(#prefix__h)" d="M790.28 464.56h45.4v22.49h-45.4z" />
      <path
        d="M764.28 458.27a4 4 0 0 1 4-4h6v-33.29h-53.3v38.26h43.31zM768.3 494.18a4 4 0 0 1-4-4v-1h-43.33v38.27h53.3v-33.27zM720.97 464.23h43.31v19.97h-43.31zM789.26 490.16a4 4 0 0 1-4 4h-6v33.28h53.3v-38.25h-43.3zM779.27 420.98v33.28h6a4 4 0 0 1 4 4v1h43.31v-38.28zM789.27 464.23h43.31v19.97h-43.31z"
        fill={primaryColor}
      />
    </svg>
  );
};

UndrawCreditCard.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCreditCard;
