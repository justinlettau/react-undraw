import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawNews = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 901.87 622" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={214.76} y1={345.82} x2={214.76} y2={176.98} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={370.41}
          y1={529.73}
          x2={370.41}
          y2={514.61}
          gradientTransform="rotate(-3.75 -7075.346 3773.69)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__c"
          x1={472.13}
          y1={507.75}
          x2={472.13}
          y2={492.63}
          gradientTransform="rotate(-3.75 -7075.346 3773.69)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__d"
          x1={646.14}
          y1={517.73}
          x2={646.14}
          y2={494.63}
          gradientTransform="rotate(-13.48 -1574.13 1241.774)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__e"
          x1={557.24}
          y1={563.18}
          x2={557.24}
          y2={548.06}
          gradientTransform="rotate(10.2 3222.283 -953.082)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__f"
          x1={441.24}
          y1={625.84}
          x2={441.24}
          y2={610.73}
          gradientTransform="rotate(-3.75 -7075.346 3773.69)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__g"
          x1={662.02}
          y1={559.99}
          x2={662.02}
          y2={536.88}
          gradientTransform="rotate(-13.48 -1574.13 1241.774)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__h"
          x1={718.48}
          y1={687.72}
          x2={718.48}
          y2={664.62}
          gradientTransform="rotate(-13.48 -1574.13 1241.774)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__i"
          x1={960.18}
          y1={802.18}
          x2={960.18}
          y2={779.08}
          gradientTransform="rotate(-13.48 -1574.13 1241.774)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__j"
          x1={576.26}
          y1={650.26}
          x2={576.26}
          y2={635.14}
          gradientTransform="rotate(10.2 3222.283 -953.082)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__k"
          x1={953.34}
          y1={715.38}
          x2={953.34}
          y2={700.26}
          gradientTransform="rotate(10.2 3222.283 -953.082)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__l"
          x1={907.15}
          y1={582.9}
          x2={907.15}
          y2={567.79}
          gradientTransform="rotate(10.2 3222.283 -953.082)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__m"
          x1={1066.36}
          y1={436.94}
          x2={1066.36}
          y2={421.82}
          gradientTransform="rotate(10.2 3222.283 -953.082)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__n"
          x1={408.47}
          y1={593.3}
          x2={408.47}
          y2={578.18}
          gradientTransform="rotate(10.2 3222.283 -953.082)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__o"
          x1={795.18}
          y1={562.41}
          x2={795.18}
          y2={539.31}
          gradientTransform="rotate(-3.75 -7075.346 3773.69)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__p"
          x1={818.98}
          y1={744.95}
          x2={818.98}
          y2={692.09}
          gradientTransform="rotate(27.07 1810.311 43.58)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__q"
          x1={1009.63}
          y1={941.57}
          x2={1009.63}
          y2={831.19}
          gradientTransform="matrix(.9 .43 -.43 .9 289.5 -873.01)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__r"
          x1={983.97}
          y1={578.48}
          x2={983.97}
          y2={525.62}
          gradientTransform="translate(-233.9 -501.24)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__s"
          x1={1058.69}
          y1={659.83}
          x2={1058.69}
          y2={606.97}
          gradientTransform="translate(-233.9 -501.24)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__t"
          x1={691.97}
          y1={619.33}
          x2={691.97}
          y2={596.23}
          gradientTransform="rotate(-3.75 -7075.346 3773.69)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__u"
          x1={882.74}
          y1={617.51}
          x2={882.74}
          y2={594.41}
          gradientTransform="rotate(-3.75 -7075.346 3773.69)"
          xlinkHref="#prefix__a"
        />
      </defs>
      <path fill="#4d8af0" d="M17.58 224.67h75.37v11.45H17.58z" />
      <path
        fill="#eee"
        d="M17.58 235.85L9.05 622h5.33l11.81-385.88-8.61-.27zM92.94 235.85L101.46 622h-5.32L84.33 236.12l8.61-.27z"
      />
      <path
        fill="#e0e0e0"
        d="M33.64 236.12L24.5 622h6.39l8.44-386.15-5.69.27zM78.47 236.12L87.62 622h-6.4l-8.43-386.15 5.68.27z"
      />
      <path
        fill="#e0e0e0"
        d="M31.96 575.13h48.47v5.86H31.96zM30.36 542.64h52.2v5.86h-52.2zM31.96 510.68h50.6v5.86h-50.6zM31.96 478.19h48.47v5.86H31.96zM31.96 444.64h48.47v5.33H31.96zM33.56 412.68h46.87v6.39H33.56zM33.56 380.72h45.27v4.26H33.56zM35.15 346.64H75.1v6.92H35.15zM35.15 314.68h41.54v5.86H35.15zM35.15 281.66h41.54v6.39H35.15zM37.28 249.17H75.1v6.39H37.28z"
      />
      <path fill="#4d8af0" d="M0 202.83h110.78v23.44H0z" />
      <path
        d="M254 177l-38.53 25.1a7.26 7.26 0 0 0-2.5-3.94 6.37 6.37 0 0 0 .21-3.78 2.37 2.37 0 0 0-.41-1 1.69 1.69 0 0 0-1.51-.42l-6.12.4a3.21 3.21 0 0 0-2 .58c-.86.72-1.12 2.23-2 2.87-.59.42-1.34.38-2 .71-1.41.75-1.72 3-1.83 4.83-.15 2.5-.14 5.44 1.49 7 1.19 1.11 2.84 1 4.34.92l1.51-.12a7.22 7.22 0 0 0 1.2.57v2.13h-.28s-17.27-5-36.24 47.24H169s-2.8 9.5 1.68 7.83c3.9-1.46 4-6.33 3.93-7.55h.26s7.83-22.92 20.13-25.72c0 0 8.95 11.18-5.59 33.54h11.38a17.37 17.37 0 0 0 1.48 7.27c3.35 6.71-6.71 70.44-6.71 70.44h8.39l4.22-21.12.53 21.12h6.15l6.15-40.61-.84-48.92V243.7l1.12 1.49v-19.57h16.21l2.8-21.8H240a26.38 26.38 0 0 0-.19-4.56l20.9-4.39C264 180.9 254 177 254 177zm-18.3 27.16l-4.9 12.53s-13.42-6.15-18.45-3.91h-.28v-2.66a7.26 7.26 0 0 0 3.61-5.78l20.15-4.23a12.77 12.77 0 0 0-.14 4.04z"
        transform="translate(-149.07 -139)"
        fill="url(#prefix__a)"
        opacity={0.5}
      />
      <path
        d="M89.68 68.37s.64-9.24-2.24-7.21-1.64 7.78-1.64 7.78zM22.1 121.07s-2.66 9.05 1.6 7.46 3.73-7.46 3.73-7.46zM57.26 72.6h5.86v5.33h-5.86z"
        fill="#fda57d"
      />
      <path fill="#4d8af0" d="M52.46 101.9h4.79v23.97h-4.79z" />
      <path opacity={0.1} d="M52.46 101.9h4.79v23.97h-4.79z" />
      <path d="M59.54 76.07h5.54a5.75 5.75 0 0 1 5.75 5.75v35.79h-17V81.82a5.75 5.75 0 0 1 5.71-5.75z" fill="#fff" />
      <circle cx={59.65} cy={67.54} r={6.92} fill="#fda57d" />
      <path
        d="M56.99 76.07s-16.51-4.79-34.62 45.27h5.33s7.46-21.84 19.17-24.5c0 0 8.52 10.65-5.33 32h11.19v-7.14a124.62 124.62 0 0 1 4-32.08 26 26 0 0 0 .26-13.55zM63.38 76.07v1.6s3.73 16.51 6.92 27.16l1.63 2.17V88.32h15.45l2.66-20.77h-4.26l-4.85 12.24s-12.76-5.86-17.55-3.72z"
        fill="#4d8af0"
      />
      <path d="M53.79 117.61s-3.2 11.72 0 18.11-6.39 67.11-6.39 67.11h8l11.45-57.26 1.86-28z" fill="#333" />
      <path
        fill="#333"
        d="M70.84 117.61l.8 46.6-5.86 38.62h-5.86l-2.13-85.22h13.05zM58.52 64.9a2.76 2.76 0 0 1 .52-.62 1.31 1.31 0 0 1 .66-.18c1.45-.12 3.12-.15 4-1.52a5.5 5.5 0 0 0 .44-4 2.25 2.25 0 0 0-.39-1 1.61 1.61 0 0 0-1.44-.4l-5.83.38a3.06 3.06 0 0 0-1.87.55c-.82.69-1.06 2.12-1.92 2.74-.57.4-1.28.36-1.88.68-1.34.71-1.63 2.83-1.74 4.6-.14 2.38-.14 5.18 1.42 6.63 1.13 1.06 2.7 1 4.13.88l2.66-.22a1.23 1.23 0 0 0 .75-.23 2 2 0 0 0 .36-1.59c-.07-1.34-.21-2.86-1.09-3.68a3.45 3.45 0 0 1-.57-.54c-.95-1.48 1.29-1.82 1.79-2.48z"
      />
      <path d="M103.06 42s9.59 3.73 6.39 17l-43.14 9.05v-2.13z" fill="#f55f44" />
      <path opacity={0.1} d="M17.84 226h75.1v2.13h-75.1zM30.09 376.2h5.86v1.07h-5.86zM75.9 376.2h5.86v1.07H75.9z" />
      <path fill="#eee" d="M17.58 367.41h75.1v9.05h-75.1z" />
      <path
        fill="url(#prefix__b)"
        d="M151.15 38.35l.75-.38-.18-.02.06-.04-.11.03-20.64-2.67.44 6.83.65 6.06 1.27-.65 1.18 2.68 16.58-11.84z"
      />
      <path fill={primaryColor} d="M132.16 41.97l.6 5.55 18.45-9.35-16.02.35-3.03 3.45z" />
      <path opacity={0.2} d="M132.16 41.97l.6 5.55 18.45-9.35-16.02.35-3.03 3.45z" />
      <path fill={primaryColor} d="M131.75 35.72l19.46 2.45-19.05 3.8-.41-6.25z" />
      <path fill={primaryColor} d="M135.04 49.36l16.06-11.25-18.62 5.54 2.56 5.71z" />
      <path
        fill="url(#prefix__c)"
        d="M251.22 9.76l.75-.38-.18-.03.06-.04-.11.04-20.65-2.67.45 6.83.65 6.06 1.27-.65 1.18 2.68 16.58-11.84z"
      />
      <path fill={primaryColor} d="M232.23 13.38l.6 5.55 18.45-9.35-16.02.35-3.03 3.45z" />
      <path opacity={0.2} d="M232.23 13.38l.6 5.55 18.45-9.35-16.02.35-3.03 3.45z" />
      <path fill={primaryColor} d="M231.82 7.13l19.46 2.45-19.05 3.8-.41-6.25z" />
      <path fill={primaryColor} d="M235.11 20.77l16.06-11.25-18.62 5.53 2.56 5.72z" />
      <path
        fill="url(#prefix__d)"
        d="M426.55.84l1.03-.77-.27.01.07-.08-.15.08-31.79 1.31 2.44 10.18 2.54 8.95 1.75-1.31 2.46 3.73L426.55.84z"
      />
      <path fill={primaryColor} d="M398.89 11.19l2.33 8.2L426.6.54l-24.04 4.67-3.67 5.98z" />
      <path opacity={0.2} d="M398.89 11.19l2.33 8.2L426.6.54l-24.04 4.67-3.67 5.98z" />
      <path fill={primaryColor} d="M396.66 1.88L426.6.54l-27.71 10.65-2.23-9.31z" />
      <path fill={primaryColor} d="M405.13 21.58L426.42.48 399.8 13.63l5.33 7.95z" />
      <path
        fill="url(#prefix__e)"
        d="M342.16 58.41l.82-.19-.17-.06.07-.03h-.12l-19.39-7.56-1.21 6.74-.83 6.03 1.39-.32.49 2.88 18.95-7.49z"
      />
      <path fill={primaryColor} d="M322.86 57.35l-.76 5.52 20.16-4.62-15.63-3.52-3.77 2.62z" />
      <path opacity={0.2} d="M322.86 57.35l-.76 5.52 20.16-4.62-15.63-3.52-3.77 2.62z" />
      <path fill={primaryColor} d="M323.97 51.18l18.29 7.07-19.4-.9 1.11-6.17z" />
      <path fill={primaryColor} d="M323.87 65.21l18.3-7.05-19.41.89 1.11 6.16z" />
      <g opacity={0.5}>
        <path
          fill="url(#prefix__f)"
          d="M228.13 129.63l.74-.39-.17-.02.05-.04-.11.03-20.64-2.67.45 6.84.65 6.05 1.27-.65 1.17 2.68 16.59-11.83z"
        />
        <path fill={primaryColor} d="M209.14 133.25l.6 5.54 18.45-9.35-16.02.35-3.03 3.46z" />
        <path opacity={0.2} d="M209.14 133.25l.6 5.54 18.45-9.35-16.02.35-3.03 3.46z" />
        <path fill={primaryColor} d="M208.73 126.99l19.46 2.45-19.05 3.81-.41-6.26z" />
        <path fill={primaryColor} d="M212.02 140.63l16.06-11.25-18.62 5.54 2.56 5.71z" />
      </g>
      <g opacity={0.2}>
        <path
          fill="url(#prefix__g)"
          d="M451.84 38.23l1.03-.78-.27.01.08-.07-.16.08-31.78 1.3 2.44 10.18 2.53 8.96 1.75-1.31 2.47 3.73 21.91-22.1z"
        />
        <path fill={primaryColor} d="M424.18 48.58l2.33 8.19 25.38-18.84-24.04 4.67-3.67 5.98z" />
        <path opacity={0.2} d="M424.18 48.58l2.33 8.19 25.38-18.84-24.04 4.67-3.67 5.98z" />
        <path fill={primaryColor} d="M421.95 39.27l29.94-1.34-27.71 10.65-2.23-9.31z" />
        <path fill={primaryColor} d="M430.42 58.97l21.29-21.1-26.62 13.15 5.33 7.95z" />
      </g>
      <g opacity={0.3}>
        <path
          fill="url(#prefix__h)"
          d="M536.52 149.29l1.02-.77-.27.01.08-.08-.16.08-31.78 1.31 2.44 10.18 2.54 8.96 1.74-1.32 2.47 3.74 21.92-22.11z"
        />
        <path fill={primaryColor} d="M508.85 159.64l2.33 8.2 25.39-18.85-24.05 4.67-3.67 5.98z" />
        <path opacity={0.2} d="M508.85 159.64l2.33 8.2 25.39-18.85-24.05 4.67-3.67 5.98z" />
        <path fill={primaryColor} d="M506.62 150.33l29.95-1.34-27.72 10.65-2.23-9.31z" />
        <path fill={primaryColor} d="M515.09 170.03l21.29-21.09-26.62 13.14 5.33 7.95z" />
      </g>
      <g opacity={0.3}>
        <path
          fill="url(#prefix__i)"
          d="M798.23 204.28l1.03-.78-.27.01.08-.07-.16.07-31.78 1.31 2.44 10.18 2.53 8.96 1.75-1.31 2.46 3.73 21.92-22.1z"
        />
        <path fill={primaryColor} d="M770.57 214.63l2.33 8.19 25.38-18.85-24.04 4.67-3.67 5.99z" />
        <path opacity={0.2} d="M770.57 214.63l2.33 8.19 25.38-18.85-24.04 4.67-3.67 5.99z" />
        <path fill={primaryColor} d="M768.34 205.32l29.94-1.35-27.71 10.66-2.23-9.31z" />
        <path fill={primaryColor} d="M776.81 225.02l21.29-21.1-26.62 13.14 5.33 7.96z" />
      </g>
      <g opacity={0.5}>
        <path
          fill="url(#prefix__j)"
          d="M345.46 147.49l.82-.2-.17-.06.07-.03-.12.01-19.39-7.57-1.21 6.74-.83 6.04 1.38-.33.5 2.88 18.95-7.48z"
        />
        <path fill={primaryColor} d="M326.16 146.42l-.76 5.52 20.16-4.62-15.63-3.52-3.77 2.62z" />
        <path opacity={0.2} d="M326.16 146.42l-.76 5.52 20.16-4.62-15.63-3.52-3.77 2.62z" />
        <path fill={primaryColor} d="M327.27 140.25l18.29 7.07-19.4-.9 1.11-6.17z" />
        <path fill={primaryColor} d="M327.17 154.29l18.3-7.05-19.41.88 1.11 6.17z" />
      </g>
      <g opacity={0.5}>
        <path
          fill="url(#prefix__k)"
          d="M705.04 278.34l.82-.19-.16-.07.06-.02h-.12l-19.38-7.56-1.22 6.74-.83 6.03 1.39-.33.5 2.89 18.94-7.49z"
        />
        <path fill={primaryColor} d="M685.74 277.28l-.75 5.52 20.16-4.62-15.64-3.52-3.77 2.62z" />
        <path opacity={0.2} d="M685.74 277.28l-.75 5.52 20.16-4.62-15.64-3.52-3.77 2.62z" />
        <path fill={primaryColor} d="M686.85 271.11l18.3 7.07-19.41-.9 1.11-6.17z" />
        <path fill={primaryColor} d="M686.75 285.14l18.3-7.05-19.4.89 1.1 6.16z" />
      </g>
      <g opacity={0.5}>
        <path
          fill="url(#prefix__l)"
          d="M683.05 139.79l.82-.2-.17-.06.07-.03-.12.01-19.39-7.57-1.21 6.74-.83 6.04 1.39-.33.5 2.88 18.94-7.48z"
        />
        <path fill={primaryColor} d="M663.75 138.72l-.76 5.52 20.17-4.62-15.64-3.52-3.77 2.62z" />
        <path opacity={0.2} d="M663.75 138.72l-.76 5.52 20.17-4.62-15.64-3.52-3.77 2.62z" />
        <path fill={primaryColor} d="M664.86 132.56l18.3 7.06-19.41-.9 1.11-6.16z" />
        <path fill={primaryColor} d="M664.76 146.59l18.3-7.05-19.41.88 1.11 6.17z" />
      </g>
      <g opacity={0.2}>
        <path
          fill="url(#prefix__m)"
          d="M865.59 24.32l.82-.19-.16-.06.06-.03-.12.01-19.39-7.57-1.21 6.74-.83 6.04 1.39-.33.5 2.88 18.94-7.49z"
        />
        <path fill={primaryColor} d="M846.29 23.26l-.76 5.52 20.17-4.62-15.64-3.52-3.77 2.62z" />
        <path opacity={0.2} d="M846.29 23.26l-.76 5.52 20.17-4.62-15.64-3.52-3.77 2.62z" />
        <path fill={primaryColor} d="M847.4 17.09l18.3 7.07-19.41-.9 1.11-6.17z" />
        <path fill={primaryColor} d="M847.3 31.13l18.3-7.06-19.4.89 1.1 6.17z" />
      </g>
      <g opacity={0.2}>
        <path
          fill="url(#prefix__n)"
          d="M190.41 61.71l.82-.19-.17-.07.07-.02h-.12l-19.39-7.56-1.21 6.74-.84 6.03 1.4-.33.49 2.89 18.95-7.49z"
        />
        <path fill={primaryColor} d="M171.11 60.65l-.76 5.52 20.16-4.62-15.63-3.52-3.77 2.62z" />
        <path opacity={0.2} d="M171.11 60.65l-.76 5.52 20.16-4.62-15.63-3.52-3.77 2.62z" />
        <path fill={primaryColor} d="M172.22 54.48l18.29 7.07-19.4-.9 1.11-6.17z" />
        <path fill={primaryColor} d="M172.12 68.51l18.3-7.05-19.41.89 1.11 6.16z" />
      </g>
      <path
        fill="url(#prefix__o)"
        d="M581.82 37.19l1.14-.59-.27-.04.09-.06-.17.05-31.55-4.08.69 10.45.99 9.26 1.94-1.01 1.8 4.1 25.34-18.08z"
      />
      <path fill={primaryColor} d="M552.8 42.72l.91 8.47 28.2-14.29-24.48.54-4.63 5.28z" />
      <path opacity={0.2} d="M552.8 42.72l.91 8.47 28.2-14.29-24.48.54-4.63 5.28z" />
      <path fill={primaryColor} d="M552.17 33.16l29.74 3.74-29.11 5.82-.63-9.56z" />
      <path fill={primaryColor} d="M557.2 54.01l24.55-17.2-28.46 8.46 3.91 8.74z" />
      <path
        fill="url(#prefix__p)"
        d="M655.27 198.78l2.94.18-.49-.38.25-.02-.4-.1-57.2-44.99-10.9 21.32-8.91 19.36 4.99.3-1.26 10.16 70.98-5.83z"
      />
      <path fill={primaryColor} d="M591.77 175.63l-8.13 17.71 72.16 4.99-48.74-27.64-15.29 4.94z" />
      <path opacity={0.2} d="M591.77 175.63l-8.13 17.71 72.16 4.99-48.74-27.64-15.29 4.94z" />
      <path fill={primaryColor} d="M601.74 156.13l54.06 42.2-64.03-22.7 9.97-19.5z" />
      <path fill={primaryColor} d="M587.17 202.98l68.4-5.02-65.84-16.74-2.56 21.76z" />
      <path
        fill="url(#prefix__q)"
        d="M895.72 369.08l6.15.2-1.04-.77.5-.06-.83-.18-122.24-90.29-21.4 45.2-17.37 40.96 10.42.33-1.98 21.27 147.79-16.66z"
      />
      <path fill={primaryColor} d="M761.72 324.79l-15.86 37.48 150.94 5.85-103.49-54.62-31.59 11.29z" />
      <path opacity={0.2} d="M761.72 324.79l-15.86 37.48 150.94 5.85-103.49-54.62-31.59 11.29z" />
      <path fill={primaryColor} d="M781.29 283.45l115.51 84.67-135.08-43.33 19.57-41.34z" />
      <path fill={primaryColor} d="M753.85 382.16l142.44-14.81-138.47-30.76-3.97 45.57z" />
      <path
        fill="url(#prefix__r)"
        d="M791.07 25.22l2.68-1.22-.61-.11.21-.13-.4.1-71.6-13.02.34 23.95 1.17 21.27 4.55-2.06 3.64 9.57 60.02-38.35z"
      />
      <path fill={primaryColor} d="M724.12 34.45l1.09 19.46 66.12-29.34-56.01-1.64-11.2 11.52z" />
      <path opacity={0.2} d="M724.12 34.45l1.09 19.46 66.12-29.34-56.01-1.64-11.2 11.52z" />
      <path fill={primaryColor} d="M723.81 12.55l67.52 12.02-67.21 9.88-.31-21.9z" />
      <path fill={primaryColor} d="M732.84 60.78l58.11-36.43-66.02 16 7.91 20.43z" />
      <path
        fill="url(#prefix__s)"
        d="M866.94 105.49l2.69-1.21-.61-.11.2-.14-.39.1-71.6-13.02.34 23.95 1.17 21.27 4.55-2.05 3.64 9.56 60.01-38.35z"
      />
      <path fill={primaryColor} d="M800 114.73l1.08 19.46 66.12-29.34-56.01-1.64L800 114.73z" />
      <path opacity={0.2} d="M800 114.73l1.08 19.46 66.12-29.34-56.01-1.64L800 114.73z" />
      <path fill={primaryColor} d="M799.68 92.83l67.52 12.02-67.2 9.88-.32-21.9z" />
      <path fill={primaryColor} d="M808.72 141.05l58.1-36.42-66.01 15.99 7.91 20.43z" />
      <path
        fill="url(#prefix__t)"
        d="M482.55 100.73l1.15-.59-.27-.03.08-.06-.17.05-31.54-4.08.69 10.44.98 9.26 1.94-1 1.8 4.1 25.34-18.09z"
      />
      <path fill={primaryColor} d="M453.54 106.27l.91 8.46 28.2-14.28-24.48.54-4.63 5.28z" />
      <path opacity={0.2} d="M453.54 106.27l.91 8.46 28.2-14.28-24.48.54-4.63 5.28z" />
      <path fill={primaryColor} d="M452.91 96.71l29.74 3.74-29.11 5.82-.63-9.56z" />
      <path fill={primaryColor} d="M457.93 117.56l24.55-17.2-28.46 8.46 3.91 8.74z" />
      <path
        fill="url(#prefix__u)"
        d="M672.79 86.44l1.14-.59-.26-.04.08-.06-.17.05-31.54-4.08.68 10.45.99 9.26 1.94-1 1.8 4.09 25.34-18.08z"
      />
      <path fill={primaryColor} d="M643.78 91.97l.91 8.47 28.2-14.29-24.48.54-4.63 5.28z" />
      <path opacity={0.2} d="M643.78 91.97l.91 8.47 28.2-14.29-24.48.54-4.63 5.28z" />
      <path fill={primaryColor} d="M643.15 82.42l29.74 3.73-29.11 5.82-.63-9.55z" />
      <path fill={primaryColor} d="M648.17 103.26l24.55-17.2-28.46 8.47 3.91 8.73z" />
    </svg>
  );
};

UndrawNews.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawNews;
