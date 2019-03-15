import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSearch = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 877 551.99" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__b" x1={441.05} y1={161.23} x2={441.05} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={898} y1={321.04} x2={898} y2={200.75} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient id="prefix__a" x1={860.83} y1={243.65} x2={860.83} y2={237.86} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__d" x1={887.42} y1={237} x2={887.42} y2={219.3} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={435.32} y1={551.99} x2={435.32} y2={214.38} xlinkHref="#prefix__b" />
      </defs>
      <path fill="url(#prefix__b)" d="M5.09 0H877v161.23H5.09z" />
      <path fill="#fff" d="M10.18 5.28h860.45v147.38H10.18z" />
      <path fill="#f5f5f5" d="M63.03 35.36h500.19v87.71H63.03z" />
      <path
        d="M918.76 215a46.32 46.32 0 1 0-7.58 70.55l33.48 34.83a2.25 2.25 0 0 0 3.19.06l8.34-8a2.25 2.25 0 0 0 .06-3.19l-33.48-34.83a46.32 46.32 0 0 0-4.01-59.42zm-10.43 56a33.13 33.13 0 1 1 .92-46.85 33.13 33.13 0 0 1-.92 46.8z"
        transform="translate(-161.5 -174)"
        fill="url(#prefix__c)"
      />
      <path
        d="M860.83 237.86c-3.73 0-3.73 5.79 0 5.79s3.73-5.79 0-5.79z"
        transform="translate(-161.5 -174)"
        fill="url(#prefix__a)"
      />
      <path
        d="M886.8 219.31a27.83 27.83 0 0 0-24 12.4c-1.58 2.48 2.91 4.67 4.49 2.2 4-6.29 11.65-10.28 19.9-10.07a25.36 25.36 0 0 1 20.69 12c1.58 2.61 5.73.24 4.15-2.35-5.03-8.3-14.87-13.95-25.23-14.18z"
        transform="translate(-161.5 -174)"
        fill="url(#prefix__d)"
      />
      <path
        d="M757.26 35.87a46.32 46.32 0 1 0-7.58 70.55l33.48 34.83a2.25 2.25 0 0 0 3.19.06l8.34-8a2.25 2.25 0 0 0 .06-3.19l-33.48-34.83a46.32 46.32 0 0 0-4.01-59.42zm-10.43 56a33.13 33.13 0 1 1 .92-46.85 33.13 33.13 0 0 1-.92 46.84z"
        fill={primaryColor}
      />
      <path
        d="M699.33 58.76c-3.73 0-3.73 5.79 0 5.79s3.73-5.79 0-5.79zM725.3 40.22a27.83 27.83 0 0 0-24 12.4c-1.58 2.48 2.91 4.67 4.49 2.2 4-6.29 11.65-10.28 19.9-10.07a25.36 25.36 0 0 1 20.69 12c1.58 2.61 5.73.24 4.15-2.35-5.03-8.3-14.87-13.95-25.23-14.18z"
        fill={primaryColor}
      />
      <path fill="url(#prefix__e)" d="M0 214.38h870.64V552H0z" />
      <path fill="#fff" d="M10.18 222.62h850.03V541.2H10.18z" />
      <circle cx={121.09} cy={381.17} r={71.46} fill={primaryColor} />
      <path fill="#bdbdbd" d="M244.65 324.6h297.73v35.73H244.65z" />
      <path fill="#e0e0e0" d="M244.65 397.54h297.73v35.73H244.65z" />
      <path fill={primaryColor} d="M580.34 222.62H861.7V541.2H580.34z" />
    </svg>
  );
};

UndrawSearch.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSearch;
