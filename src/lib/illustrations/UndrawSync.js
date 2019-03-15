import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSync = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 931 758.59" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={1093.68}
          y1={551.39}
          x2={1027.95}
          y2={426.89}
          gradientTransform="rotate(27.83 854.586 272.541)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={1097.68} y1={790.82} x2={1031.95} y2={666.32} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__d"
          x1={1113.9}
          y1={704.46}
          x2={1012.94}
          y2={513.25}
          gradientTransform="rotate(90 943.5 547.56)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__b"
          x1={1068.95}
          y1={637.04}
          x2={1068.95}
          y2={578.4}
          gradientTransform="rotate(27.96 958.233 -39.99)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient
          id="prefix__e"
          x1={300.72}
          y1={713.57}
          x2={555.76}
          y2={111.34}
          gradientTransform="translate(-7.22 .36)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__f"
          x1={542.83}
          y1={594.95}
          x2={542.83}
          y2={489.85}
          gradientTransform="rotate(-26.56 -43.869 963.916)"
          xlinkHref="#prefix__b"
        />
      </defs>
      <g opacity={0.3} fill="none" stroke="#2196f3" strokeMiterlimit={10} strokeWidth={4}>
        <path d="M659.7 38.33q2.64 1.43 5.25 2.91" />
        <path
          d="M675.17 47.19c105.72 64.33 176.33 180.62 176.33 313.4a367.17 367.17 0 0 1-11.5 91.44"
          strokeDasharray="11.85 11.85"
        />
        <path d="M838.5 457.76q-.79 2.89-1.63 5.77" />
      </g>
      <path
        d="M118.5 360.59c0-159.28 101.61-294.83 243.54-345.4"
        fill="none"
        stroke="#2196f3"
        strokeMiterlimit={10}
        strokeWidth={4}
        strokeDasharray="12"
        opacity={0.21}
      />
      <path
        d="M659.7 682.86A364.87 364.87 0 0 1 485 727.09c-119.53 0-225.7-57.22-292.6-145.77"
        fill="none"
        stroke="#2196f3"
        strokeMiterlimit={10}
        strokeWidth={4}
        strokeDasharray="12"
        opacity={0.5}
      />
      <g opacity={0.21} fill="none" stroke="#2196f3" strokeMiterlimit={10} strokeWidth={4}>
        <path d="M722.2 429.71q-.84 2.88-1.75 5.74" />
        <path
          d="M716.56 446.75c-35 93.93-125.45 160.84-231.56 160.84-136.41 0-247-110.59-247-247s110.59-247 247-247a245.92 245.92 0 0 1 149.78 50.6"
          strokeDasharray="11.95 11.95"
        />
        <path d="M639.5 167.85q2.34 1.88 4.63 3.81" />
      </g>
      <g opacity={0.5} fill="none" stroke="#2196f3" strokeMiterlimit={10} strokeWidth={4}>
        <path d="M464.02 222.19q3-.44 6-.76" />
        <path d="M481.5 220.64h3.5a140 140 0 0 1 122.26 208.21" strokeDasharray="11.56 11.56" />
        <path d="M604.34 433.83q-1.57 2.56-3.25 5" />
      </g>
      <path
        d="M965.33 630.8l-100.78-53.21 52.57-86.09a3.12 3.12 0 0 1 4.12-1.13l84.14 44.43a3.12 3.12 0 0 1 1.39 4z"
        transform="translate(-134.5 -85.81)"
        fill="url(#prefix__a)"
      />
      <path
        d="M829.16 540.36l-94.34-49.81 49.12-80.44a3.12 3.12 0 0 1 4.12-1.13l78.44 41.42a3.12 3.12 0 0 1 1.39 4z"
        fill="#f2f2f2"
      />
      <path
        d="M898.79 756.81L798 703.61l-41.44 92a3.12 3.12 0 0 0 1.39 4L842.11 844a3.12 3.12 0 0 0 4.12-1.13z"
        transform="translate(-134.5 -85.81)"
        fill="url(#prefix__c)"
      />
      <path
        d="M759.5 672.19l-94.34-49.81-38.66 85.96a3.12 3.12 0 0 0 1.39 4l78.44 41.41a3.12 3.12 0 0 0 4.12-1.13z"
        fill="#f2f2f2"
      />
      <rect
        x={801.59}
        y={586.87}
        width={161.24}
        height={161.24}
        rx={2.33}
        ry={2.33}
        transform="rotate(-62.17 743.737 736.126)"
        fill="url(#prefix__d)"
      />
      <rect
        x={804.01}
        y={589.29}
        width={156.39}
        height={156.39}
        rx={2.33}
        ry={2.33}
        transform="rotate(27.83 988.213 353.24)"
        fill="#f2f2f2"
      />
      <rect
        x={963.21}
        y={660.24}
        width={9.7}
        height={24.25}
        rx={1.5}
        ry={1.5}
        transform="rotate(27.83 1074.055 358.126)"
        fill="#f2f2f2"
      />
      <rect
        x={811.29}
        y={596.56}
        width={141.84}
        height={141.84}
        rx={2.33}
        ry={2.33}
        transform="rotate(27.83 988.213 353.24)"
        fill={primaryColor}
      />
      <path
        fill="url(#prefix__b)"
        d="M790.82 581.84l-6.18-13.85-42.57 18.84-8.09-17.86-14.35 6.37 11.9 25.77 2.85 6.59 56.44-25.86z"
      />
      <path
        fill="#fff"
        d="M790.15 581.23l-5.69-12.39-42.79 19.67-8.38-18.22-12.39 5.69 11.24 24.4 2.92 6.17 55.09-25.32z"
      />
      <rect
        x={259.82}
        y={121.83}
        width={322.42}
        height={581.96}
        rx={12.25}
        ry={12.25}
        transform="rotate(-22.95 142.475 701.226)"
        fill="url(#prefix__e)"
      />
      <rect
        x={264.17}
        y={129.7}
        width={313.7}
        height={566.24}
        rx={13.64}
        ry={13.64}
        transform="rotate(-22.95 142.475 701.226)"
        fill="#fff"
      />
      <path
        d="M254.22 48.64a25.43 25.43 0 0 1-14.65 29.69l-99.77 42.26a25.43 25.43 0 0 1-31.52-10.14l-52.85 22.38a11.91 11.91 0 0 0-6.33 15.62l200.46 473.31a11.91 11.91 0 0 0 15.62 6.33l252.43-106.9a11.91 11.91 0 0 0 6.33-15.62L323.5 32.24a11.91 11.91 0 0 0-15.62-6.33z"
        fill={primaryColor}
      />
      <rect
        x={285.1}
        y={171.08}
        width={69.91}
        height={4.37}
        rx={2}
        ry={2}
        transform="rotate(-22.95 41.489 461.66)"
        fill="#dbdbdb"
      />
      <circle cx={365.74} cy={153.44} r={2.62} transform="rotate(-22.95 87.189 441.829)" fill="#dbdbdb" />
      <path
        fill="url(#prefix__f)"
        d="M329.26 266.13l-26.64-5.4-16.79 81.73-34.49-6.77-5.61 27.57 49.99 9.44 12.57 2.69 20.97-109.26z"
      />
      <path
        fill="#fff"
        d="M327.68 266.46l-24-4.57-15.81 82.91-35.31-6.73-4.58 24 47.29 8.98 12.06 2.16 20.35-106.75z"
      />
      <circle cx={917} cy={24.6} r={14} fill="#80deea" opacity={0.3} />
      <circle cx={772.5} cy={343.19} r={14} fill="#80deea" opacity={0.3} />
      <circle cx={14} cy={81.6} r={14} fill="#80deea" opacity={0.5} />
      <circle cx={28} cy={38.6} r={14} fill="#80deea" opacity={0.3} />
      <g opacity={0.2} fill="#fff">
        <path d="M157.8 127.59l99.78-42.25a25.43 25.43 0 0 0 14.65-29.69l51-21.61-.76-1.79a11.91 11.91 0 0 0-15.62-6.33L253.2 48.64a25.43 25.43 0 0 1-14.65 29.69l-99.75 42.26a25.08 25.08 0 0 1-8.41 1.94 25.42 25.42 0 0 0 27.41 5.06zM67.11 155.44a11.91 11.91 0 0 1 6.33-15.62l45.55-19.29a25.32 25.32 0 0 1-11.71-10.09l-52.85 22.38a11.91 11.91 0 0 0-6.33 15.62l200.46 473.32a11.91 11.91 0 0 0 15.62 6.33l2.63-1.11z" />
      </g>
    </svg>
  );
};

UndrawSync.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSync;
