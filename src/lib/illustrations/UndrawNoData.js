import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawNoData = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 820.16 780.81" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={539.63}
          y1={734.6}
          x2={539.63}
          y2={151.19}
          gradientTransform="translate(-3.62 1.57)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={540.17}
          y1={180.2}
          x2={540.17}
          y2={130.75}
          gradientTransform="translate(-63.92 7.85)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__c"
          x1={540.17}
          y1={140.86}
          x2={540.17}
          y2={82.43}
          gradientTransform="rotate(-12.11 545.066 460.65)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__d" x1={476.4} y1={710.53} x2={476.4} y2={127.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={476.94} y1={156.13} x2={476.94} y2={106.68} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={666.86} y1={176.39} x2={666.86} y2={117.95} xlinkHref="#prefix__a" />
      </defs>
      <path fill="#e0e0e0" d="M69.12 135.49l427.295-91.682L623.09 634.19l-427.295 91.682z" />
      <path
        transform="rotate(-12.11 160.03 1309.797)"
        fill="url(#prefix__a)"
        d="M324.89 152.76h422.25v583.41H324.89z"
        opacity={0.5}
      />
      <path fill="#fafafa" d="M84.639 146.993L486.98 60.665l119.69 557.824-402.344 86.328z" />
      <path transform="rotate(-12.11 100.28 1028.707)" fill="url(#prefix__b)" d="M374.18 138.6h204.14v49.45H374.18z" />
      <path
        d="M460.93 91.9c-15.41 3.31-25.16 18.78-21.77 34.55s18.62 25.89 34 22.58 25.16-18.78 21.77-34.55-18.59-25.89-34-22.58zm9.67 45.1a16.86 16.86 0 1 1 12.56-20 16.66 16.66 0 0 1-12.56 20z"
        transform="translate(-189.92 -59.59)"
        fill="url(#prefix__c)"
      />
      <path fill={primaryColor} d="M183.007 98.422L378.4 56.498l9.917 46.218-195.393 41.924z" />
      <path
        d="M271.01 32.31a27.93 27.93 0 1 0 33.17 21.45 27.93 27.93 0 0 0-33.17-21.45zm9.24 43.1a16.12 16.12 0 1 1 12.38-19.14 16.12 16.12 0 0 1-12.38 19.14z"
        fill={primaryColor}
      />
      <path fill="#e0e0e0" d="M257.89 116.91h437.02v603.82H257.89z" />
      <path fill="url(#prefix__d)" d="M265.28 127.12h422.25v583.41H265.28z" opacity={0.5} />
      <path fill="#fff" d="M270.65 131.42h411.5v570.52h-411.5z" />
      <path fill="url(#prefix__e)" d="M374.87 106.68h204.14v49.45H374.87z" />
      <path
        d="M666.86 118c-15.76 0-28.54 13.08-28.54 29.22s12.78 29.22 28.54 29.22 28.54-13.08 28.54-29.22S682.62 118 666.86 118zm0 46.08a16.86 16.86 0 1 1 16.46-16.86A16.66 16.66 0 0 1 666.86 164z"
        transform="translate(-189.92 -59.59)"
        fill="url(#prefix__f)"
      />
      <path fill={primaryColor} d="M377.02 104.56h199.84v47.27H377.02z" />
      <path
        d="M476.94 58.41a27.93 27.93 0 1 0 27.93 27.93 27.93 27.93 0 0 0-27.93-27.93zm0 44.05a16.12 16.12 0 1 1 16.14-16.16 16.12 16.12 0 0 1-16.14 16.11z"
        fill={primaryColor}
      />
      <g opacity={0.5} fill="#47e6b1">
        <path d="M15.27 737.05h3.76v21.33h-3.76z" />
        <path d="M27.82 745.84v3.76H6.49v-3.76z" />
      </g>
      <g opacity={0.5} fill="#47e6b1">
        <path d="M451.49 0h3.76v21.33h-3.76z" />
        <path d="M464.04 8.78v3.76h-21.33V8.78z" />
      </g>
      <path
        d="M771.08 772.56a4.61 4.61 0 0 1-2.57-5.57 2.22 2.22 0 0 0 .1-.51 2.31 2.31 0 0 0-4.15-1.53 2.22 2.22 0 0 0-.26.45 4.61 4.61 0 0 1-5.57 2.57 2.22 2.22 0 0 0-.51-.1 2.31 2.31 0 0 0-1.53 4.15 2.22 2.22 0 0 0 .45.26 4.61 4.61 0 0 1 2.57 5.57 2.22 2.22 0 0 0-.1.51 2.31 2.31 0 0 0 4.15 1.53 2.22 2.22 0 0 0 .26-.45 4.61 4.61 0 0 1 5.57-2.57 2.22 2.22 0 0 0 .51.1 2.31 2.31 0 0 0 1.53-4.15 2.22 2.22 0 0 0-.45-.26z"
        fill="#4d8af0"
        opacity={0.5}
      />
      <path
        d="M136.67 567.5a4.61 4.61 0 0 1-2.57-5.57 2.22 2.22 0 0 0 .1-.51 2.31 2.31 0 0 0-4.15-1.53 2.22 2.22 0 0 0-.26.45 4.61 4.61 0 0 1-5.57 2.57 2.22 2.22 0 0 0-.51-.1 2.31 2.31 0 0 0-1.53 4.15 2.22 2.22 0 0 0 .45.26 4.61 4.61 0 0 1 2.57 5.57 2.22 2.22 0 0 0-.1.51 2.31 2.31 0 0 0 4.15 1.53 2.22 2.22 0 0 0 .26-.45 4.61 4.61 0 0 1 5.57-2.57 2.22 2.22 0 0 0 .51.1 2.31 2.31 0 0 0 1.53-4.15 2.22 2.22 0 0 0-.45-.26zM665.08 68.18a4.61 4.61 0 0 1-2.57-5.57 2.22 2.22 0 0 0 .1-.51 2.31 2.31 0 0 0-4.15-1.53 2.22 2.22 0 0 0-.26.45 4.61 4.61 0 0 1-5.57 2.57 2.22 2.22 0 0 0-.51-.1 2.31 2.31 0 0 0-1.53 4.15 2.22 2.22 0 0 0 .45.26 4.61 4.61 0 0 1 2.57 5.57 2.22 2.22 0 0 0-.1.51 2.31 2.31 0 0 0 4.15 1.53 2.22 2.22 0 0 0 .26-.45 4.61 4.61 0 0 1 5.57-2.57 2.22 2.22 0 0 0 .51.1 2.31 2.31 0 0 0 1.53-4.15 2.22 2.22 0 0 0-.45-.26z"
        fill="#fdd835"
        opacity={0.5}
      />
      <circle cx={812.64} cy={314.47} r={7.53} fill="#f55f44" opacity={0.5} />
      <circle cx={230.73} cy={746.65} r={7.53} fill="#f55f44" opacity={0.5} />
      <circle cx={735.31} cy={477.23} r={7.53} fill="#f55f44" opacity={0.5} />
      <circle cx={87.14} cy={96.35} r={7.53} fill="#4d8af0" opacity={0.5} />
      <circle cx={7.53} cy={301.76} r={7.53} fill="#47e6b1" opacity={0.5} />
    </svg>
  );
};

UndrawNoData.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawNoData;
