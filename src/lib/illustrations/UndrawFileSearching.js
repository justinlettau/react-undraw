import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawFileSearching = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 842 778.92" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={378.37} y1={732.81} x2={378.37} y2={130.21} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={274.44} y1={409.32} x2={274.44} y2={248.16} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={274.44} y1={361.44} x2={274.44} y2={261.01} xlinkHref="#prefix__a" />
        <clipPath id="prefix__e" transform="translate(-179 -60.54)">
          <path data-name="<Rectangle>" fill="#fff" d="M381.54 322.72h143.79v96.93H381.54z" />
        </clipPath>
        <linearGradient id="prefix__f" x1={274.44} y1={616.03} x2={274.44} y2={454.87} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={274.44} y1={568.15} x2={274.44} y2={467.72} xlinkHref="#prefix__a" />
        <clipPath id="prefix__h" transform="translate(-179 -60.54)">
          <path data-name="<Rectangle>" fill="#fff" d="M381.54 529.42h143.79v96.93H381.54z" />
        </clipPath>
        <linearGradient
          id="prefix__i"
          x1={688.76}
          y1={765.86}
          x2={688.76}
          y2={163.26}
          gradientTransform="rotate(90 665.375 476.845)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__j"
          x1={688.18}
          y1={568.49}
          x2={688.18}
          y2={409.67}
          gradientTransform="rotate(90 662.7 498.69)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__k" x1={810.6} y1={767.54} x2={810.6} y2={362.71} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={685.49} y1={507.08} x2={685.49} y2={487.6} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__l" x1={774.99} y1={484.73} x2={774.99} y2={425.15} xlinkHref="#prefix__b" />
      </defs>
      <path fill="url(#prefix__a)" d="M154.15 130.21h448.44v602.6H154.15z" opacity={0.5} />
      <path fill="#f2f2f2" d="M159.99 138.39h434.43v581.58H159.99z" />
      <path fill="#e0e0e0" d="M193.86 162.91h149.48v4.67H193.86z" />
      <path fill={primaryColor} opacity={0.7} d="M193.86 183.93h149.48v4.67H193.86z" />
      <path
        fill="#e0e0e0"
        d="M365.53 162.91h149.48v4.67H365.53zM388.88 296.05h149.48v4.67H388.88zM392.39 308.89h149.48v4.67H392.39zM399.4 321.74h149.48v4.67H399.4zM388.88 502.75h149.48v4.67H388.88zM392.39 515.6h149.48v4.67H392.39zM399.4 528.44h149.48v4.67H399.4z"
      />
      <path fill="url(#prefix__c)" d="M195.03 248.16h158.82v161.16H195.03z" opacity={0.5} />
      <path fill="#f5f5f5" d="M196.03 251.67h156.32v154.15H196.03z" />
      <path fill="url(#prefix__d)" d="M201.54 261.01h145.8v100.43h-145.8z" opacity={0.5} />
      <path data-name="<Rectangle>" fill="#fff" d="M202.54 262.18h143.79v96.93H202.54z" />
      <g clipPath="url(#prefix__e)" fill={primaryColor}>
        <path
          opacity={0.4}
          d="M190.35 355.61l36.21-56.06 15.18 24.52 32.7-33.86 28.03 33.86 24.52-50.21 63.06 100.43-204.37-7.01 4.67-11.67z"
        />
        <circle cx={218.38} cy={276.19} r={10.51} opacity={0.4} />
      </g>
      <path fill="url(#prefix__f)" d="M195.03 454.87h158.82v161.16H195.03z" opacity={0.5} />
      <path fill="#f5f5f5" d="M196.03 458.37h156.32v154.15H196.03z" />
      <path fill="url(#prefix__g)" d="M201.54 467.72h145.8v100.43h-145.8z" opacity={0.5} />
      <path data-name="<Rectangle>" fill="#fff" d="M202.54 468.88h143.79v96.93H202.54z" />
      <g clipPath="url(#prefix__h)" fill="#bdbdbd">
        <path
          opacity={0.4}
          d="M190.35 562.31l36.21-56.06 15.18 24.53 32.7-33.87 28.03 33.87 24.52-50.22 63.06 100.43-204.37-7 4.67-11.68z"
        />
        <circle cx={218.38} cy={482.9} r={10.51} opacity={0.4} />
      </g>
      <path
        transform="rotate(-78.76 551.253 578.999)"
        fill="url(#prefix__i)"
        d="M376.36 276.01h602.6v448.44h-602.6z"
        opacity={0.5}
      />
      <path fill="#fff" d="M228.214 680.02l113.361-570.425 426.097 84.679-113.36 570.425z" />
      <path
        fill="#e0e0e0"
        d="M367.32 142.077l302.395 60.096-.91 4.58-302.396-60.095zM281.276 575.058l302.396 60.095-.91 4.58-302.397-60.095zM276.03 601.393L509.7 647.83l-.91 4.58-233.67-46.437z"
      />
      <path
        fill={primaryColor}
        opacity={0.7}
        d="M270.797 627.746l87.048 17.3-.91 4.58-87.048-17.3zM362.075 168.427l151.193 30.047-.91 4.58-151.194-30.046z"
      />
      <path fill="#e0e0e0" d="M356.851 194.77l272.609 54.175-.91 4.58-272.61-54.175z" />
      <path fill="#3ad29f" opacity={0.7} d="M351.61 221.12l66.431 13.201-.91 4.58-66.43-13.201z" />
      <path fill="#e0e0e0" d="M346.38 247.464l302.397 60.096-.91 4.58-302.397-60.095z" />
      <path
        transform="rotate(-78.76 545.898 602.937)"
        fill="url(#prefix__j)"
        d="M592.89 385.78h158.82v276.77H592.89z"
        opacity={0.5}
      />
      <path fill="#fff" d="M374.561 360.23l268.029 53.266-30.275 152.34-268.029-53.265z" />
      <path fill="#e0e0e0" d="M341.145 273.818l302.396 60.095-.91 4.58-302.397-60.095z" />
      <path fill={primaryColor} d="M398.533 386.426l33.22 6.601-22.08 111.108-33.22-6.602z" />
      <path fill="#3ad29f" d="M450.809 434.918l33.22 6.602-14.796 74.454-33.22-6.602z" />
      <path fill="#f55f44" d="M503.55 481.12l33.22 6.602-7.966 40.086-33.22-6.601z" />
      <path fill="#fdd835" d="M571.308 451.72l33.22 6.603-16.162 81.33-33.22-6.603z" />
      <path
        d="M880.45 410.55a155.89 155.89 0 0 0-223.11-1.68c-59 59.48-60 156.33-2.29 217.07A155.89 155.89 0 0 0 854.95 648l112.69 117.21a7.59 7.59 0 0 0 10.73.21l28.08-27a7.59 7.59 0 0 0 .21-10.73L894 610.49a155.9 155.9 0 0 0-13.55-199.94zM845.35 599a111.5 111.5 0 1 1 3.1-157.66 111.5 111.5 0 0 1-3.1 157.66z"
        transform="translate(-179 -60.54)"
        fill="url(#prefix__k)"
      />
      <path
        d="M685.49 487.6c-12.54 0-12.56 19.49 0 19.49s12.56-19.49 0-19.49z"
        transform="translate(-179 -60.54)"
        fill="url(#prefix__b)"
      />
      <path
        d="M772.9 425.17c-33.75-.76-64.46 16.17-80.79 41.73-5.33 8.34 9.8 15.71 15.1 7.41 13.52-21.16 39.21-34.6 67-33.9 29.12.73 55.62 17.39 69.65 40.51 5.32 8.77 19.27.8 14-7.92-17.06-28-50.1-47-84.96-47.83z"
        transform="translate(-179 -60.54)"
        fill="url(#prefix__l)"
      />
      <path
        d="M713.68 344.09a155.89 155.89 0 0 0-223.11-1.68c-59 59.48-60 156.33-2.29 217.07a155.89 155.89 0 0 0 199.9 22.05l112.68 117.22a7.59 7.59 0 0 0 10.73.21l28.08-27a7.59 7.59 0 0 0 .21-10.73L727.19 544.02a155.9 155.9 0 0 0-13.51-199.93zm-35.1 188.37a111.5 111.5 0 1 1 3.1-157.66 111.5 111.5 0 0 1-3.1 157.66z"
        fill={primaryColor}
      />
      <path
        d="M518.72 421.13c-12.54 0-12.56 19.49 0 19.49s12.56-19.49 0-19.49zM606.13 358.71c-33.75-.76-64.46 16.17-80.79 41.73-5.33 8.34 9.8 15.71 15.1 7.41 13.52-21.16 39.21-34.6 67-33.9 29.12.73 55.62 17.39 69.65 40.51 5.32 8.77 19.27.8 14-7.92-17.09-28.08-50.09-47.08-84.96-47.83z"
        fill={primaryColor}
      />
      <path fill="#47e6b1" d="M121.45 663.91h3.5v19.85h-3.5z" />
      <path fill="#47e6b1" d="M133.13 672.08v3.5h-19.85v-3.5z" />
      <path
        d="M571.87 7.95a4.29 4.29 0 0 1-2.39-5.19 2.06 2.06 0 0 0 .09-.48A2.15 2.15 0 0 0 565.7.85a2.06 2.06 0 0 0-.24.42 4.29 4.29 0 0 1-5.19 2.39 2.06 2.06 0 0 0-.48-.09 2.15 2.15 0 0 0-1.41 3.89 2.06 2.06 0 0 0 .42.24 4.29 4.29 0 0 1 2.39 5.19 2.06 2.06 0 0 0-.09.48 2.15 2.15 0 0 0 3.9 1.41 2.06 2.06 0 0 0 .24-.42 4.29 4.29 0 0 1 5.19-2.39 2.06 2.06 0 0 0 .48.09 2.15 2.15 0 0 0 1.43-3.87 2.06 2.06 0 0 0-.47-.24z"
        fill="#4d8af0"
      />
      <path
        d="M137.44 155.1a4.29 4.29 0 0 1-2.39-5.19 2.06 2.06 0 0 0 .09-.48 2.15 2.15 0 0 0-3.87-1.43 2.06 2.06 0 0 0-.24.42 4.29 4.29 0 0 1-5.19 2.39 2.06 2.06 0 0 0-.48-.09 2.15 2.15 0 0 0-1.43 3.87 2.06 2.06 0 0 0 .42.24 4.29 4.29 0 0 1 2.39 5.19 2.06 2.06 0 0 0-.09.48 2.15 2.15 0 0 0 3.87 1.43 2.06 2.06 0 0 0 .24-.42 4.29 4.29 0 0 1 5.19-2.39 2.06 2.06 0 0 0 .48.09 2.15 2.15 0 0 0 1.43-3.87 2.06 2.06 0 0 0-.42-.24zM755.22 762.36a4.29 4.29 0 0 1-2.39-5.19 2.06 2.06 0 0 0 .09-.48 2.15 2.15 0 0 0-3.87-1.43 2.06 2.06 0 0 0-.24.42 4.29 4.29 0 0 1-5.19 2.39 2.06 2.06 0 0 0-.48-.09 2.15 2.15 0 0 0-1.43 3.87 2.06 2.06 0 0 0 .42.24 4.29 4.29 0 0 1 2.39 5.19 2.06 2.06 0 0 0-.09.48 2.15 2.15 0 0 0 3.87 1.43 2.06 2.06 0 0 0 .24-.42 4.29 4.29 0 0 1 5.19-2.39 2.06 2.06 0 0 0 .48.09 2.15 2.15 0 0 0 1.43-3.87 2.06 2.06 0 0 0-.42-.24z"
        fill="#fdd835"
      />
      <circle cx={321.15} cy={75.33} r={7.01} fill="#f55f44" />
      <circle cx={823.31} cy={162.91} r={7.01} fill="#f55f44" />
      <circle cx={783.61} cy={371.95} r={7.01} fill="#4d8af0" />
      <circle cx={7.01} cy={28.61} r={7.01} fill="#47e6b1" opacity={0.5} />
    </svg>
  );
};

UndrawFileSearching.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawFileSearching;
