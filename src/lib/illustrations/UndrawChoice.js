import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawChoice = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1057 678.5" style={style} {...props}>
      <ellipse cx={167.5} cy={657} rx={134} ry={21.5} fill="#f2f2f2" />
      <ellipse cx={178} cy={644.5} rx={134} ry={21.5} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <rect x={81.5} y={27.5} width={403} height={240} rx={22.84} fill={primaryColor} />
      <rect x={610.5} y={219.5} width={403} height={240} rx={22.84} fill="#f2f2f2" />
      <rect x={50.5} y={0.5} width={403} height={240} rx={22.84} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <rect
        x={579.5}
        y={192.5}
        width={403}
        height={240}
        rx={22.84}
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M959.88 71.457a22.982 22.982 0 0 0-19.81 13.851c-4.953 11.974 1.425 26.04 11 34.77s21.873 13.723 33.048 20.283c15.01 8.811 28.497 21.043 36.007 36.744s8.309 35.15-.519 50.15c-8.194 13.922-23.093 22.255-37.302 29.94"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <ellipse cx={972.5} cy={72.5} rx={17.5} ry={8.5} fill={primaryColor} />
      <ellipse cx={986.5} cy={128.5} rx={17.5} ry={8.5} fill={primaryColor} />
      <ellipse cx={954.5} cy={137.5} rx={17.5} ry={8.5} fill={primaryColor} />
      <ellipse cx={1004.5} cy={184.5} rx={17.5} ry={8.5} fill={primaryColor} />
      <ellipse cx={1039.5} cy={184.5} rx={17.5} ry={8.5} fill={primaryColor} />
      <path
        d="M22.88 455.457a22.982 22.982 0 0 0-19.81 13.851c-4.953 11.974 1.425 26.04 11 34.77s21.873 13.723 33.048 20.283c15.01 8.811 28.497 21.043 36.007 36.744s8.309 35.15-.519 50.15c-8.194 13.922-23.093 22.255-37.302 29.94"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <ellipse cx={35.5} cy={456.5} rx={17.5} ry={8.5} fill={primaryColor} />
      <ellipse cx={49.5} cy={512.5} rx={17.5} ry={8.5} fill={primaryColor} />
      <ellipse cx={17.5} cy={521.5} rx={17.5} ry={8.5} fill={primaryColor} />
      <ellipse cx={67.5} cy={568.5} rx={17.5} ry={8.5} fill={primaryColor} />
      <ellipse cx={102.5} cy={568.5} rx={17.5} ry={8.5} fill={primaryColor} />
      <path d="M256 271.5s2 15-3 21-13 46-13 46v24s31-45 37-63 0-32 0-32z" fill="#ffc1c7" />
      <path
        d="M253 197.5l.423.475a63.42 63.42 0 0 1 11.956 19.787c6.565 17.433 20.676 60.405 15.621 64.738-7 6-27 10-28 9s-21-63-21-63zM220.5 622.5s24 5 25 0a40.008 40.008 0 0 1 3-9s21.753.906 16.074 19.977a7.971 7.971 0 0 1-3.492 4.502c-5.18 3.17-17.383 10.647-23.582 14.521-4.66 2.912-11.354.736-16.132-1.589a8.626 8.626 0 0 1-4.66-9.455zM151.5 625.5s-24 5-25 0a40.008 40.008 0 0 0-3-9s-21.711.905-16.09 19.922a8.096 8.096 0 0 0 3.555 4.586c5.208 3.187 17.355 10.63 23.535 14.492 5.102 3.189 12.645.276 17.44-2.252a6.958 6.958 0 0 0 3.606-7.516z"
        fill="#3f3d56"
      />
      <path d="M121.5 284.5s-2 15 3 21 13 29 13 29v24s-31-28-37-46 0-32 0-32z" fill="#ffc1c7" />
      <circle cx={191.5} cy={136.5} r={25} fill="#ffc1c7" />
      <path d="M211.5 146.5s-7 32 0 36-42 0-42 0 11-27 6-36 36 0 36 0z" fill="#ffc1c7" />
      <path
        d="M235.5 359.5s9 13 6 53-6 82-6 82 22 126 15 129-30 6-33 3-17-120-17-120l-13-96-20 110s-11 107-19 112c-5.719 3.574-17.06 1.016-23.061-.733a5.221 5.221 0 0 1-3.775-5.24c.733-16.826 4.024-83.233 11.836-124.027 9-47-9-141 7-143s95 0 95 0z"
        fill="#2f2e41"
      />
      <path
        d="M165.5 178.5s4-18 19-16 25 1 28 11 35 18 35 18 8 1 7 14-21 61-21 61 1 40 6 58 5 40-6 45-80 23-96 1c0 0-9-32-3-45s-1-64-1-64l-19-42s6-20 23-26a101.797 101.797 0 0 0 28-15z"
        fill="#3f3d56"
      />
      <path d="M122.5 210.5l-8 9s-24 59-17 65 27 10 28 9 18-52 18-52z" fill="#3f3d56" />
      <path
        d="M220.5 121.5s-4 3-5 10-7.14-3.989-8.57 10.506S181.5 166.5 172.5 159.5s-24-51-3-58 42-6 46 1 5 19 5 19z"
        fill="#2f2e41"
      />
      <path
        d="M200.93 142.006c1.43-14.495 7.57-3.506 8.57-10.506s5-10 5-10-1-12-5-19c-1.914-3.35-7.725-5.32-15.56-5.704 10.81-.495 19.184 1.546 21.56 5.704 4 7 5 19 5 19s-4 3-5 10-7.14-3.989-8.57 10.506c-1.212 12.288-18.643 21.34-29.407 19.548 10.258-1.409 22.402-9.364 23.407-19.548z"
        opacity={0.1}
      />
    </svg>
  );
};

UndrawChoice.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawChoice;
