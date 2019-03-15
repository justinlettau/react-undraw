import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawPost = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 822 773.08" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={255.71} y1={773.08} x2={255.71} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={570.12} y1={703.31} x2={570.12} y2={248.91} xlinkHref="#prefix__a" />
      </defs>
      <rect width={511.42} height={773.08} rx={4.5} ry={4.5} fill="url(#prefix__a)" opacity={0.5} />
      <rect x={6.56} y={5.68} width={498.31} height={757.43} rx={4.5} ry={4.5} fill="#fff" />
      <rect x={56.39} y={145.21} width={99.66} height={89.7} rx={4.5} ry={4.5} fill={primaryColor} />
      <rect x={185.95} y={145.21} width={269.09} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
      <rect x={185.95} y={175.1} width={223.69} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
      <rect x={56.39} y={284.73} width={99.66} height={89.7} rx={4.5} ry={4.5} fill={primaryColor} />
      <rect x={185.95} y={284.73} width={269.09} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
      <rect x={185.95} y={314.63} width={269.09} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
      <rect x={56.39} y={424.26} width={99.66} height={89.7} rx={4.5} ry={4.5} fill={primaryColor} />
      <rect x={185.95} y={424.26} width={269.09} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
      <rect x={185.95} y={454.16} width={29.9} height={9.97} rx={4.48} ry={4.48} fill="#e0e0e0" />
      <rect
        x={318.25}
        y={248.91}
        width={503.75}
        height={454.41}
        rx={4.5}
        ry={4.5}
        fill="url(#prefix__b)"
        opacity={0.5}
      />
      <rect x={326.03} y={253.47} width={489.04} height={440.14} rx={4.5} ry={4.5} fill="#fff" />
      <rect x={374.05} y={348.03} width={105.07} height={94.57} rx={4.5} ry={4.5} fill={primaryColor} />
      <rect x={510.64} y={348.03} width={283.7} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
      <rect x={510.64} y={379.55} width={283.7} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
      <rect x={363.54} y={493.97} width={430.8} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
      <rect x={363.54} y={525.49} width={430.8} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
      <rect x={363.54} y={567.52} width={430.8} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
      <rect x={363.54} y={599.04} width={325.73} height={10.51} rx={4.5} ry={4.5} fill="#e0e0e0" />
    </svg>
  );
};

UndrawPost.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawPost;
