import React from 'react';
import PropTypes from 'prop-types';
import defaultProps from '../default-props';

const UndrawBookmarks = _props => {
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
    <svg data-name="Layer 1" width="1em" height="1em" viewBox="0 0 832.5 677.845" style={style} {...props}>
      <ellipse cx={667} cy={643.845} rx={151} ry={34} fill={primaryColor} />
      <ellipse cx={681} cy={633.845} rx={151} ry={34} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={436.5} cy={304.345} r={30} fill={primaryColor} />
      <circle cx={557.5} cy={304.345} r={30} fill={primaryColor} />
      <circle cx={678.5} cy={304.345} r={30} fill={primaryColor} />
      <circle cx={12.5} cy={20.345} r={3} fill="#f86b75" />
      <circle cx={21.5} cy={20.345} r={3} fill="#fad375" />
      <circle cx={30.5} cy={20.345} r={3} fill="#8bcc55" />
      <path fill={primaryColor} d="M67 66.845h206v64H67z" />
      <path fill="none" stroke="#3f3d56" strokeMiterlimit={10} d="M.5 10.345h364v216H.5zM.5 26.703h364" />
      <circle cx={13.5} cy={18.345} r={3} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={22.5} cy={18.345} r={3} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={31.5} cy={18.345} r={3} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <path fill="none" stroke="#3f3d56" strokeMiterlimit={10} d="M79.5 54.345h206v64h-206z" />
      <path fill="#f2f2f2" d="M41 158.845h276v8.276H41zM41 178.707h276v8.276H41zM41 198.569h276v8.276H41z" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        d="M44 154.845h276v8.276H44zM44 174.707h276v8.276H44zM44 194.569h276v8.276H44z"
      />
      <circle cx={96.5} cy={394.345} r={3} fill="#f86b75" />
      <circle cx={105.5} cy={394.345} r={3} fill="#fad375" />
      <circle cx={114.5} cy={394.345} r={3} fill="#8bcc55" />
      <path fill={primaryColor} d="M151 440.845h206v64H151z" />
      <path fill="none" stroke="#3f3d56" strokeMiterlimit={10} d="M448.5 428.345v172h-364v-216h296M84.5 400.703H381" />
      <circle cx={97.5} cy={392.345} r={3} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={106.5} cy={392.345} r={3} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={115.5} cy={392.345} r={3} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <path fill="none" stroke="#3f3d56" strokeMiterlimit={10} d="M163.5 428.345h206v64h-206z" />
      <circle cx={392.5} cy={221.345} r={3} fill="#f86b75" />
      <circle cx={401.5} cy={221.345} r={3} fill="#fad375" />
      <circle cx={410.5} cy={221.345} r={3} fill="#8bcc55" />
      <path fill="none" stroke="#3f3d56" strokeMiterlimit={10} d="M380.5 211.345h364v216h-364zM380.5 227.703h364" />
      <circle cx={393.5} cy={219.345} r={3} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={402.5} cy={219.345} r={3} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={411.5} cy={219.345} r={3} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={441.5} cy={299.345} r={30} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={562.5} cy={299.345} r={30} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <circle cx={683.5} cy={299.345} r={30} fill="none" stroke="#3f3d56" strokeMiterlimit={10} />
      <path fill="#f2f2f2" d="M396 354.845h82v8h-82zM518 354.845h82v8h-82zM640 354.845h82v8h-82z" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        d="M400 351.845h82v8h-82zM522 351.845h82v8h-82zM644 351.845h82v8h-82z"
      />
      <path fill="#f2f2f2" d="M98 529.845h63v54H98zM214.5 530.345h63v54h-63zM331 530.845h63v54h-63z" />
      <path
        fill="none"
        stroke="#3f3d56"
        strokeMiterlimit={10}
        d="M107 519.845h63v54h-63zM223.5 520.345h63v54h-63zM340 520.845h63v54h-63z"
      />
      <path fill="#79758c" d="M600.786 204.492l-28.06 15.547 29.924-10.556-1.864-4.991z" />
      <ellipse
        cx={792.31}
        cy={315.866}
        rx={7.829}
        ry={15.772}
        transform="rotate(-17.994 349.663 840.591)"
        fill="#3f3d56"
      />
      <ellipse
        cx={816.715}
        cy={303.839}
        rx={5.906}
        ry={11.137}
        transform="rotate(-17.994 374.067 828.565)"
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M610.365 195.681l18.612-6.72 3.956 10.958-18.014 12.168-4.554-16.406z" />
      <path
        d="M608.585 235.969l5-11s12-32 1-26-15 22-15 22l-3 10zM745.585 401.969s-17 33-22 34-5-30-5-30 10-9 14-8 13 4 13 4z"
        fill="#a0616a"
      />
      <path
        d="M720.585 609.969s9 5 5 16-6 8-8 17-20 8-21 4-3-20 2-26 22-11 22-11zM631.585 609.969s-9 5-5 16 6 8 8 17 20 8 21 4 3-20-2-26-22-11-22-11z"
        fill="#55536e"
      />
      <path
        d="M715.585 409.969s8 5 10 36-1 66-2 74 1 20 3 26-5 52-5 52a23.433 23.433 0 0 1 0 20c-5 11-20 22-24 11a27.13 27.13 0 0 0-3-11c-3-6 2-30 2-30s-4-38-3-48-12-69-14-79-1-18-2-15-19 86-19 86 2 53 1 60 4 21 1 26-9 23-20 12-9-15-10-20 0-11 0-19-8-53-4-60 2-16 1-32-2-93 8-107 80 18 80 18z"
        fill="#3f3d56"
      />
      <circle cx={691.085} cy={198.469} r={24} fill="#a0616a" />
      <path d="M706.585 207.969s-1 36 4 42-43-5-43-5 11-23 4-38 35 1 35 1z" fill="#a0616a" />
      <path
        d="M715.585 245.969s-2-8-14-10-26.191-4-30.596 0-6.404 9-9.404 9h-14l-22 39s11 13 8 37-8 68-8 68a219.995 219.995 0 0 1 21 34c10 20 79 18 75-17 0 0-5-9-3-17s8-62 8-62l23-61s-32-16-34-20z"
        fill="#55536e"
      />
      <path
        d="M742.585 264.969h7s4 23 3 37-1 47-1 47 4 8 3 15-3 26-3 26-1 27-20 13c0 0-6-3-3-16s-2-27-2-27 3-9 2-15-5-25-5-25zM652.585 247.969l-5-3s-7-3-17 0-15 2-19 1-1-11-1-11-8-14-16-6-8 24-8 24-5 10 13 16 26 15 26 15h20z"
        fill="#55536e"
      />
      <path
        d="M689.458 227.116a4.636 4.636 0 0 0-2.875-4.13 13.11 13.11 0 0 0-3.417-.675c-3.405-.439-6.908-1.688-8.892-4.289-2.641-3.464-1.92-8.31-4.036-12.07a41.86 41.86 0 0 0-3.227-4.24c-3.694-4.944-4.345-11.255-4.682-17.26a7.41 7.41 0 0 1 .407-3.606 13.863 13.863 0 0 1 2.282-2.816 9.352 9.352 0 0 0 2.263-6.24c-.108-4.651 6.546-7.776 11.258-9.382s9.824-1.862 14.845-1.93c2.886-.04 5.865-.005 8.518 1.05a19.607 19.607 0 0 1 4.27 2.542c5.56 4.07 10.783 9.074 12.65 15.406a33.311 33.311 0 0 1 1.012 8.849 5.79 5.79 0 0 1-.396 2.723c-.667 1.341-2.24 2.068-3.257 3.206-1.9 2.125-1.561 5.2-1.802 7.95a18.21 18.21 0 0 1-8.944 13.772 11.406 11.406 0 0 0-2.797 1.934 12.279 12.279 0 0 0-1.543 2.693c-2 3.837-7.04 6.377-11.637 6.513z"
        fill="#3f3d56"
      />
      <path fill="#79758c" d="M192.598 10.671l-13.32 7.379 14.205-5.01-.885-2.369z" />
      <ellipse
        cx={380.038}
        cy={121.889}
        rx={3.716}
        ry={7.487}
        transform="rotate(-17.994 -62.609 646.615)"
        fill="#3f3d56"
      />
      <ellipse
        cx={391.623}
        cy={116.18}
        rx={2.804}
        ry={5.286}
        transform="rotate(-17.994 -51.025 640.906)"
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M197.145 6.488l8.835-3.189 1.878 5.201-8.551 5.776-2.162-7.788z" />
      <path fill="#79758c" d="M282.598 382.671l-13.32 7.379 14.205-5.01-.885-2.369z" />
      <ellipse
        cx={470.038}
        cy={493.889}
        rx={3.716}
        ry={7.487}
        transform="rotate(-17.994 27.391 1018.615)"
        fill="#3f3d56"
      />
      <ellipse
        cx={481.623}
        cy={488.18}
        rx={2.804}
        ry={5.286}
        transform="rotate(-17.994 38.975 1012.906)"
        fill="#3f3d56"
      />
      <path fill="#3f3d56" d="M287.145 378.488l8.835-3.189 1.878 5.201-8.551 5.776-2.162-7.788z" />
    </svg>
  );
};

UndrawBookmarks.propTypes = {
  height: PropTypes.string,
  primaryColor: PropTypes.string
};
export default UndrawBookmarks;
