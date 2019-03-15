import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawOrganizingProjects = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 862.84 574" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={491.81} y1={649.09} x2={491.81} y2={275.78} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={211.11} y1={639.3} x2={291.83} y2={639.3} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={743.56} y1={708.81} x2={743.56} y2={647.8} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={322.8} y1={543.16} x2={322.8} y2={385.06} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={519.12} y1={123.68} x2={519.12} y2={29.32} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={534.56} y1={145.48} x2={534.56} y2={51.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={656.13} y1={119.52} x2={656.13} y2={65.4} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={824.71} y1={251.81} x2={824.71} y2={236.13} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={771.51} y1={162.36} x2={771.51} y2={18.04} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={940.67} y1={222.57} x2={940.67} y2={201.95} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={674.92} y1={262.9} x2={674.92} y2={202.96} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={637.96} y1={255.27} x2={637.96} y2={180.97} xlinkHref="#prefix__a" />
      </defs>
      <path
        d="M592.51 559.45c-6.7-24.31-43.89-42.23-72.91-46.86v-11.68l1.6-.62a25.8 25.8 0 0 0-1.39-6.84A70.43 70.43 0 0 0 550.67 469 79.36 79.36 0 0 0 535 346.7a15.57 15.57 0 0 0-7-28.7 30.39 30.39 0 0 0-47.31-35.31 30.38 30.38 0 0 1 44.65 26.83v.79a30.39 30.39 0 1 0-58.9 11.37A15.19 15.19 0 0 0 456.4 344 79.36 79.36 0 0 0 437 470.18a70.45 70.45 0 0 0 28.62 22.68v19.47c-29.33 4.19-67.95 22.44-74.69 47.35-5.88 21.71-12.16 45.55-15.28 59.55 26.77 18.81 82.94 29.86 118.15 29.86 33.45 0 88.12-10 114.1-27.1-2.78-15.38-9.25-40.27-15.39-62.54zm-53.62-224.58v.82a15.2 15.2 0 0 0-12.62-14.11q.44-.75.84-1.52a15.2 15.2 0 0 1 11.78 14.81z"
        transform="translate(-168.58 -163)"
        fill="url(#prefix__a)"
      />
      <path
        d="M325.2 480.77c32.5 0 85.61-9.69 110.85-26.33-2.73-14.94-9-39.12-15-60.76-7.59-27.56-55.51-46.66-84.1-46.66h-27.53c-28.67 0-76.66 19.22-84.16 46.89-5.71 21.09-11.84 44.26-14.84 57.86 26 18.23 80.58 29 114.78 29z"
        fill={primaryColor}
      />
      <circle cx={324.68} cy={252.59} r={77.09} fill="#f55f44" />
      <path
        d="M303.87 306.18h40.33a6 6 0 0 1 6 6v41.24a24.78 24.78 0 0 1-24.78 24.78h-2.85a24.78 24.78 0 0 1-24.78-24.78v-41.2a6 6 0 0 1 6-6z"
        fill="#fda57d"
      />
      <path
        d="M326.42 341.1a68 68 0 0 0 25.34-4.88 25.11 25.11 0 0 0-25-23.48h-2.15a25.12 25.12 0 0 0-25 22.86 68 68 0 0 0 26.81 5.5z"
        opacity={0.05}
      />
      <circle cx={324.82} cy={266.34} r={68.2} fill="#fda57d" />
      <circle cx={301.72} cy={177.14} r={14.76} fill="#f55f44" />
      <circle cx={354.2} cy={177.14} r={14.76} fill="#f55f44" />
      <circle cx={326.32} cy={152.54} r={29.52} fill="#f55f44" />
      <path
        d="M357.48 159.1a14.69 14.69 0 0 0-8.24 2.51 14.76 14.76 0 0 1 13.18 26.14 14.75 14.75 0 0 0-5-28.65z"
        fill="#f55f44"
      />
      <path
        d="M331.24 118.09a29.4 29.4 0 0 0-18.82 6.74 29.52 29.52 0 0 1 32.63 48.85 29.52 29.52 0 0 0-13.86-55.59zM275.47 205s8.2 54.13 111.54 24.6l-50.85-44.29z"
        fill="#f55f44"
      />
      <path
        d="M291.35 619.44a15.67 15.67 0 0 0-6.21-16.62 46.3 46.3 0 0 1-4.16-2.69 15.13 15.13 0 0 1-4.17-7c-2.09-6.26-2.74-13.29-6.4-18.95-3.33-5.15-9.81-6.66-15.56-7.17a12.35 12.35 0 0 0-6.21.58c-3.2 1.45-4.73 5.23-4.88 8.75s.77 7 1 10.49-.4 7.37-3 9.75-6.3 2.66-9.73 3.14a64.42 64.42 0 0 0-13.17 3.28c-3.58 1.3-7.57 3.66-7.74 7.47-.14 3.11 2.37 5.6 4.26 8.07a20.65 20.65 0 0 1 4.09 16.46c-1.22 5.8-5.29 10.77-6 16.65A7.23 7.23 0 0 0 214 656a8 8 0 0 0 2.23 2.36c2.21 1.71 4.68 3.08 6.78 4.94 4.37 3.87 6.73 9.48 8.55 15 .18.53.33 1.07.5 1.61h-4.29a15.92 15.92 0 0 0-15.88 15.88 15.92 15.92 0 0 0 15.88 15.88h42.86a15.92 15.92 0 0 0 15.88-15.88A15.92 15.92 0 0 0 270.66 680h-11.75c2.78-3.72 5.68-7.22 10-8.65s9.48-.59 12.84-3.58a10.07 10.07 0 0 0 2.91-5.77 17.2 17.2 0 0 0-1.88-11.42c-1.35-2.41-3.33-4.6-3.76-7.33a10.87 10.87 0 0 1 1.62-6.77c3.22-5.96 8.96-10.53 10.71-17.04z"
        transform="translate(-168.58 -163)"
        fill="url(#prefix__b)"
        opacity={0.7}
      />
      <path
        d="M86.1 407.47a11.76 11.76 0 0 0-5.91.55c-3.05 1.38-4.5 5-4.64 8.33s.73 6.65 1 10-.38 7-2.84 9.28-6 2.53-9.27 3a61.35 61.35 0 0 0-12.56 3.12c-3.41 1.24-7.21 3.48-7.37 7.11-.13 3 2.26 5.33 4.06 7.69a19.67 19.67 0 0 1 3.9 15.65c-1.16 5.52-5 10.26-5.74 15.86a6.88 6.88 0 0 0 .56 4.19 7.66 7.66 0 0 0 2.12 2.25c2.11 1.63 4.46 2.94 6.45 4.7 4.16 3.68 6.41 9 8.15 14.31a115.87 115.87 0 0 1 4 15.87c3.58-2.3 8.21-2.27 12-4.15 8.14-4 10.88-15.55 19.47-18.43 4.07-1.36 9-.56 12.23-3.41a9.59 9.59 0 0 0 2.78-5.5 16.38 16.38 0 0 0-1.81-10.89c-1.29-2.3-3.17-4.38-3.58-7a10.35 10.35 0 0 1 1.54-6.45c3.09-5.62 8.55-10 10.22-16.17a14.93 14.93 0 0 0-5.92-15.82 44.09 44.09 0 0 1-4-2.56 14.41 14.41 0 0 1-4-6.66c-2-6-2.61-12.65-6.1-18-3.09-4.95-9.26-6.34-14.74-6.87z"
        fill="#4db6ac"
      />
      <path d="M86.04 407.67S93.6 509 73.95 526.35" fill="none" stroke="#535461" strokeMiterlimit={10} opacity={0.6} />
      <rect x={45.23} y={515.01} width={71.05} height={30.24} rx={14.3} ry={14.3} fill={primaryColor} />
      <path
        d="M44.42 447s19.33-2.26 42.92 12.1M87.02 471.17A49.93 49.93 0 0 1 120.81 450M46.36 488.18s26.79-4.54 39.1 3M83.93 501.59s14-6.36 29.8-1.19"
        fill="none"
        stroke="#535461"
        strokeMiterlimit={10}
        opacity={0.6}
      />
      <path
        d="M763.71 658.7v-10.9h-54.47v50.39a10.62 10.62 0 0 0 10.62 10.62h33.23a10.62 10.62 0 0 0 10.62-10.62V687a14.16 14.16 0 1 0 0-28.33zm0 22.88v-17.44a8.72 8.72 0 1 1 0 17.43z"
        transform="translate(-168.58 -163)"
        fill="url(#prefix__c)"
        opacity={0.7}
      />
      <path
        d="M593.42 497.4a12.93 12.93 0 1 0 12.93 12.93 12.93 12.93 0 0 0-12.93-12.93zm0 20.89a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
        fill={primaryColor}
      />
      <path
        d="M593.42 497.4a12.93 12.93 0 1 0 12.93 12.93 12.93 12.93 0 0 0-12.93-12.93zm0 20.89a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"
        opacity={0.1}
      />
      <path
        d="M543.64 487.45h49.74v46a9.75 9.75 0 0 1-9.75 9.75h-30.24a9.75 9.75 0 0 1-9.75-9.75v-46z"
        fill={primaryColor}
      />
      <path fill="#e0e0e0" d="M0 543.16h645.61v21.88H0z" />
      <rect
        x={185.52}
        y={385.06}
        width={274.56}
        height={158.1}
        rx={14.5}
        ry={14.5}
        fill="url(#prefix__d)"
        opacity={0.7}
      />
      <rect x={190.5} y={387.98} width={264.61} height={155.18} rx={26.84} ry={26.84} fill="#535461" />
      <circle cx={322.8} cy={465.57} r={8.95} fill="#fff" />
      <path fill="#e0e0e0" d="M27.36 565.05h590.89V574H27.36z" />
      <path
        opacity={0.1}
        d="M27.36 565.05h590.89v2.98H27.36zM584.42 487.45v46a9.7 9.7 0 0 1-9.7 9.7h5a9.7 9.7 0 0 0 9.7-9.7v-46z"
      />
      <path
        d="M553.42 450.37a2.9 2.9 0 0 0-2.2 1.12c-.65 1.18.53 2.52 1.61 3.33 2 1.5 4.09 3 5.45 5.07s1.78 5 .3 7c-1.93 2.62-6.55 3.19-7 6.41-.29 2.07 1.5 3.84 3.32 4.88 4.48 2.57 10.26 3.25 13.5 7.27 1.34-2.76 4.35-4.36 7.34-5s6.1-.63 9.14-1.09a3.16 3.16 0 0 0 2.54-1.36c.85-1.72-1.57-3.79-.73-5.51.64-1.32 2.5-1.21 3.86-1.74 2.22-.86 3.13-3.71 2.5-6s-2.41-4.09-4.28-5.56c-5-4-11.1-6.29-17.23-8-2.85-.78-6.2-2-9.16-2.12s-6.1.82-8.96 1.3z"
        fill="#eee"
      />
      <path fill="#535461" opacity={0.1} d="M428.37 0h434.48v297.67H428.37z" />
      <rect x={467.98} y={29.32} width={102.28} height={94.36} rx={4.5} ry={4.5} fill="url(#prefix__e)" opacity={0.5} />
      <rect x={469.23} y={30.05} width={99.92} height={92.07} rx={4.5} ry={4.5} fill="#f5f5f5" />
      <rect x={476.93} y={45.21} width={16.85} height={15.17} rx={4.5} ry={4.5} fill={primaryColor} />
      <rect x={498.84} y={45.21} width={66.99} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={498.84} y={50.27} width={66.99} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={475.25} y={68.62} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={475.25} y={73.67} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={475.25} y={80.41} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={475.25} y={85.47} width={52.24} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={475.25} y={92.19} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={475.25} y={97.25} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={475.25} y={103.99} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={475.25} y={109.04} width={52.24} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={483.42} y={51.12} width={102.28} height={94.36} rx={4.5} ry={4.5} fill="url(#prefix__f)" opacity={0.5} />
      <rect x={484.67} y={51.85} width={99.92} height={92.07} rx={4.5} ry={4.5} fill="#fff" />
      <rect x={492.37} y={67.02} width={16.85} height={15.17} rx={4.5} ry={4.5} fill={primaryColor} />
      <rect x={514.27} y={67.02} width={66.99} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={514.27} y={72.07} width={66.99} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={490.68} y={90.42} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={490.68} y={95.48} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={490.68} y={102.22} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={490.68} y={107.27} width={52.24} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={490.68} y={114} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={490.68} y={119.05} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={490.68} y={125.79} width={90.58} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <rect x={490.68} y={130.85} width={52.24} height={1.69} rx={0.8} ry={0.8} fill="#e0e0e0" />
      <path fill="url(#prefix__g)" d="M627.96 65.4h56.33v54.12h-56.33z" />
      <path fill="#f5f5f5" d="M628.85 66.72h54.56v51.69h-54.56z" />
      <path
        d="M829.53 238.78v-2.65h-9.65v2.65h-6.76v13h23.16v-13zm-8.45-1.69h7.24v1.69h-7.24z"
        transform="translate(-168.58 -163)"
        fill="url(#prefix__h)"
        opacity={0.5}
      />
      <path fill={primaryColor} opacity={0.6} d="M645.53 76.22h21.21v11.93h-21.21z" />
      <path
        fill={primaryColor}
        opacity={0.6}
        d="M651.71 73.79v3.09h1.11v-2.21h6.62v2.21h1.11v-3.09h-8.84zM646.74 97.43h19.66v2.65h-19.66z"
      />
      <path fill="#bdbdbd" d="M639.34 102.29h33.58v2.65h-33.58z" />
      <path fill="url(#prefix__i)" d="M710.1 18.04h122.84v144.32H710.1z" opacity={0.5} />
      <path fill="#fff" d="M713.87 20.36h116.45v138.81H713.87z" />
      <path
        d="M947 205.44v-3.49h-12.67v3.49h-8.88v17.13h30.45v-17.13zm-11.1-2.22h9.52v2.22h-9.52z"
        transform="translate(-168.58 -163)"
        fill="url(#prefix__j)"
        opacity={0.5}
      />
      <path fill={primaryColor} d="M758.16 43.01h27.88v15.68h-27.88z" />
      <path fill={primaryColor} d="M766.29 39.82v4.06h1.45v-2.9h8.71v2.9h1.45v-4.06h-11.61z" />
      <path
        fill="#e0e0e0"
        d="M731.29 81.26h81.89v3.48h-81.89zM731.29 104.2h81.89v3.48h-81.89zM731.29 110.3h81.89v3.48h-81.89zM731.29 98.11h34.56v3.48h-34.56z"
      />
      <path fill="#3ad29f" opacity={0.6} d="M787.34 98.11h25.84v3.48h-25.84z" />
      <path fill={primaryColor} d="M760.04 124.53h25.84v3.48h-25.84z" />
      <path fill="url(#prefix__k)" d="M638.43 202.96h72.99v59.95h-72.99z" opacity={0.5} />
      <path fill="#f2f2f2" d="M639.28 204.09h71.14v57.82h-71.14z" />
      <path fill={primaryColor} d="M639.28 204.09h71.14v12.9h-71.14z" />
      <path opacity={0.1} d="M639.28 204.09h71.14v12.9h-71.14z" />
      <path
        fill="#e0e0e0"
        d="M644.95 221.66h59.81v7.51h-59.81zM644.95 234.84h43.65v2.55h-43.65zM644.95 239.24h28.34v2.55h-28.34zM644.95 243.63h37.41v2.55h-37.41zM644.95 248.02h43.65v2.55h-43.65zM644.95 252.42h14.6v2.55h-14.6z"
      />
      <path fill="url(#prefix__l)" d="M592.73 180.97h90.46v74.3h-90.46z" opacity={0.5} />
      <path fill="#fff" d="M593.78 182.37h88.18v71.67h-88.18z" />
      <path fill={primaryColor} d="M593.78 182.37h88.18v15.98h-88.18z" />
      <path fill="#f5f5f5" d="M600.81 204.16h74.13v9.31h-74.13z" />
      <path
        fill="#e0e0e0"
        d="M600.81 220.49h54.1v3.16h-54.1zM600.81 225.94h35.13v3.16h-35.13zM600.81 231.38h46.37v3.16h-46.37zM600.81 236.83h54.1v3.16h-54.1zM600.81 242.27h18.09v3.16h-18.09z"
      />
      <path fill="#69f0ae" d="M604.67 207.32h21.08v2.81h-21.08z" />
      <circle cx={469.37} cy={366.07} r={12.21} fill="#535461" opacity={0.1} />
      <circle cx={492.06} cy={326.81} r={12.21} fill="#535461" opacity={0.1} />
    </svg>
  );
};

UndrawOrganizingProjects.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawOrganizingProjects;
