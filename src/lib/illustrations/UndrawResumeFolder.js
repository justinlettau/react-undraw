import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawResumeFolder = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 729.22 746.14" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={459.12}
          y1={621}
          x2={459.12}
          y2={193.38}
          gradientTransform="translate(-9.77 -29.03)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={459.12}
          y1={355.96}
          x2={459.12}
          y2={192.97}
          gradientTransform="translate(-44.96 -24.28)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#b3b3b3" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="#b3b3b3" stopOpacity={0.1} />
          <stop offset={1} stopColor="#b3b3b3" stopOpacity={0.05} />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          x1={890.03}
          y1={384.1}
          x2={893.49}
          y2={466.67}
          gradientTransform="rotate(163.7 613.796 311.318)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient id="prefix__d" x1={630.78} y1={714.25} x2={630.78} y2={285.78} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__e"
          x1={737.4}
          y1={672.7}
          x2={737.4}
          y2={245.08}
          gradientTransform="translate(15.96 .36)"
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__f"
          x1={737.4}
          y1={407.66}
          x2={737.4}
          y2={244.68}
          gradientTransform="translate(1.98 1.1)"
          xlinkHref="#prefix__b"
        />
        <linearGradient
          id="prefix__g"
          x1={612.39}
          y1={329.04}
          x2={615.85}
          y2={411.61}
          gradientTransform="rotate(173.26 626.965 354.401)"
          xlinkHref="#prefix__c"
        />
        <linearGradient id="prefix__h" x1={382.92} y1={428.03} x2={382.92} y2={0.4} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={382.92} y1={162.99} x2={382.92} y2={0} xlinkHref="#prefix__b" />
        <linearGradient
          id="prefix__j"
          x1={729.45}
          y1={498.21}
          x2={732.9}
          y2={580.79}
          gradientTransform="rotate(180 625.234 347.191)"
          xlinkHref="#prefix__c"
        />
        <linearGradient id="prefix__k" x1={328.81} y1={746.14} x2={328.81} y2={254.91} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={329.34} y1={675.01} x2={329.34} y2={373.01} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__m"
          x1={683.6}
          y1={52.97}
          x2={690.12}
          y2={208.87}
          gradientTransform="rotate(180 625.234 347.191)"
          xlinkHref="#prefix__c"
        />
      </defs>
      <path
        transform="matrix(.96 -.27 .27 .96 -319.57 55.74)"
        fill="url(#prefix__a)"
        d="M286.73 164.35h325.25v427.62H286.73z"
      />
      <path transform="rotate(-15.37 11.546 1083.99)" fill="url(#prefix__b)" d="M251.16 168.7h326v162.99h-326z" />
      <path fill="#eee" d="M5.356 140.307l305.595-84.002 110.704 402.731L116.06 543.04z" />
      <path fill={primaryColor} d="M4.895 140.023l306.299-84.196 42.193 153.496L47.09 293.52z" />
      <path fill="#bdbdbd" d="M123.414 319.118l83.089-22.84 1.74 6.336-83.087 22.84z" />
      <path fill="#f5f5f5" d="M130.384 344.474l83.088-22.84 1.742 6.336-83.088 22.84z" />
      <path fill="#69f0ae" d="M126.903 331.798l216.875-59.615 1.742 6.335-216.876 59.615z" />
      <path
        fill="#fff"
        d="M140.72 164.409l83.088-22.84 1.741 6.336-83.088 22.839zM144.59 178.488l133.787-36.776 1.742 6.335-133.788 36.776z"
      />
      <rect
        x={409.8}
        y={255.17}
        width={86.17}
        height={7.3}
        rx={3.09}
        ry={3.09}
        transform="rotate(-15.37 50.3 1092.615)"
        opacity={0.2}
      />
      <circle cx={325.31} cy={413.18} r={15.34} transform="rotate(-15.37 -77.308 1247.023)" fill="#69f0ae" />
      <path fill="#bdbdbd" d="M140.269 380.381l83.088-22.84 1.741 6.336-83.088 22.84z" />
      <path fill="#f5f5f5" d="M147.229 405.737l83.088-22.84 1.741 6.336-83.088 22.84z" />
      <path fill="#e0e0e0" d="M143.747 393.06l216.876-59.615 1.74 6.335-216.875 59.616z" />
      <circle cx={342.15} cy={474.44} r={15.34} transform="rotate(-15.37 -60.45 1308.305)" fill="#e0e0e0" />
      <path fill="#bdbdbd" d="M157.1 441.637l83.089-22.84 1.741 6.336-83.088 22.84z" />
      <path fill="#f5f5f5" d="M164.07 466.983l83.089-22.84 1.741 6.336-83.088 22.84z" />
      <path fill="#e0e0e0" d="M160.582 454.316l216.875-59.615 1.742 6.335-216.876 59.615z" />
      <circle cx={359} cy={535.7} r={15.34} transform="rotate(-15.37 -43.592 1369.587)" fill="#e0e0e0" />
      <path
        d="M274.62 287.15A42.28 42.28 0 1 0 318 233.24l3 10.47a14.36 14.36 0 0 1-9.8 17.72 14.36 14.36 0 0 1-17.72-9.8l-3-10.47a42.3 42.3 0 0 0-15.86 45.99z"
        transform="translate(-235.39 -76.93)"
        fill="url(#prefix__c)"
      />
      <path
        d="M119.61 183.5a42.28 42.28 0 1 0-44 53.38l-2.89-10.5a14.36 14.36 0 0 1 10-17.6 14.36 14.36 0 0 1 17.6 10l2.89 10.5a42.3 42.3 0 0 0 16.4-45.78z"
        fill={primaryColor}
      />
      <circle
        cx={312.7}
        cy={266.03}
        r={16.25}
        transform="rotate(-15.37 -89.932 1099.838)"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path
        d="M82.7 208.78h0a14.36 14.36 0 0 0-10 17.6l2.89 10.5a42.44 42.44 0 0 0 27.61-7.59l-2.89-10.5a14.36 14.36 0 0 0-17.61-10.01zM61.27 192.58a15.77 15.77 0 0 1-3.84-7.42 10.93 10.93 0 0 1 1.51-8.11c1.75-2.57 4.65-4.11 7.58-5.17s6-1.75 8.78-3.14a19.44 19.44 0 0 0 9.74-11.41 26.14 26.14 0 0 1 1.83 6.92 8.81 8.81 0 0 1-2 6.68c2.08-1.76 2.53.9 2.44 2.59 1.57 1.1 4.5.55 5.16 2.35a12 12 0 0 1 .9 5.61c-.25 1.9 1.34 4.68-.46 5.32"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path d="M85.61 170.31s11.2-2.05 7.87 16.32" fill="#fff" />
      <path fill="url(#prefix__d)" d="M637.77 714.25H532.34V285.78h196.88l-91.45 428.47z" />
      <path fill="#bdbdbd" d="M632.52 714.25H529.17V285.78h192.99l-89.64 428.47z" />
      <path
        transform="rotate(-6.05 -92.203 2647.877)"
        fill="url(#prefix__e)"
        d="M590.74 245.44h325.25v427.62H590.74z"
      />
      <path transform="rotate(-6.05 -106.198 2515.918)" fill="url(#prefix__f)" d="M576.38 245.78h326v162.99h-326z" />
      <path fill="#f5f5f5" d="M338.216 189.692L653.38 156.29l44.02 415.344-315.164 33.403z" />
      <path fill={primaryColor} d="M337.809 189.339l315.89-33.48 16.779 158.303-315.891 33.48z" />
      <path fill="#bdbdbd" d="M425.77 385.267l85.69-9.082.693 6.533-85.69 9.082z" />
      <path fill="#f5f5f5" d="M428.54 411.41l85.69-9.083.693 6.534-85.69 9.082z" />
      <path fill="#69f0ae" d="M427.152 398.34l223.667-23.706.693 6.533-223.667 23.706z" />
      <path
        fill="#fff"
        d="M467.9 235.401l85.69-9.082.693 6.534-85.69 9.082zM469.432 249.93l137.977-14.625.693 6.534-137.978 14.624z"
      />
      <rect
        x={733.11}
        y={338.4}
        width={86.17}
        height={7.3}
        rx={3.09}
        ry={3.09}
        transform="rotate(-6.05 -69.41 2530.766)"
        opacity={0.2}
      />
      <circle cx={625.29} cy={473.71} r={15.34} transform="rotate(-6.05 -220.298 2662.36)" fill="#69f0ae" />
      <path fill="#bdbdbd" d="M432.471 448.439l85.69-9.082.693 6.533-85.69 9.082z" />
      <path fill="#f5f5f5" d="M435.242 474.581l85.69-9.082.692 6.534-85.69 9.082z" />
      <path fill="#e0e0e0" d="M433.853 461.511l223.667-23.705.692 6.533-223.667 23.706z" />
      <circle cx={631.99} cy={536.88} r={15.34} transform="rotate(-6.05 -213.578 2725.527)" fill="#e0e0e0" />
      <path fill="#bdbdbd" d="M439.163 511.612l85.69-9.082.692 6.533-85.69 9.082z" />
      <path fill="#f5f5f5" d="M441.932 537.754l85.69-9.082.693 6.534-85.69 9.082z" />
      <path fill="#e0e0e0" d="M440.544 524.684l223.668-23.705.692 6.533-223.667 23.706z" />
      <circle cx={638.68} cy={600.06} r={15.34} transform="rotate(-6.05 -206.954 2788.687)" fill="#e0e0e0" />
      <path
        d="M595.69 341.12A42.28 42.28 0 1 0 647.23 295l1.28 10.82A14.36 14.36 0 0 1 636 321.67a14.36 14.36 0 0 1-15.9-12.54l-1.28-10.82a42.3 42.3 0 0 0-23.13 42.81z"
        transform="translate(-235.39 -76.93)"
        fill="url(#prefix__g)"
      />
      <path
        d="M443.94 250.86a42.28 42.28 0 1 0-52.09 45.54l-1.15-10.83a14.36 14.36 0 0 1 12.73-15.75 14.36 14.36 0 0 1 15.75 12.73l1.15 10.83a42.3 42.3 0 0 0 23.61-42.52z"
        fill={primaryColor}
      />
      <circle
        cx={636.7}
        cy={326.46}
        r={16.25}
        transform="rotate(-6.05 -208.912 2515.14)"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path
        d="M403.43 269.82h0a14.36 14.36 0 0 0-12.73 15.75l1.15 10.83a42.44 42.44 0 0 0 28.48-3l-1.15-10.83a14.36 14.36 0 0 0-15.75-12.75zM384.91 250.36a15.77 15.77 0 0 1-2.59-7.95 10.93 10.93 0 0 1 2.8-7.75c2.14-2.26 5.26-3.31 8.32-3.88s6.17-.71 9.17-1.71a19.44 19.44 0 0 0 11.46-9.68 26.14 26.14 0 0 1 .69 7.12 8.81 8.81 0 0 1-3.06 6.27c2.33-1.4 2.35 1.29 2 2.95 1.37 1.34 4.35 1.27 4.71 3.16a12 12 0 0 1 0 5.68c-.56 1.83.57 4.84-1.32 5.17"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path d="M412.54 232.33s11.38-.21 5.13 17.38" fill="#fff" />
      <path fill="url(#prefix__h)" d="M220.3.4h325.25v427.62H220.3z" />
      <path fill="url(#prefix__i)" d="M219.92 0h326v162.99h-326z" />
      <path fill="#f5f5f5" d="M224.46 3.71h316.93v417.67H224.46z" />
      <path fill={primaryColor} d="M224.1 3.32h317.66v159.19H224.1z" />
      <path fill="#bdbdbd" d="M290.91 207.42h86.17v6.57h-86.17z" />
      <path fill="#f5f5f5" d="M290.91 233.71h86.17v6.57h-86.17z" />
      <path fill="#69f0ae" d="M290.91 220.57h224.92v6.57H290.91z" />
      <path fill="#fff" d="M348.6 62.84h86.17v6.57H348.6zM348.6 77.44h138.75v6.57H348.6z" />
      <rect x={374.89} y={96.43} width={86.17} height={7.3} rx={3.09} ry={3.09} opacity={0.2} />
      <circle cx={254.04} cy={215.09} r={15.34} fill="#69f0ae" />
      <path fill="#bdbdbd" d="M290.91 270.95h86.17v6.57h-86.17z" />
      <path fill="#f5f5f5" d="M290.91 297.24h86.17v6.57h-86.17z" />
      <path fill="#e0e0e0" d="M290.91 284.1h224.92v6.57H290.91z" />
      <circle cx={254.04} cy={278.62} r={15.34} fill="#e0e0e0" />
      <path fill="#bdbdbd" d="M290.91 334.49h86.17v6.57h-86.17z" />
      <path fill="#f5f5f5" d="M290.91 360.77h86.17v6.57h-86.17z" />
      <path fill="#e0e0e0" d="M290.91 347.63h224.92v6.57H290.91z" />
      <circle cx={254.04} cy={342.15} r={15.34} fill="#e0e0e0" />
      <path
        d="M474 157.06a42.28 42.28 0 1 0 56.12-40.48l.13 10.89A14.36 14.36 0 0 1 516.07 142a14.36 14.36 0 0 1-14.49-14.14l-.13-10.89A42.3 42.3 0 0 0 474 157.06z"
        transform="translate(-235.39 -76.93)"
        fill="url(#prefix__j)"
      />
      <path
        d="M323.16 75.68a42.28 42.28 0 1 0-56.6 39.8v-10.9a14.36 14.36 0 0 1 14.32-14.32 14.36 14.36 0 0 1 14.32 14.32v10.89a42.3 42.3 0 0 0 27.96-39.79z"
        fill={primaryColor}
      />
      <circle cx={280.9} cy={69.87} r={16.25} fill="#fff" stroke="#fff" strokeMiterlimit={10} />
      <path
        d="M280.87 90.26h0a14.36 14.36 0 0 0-14.32 14.32v10.89a42.44 42.44 0 0 0 28.64 0v-10.89a14.36 14.36 0 0 0-14.32-14.32zM264.51 68.96a15.77 15.77 0 0 1-1.73-8.18 10.93 10.93 0 0 1 3.6-7.42c2.37-2 5.58-2.73 8.68-3s6.24-.1 9.3-.7a19.44 19.44 0 0 0 12.41-8.42 26.14 26.14 0 0 1-.07 7.15 8.81 8.81 0 0 1-3.7 5.91c2.47-1.14 2.2 1.53 1.67 3.14 1.22 1.48 4.2 1.72 4.35 3.64a12 12 0 0 1-.62 5.65c-.75 1.76.05 4.87-1.86 5"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path d="M293.88 53.95s11.34 1 3.27 17.82" fill="#fff" />
      <path fill="url(#prefix__k)" d="M190.59 304.74l-71.17-49.83H20.88v491.23h615.86v-441.4H190.59z" />
      <path fill="#fff" d="M26.15 309.78V738.25h606.37V309.78H193.25" />
      <path fill="#bdbdbd" d="M193.25 309.78l-70.08-48.37H26.15v48.37" />
      <path fill="url(#prefix__l)" d="M162.34 373.01h334v302h-334z" />
      <path fill="#fff" d="M166.88 375.21H493.3v294.31H166.88z" />
      <path fill="#bdbdbd" d="M268.19 595.49h128.34V606H268.19z" />
      <path fill="#e0e0e0" d="M189.87 616.52h280.44v10.51H189.87zM189.87 637.55h280.44v10.51H189.87z" />
      <path
        d="M485.62 564.67a79.84 79.84 0 1 0 106-76.43l.25 20.57a27.11 27.11 0 0 1-26.7 27.36 27.11 27.11 0 0 1-27.36-26.7l-.25-20.57a79.87 79.87 0 0 0-51.94 75.77z"
        transform="translate(-235.39 -76.93)"
        fill="url(#prefix__m)"
      />
      <path
        d="M409.93 479.35a79.84 79.84 0 1 0-106.87 75.14v-20.57a27.11 27.11 0 0 1 27-27 27.11 27.11 0 0 1 27 27v20.57a79.87 79.87 0 0 0 52.87-75.14z"
        fill="#bdbdbd"
      />
      <rect
        x={323.18}
        y={488.01}
        width={9.6}
        height={33.85}
        rx={4.8}
        ry={4.8}
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <circle cx={328.03} cy={461.87} r={30.69} fill="#fff" stroke="#fff" strokeMiterlimit={10} />
      <path
        d="M327.98 500.38h0a27.11 27.11 0 0 0-27 27v20.57a80.13 80.13 0 0 0 54.07 0v-20.53a27.11 27.11 0 0 0-27.07-27.04zM297.08 460.17a29.77 29.77 0 0 1-3.27-15.44 20.64 20.64 0 0 1 6.8-14c4.47-3.81 10.53-5.16 16.39-5.63s11.79-.19 17.55-1.32a36.69 36.69 0 0 0 23.43-15.89c.37 4.5.74 9.07-.13 13.51s-3.15 8.79-7 11.16c4.66-2.16 4.15 2.9 3.14 5.93 2.31 2.79 7.92 3.25 8.21 6.86s.24 7.34-1.17 10.67.1 9.19-3.5 9.45"
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path d="M352.55 431.82s21.41 1.87 6.17 33.65" fill="#fff" />
    </svg>
  );
};

UndrawResumeFolder.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawResumeFolder;
