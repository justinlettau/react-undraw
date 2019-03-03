import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawCreativeWoman = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 940.5 744.205" style={style} {...props}>
      <ellipse cx={399} cy={334.049} rx={399} ry={296.155} fill="#f2f2f2" />
      <ellipse cx={431.5} cy={296.655} rx={399} ry={296.155} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <path
        d="M162.6 169.136a54.531 54.531 0 0 1 36.24 6.17c5.697 3.231 11.076 7.93 12.718 14.27s-1.998 14.252-8.476 15.214c-9.552 1.419-14.469-13.543-8.025-20.735s17.764-7.256 27.07-4.68c16.96 4.694 31.204 15.89 46.152 25.173 73.907 45.897 166.948 45.748 253.477 36.719 8.88-.927 18.353-2.186 25.073-8.064s8.53-18.081 1.232-23.224c-7.163-5.048-18.282 1-19.95 9.603s4.111 17.332 11.773 21.585 16.776 4.904 25.539 4.804c37.383-.426 73.932-12.85 106.495-31.219 10.996-6.202 22.428-14.148 25.83-26.307s-6.972-27.921-19.166-24.65c-7.96 2.135-12.347 10.977-12.984 19.194a43.007 43.007 0 0 0 3.166 19.25c4.29 10.671 12.096 19.464 19.172 28.53a259.966 259.966 0 0 1 53.955 174.51c-1.626 25.773-10.695 55.563-35.145 63.877-9.98 3.393-20.916 2.454-31.244.35-8.606-1.754-18.77-6.325-19.123-15.101-.248-6.172 5.048-11.462 10.941-13.31 14.949-4.69 31.108 10.226 30.897 25.891s-13.123 29.101-28.019 33.954-31.21 2.62-46.26-1.735c-48.974-14.168-89.814-49.489-138.947-63.1-57.789-16.007-120.051.122-173.915 26.473"
        fill="none"
        stroke="#2f2e41"
        strokeMiterlimit={10}
      />
      <path fill="#ff6584" d="M408.885 163.388h67.923v58.851h-67.923z" />
      <path opacity={0.1} d="M408.946 163.577h67.923v58.851h-67.923z" />
      <path
        d="M373.42 355.328l-9.244 75.472s-12.73 36.372 12.124 42.585 1.97-49.557 1.97-49.557l9.547-69.258z"
        fill="#ffc1c7"
      />
      <path
        d="M395.85 288.192s-5.76 71.38-6.517 71.38c-.578 0-5.371.351-11.17.653-1.82.094-3.735.183-5.652.256-8.032.303-1.516-11.063-1.061-11.821s-1.667-7.73-5.153-13.488 1.213-1.819 4.698-6.365.303-2.425-4.092-6.062 2.577-4.85 6.214-6.365-.152-1.97-4.243-4.547-.607-14.245 0-37.887a77.67 77.67 0 0 1 8.452-32.886 54.446 54.446 0 0 1 4.126-6.972l8.942-.757s4.092 16.367 4.395 18.186 1.06 36.675 1.06 36.675z"
        fill="#2f2e41"
      />
      <path
        d="M419.188 163.618s4.395 37.584-1.364 41.07-8.183 14.245-8.183 14.245l21.52 11.215 36.675-7.123-1.364-18.489s-17.58-1.364-13.943-10.305a104.23 104.23 0 0 0 5.304-18.035z"
        fill="#ffc1c7"
      />
      <path
        d="M419.188 163.618s4.395 37.584-1.364 41.07-8.183 14.245-8.183 14.245l21.52 11.215 36.675-7.123-1.364-18.489s-17.58-1.364-13.943-10.305a104.23 104.23 0 0 0 5.304-18.035z"
        opacity={0.1}
      />
      <path
        d="M443.588 550.372c-2.408 7.471-1.061 42.633-.35 57.762q.339 7.23-.007 14.465l-1.614 34.01.04 1.03 1.93 50.193-18.185-2.121-1.364-27.43s-1.689-6.566-4.071-16.447c-6.477-26.857-18.086-78.204-14.873-88.73 4.395-14.396-6.517-68.045-6.517-68.045l38.19-6.82s10.105 41.94 6.82 52.133zM533.608 713.987L523 720.05s-19.247-7.425-20.308-7.729-2.273-16.215-2.273-16.215-2.504-16.328-5.645-33.038c-2.213-11.773-4.741-23.733-6.934-30.31-5.304-15.913-4.698-68.955-5.304-72.44s-19.247-68.047-19.247-68.047 40.464-7.577 45.617-3.03 10.002 59.407 9.699 71.076 1.364 82.14 1.364 82.14.207 10.248.532 21.175c.23 7.723.518 15.783.832 20.804a30.149 30.149 0 0 0 8.638 19.247z"
        fill="#ffc1c7"
      />
      <path
        d="M516.786 711.563s-10.457-13.791 13.943-12.73c0 0 2.273 2.424 6.668 8.335s33.038 28.188 18.64 32.431-32.926 6.626-38.537 2.355a62.953 62.953 0 0 1-25 1s1.705-27.451 3.07-30.634 2.879-19.246 2.879-19.246l16.519 21.065z"
        fill="#2f2e41"
      />
      <circle cx={444.8} cy={154.676} r={31.068} fill="#ffc1c7" />
      <path
        d="M395.85 288.192s-5.76 71.38-6.517 71.38c-.578 0-5.371.351-11.17.653a5.75 5.75 0 0 1 1.168-1.866c3.788-3.486 5.607-29.552 5.607-29.552l-5.153-46.98 4.47-40.995c2.28-4.47-2.803-6.744-2.803-6.744l8.942-.758s4.092 16.368 4.395 18.186 1.06 36.676 1.06 36.676z"
        opacity={0.1}
      />
      <path
        d="M494.357 211.962s-28.795-11.82-30.916-10.76-7.88 5.304-7.88 5.304-13.489 14.094-31.675 10.003c0 0-6.213-3.031-6.062-11.821 0 0-18.944 10.153-24.854 16.822s-11.518 12.578-11.518 12.578l2.88 47.738 5.152 46.98s-1.818 26.067-5.607 29.553-8.638 33.644-3.031 82.746-5.91 65.318.758 69.713 57.589 1.515 86.99 2.88 47.737-6.82 46.222-8.942-8.184-78.2-3.183-99.72 1.213-66.682 1.213-66.682z"
        fill="#2f2e41"
      />
      <path
        d="M486.022 348.054s-7.881 61.529-13.337 67.136-7.426 50.163 2.122 50.163 18.186-49.254 18.186-49.254l14.549-66.681z"
        fill="#ffc1c7"
      />
      <path
        d="M416.46 705.408s19.702-13.337 30.159 0c0 0 4.395 29.703 0 33.038s-34.402 8.94-35.008 0 1.515-13.034 1.515-13.034l3.334-12.124z"
        fill="#2f2e41"
      />
      <path
        d="M491.705 220.07l-.985-5.229s22.126 23.794 25.763 44.404 11.67 41.98 6.062 44.86-10.154 1.97-7.577 6.667 3.334 10.306.757 12.124-4.395 3.334-3.485 7.123.909 11.518-.91 13.185-6.365 15.003-6.365 15.003-18.489-6.062-25.46-1.97-1.061-15.912-1.061-15.912-1.515-8.033-3.789-9.397-3.637-3.94-.757-6.668 5.152-2.728 1.212-6.516-9.245-2.122-3.789-6.062 8.335-5.76 4.698-9.548-6.82-5.91-4.243-9.244 7.198-76.154 19.929-72.82z"
        opacity={0.1}
      />
      <path
        d="M489.204 212.871l5.153-.909s22.126 23.793 25.763 44.404 11.67 41.98 6.062 44.859-10.154 1.97-7.577 6.668 3.334 10.305.757 12.124-4.394 3.334-3.485 7.123.91 11.518-.91 13.185-6.365 15.003-6.365 15.003-18.489-6.062-25.46-1.97-1.06-15.913-1.06-15.913-1.516-8.032-3.79-9.396-3.637-3.94-.757-6.668 5.152-2.728 1.212-6.517-9.244-2.121-3.789-6.062 8.336-5.759 4.698-9.547-6.82-5.91-4.243-9.245 1.06-80.473 13.791-77.139z"
        fill="#2f2e41"
      />
      <path
        d="M418.643 118.974a32.843 32.843 0 0 0-8.243 9.253 41.515 41.515 0 0 0-2.614 6.364c-2.46 7.079-8.574 14.248-5.986 21.282.738 2.007 1.89 4.123 1.228 6.156-.588 1.806-2.403 2.86-3.715 4.232-2.817 2.947-3.29 7.367-3.463 11.44-.315 7.458 3.786 16.247 8.741 21.83a30.503 30.503 0 0 1 2.982 3.376 7.914 7.914 0 0 1 .935 6.51l7.218-1.507a59.874 59.874 0 0 1 .244 8.02 7.487 7.487 0 0 0 7.94-5.13 21.438 21.438 0 0 0 1.982 5.479 28.283 28.283 0 0 0 4.795-8.88 25.386 25.386 0 0 0 .86-12.818 54.356 54.356 0 0 0-3.107-9.111c-2.551-6.446-4.634-13.066-6.714-19.679-1.081-3.434-2.175-6.98-1.847-10.566l2.565-.279a12.247 12.247 0 0 1 .81-4.14 15.187 15.187 0 0 1 4.289 1.615l2.957-7.503c1.951 2.024 4.752 2.94 7.434 3.784l10.193 3.21.062-2.017a52.317 52.317 0 0 0 14.504 9.098 3.3 3.3 0 0 1-.716-2.626c2.512 4.5 1.507 10.106-.043 15.02s-3.607 9.919-2.983 15.034c.467 3.826 2.427 7.485 2.064 11.323-.179 1.89-.918 3.687-1.148 5.571-.548 4.494 1.815 8.773 4.095 12.683l4.435-6.09a23.32 23.32 0 0 1 5.594-6.03c2.359-1.564 5.283-2.266 7.338-4.211 3.67-3.473 3.204-9.39 2.01-14.3-.634-2.61-1.401-5.256-1.168-7.932.395-4.536 3.547-8.289 5.323-12.482a21.669 21.669 0 0 0-1.215-19.049c-2.202-3.778-5.53-6.82-7.607-10.67-2.066-3.832-2.854-8.392-5.686-11.699a19.736 19.736 0 0 0-4.766-3.797 62.136 62.136 0 0 0-26.435-8.625c-8.867-.927-16.347 2.26-23.142 7.861z"
        fill="#ff6584"
      />
      <path
        d="M802.198 619.451a20.813 20.813 0 1 0 2.771-39.915l.521 10.712-5.068-9.18a20.734 20.734 0 0 0-10.683 11.722 20.408 20.408 0 0 0-1.198 5.63 20.809 20.809 0 0 0 13.657 21.031z"
        fill={primaryColor}
      />
      <path
        d="M827.275 743.695c-1.789-9.11 5.963-17.187 13.621-22.437s16.605-10.408 19.218-19.317c3.755-12.804-7.43-24.53-16.136-34.642a125.3 125.3 0 0 1-16.523-24.557c-1.812-3.532-3.476-7.225-3.953-11.166-.686-5.676 1.137-11.323 2.974-16.737q9.18-27.052 19.629-53.65"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M803.055 616.693a20.813 20.813 0 1 0 2.772-39.915l.52 10.712-5.068-9.18a20.734 20.734 0 0 0-10.683 11.722 20.409 20.409 0 0 0-1.197 5.63 20.809 20.809 0 0 0 13.656 21.031z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M824.731 557.49a20.788 20.788 0 0 1 14.98-13.198l1.714 10.184 3.177-10.696a20.81 20.81 0 1 1-19.87 13.71z"
        fill={primaryColor}
      />
      <path
        d="M825.874 553.812a20.788 20.788 0 0 1 14.98-13.197l1.714 10.184 3.177-10.696a20.81 20.81 0 1 1-19.87 13.71z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M840.325 667.506a20.81 20.81 0 0 0 18.419-37.023l-2.441 8.22-1.732-10.304a.362.362 0 0 0-.053-.02 20.811 20.811 0 1 0-14.193 39.127z"
        fill={primaryColor}
      />
      <path
        d="M841.315 663.781a20.81 20.81 0 0 0 18.419-37.022l-2.441 8.219-1.731-10.304a.362.362 0 0 0-.053-.02 20.811 20.811 0 1 0-14.194 39.127z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <path
        d="M818.658 702.069a20.801 20.801 0 1 0 4.01-16.298l9.273 13.957-12.67-7.408a20.616 20.616 0 0 0-.613 9.749z"
        fill={primaryColor}
      />
      <path
        d="M819.515 699.31a20.801 20.801 0 1 0 4.01-16.297l9.273 13.957-12.67-7.408a20.616 20.616 0 0 0-.613 9.749z"
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
      />
      <circle cx={138.597} cy={145.836} r={9.163} fill={primaryColor} />
      <circle cx={122.307} cy={144.054} r={9.163} fill={primaryColor} />
      <circle cx={108.562} cy={154.744} r={9.163} fill={primaryColor} />
      <circle cx={110.09} cy={171.034} r={9.163} fill={primaryColor} />
      <path
        d="M158.067 179.414c-1.174-1.085-2.898-1.351-4.374-1.6a6.51 6.51 0 0 1-4.019-1.778 4.93 4.93 0 0 1 0-7.789l5.388-4.783a17.312 17.312 0 0 0 0-26.53c-6.082-5.353-14.243-8.003-22.725-8.003a42.988 42.988 0 0 0-28.238 10.687c-14.848 13.123-14.848 34.622 0 47.745 7.38 6.526 17.337 9.78 27.189 9.85h.302c9.851 0 19.56-3.182 26.46-9.317 2.56-2.258 2.133-6.508.017-8.482zm-55.142-23.454a5.69 5.69 0 1 1 5.69 5.69 5.684 5.684 0 0 1-5.69-5.69zm7.113 22.405a5.69 5.69 0 1 1 5.69-5.69 5.684 5.684 0 0 1-5.69 5.69zm11.38-28.629a5.69 5.69 0 1 1 5.69-5.69 5.684 5.684 0 0 1-5.69 5.69zm12.804 38.943a8.535 8.535 0 1 1 8.535-8.536 8.538 8.538 0 0 1-8.535 8.536zm4.267-36.987a5.69 5.69 0 1 1 5.69-5.69 5.684 5.684 0 0 1-5.69 5.69z"
        fill="#2f2e41"
      />
      <path fill="none" stroke="#2f2e41" strokeMiterlimit={10} d="M346 743.454h594.5" />
      <path
        d="M265.476 461.916s-6.06 4.517-9.553 6.7-6.63 9.745-4.916 16.676l.4-.124s.469-3.439 6.288-5.906 14.38-6.005 10.855-15.228z"
        fill={primaryColor}
      />
      <path
        d="M267.553 457.648s23.182-44.085 44.12-69.252l9.02-13.01 1.049.551-7.976 13.894s-34.622 65.203-42.684 70.343z"
        fill="#2f2e41"
      />
      <path d="M272.083 459.863l-4.572-3.41-3.236 5.836a5.207 5.207 0 0 0 4.662 2.284z" fill="#3f3d56" />
      <path
        d="M253.25 493.353c0 1.656-.448 3-1 3s-1-1.344-1-3a5.607 5.607 0 0 1 1-3 5.607 5.607 0 0 1 1 3z"
        fill={primaryColor}
      />
      <ellipse cx={248.25} cy={500.353} rx={1} ry={3} fill={primaryColor} />
      <path d="M678.668 148.745l38.948-7.156s4.106-.821 4.81 1.994l-44.814 12.905-.938-6.218z" fill={primaryColor} />
      <path
        d="M680.348 148.437c-13.865.219-11.241 4.942-12.883 8.11s-15.07 3.493-15.07 3.493h-.003a10.056 10.056 0 1 0 10.248 10.502 9.866 9.866 0 0 0-.284-2.83c-1.197-8.97 16.669-11.029 16.669-11.029l-.65-3.187a5.382 5.382 0 0 1 1.973-5.06zm-27.665 28.053a7.039 7.039 0 1 1 7.039-7.04 7.039 7.039 0 0 1-7.039 7.04z"
        fill="#2f2e41"
      />
      <path d="M679.915 156.698l39.502 2.778s4.172.36 4.559-2.517l-46.577-8.16.365 6.605z" fill={primaryColor} />
      <path
        d="M679.095 152.009l.292-3.24s-17.984-.057-17.792-9.105a9.867 9.867 0 0 0-.033-2.845 10.257 10.257 0 1 0-9.017 11.577h.004s13.38-1.17 15.364 1.795-.097 7.951 13.706 6.627a5.382 5.382 0 0 1-2.524-4.81zm-20.312-13.78a7.039 7.039 0 1 1-7.778-6.212 7.039 7.039 0 0 1 7.778 6.212z"
        fill="#2f2e41"
      />
    </svg>
  );
};

UndrawCreativeWoman.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawCreativeWoman;
