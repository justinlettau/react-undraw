import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawAddUser = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 873.74 509.56" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={367.4} y1={509.56} x2={367.4} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={367.14} y1={369.23} x2={367.14} y2={343.1} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={725.74} y1={400.02} x2={725.74} y2={150.02} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={832.87} y1={462.75} x2={946.87} y2={462.75} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={833.74} y1={257.02} x2={833.74} y2={177.02} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M0 0v509.56h734.81V0H0z" opacity={0.5} />
      <path fill="#fff" d="M10.9 31.71h716.12V500.5H10.9z" />
      <path fill="#f5f5f5" d="M10.9 9.41h716.12V43.9H10.9z" />
      <circle cx={38.15} cy={26.13} r={8.36} fill="#ff5252" />
      <circle cx={61.15} cy={26.13} r={8.36} fill="#ff0" />
      <circle cx={84.14} cy={26.13} r={8.36} fill="#69f0ae" />
      <path fill={primaryColor} opacity={0.5} d="M301.81 157.05h131.7v14.11h-131.7z" />
      <path fill="#e0e0e0" d="M206.7 217.67h144.24v14.11H206.7z" />
      <path fill="#3ad29f" d="M528.63 231.79H384.39v-14.11h144.24z" />
      <path fill="#e0e0e0" d="M206.17 247.98H528.1v14.11H206.17zM206.17 278.3H528.1v14.11H206.17z" />
      <path fill="url(#prefix__b)" d="M300.25 343.1h133.79v26.13H300.25z" />
      <path fill={primaryColor} d="M301.29 345.48h131.7v21.38h-131.7z" />
      <circle cx={725.74} cy={275.02} r={125} fill="url(#prefix__c)" opacity={0.5} />
      <circle cx={725.74} cy={275.02} r={117} fill="#f5f5f5" />
      <path
        d="M905.18 442.17l-2.25-.8-.12.2h-.13v-6.1a14.06 14.06 0 0 0-.17-2.2 23.33 23.33 0 0 0 8-10.56 27.51 27.51 0 1 0-43.57 0 23.33 23.33 0 0 0 8 10.56 14.06 14.06 0 0 0-.17 2.2v6.68a57 57 0 0 0-41.86 55v50h114v-50a57 57 0 0 0-41.73-54.98z"
        transform="translate(-163.13 -195.22)"
        fill="url(#prefix__d)"
        opacity={0.5}
      />
      <path
        d="M726.74 245.71a54.88 54.88 0 0 1 54.88 54.88v48.16H671.86v-48.16a54.88 54.88 0 0 1 54.88-54.88z"
        fill={primaryColor}
      />
      <rect x={712.18} y={227.8} width={26.88} height={33.6} rx={13.44} ry={13.44} fill="#fda57d" />
      <path opacity={0.05} d="M702.86 251.66l9.01 19.32 8.96-8.96-8.96-13.72-9.01 3.36z" />
      <path d="M703.17 250.72l9 19.32 9-9-9-13.72-4.12 1.26a10.33 10.33 0 0 0-1.18.44z" fill="#fff" />
      <path opacity={0.05} d="M748.42 250.72l-9.05 20.26-8.96-8.96 9.21-14.45 8.8 3.15z" />
      <path d="M748.11 249.78l-9 20.27-9-9 9.21-14.45 1.69.48a44.93 44.93 0 0 1 5.35 1.91z" fill="#fff" />
      <path fill="#fda57d" d="M720.47 260.37l5.01 7.31 5.29-7.31h-10.3z" />
      <path d="M692.49 286.85s-5.34 53.1-1.89 56.56M758.47 286.85s5.34 53.1 1.89 56.56" opacity={0.1} />
      <path
        d="M725.62 244.1a22.29 22.29 0 0 0 13.25-4.32 13.44 13.44 0 0 0-13.27-11.32 13.44 13.44 0 0 0-13.25 11.32 22.29 22.29 0 0 0 13.27 4.32z"
        opacity={0.05}
      />
      <circle cx={725.62} cy={212.78} r={26.48} />
      <circle cx={725.62} cy={221.08} r={22.4} fill="#fda57d" />
      <path d="M707.57 198.87l5.66 6.91s24.82 2.2 27.65-3.46-16.34-9.74-16.34-9.74z" opacity={0.05} />
      <path d="M707.57 198.24l5.66 6.91s24.82 2.2 27.65-3.46-16.34-9.74-16.34-9.74z" />
      <ellipse cx={703.17} cy={219.61} rx={1.57} ry={2.83} fill="#fda57d" />
      <ellipse cx={748.1} cy={219.61} rx={1.57} ry={2.83} fill="#fda57d" />
      <path
        fill="url(#prefix__e)"
        d="M873.74 208.09h-31.07v-31.06h-17.86v31.06h-31.07v17.87h31.07v31.06h17.86v-31.06h31.07v-17.87z"
        opacity={0.5}
      />
      <path fill="#3ad29f" d="M826.15 183.02h15.18v68h-15.18z" />
      <path fill="#3ad29f" d="M867.74 209.44v15.18h-68v-15.18z" />
    </svg>
  );
};

UndrawAddUser.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawAddUser;
