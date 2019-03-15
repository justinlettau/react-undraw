import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawBlogPost = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 627.45 759" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={313.72} y1={759} x2={313.72} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={313.72} y1={455.23} x2={313.72} y2={213.09} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
        </linearGradient>
      </defs>
      <path fill="url(#prefix__a)" d="M0 0h627.45v759H0z" />
      <path fill="#fff" d="M7.58 5.49h612.28v736.45H7.58z" />
      <path fill="#64ffda" d="M50.71 52.74h240.74v19.72H50.71zM50.71 513.37h240.74v19.72H50.71z" />
      <path fill="#e0e0e0" d="M50.71 92.18h526.03v19.72H50.71zM50.71 131.63h526.03v19.72H50.71z" />
      <path fill="url(#prefix__b)" d="M46.44 213.09H581v242.14H46.44z" />
      <path fill={primaryColor} d="M51.18 216.78h526.03v231.2H51.18z" />
      <path
        fill="#e0e0e0"
        d="M50.71 637.59h526.03v19.72H50.71zM50.71 678.34h526.03v19.72H50.71zM50.71 597.05h526.03v19.72H50.71zM50.71 556.51h526.03v19.72H50.71z"
      />
    </svg>
  );
};

UndrawBlogPost.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawBlogPost;
