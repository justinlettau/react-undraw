import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSecureData = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 918.14 765.54" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={397.74} y1={717.25} x2={397.74} y2={86.11} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={288.88} y1={378.44} x2={288.88} y2={209.65} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={288.88} y1={328.29} x2={288.88} y2={223.1} xlinkHref="#prefix__a" />
        <clipPath id="prefix__d" transform="translate(-140.93 -67.23)">
          <path data-name="<Rectangle>" fill="#fff" d="M354.51 291.55h150.6v101.52h-150.6z" />
        </clipPath>
        <linearGradient id="prefix__e" x1={288.88} y1={594.94} x2={288.88} y2={426.14} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={288.88} y1={544.79} x2={288.88} y2={439.6} xlinkHref="#prefix__a" />
        <clipPath id="prefix__g" transform="translate(-140.93 -67.23)">
          <path data-name="<Rectangle>" fill="#fff" d="M354.51 508.05h150.6v101.52h-150.6z" />
        </clipPath>
        <linearGradient
          id="prefix__h"
          x1={671.57}
          y1={760.34}
          x2={671.57}
          y2={129.2}
          gradientTransform="rotate(90 651.765 457.665)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__i"
          x1={670.96}
          y1={553.63}
          x2={670.96}
          y2={387.28}
          gradientTransform="rotate(90 648.96 480.55)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__j" x1={637.66} y1={754.12} x2={637.66} y2={601.05} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={778.37} y1={673.86} x2={778.37} y2={569.13} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={778.37} y1={774.41} x2={778.37} y2={713.66} xlinkHref="#prefix__a" />
      </defs>
      <path fill="url(#prefix__a)" d="M162.9 86.11h469.69v631.14H162.9z" opacity={0.5} />
      <path fill="#f2f2f2" d="M169.02 94.67h455.01v609.12H169.02z" />
      <path fill="#e0e0e0" d="M204.49 120.36h156.56v4.89H204.49z" />
      <path fill={primaryColor} opacity={0.7} d="M204.49 142.37h156.56v4.89H204.49z" />
      <path
        fill="#e0e0e0"
        d="M384.29 120.36h156.56v4.89H384.29zM408.75 259.8h156.56v4.89H408.75zM412.42 273.25h156.56v4.89H412.42zM419.76 286.7h156.56v4.89H419.76zM408.75 476.29h156.56v4.89H408.75zM412.42 489.75h156.56v4.89H412.42zM419.76 503.2h156.56v4.89H419.76z"
      />
      <path fill="url(#prefix__b)" d="M205.71 209.65h166.35v168.79H205.71z" opacity={0.5} />
      <path fill="#f5f5f5" d="M206.76 213.32h163.72v161.45H206.76z" />
      <path fill="url(#prefix__c)" d="M212.53 223.1h152.7v105.19h-152.7z" opacity={0.5} />
      <path data-name="<Rectangle>" fill="#fff" d="M213.58 224.32h150.6v101.52h-150.6z" />
      <g clipPath="url(#prefix__d)" fill={primaryColor}>
        <path
          opacity={0.4}
          d="M200.82 322.18l37.92-58.72 15.9 25.69 34.24-35.47 29.36 35.47 25.69-52.59 66.05 105.19-214.05-7.34 4.89-12.23z"
        />
        <circle cx={230.17} cy={239} r={11.01} opacity={0.4} />
      </g>
      <path fill="url(#prefix__e)" d="M205.71 426.14h166.35v168.79H205.71z" opacity={0.5} />
      <path fill="#f5f5f5" d="M206.76 429.81h163.72v161.45H206.76z" />
      <path fill="url(#prefix__f)" d="M212.53 439.6h152.7v105.19h-152.7z" opacity={0.5} />
      <path data-name="<Rectangle>" fill="#fff" d="M213.58 440.82h150.6v101.52h-150.6z" />
      <g clipPath="url(#prefix__g)" fill="#bdbdbd">
        <path
          opacity={0.4}
          d="M200.82 538.67l37.92-58.71 15.9 25.69 34.24-35.47 29.36 35.47 25.69-52.6 66.05 105.19-214.05-7.34 4.89-12.23z"
        />
        <circle cx={230.17} cy={455.5} r={11.01} opacity={0.4} />
      </g>
      <path
        transform="rotate(-78.76 553.216 529.704)"
        fill="url(#prefix__h)"
        d="M349.09 242.63h631.14v469.69H349.09z"
        opacity={0.5}
      />
      <path fill="#fff" d="M240.474 661.952l118.73-597.436 446.282 88.69-118.73 597.436z" />
      <path
        fill="#e0e0e0"
        d="M386.157 98.537l316.716 62.942-.953 4.796-316.716-62.941zM296.034 552.03l316.716 62.94-.953 4.797-316.716-62.942zM290.552 579.626l244.734 48.636-.954 4.796-244.734-48.636z"
      />
      <path
        fill={primaryColor}
        opacity={0.7}
        d="M285.074 607.213l91.177 18.12-.953 4.796-91.177-18.12zM380.68 126.144l158.354 31.47-.953 4.796-158.354-31.47z"
      />
      <path fill="#e0e0e0" d="M375.198 153.73l285.526 56.743-.953 4.797-285.526-56.743z" />
      <path fill="#3ad29f" opacity={0.7} d="M369.718 181.326l69.58 13.828-.954 4.796-69.58-13.828z" />
      <path fill="#e0e0e0" d="M364.225 208.914l316.716 62.941-.953 4.796-316.717-62.94z" />
      <path
        transform="rotate(-78.76 547.604 554.776)"
        fill="url(#prefix__i)"
        d="M575.87 357.6h166.35v289.88H575.87z"
        opacity={0.5}
      />
      <path fill="#fff" d="M393.757 327.022l280.73 55.79-31.71 159.56-280.73-55.79z" />
      <path fill="#e0e0e0" d="M358.742 236.507l316.716 62.94-.953 4.797-316.716-62.941z" />
      <path fill={primaryColor} d="M418.862 354.455l34.79 6.914-23.125 116.365-34.79-6.914z" />
      <path fill="#3ad29f" d="M473.615 405.25l34.79 6.914-15.497 77.975-34.79-6.914z" />
      <path fill="#f55f44" d="M528.846 453.627l34.79 6.914-8.344 41.988-34.79-6.913z" />
      <path fill="#fdd835" d="M599.81 422.843l34.79 6.913-16.926 85.175-34.79-6.914z" />
      <g opacity={0.5} fill="#47e6b1">
        <path d="M128.65 645.09h3.67v20.79h-3.67z" />
        <path d="M140.89 653.65v3.67H120.1v-3.67z" />
      </g>
      <path
        d="M558.51 8.33a4.49 4.49 0 0 1-2.5-5.43 2.16 2.16 0 0 0 .1-.5 2.25 2.25 0 0 0-4-1.49 2.16 2.16 0 0 0-.25.44 4.49 4.49 0 0 1-5.43 2.5 2.16 2.16 0 0 0-.5-.1 2.25 2.25 0 0 0-1.49 4 2.16 2.16 0 0 0 .44.25 4.49 4.49 0 0 1 2.5 5.43 2.16 2.16 0 0 0-.1.5 2.25 2.25 0 0 0 4 1.49 2.16 2.16 0 0 0 .25-.44 4.49 4.49 0 0 1 5.43-2.5 2.16 2.16 0 0 0 .5.1 2.25 2.25 0 0 0 1.49-4 2.16 2.16 0 0 0-.44-.25z"
        fill="#4d8af0"
        opacity={0.5}
      />
      <path
        d="M145.4 112.17a4.49 4.49 0 0 1-2.5-5.43 2.16 2.16 0 0 0 .1-.5 2.25 2.25 0 0 0-4-1.49 2.16 2.16 0 0 0-.25.44 4.49 4.49 0 0 1-5.43 2.5 2.16 2.16 0 0 0-.5-.1 2.25 2.25 0 0 0-1.49 4 2.16 2.16 0 0 0 .44.25 4.49 4.49 0 0 1 2.5 5.43 2.16 2.16 0 0 0-.1.5 2.25 2.25 0 0 0 4 1.49 2.16 2.16 0 0 0 .25-.44 4.49 4.49 0 0 1 5.43-2.5 2.16 2.16 0 0 0 .5.1 2.25 2.25 0 0 0 1.49-4 2.16 2.16 0 0 0-.44-.25zM112.7 417.23a4.49 4.49 0 0 1-2.5-5.43 2.16 2.16 0 0 0 .1-.5 2.25 2.25 0 0 0-4-1.49 2.16 2.16 0 0 0-.25.44 4.49 4.49 0 0 1-5.43 2.5 2.16 2.16 0 0 0-.5-.1 2.25 2.25 0 0 0-1.49 4 2.16 2.16 0 0 0 .44.25 4.49 4.49 0 0 1 2.5 5.43 2.16 2.16 0 0 0-.1.5 2.25 2.25 0 0 0 4 1.49 2.16 2.16 0 0 0 .25-.44 4.49 4.49 0 0 1 5.43-2.5 2.16 2.16 0 0 0 .5.1 2.25 2.25 0 0 0 1.49-4 2.16 2.16 0 0 0-.44-.25z"
        fill="#fdd835"
        opacity={0.5}
      />
      <circle cx={337.81} cy={28.62} r={7.34} fill="#f55f44" opacity={0.5} />
      <circle cx={7.34} cy={317.46} r={7.34} fill="#f55f44" opacity={0.5} />
      <circle cx={863.76} cy={120.36} r={7.34} fill="#f55f44" opacity={0.5} />
      <circle cx={822.17} cy={339.3} r={7.34} fill="#4d8af0" opacity={0.5} />
      <circle cx={37.68} cy={145.22} r={7.34} fill="#47e6b1" opacity={0.5} />
      <circle cx={853.29} cy={647.34} r={7.34} fill="#47e6b1" opacity={0.5} />
      <circle cx={910.8} cy={430.97} r={7.34} fill="#47e6b1" opacity={0.5} />
      <path fill="url(#prefix__j)" d="M544.42 601.05H730.9v153.07H544.42z" />
      <path
        d="M723.82 639a54.55 54.55 0 0 1 109.1 0v34.91h15.27V639a69.82 69.82 0 0 0-139.65 0v34.91h15.27z"
        transform="translate(-140.93 -67.23)"
        fill="url(#prefix__k)"
      />
      <path
        d="M585.07 571.02a52.37 52.37 0 1 1 104.74 0v33.52h14.66v-33.52a67.03 67.03 0 0 0-134.06 0v33.52h14.66z"
        fill="#f5f5f5"
      />
      <path fill={primaryColor} d="M546.32 602.45h182.24v148.73H546.32z" />
      <path fill="#f5f5f5" d="M546.32 602.45h182.24v148.73H546.32z" />
      <path fill={primaryColor} d="M546.32 631.77h182.24v90.07H546.32z" />
      <path
        d="M791.73 727a13.36 13.36 0 1 0-23.08 9.15v28.51a9.72 9.72 0 0 0 19.44 0v-28.48a13.3 13.3 0 0 0 3.64-9.18z"
        transform="translate(-140.93 -67.23)"
        fill="url(#prefix__l)"
      />
      <path
        d="M648.96 662.15a11.52 11.52 0 1 0-19.9 7.89v24.58a8.38 8.38 0 1 0 16.76 0v-24.58a11.47 11.47 0 0 0 3.14-7.89z"
        opacity={0.2}
      />
    </svg>
  );
};

UndrawSecureData.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSecureData;
