import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSafe = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 895.68 517.48" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={790.94}
          y1={640.76}
          x2={790.94}
          y2={264.76}
          gradientTransform="rotate(90 783.095 446.895)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={785.97}
          y1={446.14}
          x2={785.97}
          y2={321.91}
          gradientTransform="rotate(90 783.305 383.365)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__c"
          x1={660.92}
          y1={518.19}
          x2={660.92}
          y2={494.17}
          gradientTransform="rotate(90 659.87 486.97)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__d"
          x1={433.66}
          y1={605.23}
          x2={433.66}
          y2={235.23}
          gradientTransform="translate(13.58 8.51)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__e"
          x1={428.36}
          y1={413.71}
          x2={428.36}
          y2={291.46}
          gradientTransform="translate(-1.05 11.3)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__f"
          x1={295.22}
          y1={484.61}
          x2={295.22}
          y2={460.98}
          gradientTransform="translate(28.38 37.45)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__g" x1={455.07} y1={464.48} x2={455.07} y2={10.48} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={449.07} y1={229.48} x2={449.07} y2={79.48} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={298.07} y1={316.48} x2={298.07} y2={287.48} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={457.07} y1={517.48} x2={457.07} y2={364.48} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={611.23} y1={564.74} x2={611.23} y2={464.74} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={611.23} y1={660.74} x2={611.23} y2={602.74} xlinkHref="#prefix__a" />
      </defs>
      <path fill="#f5f5f5" d="M415.967 68.35l2.986-19.655 465.072 70.668-2.987 19.654z" />
      <path transform="rotate(-81.36 589.882 447.627)" fill="url(#prefix__a)" d="M589.23 209.59h376v490.29h-376z" />
      <path fill="#f5f5f5" d="M364.447 407.325l51.508-338.98 465.071 70.668-51.508 338.98z" />
      <circle cx={580.99} cy={251.51} r={4.86} transform="rotate(-81.36 393.642 244.4)" fill="#ff5252" />
      <circle cx={594.2} cy={253.52} r={4.86} transform="rotate(-81.36 406.848 246.405)" fill="#ff0" />
      <circle cx={607.41} cy={255.53} r={4.86} transform="rotate(-81.36 420.06 248.415)" fill="#69f0ae" />
      <path transform="rotate(-81.36 595.3 378.92)" fill="url(#prefix__b)" d="M720.53 174.84h124.23v422.38H720.53z" />
      <path fill={primaryColor} d="M435.203 107.291l408.58 62.084-17.294 113.813-408.58-62.083z" />
      <path transform="rotate(-81.36 453.304 480.904)" fill="url(#prefix__c)" d="M628.65 473.94h24.02v28.16h-24.02z" />
      <path fill={primaryColor} d="M477.377 284.582l26.2 3.981-2.987 19.655-26.2-3.981z" />
      <path fill="#ff5252" d="M472.262 318.154l26.2 3.98-2.987 19.655-26.2-3.981z" />
      <path fill="#ff9800" d="M467.167 351.727l26.2 3.98-2.987 19.655-26.2-3.981z" />
      <path
        fill={primaryColor}
        opacity={0.4}
        d="M546.346 299.25l211.245 32.1-1.74 11.458-211.246-32.099zM541.241 332.823l211.245 32.1-1.74 11.458L539.5 344.282zM536.146 366.396l211.245 32.1-1.741 11.458-211.245-32.1z"
      />
      <path fill="#f5f5f5" d="M10.887 118.113L499.665 8.858l4.267 19.09L15.154 137.201z" />
      <path transform="rotate(-12.6 -495.083 1022.25)" fill="url(#prefix__d)" d="M186.23 243.74h522v370h-522z" />
      <path fill="#f5f5f5" d="M15.15 137.213L503.928 27.958l73.602 329.274L88.752 466.487z" />
      <ellipse cx={177.11} cy={316.25} rx={5.17} ry={4.78} transform="rotate(-12.6 -765.182 909.732)" fill="#ff5252" />
      <ellipse cx={191} cy={313.15} rx={5.17} ry={4.78} transform="rotate(-12.6 -751.271 906.638)" fill="#ff0" />
      <ellipse cx={204.88} cy={310.05} rx={5.17} ry={4.78} transform="rotate(-12.6 -737.406 903.539)" fill="#69f0ae" />
      <path transform="rotate(-12.6 -514.97 957.389)" fill="url(#prefix__e)" d="M202.46 302.76h449.7v122.25h-449.7z" />
      <path fill={primaryColor} d="M48.613 165.637l429.403-95.983 24.711 110.552-429.403 95.983z" />
      <path transform="rotate(-12.6 -618.682 1103.725)" fill="url(#prefix__f)" d="M308.61 498.42h29.98v23.63h-29.98z" />
      <path fill={primaryColor} d="M158.065 313.478l27.655-6.208 4.303 19.169-27.655 6.208z" />
      <path fill="#ff5252" d="M163.17 344.626l27.54-6.156 4.267 19.09-27.54 6.155z" />
      <path fill="#ff9800" d="M172.831 378.936l27.656-6.208 4.303 19.169-27.655 6.208z" />
      <path
        fill={primaryColor}
        opacity={0.4}
        d="M229.908 299.64l222.012-49.626 2.489 11.135-222.012 49.626zM237.197 332.254l222.01-49.625 2.49 11.135-222.011 49.625zM244.485 364.858l222.011-49.625 2.489 11.135-222.011 49.626z"
      />
      <path fill="#f5f5f5" d="M170.07 18.48h568v24h-568z" />
      <path fill="url(#prefix__g)" d="M159.07 10.48h592v454h-592z" />
      <path fill="#fff" d="M170.07 42.48h568v414h-568z" />
      <circle cx={183.94} cy={30.48} r={5.87} fill="#ff5252" />
      <circle cx={200.07} cy={30.48} r={5.87} fill="#ff0" />
      <circle cx={216.2} cy={30.48} r={5.87} fill="#69f0ae" />
      <path fill="url(#prefix__h)" d="M194.07 79.48h510v150h-510z" />
      <path fill={primaryColor} d="M200.07 85.48h499v139h-499z" />
      <path fill="url(#prefix__i)" d="M281.07 287.48h34v29h-34z" />
      <path fill={primaryColor} d="M282.57 289.48h32v24h-32z" />
      <path fill="#ff5252" d="M282.57 330.48h32v24h-32z" />
      <path fill="#ff9800" d="M282.57 371.48h32v24h-32z" />
      <path
        fill={primaryColor}
        opacity={0.4}
        d="M367.57 294.48h258v14h-258zM367.57 335.48h258v14h-258zM367.57 376.48h258v14h-258z"
      />
      <path fill="url(#prefix__j)" d="M364.07 364.48h186v153h-186z" />
      <path
        d="M559.15 531.41a52.08 52.08 0 0 1 104.17 0v33.33h14.58v-33.33a66.67 66.67 0 1 0-133.33 0v33.33h14.58z"
        transform="translate(-152.16 -191.26)"
        fill="url(#prefix__k)"
      />
      <path d="M409.07 339.48a50 50 0 0 1 100 0v32h14v-32a64 64 0 0 0-128 0v32h14z" fill="#fff" />
      <path fill={primaryColor} d="M372.07 369.48h174v142h-174z" />
      <path fill="#fff" d="M372.07 369.48h174v142h-174z" />
      <path fill={primaryColor} d="M372.07 397.48h174v86h-174z" />
      <path
        d="M624 615.5a12.76 12.76 0 1 0-22 8.74v27.22a9.28 9.28 0 0 0 18.56 0v-27.22a12.7 12.7 0 0 0 3.44-8.74z"
        transform="translate(-152.16 -191.26)"
        fill="url(#prefix__l)"
      />
      <path d="M470.07 426.48a11 11 0 1 0-19 7.53v23.47a8 8 0 1 0 16 0v-23.47a11 11 0 0 0 3-7.53z" opacity={0.2} />
    </svg>
  );
};

UndrawSafe.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSafe;
