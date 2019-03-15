import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawAtWork = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 853.53 770" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={758.38}
          y1={801.59}
          x2={758.38}
          y2={131.56}
          gradientTransform="rotate(4.65 1291.924 -1733.373)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={685.97}
          y1={797.2}
          x2={685.97}
          y2={126.94}
          gradientTransform="rotate(-10.87 147.515 1302.021)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__c" x1={517.93} y1={719.46} x2={517.93} y2={49.68} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__d"
          x1={553.48}
          y1={380.79}
          x2={559.93}
          y2={535.01}
          gradientTransform="rotate(180 625.234 347.191)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__e" x1={356.17} y1={639.4} x2={356.17} y2={574} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={296} y1={675.66} x2={296} y2={478.3} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M799.57 770l-489.62-40.15 53.96-667.57 489.62 40.15L799.57 770z" />
      <path fill={primaryColor} d="M793.7 760.47l-476.43-39.08 52.51-649.58 476.43 39.07-52.51 649.59z" />
      <path fill="url(#prefix__b)" d="M821.86 657.75l-482.42 93.34L214 93.34 696.42 0l125.44 657.75z" />
      <path fill="#e0e0e0" d="M813.67 650.15l-469.42 90.83-122.06-640.04 469.42-90.82 122.06 640.03z" />
      <path fill="url(#prefix__c)" d="M272.31 49.68h491.24v669.78H272.31z" />
      <path fill="#fff" d="M278.93 58.7h478.01v651.73H278.93z" />
      <path
        d="M613.25 236.15c.52 43.61 36.05 78.54 79.35 78s78-36.31 77.46-79.93a79 79 0 0 0-52.75-73.69l.24 20.34A26.73 26.73 0 0 1 691.32 208a26.72 26.72 0 0 1-26.87-26.42l-.24-20.34a79 79 0 0 0-50.96 74.91z"
        transform="translate(-173.24 -65)"
        fill="url(#prefix__d)"
      />
      <path
        d="M596.85 162.84c0-43.62-35.1-79-78.41-79s-78.41 35.36-78.41 79a79 79 0 0 0 51.86 74.33v-20.34a26.72 26.72 0 0 1 26.55-26.74 26.72 26.72 0 0 1 26.55 26.74v20.35a79 79 0 0 0 51.86-74.34z"
        fill={primaryColor}
      />
      <ellipse cx={518.49} cy={151.98} rx={30.14} ry={30.36} fill="#fff" stroke="#fff" strokeMiterlimit={10} />
      <path
        d="M518.44 190.09h0a26.72 26.72 0 0 0-26.55 26.74v20.35a78.17 78.17 0 0 0 53.1 0v-20.35a26.72 26.72 0 0 0-26.55-26.74zM488.09 150.3a29.63 29.63 0 0 1-3.21-15.3 20.48 20.48 0 0 1 6.68-13.85c4.39-3.77 10.34-5.1 16.09-5.56s11.58-.18 17.24-1.31a36 36 0 0 0 23-15.72c.36 4.45.72 9-.13 13.36s-3.09 8.7-6.87 11c4.58-2.13 4.08 2.87 3.09 5.86 2.27 2.76 7.78 3.22 8.06 6.79s.23 7.26-1.15 10.55.1 9.1-3.44 9.35"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path d="M542.57 122.26s21 1.85 6.06 33.29" fill="#fff" />
      <path fill="url(#prefix__e)" d="M323.71 574h64.93v65.4h-64.93z" />
      <path fill={primaryColor} d="M329.3 579.64h53.73v54.12H329.3z" />
      <path fill="#69f0ae" d="M440.13 303.38h156.72v11.28H440.13z" />
      <path fill="#e0e0e0" d="M440.13 319.17h264.19v11.28H440.13zM440.13 334.95h264.19v11.28H440.13z" />
      <path fill="#69f0ae" d="M440.13 444.33h156.72v11.28H440.13z" />
      <path fill="#e0e0e0" d="M440.13 460.11h264.19v11.28H440.13zM440.13 475.9h264.19v11.28H440.13z" />
      <path fill={primaryColor} d="M440.13 585.27h156.72v11.28H440.13z" />
      <path fill="#e0e0e0" d="M440.13 601.06h264.19v11.28H440.13zM440.13 616.85h264.19v11.28H440.13z" />
      <path
        d="M405.46 569.67h-36.58c-3.72-51.08-46-91.37-97.67-91.37-54.11 0-98 44.18-98 98.68s43.86 98.68 98 98.68c47.48 0 87.06-34 96-79.19h38.21a13.4 13.4 0 0 0 0-26.8z"
        transform="translate(-173.24 -65)"
        fill="url(#prefix__f)"
      />
      <path
        d="M99.81 420.65c-50.08 0-90.68 40.89-90.68 91.33s40.6 91.33 90.68 91.33 90.68-40.89 90.68-91.33-40.6-91.33-90.68-91.33zm0 169.14c-42.66 0-77.24-34.83-77.24-77.8s34.58-77.8 77.24-77.8S177.05 469 177.05 512s-34.58 77.78-77.24 77.78z"
        fill="#fff"
      />
      <path d="M182.66 505.22h42.73a11 11 0 0 1 11 11V519a11 11 0 0 1-11 11h-42.73v-24.78z" fill="#fff" />
      <ellipse cx={99.82} cy={511.98} rx={78.36} ry={78.93} fill={primaryColor} />
      <path
        d="M108.57 482.55c-6.11 3.2-9.06 12-5 17.62 1.62 2.23 4 3.71 6.07 5.55s3.82 4.41 3.46 7.15a10 10 0 0 1-2.25 4.51c-4.11 5.44-9.18 10.61-10.51 17.31-1.2 6.08 1 12.44 4.58 17.49 2 2.87 4.69 5.53 8.08 6.45 3.75 1 7.81-.32 11-2.61s5.54-5.45 7.88-8.56l5.45-7.24c1.49-2 3-4.13 3.16-6.61.19-4.26-3.8-7.45-5.16-11.48-2.52-7.48 4.43-15.21 3.5-23.06-1.43-11.86-19.73-22.07-30.26-16.52z"
        opacity={0.2}
      />
    </svg>
  );
};

UndrawAtWork.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawAtWork;
