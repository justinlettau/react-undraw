import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawControlPanel = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 853.55 784" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={426.78} y1={651.11} x2={426.78} y2={132.89} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={263.53} y1={255.6} x2={263.53} y2={205.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={129.53} y1={323.6} x2={129.53} y2={273.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={415.53} y1={392.6} x2={415.53} y2={342.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={212.53} y1={460.6} x2={212.53} y2={410.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={81.53} y1={528.6} x2={81.53} y2={478.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={346.53} y1={596.6} x2={346.53} y2={546.12} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={577.21} y1={453.04} x2={577.21} y2={406.71} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={668.97} y1={453.04} x2={668.97} y2={406.71} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={760.73} y1={453.04} x2={760.73} y2={406.71} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={577.21} y1={523.46} x2={577.21} y2={477.13} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={668.97} y1={523.46} x2={668.97} y2={477.13} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={760.73} y1={523.46} x2={760.73} y2={477.13} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={577.21} y1={593.88} x2={577.21} y2={547.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={668.97} y1={593.88} x2={668.97} y2={547.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={760.73} y1={593.88} x2={760.73} y2={547.54} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__q" x1={232.64} y1={759.95} x2={586.13} y2={759.95} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__r" x1={693.51} y1={104.46} x2={693.51} y2={34.04} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__s" x1={866.73} y1={131.87} x2={866.73} y2={122.63} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__t" x1={622.03} y1={104.46} x2={622.03} y2={34.04} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__u" x1={795.25} y1={131.87} x2={795.25} y2={122.63} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__v" x1={651.9} y1={101.26} x2={651.9} y2={30.84} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__w" x1={825.12} y1={128.67} x2={825.12} y2={119.43} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__x" x1={617.47} y1={266.04} x2={617.47} y2={187.77} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__y" x1={720.47} y1={266.04} x2={720.47} y2={187.77} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__z" x1={617.47} y1={358.04} x2={617.47} y2={279.77} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__A" x1={720.47} y1={358.04} x2={720.47} y2={279.77} xlinkHref="#prefix__a" />
      </defs>
      <path opacity={0.5} fill="url(#prefix__a)" d="M0 132.89h853.55v518.22H0z" />
      <path fill="#fff" d="M7.47 141.8h838.61v500.39H7.47z" />
      <path fill="#f5f5f5" d="M45.88 222.89h436.38v14.94H45.88z" />
      <circle cx={263.53} cy={230.36} r={25.24} opacity={0.5} fill="url(#prefix__b)" />
      <circle cx={129.53} cy={298.36} r={25.24} opacity={0.5} fill="url(#prefix__c)" />
      <circle cx={415.53} cy={367.36} r={25.24} opacity={0.5} fill="url(#prefix__d)" />
      <circle cx={212.53} cy={435.36} r={25.24} opacity={0.5} fill="url(#prefix__e)" />
      <circle cx={81.53} cy={503.36} r={25.24} opacity={0.5} fill="url(#prefix__f)" />
      <circle cx={346.53} cy={571.36} r={25.24} opacity={0.5} fill="url(#prefix__g)" />
      <circle cx={263.53} cy={230.36} r={19.2} fill={primaryColor} opacity={0.5} />
      <path fill="#f5f5f5" d="M45.88 291.17h436.38v14.94H45.88z" />
      <circle cx={129.1} cy={298.64} r={19.2} fill={primaryColor} opacity={0.5} />
      <path fill="#f5f5f5" d="M45.88 359.46h436.38v14.94H45.88z" />
      <circle cx={415.04} cy={366.93} r={19.2} fill={primaryColor} />
      <path fill="#f5f5f5" d="M45.88 427.74h436.38v14.94H45.88z" />
      <circle cx={212.32} cy={435.21} r={19.2} fill={primaryColor} />
      <path fill="#f5f5f5" d="M45.88 496.03h436.38v14.94H45.88z" />
      <circle cx={81.09} cy={503.5} r={19.2} fill={primaryColor} opacity={0.5} />
      <path fill="#f5f5f5" d="M45.88 564.31h436.38v14.94H45.88z" />
      <circle cx={346.76} cy={571.78} r={19.2} fill={primaryColor} />
      <path opacity={0.5} fill="url(#prefix__h)" d="M543.07 406.71h68.28v46.34h-68.28z" />
      <path opacity={0.5} fill="url(#prefix__i)" d="M634.83 406.71h68.28v46.34h-68.28z" />
      <path opacity={0.5} fill="url(#prefix__j)" d="M726.59 406.71h68.28v46.34h-68.28z" />
      <path opacity={0.5} fill="url(#prefix__k)" d="M543.07 477.13h68.28v46.34h-68.28z" />
      <path opacity={0.5} fill="url(#prefix__l)" d="M634.83 477.13h68.28v46.34h-68.28z" />
      <path opacity={0.5} fill="url(#prefix__m)" d="M726.59 477.13h68.28v46.34h-68.28z" />
      <path opacity={0.5} fill="url(#prefix__n)" d="M543.07 547.54h68.28v46.34h-68.28z" />
      <path opacity={0.5} fill="url(#prefix__o)" d="M634.83 547.54h68.28v46.34h-68.28z" />
      <path opacity={0.5} fill="url(#prefix__p)" d="M726.59 547.54h68.28v46.34h-68.28z" />
      <path fill={primaryColor} d="M547.34 409.6h59.75v40.54h-59.75zM639.1 409.6h59.75v40.54H639.1z" />
      <path fill={primaryColor} opacity={0.5} d="M730.85 409.6h59.75v40.54h-59.75z" />
      <path fill={primaryColor} d="M547.34 480.02h59.75v40.54h-59.75zM639.1 480.02h59.75v40.54H639.1z" />
      <path fill={primaryColor} opacity={0.5} d="M730.85 480.02h59.75v40.54h-59.75z" />
      <path fill={primaryColor} d="M547.34 550.44h59.75v40.54h-59.75z" />
      <path fill={primaryColor} opacity={0.5} d="M639.1 550.44h59.75v40.54H639.1z" />
      <path fill="#3ad29f" opacity={0.5} d="M730.85 550.44h59.75v40.54h-59.75z" />
      <path
        d="M546.65 741.81c-6 0-10.45 1-13.61 6.5H404.4v-13.86c0-3.6-4.6-2.25-7.63-2.25h-2.51c-3 0-5.5-1.35-5.5 2.25v3.09H244.28c-7.48 0-10.45 6.56-11.47 15.09 0-.22-.06-.43-.08-.65-.05.61-.08 1.23-.08 1.85v9.33c0 9.72 3.44 17.59 11.64 17.59h144.48v4.69c0 3.6 2.46 2.25 5.5 2.25h2.51c3 0 7.63 1.35 7.63-2.25v-13.68h129.43a20 20 0 0 0 1.94 2.44c5.54 2.81 5.62 3.43 10.69 3.43l39.66-1.6V744z"
        transform="translate(-173.22 -58)"
        opacity={0.5}
        fill="url(#prefix__q)"
      />
      <path fill="#e6e6e6" d="M166.44 692.34h198.45v19.2H166.44z" />
      <path d="M358.36 701.95a17 17 0 0 0 3 9.6h2.5v-19.2h-2.5a17 17 0 0 0-3 9.6z" opacity={0.03} />
      <path d="M411.84 715l-35.38 4a17 17 0 0 1-17-17 17 17 0 0 1 17-17l35.38 3.93z" fill="#e6e6e6" />
      <path
        d="M361.33 705.15h-196v5.33h196a17 17 0 0 0 14.07 7.43l35.38-3.91v-5.33l-35.38 3.93a17 17 0 0 1-14.07-7.45z"
        opacity={0.05}
      />
      <path
        d="M75 683.53h143.79v35.38H75a13.5 13.5 0 0 1-13.5-13.5V697A13.5 13.5 0 0 1 75 683.53z"
        fill={primaryColor}
      />
      <rect x={216.17} y={675.67} width={13.1} height={52.41} rx={5} ry={5} fill={primaryColor} />
      <path
        opacity={0.05}
        d="M213.55 683.53h2.62v35.38h-2.62zM83.82 690.08h120.55v2.62H83.82zM83.82 699.25h120.55v2.62H83.82zM83.82 708.43h120.55v2.62H83.82z"
      />
      <path
        d="M223.94 717.41h-2.43a5.33 5.33 0 0 1-5.33-5.33v-3.84H75.95a14.4 14.4 0 0 1-14.32-12.89 14.56 14.56 0 0 0-.08 1.52v6.57a14.4 14.4 0 0 0 14.4 14.4h140.22v3.84a5.33 5.33 0 0 0 5.33 5.33h2.43a5.33 5.33 0 0 0 5.33-5.33v-9.6a5.33 5.33 0 0 1-5.32 5.33z"
        opacity={0.05}
      />
      <path fill="url(#prefix__r)" d="M693.51 34.04L666 49.93v38.65l27.51 15.88 27.51-15.88V49.93l-27.51-15.89z" />
      <path
        d="M866.73 131.87a8.08 8.08 0 0 1-7.3-4.62 8.08 8.08 0 0 1 14.6 0 8.08 8.08 0 0 1-7.3 4.62z"
        transform="translate(-173.22 -58)"
        opacity={0.5}
        fill="url(#prefix__s)"
      />
      <path
        d="M693.51 42.88L667.9 57.66v29.57L693.51 102l25.61-14.78V57.67zm0 37a7.47 7.47 0 1 1 7.47-7.47 7.47 7.47 0 0 1-7.47 7.51z"
        fill="#e6e6e6"
      />
      <path
        d="M693.51 36.48L667.9 51.26v29.57l25.61 14.78 25.61-14.78V51.27zm0 37a7.47 7.47 0 1 1 7.47-7.48 7.47 7.47 0 0 1-7.47 7.52z"
        fill="#fff"
      />
      <path fill="url(#prefix__t)" d="M622.03 34.04l-27.52 15.89v38.65l27.52 15.88 27.51-15.88V49.93l-27.51-15.89z" />
      <path
        d="M795.25 131.87a8.08 8.08 0 0 1-7.3-4.62 8.08 8.08 0 0 1 14.6 0 8.08 8.08 0 0 1-7.3 4.62z"
        transform="translate(-173.22 -58)"
        opacity={0.5}
        fill="url(#prefix__u)"
      />
      <path
        d="M622.03 42.88l-25.61 14.78v29.57L622.03 102l25.61-14.78V57.67zm0 37a7.47 7.47 0 1 1 7.47-7.47 7.47 7.47 0 0 1-7.47 7.51z"
        fill="#e6e6e6"
      />
      <path
        d="M622.03 36.48l-25.61 14.78v29.57l25.61 14.78 25.61-14.78V51.27zm0 37a7.47 7.47 0 1 1 7.47-7.47 7.47 7.47 0 0 1-7.47 7.51z"
        fill="#fff"
      />
      <path fill="url(#prefix__v)" d="M651.9 30.84l-27.51 15.89v38.64l27.51 15.89 27.51-15.89V46.73L651.9 30.84z" />
      <path
        d="M825.12 128.67a8.08 8.08 0 0 1-7.3-4.62 8.08 8.08 0 0 1 14.6 0 8.08 8.08 0 0 1-7.3 4.62z"
        transform="translate(-173.22 -58)"
        opacity={0.5}
        fill="url(#prefix__w)"
      />
      <path
        d="M651.9 39.68l-25.61 14.78V84l25.61 14.78L677.51 84V54.47zm0 37a7.47 7.47 0 1 1 7.47-7.47 7.47 7.47 0 0 1-7.47 7.51z"
        fill="#e6e6e6"
      />
      <path
        d="M651.9 33.28l-25.61 14.78v29.57l25.61 14.78 25.61-14.78V48.07zm0 37a7.47 7.47 0 1 1 7.47-7.47 7.47 7.47 0 0 1-7.47 7.51z"
        fill="#fff"
      />
      <path
        fill="none"
        stroke="#3ad29f"
        strokeMiterlimit={10}
        strokeWidth={3}
        strokeDasharray="12"
        opacity={0.5}
        d="M161.11 102.33V16.97h354.22"
      />
      <circle
        cx={550.01}
        cy={16.44}
        r={14.94}
        fill="none"
        stroke="#3ad29f"
        strokeMiterlimit={10}
        strokeWidth={3}
        strokeDasharray="12"
        opacity={0.5}
      />
      <path
        fill="none"
        stroke="#3ad29f"
        strokeMiterlimit={10}
        strokeWidth={3}
        strokeDasharray="12"
        opacity={0.5}
        d="M813.01 681.67v85.36H458.78"
      />
      <circle
        cx={424.11}
        cy={767.56}
        r={14.94}
        fill="none"
        stroke="#3ad29f"
        strokeMiterlimit={10}
        strokeWidth={3}
        strokeDasharray="12"
        opacity={0.5}
      />
      <circle cx={617.47} cy={226.9} r={39.14} fill="url(#prefix__x)" />
      <circle cx={617.47} cy={226.9} r={36.69} fill="#fff" />
      <circle cx={617.47} cy={226.9} r={2.45} fill="#333" />
      <path fill="none" stroke="#333" strokeMiterlimit={10} strokeWidth={3} d="M617.47 226.9l22.01-22.01" />
      <path
        d="M623.83 225.92a36.65 36.65 0 0 0 16.44 30.59 36.68 36.68 0 0 0-2.05-59.71 36.62 36.62 0 0 0-14.39 29.12z"
        opacity={0.05}
      />
      <circle cx={720.47} cy={226.9} r={39.14} fill="url(#prefix__y)" />
      <circle cx={720.47} cy={226.9} r={36.69} fill="#fff" />
      <circle cx={720.47} cy={226.9} r={2.45} fill="#333" />
      <path fill="none" stroke="#333" strokeMiterlimit={10} strokeWidth={3} d="M720.47 226.9l22.01-22.01" />
      <path
        d="M726.83 225.92a36.65 36.65 0 0 0 16.44 30.59 36.68 36.68 0 0 0-2.05-59.71 36.62 36.62 0 0 0-14.39 29.12z"
        opacity={0.05}
      />
      <circle cx={617.47} cy={318.9} r={39.14} fill="url(#prefix__z)" />
      <circle cx={617.47} cy={318.9} r={36.69} fill="#fff" />
      <circle cx={617.47} cy={318.9} r={2.45} fill="#333" />
      <path fill="none" stroke="#333" strokeMiterlimit={10} strokeWidth={3} d="M617.47 318.9l-23.4 23.4" />
      <path
        d="M623.83 317.92a36.65 36.65 0 0 0 16.44 30.59 36.68 36.68 0 0 0-2.05-59.71 36.62 36.62 0 0 0-14.39 29.12z"
        opacity={0.05}
      />
      <circle cx={720.47} cy={318.9} r={39.14} fill="url(#prefix__A)" />
      <circle cx={720.47} cy={318.9} r={36.69} fill="#fff" />
      <circle cx={720.47} cy={318.9} r={2.45} fill="#333" />
      <path fill="none" stroke="#333" strokeMiterlimit={10} strokeWidth={3} d="M720.47 318.9l22.01-22.01" />
      <path
        d="M726.83 317.92a36.65 36.65 0 0 0 16.44 30.59 36.68 36.68 0 0 0-2.05-59.71 36.62 36.62 0 0 0-14.39 29.12z"
        opacity={0.05}
      />
    </svg>
  );
};

UndrawControlPanel.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawControlPanel;
