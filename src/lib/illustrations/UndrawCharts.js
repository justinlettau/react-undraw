import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCharts = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 884 612" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={442} y1={612} x2={442} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={844.74} y1={532} x2={844.74} y2={314} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={735.74} y1={531.99} x2={735.74} y2={387.27} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={738.74} y1={438.26} x2={738.74} y2={314.01} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M0 0h884v612H0z" />
      <path fill="#fff" d="M11 9h865v576H11z" />
      <path fill="#bdbdbd" d="M11 9h865v57H11z" />
      <circle cx={51.91} cy={37.5} r={14} fill="#ff5252" />
      <circle cx={92} cy={37.5} r={14} fill="#ff0" />
      <circle cx={132.09} cy={37.5} r={14} fill="#69f0ae" />
      <path fill="#e0e0e0" d="M92 125h147v17H92zM92 153h147v17H92zM92 181h245v17H92zM92 209h291v17H92z" />
      <path fill="#f5f5f5" d="M104 315h44v206h-44zM177 315h44v206h-44zM250 315h44v206h-44zM323 315h44v206h-44z" />
      <path fill="#2196f3" d="M104 418h44v103h-44z" />
      <path fill="#2196f3" d="M104 375h44v45h-44z" opacity={0.4} />
      <path fill="#69f0ae" d="M177 440.36h44V521h-44z" />
      <path fill="#69f0ae" opacity={0.4} d="M177 388h44v52.36h-44z" />
      <path fill={primaryColor} d="M250 403h44v118h-44z" />
      <path fill={primaryColor} opacity={0.4} d="M250 362h44v41h-44z" />
      <path fill="#ff0" d="M323 444h44v77h-44z" />
      <path fill="#ff0" opacity={0.4} d="M323 420h44v24h-44z" />
      <path d="M790.5 314h-.5v218h.52a109 109 0 0 0 0-218z" transform="translate(-158 -144)" fill="url(#prefix__b)" />
      <path
        d="M687.5 387.27A109.05 109.05 0 0 0 790 532v-93.74z"
        transform="translate(-158 -144)"
        fill="url(#prefix__c)"
      />
      <path d="M790 314a109 109 0 0 0-102.5 73.27l102.48 51z" transform="translate(-158 -144)" fill="url(#prefix__d)" />
      <path d="M632.5 175h-.5v208h.5a104 104 0 0 0 0-208z" fill={primaryColor} />
      <path d="M534.22 244.91A104.05 104.05 0 0 0 632 383v-89.44z" fill="#2196f3" />
      <path d="M632 175a104 104 0 0 0-97.78 69.9L632 293.56z" fill="#69f0ae" />
      <path fill="#2196f3" d="M524 410h13v14h-13z" />
      <path fill="#7c4dff" d="M632 410h13v14h-13z" />
      <path fill="#69f0ae" d="M740 410h13v14h-13z" />
      <path fill="#f5f5f5" d="M541 413h45v8h-45zM650 413h45v8h-45zM759 413h45v8h-45z" />
    </svg>
  );
};

UndrawCharts.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCharts;
