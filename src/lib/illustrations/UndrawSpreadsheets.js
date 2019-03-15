import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawSpreadsheets = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 908.72 593.16" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={623.41}
          y1={835.81}
          x2={623.41}
          y2={62.24}
          gradientTransform="rotate(90 606.04 433.22)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={600}
          y1={746.58}
          x2={600}
          y2={153.42}
          gradientTransform="rotate(.08 580.425 436.475)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <path
        transform="rotate(-.08 -109386.293 104667.515)"
        fill="url(#prefix__a)"
        d="M203.45 183.42h773.57v534.35H203.45z"
      />
      <rect
        x={146}
        y={153.99}
        width={908}
        height={592.01}
        rx={28.33}
        ry={28.33}
        transform="rotate(-.08 -109371.969 104667.525)"
        fill="url(#prefix__b)"
        opacity={0.7}
      />
      <rect
        x={154.11}
        y={158.92}
        width={893.37}
        height={581.1}
        rx={28.33}
        ry={28.33}
        transform="rotate(-.08 -109371.964 104660.363)"
        fill="#535461"
      />
      <circle cx={192.71} cy={452.44} r={20.68} transform="rotate(-.08 -109765.877 104667.25)" fill="#535461" />
      <circle cx={192.71} cy={452.44} r={20.68} transform="rotate(-.08 -109765.877 104667.25)" opacity={0.1} />
      <circle cx={1011.51} cy={363.1} r={6.89} transform="rotate(-.08 -108978 104581.856)" fill="#535461" />
      <rect
        x={1008.86}
        y={397.57}
        width={6.89}
        height={89.61}
        rx={1.43}
        ry={1.43}
        transform="rotate(-.08 -108978.055 104660.638)"
        fill="#535461"
      />
      <rect
        x={1008.86}
        y={397.57}
        width={6.89}
        height={89.61}
        rx={1.43}
        ry={1.43}
        transform="rotate(-.08 -108978.055 104660.638)"
        opacity={0.1}
      />
      <circle cx={1011.51} cy={363.1} r={6.89} transform="rotate(-.08 -108978 104581.856)" opacity={0.1} />
      <path fill="#fff" d="M725 547.58H84.37v-498h747.69v430.16l-.43 67.12-106.63.72z" />
      <path
        fill="#e0e0e0"
        d="M84.37 221.97h747.69v6.86H84.37zM84.37 184.97h747.69v6.86H84.37zM84.37 147.97h747.69v6.86H84.37zM84.37 110.97h747.69v6.86H84.37zM84.37 73.97h747.69v6.86H84.37zM84.37 258.98h747.69v6.86H84.37zM84.37 296h747.69v6.86H84.37zM84.37 333.02h747.69v6.86H84.37zM84.37 370.04h747.69v6.86H84.37zM84.37 407.05h747.69v6.86H84.37zM84.37 444.07h747.69v6.86H84.37zM84.36 481.09h747.57v6.86H84.36zM84.37 518.11h746.99v6.86H84.37z"
        opacity={0.7}
      />
      <path
        fill="#e0e0e0"
        d="M174.16 80.8h5.18v466.78h-5.18zM288.56 80.8h5.18v466.78h-5.18zM402.96 80.8h5.18v466.78h-5.18zM517.36 80.8h5.18v466.78h-5.18zM631.76 80.8h5.18v466.78h-5.18zM751.34 547.58h-5.18V80.8l5.18-.22v467z"
      />
      <circle cx={101.09} cy={61.08} r={6.73} fill="#ff5252" />
      <circle cx={120.36} cy={61.08} r={6.73} fill="#ff0" />
      <circle cx={139.63} cy={61.08} r={6.73} fill="#69f0ae" />
      <path
        fill={primaryColor}
        d="M293.36 339.58h110v30h-110zM408.36 487.58h110v30h-110zM522.36 447.58h110v30h-110zM522.36 228.58h110v30h-110zM637.36 376.58h110v30h-110zM178.36 117.58h110v30h-110zM408.36 192.58h110v30h-110zM178.36 265.58h110v30h-110z"
      />
    </svg>
  );
};

UndrawSpreadsheets.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawSpreadsheets;
