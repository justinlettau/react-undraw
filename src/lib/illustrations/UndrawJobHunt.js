import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawJobHunt = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 895 767" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={127.5} y1={767} x2={127.5} y2={522} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={280} y1={694.5} x2={280} y2={623.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={447} x2={447} y2={515} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={600} y1={694.5} x2={600} y2={623.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={767.5} x2={767.5} y2={524} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={920} y1={694.5} x2={920} y2={623.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={463} y1={595} x2={463} y2={0} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={617.89} y1={237.7} x2={617.89} y2={152.7} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={218} y1={194} x2={218} y2={98} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M0 522h255v245H0z" />
      <path fill="#f5f5f5" d="M4 528h247v234H4z" />
      <path
        d="M301.85 635.52v-12h-43.7v12h-30.58v59h104.86v-59zm-38.23-7.65h32.77v7.65h-32.77z"
        transform="translate(-152.5 -66.5)"
        fill="url(#prefix__b)"
        opacity={0.5}
      />
      <path fill={primaryColor} opacity={0.6} d="M79.5 571h96v54h-96z" />
      <path fill={primaryColor} opacity={0.6} d="M107.5 560v14h5v-10h30v10h5v-14h-40zM85 667h89v12H85z" />
      <path fill="#bdbdbd" d="M51.5 689h152v12h-152z" />
      <path fill="url(#prefix__c)" d="M320 515h254v252H320z" />
      <path fill="#f5f5f5" d="M324 528h247v234H324z" />
      <path
        d="M621.85 635.52v-12h-43.7v12h-30.58v59h104.86v-59zm-38.23-7.65h32.77v7.65h-32.77z"
        transform="translate(-152.5 -66.5)"
        fill="url(#prefix__d)"
        opacity={0.5}
      />
      <path fill={primaryColor} opacity={0.6} d="M399.5 571h96v54h-96z" />
      <path fill={primaryColor} d="M427.5 560v14h5v-10h30v10h5v-14h-40z" />
      <path fill={primaryColor} d="M405 667h89v12h-89z" opacity={0.6} />
      <path fill="#bdbdbd" d="M371.5 689h152v12h-152z" />
      <path fill="url(#prefix__e)" d="M640 524h255v243H640z" />
      <path fill="#f5f5f5" d="M644 528h247v234H644z" />
      <path
        d="M941.85 635.52v-12h-43.7v12h-30.58v59h104.86v-59zm-38.23-7.65h32.77v7.65h-32.77z"
        transform="translate(-152.5 -66.5)"
        fill="url(#prefix__f)"
        opacity={0.5}
      />
      <path fill={primaryColor} opacity={0.6} d="M719.5 571h96v54h-96z" />
      <path fill={primaryColor} opacity={0.6} d="M747.5 560v14h5v-10h30v10h5v-14h-40zM725 667h89v12h-89z" />
      <path fill="#bdbdbd" d="M691.5 689h152v12h-152z" />
      <path fill="url(#prefix__g)" d="M209.8 0h506.41v595H209.8z" opacity={0.5} />
      <path fill="#fff" d="M225.36 9.58h480.07v572.25H225.36z" />
      <path
        d="M644 167.08V152.7h-52.26v14.38h-36.61v70.62h125.53v-70.62zm-45.77-9.15h39.23v9.15h-39.18z"
        transform="translate(-152.5 -66.5)"
        fill="url(#prefix__h)"
        opacity={0.5}
      />
      <path fill={primaryColor} d="M407.93 102.96h114.93v64.65H407.93z" />
      <path fill={primaryColor} d="M441.45 89.79v16.76h5.99V94.58h35.91v11.97h5.99V89.79h-47.89z" />
      <path
        fill="#e0e0e0"
        d="M297.19 260.65H634.8v14.37H297.19zM297.19 355.23H634.8v14.37H297.19zM297.19 380.37H634.8v14.37H297.19zM297.19 330.08h142.46v14.37H297.19z"
      />
      <path fill="#3ad29f" opacity={0.6} d="M528.25 330.08H634.8v14.37H528.25z" />
      <path fill={primaryColor} d="M415.71 439.03h106.55v14.37H415.71z" />
      <circle cx={218} cy={146} r={48} fill="url(#prefix__i)" opacity={0.5} />
      <circle cx={218} cy={146} r={45.18} fill="#69f0ae" />
      <path fill="#fff" d="M199.06 139.18L216 154.71l24-35.3 8.47 7.06L216 168.82 192 142l7.06-2.82z" />
    </svg>
  );
};

UndrawJobHunt.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawJobHunt;
