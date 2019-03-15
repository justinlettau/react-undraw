import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawContainerShip = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 932.38 646.22" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={404.69} y1={367.3} x2={404.69} y2={232.32} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={593.97} y1={626.69} x2={593.97} y2={452.02} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={738.07} y1={414.72} x2={738.07} y2={394.25} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={786.73} y1={415.26} x2={786.73} y2={393.72} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={746.05} y1={367.4} x2={746.05} y2={77.08} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={116.36} y1={371.39} x2={116.36} y2={347.46} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={169} y1={371.39} x2={169} y2={347.46} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={221.64} y1={371.39} x2={221.64} y2={347.46} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={274.28} y1={371.39} x2={274.28} y2={347.46} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={398.2} y1={240.81} x2={398.2} y2={193.49} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={545.2} y1={177.41} x2={545.2} y2={146.89} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={816.2} y1={157.41} x2={816.2} y2={126.89} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={138.38} y1={143.68} x2={138.38} y2={9.68} xlinkHref="#prefix__a" />
      </defs>
      <path
        fill="url(#prefix__a)"
        d="M606.95 232.72v-.4h-14.59v.4h-13.78v-.4h-14.59v.4H550.2v-.4h-14.59v.4h-39.72v-.4H481.3v.4h-13.79v-.4h-14.59v.4h-13.78v-.4h-14.59v.4h-39.72v-.4h-14.6v.4h-13.78v-.4h-14.59v.4h-13.78v-.4h-14.59v.4h-19.86v67.29h-19.87v-.4h-14.59v.4h-13.78v-.4H230.8v.4h-13.78v-.4h-14.59v.4h-19.87v67.29h221.32v-67.29h.81v67.29h222.12V232.72h-19.86z"
        opacity={0.5}
      />
      <path fill="#f55f44" d="M295.42 233.81h109.27v66.2H295.42z" />
      <path fill="#4d8af0" d="M404.69 233.81h109.27v66.2H404.69z" />
      <path fill="#3ad29f" d="M513.96 233.81h109.27v66.2H513.96z" />
      <path fill="#4d8af0" d="M294.62 300.01h109.27v66.2H294.62z" />
      <path fill="#f55f44" d="M186.15 300.01h109.27v66.2H186.15z" />
      <path fill="#3ad29f" d="M404.69 300.01h109.27v66.2H404.69z" />
      <path fill="#fdd835" d="M513.96 300.01h109.27v66.2H513.96z" />
      <g opacity={0.1}>
        <path d="M314.96 233.41h14.36v66.2h-14.36zM342.88 233.41h14.36v66.2h-14.36zM370.79 233.41h14.36v66.2h-14.36z" />
      </g>
      <g opacity={0.1}>
        <path d="M424.23 233.41h14.36v66.2h-14.36zM452.14 233.41h14.36v66.2h-14.36zM480.06 233.41h14.36v66.2h-14.36z" />
      </g>
      <g opacity={0.1}>
        <path d="M533.5 233.41h14.36v66.2H533.5zM561.41 233.41h14.36v66.2h-14.36zM589.33 233.41h14.36v66.2h-14.36z" />
      </g>
      <g opacity={0.1}>
        <path d="M314.96 299.61h14.36v66.2h-14.36zM342.88 299.61h14.36v66.2h-14.36zM370.79 299.61h14.36v66.2h-14.36z" />
      </g>
      <g opacity={0.1}>
        <path d="M205.69 299.61h14.36v66.2h-14.36zM233.61 299.61h14.36v66.2h-14.36zM261.52 299.61h14.36v66.2h-14.36z" />
      </g>
      <g opacity={0.1}>
        <path d="M424.23 299.61h14.36v66.2h-14.36zM452.14 299.61h14.36v66.2h-14.36zM480.06 299.61h14.36v66.2h-14.36z" />
      </g>
      <g opacity={0.1}>
        <path d="M533.5 299.61h14.36v66.2H533.5zM561.41 299.61h14.36v66.2h-14.36zM589.33 299.61h14.36v66.2h-14.36z" />
      </g>
      <path
        d="M432.67 452H202.42s-20.42 91.23 84.1 154v20.65h663v-17.17s58.79-15.49 29.39-123.9l-484.18 2.58z"
        transform="translate(-133.81 -126.89)"
        fill="url(#prefix__b)"
        opacity={0.5}
      />
      <path
        d="M302.6 332.71H77.68s-19.94 84.54 82.15 142.77v19.14h647.64v-16s57.42-14.31 28.72-114.81l-473 2.4z"
        fill={primaryColor}
        stroke={primaryColor}
        strokeMiterlimit={10}
      />
      <rect
        x={707.37}
        y={394.25}
        width={61.41}
        height={20.47}
        rx={9.78}
        ry={9.78}
        fill="url(#prefix__c)"
        opacity={0.5}
      />
      <rect x={709.36} y={394.92} width={57.43} height={19.14} rx={9.15} ry={9.15} fill="#fff" />
      <rect
        x={775.96}
        y={393.72}
        width={21.53}
        height={21.53}
        rx={10.29}
        ry={10.29}
        fill="url(#prefix__d)"
        opacity={0.5}
      />
      <rect x={777.16} y={394.92} width={19.14} height={19.14} rx={9.15} ry={9.15} fill="#fff" />
      <path
        fill="url(#prefix__e)"
        d="M828.49 280.72v-19.63h-51.58v-98.96H704.2v-60.51h11.83V88.53H704.2V77.08h-13.53v11.45h-10.99v13.09h10.99v60.51h-21.98v118.59h-21.14v14.72h21.14v71.96h159.8v-71.96h16.06v-14.72h-16.06z"
        opacity={0.5}
      />
      <path fill="#f5f5f5" d="M671.88 260.13h150.74v103.68H671.88zM671.88 163.62h102.09v96.51H671.88z" />
      <path fill={primaryColor} stroke={primaryColor} strokeMiterlimit={10} d="M719.73 205.89h35.09v54.24h-35.09z" />
      <path fill="#fff" d="M671.88 198.71h20.74v28.71h-20.74z" />
      <path fill="#e0e0e0" d="M692.61 80.67h12.76v82.95h-12.76z" />
      <path fill="#e0e0e0" d="M682.24 91.84h34.3v12.76h-34.3zM651.94 279.27h185.83v14.36H651.94z" />
      <circle cx={705.37} cy={318.35} r={7.18} fill="#fff" />
      <circle cx={730.9} cy={318.35} r={7.18} fill="#fff" />
      <circle cx={756.42} cy={318.35} r={7.18} fill="#fff" />
      <circle cx={781.94} cy={318.35} r={7.18} fill="#fff" />
      <path
        opacity={0.1}
        d="M159.43 475.87h647.63v19.14H159.43zM77.68 336.3H302.6l60.59 33.49 473-2.39c5.45 19.07 7.79 35 8 48.38.21-14.13-2-31.36-8-52.37l-473 2.4-60.62-33.5H77.68a87.14 87.14 0 0 0-1.55 19.57 81.19 81.19 0 0 1 1.55-15.58z"
      />
      <path opacity={0.05} d="M671.88 293.63h150.74v2.79H671.88z" />
      <circle cx={116.36} cy={359.43} r={11.96} fill="url(#prefix__f)" opacity={0.5} />
      <circle cx={169} cy={359.43} r={11.96} fill="url(#prefix__g)" opacity={0.5} />
      <circle cx={221.64} cy={359.43} r={11.96} fill="url(#prefix__h)" opacity={0.5} />
      <circle cx={274.28} cy={359.43} r={11.96} fill="url(#prefix__i)" opacity={0.5} />
      <circle cx={116.36} cy={359.43} r={9.57} fill="#fff" />
      <circle cx={169} cy={359.43} r={9.57} fill="#fff" />
      <circle cx={221.64} cy={359.43} r={9.57} fill="#fff" />
      <circle cx={274.28} cy={359.43} r={9.57} fill="#fff" />
      <path
        d="M95.62 496.74c7.44-20.08 30.82-30.53 52.21-29.69s41.32 10.5 60.49 20 39 19.28 60.42 20.33c47.52 2.33 87.51-38.13 134.86-42.72 56.29-5.46 106.25 40.38 162.78 42.27 9.94.33 20.08-.77 29.23-4.66 8-3.39 14.91-8.75 22.44-13 38-21.6 85.48-13.44 127.5-1.47s85.64 27.31 128.35 18.11"
        fill="#4d8af0"
      />
      <path
        d="M0 535.46c7.44-20.08 30.82-30.53 52.21-29.69s41.32 10.5 60.49 20 39 19.28 60.42 20.33c47.52 2.33 87.51-38.13 134.86-42.72 56.29-5.46 106.25 40.38 162.78 42.27 9.94.33 20.08-.77 29.23-4.66 8-3.39 14.91-8.75 22.44-13 38-21.6 85.48-13.44 127.5-1.47s85.64 27.32 128.35 18.12M101.94 585.24c7.44-20.08 30.82-30.53 52.21-29.69s41.32 10.5 60.49 20 39 19.28 60.42 20.33c47.52 2.33 87.51-38.13 134.86-42.72 56.27-5.44 106.27 40.41 162.78 42.29 9.94.33 20.08-.77 29.23-4.66 8-3.39 14.91-8.75 22.44-13 38-21.6 85.48-13.44 127.5-1.47s85.64 27.32 128.35 18.12M154.1 634.24c7.44-20.08 30.82-30.53 52.21-29.69s41.32 10.5 60.49 20 39 19.28 60.42 20.33c47.52 2.33 87.51-38.13 134.86-42.72 56.29-5.46 106.25 40.38 162.78 42.27 9.94.33 20.08-.77 29.23-4.66 8-3.39 14.91-8.75 22.44-13 38-21.6 85.48-13.44 127.5-1.47s85.64 27.32 128.35 18.12"
        fill="#4d8af0"
      />
      <path
        d="M396.76 240.81l-6.89-1.22a44.53 44.53 0 0 1 .83-5.07c1.17-14.78-9.08-30.34-23.49-34.26l1.84-6.77c13.13 3.57 23.25 14.56 27.1 27.36a48.52 48.52 0 0 1 31.65-22.95l1.39 6.88c-15.1 3-27.94 15.89-31.53 30.86a35.47 35.47 0 0 1-.9 5.17z"
        transform="translate(-133.81 -126.89)"
        fill="url(#prefix__j)"
        opacity={0.5}
      />
      <path
        d="M263.19 110.49l-5.89-1a38.06 38.06 0 0 1 .71-4.33c1-12.63-7.76-25.93-20.08-29.28l1.58-5.79c11.22 3.06 19.88 12.45 23.16 23.38a41.47 41.47 0 0 1 27.02-19.66l1.19 5.88c-12.91 2.6-23.89 13.58-27 26.38a30.32 30.32 0 0 1-.69 4.42z"
        fill="#706a6a"
      />
      <path
        d="M544.27 177.41l-4.45-.79a28.72 28.72 0 0 1 .54-3.27c.75-9.53-5.86-19.57-15.15-22.1l1.19-4.37c8.47 2.31 15 9.39 17.48 17.65a31.3 31.3 0 0 1 20.42-14.8l.9 4.44c-9.74 2-18 10.25-20.34 19.9a22.88 22.88 0 0 1-.59 3.34z"
        transform="translate(-133.81 -126.89)"
        fill="url(#prefix__k)"
        opacity={0.5}
      />
      <path
        d="M815.27 157.41l-4.45-.79a28.72 28.72 0 0 1 .54-3.27c.75-9.53-5.86-19.57-15.15-22.1l1.19-4.37c8.47 2.31 15 9.39 17.48 17.65a31.3 31.3 0 0 1 20.42-14.8l.9 4.44c-9.74 2-18 10.25-20.34 19.9a22.88 22.88 0 0 1-.59 3.34z"
        transform="translate(-133.81 -126.89)"
        fill="url(#prefix__l)"
        opacity={0.5}
      />
      <path
        d="M410.79 45.18l-2.89-.51a18.66 18.66 0 0 1 .35-2.12c.49-6.2-3.81-12.71-9.85-14.36l.77-2.84a16.86 16.86 0 0 1 11.36 11.47 20.34 20.34 0 0 1 13.27-9.62l.58 2.88a17.71 17.71 0 0 0-13.19 12.93 14.87 14.87 0 0 1-.4 2.17zM681.79 25.18l-2.89-.51a18.66 18.66 0 0 1 .35-2.12c.49-6.2-3.81-12.71-9.85-14.36l.77-2.84a16.86 16.86 0 0 1 11.36 11.47A20.34 20.34 0 0 1 694.8 7.2l.58 2.88a17.71 17.71 0 0 0-13.19 12.93 14.87 14.87 0 0 1-.4 2.17z"
        fill="#706a6a"
      />
      <circle cx={138.38} cy={76.68} r={67} fill="url(#prefix__m)" opacity={0.5} />
      <circle cx={138.38} cy={76.68} r={62} fill="#fdd835" />
    </svg>
  );
};

UndrawContainerShip.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawContainerShip;
