import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawOpened = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 870.71 691.21" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={309.27}
          y1={560.72}
          x2={309.27}
          y2={406.06}
          gradientTransform="matrix(-1 0 0 1 616.6 82.28)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={-175.29}
          y1={157.73}
          x2={-175.29}
          y2={3.07}
          gradientTransform="matrix(0 -1 -1 0 970.73 29.07)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__c"
          x1={-246.29}
          y1={456.25}
          x2={-246.29}
          y2={301.59}
          gradientTransform="matrix(0 -1 -1 0 1293.26 304.09)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__d"
          x1={60}
          y1={226.17}
          x2={60}
          y2={71.51}
          gradientTransform="matrix(-1 0 0 1 436.24 71.59)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__e" x1={435.66} y1={691.21} x2={435.66} y2={9.21} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={435.66} y1={544.71} x2={435.66} y2={69.59} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={600.3} y1={786.69} x2={600.3} y2={565.96} xlinkHref="#prefix__a" />
      </defs>
      <path transform="rotate(-16.6 -132.68 1077.924)" fill="url(#prefix__a)" d="M181.5 488.34h251.66V643H181.5z" />
      <path fill="#fff" d="M4.022 425.95l232.997-69.46 41.236 138.325-232.997 69.46z" />
      <g opacity={0.6} fill="#f55f44">
        <path d="M53.502 446.529l-29.641 8.836-6.54-21.936 29.641-8.836zM174.726 456.862l-113.83 33.934-2.12-7.111 113.83-33.934zM179.323 472.267l-83 24.743-1.415-4.743 83-24.744z" />
      </g>
      <path transform="rotate(-78.98 744.658 252.053)" fill="url(#prefix__b)" d="M812.99 78.53h154.66v251.66H812.99z" />
      <path fill="#fff" d="M591.66 146.056L619.25 4.378l238.648 46.475-27.591 141.678z" />
      <g opacity={0.6} fill="#f55f44">
        <path d="M653.455 45.55l-30.36-5.913 4.376-22.468 30.36 5.913zM756.073 110.92l-116.59-22.706 1.418-7.283 116.59 22.705zM753.003 126.713l-85.013-16.556.946-4.859 85.013 16.556z" />
      </g>
      <path transform="rotate(-23.45 580.445 894.79)" fill="url(#prefix__c)" d="M837.01 424.55h154.66v251.66H837.01z" />
      <path fill="#fff" d="M635.84 361.545l132.42-57.44 96.752 223.05-132.418 57.44z" />
      <g opacity={0.6} fill="#47e6b1">
        <path d="M753.648 355.646l-12.309-28.376 21-9.109 12.308 28.375zM757.833 477.233l-47.268-108.97 6.807-2.953 47.268 108.97zM743.08 483.628l-34.466-79.456 4.541-1.97 34.466 79.456z" />
      </g>
      <path transform="rotate(-19.53 -9.391 646.573)" fill="url(#prefix__d)" d="M250.41 143.1h251.66v154.66H250.41z" />
      <path fill="#fff" d="M71.35 87.817L300.49 6.539l48.253 136.035-229.142 81.279z" />
      <g opacity={0.6} fill={primaryColor}>
        <path d="M121.741 105.895l-29.15 10.34-7.652-21.573 29.15-10.34zM243.335 110.033L131.388 149.74l-2.48-6.993 111.946-39.709zM248.71 125.183l-81.627 28.954-1.655-4.665 81.627-28.954z" />
      </g>
      <path fill="url(#prefix__e)" d="M435.66 9.21l-293 275.83v406.17h585.99V285.04L435.66 9.21z" />
      <path fill="#fff" d="M725.68 682.3H145.63V284.38L435.66 14.16l290.02 270.22V682.3z" />
      <path fill="url(#prefix__f)" d="M233.73 69.59h403.85v475.12H233.73z" />
      <path fill="#fff" d="M238.83 73.55h393.65v471.16H238.83z" />
      <path
        fill="#f5f5f5"
        d="M145.63 284.38l290.03 198.96L145.63 682.3V284.38zM725.68 284.38L435.66 483.34 725.68 682.3V284.38z"
      />
      <path
        d="M310.28 786.69L588.92 569.9a18.39 18.39 0 0 1 22.75 0l278.66 216.79z"
        transform="translate(-164.65 -104.4)"
        fill="url(#prefix__g)"
      />
      <path d="M145.63 682.29l278.64-207.32a19.06 19.06 0 0 1 22.75 0l278.66 207.32z" fill="#fff" />
      <path fill="#47e6b1" d="M298.56 164.61h82.16v13.86h-82.16z" />
      <path
        fill="#f5f5f5"
        d="M298.56 201.24h274.19v13.86H298.56zM298.56 224.99h274.19v13.86H298.56zM298.56 248.75h274.19v13.86H298.56zM298.56 272.5h274.19v13.86H298.56zM298.56 296.26h124.72v13.86H298.56z"
      />
      <path fill={primaryColor} d="M448.03 296.26h124.72v13.86H448.03z" />
    </svg>
  );
};

UndrawOpened.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawOpened;
