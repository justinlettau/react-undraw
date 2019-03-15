import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawConfirmed = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 722 756.57" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={635.65}
          y1={790.5}
          x2={635.65}
          y2={501.26}
          gradientTransform="translate(.01 -.01)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={457.34} y1={294.83} x2={457.34} y2={145.49} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__c"
          x1={591.52}
          y1={654.18}
          x2={591.52}
          y2={72.22}
          gradientTransform="translate(-238.99 -72.23)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__d" x1={771.88} y1={599.91} x2={771.88} y2={322.65} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__e"
          x1={683.94}
          y1={827.36}
          x2={683.94}
          y2={758.36}
          gradientTransform="translate(-238.99 -72.23)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__f" x1={432.87} y1={501.19} x2={432.87} y2={377.79} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={428.07} y1={603.48} x2={428.07} y2={493.95} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={352.52} y1={380.93} x2={352.52} y2={201.04} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={442.05} y1={399.65} x2={442.05} y2={262.62} xlinkHref="#prefix__a" />
      </defs>
      <circle
        cx={361}
        cy={395.57}
        r={297}
        fill="none"
        stroke="#3ad29f"
        strokeMiterlimit={10}
        strokeWidth={2}
        strokeDasharray="12"
      />
      <circle
        cx={361}
        cy={395.57}
        r={360}
        fill="none"
        stroke="#3ad29f"
        strokeMiterlimit={10}
        strokeWidth={2}
        strokeDasharray="12"
      />
      <path
        d="M840.94 582.47a81.21 81.21 0 0 0-161-15.14l-249.59-6.77 2.74 42.88s-35.59 82.12 151.46 104v83h216.24v-138a81.16 81.16 0 0 0 40.15-69.97z"
        transform="translate(-239 -72.21)"
        fill="url(#prefix__a)"
      />
      <path d="M202.66 533.03s-34.08 78.64 145.05 99.62v79.52H554.8V501.58L200 491.96z" fill="#be7c5e" />
      <path
        d="M545.16 277.07a38.18 38.18 0 0 1-52.5 11.93l-111.19-73.27a38.18 38.18 0 0 1-11.93-52.5A38.18 38.18 0 0 1 422 151.3l111.19 73.27a38.18 38.18 0 0 1 11.97 52.5z"
        transform="translate(-239 -72.21)"
        fill="url(#prefix__b)"
      />
      <path
        d="M300 200.86a35.49 35.49 0 0 1-48.8 11.09l-103.39-68.16a35.49 35.49 0 0 1-11.09-48.8 35.49 35.49 0 0 1 48.8-11.09l103.37 68.12A35.49 35.49 0 0 1 300 200.86z"
        fill="#be7c5e"
      />
      <circle cx={515.49} cy={512.94} r={77.77} fill="#be7c5e" />
      <rect x={191.32} width={322.42} height={581.96} rx={12.25} ry={12.25} fill="url(#prefix__c)" />
      <rect x={195.67} y={7.87} width={313.7} height={566.24} rx={13.64} ry={13.64} fill="#fff" />
      <path
        d="M431.33 22.07a25.43 25.43 0 0 1-25.07 21.63H297.92a25.43 25.43 0 0 1-25.06-21.63h-57.4a11.91 11.91 0 0 0-11.92 11.91v514a11.91 11.91 0 0 0 11.91 11.92h274.14a11.91 11.91 0 0 0 11.92-11.91v-514a11.91 11.91 0 0 0-11.91-11.92z"
        fill={primaryColor}
      />
      <rect x={318.01} y={28.84} width={69.91} height={4.37} rx={2} ry={2} fill="#dbdbdb" />
      <circle cx={402.77} cy={30.59} r={2.62} fill="#dbdbdb" />
      <path
        d="M804.76 598.87c-22.57 5.22-38.06-9.5-43.28-32.06l-51.86-192.57a42.24 42.24 0 0 1 31.55-50.51 42.24 42.24 0 0 1 50.51 31.55L834 552.82c5.22 22.57-6.68 40.83-29.24 46.05z"
        transform="translate(-239 -72.21)"
        fill="url(#prefix__d)"
      />
      <rect
        x={739.86}
        y={329.79}
        width={70.78}
        height={282.61}
        rx={35.39}
        ry={35.39}
        transform="rotate(-13.01 339.366 1483.163)"
        fill="#be7c5e"
      />
      <path fill="url(#prefix__e)" d="M296.93 686.15h296v69h-296z" />
      <path fill="#4d8af0" d="M304.93 694.15h280v54h-280z" />
      <path
        d="M502 483.65a37.72 37.72 0 0 1-51.87 11.79l-74.57-48.25a37.72 37.72 0 0 1-11.79-51.87 37.72 37.72 0 0 1 51.87-11.79l74.57 48.25A37.72 37.72 0 0 1 502 483.65z"
        transform="translate(-239 -72.21)"
        fill="url(#prefix__f)"
      />
      <path
        d="M483.28 585.78a38.06 38.06 0 0 1-52.34 11.9L384.75 564a38.06 38.06 0 0 1-11.9-52.34 38.06 38.06 0 0 1 52.34-11.9l46.19 33.69a38.06 38.06 0 0 1 11.9 52.33z"
        transform="translate(-239 -72.21)"
        fill="url(#prefix__g)"
      />
      <circle cx={352.52} cy={290.99} r={89.94} fill="url(#prefix__h)" opacity={0.5} />
      <circle cx={352.52} cy={290.99} r={84.65} fill="#69f0ae" />
      <path fill="#fff" d="M315.78 279.69l31.74 29.1 44.97-66.13 15.88 13.23-60.85 79.36-44.97-50.26 13.23-5.3z" />
      <path
        d="M240.55 511.06a35.49 35.49 0 0 1-48.8 11.09l-43.08-31.36a35.49 35.49 0 0 1-11.09-48.8 35.49 35.49 0 0 1 48.8-11.09l43.07 31.42a35.49 35.49 0 0 1 11.1 48.74zM258.9 408.79a35.49 35.49 0 0 1-48.8 11.09l-70.16-45.4a35.49 35.49 0 0 1-11.09-48.8 35.49 35.49 0 0 1 48.8-11.09l70.16 45.4a35.49 35.49 0 0 1 11.09 48.8z"
        fill="#be7c5e"
      />
      <path
        d="M521.28 382a37.9 37.9 0 0 1-52.11 11.84l-94.5-61.53a37.9 37.9 0 0 1-11.84-52.11 37.9 37.9 0 0 1 52.11-11.84l94.5 61.53A37.9 37.9 0 0 1 521.28 382z"
        transform="translate(-239 -72.21)"
        fill="url(#prefix__i)"
      />
      <path
        d="M277.26 306.59a35.49 35.49 0 0 1-48.8 11.09l-88.51-57.63a35.49 35.49 0 0 1-11.09-48.8 35.49 35.49 0 0 1 48.8-11.09l88.5 57.63a35.49 35.49 0 0 1 11.1 48.8z"
        fill="#be7c5e"
      />
    </svg>
  );
};

UndrawConfirmed.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawConfirmed;
