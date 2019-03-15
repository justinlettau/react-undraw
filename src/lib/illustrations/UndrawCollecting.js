import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCollecting = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 734 764.5" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={366.37} y1={536.32} x2={608.5} y2={536.32} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={124.23} y1={536.32} x2={366.37} y2={536.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={366.37} y1={285.31} x2={734} y2={285.31} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={0} y1={285.31} x2={366.37} y2={285.31} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={276.64} y1={421.19} x2={276.64} y2={255.38} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={188.97} y1={337.56} x2={364.55} y2={337.56} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={202.5} y1={296.63} x2={232.11} y2={296.63} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={240.99} y1={284.79} x2={358.7} y2={284.79} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={240.99} y1={293.67} x2={358.7} y2={293.67} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={199.54} y1={325.92} x2={358.7} y2={325.92} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={199.54} y1={334.8} x2={358.7} y2={334.8} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={199.54} y1={346.64} x2={358.7} y2={346.64} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={199.54} y1={355.53} x2={291.33} y2={355.53} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={199.54} y1={367.34} x2={358.7} y2={367.34} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={199.54} y1={376.22} x2={358.7} y2={376.22} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={199.54} y1={388.07} x2={358.7} y2={388.07} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__q" x1={199.54} y1={396.95} x2={291.33} y2={396.95} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__r" x1={303.76} y1={459.51} x2={303.76} y2={293.69} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__s" x1={216.09} y1={375.88} x2={391.67} y2={375.88} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__t" x1={229.62} y1={334.95} x2={259.23} y2={334.95} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__u" x1={268.12} y1={323.11} x2={385.83} y2={323.11} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__v" x1={268.12} y1={331.99} x2={385.83} y2={331.99} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__w" x1={226.66} y1={364.23} x2={385.83} y2={364.23} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__x" x1={226.66} y1={373.12} x2={385.83} y2={373.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__y" x1={226.66} y1={384.96} x2={385.83} y2={384.96} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__z" x1={226.66} y1={393.84} x2={318.45} y2={393.84} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__A" x1={226.66} y1={405.66} x2={385.83} y2={405.66} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__B" x1={226.66} y1={414.54} x2={385.83} y2={414.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__C" x1={226.66} y1={426.39} x2={385.83} y2={426.39} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__D" x1={226.66} y1={435.27} x2={318.45} y2={435.27} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__E" x1={396.27} y1={498.11} x2={396.27} y2={315.15} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__F" x1={323.2} y1={406.08} x2={470.82} y2={406.08} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__G" x1={630.01} y1={435.54} x2={630.01} y2={409.41} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__H" x1={379.34} y1={356.75} x2={414.68} y2={356.75} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__I" x1={389.65} y1={345.34} x2={404.37} y2={345.34} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__J" x1={345.29} y1={397.51} x2={449.1} y2={397.51} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__K" x1={345.29} y1={426.59} x2={449.1} y2={426.59} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__L" x1={345.29} y1={434.32} x2={449.1} y2={434.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__M" x1={345.29} y1={418.86} x2={389.1} y2={418.86} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__N" x1={416.34} y1={418.86} x2={449.1} y2={418.86} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__O" x1={381.73} y1={452.36} x2={414.5} y2={452.36} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__P" x1={124.23} y1={565.47} x2={366.37} y2={565.47} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__Q" x1={366.37} y1={565.47} x2={608.5} y2={565.47} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__R" x1={512.15} y1={631.39} x2={608.5} y2={631.39} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__S" x1={517.49} y1={407.03} x2={517.49} y2={338.42} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__T" x1={482.9} y1={372.87} x2={552.07} y2={372.87} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__U" x1={750.49} y1={435.86} x2={750.49} y2={415.97} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__V" x1={504.04} y1={359.71} x2={530.93} y2={359.71} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__W" x1={511.89} y1={351.03} x2={523.09} y2={351.03} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__X" x1={505.58} y1={380.71} x2={530.51} y2={380.71} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__Y" x1={496.2} y1={386.87} x2={538.77} y2={386.87} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__Z" x1={358.76} y1={204.69} x2={358.76} y2={128.69} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aa" x1={313.57} y1={166.78} x2={403.76} y2={166.78} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ab" x1={313.57} y1={138.3} x2={403.76} y2={138.3} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ac" x1={320.76} y1={157.17} x2={396.57} y2={157.17} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ad" x1={320.76} y1={170.73} x2={376.09} y2={170.73} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ae" x1={320.76} y1={176.3} x2={356.69} y2={176.3} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__af" x1={320.76} y1={181.87} x2={368.19} y2={181.87} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ag" x1={320.76} y1={187.44} x2={376.09} y2={187.44} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ah" x1={320.76} y1={193.01} x2={339.26} y2={193.01} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ai" x1={505.86} y1={279.95} x2={505.86} y2={185.76} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aj" x1={449.86} y1={232.96} x2={561.64} y2={232.96} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ak" x1={449.86} y1={197.67} x2={561.64} y2={197.67} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__al" x1={458.76} y1={221.05} x2={552.73} y2={221.05} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__am" x1={458.76} y1={237.86} x2={527.35} y2={237.86} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__an" x1={458.76} y1={244.77} x2={503.3} y2={244.77} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ao" x1={458.76} y1={251.67} x2={517.55} y2={251.67} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ap" x1={458.76} y1={258.57} x2={527.35} y2={258.57} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aq" x1={458.76} y1={265.48} x2={481.7} y2={265.48} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ar" x1={463.66} y1={220.94} x2={490.38} y2={220.94} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__as" x1={121.07} y1={472.93} x2={365.73} y2={472.93} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__at" x1={365.73} y1={472.93} x2={610.4} y2={472.93} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__au" x1={0} y1={448.21} x2={366.37} y2={448.21} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__av" x1={366.37} y1={448.21} x2={734} y2={448.21} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aw" x1={279.92} y1={417.64} x2={279.92} y2={253.24} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ax" x1={306.82} y1={455.63} x2={306.82} y2={291.23} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ay" x1={398.54} y1={493.9} x2={398.54} y2={312.51} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__az" x1={632.27} y1={432.45} x2={632.27} y2={406.53} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aA" x1={518.71} y1={403.6} x2={518.71} y2={335.58} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aB" x1={751.71} y1={432.76} x2={751.71} y2={413.05} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aC" x1={450.84} y1={68.02} x2={450.84} y2={0} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aD" x1={683.84} y1={97.18} x2={683.84} y2={77.47} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aE" x1={361.34} y1={202.99} x2={361.34} y2={127.64} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aF" x1={507.18} y1={277.61} x2={507.18} y2={184.22} xlinkHref="#prefix__a" />
      </defs>
      <g opacity={0.7}>
        <path fill="url(#prefix__a)" d="M608.5 366.44l-242.13-58.31V764.5l242.13-63.38V366.44z" />
        <path fill="url(#prefix__a)" d="M608.5 366.44l-242.13-58.31V764.5l242.13-63.38V366.44z" opacity={0.1} />
        <path fill="url(#prefix__b)" d="M124.23 366.44l242.14-58.31V764.5l-242.14-62.12V366.44z" />
        <path fill="url(#prefix__b)" d="M124.23 366.44l242.14-58.31V764.5l-242.14-62.12V366.44z" opacity={0.17} />
        <path fill="url(#prefix__c)" d="M366.37 308.13l125.5-103.95L734 266.3 608.5 366.44l-242.13-58.31z" />
        <path fill="url(#prefix__d)" d="M0 267.56l124.23 98.88 242.14-58.31L243.4 204.18 0 267.56z" />
        <path fill="url(#prefix__d)" d="M0 267.56l124.23 98.88 242.14-58.31L243.4 204.18 0 267.56z" opacity={0.05} />
        <rect
          x={186.78}
          y={255.38}
          width={179.72}
          height={165.82}
          rx={4.5}
          ry={4.5}
          fill="url(#prefix__e)"
          opacity={0.5}
        />
        <rect x={188.97} y={256.66} width={175.58} height={161.8} rx={4.5} ry={4.5} fill="url(#prefix__f)" />
        <rect x={202.5} y={283.31} width={29.61} height={26.65} rx={4.5} ry={4.5} fill="url(#prefix__g)" />
        <rect x={240.99} y={283.31} width={117.71} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__h)" />
        <rect x={240.99} y={292.19} width={117.71} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__i)" />
        <rect x={199.54} y={324.44} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__j)" />
        <rect x={199.54} y={333.32} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__k)" />
        <rect x={199.54} y={345.16} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__l)" />
        <rect x={199.54} y={354.05} width={91.79} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__m)" />
        <rect x={199.54} y={365.86} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__n)" />
        <rect x={199.54} y={374.74} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__o)" />
        <rect x={199.54} y={386.59} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__p)" />
        <rect x={199.54} y={395.47} width={91.79} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__q)" />
        <rect
          x={213.9}
          y={293.69}
          width={179.72}
          height={165.82}
          rx={4.5}
          ry={4.5}
          fill="url(#prefix__r)"
          opacity={0.5}
        />
        <rect x={216.09} y={294.98} width={175.58} height={161.8} rx={4.5} ry={4.5} fill="url(#prefix__s)" />
        <rect x={229.62} y={321.63} width={29.61} height={26.65} rx={4.5} ry={4.5} fill="url(#prefix__t)" />
        <rect x={268.12} y={321.63} width={117.71} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__u)" />
        <rect x={268.12} y={330.51} width={117.71} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__v)" />
        <rect x={226.66} y={362.75} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__w)" />
        <rect x={226.66} y={371.64} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__x)" />
        <rect x={226.66} y={383.48} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__y)" />
        <rect x={226.66} y={392.36} width={91.79} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__z)" />
        <rect x={226.66} y={404.18} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__A)" />
        <rect x={226.66} y={413.06} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__B)" />
        <rect x={226.66} y={424.91} width={159.16} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__C)" />
        <rect x={226.66} y={433.79} width={91.79} height={2.96} rx={0.8} ry={0.8} fill="url(#prefix__D)" />
        <path fill="url(#prefix__E)" d="M318.41 315.15h155.72v182.96H318.41z" opacity={0.5} />
        <path fill="url(#prefix__F)" d="M323.2 318.1h147.62v175.97H323.2z" />
        <path
          d="M638.05 413.83v-4.42H622v4.42h-11.29v21.71h38.6v-21.71zM624 411h12v2.81h-12z"
          transform="translate(-233 -67.75)"
          fill="url(#prefix__G)"
          opacity={0.5}
        />
        <path fill="url(#prefix__H)" d="M379.34 346.81h35.34v19.88h-35.34z" />
        <path fill="url(#prefix__I)" d="M389.65 342.76v5.16h1.84v-3.68h11.04v3.68h1.84v-5.16h-14.72z" />
        <path fill="url(#prefix__J)" d="M345.29 395.3H449.1v4.42H345.29z" />
        <path fill="url(#prefix__K)" d="M345.29 424.38H449.1v4.42H345.29z" />
        <path fill="url(#prefix__L)" d="M345.29 432.11H449.1v4.42H345.29z" />
        <path fill="url(#prefix__M)" d="M345.29 416.65h43.81v4.42h-43.81z" />
        <path fill="url(#prefix__N)" d="M416.34 416.65h32.76v4.42h-32.76z" opacity={0.6} />
        <path fill="url(#prefix__O)" d="M381.73 450.15h32.76v4.42h-32.76z" />
        <path fill="url(#prefix__P)" d="M124.23 366.44v335.94l242.14 62.12V431.1l-242.14-64.66z" />
        <path fill="url(#prefix__Q)" d="M608.5 701.12L366.37 764.5V431.1l242.13-64.66v334.68z" />
        <path fill="url(#prefix__Q)" d="M608.5 701.12L366.37 764.5V431.1l242.13-64.66v334.68z" opacity={0.07} />
        <path fill="url(#prefix__R)" d="M512.15 589.56v110.29l96.35-26.62V562.94l-96.35 26.62z" opacity={0.07} />
        <path fill="url(#prefix__S)" d="M481.78 338.42h71.41v68.61h-71.41z" />
        <path fill="url(#prefix__T)" d="M482.9 340.1h69.17v65.53H482.9z" />
        <path
          d="M756.6 419.34V416h-12.23v3.36h-8.57v16.52h29.37v-16.54zm-10.7-2.14h9.18v2.14h-9.18z"
          transform="translate(-233 -67.75)"
          fill="url(#prefix__U)"
          opacity={0.5}
        />
        <path fill="url(#prefix__V)" d="M504.04 352.15h26.88v15.12h-26.88z" opacity={0.6} />
        <path fill="url(#prefix__W)" d="M511.88 349.06v3.93h1.41v-2.8h8.4v2.8h1.4v-3.93h-11.21z" opacity={0.6} />
        <path fill="url(#prefix__X)" d="M505.58 379.03h24.92v3.36h-24.92z" opacity={0.6} />
        <path fill="url(#prefix__Y)" d="M496.2 385.19h42.57v3.36H496.2z" />
        <path fill="url(#prefix__Z)" d="M312.49 128.69h92.52v76h-92.52z" opacity={0.5} />
        <path fill="url(#prefix__aa)" d="M313.57 130.13h90.19v73.3h-90.19z" />
        <path fill="url(#prefix__ab)" d="M313.57 130.13h90.19v16.35h-90.19z" />
        <path fill="url(#prefix__ab)" d="M313.57 130.13h90.19v16.35h-90.19z" opacity={0.1} />
        <path fill="url(#prefix__ac)" d="M320.76 152.41h75.82v9.52h-75.82z" />
        <path fill="url(#prefix__ad)" d="M320.76 169.12h55.34v3.23h-55.34z" />
        <path fill="url(#prefix__ae)" d="M320.76 174.69h35.93v3.23h-35.93z" />
        <path fill="url(#prefix__af)" d="M320.76 180.26h47.43v3.23h-47.43z" />
        <path fill="url(#prefix__ag)" d="M320.76 185.82h55.34v3.23h-55.34z" />
        <path fill="url(#prefix__ah)" d="M320.76 191.39h18.5v3.23h-18.5z" />
        <path fill="url(#prefix__ai)" d="M448.52 185.76H563.2v94.19H448.52z" opacity={0.5} />
        <path fill="url(#prefix__aj)" d="M449.86 187.54h111.79v90.85H449.86z" />
        <path fill="url(#prefix__ak)" d="M449.86 187.54h111.79v20.26H449.86z" />
        <path fill="url(#prefix__al)" d="M458.76 215.15h93.97v11.8h-93.97z" />
        <path fill="url(#prefix__am)" d="M458.76 235.86h68.59v4.01h-68.59z" />
        <path fill="url(#prefix__an)" d="M458.76 242.76h44.54v4.01h-44.54z" />
        <path fill="url(#prefix__ao)" d="M458.76 249.67h58.79v4.01h-58.79z" />
        <path fill="url(#prefix__ap)" d="M458.76 256.57h68.59v4.01h-68.59z" />
        <path fill="url(#prefix__aq)" d="M458.76 263.47h22.94v4.01h-22.94z" />
        <path fill="url(#prefix__ar)" d="M463.66 219.16h26.72v3.56h-26.72z" />
        <path
          fill="url(#prefix__as)"
          d="M121.07 540.75l135.64 34.23 109.02-88.74v-54.51L123.6 370.88l-2.53 169.87z"
          opacity={0.1}
        />
        <path
          fill="url(#prefix__at)"
          d="M610.4 540.75l-135.65 34.23-109.02-88.74v-54.51l242.13-60.85 2.54 169.87z"
          opacity={0.1}
        />
        <path fill="url(#prefix__au)" d="M124.23 366.44L0 469.13l242.13 60.85 124.24-98.88-242.14-64.66z" />
        <path fill="url(#prefix__av)" d="M608.5 366.44L734 469.13l-240.86 60.85-126.77-98.88 242.13-64.66z" />
        <path
          fill="url(#prefix__av)"
          d="M608.5 366.44L734 469.13l-240.86 60.85-126.77-98.88 242.13-64.66z"
          opacity={0.07}
        />
      </g>
      <path fill="#535461" d="M608.94 363.36l-240.06-57.82v452.47l240.06-62.84V363.36z" />
      <path opacity={0.1} d="M608.94 363.36l-240.06-57.82v452.47l240.06-62.84V363.36z" />
      <path fill="#535461" d="M128.83 363.36l240.05-57.82v452.47l-240.05-61.59V363.36z" />
      <path opacity={0.17} d="M128.83 361.36l240.05-57.82v454.47l-240.05-61.59V361.36z" />
      <path fill="#535461" d="M366.88 307.54l126.43-105.06 240.06 61.59-126.43 101.29-240.06-57.82z" />
      <path fill="#535461" d="M7.66 267.32l123.17 98.04 240.05-57.82-121.91-103.06L7.66 267.32z" />
      <path opacity={0.05} d="M5.66 265.32l126.17 100.04 240.05-57.82-124.91-105.06L5.66 265.32z" />
      <rect
        x={190.83}
        y={253.24}
        width={178.18}
        height={164.4}
        rx={4.5}
        ry={4.5}
        fill="url(#prefix__aw)"
        opacity={0.5}
      />
      <rect x={193.01} y={254.52} width={174.07} height={160.41} rx={4.5} ry={4.5} fill="#f5f5f5" />
      <rect x={206.42} y={280.94} width={29.36} height={26.42} rx={4.5} ry={4.5} fill={primaryColor} />
      <rect x={244.59} y={280.94} width={116.7} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={244.59} y={289.74} width={116.7} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={203.49} y={321.71} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={203.49} y={330.52} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={203.49} y={342.26} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={203.49} y={351.07} width={91.01} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={203.49} y={362.78} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={203.49} y={371.59} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={203.49} y={383.33} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={203.49} y={392.14} width={91.01} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect
        x={217.72}
        y={291.23}
        width={178.18}
        height={164.4}
        rx={4.5}
        ry={4.5}
        fill="url(#prefix__ax)"
        opacity={0.5}
      />
      <rect x={219.9} y={292.51} width={174.07} height={160.41} rx={4.5} ry={4.5} fill="#fff" />
      <rect x={233.31} y={318.93} width={29.36} height={26.42} rx={4.5} ry={4.5} fill={primaryColor} />
      <rect x={271.48} y={318.93} width={116.7} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={271.48} y={327.73} width={116.7} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={230.38} y={359.7} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={230.38} y={368.51} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={230.38} y={380.25} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={230.38} y={389.06} width={91.01} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={230.38} y={400.77} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={230.38} y={409.58} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={230.38} y={421.32} width={157.8} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={230.38} y={430.13} width={91.01} height={2.94} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <path fill="url(#prefix__ay)" d="M321.34 312.51h154.39V493.9H321.34z" opacity={0.5} />
      <path fill="#fff" d="M326.09 315.43h146.36v174.46H326.09z" />
      <path
        d="M640.24 410.92v-4.39h-15.95v4.39h-11.16v21.53h38.27v-21.53zm-14-2.79h12v2.79h-12z"
        transform="translate(-233 -67.75)"
        fill="url(#prefix__az)"
        opacity={0.5}
      />
      <path fill={primaryColor} d="M381.75 343.9h35.04v19.71h-35.04z" />
      <path fill={primaryColor} d="M391.97 339.88v5.11h1.82v-3.65h10.95v3.65h1.83v-5.11h-14.6z" />
      <path
        fill="#e0e0e0"
        d="M347.99 391.97h102.92v4.38H347.99zM347.99 420.8h102.92v4.38H347.99zM347.99 428.47h102.92v4.38H347.99zM347.99 413.14h43.43v4.38h-43.43z"
      />
      <path fill="#3ad29f" opacity={0.6} d="M418.43 413.14h32.48v4.38h-32.48z" />
      <path fill={primaryColor} d="M384.12 446.35h32.48v4.38h-32.48z" />
      <path fill="#535461" d="M128.83 363.36v333.06l240.05 61.59 3.24-330.55-243.29-64.1z" />
      <path fill="#535461" d="M608.94 695.17l-240.06 62.84V427.46l240.06-64.1v331.81z" />
      <path opacity={0.07} d="M608.94 695.17l-240.06 62.84V427.46l240.06-64.1v331.81z" />
      <path opacity={0.07} d="M513.42 584.57v109.34l95.52-26.39V558.17l-95.52 26.4z" />
      <path fill="url(#prefix__aA)" d="M483.31 335.58h70.8v68.02h-70.8z" />
      <path fill="#f5f5f5" d="M484.42 337.24H553v64.97h-68.58z" />
      <path
        d="M757.78 416.38V413h-12.13v3.34h-8.49v16.38h29.11v-16.34zm-10.61-2.12h9.1v2.12h-9.1z"
        transform="translate(-233 -67.75)"
        fill="url(#prefix__aB)"
        opacity={0.5}
      />
      <path fill={primaryColor} opacity={0.6} d="M505.38 349.18h26.65v14.99h-26.65z" />
      <path
        fill={primaryColor}
        opacity={0.6}
        d="M513.16 346.13v3.89h1.39v-2.78h8.33v2.78h1.38v-3.89h-11.1zM506.91 375.84h24.71v3.33h-24.71z"
      />
      <path fill="#bdbdbd" d="M497.61 381.95h42.2v3.33h-42.2z" />
      <path fill="url(#prefix__aC)" d="M415.44 0h70.8v68.02h-70.8z" />
      <path fill="#f5f5f5" d="M416.55 1.67h68.58v64.97h-68.58z" />
      <path
        d="M689.91 80.8v-3.33h-12.13v3.33h-8.49v16.38h29.11V80.8zm-10.61-2.12h9.1v2.12h-9.1z"
        transform="translate(-233 -67.75)"
        fill="url(#prefix__aD)"
        opacity={0.5}
      />
      <path fill={primaryColor} opacity={0.6} d="M437.51 13.6h26.65v14.99h-26.65z" />
      <path
        fill={primaryColor}
        opacity={0.6}
        d="M445.29 10.55v3.89h1.39v-2.78h8.33v2.78h1.38v-3.89h-11.1zM439.04 40.26h24.71v3.33h-24.71z"
      />
      <path fill="#bdbdbd" d="M429.74 46.37h42.2v3.33h-42.2z" />
      <path fill="url(#prefix__aE)" d="M315.47 127.64h91.73v75.35h-91.73z" opacity={0.5} />
      <path fill="#f2f2f2" d="M316.54 129.07h89.42v72.67h-89.42z" />
      <path fill={primaryColor} d="M316.54 129.07h89.42v16.21h-89.42z" />
      <path opacity={0.1} d="M316.54 129.07h89.42v16.21h-89.42z" />
      <path
        fill="#e0e0e0"
        d="M323.67 151.16h75.17v9.44h-75.17zM323.67 167.72h54.86v3.21h-54.86zM323.67 173.24h35.62v3.21h-35.62zM323.67 178.76h47.02v3.21h-47.02zM323.67 184.29h54.86v3.21h-54.86zM323.67 189.81h18.35v3.21h-18.35z"
      />
      <path fill="url(#prefix__aF)" d="M450.33 184.22h113.7v93.39h-113.7z" opacity={0.5} />
      <path fill="#fff" d="M451.66 185.98h110.83v90.08H451.66z" />
      <path fill={primaryColor} d="M451.66 185.98h110.83v20.09H451.66z" />
      <path fill="#f5f5f5" d="M460.49 213.36h93.17v11.7h-93.17z" />
      <path
        fill="#e0e0e0"
        d="M460.49 233.89h68v3.97h-68zM460.49 240.74h44.16v3.97h-44.16zM460.49 247.58h58.28v3.97h-58.28zM460.49 254.43h68v3.97h-68zM460.49 261.27h22.74v3.97h-22.74z"
      />
      <path fill="#69f0ae" d="M465.35 217.33h26.49v3.53h-26.49z" />
      <path
        opacity={0.1}
        d="M125.69 536.18l134.48 33.93 108.09-87.98v-54.04L128.2 367.76l-2.51 168.42zM610.83 536.18l-134.48 33.93-108.09-87.98v-54.04l240.06-60.33 2.51 168.42z"
      />
      <path
        fill="#535461"
        d="M128.83 363.36L5.66 465.16l240.05 60.33 123.17-98.03-240.05-64.1zM608.94 363.36l124.43 101.8-238.8 60.33-125.69-98.03 240.06-64.1z"
      />
      <path opacity={0.07} d="M608.94 363.36l124.43 101.8-238.8 60.33-125.69-98.03 240.06-64.1z" />
    </svg>
  );
};

UndrawCollecting.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCollecting;
