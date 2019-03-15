import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawWelcome = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 868 731" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={731.5} y1={630} x2={731.5} y2={105} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={136.5} y1={632} x2={136.5} y2={107} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__b" x1={136.5} y1={190} x2={136.5} y2={159} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__d" x1={732.5} y1={237} x2={732.5} y2={206} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__e" x1={731.5} y1={285} x2={731.5} y2={254} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__f" x1={731.5} y1={333} x2={731.5} y2={302} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__g" x1={731.5} y1={381} x2={731.5} y2={350} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__h" x1={731.5} y1={429} x2={731.5} y2={398} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__i" x1={731.5} y1={477} x2={731.5} y2={446} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__j" x1={731.5} y1={525} x2={731.5} y2={494} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__k" x1={731.5} y1={573} x2={731.5} y2={542} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__l" x1={731.5} x2={731.5} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__m" x1={51} y1={223.5} x2={222} y2={223.5} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__n" x1={51} y1={270.5} x2={222} y2={270.5} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__o" x1={51} y1={317.5} x2={222} y2={317.5} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__p" x1={51} y1={365.5} x2={222} y2={365.5} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__q" x1={51} y1={413.5} x2={222} y2={413.5} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__r" x1={51} y1={461.5} x2={222} y2={461.5} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__s" x1={132} y1={664} x2={735} y2={664} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__t" x1={435} y1={89} x2={435} y2={50} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__u" x1={601} y1={704.8} x2={601} y2={406} xlinkHref="#prefix__a" />
      </defs>
      <path fill={primaryColor} opacity={0.2} d="M69 0h731v731H69z" />
      <path fill={primaryColor} opacity={0.5} d="M179 68.25h510v595.5H179z" />
      <path fill="url(#prefix__a)" d="M595 105h273v525H595z" />
      <path fill="url(#prefix__c)" d="M0 107h273v525H0z" />
      <path fill={primaryColor} d="M604 113h255v506H604zM264 619H9V113h255z" />
      <path fill="url(#prefix__b)" d="M51 159h171v31H51z" />
      <path fill="url(#prefix__d)" d="M647 206h171v31H647z" />
      <path fill="url(#prefix__e)" d="M646 254h171v31H646z" />
      <path fill="url(#prefix__f)" d="M646 302h171v31H646z" />
      <path fill="url(#prefix__g)" d="M646 350h171v31H646z" />
      <path fill="url(#prefix__h)" d="M646 398h171v31H646z" />
      <path fill="url(#prefix__i)" d="M646 446h171v31H646z" />
      <path fill="url(#prefix__j)" d="M646 494h171v31H646z" />
      <path fill="url(#prefix__k)" d="M646 542h171v31H646z" />
      <path fill="url(#prefix__l)" d="M646 159h171v31H646z" />
      <path fill="url(#prefix__m)" d="M51 208h171v31H51z" />
      <path fill="url(#prefix__n)" d="M51 255h171v31H51z" />
      <path fill="url(#prefix__o)" d="M51 302h171v31H51z" />
      <path fill="url(#prefix__p)" d="M51 350h171v31H51z" />
      <path fill="url(#prefix__q)" d="M51 398h171v31H51z" />
      <path
        fill="#fff"
        d="M55 163h164v24H55zM54.5 210h164v24h-164zM54.5 258h164v24h-164zM54.5 306h164v24h-164zM54.5 354h164v24h-164zM54.5 402h164v24h-164z"
      />
      <path fill="url(#prefix__r)" d="M51 446h171v31H51z" />
      <path fill="#fff" d="M54.5 450h164v24h-164z" />
      <path
        fill="#fff"
        d="M54.5 450h164v24h-164zM54.5 498h164v24h-164zM54.5 546h164v24h-164zM650 162h164v24H650zM650 210h164v24H650zM650 258h164v24H650zM650 306h164v24H650zM650 354h164v24H650zM650 402h164v24H650zM650 450h164v24H650zM650 498h164v24H650zM650 546h164v24H650z"
      />
      <path fill="url(#prefix__s)" d="M132 645h603v38H132z" />
      <path fill={primaryColor} d="M137 649h594v30H137z" />
      <path fill="url(#prefix__t)" d="M134 50h602v39H134z" />
      <path fill={primaryColor} d="M137 53h594v30H137z" />
      <path fill="#263238" opacity={0.5} d="M289 113h292v506H289z" />
      <path
        d="M825.66 417.55c7 9.38-3.48 20.46-3.48 20.46l1.76.61c-2.59 2.87-12.82 15.82-52.26 74.4-50.5 75-118.55 93.71-118.55 93.71a84 84 0 0 0-27.73-14.31v-7.08a83 83 0 0 0 55.3-53.48 85.08 85.08 0 0 0 9.14-38.44c0-48-39.77-86.94-88.82-86.94s-88.82 38.93-88.82 86.94a85.08 85.08 0 0 0 9.14 38.44 83 83 0 0 0 55.3 53.48v7.08a84 84 0 0 0-27.73 14.31S480.83 588 430.33 513c-39.44-58.58-49.67-71.54-52.26-74.4l1.76-.61s-10.45-11.08-3.48-20.46-46.15-20.46-40.06 0 13.93 30.69 13.93 30.69 111.2 175.38 169.25 204.36a80.43 80.43 0 0 0-2.06 18.12v34.1h167.18v-34.1a80.43 80.43 0 0 0-2.06-18.12c58-29 169.25-204.35 169.25-204.35s7.84-10.23 13.93-30.69-47.02-9.37-40.05.01z"
        transform="translate(-166 -84.5)"
        fill="url(#prefix__u)"
      />
      <circle cx={435} cy={413.47} r={85.06} fill="#263238" />
      <circle cx={435} cy={426.82} r={80.06} fill="#f8c198" />
      <circle cx={403.31} cy={409.3} r={10.01} fill="#263238" />
      <circle cx={468.36} cy={409.3} r={10.01} fill="#263238" />
      <path
        d="M458.35 463.5c0 6-10.45 15.85-23.35 15.85s-23.35-9.85-23.35-15.85 10.45-5.84 23.35-5.84 23.35-.16 23.35 5.84z"
        fill="#fff"
      />
      <circle cx={405.81} cy={409.3} r={3.34} fill="#fff" />
      <circle cx={471.69} cy={409.3} r={3.34} fill="#fff" />
      <path
        d="M443 382.38c-4.88 0-9.26-4.24-9.78-9.09a12 12 0 0 1 7-11.75 3.42 3.42 0 0 1 1.47-.38c1.68 0 2.51 2 3.05 3.59 1.68 4.92 4.66 9.72 9.34 12s11.22 1.11 13.69-3.47c-6.62-2.95-9.45-12.21-5.6-18.35 1.49-2.37 3.81-4.38 4.28-7.14.86-5-4.62-8.64-9.47-10.14-14-4.33-62.8-4.81-65.49 16.08-2.82 22.04 36.14 31.57 51.51 28.65z"
        fill="#263238"
      />
      <ellipse cx={524.27} cy={512.15} rx={5} ry={14.18} transform="rotate(-21.53 219.11 906.482)" fill="#f8c198" />
      <ellipse cx={677.73} cy={512.15} rx={14.18} ry={5} transform="rotate(-68.47 532.614 591.868)" fill="#f8c198" />
      <path
        d="M484.91 524.34s65.17-18.3 113.54-91.69 50.87-73.59 50.87-73.59l25.85 10.21S555.09 562.75 503.39 572.76s-18.48-48.42-18.48-48.42z"
        fill="#ff9800"
      />
      <path d="M646.83 359.27s10-10.84 3.34-20 44.2-20 38.36 0-13.34 30-13.34 30z" fill="#f8c198" />
      <path
        d="M385.09 524.34s-65.17-18.3-113.54-91.69-50.87-73.59-50.87-73.59l-25.85 10.21s120.09 193.48 171.8 203.49 18.46-48.42 18.46-48.42z"
        fill="#ff9800"
      />
      <path d="M223.17 359.27s-10-10.84-3.34-20-44.2-20-38.36 0 13.34 30 13.34 30z" fill="#f8c198" />
      <g opacity={0.2} fill="#fff">
        <path d="M462.29 342.77c-.48 2.76-2.8 4.76-4.28 7.14-3.37 5.38-1.62 13.16 3.32 17a12.79 12.79 0 0 1 .85-11.14c1.49-2.37 3.81-4.38 4.28-7.14.54-3.13-1.41-5.73-4.13-7.6a6 6 0 0 1-.04 1.74zM441.46 362.01c-.32-.75-.62-1.51-.88-2.27-.54-1.59-1.37-3.54-3.05-3.59a3.42 3.42 0 0 0-1.47.38 12 12 0 0 0-7 11.75 10.53 10.53 0 0 0 4.47 7.35 9.4 9.4 0 0 1-.3-1.51 12 12 0 0 1 7-11.75 3.87 3.87 0 0 1 1.23-.36zM434.41 377.85c-12.16.51-31.78-4.13-41.45-14 7.22 15.36 37.05 21.79 50 19.32a10.08 10.08 0 0 1-8.55-5.32zM462.68 369.61c-2.92 3.43-8.58 4.15-12.75 2.12a14.54 14.54 0 0 1-3.7-2.61 17.84 17.84 0 0 0 7.87 8.44c4.68 2.27 11.22 1.11 13.69-3.47a11.88 11.88 0 0 1-5.11-4.48z" />
      </g>
      <path
        d="M671.85 369.27S551.76 562.75 500 572.76a60.33 60.33 0 0 1-9.07 1.11 53.05 53.05 0 0 0 12.41-1.11c51.71-10 171.8-203.49 171.8-203.49l-2.68-.95c-.37.63-.61.95-.61.95zM198.15 369.27S318.24 562.75 370 572.76a60.33 60.33 0 0 0 9.07 1.11 53.05 53.05 0 0 1-12.41-1.11c-51.71-10-171.8-203.49-171.8-203.49l2.68-.95c.37.63.61.95.61.95z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M435 506.88a80.06 80.06 0 0 1 80.06 80.06v33.36H354.94v-33.36A80.06 80.06 0 0 1 435 506.88z"
        fill="#ff9800"
      />
      <path
        d="M435.83 507.3a80.93 80.93 0 0 0-8.72.47c1 0 1.91-.06 2.88-.06a80.06 80.06 0 0 1 80.06 80.06v32.94h5.84v-33.35a80.06 80.06 0 0 0-80.06-80.06z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M434.17 507.3a80.93 80.93 0 0 1 8.72.47c-1 0-1.91-.06-2.88-.06a80.06 80.06 0 0 0-80.06 80.06v32.94h-5.84v-33.35a80.06 80.06 0 0 1 80.06-80.06z"
        fill="#fff"
        opacity={0.2}
      />
      <rect x={411.65} y={484.78} width={46.7} height={56.29} rx={23.35} ry={23.35} fill="#f8c198" />
    </svg>
  );
};

UndrawWelcome.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawWelcome;
