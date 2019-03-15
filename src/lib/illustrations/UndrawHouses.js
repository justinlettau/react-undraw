import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawHouses = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 868.66 282.45" style={style} {...props}>
      <defs>
        <linearGradient id="prefix__a" x1={369.42} y1={281.2} x2={369.42} y2={129.23} gradientUnits="userSpaceOnUse">
          <stop offset={0} stopColor="gray" stopOpacity={0.25} />
          <stop offset={0.54} stopColor="gray" stopOpacity={0.12} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient id="prefix__b" x1={325.25} y1={122.25} x2={325.25} y2={79.83} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__c" x1={260.16} y1={180.95} x2={260.16} y2={130.39} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__d" x1={476.5} y1={180.95} x2={476.5} y2={129.81} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__e" x1={369.54} y1={133.69} x2={369.54} y2={67.17} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__f" x1={367.97} y1={279.46} x2={367.97} y2={118.77} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__g" x1={65.41} y1={282.45} x2={65.41} y2={168.46} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__h" x1={34.3} y1={165.9} x2={34.3} y2={134.79} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__i" x1={65.62} y1={281.17} x2={65.62} y2={163.34} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__j" x1={66.78} y1={174.29} x2={66.78} y2={125.51} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__k" x1={735.26} y1={281.53} x2={735.26} y2={82.38} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__l" x1={698.92} y1={39.35} x2={698.92} y2={4.44} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__m" x1={645.37} y1={115.85} x2={645.37} y2={74.25} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__n" x1={823.36} y1={116.81} x2={823.36} y2={74.73} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__o" x1={735.36} y1={54.73} x2={735.36} y2={0} xlinkHref="#prefix__a" />
        <linearGradient id="prefix__p" x1={734.3} y1={280.1} x2={734.3} y2={46.52} xlinkHref="#prefix__a" />
      </defs>
      <path
        fill="url(#prefix__a)"
        d="M516.75 281.2H222.09l2.04-138.02 84.27-13.95h119.14l87.17 9.88 2.04 142.09z"
        opacity={0.7}
      />
      <path fill="#eee" d="M512.67 279.46h-286.5l2.04-134.54 80.46-13.95h120.32l81.64 9.88 2.04 138.61z" />
      <path fill="url(#prefix__b)" d="M314.5 79.83H336v42.43h-21.5z" opacity={0.7} />
      <path fill="url(#prefix__c)" d="M314.49 176.25v-45.86H221.1l-15.86 45.86v4.7h109.84v-4.7h-.59z" opacity={0.7} />
      <path fill={primaryColor} d="M314.5 176.3H206.4l15.69-45.33h92.41v45.33z" />
      <path opacity={0.1} d="M314.5 176.3H206.4l15.69-45.33h92.41v45.33z" />
      <path fill={primaryColor} d="M206.4 176.3h108.68v4.65H206.4z" />
      <path fill="url(#prefix__d)" d="M515.66 129.81h-93.64v46.38h-.59v4.76h110.14v-4.76l-15.91-46.38z" opacity={0.7} />
      <path fill={primaryColor} d="M422.01 176.3h108.1l-15.69-45.33h-92.41v45.33z" />
      <path opacity={0.1} d="M422.01 176.3h108.1l-15.69-45.33h-92.41v45.33z" />
      <path fill={primaryColor} d="M530.11 180.95H421.43v-4.65h108.68z" />
      <path fill={primaryColor} opacity={0.5} d="M235.46 199.26h58.7v36.61h-58.7z" />
      <path opacity={0.1} d="M231.97 233.26h65.67v6.39h-65.67z" />
      <path fill="#535461" d="M231.97 232.68h65.67v6.39h-65.67z" />
      <path d="M235.46 199.26h58.7v14.53h-58.7z" opacity={0.1} />
      <path fill={primaryColor} opacity={0.5} d="M442.94 199.26h58.7v36.61h-58.7z" />
      <path opacity={0.1} d="M439.45 233.26h65.67v6.39h-65.67z" />
      <path fill="#535461" d="M439.45 232.68h65.67v6.39h-65.67z" />
      <path d="M442.94 199.26h58.7v14.53h-58.7z" opacity={0.1} />
      <path
        fill="url(#prefix__e)"
        d="M440.13 133.69l-71.69-55.44-69.38 55.4-5.44-6.81 74.74-59.67 77.1 59.63-5.33 6.89z"
        opacity={0.7}
      />
      <path opacity={0.1} d="M227.61 180.95h77.3v.87h-77.3zM433.06 180.95h78.17v.87h-78.17z" />
      <path fill="#535461" d="M315.08 80.41h20.34v41.84h-20.34z" />
      <path fill="url(#prefix__f)" d="M433.06 279.46H302.88V120.22l65.65-1.45 64.53 1.45v159.24z" opacity={0.7} />
      <path fill="#fff" d="M431.6 279.46H304.91V120.22l63.35-45.04 63.34 45.04v159.24z" />
      <path fill="#535461" d="M352.27 225.99h31.96v53.47h-31.96z" />
      <path opacity={0.1} d="M335.42 178.05h65.67v6.39h-65.67z" />
      <path fill={primaryColor} opacity={0.5} d="M338.91 144.05h58.7v36.61h-58.7z" />
      <path fill="#535461" d="M335.42 177.47h65.67v6.39h-65.67z" />
      <path d="M338.91 144.05h58.7v14.53h-58.7z" opacity={0.1} />
      <path
        fill={primaryColor}
        d="M440.13 134.27l-71.69-55.44-69.38 55.4-5.44-6.81 74.74-59.67 77.1 59.63-5.33 6.89z"
      />
      <circle cx={379.59} cy={252.73} r={2.32} fill="#e0e0e0" />
      <path fill="url(#prefix__g)" d="M0 168.46h130.82v113.99H0z" opacity={0.7} />
      <path fill="#eee" d="M2.24 169.73h127.2v111.43H2.24z" />
      <path fill="url(#prefix__h)" d="M26.42 134.79h15.77v31.11H26.42z" opacity={0.7} />
      <path fill="#535461" d="M26.85 135.22h14.91v30.68H26.85z" />
      <path fill="url(#prefix__i)" d="M113.35 281.17H17.9V164.41l48.14-1.07 47.31 1.07v116.76z" opacity={0.7} />
      <path fill="#fff" d="M112.29 281.17h-92.9V164.41l46.45-33.03 46.45 33.03v116.76z" />
      <path fill="#535461" d="M54.12 241.96h23.44v39.2H54.12z" />
      <path fill={primaryColor} opacity={0.5} d="M44.32 181.88h43.04v26.85H44.32z" />
      <path fill="#535461" d="M41.76 206.38h48.15v4.69H41.76z" />
      <path d="M44.32 181.88h43.04v10.65H44.32z" opacity={0.1} />
      <path
        fill="url(#prefix__j)"
        d="M118.53 174.29l-52.56-40.65-50.87 40.62-3.99-5 54.8-43.75 56.53 43.72-3.91 5.06z"
        opacity={0.7}
      />
      <path
        fill={primaryColor}
        d="M118.53 174.71l-52.56-40.65-50.87 40.62-3.99-4.99 54.8-43.76 56.53 43.73-3.91 5.05z"
      />
      <circle cx={74.15} cy={261.57} r={1.7} fill="#e0e0e0" />
      <path
        fill="url(#prefix__k)"
        d="M856.47 281.53H614.05l1.67-180.87 69.33-18.28h98.03l71.72 12.95 1.67 186.2z"
        opacity={0.7}
      />
      <path fill="#eee" d="M853.12 279.25H617.4l1.68-176.31 66.2-18.27h98.99l67.17 12.94 1.68 181.64z" />
      <path fill="url(#prefix__l)" d="M690.07 4.44h17.69v34.91h-17.69z" opacity={0.7} />
      <path fill="url(#prefix__m)" d="M690.07 111.98V74.25h-76.84l-13.05 37.73v3.87h90.37v-3.87h-.48z" opacity={0.7} />
      <path fill={primaryColor} d="M690.07 112.03h-88.93l12.91-37.3h76.02v37.3z" />
      <path opacity={0.1} d="M690.07 112.03h-88.93l12.91-37.3h76.02v37.3z" />
      <path fill={primaryColor} d="M601.14 112.03h89.42v3.83h-89.42z" />
      <path fill="url(#prefix__n)" d="M855.58 74.73h-77.04v38.16h-.49v3.92h90.61v-3.92l-13.08-38.16z" opacity={0.7} />
      <path fill={primaryColor} d="M778.53 112.98h88.94l-12.91-37.29h-76.03v37.29z" />
      <path opacity={0.1} d="M778.53 112.98h88.94l-12.91-37.29h-76.03v37.29z" />
      <path fill={primaryColor} d="M867.47 116.81h-89.42v-3.83h89.42z" />
      <path fill={primaryColor} opacity={0.5} d="M625.04 214.11h48.29v30.12h-48.29z" />
      <path opacity={0.1} d="M622.18 242.08h54.03v5.26h-54.03z" />
      <path fill="#535461" d="M622.18 241.61h54.03v5.26h-54.03z" />
      <path d="M625.04 214.11h48.29v11.95h-48.29z" opacity={0.1} />
      <path fill={primaryColor} opacity={0.5} d="M795.75 214.11h48.29v30.12h-48.29z" />
      <path opacity={0.1} d="M792.88 242.08h54.03v5.26h-54.03z" />
      <path fill="#535461" d="M792.88 241.61h54.03v5.26h-54.03z" />
      <path d="M795.75 214.11h48.29v11.95h-48.29z" opacity={0.1} />
      <path fill={primaryColor} opacity={0.5} d="M795.75 143.82h48.29v30.12h-48.29z" />
      <path opacity={0.1} d="M792.88 171.8h54.03v5.26h-54.03z" />
      <path fill="#535461" d="M792.88 171.32h54.03v5.26h-54.03z" />
      <path d="M795.75 143.82h48.29v11.95h-48.29z" opacity={0.1} />
      <path fill={primaryColor} opacity={0.5} d="M626.48 143.82h48.29v30.12h-48.29z" />
      <path opacity={0.1} d="M623.61 171.8h54.03v5.26h-54.03z" />
      <path fill="#535461" d="M623.61 171.32h54.03v5.26h-54.03z" />
      <path d="M626.48 143.82h48.29v11.95h-48.29z" opacity={0.1} />
      <path
        fill="url(#prefix__o)"
        d="M793.43 54.73L734.46 9.12 677.37 54.7l-4.48-5.6L734.39 0l63.43 49.06-4.39 5.67z"
        opacity={0.7}
      />
      <path opacity={0.1} d="M618.59 115.85h63.59v.72h-63.59zM787.62 116.81h64.31v.72h-64.31z" />
      <path fill="#535461" d="M690.55 4.92h16.74v34.43h-16.74z" />
      <path fill="url(#prefix__p)" d="M787.86 280.1H680.75V48.63l54.02-2.11 53.09 2.11V280.1z" opacity={0.7} />
      <path fill="#fff" d="M786.42 280.1H682.18V47.71l52.12-39.2 53.08 40.64-.96 230.95z" />
      <path fill="#535461" d="M721.15 236.11h26.3v43.99h-26.3z" />
      <path opacity={0.1} d="M707.29 196.66h54.03v5.26h-54.03z" />
      <path fill={primaryColor} opacity={0.5} d="M710.16 168.69h48.29v30.12h-48.29z" />
      <path fill="#535461" d="M707.29 196.18h54.03v5.26h-54.03z" />
      <path d="M710.16 168.69h48.29v11.95h-48.29z" opacity={0.1} />
      <path fill={primaryColor} opacity={0.5} d="M710.16 109.64h48.29v30.12h-48.29z" />
      <path fill="#535461" d="M707.29 137.13h54.03v5.26h-54.03z" />
      <path d="M710.16 109.64h48.29v11.95h-48.29z" opacity={0.1} />
      <path fill={primaryColor} opacity={0.5} d="M710.16 50.58h48.29V80.7h-48.29z" />
      <path fill="#535461" d="M707.29 78.08h54.03v5.26h-54.03z" />
      <path d="M710.16 50.58h48.29v11.95h-48.29z" opacity={0.1} />
      <path fill={primaryColor} d="M793.43 56.41l-58.97-45.62-57.09 45.58-4.48-5.6 61.5-49.1 63.43 49.06-4.39 5.68z" />
      <circle cx={743.63} cy={258.1} r={1.91} fill="#e0e0e0" />
    </svg>
  );
};

UndrawHouses.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawHouses;
