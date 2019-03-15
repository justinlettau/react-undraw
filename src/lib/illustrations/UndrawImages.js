import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawImages = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 922.73 636.56" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={704.04} y1={628.14} x2={704.04} y2={138.69} gradientUnits="userSpaceOnUse">
          <stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={560.05} y1={462.46} x2={560.05} y2={29.48} xlinkHref="#prefix__a" />
        <clipPath id="prefix__c" transform="translate(-144.57 -138.69)">
          <rect x={395.46} y={178.13} width={617.65} height={410.82} rx={8.85} ry={8.85} fill="#fff" />
        </clipPath>
        <linearGradient id="prefix__d" x1={600} y1={694.72} x2={600} y2={205.28} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={456.01} y1={529.04} x2={456.01} y2={96.07} xlinkHref="#prefix__a" />
        <clipPath id="prefix__f" transform="translate(-144.57 -138.69)">
          <rect x={291.42} y={244.72} width={617.65} height={410.82} rx={8.85} ry={8.85} fill="#fff" />
        </clipPath>
        <linearGradient id="prefix__g" x1={495.96} y1={761.31} x2={495.96} y2={271.86} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={351.97} y1={595.63} x2={351.97} y2={162.65} xlinkHref="#prefix__a" />
        <clipPath id="prefix__i" transform="translate(-144.57 -138.69)">
          <rect x={187.38} y={311.3} width={617.65} height={410.82} rx={8.85} ry={8.85} fill="#fff" />
        </clipPath>
      </defs>
      <path
        d="M1055 612.72a15.34 15.34 0 0 1-15.26 15.42h-671.4a15.34 15.34 0 0 1-15.26-15.42V154.11a15.34 15.34 0 0 1 15.26-15.42h671.4a15.34 15.34 0 0 1 15.26 15.42"
        transform="translate(-144.57 -138.69)"
        fill="url(#prefix__a)"
      />
      <path
        d="M902.54 466.52a14.91 14.91 0 0 1-14.91 14.91H231.8a14.91 14.91 0 0 1-14.91-14.91V23.19A14.91 14.91 0 0 1 231.8 8.31h655.83a14.91 14.91 0 0 1 14.91 14.91"
        fill="#f5f5f5"
      />
      <rect
        data-name="<Rectangle>"
        x={243.09}
        y={29.48}
        width={633.92}
        height={432.98}
        rx={8.85}
        ry={8.85}
        fill="url(#prefix__b)"
      />
      <rect x={250.89} y={39.44} width={617.65} height={410.82} rx={8.85} ry={8.85} fill="#fff" />
      <g clipPath="url(#prefix__c)">
        <path
          d="M216.54 446.49L388.98 248.9a34.33 34.33 0 0 1 48.57-3.17l48.29 42.58a34.33 34.33 0 0 0 44.8.54l147.58-124.03a34.33 34.33 0 0 1 47.49 3.19l181.11 199.3a34.33 34.33 0 0 1 8.78 20l7 78.63a34.33 34.33 0 0 1-34.17 37.45h-646a34.33 34.33 0 0 1-34.31-33.29 34.33 34.33 0 0 1 8.42-23.61z"
          fill={primaryColor}
        />
      </g>
      <circle cx={325.27} cy={105.32} r={38.25} fill="#ff5252" />
      <path
        d="M951 679.3a15.34 15.34 0 0 1-15.26 15.42H264.3A15.34 15.34 0 0 1 249 679.3V220.7a15.34 15.34 0 0 1 15.26-15.42H935.7A15.34 15.34 0 0 1 951 220.7"
        transform="translate(-144.57 -138.69)"
        fill="url(#prefix__d)"
      />
      <path
        d="M798.5 533.11a14.91 14.91 0 0 1-14.91 14.91H127.76a14.91 14.91 0 0 1-14.91-14.91V89.77a14.91 14.91 0 0 1 14.91-14.91h655.83a14.91 14.91 0 0 1 14.91 14.91"
        fill="#f5f5f5"
      />
      <rect
        data-name="<Rectangle>"
        x={139.05}
        y={96.07}
        width={633.92}
        height={432.98}
        rx={8.85}
        ry={8.85}
        fill="url(#prefix__e)"
      />
      <rect x={146.85} y={106.03} width={617.65} height={410.82} rx={8.85} ry={8.85} fill="#fff" />
      <g clipPath="url(#prefix__f)">
        <path
          d="M112.5 513.08l172.44-197.6a34.33 34.33 0 0 1 48.58-3.17l48.28 42.6a34.33 34.33 0 0 0 44.8.54L574.18 231.4a34.33 34.33 0 0 1 47.49 3.19l181.1 199.34a34.33 34.33 0 0 1 8.78 20l7 78.63a34.33 34.33 0 0 1-34.19 37.36h-646a34.33 34.33 0 0 1-34.31-33.29 34.33 34.33 0 0 1 8.45-23.55z"
          fill={primaryColor}
        />
      </g>
      <circle cx={221.23} cy={171.9} r={38.25} fill="#ff5252" />
      <path
        d="M846.92 745.89a15.34 15.34 0 0 1-15.26 15.42h-671.4A15.34 15.34 0 0 1 145 745.89V287.28a15.34 15.34 0 0 1 15.26-15.42h671.4a15.34 15.34 0 0 1 15.26 15.42"
        transform="translate(-144.57 -138.69)"
        fill="url(#prefix__g)"
      />
      <path
        d="M694.43 599.69a14.91 14.91 0 0 1-14.91 14.91H23.72a14.91 14.91 0 0 1-14.91-14.91V156.31a14.91 14.91 0 0 1 14.91-14.91h655.83a14.91 14.91 0 0 1 14.88 14.91"
        fill="#fff"
      />
      <rect
        data-name="<Rectangle>"
        x={35.01}
        y={162.65}
        width={633.92}
        height={432.98}
        rx={8.85}
        ry={8.85}
        fill="url(#prefix__h)"
      />
      <rect x={42.81} y={172.61} width={617.65} height={410.82} rx={8.85} ry={8.85} fill="#fff" />
      <g clipPath="url(#prefix__i)">
        <path
          d="M8.43 579.66l172.48-197.59a34.33 34.33 0 0 1 48.52-3.17l48.28 42.6a34.33 34.33 0 0 0 44.8.54l147.63-124.05a34.33 34.33 0 0 1 47.49 3.19l181.1 199.34a34.33 34.33 0 0 1 8.78 20l7 78.63a34.33 34.33 0 0 1-34.19 37.36h-646a34.33 34.33 0 0 1-34.31-33.2 34.33 34.33 0 0 1 8.42-23.65z"
          fill={primaryColor}
        />
      </g>
      <circle cx={117.19} cy={238.49} r={38.25} fill="#ff5252" />
    </svg>
  );
};

UndrawImages.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawImages;
