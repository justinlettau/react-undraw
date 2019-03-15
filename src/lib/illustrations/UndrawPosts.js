import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPosts = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 880 708.57" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__b" x1={440} y1={126.86} x2={440} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__a" x1={87.3} y1={109.38} x2={87.3} y2={20.06} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={255.5} y1={42.07} x2={255.5} y2={30.42} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={292.17} y1={69.25} x2={292.17} y2={57.6} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={440} y1={321.14} x2={440} y2={194.29} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__f" x1={87.3} y1={303.67} x2={87.3} y2={214.35} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={255.5} y1={236.36} x2={255.5} y2={224.71} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={292.17} y1={263.54} x2={292.17} y2={251.89} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={440} y1={514.29} x2={440} y2={387.43} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__j" x1={87.3} y1={496.81} x2={87.3} y2={407.49} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={255.5} y1={429.5} x2={255.5} y2={417.85} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={292.17} y1={456.68} x2={292.17} y2={445.03} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={440} y1={708.57} x2={440} y2={581.71} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__n" x1={87.3} y1={691.1} x2={87.3} y2={601.78} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={255.5} y1={623.78} x2={255.5} y2={612.13} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={292.17} y1={650.97} x2={292.17} y2={639.32} xlinkHref="#prefix__a" />
      </defs>
      <rect width={880} height={126.86} rx={18.52} ry={18.52} fill="url(#prefix__b)" />
      <rect x={41.32} y={20.06} width={91.96} height={89.32} rx={8.35} ry={8.35} fill="url(#prefix__a)" />
      <path fill="url(#prefix__c)" d="M167.04 30.42h176.93v11.65H167.04z" />
      <path fill="url(#prefix__d)" d="M167.04 57.6H417.3v11.65H167.04z" />
      <rect y={194.29} width={880} height={126.86} rx={18.52} ry={18.52} fill="url(#prefix__e)" />
      <rect x={41.32} y={214.35} width={91.96} height={89.32} rx={8.35} ry={8.35} fill="url(#prefix__f)" />
      <path fill="url(#prefix__g)" d="M167.04 224.71h176.93v11.65H167.04z" />
      <path fill="url(#prefix__h)" d="M167.04 251.89H417.3v11.65H167.04z" />
      <rect y={387.43} width={880} height={126.86} rx={18.52} ry={18.52} fill="url(#prefix__i)" />
      <rect x={41.32} y={407.49} width={91.96} height={89.32} rx={8.35} ry={8.35} fill="url(#prefix__j)" />
      <path fill="url(#prefix__k)" d="M167.04 417.85h176.93v11.65H167.04z" />
      <path fill="url(#prefix__l)" d="M167.04 445.03H417.3v11.65H167.04z" />
      <rect y={581.71} width={880} height={126.86} rx={18.52} ry={18.52} fill="url(#prefix__m)" />
      <rect x={41.32} y={601.78} width={91.96} height={89.32} rx={8.35} ry={8.35} fill="url(#prefix__n)" />
      <path fill="url(#prefix__o)" d="M167.04 612.13h176.93v11.65H167.04z" />
      <path fill="url(#prefix__p)" d="M167.04 639.32H417.3v11.65H167.04z" />
      <rect x={8} y={4.57} width={864} height={112} rx={18.52} ry={18.52} fill="#fff" />
      <rect x={48.57} y={22.29} width={90.29} height={78.86} rx={8.35} ry={8.35} fill={primaryColor} />
      <path fill="#bdbdbd" d="M172 31.43h173.71v10.29H172z" />
      <path fill="#e0e0e0" d="M172 55.43h245.71v10.29H172z" />
      <rect x={8} y={198.86} width={864} height={112} rx={18.52} ry={18.52} fill="#fff" />
      <rect x={48.57} y={216.57} width={90.29} height={78.86} rx={8.35} ry={8.35} fill={primaryColor} />
      <path fill="#bdbdbd" d="M172 225.71h173.71V236H172z" />
      <path fill="#64ffda" d="M172 249.71h245.71V260H172z" />
      <rect x={8} y={393.14} width={864} height={112} rx={18.52} ry={18.52} fill="#fff" />
      <rect x={48.57} y={410.86} width={90.29} height={78.86} rx={8.35} ry={8.35} fill={primaryColor} />
      <path fill="#bdbdbd" d="M172 420h173.71v10.29H172z" />
      <path fill="#e0e0e0" d="M172 444h245.71v10.29H172z" />
      <rect x={8} y={587.43} width={864} height={112} rx={18.52} ry={18.52} fill="#fff" />
      <rect x={48.57} y={605.14} width={90.29} height={78.86} rx={8.35} ry={8.35} fill={primaryColor} />
      <path fill="#bdbdbd" d="M172 614.29h173.71v10.29H172z" />
      <path fill="#64ffda" d="M172 638.29h245.71v10.29H172z" />
    </svg>
  );
};

UndrawPosts.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPosts;
