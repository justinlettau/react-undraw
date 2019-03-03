import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawContemplating = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 1137.096 692.552" style={style} {...props}>
      <circle cx={573} cy={334} r={334} fill="#f2f2f2" />
      <path
        d="M955.854 77.796l-20.425 51.433c3.952 17.89 7.818 38.066 10.92 59.55l36.366-76.105.596.918c-8.331-14.4-17.805-26.822-28.085-36.643zM934.73 126.092l19.786-49.822c-11.601-10.908-24.214-18.503-37.371-21.855a64.059 64.059 0 0 0-2.047-.477c1.587 4.722 10.72 32.496 19.632 72.154zM1018.301 236.428l.46 1.14q-.732-11.647-2.299-23.046l-63.22 79.01-.23-.513q-.205 6.994-.615 13.798zM1006.761 169.966l.533 1.048a258.753 258.753 0 0 0-23.41-56.414l-37.06 77.554q4.224 30.224 5.654 58.33zM831.027 119.692a216.052 216.052 0 0 0-9.869 42.413l129.016 75.373c-1.153-16.236-2.9-31.77-4.927-46.124L830.89 120.912zM819.455 178.946l.117-1.227 131.463 74.331q-.28-5.981-.673-11.86L820.87 164.538l.125-1.225q-.985 7.629-1.54 15.633zM1015.764 211.96l.494 1.1a309.002 309.002 0 0 0-8.595-40.757l-55.017 81.607q.846 18.747.425 36.402zM945.884 358.273c-5.245 26.03-13.29 49.241-24.064 69.37 15.066-12.847 74.88-67.248 92.583-135.207zM822.973 237.978a298.925 298.925 0 0 0 11.045 38.46l.205-1.33 110.48 80.358a371.63 371.63 0 0 0 5.752-44.166zM933.305 126.437c-9.653-42.904-19.546-71.742-19.689-72.155l.62-.53c-20.214-4.155-38.81 2.442-54.117 17.259zM952.164 310.327c-.095 1.405-.184 2.818-.292 4.211a369.22 369.22 0 0 1-5.224 39.836l67.87-65.214.422 1.13a146.38 146.38 0 0 0 4.421-36.68q-.08-7.286-.507-14.511zM944.836 188.49c-3.082-21.237-6.91-41.174-10.818-58.855l-74.865-56.698.195-1.181c-11.43 11.35-20.978 27.334-27.939 46.867z"
        fill={primaryColor}
      />
      <path
        d="M944.248 357.78l-109.672-79.769c27.181 75.315 80.19 147.67 83.585 152.263 12.56-22.05 20.881-46.778 26.087-72.493zM950.571 308.767l.064-.068a501.541 501.541 0 0 0 .516-53.984L819.365 180.2q-.704 10.847-.589 22.307a179.711 179.711 0 0 0 3.585 32.519zM1136.133 364.05l-48.536 26.586c-8.367 16.3-18.257 34.304-29.57 52.83l76.548-35.42-.126 1.086c2.767-16.403 3.394-32.014 1.741-46.135zM1089.06 387.774l47.015-25.752c-1.977-15.8-6.847-29.695-14.843-40.669a64.042 64.042 0 0 0-1.272-1.673c-1.789 4.65-12.47 31.866-30.9 68.094zM1083.051 526.057l-.374 1.171q6.866-9.438 12.93-19.216l-99.085 20.53.15-.542q-4.62 5.256-9.275 10.235zM1116.554 467.508l-.258 1.147a258.753 258.753 0 0 0 17.951-58.381l-78.008 36.094q-16.024 25.972-32.85 48.53zM1013.271 316.702a216.052 216.052 0 0 0-34.653 26.37l51.293 140.341c9.467-13.24 18.029-26.32 25.624-38.667l-43.15-127.193zM966.565 354.957l.873-.87 53.841 141.098q3.6-4.785 7.047-9.563l-51.482-140.859.878-.864q-5.624 5.248-11.157 11.058zM1096.704 505.593l-.321 1.163a309.003 309.003 0 0 0 19.375-36.873l-94.424 27.762q-11.305 14.979-22.89 28.308zM949.561 573.712c-20.641 16.702-41.641 29.448-62.778 38.078 19.798-.284 100.563-4.033 157.543-45.083z"
        fill={primaryColor}
      />
      <path
        d="M931.624 402.667a298.924 298.924 0 0 0-16.025 36.667l1.007-.894 33.837 132.356a371.626 371.626 0 0 0 32.6-30.347zM1087.742 387.131c19.93-39.201 30.704-67.721 30.857-68.13l.816-.015c-12.918-16.091-31.448-22.871-52.688-21.223zM984.98 540.79c-.97 1.021-1.94 2.052-2.912 3.056a369.223 369.223 0 0 1-29.431 27.35l93.867-6.939-.395 1.14a146.38 146.38 0 0 0 26.8-25.43q4.585-5.664 8.865-11.5zM1057.045 442.279c11.172-18.323 20.94-36.119 29.207-52.23l-21.497-91.419.903-.785c-16.043 1.452-33.592 7.673-51.41 18.277zM948.615 572.289l-33.589-131.388c-27.103 75.344-32.425 164.88-32.74 170.583 23.738-8.971 45.918-22.71 66.33-39.195zM984.748 538.572l.091-.011a501.536 501.536 0 0 0 34.83-41.25l-53.973-141.445q-7.461 7.905-14.68 16.805a179.711 179.711 0 0 0-17.982 27.332zM810.134 281.03l-3.527 55.228c9.288 15.793 19.201 33.785 28.792 53.258l11.062-83.618.85.688c-12.374-11.118-25.223-20.004-38.036-26.167zM804.973 333.49l3.417-53.497c-14.405-6.788-28.747-10.112-42.296-9.233-.705.045-1.4.11-2.094.179 2.969 4 20.239 27.591 40.973 62.552zM918.556 412.592l.79.943q-4.297-10.851-9.31-21.208l-35.702 94.683-.378-.417q1.967 6.715 3.68 13.313zM887.038 352.951l.83.833a258.753 258.753 0 0 0-39.701-46.416l-11.273 85.211q13.36 27.439 23.406 53.726zM704.37 359.459a216.052 216.052 0 0 0 3.724 43.386l145.996 31.804c-6.116-15.084-12.58-29.318-18.943-42.343l-130.531-31.644zM711.68 419.388l-.268-1.204 148 30.058q-2.114-5.603-4.305-11.072l-146.535-31.922-.26-1.204q1.422 7.56 3.367 15.344zM908.58 390.106l.81.893a309.003 309.003 0 0 0-20.772-36.103l-27.099 94.616q6.6 17.567 11.657 34.488z"
        fill={primaryColor}
      />
      <path
        d="M887.347 550.855c3.057 26.376 2.582 50.937-1.444 73.41 10.358-16.874 50.427-87.099 46.258-157.203zM733.272 474.441a298.926 298.926 0 0 0 22.392 33.164l-.216-1.329 129.908 42.274a371.631 371.631 0 0 0-8.18-43.781zM803.725 334.26c-22.443-37.82-40.765-62.187-41.028-62.536l.425-.696c-20.508 2.296-36.154 14.319-46.132 33.141zM878.5 503.315c.343 1.366.696 2.737 1.023 4.096a369.221 369.221 0 0 1 7.345 39.5l44.389-82.999.75.944a146.38 146.38 0 0 0-7.132-36.25q-2.329-6.905-4.967-13.645zM833.872 389.71c-9.496-19.245-19.298-37.022-28.48-52.63l-88.725-30.78-.18-1.184c-7.362 14.328-11.502 32.48-12.084 53.208z"
        fill={primaryColor}
      />
      <path
        d="M885.639 550.892L756.68 508.928c49.13 63.225 121.907 115.652 126.556 118.971 5.13-24.853 5.4-50.941 2.402-77.007zM876.503 502.324l.039-.084a501.537 501.537 0 0 0-16.195-51.5l-148.365-30.132q2.683 10.534 6.335 21.396a179.711 179.711 0 0 0 13.46 29.82z"
        fill={primaryColor}
      />
      <path
        d="M741.817 607.186q151.46-1.787 302.911 2.049c8.686.22 17.699.502 25.37 2.803s13.573 7.234 11.474 11.975q-59.121 1.749-118.365 1.08c-8.601 4.214-18.044 10.56-12.758 16.24 3.658 3.932 12.687 5.103 20.583 5.112 14.3.017 28.659-2.33 42.748-.953s28.148 8.787 24.02 16.48c-3.134 5.842-15.024 8.734-25.845 9.25s-21.901-.557-32.478.827c-10.052 1.314-18.76 4.73-28.167 7.115-14.84 3.761-31.289 4.924-47.473 5.912-124.272 7.592-249.574 7.532-374.579 7.463-50.606-.027-101.9-.104-150.77-7.492-27.856-4.211-54.55-10.75-82.757-14.144-33.694-4.053-68.517-3.503-102.973-3.381q-90.735.32-181.317-3.498c-4.494-.189-10.01-.83-11.223-3.27-1.415-2.845 4.33-5.066 9.184-6.201a533.256 533.256 0 0 1 83.66-12.48c14.267-1.002 28.97-1.513 42.093-4.816s24.587-10.229 24.464-18.308c-.037-2.464-1.077-5.1.98-7.277 2.73-2.89 9.45-3.554 15.248-3.869a3055.99 3055.99 0 0 1 193.45-4.366c22.71.206 45.513.663 68.062-.867 18.476-1.253 36.573-3.827 54.782-5.987 24.441-2.9 130.81-17.923 146.327-5.733 11.616 9.125-12.366 11.094 18.788 14.817 27.126 3.242 57.048 1.843 84.56 1.519z"
        fill="#f2f2f2"
      />
      <circle cx={686} cy={230} r={60} fill="#2f2e41" />
      <circle cx={751} cy={151} r={60} fill="#2f2e41" />
      <path
        d="M802.753 200.684a60.003 60.003 0 0 1-92.656-31.505 60.003 60.003 0 1 0 117.044-24.606 59.981 59.981 0 0 1-24.388 56.111z"
        fill="#2f2e41"
      />
      <circle cx={670.5} cy={253.5} r={49} fill="#a0616a" />
      <path
        d="M653.5 293.5s20 30 17 43c0 0-13 6-13 8s-12 21-12 21l-14 19-6 25h29l32-25 31-34s21-10 32-2l6 5s-21-28-31-34c0 0-18-22-16-44z"
        fill="#a0616a"
      />
      <path d="M661.5 335.5s-20 11-28 32-44 91-44 91-3 45-1 47 25-20 29-26 20-78 20-78l26-42 5-24z" fill="#a0616a" />
      <path
        d="M598.5 461.5l-9-3s-55-34-58-49-47-65-48-38 32 57 32 57 72 101 76 72zM689.5 392.5s1 28 40 38c0 0 40 54 44 78s109 147 109 147 97 12 97 0-81-22-81-22-85-126-89-143-42-143-60-142c0 0-17-8-27-2s-33 46-33 46z"
        fill="#a0616a"
      />
      <path
        d="M572.5 505.5s-70-94-85-100-34-10-45 4-141 178-141 178-46 47-69 38c0 0-12 10 16 12s54-6 54-6 17 3 29 6 27 4 26-4l-4-32s103-85 106-121c0 0-2-17 0-15s44 47 63 57 66 24 66 24z"
        fill="#a0616a"
      />
      <path
        d="M572.5 505.5s-70-94-85-100-34-10-45 4-141 178-141 178-46 47-69 38c0 0-12 10 16 12s54-6 54-6 17 3 29 6 27 4 26-4l-4-32s103-85 106-121c0 0-2-17 0-15s44 47 63 57 66 24 66 24z"
        opacity={0.1}
      />
      <path
        d="M583.5 518.5s-92-35-104-43-55-24-77-6-129 101-165 109-98 27-98 27-40 3 3 20c0 0 53 5 62 13s39 18 41 5 8-30 19-32 143-38 163-77c0 0 45 25 73 54s94 45 94 45z"
        fill="#a0616a"
      />
      <path
        d="M616.5 486.5s-43.835 11.652-47.418 7.326S546.5 513.5 564.5 561.5s14 70 24 77 57-4 71 1 32 9 38-20 21-80 18-87-19-23-19-23l-33-17z"
        fill="#3f3d56"
      />
      <path
        d="M768 374s-6.962-19.5-19.885-23.157a33.204 33.204 0 0 1-3.227-1.058c-4.854-1.927-19.663-6.135-30.388 8.715-13 18-25 39-15 51s30 19 30 19l15 19s-30 54-30 79c0 0-1 10-18-8s-86.569-30.445-86.569-30.445S624.5 468.5 613.5 459.5s-21.07-44.848 4.965-58.924L663 335l8 1s-10.5 9.5-11.5 14.5-41 40-25 46 42-7 53-22c6.05-8.25 14.52-19.525 25.244-26.67a37.39 37.39 0 0 1 37.398-2.009l3.358 1.68a42.838 42.838 0 0 1 14.808 18.219l1.192 2.78z"
        fill="#2f2e41"
      />
      <circle cx={702} cy={240} r={44} fill="#2f2e41" />
      <ellipse cx={665} cy={223.5} rx={39} ry={30.5} fill="#2f2e41" />
      <ellipse cx={679.5} cy={271.5} rx={6.5} ry={11.5} fill="#a0616a" />
      <path
        d="M690.5 170.36V250h-23v-79.64a5.36 5.36 0 0 1 5.36-5.36h12.28a5.36 5.36 0 0 1 5.36 5.36z"
        fill="#ff6584"
      />
      <circle cx={679} cy={266} r={25} fill={primaryColor} />
      <circle cx={679} cy={266} r={11} fill="#f2f2f2" />
      <circle cx={679} cy={266} r={3} fill="#ff6584" />
      <path d="M690.5 170.36V174h-23v-3.64a5.36 5.36 0 0 1 5.36-5.36h12.28a5.36 5.36 0 0 1 5.36 5.36z" opacity={0.1} />
      <path
        d="M423.354 367.646l58.88-58.88a10.983 10.983 0 0 1 15.532 0l52.968 52.968a10.983 10.983 0 0 1 0 15.532L495.72 432.28a10.983 10.983 0 0 1-14.946.545l-56.834-49.101a10.983 10.983 0 0 1-.586-16.078z"
        fill="#2f2e41"
      />
      <path fill="#f2f2f2" d="M440 377l51.5-51.5L534 368l-49.5 49.5L440 377z" />
      <circle cx={488} cy={371} r={24.611} fill={primaryColor} />
      <path
        d="M477.046 391.976a24.611 24.611 0 0 1 25.07-41.134 24.61 24.61 0 1 0-22.334 43.356 24.78 24.78 0 0 1-2.736-2.222z"
        opacity={0.1}
      />
      <path
        d="M500.1 366.11c2.935 2.757 3.09 12.684-1.391 17.454s-11.902 2.575-14.837-.183-.273-5.035 4.208-9.804 9.085-10.225 12.02-7.468z"
        fill="#f2f2f2"
      />
      <circle cx={475.115} cy={371.401} r={7.292} fill="#2f2e41" />
      <circle cx={488.223} cy={357.451} r={7.292} fill="#2f2e41" />
      <circle cx={475.115} cy={371.401} r={1.823} fill="#f2f2f2" />
      <circle cx={474.331} cy={366.912} r={0.912} fill="#f2f2f2" />
      <circle cx={487.438} cy={352.962} r={0.912} fill="#f2f2f2" />
      <circle cx={488.223} cy={357.451} r={1.823} fill="#f2f2f2" />
    </svg>
  );
};

UndrawContemplating.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawContemplating;
