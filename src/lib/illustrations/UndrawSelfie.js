import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSelfie = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 472.08 753.74" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={447.08}
          y1={348.99}
          x2={447.08}
          y2={216.4}
          gradientTransform="translate(.01 -.01)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={653.79} y1={826.87} x2={653.79} y2={570.09} xlinkHref="#prefix__a" />
        <linearGradient
          id="prefix__c"
          x1={487.46}
          y1={663.45}
          x2={740.06}
          y2={66.96}
          gradientTransform="rotate(-.14 -841.696 5577.13)"
          xlinkHref="#prefix__a"
        />
        <linearGradient id="prefix__d" x1={236.87} y1={452.34} x2={236.87} y2={80.35} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="#fcfdff" />
          <stop offset={1} stopColor="#b2ebf2" />
        </linearGradient>
        <linearGradient id="prefix__e" x1={774.73} y1={657.67} x2={774.73} y2={411.51} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={450.36} y1={549.19} x2={450.36} y2={439.64} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={446.09} y1={640} x2={446.09} y2={542.77} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={458.5} y1={459.05} x2={458.5} y2={337.39} xlinkHref="#prefix__a" />
      </defs>
      <path
        d="M525 333.23a33.9 33.9 0 0 1-46.61 10.59l-98.71-65.05a33.9 33.9 0 0 1-10.59-46.61 33.9 33.9 0 0 1 46.61-10.59l98.71 65.05A33.9 33.9 0 0 1 525 333.23z"
        transform="translate(-363.96 -73.13)"
        fill="url(#prefix__a)"
      />
      <path
        d="M155.59 256.54a31.51 31.51 0 0 1-43.33 9.85L20.5 205.87a31.51 31.51 0 0 1-9.85-43.33 31.51 31.51 0 0 1 43.33-9.85l91.77 60.47a31.51 31.51 0 0 1 9.84 43.38z"
        fill="#be7c5e"
      />
      <path
        d="M836 642.19a72.1 72.1 0 0 0-142.93-13.44l-221.58-6 2.51 38.06s-31.59 72.9 134.46 92.35v73.71h192V704.39a72.06 72.06 0 0 0 35.54-62.2z"
        transform="translate(-363.96 -73.13)"
        fill="url(#prefix__b)"
      />
      <path
        d="M88.7 600.47c-1.14 20.51 12.74 63.27 142.11 77.24v70.6h199.42v-187L88.6 552.77l.11 1.65a368.71 368.71 0 0 1-.01 46.05z"
        fill="#be7c5e"
      />
      <path
        d="M747.91 73.13l-295.19.72A12.13 12.13 0 0 0 440.62 86L442 638.11a12.13 12.13 0 0 0 12.16 12.1l295.19-.72a12.13 12.13 0 0 0 12.1-12.16l-1.37-552.1a12.13 12.13 0 0 0-12.17-12.1z"
        transform="translate(-363.96 -73.13)"
        fill="url(#prefix__c)"
        opacity={0.5}
      />
      <rect
        x={445.61}
        y={81.02}
        width={310.82}
        height={561.04}
        rx={13.64}
        ry={13.64}
        transform="rotate(-.14 -29513.752 149276.892)"
        fill="#fff"
      />
      <path
        data-name="<Path>"
        d="M314.49 21.76a25.2 25.2 0 0 1-24.78 21.49l-107.36.26a25.2 25.2 0 0 1-24.89-21.37l-56.87.14a11.81 11.81 0 0 0-11.78 11.83l1.23 509.3a11.81 11.81 0 0 0 11.83 11.78l271.63-.66a11.81 11.81 0 0 0 11.78-11.83l-1.24-509.3a11.81 11.81 0 0 0-11.83-11.78z"
        fill={primaryColor}
      />
      <rect
        x={562.95}
        y={101.82}
        width={69.26}
        height={4.33}
        rx={2}
        ry={2}
        transform="rotate(-.86 -4455.178 24314.853)"
        fill="#dbdbdb"
      />
      <circle cx={646.92} cy={102.81} r={2.6} transform="rotate(-.86 -4405.868 24313.89)" fill="#dbdbdb" />
      <circle cx={236.87} cy={508.27} r={24.86} fill="#eee" opacity={0.5} />
      <circle cx={236.87} cy={508.27} r={17.52} fill="none" stroke={primaryColor} strokeMiterlimit={10} opacity={0.2} />
      <path
        fill="#eee"
        opacity={0.5}
        d="M123.24 493.18h30.18v30.18h-30.18zM346.71 497.52v-3.32a1 1 0 0 0-1-1h-11.67a1 1 0 0 0-1 1v3.32h-4.52v-2h-2.68v2h-3.35v20.07h34.79v-20.07z"
      />
      <path fill="url(#prefix__d)" d="M88.61 80.35h296.52v371.98H88.61z" />
      <circle cx={353.17} cy={57.27} r={7.99} fill="#eee" opacity={0.7} />
      <circle cx={358.5} cy={65.26} r={7.99} fill="#eee" opacity={0.7} />
      <circle cx={346.96} cy={65.26} r={7.99} fill="#eee" opacity={0.5} />
      <path fill="#eee" opacity={0.7} d="M109.03 49.28l12.43 7.99-17.76 7.99 8.88 7.99" />
      <path
        fill={primaryColor}
        opacity={0.3}
        d="M88.61 226.84h87.89v225.5H88.61zM300.79 399.07h43.5v53.27h-43.5zM344.3 354.68h37.29v98.54H344.3z"
      />
      <path d="M164.04 452.33h-14.2s-4.41-155.36 14.2-203.3h3.55s-12.4 175.78-3.55 203.3z" fill="#fff8e1" />
      <path
        d="M154.31 241.04s-11.54 32-6.21 46.17c0 0 8-29.3 17.31-33.74s19.09 33.74 19.09 33.74 5.33-24-4.44-43.5c0 0 19.53 10.65 29.3 31.07 0 0 1.78-13.32-21.31-40.84 0 0 20.42 5.33 33.74 17.76 0 0 4.44-9.77-23.08-25.75 0 0 3.55-11.54 24.86-6.21 0 0 0-15.09-33.74-12.43 0 0 0-9.77 22.19-8 0 0 0-12.43-25.75-8 0 0 5.33-8 8.88-9.77 0 0-7.1-.89-12.43 3.55 0 0 .89-16-12.43-22.19l-1.78 22.19s-14.92-17.59-11.54-14.2c.89.89 3.55 11.54 2.66 16.87 0 0-15.09-12.43-33.74.89 0 0 23.08 1.78 26.63 9.77 0 0-19.53-3.55-24-.89 0 0 15.09 5.33 14.2 8.88 0 0-26.63 0-30.18 9.77 0 0 27.52 3.55 29.3 6.21 0 0-32 23.08-33.74 29.3 0 0 32.85-19.53 38.17-19.53s-24 28.41-22.19 35.51c.04 0 24.01-28.4 30.23-26.63z"
        fill="#c8e6c9"
      />
      <path
        d="M175.75 370.55s-39.43 12.91-29.44 81.79h18.64L187.19 382zM298.43 370.55s38.11 14.68 28.11 83.56l-18.3-.14-21.26-72z"
        fill="#be7c5e"
      />
      <path d="M177.39 257.69s-18 92.53-27.81 87.62c0 0 94.69 81.78 178.29 0 0 0-14.72-66.36-36-87.62z" fill="#333" />
      <circle cx={238.09} cy={252.78} r={70.33} fill="#333" />
      <path
        d="M309.15 453.97s8.18-18 1.64-40.89-1.64-1.64-1.64-1.64l-11.45-40.89H175.04l-11.45 49.07s-6.72 22.72 1.64 32.71"
        opacity={0.1}
      />
      <path
        d="M298.43 370.55H175.75l-11.45 49.07s-11.39 32.55 1.64 32.71c144.62 1.78.8 0 143.94 1.64 0 0 8.18-18 1.64-40.89s-1.64-1.64-1.64-1.64z"
        fill="#f55f44"
      />
      <path
        d="M213.38 329.84h49.07v57.06a6.73 6.73 0 0 1-6.73 6.73H220.1a6.73 6.73 0 0 1-6.73-6.73v-57.06z"
        opacity={0.1}
      />
      <path
        d="M213.38 328h49.07v57.07a6.73 6.73 0 0 1-6.73 6.73H220.1a6.73 6.73 0 0 1-6.73-6.73V328h.01z"
        fill="#be7c5e"
      />
      <path d="M213.46 335.09a70.62 70.62 0 0 0 49.07.14v-6h-49.07z" opacity={0.1} />
      <circle cx={238.09} cy={268.05} r={70.33} fill="#be7c5e" />
      <path d="M170.85 241.33h134.12s-11.45-54.16-62.15-50.71-71.97 50.71-71.97 50.71z" fill="#333" />
      <ellipse cx={169.21} cy={265.05} rx={6.54} ry={12.27} fill="#be7c5e" />
      <ellipse cx={306.61} cy={265.05} rx={6.54} ry={12.27} fill="#be7c5e" />
      <path d="M170.85 243.15h134.12s-11.45-54.16-62.15-50.71-71.97 50.71-71.97 50.71z" opacity={0.1} />
      <circle cx={395.33} cy={571.44} r={69.04} fill="#be7c5e" />
      <path
        d="M803.92 656.74c-20 4.63-33.79-8.43-38.42-28.46l-46-171a37.5 37.5 0 0 1 28-44.85 37.5 37.5 0 0 1 44.85 28l37.58 175.38c4.59 20.09-5.93 36.3-26.01 40.93z"
        transform="translate(-363.96 -73.13)"
        fill="url(#prefix__e)"
      />
      <rect
        x={746.3}
        y={417.86}
        width={62.84}
        height={250.9}
        rx={31.42}
        ry={31.42}
        transform="rotate(-13.01 275.368 2102.861)"
        fill="#be7c5e"
      />
      <path
        d="M511.71 533.62a33.49 33.49 0 0 1-46 10.47l-66.2-42.83a33.49 33.49 0 0 1-10.47-46 33.49 33.49 0 0 1 46-10.47l66.2 42.83a33.49 33.49 0 0 1 10.47 46z"
        transform="translate(-363.96 -73.13)"
        fill="url(#prefix__f)"
      />
      <path
        d="M495.1 624.29a33.79 33.79 0 0 1-46.46 10.56l-41-29.91a33.79 33.79 0 0 1-10.56-46.46 33.79 33.79 0 0 1 46.46-10.56l41 29.91a33.79 33.79 0 0 1 10.56 46.46z"
        transform="translate(-363.96 -73.13)"
        fill="url(#prefix__g)"
      />
      <path
        d="M127.84 548.94a31.51 31.51 0 0 1-43.33 9.85l-38.24-27.92a31.51 31.51 0 0 1-9.85-43.33 31.51 31.51 0 0 1 43.33-9.85l38.24 27.89a31.51 31.51 0 0 1 9.85 43.36zM144.13 458.17a31.51 31.51 0 0 1-43.33 9.85l-62.29-40.3a31.51 31.51 0 0 1-9.85-43.33 31.51 31.51 0 0 1 43.38-9.85l62.24 40.33a31.51 31.51 0 0 1 9.85 43.3z"
        fill="#be7c5e"
      />
      <path
        d="M528.84 443.4a33.64 33.64 0 0 1-46.26 10.51l-83.9-54.63A33.64 33.64 0 0 1 388.17 353a33.64 33.64 0 0 1 46.26-10.51l83.9 54.63a33.64 33.64 0 0 1 10.51 46.28z"
        transform="translate(-363.96 -73.13)"
        fill="url(#prefix__h)"
      />
      <path
        d="M160.42 367.41a31.51 31.51 0 0 1-43.33 9.85L38.51 326.1a31.51 31.51 0 0 1-9.85-43.33 31.51 31.51 0 0 1 43.38-9.9l78.58 51.16a31.51 31.51 0 0 1 9.8 43.38z"
        fill="#be7c5e"
      />
    </svg>
  );
};

UndrawSelfie.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSelfie;
