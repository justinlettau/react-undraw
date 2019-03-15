import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawInternetOnTheGo = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 625.28 730.24" style={style} {...props}>
      <defs>
        <linearGradient
          id="prefix__a"
          x1={681.66}
          y1={793.64}
          x2={681.66}
          y2={89.9}
          gradientTransform="matrix(.98 0 0 1.01 12.18 -5.36)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.01} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={682.5}
          y1={733.91}
          x2={682.5}
          y2={143.66}
          gradientTransform="matrix(.98 0 0 1.01 12.18 -5.36)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopOpacity={0.12} />
          <stop offset={0.55} stopOpacity={0.09} />
          <stop offset={1} stopOpacity={0.02} />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          x1={443.89}
          y1={807.45}
          x2={443.89}
          y2={260.81}
          gradientTransform="matrix(1 0 0 1.03 .11 -13.69)"
          xlinkHref="#prefix__a"
        />
      </defs>
      <rect
        x={449.17}
        y={85.17}
        width={463.01}
        height={708.67}
        rx={17.17}
        ry={17.17}
        transform="rotate(-.08 -60275.886 206186.983)"
        fill="url(#prefix__a)"
      />
      <path
        transform="rotate(-.08 -60275.886 206186.983)"
        fill="url(#prefix__b)"
        d="M481.58 139.3h399.85v594.38H481.58z"
      />
      <rect
        x={458.46}
        y={90.09}
        width={443.39}
        height={681.66}
        rx={17.17}
        ry={17.17}
        transform="rotate(-.08 -60275.88 206179.82)"
        fill="#fff"
      />
      <path fill={primaryColor} d="M201.748 57.516l382.91-.534.798 571.73-382.91.534z" />
      <circle cx={682.42} cy={742.29} r={15.78} transform="translate(-288.36 -83.96)" fill="#dbdbdb" />
      <circle cx={614.25} cy={117.53} r={5.26} transform="rotate(-.08 -60340.129 205878.973)" fill="#dbdbdb" />
      <rect
        x={640.55}
        y={114.29}
        width={68.38}
        height={5.26}
        rx={1.43}
        ry={1.43}
        transform="rotate(-.08 -60282.833 205879.013)"
        fill="#dbdbdb"
      />
      <rect
        x={287.73}
        y={253.95}
        width={312.56}
        height={560.98}
        rx={10}
        ry={10}
        transform="rotate(-.08 -60505.134 206279.929)"
        fill="url(#prefix__c)"
      />
      <rect
        x={294.91}
        y={259.74}
        width={298.17}
        height={533.76}
        rx={10}
        ry={10}
        transform="rotate(-.08 -60505.129 206272.767)"
        fill="#fff"
      />
      <path fill={primaryColor} d="M40.925 212.731l230.84-.322.606 434.37-230.84.322z" />
      <circle cx={444.32} cy={763.13} r={18.41} transform="rotate(-.08 -60505.289 206501.95)" fill="#dbdbdb" />
      <circle cx={408.69} cy={277.27} r={3.68} transform="rotate(-.08 -60540.774 206036.396)" fill="#dbdbdb" />
      <rect
        x={425.26}
        y={274.45}
        width={57.06}
        height={5.52}
        rx={1.5}
        ry={1.5}
        transform="rotate(-.08 -60497.797 206029.265)"
        fill="#dbdbdb"
      />
    </svg>
  );
};

UndrawInternetOnTheGo.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawInternetOnTheGo;
