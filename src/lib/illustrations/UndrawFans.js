import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawFans = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 877.58 792" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={375.25} y1={786.7} x2={375.25} y2={259.26} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={418.66} y1={485.68} x2={535.12} y2={485.68} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={579.88} y1={511.2} x2={696.33} y2={511.2} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={579.88} y1={449.17} x2={696.33} y2={449.17} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={624.18} y1={368.8} x2={652.03} y2={368.8} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={418.66} y1={640.11} x2={460.44} y2={640.11} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={493.35} y1={640.11} x2={535.12} y2={640.11} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={624.18} y1={358.04} x2={652.03} y2={358.04} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={416.13} y1={241.38} x2={537.65} y2={241.38} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={418.66} y1={255.3} x2={535.12} y2={255.3} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={593.77} y1={269.19} x2={695.53} y2={269.19} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={593.77} y1={267.92} x2={695.53} y2={267.92} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={529.42} y1={255.3} x2={539.55} y2={255.3} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={414.23} y1={255.3} x2={424.36} y2={255.3} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={618.66} y1={180.62} x2={646.51} y2={180.62} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={581.14} y1={342.85} x2={695.58} y2={342.85} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__q" x1={669.05} y1={328.29} x2={798.86} y2={328.29} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__r" x1={307.28} y1={180.62} x2={335.12} y2={180.62} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__s" x1={477.35} y1={328.29} x2={607.15} y2={328.29} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__t" x1={582.41} y1={835.87} x2={619.12} y2={835.87} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__u" x1={657.09} y1={835.87} x2={693.8} y2={835.87} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__v" x1={349.23} y1={478.55} x2={349.23} y2={470.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__w" x1={360.8} y1={478.55} x2={360.8} y2={470.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__x" x1={327.88} y1={478.55} x2={327.88} y2={470.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__y" x1={343} y1={468.46} x2={343} y2={460.46} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__z" x1={366.58} y1={470.09} x2={366.58} y2={462.09} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__A" x1={360.8} y1={466.54} x2={360.8} y2={458.53} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__B" x1={363.61} y1={474.99} x2={363.61} y2={466.98} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__C" x1={353.23} y1={468.46} x2={353.23} y2={460.46} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__D" x1={352.79} y1={457.2} x2={352.79} y2={449.19} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__E" x1={372.51} y1={462.98} x2={372.51} y2={454.97} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__F" x1={370.58} y1={470.54} x2={370.58} y2={462.53} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__G" x1={379.48} y1={469.06} x2={379.48} y2={461.05} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__H" x1={375.47} y1={472.76} x2={375.47} y2={464.76} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__I" x1={348.79} y1={462.98} x2={348.79} y2={454.97} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__J" x1={343} y1={478.1} x2={343} y2={470.09} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__K" x1={333.96} y1={478.55} x2={333.96} y2={470.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__L" x1={338.56} y1={476.03} x2={338.56} y2={468.02} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__M" x1={358.13} y1={471.58} x2={358.13} y2={463.57} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__N" x1={358.13} y1={462.09} x2={358.13} y2={454.08} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__O" x1={362.57} y1={469.65} x2={362.57} y2={461.64} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__P" x1={358.57} y1={454.53} x2={358.57} y2={446.52} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__Q" x1={359.46} y1={458.53} x2={359.46} y2={450.52} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__R" x1={364.21} y1={461.2} x2={364.21} y2={453.19} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__S" x1={369.1} y1={460.46} x2={369.1} y2={452.45} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__T" x1={367.76} y1={464.46} x2={367.76} y2={456.45} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__U" x1={351.01} y1={459.27} x2={351.01} y2={451.27} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__V" x1={339.45} y1={471.43} x2={339.45} y2={463.42} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__W" x1={346.41} y1={464.76} x2={346.41} y2={456.75} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__X" x1={332.18} y1={476.17} x2={332.18} y2={468.17} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__Y" x1={370.58} y1={473.06} x2={370.58} y2={465.05} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__Z" x1={352.64} y1={450.52} x2={352.64} y2={442.52} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aa" x1={345.38} y1={459.72} x2={345.38} y2={451.71} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ab" x1={339.59} y1={466.54} x2={339.59} y2={458.53} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ac" x1={343.75} y1={474.1} x2={343.75} y2={466.09} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ad" x1={349.38} y1={469.06} x2={349.38} y2={461.05} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ae" x1={352.34} y1={474.1} x2={352.34} y2={466.09} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__af" x1={383.03} y1={478.55} x2={383.03} y2={470.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ag" x1={377.4} y1={477.66} x2={377.4} y2={469.65} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ah" x1={366.58} y1={478.1} x2={366.58} y2={470.09} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ai" x1={354.57} y1={478.55} x2={354.57} y2={470.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aj" x1={353.38} y1={462.53} x2={353.38} y2={454.53} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ak" x1={357.39} y1={467.57} x2={357.39} y2={459.57} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__al" x1={350.71} y1={455.27} x2={350.71} y2={447.26} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__am" x1={355.16} y1={455.71} x2={355.16} y2={447.71} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__an" x1={362.57} y1={457.79} x2={362.57} y2={449.78} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ao" x1={342.56} y1={464.31} x2={342.56} y2={456.31} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ap" x1={345.38} y1={469.5} x2={345.38} y2={461.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aq" x1={347.3} y1={475.58} x2={347.3} y2={467.57} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ar" x1={358.57} y1={473.65} x2={358.57} y2={465.65} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__as" x1={370.14} y1={470.09} x2={370.14} y2={462.09} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__at" x1={373.84} y1={466.98} x2={373.84} y2={458.98} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__au" x1={379.62} y1={474.1} x2={379.62} y2={466.09} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__av" x1={360.94} y1={478.99} x2={360.94} y2={470.98} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aw" x1={340.34} y1={477.21} x2={340.34} y2={469.21} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ax" x1={334.55} y1={472.02} x2={334.55} y2={464.02} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__ay" x1={342.11} y1={469.5} x2={342.11} y2={461.5} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__az" x1={337.96} y1={463.42} x2={337.96} y2={455.42} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aA" x1={341.52} y1={457.79} x2={341.52} y2={449.78} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aB" x1={372.51} y1={478.55} x2={372.51} y2={470.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aC" x1={355.98} y1={540.67} x2={355.98} y2={474.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aD" x1={335.89} y1={467.57} x2={335.89} y2={459.57} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aE" x1={345.97} y1={456.31} x2={345.97} y2={448.3} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aF" x1={331.88} y1={473.65} x2={331.88} y2={465.65} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aG" x1={327.09} y1={446.46} x2={327.09} y2={438.45} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aH" x1={343.93} y1={423.52} x2={343.93} y2={415.51} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aI" x1={358.45} y1={406.1} x2={358.45} y2={398.09} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aJ" x1={386.62} y1={443.56} x2={386.62} y2={435.55} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aK" x1={408.98} y1={472.01} x2={408.98} y2={464.01} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aL" x1={325.93} y1={541.41} x2={325.93} y2={533.41} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aM" x1={320.41} y1={534.15} x2={320.41} y2={526.15} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aN" x1={316.92} y1={494.95} x2={316.92} y2={486.95} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aO" x1={392.42} y1={538.22} x2={392.42} y2={530.21} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aP" x1={399.68} y1={533.57} x2={399.68} y2={525.57} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aQ" x1={400.55} y1={539.09} x2={400.55} y2={531.08} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aR" x1={385.45} y1={539.09} x2={385.45} y2={531.08} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aS" x1={836.45} y1={810.56} x2={836.45} y2={274.01} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aT" x1={755.6} y1={515.3} x2={755.6} y2={471.69} xlinkHref="#prefix__a" />
        <clipPath id="prefix__aU" transform="translate(-161.21 -54)">
          <path
            data-name="<Clipping Path>"
            d="M769.91 477.6l-1.91-4.54-24.9 10.23a3.07 3.07 0 0 0-1.91 2.84V513h4.92v-25.64z"
            fill="#f2f2f2"
          />
        </clipPath>
        <linearGradient id="prefix__aV" x1={583.48} y1={539.94} x2={583.48} y2={454.34} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__aW" x1={583.37} y1={507.31} x2={583.37} y2={480.04} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__aX" x1={816.05} y1={258} x2={816.05} y2={54} xlinkHref="#prefix__a" />
      </defs>
      <path
        d="M77.72 350.29h722.14a26.1 26.1 0 0 1 26.1 26.1v259.06H51.62V376.39a26.1 26.1 0 0 1 26.1-26.1z"
        fill="#535461"
      />
      <path
        d="M19.71 492.87h63.83a12.33 12.33 0 0 1 12.33 12.33v130.25h-80.5a8 8 0 0 1-8-8V505.2a12.33 12.33 0 0 1 12.34-12.33z"
        opacity={0.1}
      />
      <path
        d="M12.33 492.87h63.83A12.33 12.33 0 0 1 88.5 505.2v130.25H8a8 8 0 0 1-8-8V505.2a12.33 12.33 0 0 1 12.33-12.33z"
        fill="#535461"
      />
      <path
        d="M862.2 635.45h-80.5V505.21a12.33 12.33 0 0 1 12.33-12.33h63.84a12.33 12.33 0 0 1 12.33 12.33v122.24a8 8 0 0 1-8 8z"
        opacity={0.1}
      />
      <path
        d="M869.58 635.45h-80.5V505.21a12.33 12.33 0 0 1 12.33-12.33h63.83a12.33 12.33 0 0 1 12.33 12.33v122.24a8 8 0 0 1-8 8zM107.34 538.35h662.9a18.84 18.84 0 0 1 18.84 18.84v78.26H88.5v-78.26a18.84 18.84 0 0 1 18.84-18.84z"
        fill="#535461"
      />
      <path
        d="M107.34 538.35h662.9a18.84 18.84 0 0 1 18.84 18.84v78.26H88.5v-78.26a18.84 18.84 0 0 1 18.84-18.84z"
        opacity={0.15}
      />
      <path fill="#535461" d="M38.1 635.45h27.04v28.27H38.1z" />
      <path opacity={0.15} d="M38.1 635.45h27.04v28.27H38.1z" />
      <path opacity={0.1} d="M38.1 635.45h27.04v1.23H38.1z" />
      <path fill="#535461" d="M839.47 663.71h-27.04v-28.27h27.04z" />
      <path opacity={0.15} d="M839.47 663.71h-27.04v-28.27h27.04z" />
      <path opacity={0.1} d="M839.47 636.67h-27.04v-1.23h27.04z" />
      <text transform="translate(204.28 454.85)" opacity={0.7} fontSize={38.32} fontFamily="Lato-Light, Lato">
        {'1'}
      </text>
      <path
        d="M444 567.65l-4-.75 7.95-29.31c12.52-93.93-34.79-103.39-52.53-103.71a58.34 58.34 0 0 0-6.23-1.89v-11.08A58.81 58.81 0 0 0 433 373.42h.15c2.82 0 5.11-4.29 5.11-9.58a13.3 13.3 0 0 0-2.22-7.9q.3-3 .31-6.15a61.12 61.12 0 0 0-18.9-44.25 39.4 39.4 0 0 0-4.34-11.67c-4.35-7.67-11.6-15.67-8.65-24l-19.13 2-.18-12.6c-6 1.07-8.47 8-12 12.92-8.52 11.85-25.61 13.5-36.92 22.73-3.84 3.14-12.49 12.68-10.85 18.94a61 61 0 0 0-11.67 36q0 3.11.31 6.15a13.3 13.3 0 0 0-2.22 7.9c0 5.29 2.29 9.58 5.11 9.58h.15A58.81 58.81 0 0 0 361 420.91V432a58.34 58.34 0 0 0-6.23 1.89c-17.74.32-65.05 9.78-52.53 103.71l7.95 29.31-1.89.35a21.8 21.8 0 0 0-17.43 25.43l31.36 168a6.6 6.6 0 0 0 7.7 5.28l5.53-1v3.27a18.35 18.35 0 0 0-10.22 16.44v2.08h37v-2.08a18.34 18.34 0 0 0-8.94-15.74v-7.31l5.05-.94a6.6 6.6 0 0 0 5.28-7.7l-29.42-157.91h81.71l-29.46 157.85a6.6 6.6 0 0 0 5.28 7.7l5.05.94v7.31a18.34 18.34 0 0 0-8.94 15.74v2.08h37v-2.08a18.35 18.35 0 0 0-10.22-16.44v-3.27l5.53 1a6.6 6.6 0 0 0 7.7-5.28l31.76-170.13A19.62 19.62 0 0 0 444 567.65z"
        transform="translate(-161.21 -54)"
        fill="url(#prefix__a)"
        opacity={0.7}
      />
      <path fill="#fdb797" d="M175.76 689.53h17.21v23.35h-17.21zM234.76 689.53h17.21v23.35h-17.21z" />
      <path fill="#4d8af0" d="M157.32 497.79H270.4v40.56H157.32z" />
      <path d="M157.32 497.79H270.4v40.56H157.32z" opacity={0.05} />
      <path d="M157.33 505.16s42.19 9.84 56.53 9.84 56.54-9.83 56.54-9.83V499H157.33z" opacity={0.1} />
      <path
        d="M270.4 503.93s-42.19 9.83-56.54 9.83-56.54-9.83-56.54-9.83v-67.6a56.54 56.54 0 0 1 56.54-56.54 56.54 56.54 0 0 1 56.54 56.54z"
        fill="#f55f44"
      />
      <path d="M200.34 351.52h27v33.25a11 11 0 0 1-11 11h-5a11 11 0 0 1-11-11v-33.25z" fill="#fdb797" />
      <path
        d="M198.99 697.42L169.28 703a5.17 5.17 0 0 1-6-4.13L132.15 532.2a17.06 17.06 0 0 1 13.64-19.91l18-3.36a5.17 5.17 0 0 1 6 4.13l33.29 178.33a5.17 5.17 0 0 1-4.09 6.03zM228.74 697.42l29.71 5.58a5.17 5.17 0 0 0 6-4.13l31.44-168.35a15.36 15.36 0 0 0-12.28-17.91l-19.7-3.68a5.17 5.17 0 0 0-6 4.13l-33.3 178.33a5.17 5.17 0 0 0 4.13 6.03z"
        fill="#4d8af0"
      />
      <path d="M200.34 372a56.58 56.58 0 0 0 27 0v-19.25h-27z" opacity={0.1} />
      <circle cx={213.86} cy={302.36} r={59} fill="#333" />
      <circle cx={213.86} cy={315.88} r={56.54} fill="#fdb797" />
      <path
        d="M176.53 249.54c10.88-8.88 27.33-10.46 35.52-21.86 3.41-4.74 5.81-11.39 11.56-12.43l.17 12.13 18.41-1.89c-2.84 8 4.13 15.69 8.32 23.08a38 38 0 0 1 4.91 17.86c-6.39 3.84-14.31-.35-21.43-2.58-6.91-2.17-14.27-2.39-21.51-2.6a44.7 44.7 0 0 0-11.1.61 56 56 0 0 0-9.16 3.37c-4.9 2-20.35 9.79-24.9 4.8-5.17-5.67 5.02-17.03 9.21-20.49z"
        fill="#333"
      />
      <path
        d="M179.61 287.53a25.93 25.93 0 0 0 10 3 88.08 88.08 0 0 0 42.91-4.82c2.24 5.68 7.71 9.58 13.52 11.43s12 1.95 18.12 2a6.71 6.71 0 0 0 3.9-.75c2.72-1.84 1.4-6-.18-8.91L260 275.2c-2.33-4.22-4.72-8.52-8.33-11.72-4.52-4-10.52-5.87-16.44-7.06a92.7 92.7 0 0 0-42.19 1.41c-14.71 4.02-33.62 17.48-13.43 29.7z"
        opacity={0.1}
      />
      <path
        d="M179.61 286.3a25.93 25.93 0 0 0 10 3 88.08 88.08 0 0 0 42.91-4.82c2.24 5.68 7.71 9.58 13.52 11.43s12 1.95 18.12 2a6.71 6.71 0 0 0 3.9-.75c2.72-1.84 1.4-6-.18-8.91L260.01 274c-2.33-4.22-4.72-8.52-8.33-11.72-4.52-4-10.52-5.87-16.44-7.06a92.7 92.7 0 0 0-42.19 1.41c-14.72 3.99-33.63 17.45-13.44 29.67z"
        fill="#333"
      />
      <ellipse cx={269.79} cy={315.88} rx={4.92} ry={9.22} fill="#fdb797" />
      <ellipse cx={157.94} cy={315.88} rx={4.92} ry={9.22} fill="#fdb797" />
      <path
        d="M200.57 383.56s-71.51-11.14-56.78 99.44l8.6 31.71 24.59-1s-16-36.87-6.15-61.46 29.74-68.69 29.74-68.69zM227.16 383.56s71.52-11.14 56.77 99.48l-8.6 31.71-24.59-1s16-36.87 6.15-61.46-29.73-68.73-29.73-68.73z"
        fill="#f55f44"
      />
      <circle cx={165.93} cy={518.68} r={13.52} fill="#fdb797" />
      <circle cx={264.26} cy={518.68} r={13.52} fill="#fdb797" />
      <path
        d="M180.3 703h6.89a14.37 14.37 0 0 1 14.37 14.37v5.29h-35.63v-5.29A14.37 14.37 0 0 1 180.3 703zM240.53 703h6.89a14.37 14.37 0 0 1 14.37 14.37v5.29h-35.64v-5.29A14.37 14.37 0 0 1 240.53 703z"
        fill="#333"
      />
      <text transform="translate(204.65 455.38)" fontSize={36.87} fill="#fff" fontFamily="Lato-Light, Lato">
        {'1'}
      </text>
      <path d="M169.62 442.48s-4.92 25.81 3.69 36.87M258.11 442.48s4.92 25.81-3.69 36.87" opacity={0.1} />
      <g opacity={0.7}>
        <path fill="url(#prefix__b)" d="M418.66 442.64h116.45v86.07H418.66z" />
        <path
          d="M579.88 519.43s43.45 5.06 58.23 5.06 58.23-5.06 58.23-5.06v-21.52H579.88z"
          transform="translate(-161.21 -54)"
          fill="url(#prefix__c)"
          opacity={0.1}
        />
        <path
          d="M696.33 518.16s-43.45 5.06-58.23 5.06-58.23-5.06-58.23-5.06v-84.81a58.23 58.23 0 0 1 58.23-58.23 58.23 58.23 0 0 1 58.23 58.23z"
          transform="translate(-161.21 -54)"
          fill="url(#prefix__d)"
        />
        <path
          d="M641 391.58h-5.85a11 11 0 0 1-11-11V346H652v34.57a11 11 0 0 1-11 11.01z"
          transform="translate(-161.21 -54)"
          fill="url(#prefix__e)"
        />
        <path fill="url(#prefix__f)" d="M418.66 498.34h41.77v283.54h-41.77z" />
        <path fill="url(#prefix__g)" d="M493.35 498.34h41.77v283.54h-41.77z" />
        <path
          d="M624.18 367.11a58.26 58.26 0 0 0 27.85 0v-19.83h-27.85z"
          transform="translate(-161.21 -54)"
          fill="url(#prefix__h)"
          opacity={0.1}
        />
        <circle cx={476.89} cy={241.38} r={60.76} fill="url(#prefix__i)" />
        <circle cx={476.89} cy={255.3} r={58.23} fill="url(#prefix__j)" />
        <path
          d="M602.82 280.11c3.09 1.87 6.72 2.61 10.3 3.1a90.71 90.71 0 0 0 44.19-5c2.31 5.85 7.94 9.87 13.93 11.77s12.38 2 18.67 2.08a6.91 6.91 0 0 0 4-.77c2.8-1.89 1.45-6.22-.19-9.18l-8.11-14.71c-2.4-4.34-4.86-8.78-8.58-12.07-4.65-4.12-10.83-6-16.93-7.27a95.46 95.46 0 0 0-43.45 1.45c-15.14 4.15-34.65 18.02-13.83 30.6z"
          transform="translate(-161.21 -54)"
          fill="url(#prefix__k)"
          opacity={0.1}
        />
        <path
          d="M602.82 278.84c3.09 1.87 6.72 2.61 10.3 3.1a90.71 90.71 0 0 0 44.19-5c2.31 5.85 7.94 9.87 13.93 11.77s12.38 2 18.67 2.08a6.91 6.91 0 0 0 4-.77c2.8-1.89 1.45-6.22-.19-9.18l-8.11-14.71c-2.4-4.34-4.86-8.78-8.58-12.07-4.65-4.12-10.83-6-16.93-7.27a95.46 95.46 0 0 0-43.45 1.45c-15.14 4.15-34.65 18.02-13.83 30.6z"
          transform="translate(-161.21 -54)"
          fill="url(#prefix__l)"
        />
        <ellipse cx={534.48} cy={255.3} rx={5.06} ry={9.49} fill="url(#prefix__m)" />
        <ellipse cx={419.3} cy={255.3} rx={5.06} ry={9.49} fill="url(#prefix__n)" />
        <circle cx={632.58} cy={180.62} r={13.92} fill="url(#prefix__o)" />
        <text transform="translate(454.87 395.17)" fontSize={37.97} fontFamily="Lato-Light, Lato">
          {'00'}
        </text>
        <path
          d="M639.37 332.09s-32.91 11.39-58.23-13.92c0 0 2 8.39 5.57 18.51a58.23 58.23 0 0 0 108.88-18.1c-5.93 3.28-49.18 24.07-56.22 13.51zm-1.27 15.19c-6.29 0-11.39-4.8-11.39-7.59s5.1-2.53 11.39-2.53 11.39-.26 11.39 2.53-5.1 7.59-11.39 7.59z"
          transform="translate(-161.21 -54)"
          fill="url(#prefix__p)"
        />
        <path
          d="M669.05 384s67.78-38 109.55-149.42l20.25 12.66S765.31 389.22 681.14 422z"
          transform="translate(-161.21 -54)"
          fill="url(#prefix__q)"
        />
        <circle cx={321.2} cy={180.62} r={13.92} fill="url(#prefix__r)" />
        <path
          d="M607.15 384s-67.78-38-109.55-149.38l-20.25 12.66S510.89 389.22 595.07 422z"
          transform="translate(-161.21 -54)"
          fill="url(#prefix__s)"
        />
        <path
          d="M619.12 846h-36.71v-5.88a14.38 14.38 0 0 1 14.38-14.37h8a14.38 14.38 0 0 1 14.38 14.38z"
          transform="translate(-161.21 -54)"
          fill="url(#prefix__t)"
        />
        <path
          d="M693.8 846h-36.71v-5.88a14.37 14.37 0 0 1 14.38-14.37h8a14.37 14.37 0 0 1 14.38 14.38z"
          transform="translate(-161.21 -54)"
          fill="url(#prefix__u)"
        />
      </g>
      <path fill="#4d8af0" d="M420.35 443.71h113.08v83.58H420.35z" />
      <path d="M420.35 465.83s42.19 4.92 56.54 4.92 56.54-4.92 56.54-4.92v-20.9H420.35z" opacity={0.1} />
      <path
        d="M533.43 464.6s-42.19 4.92-56.54 4.92-56.54-4.92-56.54-4.92v-82.35a56.54 56.54 0 0 1 56.54-56.54 56.54 56.54 0 0 1 56.54 56.54z"
        fill={primaryColor}
      />
      <path d="M463.37 297.44h27v33.25a11 11 0 0 1-11 11h-5a11 11 0 0 1-11-11v-33.25z" fill="#fdb797" />
      <path fill="#4d8af0" d="M420.35 497.79h40.56v275.32h-40.56zM492.87 497.79h40.56v275.32h-40.56z" />
      <path d="M463.37 317.93a56.58 56.58 0 0 0 27 0v-19.26h-27z" opacity={0.1} />
      <circle cx={476.89} cy={248.28} r={59} fill="#814e4d" />
      <circle cx={476.89} cy={261.8} r={56.54} fill="#fdb797" />
      <path
        d="M442.63 233.45a25.93 25.93 0 0 0 10 3 88.08 88.08 0 0 0 42.91-4.82c2.24 5.68 7.71 9.58 13.52 11.43s12 1.95 18.12 2a6.71 6.71 0 0 0 3.9-.75c2.72-1.84 1.4-6-.18-8.91l-7.88-14.28c-2.33-4.22-4.72-8.52-8.33-11.72-4.52-4-10.52-5.87-16.44-7.06a92.7 92.7 0 0 0-42.19 1.41c-14.7 4.01-33.61 17.48-13.43 29.7z"
        opacity={0.1}
      />
      <path
        d="M442.63 232.22a25.93 25.93 0 0 0 10 3 88.08 88.08 0 0 0 42.91-4.82c2.24 5.68 7.71 9.58 13.52 11.43s12 1.95 18.12 2a6.71 6.71 0 0 0 3.9-.75c2.72-1.84 1.4-6-.18-8.91l-7.88-14.28c-2.33-4.22-4.72-8.52-8.33-11.72-4.52-4-10.52-5.87-16.44-7.06a92.7 92.7 0 0 0-42.19 1.41c-14.7 4.02-33.61 17.48-13.43 29.7z"
        fill="#814e4d"
      />
      <ellipse cx={532.82} cy={261.8} rx={4.92} ry={9.22} fill="#fdb797" />
      <ellipse cx={420.97} cy={261.8} rx={4.92} ry={9.22} fill="#fdb797" />
      <circle cx={628.07} cy={189.28} r={13.52} fill="#fdb797" />
      <text transform="translate(455.51 397.62)" fontSize={36.87} fill="#fff" fontFamily="Lato-Light, Lato">
        {'00'}
      </text>
      <path
        d="M478.12 283.92s-32 11.06-56.54-13.52c0 0 2 8.15 5.4 18a56.54 56.54 0 0 0 105.72-17.57c-5.74 3.17-47.74 23.35-54.58 13.09zm-1.23 14.75c-6.1 0-11.1-4.67-11.1-7.37s5-2.46 11.06-2.46 11.06-.26 11.06 2.46-4.91 7.37-11.02 7.37z"
        fill="#814e4d"
      />
      <path d="M506.94 334.37s65.85-36.93 106.38-145.09l19.67 12.29S600.42 339.4 518.68 371.19z" fill={primaryColor} />
      <circle cx={325.71} cy={189.28} r={13.52} fill="#fdb797" />
      <path d="M446.79 334.37s-65.82-36.93-106.38-145.09l-19.62 12.29S353.37 339.4 435.1 371.19z" fill={primaryColor} />
      <path
        d="M437.19 763.27h6.89a14.37 14.37 0 0 1 14.37 14.37v5.29h-35.64v-5.29a14.37 14.37 0 0 1 14.38-14.37zM509.7 763.27h6.89A14.37 14.37 0 0 1 531 777.65v5.29h-35.67v-5.29a14.37 14.37 0 0 1 14.37-14.38z"
        fill="#333"
      />
      <circle cx={349.23} cy={474.54} r={4} fill="url(#prefix__v)" />
      <circle cx={349.23} cy={474.54} r={3.56} fill="#fdd835" />
      <path
        d="M346.56 475.58a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={360.8} cy={474.54} r={4} fill="url(#prefix__w)" />
      <circle cx={360.8} cy={474.54} r={3.56} fill="#fdd835" />
      <path
        d="M358.13 475.58a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={327.88} cy={474.54} r={4} fill="url(#prefix__x)" />
      <circle cx={327.88} cy={474.54} r={3.56} fill="#fdd835" />
      <path
        d="M325.21 475.58a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={343} cy={464.46} r={4} fill="url(#prefix__y)" />
      <circle cx={343} cy={464.46} r={3.56} fill="#fdd835" />
      <path
        d="M340.34 465.5a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={366.58} cy={466.09} r={4} fill="url(#prefix__z)" />
      <circle cx={366.58} cy={466.09} r={3.56} fill="#fdd835" />
      <path
        d="M363.91 467.13a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={360.8} cy={462.53} r={4} fill="url(#prefix__A)" />
      <circle cx={360.8} cy={462.53} r={3.56} fill="#fdd835" />
      <path
        d="M358.13 463.57a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={363.61} cy={470.98} r={4} fill="url(#prefix__B)" />
      <circle cx={363.61} cy={470.98} r={3.56} fill="#fdd835" />
      <path
        d="M360.94 472a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={353.23} cy={464.46} r={4} fill="url(#prefix__C)" />
      <circle cx={353.23} cy={464.46} r={3.56} fill="#fdd835" />
      <path
        d="M350.57 465.5a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={352.79} cy={453.19} r={4} fill="url(#prefix__D)" />
      <circle cx={352.79} cy={453.19} r={3.56} fill="#fdd835" />
      <path
        d="M350.12 454.23a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={372.51} cy={458.98} r={4} fill="url(#prefix__E)" />
      <circle cx={372.51} cy={458.98} r={3.56} fill="#fdd835" />
      <path
        d="M369.84 460a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={370.58} cy={466.54} r={4} fill="url(#prefix__F)" />
      <circle cx={370.58} cy={466.54} r={3.56} fill="#fdd835" />
      <path
        d="M367.91 467.57a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={379.48} cy={465.05} r={4} fill="url(#prefix__G)" />
      <circle cx={379.48} cy={465.05} r={3.56} fill="#fdd835" />
      <path
        d="M376.79 466.09a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={375.47} cy={468.76} r={4} fill="url(#prefix__H)" />
      <circle cx={375.47} cy={468.76} r={3.56} fill="#fdd835" />
      <path
        d="M372.79 469.8a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={348.79} cy={458.98} r={4} fill="url(#prefix__I)" />
      <circle cx={348.79} cy={458.98} r={3.56} fill="#fdd835" />
      <path
        d="M346.12 460a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={343} cy={474.1} r={4} fill="url(#prefix__J)" />
      <circle cx={343} cy={474.1} r={3.56} fill="#fbc02d" />
      <path
        d="M340.34 475.14a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={333.96} cy={474.54} r={4} fill="url(#prefix__K)" />
      <circle cx={333.96} cy={474.54} r={3.56} fill="#fbc02d" />
      <path
        d="M331.29 475.58a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={338.56} cy={472.02} r={4} fill="url(#prefix__L)" />
      <circle cx={338.56} cy={472.02} r={3.56} fill="#fbc02d" />
      <path
        d="M335.89 473.06a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={358.13} cy={467.57} r={4} fill="url(#prefix__M)" />
      <circle cx={358.13} cy={467.57} r={3.56} fill="#fbc02d" />
      <path
        d="M355.46 468.61a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={358.13} cy={458.09} r={4} fill="url(#prefix__N)" />
      <circle cx={358.13} cy={458.09} r={3.56} fill="#fbc02d" />
      <path
        d="M355.46 459.12a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={362.57} cy={465.65} r={4} fill="url(#prefix__O)" />
      <circle cx={362.57} cy={465.65} r={3.56} fill="#fbc02d" />
      <path
        d="M359.91 466.68a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={358.57} cy={450.52} r={4} fill="url(#prefix__P)" />
      <circle cx={358.57} cy={450.52} r={3.56} fill="#fbc02d" />
      <path
        d="M355.9 451.56a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={359.46} cy={454.53} r={4} fill="url(#prefix__Q)" />
      <circle cx={359.46} cy={454.53} r={3.56} fill="#fbc02d" />
      <path
        d="M356.79 455.57a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={364.21} cy={457.2} r={4} fill="url(#prefix__R)" />
      <circle cx={364.21} cy={457.2} r={3.56} fill="#fbc02d" />
      <path
        d="M361.54 458.23a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={369.1} cy={456.45} r={4} fill="url(#prefix__S)" />
      <circle cx={369.1} cy={456.45} r={3.56} fill="#fbc02d" />
      <path
        d="M366.43 457.49a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.64 4.06 3.54 3.54 0 0 1-.36-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={367.76} cy={460.46} r={4} fill="url(#prefix__T)" />
      <circle cx={367.76} cy={460.46} r={3.56} fill="#fbc02d" />
      <path
        d="M365.1 461.5a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={351.01} cy={455.27} r={4} fill="url(#prefix__U)" />
      <circle cx={351.01} cy={455.27} r={3.56} fill="#fbc02d" />
      <path
        d="M348.34 456.31a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={339.45} cy={467.43} r={4} fill="url(#prefix__V)" />
      <circle cx={339.45} cy={467.43} r={3.56} fill="#fbc02d" />
      <path
        d="M336.79 468.46a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={346.41} cy={460.75} r={4} fill="url(#prefix__W)" />
      <circle cx={346.41} cy={460.75} r={3.56} fill="#fbc02d" />
      <path
        d="M343.79 461.79a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={332.18} cy={472.17} r={4} fill="url(#prefix__X)" />
      <circle cx={332.18} cy={472.17} r={3.56} fill="#fbc02d" />
      <path
        d="M329.51 473.21a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={370.58} cy={469.06} r={4} fill="url(#prefix__Y)" />
      <circle cx={370.58} cy={469.06} r={3.56} fill="#fbc02d" />
      <path
        d="M367.91 470.09a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={352.64} cy={446.52} r={4} fill="url(#prefix__Z)" />
      <circle cx={352.64} cy={446.52} r={3.56} fill="#fbc02d" />
      <path
        d="M349.97 447.56a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={345.38} cy={455.71} r={4} fill="url(#prefix__aa)" />
      <circle cx={345.38} cy={455.71} r={3.56} fill="#fbc02d" />
      <path
        d="M342.71 456.75a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={339.59} cy={462.53} r={4} fill="url(#prefix__ab)" />
      <circle cx={339.59} cy={462.53} r={3.56} fill="#fbc02d" />
      <path
        d="M336.93 463.57a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={343.75} cy={470.09} r={4} fill="url(#prefix__ac)" />
      <circle cx={343.75} cy={470.09} r={3.56} fill="#fbc02d" />
      <path
        d="M341.08 471.13a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={349.38} cy={465.05} r={4} fill="url(#prefix__ad)" />
      <circle cx={349.38} cy={465.05} r={3.56} fill="#fbc02d" />
      <path
        d="M346.71 466.09a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={352.34} cy={470.09} r={4} fill="url(#prefix__ae)" />
      <circle cx={352.34} cy={470.09} r={3.56} fill="#fbc02d" />
      <path
        d="M349.68 471.13a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={383.03} cy={474.54} r={4} fill="url(#prefix__af)" />
      <circle cx={383.03} cy={474.54} r={3.56} fill="#fbc02d" />
      <path
        d="M380.37 475.58a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={377.4} cy={473.65} r={4} fill="url(#prefix__ag)" />
      <circle cx={377.4} cy={473.65} r={3.56} fill="#fbc02d" />
      <path
        d="M374.73 474.69a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={366.58} cy={474.1} r={4} fill="url(#prefix__ah)" />
      <circle cx={366.58} cy={474.1} r={3.56} fill="#fbc02d" />
      <circle cx={367.32} cy={469.95} r={3.56} fill="#fbc02d" />
      <path
        d="M363.91 475.14a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={354.57} cy={474.54} r={4} fill="url(#prefix__ai)" />
      <circle cx={354.57} cy={474.54} r={3.56} fill="#fbc02d" />
      <path
        d="M351.9 475.58a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={353.38} cy={458.53} r={4} fill="url(#prefix__aj)" />
      <circle cx={353.38} cy={458.53} r={3.56} fill="#fdd835" />
      <path
        d="M350.71 459.57a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={357.39} cy={463.57} r={4} fill="url(#prefix__ak)" />
      <circle cx={357.39} cy={463.57} r={3.56} fill="#fdd835" />
      <path
        d="M354.72 464.61a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={350.71} cy={451.27} r={4} fill="url(#prefix__al)" />
      <circle cx={350.71} cy={451.27} r={3.56} fill="#fdd835" />
      <path
        d="M348.05 452.3a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={355.16} cy={451.71} r={4} fill="url(#prefix__am)" />
      <circle cx={355.16} cy={451.71} r={3.56} fill="#fdd835" />
      <path
        d="M352.49 452.75a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={362.57} cy={453.79} r={4} fill="url(#prefix__an)" />
      <circle cx={362.57} cy={453.79} r={3.56} fill="#fdd835" />
      <path
        d="M359.91 454.82a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={342.56} cy={460.31} r={4} fill="url(#prefix__ao)" />
      <circle cx={342.56} cy={460.31} r={3.56} fill="#fdd835" />
      <path
        d="M339.89 461.35a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={345.38} cy={465.5} r={4} fill="url(#prefix__ap)" />
      <circle cx={345.38} cy={465.5} r={3.56} fill="#fdd835" />
      <path
        d="M342.71 466.54a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={347.3} cy={471.58} r={4} fill="url(#prefix__aq)" />
      <circle cx={347.3} cy={471.58} r={3.56} fill="#fdd835" />
      <path
        d="M344.64 472.62a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={358.57} cy={469.65} r={4} fill="url(#prefix__ar)" />
      <circle cx={358.57} cy={469.65} r={3.56} fill="#fdd835" />
      <path
        d="M355.9 470.69a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={370.14} cy={466.09} r={4} fill="url(#prefix__as)" />
      <circle cx={370.14} cy={466.09} r={3.56} fill="#fdd835" />
      <path
        d="M367.47 467.13a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={373.84} cy={462.98} r={4} fill="url(#prefix__at)" />
      <circle cx={373.84} cy={462.98} r={3.56} fill="#fdd835" />
      <circle cx={364.8} cy={462.68} r={3.56} fill="#fdd835" />
      <path
        d="M371.17 464a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={379.62} cy={470.09} r={4} fill="url(#prefix__au)" />
      <circle cx={379.62} cy={470.09} r={3.56} fill="#fdd835" />
      <path
        d="M376.96 471.13a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={360.94} cy={474.99} r={4} fill="url(#prefix__av)" />
      <circle cx={360.94} cy={474.99} r={3.56} fill="#fdd835" />
      <path
        d="M358.28 476a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={340.34} cy={473.21} r={4} fill="url(#prefix__aw)" />
      <circle cx={340.34} cy={473.21} r={3.56} fill="#fdd835" />
      <path
        d="M337.67 474.25a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={334.55} cy={468.02} r={4} fill="url(#prefix__ax)" />
      <circle cx={334.55} cy={468.02} r={3.56} fill="#fdd835" />
      <path
        d="M331.89 469.06a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={342.11} cy={465.5} r={4} fill="url(#prefix__ay)" />
      <circle cx={342.11} cy={465.5} r={3.56} fill="#fdd835" />
      <path
        d="M339.45 466.54a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.66 4.01 3.54 3.54 0 0 1-.34-1.46z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={337.96} cy={459.42} r={4} fill="url(#prefix__az)" />
      <circle cx={337.96} cy={459.42} r={3.56} fill="#fdd835" />
      <path
        d="M335.3 460.46a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={341.52} cy={453.79} r={4} fill="url(#prefix__aA)" />
      <circle cx={341.52} cy={453.79} r={3.56} fill="#fdd835" />
      <path
        d="M338.85 454.82a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={372.51} cy={474.54} r={4} fill="url(#prefix__aB)" />
      <circle cx={372.51} cy={474.54} r={3.56} fill="#fdd835" />
      <path
        d="M369.84 475.58a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <path fill="url(#prefix__aC)" d="M378.04 540.67h-44.28l-11.22-66.13h66.87l-11.37 66.13z" />
      <path fill="#fff" d="M377.4 539.78h-42.7l-10.82-64.2h64.49l-10.97 64.2z" />
      <path
        fill={primaryColor}
        d="M323.88 475.58h10.97l10.38 64.2h-10.68l-10.67-64.2zM388.37 475.58h-11.12l-10.67 64.2h10.82l10.97-64.2zM350.57 475.58h10.67v64.2h-10.67z"
      />
      <circle cx={335.89} cy={463.57} r={4} fill="url(#prefix__aD)" />
      <circle cx={335.89} cy={463.57} r={3.56} fill="#fbc02d" />
      <path
        d="M333.22 464.61a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={345.97} cy={452.3} r={4} fill="url(#prefix__aE)" />
      <circle cx={345.97} cy={452.3} r={3.56} fill="#fbc02d" />
      <path
        d="M343.3 453.34a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={331.88} cy={469.65} r={4} fill="url(#prefix__aF)" />
      <circle cx={331.88} cy={469.65} r={3.56} fill="#fbc02d" />
      <path
        d="M329.22 470.69a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={327.09} cy={442.46} r={4} fill="url(#prefix__aG)" />
      <circle cx={327.09} cy={442.46} r={3.56} fill="#fbc02d" />
      <path
        d="M324.42 443.49a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.63 4.06 3.54 3.54 0 0 1-.37-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={343.93} cy={419.52} r={4} fill="url(#prefix__aH)" />
      <circle cx={343.93} cy={419.52} r={3.56} fill="#fbc02d" />
      <path
        d="M341.26 420.55a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={358.45} cy={402.09} r={4} fill="url(#prefix__aI)" />
      <circle cx={358.45} cy={402.09} r={3.56} fill="#fdd835" />
      <path
        d="M355.79 403.13a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={386.62} cy={439.55} r={4} fill="url(#prefix__aJ)" />
      <circle cx={386.62} cy={439.55} r={3.56} fill="#fdd835" />
      <path
        d="M383.95 440.59a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={408.98} cy={468.01} r={4} fill="url(#prefix__aK)" />
      <circle cx={408.98} cy={468.01} r={3.56} fill="#fdd835" />
      <path
        d="M406.31 469a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={325.93} cy={537.41} r={4} fill="url(#prefix__aL)" />
      <circle cx={325.93} cy={537.41} r={3.56} fill="#fbc02d" />
      <path
        d="M323.26 538.45a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={320.41} cy={530.15} r={4} fill="url(#prefix__aM)" />
      <circle cx={320.41} cy={530.15} r={3.56} fill="#fdd835" />
      <path
        d="M317.79 531.19a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={316.92} cy={490.95} r={4} fill="url(#prefix__aN)" />
      <circle cx={316.92} cy={490.95} r={3.56} fill="#fbc02d" />
      <path
        d="M314.26 492a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={392.42} cy={534.22} r={4} fill="url(#prefix__aO)" />
      <circle cx={392.42} cy={534.22} r={3.56} fill="#fbc02d" />
      <path
        d="M389.79 535.25a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={399.68} cy={529.57} r={4} fill="url(#prefix__aP)" />
      <circle cx={399.68} cy={529.57} r={3.56} fill="#fbc02d" />
      <path
        d="M397.01 530.61a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={400.55} cy={535.09} r={4} fill="url(#prefix__aQ)" />
      <circle cx={400.55} cy={535.09} r={3.56} fill="#fdd835" />
      <path
        d="M397.89 536.13a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <circle cx={385.45} cy={535.09} r={4} fill="url(#prefix__aR)" />
      <circle cx={385.45} cy={535.09} r={3.56} fill="#fdd835" />
      <path
        d="M382.79 536.13a3.56 3.56 0 0 1 6-2.55 3.56 3.56 0 1 0-5.7 4.06 3.54 3.54 0 0 1-.3-1.51z"
        fill="#fff"
        opacity={0.2}
      />
      <text transform="translate(664.86 472.82)" opacity={0.7} fontSize={39.81} fontFamily="Lato-Light, Lato">
        {'9'}
      </text>
      <path
        d="M957.64 441.23c-21.71-18.66-45.29-34.93-63.43-46.53a60.64 60.64 0 0 0 2-8.56h.15c2.93 0 5.31-4.46 5.31-10a13.82 13.82 0 0 0-2.27-8.14q.31-3.15.32-6.39a63.82 63.82 0 0 0-2-15.92 22.24 22.24 0 0 0 1.11-5.87 17.75 17.75 0 0 1 .56-4.78 18.75 18.75 0 0 1 2.38-4.09 25.86 25.86 0 0 0 2.31-23.43c-1.07-2.65-2.8-5.3-5.51-6.23a5.84 5.84 0 0 1-2-.82 3.56 3.56 0 0 1-1-2.64c-.15-3.31.79-6.57.9-9.89s-.9-7-3.77-8.66a10.82 10.82 0 0 0-5.64-1 53.19 53.19 0 0 0-12.27 1.7c-6.3 1.64-13.35 4.35-18.91 1a46.08 46.08 0 0 1-4.28-3.45c-7.27-5.71-19.12-4.17-24.69 3.21-2.78 3.69-4.22 8.6-8.13 11.06-7.15 4.5-17.94-2-24.52 3.36-4.94 4-4.05 12-8 17s-9.25 7.19-9.75 14.52a10.87 10.87 0 0 0 2 7.59 63.44 63.44 0 0 0-6.19 27.42q0 3.23.32 6.39a13.82 13.82 0 0 0-2.31 8.21c0 5.5 2.38 10 5.31 10h.15a60.62 60.62 0 0 0 2.19 9c-18 11.57-41.29 27.66-62.73 46.08 6.64 39.81 59.72 65 59.72 65V586l-8.97 1.62a22 22 0 0 0-17.58 25.65l32.73 175.35a6.66 6.66 0 0 0 7.77 5.32l5.94-1.11V796c-6.27 3-10.62 4.42-10.62 11.82v2.71h38.49v-2.71c0-6.86-3.74-7.93-9.29-11.13v-7.35l5.44-1a6.66 6.66 0 0 0 5.32-7.77l-30.62-164.16h84.89l-30.65 164.18a6.66 6.66 0 0 0 5.32 7.77l5.44 1v7.35c-5.55 3.2-9.29 4.26-9.29 11.13v2.71h38.49v-2.71c0-7.4-4.35-8.85-10.62-11.82v-3.19l5.94 1.17a6.66 6.66 0 0 0 7.77-5.32L924 611.11A19.79 19.79 0 0 0 908.18 588l-11.11-2v-79.7-1.93l.9 1.93S951 481 957.64 441.23zm-193.28 8L799.29 425a60.79 60.79 0 0 0 22.14 10.52V447a60.85 60.85 0 0 0-24.84 12.7zm86.26-2.23v-11.5a60.79 60.79 0 0 0 22.53-10.83l35.38 24.55-32.22 10.49.57 1.23A60.89 60.89 0 0 0 850.62 447z"
        transform="translate(-161.21 -54)"
        fill="url(#prefix__aS)"
        opacity={0.7}
      />
      <path fill="#fdb797" d="M635.59 714.79h17.72v24.05h-17.72zM696.35 714.79h17.72v24.05h-17.72z" />
      <path fill="#4d8af0" d="M616.61 517.32h116.45v41.77H616.61z" />
      <path d="M616.61 517.32h116.45v41.77H616.61z" opacity={0.05} />
      <path d="M616.61 524.92S660.06 535 674.79 535s58.23-10.13 58.23-10.13v-6.33H616.61z" opacity={0.1} />
      <path
        d="M733.06 523.65s-43.45 10.13-58.27 10.13-58.23-10.13-58.23-10.13V454a58.23 58.23 0 0 1 58.23-58.19A58.23 58.23 0 0 1 733.06 454z"
        fill="#3ad29f"
      />
      <path d="M660.91 366.69h27.85v34.57a11 11 0 0 1-11 11h-5.85a11 11 0 0 1-11-11v-34.57z" fill="#fdb797" />
      <path
        d="M659.67 722.88l-30.88 5.77a5.17 5.17 0 0 1-6-4.13l-32.21-172.26a17.06 17.06 0 0 1 13.64-19.91l19.21-3.59a5.17 5.17 0 0 1 6 4.13l34.34 184a5.17 5.17 0 0 1-4.1 5.99zM690 722.88l30.9 5.77a5.17 5.17 0 0 0 6-4.13l32.47-173.93a15.36 15.36 0 0 0-12.28-17.91l-20.89-3.9a5.17 5.17 0 0 0-6 4.13l-34.34 184a5.17 5.17 0 0 0 4.14 5.97z"
        fill="#4d8af0"
      />
      <path d="M660.91 387.79a58.26 58.26 0 0 0 27.85 0V368h-27.85z" opacity={0.1} />
      <circle cx={674.83} cy={316.06} r={60.76} fill="#ffcf51" />
      <circle cx={674.83} cy={329.99} r={58.23} fill="#fdb797" />
      <ellipse cx={732.43} cy={329.99} rx={5.06} ry={9.49} fill="#fdb797" />
      <ellipse cx={617.24} cy={329.99} rx={5.06} ry={9.49} fill="#fdb797" />
      <path
        d="M639.84 728.71h8a14.38 14.38 0 0 1 14.38 14.38V749h-36.75v-5.88a14.37 14.37 0 0 1 14.37-14.41zM701.86 728.71h8a14.38 14.38 0 0 1 14.38 14.38V749h-36.75v-5.88a14.37 14.37 0 0 1 14.37-14.41z"
        fill="#333"
      />
      <text transform="translate(665.34 473.65)" fontSize={37.97} fill="#fff" fontFamily="Lato-Light, Lato">
        {'9'}
      </text>
      <path
        d="M621.67 298.34s-2.53 16.46 11.39 7.59 62-5.06 77.21 7.59 20.25 2.53 22.78 0-27.4-44.81-44.3-48.1c-45.56-8.85-67.08 32.92-67.08 32.92z"
        opacity={0.1}
      />
      <path
        d="M621.67 297.08s-2.53 16.46 11.39 7.59 62-5.06 77.21 7.59 20.25 2.53 22.78 0-27.4-44.81-44.3-48.1c-45.56-8.86-67.08 32.92-67.08 32.92z"
        fill="#ffcf51"
      />
      <path
        d="M627.39 268.83c3.81-4.71 3-12.39 7.67-16.19 6.27-5.06 16.56 1.09 23.38-3.2 3.73-2.35 5.1-7 7.75-10.55 5.31-7 16.61-8.51 23.55-3.07a44 44 0 0 0 4.08 3.29c5.3 3.23 12 .64 18-.92a50.73 50.73 0 0 1 11.7-1.62 10.32 10.32 0 0 1 5.38 1c2.74 1.57 3.7 5.11 3.6 8.26s-1 6.27-.86 9.43a3.39 3.39 0 0 0 .92 2.52 5.57 5.57 0 0 0 1.87.78c2.58.88 4.24 3.41 5.26 5.94a24.66 24.66 0 0 1-2.2 22.35 17.88 17.88 0 0 0-2.27 3.9 16.93 16.93 0 0 0-.54 4.56c-.29 5.39-2.58 11.21-7.48 13.47-6.31 2.92-13.42-1.12-19.65-4.22-14.14-7-30.08-9.46-45.79-11.11a182.07 182.07 0 0 0-21.21-1.26c-5.27.06-12.4 2.32-17.42.18-4-1.71-5.38-5.53-5.09-9.67.53-7.01 5.46-9.05 9.35-13.87z"
        fill="#ffcf51"
      />
      <path
        d="M637.21 409.61l-30.73-10 62-43-19-26.58s-48.49 26.45-89.87 62c6.33 38 57 62 57 62zM713.26 409.61l30.73-10-62-43 19-26.58s48.49 26.45 89.87 62c-6.33 38-57 62-57 62z"
        fill="#3ad29f"
      />
      <path d="M650.79 331.25s31.64-22.78 39.24-8.86-20.24 35.44-20.24 35.44z" opacity={0.1} />
      <path d="M649.52 330s31.64-22.78 39.24-8.86-20.25 35.44-20.25 35.44z" fill="#fdb797" />
      <path d="M649.52 330s31.64-22.78 39.24-8.86-20.25 35.44-20.25 35.44z" opacity={0.02} />
      <path d="M698.88 331.25s-31.64-22.78-39.24-8.86 20.25 35.44 20.25 35.44z" opacity={0.1} />
      <path d="M700.15 330s-31.64-22.78-39.24-8.86 20.25 35.44 20.25 35.44z" fill="#fdb797" />
      <path d="M700.15 330s-31.64-22.78-39.24-8.86 20.25 35.44 20.25 35.44z" opacity={0.02} />
      <path
        d="M771.18 477.72l-2.51-6-26.61 10.93a3.29 3.29 0 0 0-2 3v28.75l7.69.89v-27.42z"
        transform="translate(-161.21 -54)"
        fill="url(#prefix__aT)"
        data-name="<Group>"
      />
      <path
        data-name="<Clipping Path>"
        d="M608.7 423.6l-1.91-4.54-24.9 10.23a3.07 3.07 0 0 0-1.91 2.84V459h4.92v-25.64z"
        fill="#f2f2f2"
      />
      <g clipPath="url(#prefix__aU)" fill={primaryColor}>
        <path d="M600.13 414.11h5.36v16.99h-5.36zM591.64 417.69H597v16.99h-5.36zM588.74 432.21l-3.8 1.12-1.57-18.1h5.37v16.98z" />
        <path d="M574.87 439.59v-5.36h16.99v5.36zM574.88 446.97v-5.36h16.99v5.36zM574.88 454.34v-5.36h16.99v5.36z" />
      </g>
      <path fill="url(#prefix__aV)" d="M613.32 454.34h-59.67v9.41h4.07l8.3 76.19h35.66l7.37-76.63h4.27v-8.97z" />
      <path fill={primaryColor} d="M600.13 538.38h-32.85l-8.05-80.46h48.06l-7.16 80.46z" />
      <path fill={primaryColor} d="M555.88 456.58h54.98v5.36h-54.98z" />
      <circle cx={583.37} cy={493.68} r={13.63} fill="url(#prefix__aW)" />
      <circle cx={583.37} cy={493.68} r={12.52} fill="#fff" />
      <path
        d="M886.2 159.32A13.38 13.38 0 0 0 874 159l.52-1a13.41 13.41 0 0 0-5.39-18.19 13.41 13.41 0 0 0-18.13 5.46l-4.57 8.42 9.44-17.4a12.13 12.13 0 0 0-4.88-16.45l-2.25-1.22a12.13 12.13 0 0 0-16.45 4.88l22.14-40.79a19.37 19.37 0 0 0-7.79-26.27l-1.5-.81A13.41 13.41 0 0 0 826.92 61l-34.43 63.43-53.62 98.79 52.2 28.33A53 53 0 0 0 863 230.26l19.19-35.36 9.44-17.4a13.41 13.41 0 0 0-5.43-18.18z"
        transform="translate(-161.21 -54)"
        fill="url(#prefix__aX)"
        opacity={0.7}
      />
      <path
        d="M639.156 198.509l-58.588-31.797 51.574-95.027 95.097 51.612-31.778 58.552a41.5 41.5 0 0 1-56.305 16.66z"
        fill={primaryColor}
      />
      <path
        d="M718.463 139.448l-22.685-12.311 10.237-18.861a10.5 10.5 0 0 1 14.237-4.22l4.227 2.294a10.5 10.5 0 0 1 4.22 14.237l-10.236 18.861z"
        fill={primaryColor}
      />
      <path
        d="M702.012 120.746l-22.684-12.312 10.231-18.852a10.5 10.5 0 0 1 14.237-4.22l4.228 2.294a10.5 10.5 0 0 1 4.22 14.237l-10.232 18.853z"
        fill={primaryColor}
      />
      <path
        d="M683.451 100.882L660.767 88.57l10.714-19.74a9.5 9.5 0 0 1 12.88-3.818l5.986 3.248a9.5 9.5 0 0 1 3.818 12.882l-10.714 19.74zM660.753 88.557l-29.171-15.832 34.86-64.23a10.5 10.5 0 0 1 14.237-4.22l6.609 3.587a15.17 15.17 0 0 1 6.097 20.57l-32.632 60.125z"
        fill={primaryColor}
      />
      <rect
        x={856.54}
        y={164.65}
        width={14.75}
        height={61.46}
        rx={6}
        ry={6}
        transform="rotate(-151.51 776.45 188.85)"
        fill={primaryColor}
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <rect
        x={840.7}
        y={144.87}
        width={14.75}
        height={61.46}
        rx={6}
        ry={6}
        transform="rotate(-151.51 760.613 169.069)"
        fill={primaryColor}
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <rect
        x={823.29}
        y={122.84}
        width={14.75}
        height={61.46}
        rx={6}
        ry={6}
        transform="rotate(-151.51 743.208 147.03)"
        fill={primaryColor}
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <rect
        x={817.3}
        y={72.04}
        width={14.75}
        height={61.46}
        rx={6}
        ry={6}
        transform="rotate(-151.51 737.214 96.23)"
        fill={primaryColor}
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path
        d="M623.69 168.42s19.1-12-.47-35.21l39.19-20.68s8.3-17.87-17.69-13.79-24.5 9.08-24.5 9.08"
        fill={primaryColor}
        stroke="#fff"
        strokeMiterlimit={10}
      />
    </svg>
  );
};

UndrawFans.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawFans;
