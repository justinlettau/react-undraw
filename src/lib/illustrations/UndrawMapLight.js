import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawMapLight = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 887.59 776.14" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={148.91} y1={776.14} x2={148.91} y2={47.08} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={446.72} y1={776.14} x2={446.72} y2={47.08} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={741.61} y1={776.14} x2={741.61} y2={47.08} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__b" x1={889.9} y1={282.66} x2={889.9} y2={61.93} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient id="prefix__e" x1={733.7} y1={87.3} x2={733.7} y2={44.48} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__f" x1={311.15} y1={727} x2={311.15} y2={504.71} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__g" x1={154.94} y1={530.7} x2={154.94} y2={487.57} gradientUnits="userSpaceOnUse">
          <stop offset={0.01} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.05} />
        </linearGradient>
      </defs>
      <path fill="url(#prefix__a)" d="M297.81 748.17L0 776.14V75.06l297.81-27.98v701.09z" />
      <path fill="url(#prefix__c)" d="M297.81 748.17l297.81 27.97V75.06L297.81 47.08v701.09z" />
      <path fill="url(#prefix__d)" d="M887.59 748.17l-291.97 27.97V75.06l291.97-27.98v701.09z" />
      <path fill="#f5f5f5" d="M298.87 728.7L9.49 755.59V81.95l289.38-26.88V728.7z" />
      <path fill="#fff" d="M298.87 728.7l289.37 26.89V81.95L298.87 55.07V728.7z" />
      <path fill="#f5f5f5" d="M877.62 728.7l-289.38 26.89V81.95l289.38-26.88V728.7z" />
      <path
        fill={primaryColor}
        opacity={0.3}
        d="M298.87 116.94l-219.81 7.71V225.85h186.6v-36.59l33.21-1.16 50.6 15.62v-71.16l-50.6-15.62zM298.87 682.85L52.18 706.57v-90.14l246.69-23.72v90.14zM444.34 613.27h107.53v82.23H444.34zM836.5 657.55l-167.61 14.23V562.67l167.61-14.23v109.11z"
      />
      <path
        d="M958.28 132.76c0 39.12-68.38 149.9-68.38 149.9s-68.38-110.78-68.38-149.9 30.62-70.83 68.38-70.83 68.38 31.71 68.38 70.83z"
        transform="translate(-156.2 -61.93)"
        fill="url(#prefix__b)"
      />
      <ellipse cx={733.7} cy={65.89} rx={20.67} ry={21.41} fill="url(#prefix__e)" />
      <path
        d="M796.98 70.96c0 34.95-63.28 133.91-63.28 133.91s-63.28-99-63.28-133.91a63.28 63.28 0 1 1 126.55 0z"
        fill={primaryColor}
      />
      <circle cx={733.7} cy={66.54} r={19.13} fill="#fff" />
      <path
        d="M381.56 576c0 39.4-70.41 151-70.41 151s-70.41-111.56-70.41-151 31.52-71.33 70.41-71.33 70.41 31.98 70.41 71.33z"
        transform="translate(-156.2 -61.93)"
        fill="url(#prefix__f)"
      />
      <ellipse cx={154.94} cy={509.14} rx={21.29} ry={21.57} fill="url(#prefix__g)" />
      <path
        d="M218.22 513.72c0 34.95-63.28 133.91-63.28 133.91s-63.28-99-63.28-133.91a63.28 63.28 0 0 1 126.55 0z"
        fill={primaryColor}
      />
      <circle cx={154.94} cy={509.31} r={19.13} fill="#fff" />
      <g opacity={0.4} fill="none" stroke="#64ffda" strokeMiterlimit={10} strokeWidth={11}>
        <path d="M175.52 649.64l4.65-3.79" />
        <path strokeDasharray="11.32 11.32" d="M188.95 638.69l100.88-82.28" />
        <path d="M294.21 552.83l4.66-3.79 5.86 1.25" />
        <path strokeDasharray="12.43 12.43" d="M316.89 552.88l115.51 24.63" />
        <path d="M438.48 578.81l5.86 1.25 1.67-5.76" />
        <path strokeDasharray="12.17 12.17" d="M449.4 562.61l113.34-391.56" />
        <path d="M564.43 165.2l1.67-5.76 5.48 2.45" />
        <path strokeDasharray="11.6 11.6" d="M582.17 166.62l121.8 54.42" />
        <path d="M709.27 223.41l5.48 2.44" />
      </g>
    </svg>
  );
};

UndrawMapLight.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMapLight;
