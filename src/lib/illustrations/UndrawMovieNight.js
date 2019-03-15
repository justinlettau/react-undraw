import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawMovieNight = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 895.76 694.3" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={727.96} y1={757.2} x2={727.96} y2={618.07} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={463.13} y1={554.16} x2={463.13} y2={196.77} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={615.25} y1={738.75} x2={615.25} y2={213.88} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={137.3} y1={442.59} x2={137.3} y2={412.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={181.03} y1={442.59} x2={181.03} y2={412.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={56.57} y1={442.59} x2={56.57} y2={412.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={113.76} y1={404.47} x2={113.76} y2={374.19} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={202.9} y1={410.64} x2={202.9} y2={380.36} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={181.03} y1={397.18} x2={181.03} y2={366.91} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={191.69} y1={429.14} x2={191.69} y2={398.86} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={152.44} y1={404.47} x2={152.44} y2={374.19} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={150.76} y1={361.86} x2={150.76} y2={331.59} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={225.32} y1={383.73} x2={225.32} y2={353.45} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={218.04} y1={412.32} x2={218.04} y2={382.04} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={251.67} y1={406.71} x2={251.67} y2={376.44} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__q" x1={236.54} y1={420.73} x2={236.54} y2={390.45} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__r" x1={135.62} y1={383.73} x2={135.62} y2={353.45} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__s" x1={113.76} y1={440.91} x2={113.76} y2={410.64} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__t" x1={79.56} y1={442.59} x2={79.56} y2={412.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__u" x1={96.94} y1={433.06} x2={96.94} y2={402.79} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__v" x1={170.94} y1={416.24} x2={170.94} y2={385.97} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__w" x1={170.94} y1={380.36} x2={170.94} y2={350.09} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__x" x1={187.76} y1={408.95} x2={187.76} y2={378.68} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__y" x1={172.62} y1={351.77} x2={172.62} y2={321.49} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__z" x1={175.99} y1={366.91} x2={175.99} y2={336.63} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__A" x1={193.93} y1={377} x2={193.93} y2={346.72} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__B" x1={212.43} y1={374.19} x2={212.43} y2={343.92} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__C" x1={207.38} y1={389.33} x2={207.38} y2={359.06} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__D" x1={144.03} y1={369.71} x2={144.03} y2={339.44} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__E" x1={100.3} y1={415.68} x2={100.3} y2={385.41} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__F" x1={126.65} y1={390.45} x2={126.65} y2={360.18} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__G" x1={72.83} y1={433.62} x2={72.83} y2={403.35} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__H" x1={218.04} y1={421.85} x2={218.04} y2={391.57} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__I" x1={150.2} y1={336.63} x2={150.2} y2={306.36} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__J" x1={122.73} y1={371.39} x2={122.73} y2={341.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__K" x1={100.86} y1={397.18} x2={100.86} y2={366.91} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__L" x1={116.56} y1={425.77} x2={116.56} y2={395.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__M" x1={137.86} y1={406.71} x2={137.86} y2={376.44} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__N" x1={149.08} y1={425.77} x2={149.08} y2={395.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__O" x1={265.13} y1={442.59} x2={265.13} y2={412.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__P" x1={243.82} y1={439.23} x2={243.82} y2={408.95} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__Q" x1={202.9} y1={440.91} x2={202.9} y2={410.64} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__R" x1={157.49} y1={442.59} x2={157.49} y2={412.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__S" x1={153} y1={382.04} x2={153} y2={351.77} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__T" x1={168.14} y1={401.11} x2={168.14} y2={370.83} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__U" x1={142.91} y1={354.57} x2={142.91} y2={324.3} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__V" x1={159.73} y1={356.25} x2={159.73} y2={325.98} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__W" x1={187.76} y1={364.1} x2={187.76} y2={333.83} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__X" x1={112.07} y1={388.77} x2={112.07} y2={358.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__Y" x1={122.73} y1={408.39} x2={122.73} y2={378.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__Z" x1={130.02} y1={431.38} x2={130.02} y2={401.11} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aa" x1={172.62} y1={424.09} x2={172.62} y2={393.82} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ab" x1={216.35} y1={410.64} x2={216.35} y2={380.36} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ac" x1={230.37} y1={398.86} x2={230.37} y2={368.59} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ad" x1={252.23} y1={425.77} x2={252.23} y2={395.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ae" x1={181.59} y1={444.27} x2={181.59} y2={414} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__af" x1={103.67} y1={437.55} x2={103.67} y2={407.27} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ag" x1={81.8} y1={417.92} x2={81.8} y2={387.65} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ah" x1={110.39} y1={408.39} x2={110.39} y2={378.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ai" x1={94.69} y1={385.41} x2={94.69} y2={355.13} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aj" x1={108.15} y1={364.1} x2={108.15} y2={333.83} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ak" x1={225.32} y1={442.59} x2={225.32} y2={412.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__al" x1={162.81} y1={677.5} x2={162.81} y2={427.46} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__am" x1={86.85} y1={401.11} x2={86.85} y2={370.83} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__an" x1={124.97} y1={358.5} x2={124.97} y2={328.22} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ao" x1={71.71} y1={424.09} x2={71.71} y2={393.82} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ap" x1={53.57} y1={321.26} x2={53.57} y2={290.98} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aq" x1={979.26} y1={510.07} x2={979.26} y2={351.98} xlinkHref="#prefix__a" />
        <clipPath id="prefix__ar" transform="translate(-152.12 -100.85)">
          <path
            data-name="<Clipping Path>"
            d="M1031.12 373.43l-6.77-16.49L934.08 394a11.15 11.15 0 0 0-6.91 10.31v97.53H945v-93.03z"
            fill="#f2f2f2"
          />
        </clipPath>
        <linearGradient id="prefix__as" x1={787.61} y1={694.3} x2={787.61} y2={384} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__b" x1={787.2} y1={576.01} x2={787.2} y2={477.17} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__at" x1={117.26} y1={234.51} x2={117.26} y2={204.24} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__au" x1={172.16} y1={168.63} x2={172.16} y2={138.35} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__av" x1={278.67} y1={310.28} x2={278.67} y2={280} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aw" x1={363.22} y1={417.89} x2={363.22} y2={387.61} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ax" x1={49.18} y1={680.32} x2={49.18} y2={650.05} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ay" x1={28.31} y1={652.87} x2={28.31} y2={622.6} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__az" x1={15.14} y1={504.63} x2={15.14} y2={474.36} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aA" x1={300.63} y1={668.24} x2={300.63} y2={637.97} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aB" x1={328.08} y1={650.68} x2={328.08} y2={620.4} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aC" x1={331.38} y1={671.54} x2={331.38} y2={641.26} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aD" x1={274.28} y1={671.54} x2={274.28} y2={641.26} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aE" x1={759.61} y1={142.75} x2={759.61} y2={0} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aF" x1={770.44} y1={104.32} x2={770.44} y2={38.43} xlinkHref="#prefix__b" />
      </defs>
      <path
        d="M578.24 635.33s76.92 163.27 299.44 111.86c0 0-23.55-20.41 0-47.88l-186.41-81.24z"
        transform="translate(-152.12 -100.85)"
        fill="url(#prefix__a)"
      />
      <path d="M433.22 536.97s73.27 155.52 285.24 106.54c0 0-22.43-19.44 0-45.61l-177.58-77.38z" fill={primaryColor} />
      <circle cx={463.13} cy={375.47} r={178.7} fill="url(#prefix__c)" />
      <circle cx={463.13} cy={375.47} r={171.23} fill={primaryColor} />
      <path
        d="M615.25 213.88c-144.94 0-262.44 117.5-262.44 262.44s117.5 262.44 262.44 262.44 262.44-117.5 262.44-262.44-117.5-262.44-262.44-262.44zm95.57 137.05A60.8 60.8 0 1 1 688.56 434a60.8 60.8 0 0 1 22.26-83.06zM519.68 601.7a60.8 60.8 0 1 1 22.25-83.05 60.8 60.8 0 0 1-22.25 83.05zM541.93 434a60.8 60.8 0 1 1-22.25-83.05A60.8 60.8 0 0 1 541.93 434zm73.31 248.58a60.8 60.8 0 1 1 60.8-60.8 60.8 60.8 0 0 1-60.79 60.79zm-38.47-209.34a38.48 38.48 0 1 1 38.48 38.48 38.48 38.48 0 0 1-38.48-38.48zm38.48-81.58a60.8 60.8 0 1 1 60.8-60.8 60.8 60.8 0 0 1-60.8 60.8zm178.62 187.78a60.8 60.8 0 1 1-22.25-83.05 60.8 60.8 0 0 1 22.25 83.05z"
        transform="translate(-152.12 -100.85)"
        fill="url(#prefix__d)"
      />
      <path
        d="M463.13 120.51c-140.81 0-255 114.15-255 255s114.15 255 255 255 255-114.15 255-255-114.19-255-255-255zm92.85 133.15a59.07 59.07 0 1 1-21.62 80.69 59.07 59.07 0 0 1 21.61-80.69zm-185.7 243.62a59.07 59.07 0 1 1 21.6-80.69 59.07 59.07 0 0 1-21.6 80.69zm21.6-162.94a59.07 59.07 0 1 1-21.62-80.69 59.07 59.07 0 0 1 21.62 80.69zm71.23 241.5a59.07 59.07 0 1 1 59.07-59.07 59.07 59.07 0 0 1-59.05 59.08zm-37.37-203.36a37.38 37.38 0 1 1 37.38 37.38 37.38 37.38 0 0 1-37.38-37.38zm37.38-79.25a59.07 59.07 0 1 1 59.07-59.08 59.07 59.07 0 0 1-59.06 59.07zm173.54 182.43a59.07 59.07 0 1 1-21.62-80.69 59.07 59.07 0 0 1 21.62 80.69z"
        fill="#e6e6e6"
      />
      <path
        d="M225.37 390.42c0-140.81 114.15-255 255-255a253.79 253.79 0 0 1 148.18 47.47 253.93 253.93 0 0 0-165.38-60.93c-140.81 0-255 114.15-255 255a254.63 254.63 0 0 0 106.78 207.49 254.38 254.38 0 0 1-89.58-194.03z"
        fill="#fff"
        opacity={0.2}
      />
      <circle
        cx={463.13}
        cy={372.47}
        r={42.99}
        fill="none"
        stroke="#fff"
        strokeMiterlimit={10}
        strokeWidth={13}
        opacity={0.2}
      />
      <circle cx={137.3} cy={427.46} r={15.14} fill="url(#prefix__e)" />
      <circle cx={137.3} cy={427.46} r={13.46} fill="#fdd835" />
      <path
        d="M127.21 431.38a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.42 13.4 13.4 0 0 1-1.28-5.77z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={181.03} cy={427.46} r={15.14} fill="url(#prefix__f)" />
      <circle cx={181.03} cy={427.46} r={13.46} fill="#fdd835" />
      <path
        d="M170.94 431.38a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.42 13.4 13.4 0 0 1-1.28-5.77z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={56.57} cy={427.46} r={15.14} fill="url(#prefix__g)" />
      <circle cx={56.57} cy={427.46} r={13.46} fill="#fdd835" />
      <path
        d="M46.48 431.38a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.56 15.42 13.4 13.4 0 0 1-1.27-5.77z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={113.76} cy={389.33} r={15.14} fill="url(#prefix__h)" />
      <circle cx={113.76} cy={389.33} r={13.46} fill="#fdd835" />
      <path
        d="M103.66 393.26a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={202.9} cy={395.5} r={15.14} fill="url(#prefix__i)" />
      <circle cx={202.9} cy={395.5} r={13.46} fill="#fdd835" />
      <path
        d="M192.8 399.43a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={181.03} cy={382.04} r={15.14} fill="url(#prefix__j)" />
      <circle cx={181.03} cy={382.04} r={13.46} fill="#fdd835" />
      <path
        d="M170.94 385.97a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={191.69} cy={414} r={15.14} fill="url(#prefix__k)" />
      <circle cx={191.69} cy={414} r={13.46} fill="#fdd835" />
      <path
        d="M181.59 417.93a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.54 15.37 13.4 13.4 0 0 1-1.29-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={152.44} cy={389.33} r={15.14} fill="url(#prefix__l)" />
      <circle cx={152.44} cy={389.33} r={13.46} fill="#fdd835" />
      <path
        d="M142.35 393.26a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={150.76} cy={346.72} r={15.14} fill="url(#prefix__m)" />
      <circle cx={150.76} cy={346.72} r={13.46} fill="#fdd835" />
      <path
        d="M140.67 350.65A13.45 13.45 0 0 1 163.5 341a13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={225.32} cy={368.59} r={15.14} fill="url(#prefix__n)" />
      <circle cx={225.32} cy={368.59} r={13.46} fill="#fdd835" />
      <path
        d="M215.23 372.51a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={218.04} cy={397.18} r={15.14} fill="url(#prefix__o)" />
      <circle cx={218.04} cy={397.18} r={13.46} fill="#fdd835" />
      <path
        d="M207.94 401.15a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={251.67} cy={391.57} r={15.14} fill="url(#prefix__p)" />
      <circle cx={251.67} cy={391.57} r={13.46} fill="#fdd835" />
      <path
        d="M241.58 395.5a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.53 15.37 13.4 13.4 0 0 1-1.3-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={236.54} cy={405.59} r={15.14} fill="url(#prefix__q)" />
      <circle cx={236.54} cy={405.59} r={13.46} fill="#fdd835" />
      <path
        d="M226.44 409.52a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={135.62} cy={368.59} r={15.14} fill="url(#prefix__r)" />
      <circle cx={135.62} cy={368.59} r={13.46} fill="#fdd835" />
      <path
        d="M125.53 372.51a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={113.76} cy={425.77} r={15.14} fill="url(#prefix__s)" />
      <circle cx={113.76} cy={425.77} r={13.46} fill="#fbc02d" />
      <path
        d="M103.66 429.7a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={79.56} cy={427.46} r={15.14} fill="url(#prefix__t)" />
      <circle cx={79.56} cy={427.46} r={13.46} fill="#fbc02d" />
      <path
        d="M69.46 431.38a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.42 13.4 13.4 0 0 1-1.28-5.77z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={96.94} cy={417.92} r={15.14} fill="url(#prefix__u)" />
      <circle cx={96.94} cy={417.92} r={13.46} fill="#fbc02d" />
      <path
        d="M86.88 421.85a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={170.94} cy={401.11} r={15.14} fill="url(#prefix__v)" />
      <circle cx={170.94} cy={401.11} r={13.46} fill="#fbc02d" />
      <path
        d="M160.88 405.03a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={170.94} cy={365.22} r={15.14} fill="url(#prefix__w)" />
      <circle cx={170.94} cy={365.22} r={13.46} fill="#fbc02d" />
      <path
        d="M160.88 369.15a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={187.76} cy={393.82} r={15.14} fill="url(#prefix__x)" />
      <circle cx={187.76} cy={393.82} r={13.46} fill="#fbc02d" />
      <path
        d="M177.67 397.74a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={172.62} cy={336.63} r={15.14} fill="url(#prefix__y)" />
      <circle cx={172.62} cy={336.63} r={13.46} fill="#fbc02d" />
      <path
        d="M162.53 340.56a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={175.99} cy={351.77} r={15.14} fill="url(#prefix__z)" />
      <circle cx={175.99} cy={351.77} r={13.46} fill="#fbc02d" />
      <path
        d="M165.88 355.7a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={193.93} cy={361.86} r={15.14} fill="url(#prefix__A)" />
      <circle cx={193.93} cy={361.86} r={13.46} fill="#fbc02d" />
      <path
        d="M183.88 365.79a13.45 13.45 0 0 1 22.79-9.64 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.24-5.73z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={212.43} cy={359.06} r={15.14} fill="url(#prefix__B)" />
      <circle cx={212.43} cy={359.06} r={13.46} fill="#fbc02d" />
      <path
        d="M202.34 362.98a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={207.38} cy={374.19} r={15.14} fill="url(#prefix__C)" />
      <circle cx={207.38} cy={374.19} r={13.46} fill="#fbc02d" />
      <path
        d="M197.29 378.15a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={144.03} cy={354.57} r={15.14} fill="url(#prefix__D)" />
      <circle cx={144.03} cy={354.57} r={13.46} fill="#fbc02d" />
      <path
        d="M133.94 358.5a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={100.3} cy={400.54} r={15.14} fill="url(#prefix__E)" />
      <circle cx={100.3} cy={400.54} r={13.46} fill="#fbc02d" />
      <path
        d="M90.21 404.47a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.56 15.33 13.4 13.4 0 0 1-1.27-5.68z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={126.65} cy={375.32} r={15.14} fill="url(#prefix__F)" />
      <circle cx={126.65} cy={375.32} r={13.46} fill="#fbc02d" />
      <path
        d="M116.56 379.24a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.51 15.37 13.4 13.4 0 0 1-1.32-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={72.83} cy={418.49} r={15.14} fill="url(#prefix__G)" />
      <circle cx={72.83} cy={418.49} r={13.46} fill="#fbc02d" />
      <path
        d="M62.74 422.41a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.56 15.39 13.4 13.4 0 0 1-1.27-5.74z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={218.04} cy={406.71} r={15.14} fill="url(#prefix__H)" />
      <circle cx={218.04} cy={406.71} r={13.46} fill="#fbc02d" />
      <path
        d="M207.94 410.64a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={150.2} cy={321.49} r={15.14} fill="url(#prefix__I)" />
      <circle cx={150.2} cy={321.49} r={13.46} fill="#fbc02d" />
      <path
        d="M140.1 325.42a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.38 13.4 13.4 0 0 1-1.28-5.73z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={122.73} cy={356.25} r={15.14} fill="url(#prefix__J)" />
      <circle cx={122.73} cy={356.25} r={13.46} fill="#fbc02d" />
      <path
        d="M112.63 360.15a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.58 15.4 13.4 13.4 0 0 1-1.25-5.75z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={100.86} cy={382.04} r={15.14} fill="url(#prefix__K)" />
      <circle cx={100.86} cy={382.04} r={13.46} fill="#fbc02d" />
      <path
        d="M90.77 385.97a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={116.56} cy={410.64} r={15.14} fill="url(#prefix__L)" />
      <circle cx={116.56} cy={410.64} r={13.46} fill="#fbc02d" />
      <path
        d="M106.47 414.56a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={137.86} cy={391.57} r={15.14} fill="url(#prefix__M)" />
      <circle cx={137.86} cy={391.57} r={13.46} fill="#fbc02d" />
      <path
        d="M127.77 395.5a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={149.08} cy={410.64} r={15.14} fill="url(#prefix__N)" />
      <circle cx={149.08} cy={410.64} r={13.46} fill="#fbc02d" />
      <path
        d="M138.98 414.56a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={265.13} cy={427.46} r={15.14} fill="url(#prefix__O)" />
      <circle cx={265.13} cy={427.46} r={13.46} fill="#fbc02d" />
      <path
        d="M255.04 431.38a13.45 13.45 0 0 1 22.84-9.64 13.45 13.45 0 1 0-21.57 15.41 13.4 13.4 0 0 1-1.27-5.77z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={243.82} cy={424.09} r={15.14} fill="url(#prefix__P)" />
      <circle cx={243.82} cy={424.09} r={13.46} fill="#fbc02d" />
      <path
        d="M233.73 428.02a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={202.9} cy={425.77} r={15.14} fill="url(#prefix__Q)" />
      <circle cx={202.9} cy={425.77} r={13.46} fill="#fbc02d" />
      <circle cx={205.7} cy={410.08} r={13.46} fill="#fbc02d" />
      <path
        d="M192.8 429.7a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={157.49} cy={427.46} r={15.14} fill="url(#prefix__R)" />
      <circle cx={157.49} cy={427.46} r={13.46} fill="#fbc02d" />
      <path
        d="M147.39 431.38a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.42 13.4 13.4 0 0 1-1.28-5.77z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={153} cy={366.91} r={15.14} fill="url(#prefix__S)" />
      <circle cx={153} cy={366.91} r={13.46} fill="#fdd835" />
      <path
        d="M142.88 370.83a13.45 13.45 0 0 1 22.86-9.68 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.31-5.69z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={168.14} cy={385.97} r={15.14} fill="url(#prefix__T)" />
      <circle cx={168.14} cy={385.97} r={13.46} fill="#fdd835" />
      <path
        d="M158.04 389.89a13.45 13.45 0 0 1 22.84-9.64 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.29-5.73z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={142.91} cy={339.44} r={15.14} fill="url(#prefix__U)" />
      <circle cx={142.91} cy={339.44} r={13.46} fill="#fdd835" />
      <path
        d="M132.82 343.36a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={159.73} cy={341.12} r={15.14} fill="url(#prefix__V)" />
      <circle cx={159.73} cy={341.12} r={13.46} fill="#fdd835" />
      <path
        d="M149.64 345.04a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.59 15.38 13.4 13.4 0 0 1-1.24-5.73z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={187.76} cy={348.97} r={15.14} fill="url(#prefix__W)" />
      <circle cx={187.76} cy={348.97} r={13.46} fill="#fdd835" />
      <path
        d="M177.67 352.89a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={112.07} cy={373.63} r={15.14} fill="url(#prefix__X)" />
      <circle cx={112.07} cy={373.63} r={13.46} fill="#fdd835" />
      <path
        d="M101.98 377.56a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={122.73} cy={393.26} r={15.14} fill="url(#prefix__Y)" />
      <circle cx={122.73} cy={393.26} r={13.46} fill="#fdd835" />
      <path
        d="M112.63 397.15a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.58 15.41 13.4 13.4 0 0 1-1.25-5.76z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={130.02} cy={416.24} r={15.14} fill="url(#prefix__Z)" />
      <circle cx={130.02} cy={416.24} r={13.46} fill="#fdd835" />
      <path
        d="M119.88 420.15a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={172.62} cy={408.95} r={15.14} fill="url(#prefix__aa)" />
      <circle cx={172.62} cy={408.95} r={13.46} fill="#fdd835" />
      <path
        d="M162.53 412.88a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={216.35} cy={395.5} r={15.14} fill="url(#prefix__ab)" />
      <circle cx={216.35} cy={395.5} r={13.46} fill="#fdd835" />
      <path
        d="M206.26 399.43a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={230.37} cy={383.73} r={15.14} fill="url(#prefix__ac)" />
      <circle cx={230.37} cy={383.73} r={13.46} fill="#fdd835" />
      <circle cx={196.17} cy={382.6} r={13.46} fill="#fdd835" />
      <path
        d="M220.28 387.65a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={252.23} cy={410.64} r={15.14} fill="url(#prefix__ad)" />
      <circle cx={252.23} cy={410.64} r={13.46} fill="#fdd835" />
      <path
        d="M242.14 414.56a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={181.59} cy={429.14} r={15.14} fill="url(#prefix__ae)" />
      <circle cx={181.59} cy={429.14} r={13.46} fill="#fdd835" />
      <path
        d="M171.5 433.06a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={103.67} cy={422.41} r={15.14} fill="url(#prefix__af)" />
      <circle cx={103.67} cy={422.41} r={13.46} fill="#fdd835" />
      <path
        d="M93.57 426.34a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.52 15.37 13.4 13.4 0 0 1-1.31-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={81.8} cy={402.79} r={15.14} fill="url(#prefix__ag)" />
      <circle cx={81.8} cy={402.79} r={13.46} fill="#fdd835" />
      <path
        d="M71.71 406.71a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={110.39} cy={393.26} r={15.14} fill="url(#prefix__ah)" />
      <circle cx={110.39} cy={393.26} r={13.46} fill="#fdd835" />
      <path
        d="M100.3 397.15a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={94.69} cy={370.27} r={15.14} fill="url(#prefix__ai)" />
      <circle cx={94.69} cy={370.27} r={13.46} fill="#fdd835" />
      <path
        d="M84.6 374.15a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.42 13.4 13.4 0 0 1-1.28-5.77z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={108.15} cy={348.97} r={15.14} fill="url(#prefix__aj)" />
      <circle cx={108.15} cy={348.97} r={13.46} fill="#fdd835" />
      <path
        d="M98.06 352.89a13.45 13.45 0 0 1 22.82-9.64 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.27-5.73z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={225.32} cy={427.46} r={15.14} fill="url(#prefix__ak)" />
      <circle cx={225.32} cy={427.46} r={13.46} fill="#fdd835" />
      <path
        d="M215.23 431.38a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.42 13.4 13.4 0 0 1-1.28-5.77z"
        fill="#fff"
        opacity={0.2}
      />
      <path fill="url(#prefix__al)" d="M246.22 677.5H78.82L36.39 427.45h252.85L246.22 677.5z" />
      <path fill="#fff" d="M243.82 674.14H82.36L41.43 431.38h243.88l-41.49 242.76z" />
      <path
        fill={primaryColor}
        d="M41.43 431.38h41.49l39.25 242.76H81.8L41.43 431.38zM285.31 431.38h-42.05L202.9 674.14h40.92l41.49-242.76zM142.35 431.38h40.37v242.76h-40.37z"
      />
      <circle cx={86.85} cy={385.97} r={15.14} fill="url(#prefix__am)" />
      <circle cx={86.85} cy={385.97} r={13.46} fill="#fbc02d" />
      <path
        d="M76.75 389.89a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={124.97} cy={343.36} r={15.14} fill="url(#prefix__an)" />
      <circle cx={124.97} cy={343.36} r={13.46} fill="#fbc02d" />
      <path
        d="M114.88 347.29a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={71.71} cy={408.95} r={15.14} fill="url(#prefix__ao)" />
      <circle cx={71.71} cy={408.95} r={13.46} fill="#fbc02d" />
      <path
        d="M61.61 412.88a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.56 15.37 13.4 13.4 0 0 1-1.27-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={53.57} cy={306.12} r={15.14} fill="url(#prefix__ap)" />
      <circle cx={53.57} cy={306.12} r={13.46} fill="#fbc02d" />
      <path
        d="M43.48 310.05a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <path
        d="M1035.73 373.86l-9.1-21.87-96.45 39.61a11.91 11.91 0 0 0-7.38 11v104.23l27.87 3.24v-99.43z"
        transform="translate(-152.12 -100.85)"
        fill="url(#prefix__aq)"
        data-name="<Group>"
      />
      <path
        data-name="<Clipping Path>"
        d="M879 272.58l-6.77-16.49-90.27 37.06a11.15 11.15 0 0 0-6.91 10.31v97.53h17.83v-93.03z"
        fill="#f2f2f2"
      />
      <g clipPath="url(#prefix__ar)" fill={primaryColor}>
        <path d="M847.96 238.17h19.44v61.57h-19.44zM817.18 251.13h19.44v61.57h-19.44zM806.64 303.79l-13.77 4.05-5.67-65.62h19.44v61.57z" />
        <path d="M756.41 330.52v-19.44h61.57v19.44zM756.42 357.26v-19.44h61.57v19.44zM756.41 384v-19.44h61.57V384z" />
      </g>
      <path fill="url(#prefix__as)" d="M895.76 384H679.45v34.12h14.77l30.07 276.18h129.27l26.73-277.8h15.47V384z" />
      <path fill={primaryColor} d="M847.96 688.63H728.87L699.7 396.96h174.19l-25.93 291.67z" />
      <path fill={primaryColor} d="M687.55 392.1h199.3v19.44h-199.3z" />
      <circle cx={787.2} cy={526.59} r={49.42} fill="url(#prefix__b)" />
      <circle cx={787.2} cy={526.59} r={45.37} fill="#fff" />
      <circle cx={117.26} cy={219.38} r={15.14} fill="url(#prefix__at)" />
      <circle cx={117.26} cy={219.38} r={13.46} fill="#fbc02d" />
      <path
        d="M107.16 223.3a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={172.16} cy={153.49} r={15.14} fill="url(#prefix__au)" />
      <circle cx={172.16} cy={153.49} r={13.46} fill="#fdd835" />
      <path
        d="M162.07 157.42a13.45 13.45 0 0 1 22.81-9.65 13.45 13.45 0 1 0-21.54 15.38 13.4 13.4 0 0 1-1.27-5.73z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={278.67} cy={295.14} r={15.14} fill="url(#prefix__av)" />
      <circle cx={278.67} cy={295.14} r={13.46} fill="#fdd835" />
      <path
        d="M268.58 299.07a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.53 15.37 13.4 13.4 0 0 1-1.3-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={363.22} cy={402.75} r={15.14} fill="url(#prefix__aw)" />
      <circle cx={363.22} cy={402.75} r={13.46} fill="#fdd835" />
      <path
        d="M353.13 406.68a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={49.18} cy={665.19} r={15.14} fill="url(#prefix__ax)" />
      <circle cx={49.18} cy={665.19} r={13.46} fill="#fbc02d" />
      <path
        d="M39.08 669.15a13.45 13.45 0 0 1 22.8-9.68 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.25-5.69z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={28.31} cy={637.73} r={15.14} fill="url(#prefix__ay)" />
      <circle cx={28.31} cy={637.73} r={13.46} fill="#fdd835" />
      <path
        d="M18.22 641.66a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={15.14} cy={489.5} r={15.14} fill="url(#prefix__az)" />
      <circle cx={15.14} cy={489.5} r={13.46} fill="#fbc02d" />
      <path
        d="M5.04 493.42a13.45 13.45 0 0 1 22.84-9.64 13.45 13.45 0 1 0-21.56 15.37 13.4 13.4 0 0 1-1.28-5.73z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={300.63} cy={653.11} r={15.14} fill="url(#prefix__aA)" />
      <circle cx={300.63} cy={653.11} r={13.46} fill="#fbc02d" />
      <path
        d="M290.54 657.03a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={328.08} cy={635.54} r={15.14} fill="url(#prefix__aB)" />
      <circle cx={328.08} cy={635.54} r={13.46} fill="#fbc02d" />
      <path
        d="M317.99 639.47a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.33 13.4 13.4 0 0 1-1.28-5.68z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={331.38} cy={656.4} r={15.14} fill="url(#prefix__aC)" />
      <circle cx={331.38} cy={656.4} r={13.46} fill="#fdd835" />
      <path
        d="M321.28 660.33a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={274.28} cy={656.4} r={15.14} fill="url(#prefix__aD)" />
      <circle cx={274.28} cy={656.4} r={13.46} fill="#fdd835" />
      <path
        d="M264.18 660.33a13.45 13.45 0 0 1 22.83-9.65 13.45 13.45 0 1 0-21.55 15.37 13.4 13.4 0 0 1-1.28-5.72z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={759.61} cy={71.37} r={71.37} fill="url(#prefix__aE)" />
      <circle cx={759.61} cy={71.37} r={66.98} fill="#3ad29f" />
      <path fill="url(#prefix__aF)" d="M803.96 71.37l-67.04 32.94V38.43l67.04 32.94z" />
      <path fill="#fff" d="M799.93 71.37l-58.99 28.99V42.38l58.99 28.99z" />
      <path
        d="M698.11 79.06A67 67 0 0 1 816.73 36.4a67 67 0 1 0-108.77 77.64 66.66 66.66 0 0 1-9.85-34.98z"
        fill="#fff"
        opacity={0.2}
      />
    </svg>
  );
};

UndrawMovieNight.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawMovieNight;
