import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSocialGrowth = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 882.59 700.83" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={168.14} y1={160.3} x2={168.14} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={168.04} y1={696} x2={168.04} y2={609.92} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={168.54} y1={612.42} x2={168.54} y2={153.63} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={713} y1={271.58} x2={713} y2={255.19} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={62.71} y1={115.15} x2={62.71} y2={12.48} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={266.99} y1={115.35} x2={266.99} y2={12.28} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={392.66} y1={115.47} x2={392.66} y2={11.64} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={696.89} y1={304.61} x2={729.36} y2={304.61} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={600.63} y1={684.37} x2={600.63} y2={294.37} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={447.82} y1={598.3} x2={447.82} y2={475.25} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={603.18} y1={657.92} x2={603.18} y2={614.8} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={754.91} y1={646.67} x2={754.91} y2={523.63} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={912.09} y1={712.66} x2={912.09} y2={652.01} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={580.33} y1={657.19} x2={580.33} y2={534.15} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={737.88} y1={723.65} x2={737.88} y2={671.06} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={765.42} y1={484.72} x2={765.42} y2={361.68} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__q" x1={902.9} y1={522.78} x2={953.38} y2={522.78} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__r" x1={555.09} y1={411.1} x2={555.09} y2={288.06} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__s"
          x1={930.42}
          y1={897.67}
          x2={930.42}
          y2={842.96}
          gradientTransform="rotate(36.18 1463.02 326.009)"
          xlinkHref="#prefix__a"
        />
      </defs>
      <path
        fill="url(#prefix__a)"
        d="M188.1 130.34V59.9h-22.45l-6.89-39.93h9.37V0h-51.02v19.97h9.37l-6.89 39.93H97.14v72.11h.55v28.29h141.44v-29.96H188.1z"
      />
      <path fill={primaryColor} d="M168.13 74.63h-48.37l10.52-61h27.34l10.51 61z" />
      <path fill="url(#prefix__b)" d="M84.04 609.92h168V696h-168z" />
      <path fill={primaryColor} d="M92.42 609.92h151.44v75.72H92.42z" />
      <path
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={5}
        stroke="url(#prefix__c)"
        d="M115.54 156.13h106v453.79h-106z"
      />
      <path
        fill="none"
        stroke={primaryColor}
        strokeMiterlimit={10}
        strokeWidth={5}
        d="M120.81 156.13h95.7v453.79h-95.7z"
      />
      <path
        fill="none"
        stroke={primaryColor}
        strokeLinejoin="round"
        strokeWidth={5}
        d="M216.51 307.57h-95.7l95.18-76.77M120.81 383.81h95.7l-95.17-76.24"
      />
      <path
        fill="none"
        stroke={primaryColor}
        strokeLinejoin="round"
        strokeWidth={5}
        d="M216.51 460.06h-95.7l95.18-76.77M120.81 536.3h95.7l-96.23-76.24"
      />
      <path
        fill="none"
        stroke={primaryColor}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={5}
        d="M121.34 156.13l95.17 75.19h-95.7"
      />
      <path fill="none" stroke={primaryColor} strokeMiterlimit={10} strokeWidth={5} d="M121.34 609.39l94.65-73.61" />
      <path fill={primaryColor} d="M101.36 127.74h134.09v28.39H101.36z" />
      <path fill={primaryColor} d="M100.83 60.96h86.24v68.36h-86.24z" />
      <path fill="#64ffda" d="M157.62 60.96h29.45V88.3h-29.45z" />
      <path
        fill="none"
        stroke={primaryColor}
        strokeMiterlimit={10}
        strokeWidth={5}
        d="M2.5 109.86h96.75v43.12H2.5zM235.97 109.86h388.06v43.12H235.97z"
      />
      <path
        fill="none"
        stroke={primaryColor}
        strokeLinejoin="round"
        strokeWidth={5}
        d="M50.88 109.86v43.11l48.37-43.11M430 152.97v-43.11l-38.39 43.11M391.61 110.38v42.07l-43.12-41.54M347.97 154.03v-44.17l-43.65 43.11M260.68 155.08v-43.12l43.64 40.49v-41.01M481 110.38v42.07l-50.48-42.59M532.01 154.03v-43.12L481 152.97M583.01 111.44v41.01l-50.48-41.54"
      />
      <path
        d="M713 271.58c15.19 0 27.5-7.34 27.5-16.4h-55c0 9.06 12.31 16.4 27.5 16.4z"
        transform="translate(-157.46 -99.58)"
        fill="url(#prefix__d)"
      />
      <path d="M556.19 168.23c13.36 0 24.19-5.65 24.19-12.62H532c0 6.97 10.83 12.62 24.19 12.62z" fill="#64ffda" />
      <path fill={primaryColor} d="M119.76 4.17h48.38V23.1h-48.38z" />
      <path fill="none" stroke={primaryColor} strokeLinejoin="round" strokeWidth={5} d="M2.5 109.86l48.38 43.11" />
      <path fill="none" strokeLinejoin="round" strokeWidth={3} stroke="url(#prefix__e)" d="M122.91 13.63L2.5 114" />
      <path fill="none" stroke={primaryColor} strokeLinejoin="round" strokeWidth={3} d="M122.91 13.63L2.5 109.86" />
      <path fill="none" strokeLinejoin="round" strokeWidth={3} stroke="url(#prefix__f)" d="M163.93 13.63L370.05 114" />
      <path fill="none" stroke={primaryColor} strokeMiterlimit={10} strokeWidth={3} d="M163.93 13.63l206.12 96.23" />
      <path fill="none" stroke={primaryColor} strokeLinejoin="round" strokeWidth={5} d="M624.03 108.81l-41.02 44.16" />
      <path fill="none" strokeLinejoin="round" strokeWidth={3} stroke="url(#prefix__g)" d="M161.3 13.11L624.03 114" />
      <path fill="none" stroke={primaryColor} strokeLinejoin="round" strokeWidth={3} d="M161.3 13.11l462.73 95.7" />
      <path
        d="M727.86 336.91a14.73 14.73 0 1 1-14.73-14.73v-64.6"
        transform="translate(-157.46 -99.58)"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        stroke="url(#prefix__h)"
      />
      <path
        d="M569.34 235.01a13.67 13.67 0 1 1-13.67-13.67v-59.92"
        fill="none"
        stroke="#64ffda"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      />
      <path fill={primaryColor} d="M92.42 609.92h151.44v75.72H92.42z" />
      <path fill={primaryColor} opacity={0.2} d="M393.79 340.3h488.8v360.53h-488.8z" />
      <path fill="url(#prefix__i)" d="M355.37 294.37v390H845.9v-390H355.37z" />
      <path fill="#fff" d="M362.3 318.64h478.4v358.8H362.3z" />
      <path fill="#f5f5f5" d="M362.3 299.57h478.4v19.07H362.3z" />
      <circle cx={376.17} cy={308.81} r={4.62} fill="#ff5252" />
      <circle cx={388.88} cy={308.81} r={4.62} fill="#ff0" />
      <circle cx={401.59} cy={308.81} r={4.62} fill="#69f0ae" />
      <path fill="url(#prefix__j)" d="M398.4 475.25h98.86v123.04H398.4z" />
      <path fill="#fff" d="M402.6 477.36h90.44v113.58H402.6z" />
      <path
        d="M411.71 481.74c-4.74 0-4.74 7.36 0 7.36s4.75-7.36 0-7.36zM483.22 481.74c-4.74 0-4.74 7.36 0 7.36s4.75-7.36 0-7.36z"
        fill="#64ffda"
      />
      <path
        d="M624.21 622.16l5.26-1.05s-4.42 4.94-5.26 5.26a21.16 21.16 0 0 0 0 3.15c-10.1 43.33-47.32 24.19-47.32 24.19 13.57.32 14.72-5.26 14.72-5.26-7.89-1.16-9.46-6.31-9.46-6.31a3.25 3.25 0 0 0 4.21-1.05c-8.52-2.21-7.36-10.52-7.36-10.52a10.94 10.94 0 0 0 5.15 2c-.95-1.16-8.94-10.73-4.1-15.67 0 0 5.89 10.52 21.35 11.46l1.05-.21a8.25 8.25 0 0 1-.21-2.31 11 11 0 0 1 11-11c7.36 0 8.94 4.21 8.94 4.21l5.26-3.15c-.08-.05-.6 5.21-3.23 6.26z"
        transform="translate(-157.46 -99.58)"
        fill="url(#prefix__k)"
      />
      <path
        d="M468.85 519.42l5.26-1.05s-4.42 4.94-5.26 5.26a21.16 21.16 0 0 0 0 3.15c-10.09 43.34-47.31 24.2-47.31 24.2 13.57.32 14.72-5.26 14.72-5.26-7.89-1.16-9.46-6.31-9.46-6.31a3.25 3.25 0 0 0 4.21-1.05c-8.52-2.21-7.36-10.52-7.36-10.52a10.94 10.94 0 0 0 5.15 2c-.95-1.16-8.94-10.73-4.1-15.67 0 0 5.89 10.52 21.35 11.46l1.05-.21a8.25 8.25 0 0 1-.21-2.31 11 11 0 0 1 11-11c7.36 0 8.94 4.21 8.94 4.21l5.26-3.15c-.08-.05-.61 5.25-3.24 6.25z"
        fill="#00aced"
      />
      <path fill="url(#prefix__l)" d="M705.48 523.63h98.86v123.04h-98.86z" />
      <path fill="#fff" d="M711.79 527.84h90.44v113.58h-90.44z" />
      <path
        d="M720.9 532.22c-4.74 0-4.74 7.36 0 7.36s4.74-7.36 0-7.36zM792.41 532.22c-4.74 0-4.74 7.36 0 7.36s4.74-7.36 0-7.36z"
        fill="#64ffda"
      />
      <path
        d="M923.75 709.72l5.77-19.79s.1-4.46-3.9-5.41-5.49-.72-7.92.87l-6.06 20.8-10.1-2.94 9.12-31.3 10.1 2.94-1.35 4.64s5.22-5.49 11.83-3c6.14 2.23 9.67 7.42 8.29 15.89l.2.06-5.89 20.19zm-24-45.34a6.31 6.31 0 1 1 7.82-4.29 6.33 6.33 0 0 1-7.85 4.29zm-5.25 36.81l-10.1-2.94 9.12-31.3 10.1 2.94z"
        transform="translate(-157.46 -99.58)"
        fill="url(#prefix__m)"
      />
      <path
        d="M768.39 606.99l5.77-19.79s.1-4.46-3.9-5.41-5.49-.72-7.92.87l-6.07 20.76-10.1-2.94 9.12-31.3 10.1 2.94-1.35 4.64s5.22-5.49 11.83-3c6.14 2.23 9.67 7.42 8.29 15.89l.2.06-5.89 20.19zm-24-45.34a6.31 6.31 0 1 1 7.82-4.29 6.33 6.33 0 0 1-7.85 4.28zm-5.28 36.77l-10.1-2.94 9.12-31.3 10.1 2.94z"
        fill="#0077b5"
      />
      <path fill="url(#prefix__n)" d="M530.9 534.15h98.86v123.04H530.9z" />
      <path fill="#fff" d="M535.11 538.35h90.44v113.58h-90.44z" />
      <path
        d="M544.22 542.74c-4.74 0-4.74 7.36 0 7.36s4.74-7.36 0-7.36zM615.73 542.74c-4.74 0-4.74 7.36 0 7.36s4.75-7.36 0-7.36z"
        fill="#64ffda"
      />
      <path
        d="M757.77 692.1c-1.16 5.57-2 13.15-13.67 15.77 0 0-6.84 1.79-9-3.15-1.37 5.36-2.73 10.31-3.58 11.57a65.64 65.64 0 0 1-5.26 7.36s.95-9.46 1.05-11.57c.11-3.26 3.15-17.88 3.15-17.88s-2.84-10.31 4.21-11.57c0 0 5.78-1.37 4.21 6.31 0 0-1.16 5-2.63 10.83l.53.74s1.37 2.84 4.21 3.15 10.31-4.73 10.52-13.67-1.68-11.46-9.46-13.67-14.41 1.58-16.83 8.41c-2.73 7.78-.53 9.68 1.05 11.57l-1.05 5.26S717.6 699 717.81 691s4.73-20 21-20 20.12 15.42 18.96 21.1z"
        transform="translate(-157.46 -99.58)"
        fill="url(#prefix__o)"
      />
      <path
        d="M602.41 589.36c-1.16 5.57-2 13.15-13.67 15.77 0 0-6.84 1.79-9-3.15-1.37 5.36-2.73 10.31-3.58 11.57a65.64 65.64 0 0 1-5.26 7.36s.95-9.46 1.05-11.57c.11-3.26 3.15-17.88 3.15-17.88s-2.84-10.31 4.21-11.57c0 0 5.78-1.37 4.21 6.31 0 0-1.16 5-2.63 10.83l.53.74s1.37 2.84 4.21 3.15 10.31-4.73 10.52-13.67-1.68-11.46-9.46-13.67-14.41 1.58-16.83 8.41c-2.73 7.78-.53 9.68 1.05 11.57l-1.05 5.26s-7.57-2.52-7.36-10.52 4.73-20 21-20 20.04 15.38 18.91 21.06z"
        fill="#bd081c"
      />
      <path fill="url(#prefix__p)" d="M715.99 361.68h98.86v123.04h-98.86z" />
      <path fill="#fff" d="M720.2 365.88h90.44v113.58H720.2z" />
      <path
        d="M729.31 370.27c-4.74 0-4.74 7.36 0 7.36s4.75-7.36 0-7.36zM800.82 370.27c-4.74 0-4.74 7.36 0 7.36s4.72-7.36 0-7.36z"
        fill="#64ffda"
      />
      <path
        d="M951.8 523.31H945v6.84a1.62 1.62 0 0 1-1.58 1.58h-1.05a1.62 1.62 0 0 1-1.58-1.58v-6.84h-6.84a1.62 1.62 0 0 1-1.58-1.58v-1.05a1.62 1.62 0 0 1 1.58-1.58h6.84v-6.84a1.62 1.62 0 0 1 1.58-1.58h1.05a1.62 1.62 0 0 1 1.58 1.58v6.84h6.84a1.62 1.62 0 0 1 1.58 1.58v1.05a1.62 1.62 0 0 1-1.62 1.58zM928 504.8a10.52 10.52 0 0 1 2.21 6.42 11.12 11.12 0 0 1-7.15 10.1c.32 1.05 1.37 2.21 4 4.1 5 3.68 5.26 10.52 5.26 10.52v.53c0 5.47-6.63 10-14.72 10s-14.72-4.52-14.72-10c0-5.26 6-9.57 13.67-10v-4.31c-5.89-.74-10.52-5.36-10.52-10.94 0-6.1 5.36-11 12.09-11h.53s12.09-.95 13.67-1.05 1.05 2.1 1.05 2.1zm-17.77 31.13c0 3.47 3.58 6.31 7.89 6.31s7.89-2.84 7.89-6.31-3.58-6.31-7.89-6.31-7.86 2.84-7.86 6.31zm12.83-25.77c-.84-4-3.79-6.84-6.52-6.31s-4.21 4.31-3.37 8.31 3.79 6.84 6.52 6.31 4.24-4.21 3.4-8.31z"
        transform="translate(-157.46 -99.58)"
        fill="url(#prefix__q)"
      />
      <path
        d="M796.44 420.57h-6.84v6.85a1.62 1.62 0 0 1-1.58 1.58h-1.05a1.62 1.62 0 0 1-1.58-1.58v-6.84h-6.85a1.62 1.62 0 0 1-1.58-1.58v-1.05a1.62 1.62 0 0 1 1.58-1.58h6.84v-6.84a1.62 1.62 0 0 1 1.58-1.58h1.05a1.62 1.62 0 0 1 1.58 1.58v6.84h6.84a1.62 1.62 0 0 1 1.58 1.58V419a1.62 1.62 0 0 1-1.57 1.57zm-23.77-18.51a10.52 10.52 0 0 1 2.21 6.42 11.12 11.12 0 0 1-7.15 10.1c.32 1.05 1.37 2.21 4 4.1 5 3.68 5.26 10.52 5.26 10.52v.53c0 5.47-6.63 10-14.72 10s-14.73-4.54-14.73-10.01c0-5.26 6-9.57 13.67-10v-4.3c-5.89-.74-10.52-5.36-10.52-10.94 0-6.1 5.36-11 12.09-11h.53s12.09-.95 13.67-1.05 1.05 2.1 1.05 2.1zm-17.77 31.13c0 3.47 3.58 6.31 7.89 6.31s7.89-2.84 7.89-6.31-3.58-6.31-7.89-6.31-7.89 2.84-7.89 6.31zm12.83-25.77c-.84-4-3.79-6.84-6.52-6.31s-4.21 4.31-3.37 8.31 3.79 6.84 6.52 6.31 4.18-4.2 3.37-8.31z"
        fill="#d34836"
      />
      <path fill="none" stroke="#64ffda" strokeMiterlimit={10} d="M600.84 465.57v6h-6" />
      <path fill="none" stroke="#64ffda" strokeMiterlimit={10} strokeDasharray="10.82 9.92" d="M584.92 471.57h-57.25" />
      <path fill="none" stroke="#64ffda" strokeMiterlimit={10} d="M522.71 471.57h-6v-6" />
      <path
        fill="none"
        stroke="#64ffda"
        strokeMiterlimit={10}
        strokeDasharray="11.83 10.85"
        d="M516.71 454.73v-85.31"
      />
      <path fill="none" stroke="#64ffda" strokeMiterlimit={10} d="M516.71 364v-6h6" />
      <path fill="none" stroke="#64ffda" strokeMiterlimit={10} strokeDasharray="10.82 9.92" d="M532.62 358h57.26" />
      <path fill="none" stroke="#64ffda" strokeMiterlimit={10} d="M594.84 358h6v6" />
      <path fill="none" stroke="#64ffda" strokeMiterlimit={10} strokeDasharray="11.83 10.85" d="M600.84 374.84v85.31" />
      <path fill="#64ffda" opacity={0.2} d="M516.71 358h84.13v113.58h-84.13z" />
      <path
        fill="none"
        stroke="#64ffda"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M520.39 300.68l35.75-53.63 35.76 53.63"
      />
      <path fill="url(#prefix__r)" d="M505.66 288.06h98.86V411.1h-98.86z" />
      <path fill="#fff" d="M510.92 292.27h90.44v113.58h-90.44z" />
      <path
        d="M520.03 296.65c-4.74 0-4.74 7.36 0 7.36s4.75-7.36 0-7.36zM591.54 296.65c-4.74 0-4.74 7.36 0 7.36s4.75-7.36 0-7.36z"
        fill="#64ffda"
      />
      <path
        d="M715.15 437.22l-.18 5.26 8.41.29-1.38 9.42-7.36-.25-.9 26.28-11.56-.4.9-26.28-5.26-.18.32-9.46 5.26.18.18-5.26s-.6-10 8.81-11.27L724 426l-.29 8.41-5.26-.18a3.1 3.1 0 0 0-3.3 2.99z"
        transform="translate(-157.46 -99.58)"
        fill="url(#prefix__s)"
      />
      <path
        d="M560.12 334.6l-.3 5.25 8.4.47-1.58 9.39-7.35-.41-1.48 26.25-11.55-.65 1.48-26.25-5.25-.3.53-9.45 5.25.3.3-5.25s-.38-10 9.05-11.08l11.55.65-.47 8.4-5.25-.3a3.1 3.1 0 0 0-3.33 2.98z"
        fill="#3b5998"
      />
    </svg>
  );
};

UndrawSocialGrowth.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSocialGrowth;
