import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawInvite = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 882.5 556.13" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={209.37} y1={265.13} x2={209.37} y2={27.29} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__c" x1={103.29} y1={228.29} x2={103.29} y2={78.66} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={654.37} y1={265.13} x2={654.37} y2={27.29} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={548.29} y1={228.29} x2={548.29} y2={78.66} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={654.37} y1={556.13} x2={654.37} y2={318.29} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={548.29} y1={519.29} x2={548.29} y2={369.66} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={209.37} y1={556.13} x2={209.37} y2={318.29} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={104.29} y1={521.29} x2={104.29} y2={371.66} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={392.5} y1={92.54} x2={392.5} y2={0.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={836.5} y1={92.54} x2={836.5} y2={0.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={392.5} y1={383.54} x2={392.5} y2={291.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={836.5} y1={383.54} x2={836.5} y2={291.54} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__b"
          x1={1055.14}
          y1={751.86}
          x2={1055.14}
          y2={684.73}
          gradientTransform="rotate(-6.07 -5485.254 2373.922)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__n" x1={1024.67} y1={1038.24} x2={1024.67} y2={971.11} xlinkHref="#prefix__b" />
        <linearGradient id="prefix__o" x1={581.17} y1={991.06} x2={581.17} y2={923.93} xlinkHref="#prefix__b" />
      </defs>
      <path fill="url(#prefix__a)" d="M0 27.29h418.74v237.84H0z" />
      <path fill="#fff" d="M4.47 61.91h408.69v197.65H4.47z" />
      <path fill="url(#prefix__c)" d="M32.38 78.66h141.81v149.63H32.38z" />
      <path fill="#e0e0e0" d="M36.85 82.01h134v142.93h-134z" />
      <path fill={primaryColor} opacity={0.2} d="M4.47 31.76h408.69v30.15H4.47z" />
      <path fill="#e0e0e0" d="M225.56 123.88h155.21v10.05H225.56z" />
      <path fill="#f5f5f5" d="M225.56 166.31h155.21v10.05H225.56z" />
      <path fill={primaryColor} opacity={0.2} d="M224.45 145.1h91.56v10.05h-91.56z" />
      <path fill="#69f0ae" opacity={0.2} d="M224.45 187.53h62.53v10.05h-62.53z" />
      <path fill="#69f0ae" d="M298.14 187.53h62.53v10.05h-62.53z" />
      <path fill="url(#prefix__d)" d="M445 27.29h418.74v237.84H445z" />
      <path fill="#fff" d="M449.47 61.91h408.69v197.65H449.47z" />
      <path fill="url(#prefix__e)" d="M477.38 78.66h141.81v149.63H477.38z" />
      <path fill={primaryColor} opacity={0.8} d="M481.85 82.01h134v142.93h-134z" />
      <path
        d="M586.25 138.45c-1-8.49-2.5-17-5.75-24.94s-8.47-15.24-15.74-19.75a18 18 0 0 0-8.7-3c-5.69-.2-10.95 3.64-13.88 8.52a39.74 39.74 0 0 0-2.59 5.27 12.27 12.27 0 0 0-10.18 11.24 31.28 31.28 0 0 0 4.42 59.06v5.33a31.39 31.39 0 0 0-23.45 30.27v14.52h62.57v-14.55a31.39 31.39 0 0 0-23.45-30.27v-5.33a31.28 31.28 0 0 0 23.45-30.28v-.22l3.52 7.83c3.35 7.46 6.78 15.46 5.47 23.54 6.42-10.99 5.89-24.62 4.31-37.24z"
        fill="#fff"
      />
      <path fill={primaryColor} opacity={0.2} d="M449.47 31.76h408.69v30.15H449.47z" />
      <path fill="#e0e0e0" d="M670.56 123.88h155.21v10.05H670.56z" />
      <path fill="#f5f5f5" d="M670.56 166.31h155.21v10.05H670.56z" />
      <path fill={primaryColor} opacity={0.2} d="M669.45 145.1h91.56v10.05h-91.56z" />
      <path fill="#69f0ae" opacity={0.2} d="M669.45 187.53h62.53v10.05h-62.53z" />
      <path fill="#69f0ae" d="M743.14 187.53h62.53v10.05h-62.53z" />
      <path fill="url(#prefix__f)" d="M445 318.29h418.74v237.84H445z" />
      <path fill="#fff" d="M449.47 352.91h408.69v197.65H449.47z" />
      <path fill="url(#prefix__g)" d="M477.38 369.66h141.81v149.63H477.38z" />
      <path fill={primaryColor} opacity={0.8} d="M481.85 373.01h134v142.93h-134z" />
      <path fill={primaryColor} opacity={0.2} d="M449.47 322.76h408.69v30.15H449.47z" />
      <path fill="#e0e0e0" d="M670.56 414.88h155.21v10.05H670.56z" />
      <path fill="#f5f5f5" d="M670.56 457.31h155.21v10.05H670.56z" />
      <path fill={primaryColor} opacity={0.2} d="M669.45 436.1h91.56v10.05h-91.56z" />
      <path fill="#69f0ae" opacity={0.2} d="M669.45 478.53h62.53v10.05h-62.53z" />
      <path fill="#69f0ae" d="M743.14 478.53h62.53v10.05h-62.53z" />
      <path fill="url(#prefix__h)" d="M0 318.29h418.74v237.84H0z" />
      <path fill="#fff" d="M4.47 352.91h408.69v197.65H4.47z" />
      <path fill="url(#prefix__i)" d="M33.38 371.66h141.81v149.63H33.38z" />
      <path fill={primaryColor} opacity={0.8} d="M36.85 373.01h134v142.93h-134z" />
      <path fill={primaryColor} opacity={0.2} d="M4.47 322.76h408.69v30.15H4.47z" />
      <path fill="#e0e0e0" d="M225.56 414.88h155.21v10.05H225.56z" />
      <path fill="#f5f5f5" d="M225.56 457.31h155.21v10.05H225.56z" />
      <path fill={primaryColor} opacity={0.2} d="M224.45 436.1h91.56v10.05h-91.56z" />
      <path fill="#69f0ae" opacity={0.2} d="M224.45 478.53h62.53v10.05h-62.53z" />
      <path fill="#69f0ae" d="M298.14 478.53h62.53v10.05h-62.53z" />
      <path
        d="M111.5 472.6v-5.07a32 32 0 1 0-16 0v5.07a31.12 31.12 0 0 0-23 29.94v14h62v-14a31.12 31.12 0 0 0-23-29.94z"
        fill="#fff"
      />
      <circle cx={103.5} cy={429.54} r={34} fill="#fff" />
      <path
        d="M137.41 431.9s-1.91 36.65 13.09 40.65c0 0-31 17-37-20zM69.59 431.9s1.91 36.65-13.09 40.65c0 0 31 17 37-20z"
        fill="#fff"
      />
      <path
        d="M78.25 141.53a23.91 23.91 0 0 1-2.63-12.4 16.58 16.58 0 0 1 5.46-11.25c3.59-3.06 8.46-4.14 13.16-4.52s9.47-.15 14.1-1.06a29.47 29.47 0 0 0 18.82-12.76 39.63 39.63 0 0 1-.1 10.85c-.7 3.56-2.53 7.06-5.62 9 3.74-1.73 3.34 2.33 2.52 4.76 1.86 2.24 6.36 2.61 6.59 5.51a18.24 18.24 0 0 1-.94 8.57c-1.13 2.67.08 7.38-2.81 7.59"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path
        d="M123.55 117.99s16.45 1.43 4.74 25.86M111.5 181.6v-5.07a32 32 0 1 0-16 0v5.07a31.12 31.12 0 0 0-23 29.94v14h62v-14a31.12 31.12 0 0 0-23-29.94zM554.5 472.73v-5.07a32 32 0 1 0-16 0v5.07a31.12 31.12 0 0 0-23 29.94v14h62v-14a31.12 31.12 0 0 0-23-29.94z"
        fill="#fff"
      />
      <circle cx={546.5} cy={432.54} r={34} fill="#fff" />
      <path
        d="M548.5 397.07c2.73-.68 5.59-1 8.14-2.18a13.29 13.29 0 0 0 7.53-11.87 23 23 0 0 1 3.37 6.66 7.17 7.17 0 0 1 .35 3.94 3.09 3.09 0 0 1-2.82 2.42c2.64.52 5.48 1 7.94-.06s4.08-4.45 2.41-6.56a20.09 20.09 0 0 1 3.74 5.35 6.8 6.8 0 0 1-.28 6.29c-1.51 2.26-4.55 2.9-7.27 2.85q3.59.22 7.2.18a6.92 6.92 0 0 0 3.88-.84c1.11-.76 1.68-2.46.8-3.48a16.16 16.16 0 0 1-2.93 17.57c-2.84 2.95-6.86 4.84-8.86 8.41-1.21 2.15-1.53 4.67-2.28 7a20.23 20.23 0 0 1-4.37 7.55 13.09 13.09 0 0 1-8.35 4.53c-4.47.34-8.6-2.48-11.66-5.76s-5.51-7.16-9-10c-5-4.1-12.26-5.07-16.95-9.37 2.69-5.06 8.69-10.07 13.06-13.76a41 41 0 0 1 16.35-8.87z"
        fill="#fff"
      />
      <circle cx={392.5} cy={46.54} r={46} fill="url(#prefix__j)" />
      <circle cx={836.5} cy={46.54} r={46} fill="url(#prefix__k)" />
      <circle cx={392.5} cy={337.54} r={46} fill="url(#prefix__l)" />
      <circle cx={836.5} cy={337.54} r={46} fill="url(#prefix__m)" />
      <circle cx={392.5} cy={46.54} r={42} fill="#fff" />
      <circle cx={392.5} cy={337.54} r={42} fill="#fff" />
      <circle cx={836.5} cy={337.54} r={42} fill="#fff" />
      <circle cx={836.5} cy={46.54} r={42} fill="#fff" />
      <path
        fill="url(#prefix__b)"
        d="M878.53 9.18L863.8 0l-28.31 45.15-19.13-11.76-9.52 15.24 27.8 16.82 6.92 4.42 36.97-60.69z"
      />
      <path
        fill={primaryColor}
        d="M877.51 9.03L864.17.93 836.18 47l-19.62-11.92-8.11 13.34 26.29 15.94 6.73 3.99 36.04-59.32z"
      />
      <path
        fill="url(#prefix__n)"
        d="M878.53 297.18L863.8 288l-28.31 45.15-19.13-11.76-9.52 15.24 27.8 16.82 6.92 4.42 36.97-60.69z"
      />
      <path
        fill={primaryColor}
        d="M877.51 297.03l-13.34-8.1L836.18 335l-19.62-11.92-8.11 13.34 26.29 15.94 6.73 3.99 36.04-59.32z"
      />
      <path
        fill="url(#prefix__o)"
        d="M432.53 297.18L417.8 288l-28.31 45.15-19.13-11.76-9.52 15.24 27.8 16.82 6.92 4.42 36.97-60.69z"
      />
      <path
        fill={primaryColor}
        d="M431.51 297.03l-13.34-8.1L390.18 335l-19.62-11.92-8.11 13.34 26.29 15.94 6.73 3.99 36.04-59.32z"
      />
    </svg>
  );
};

UndrawInvite.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawInvite;
