import * as React from 'react';

import useStyles from './Logo.styles';

export interface ILogo2Props {
  loading?: boolean;
  animationDuration?: number;
  handleClick?: () => void | Promise<void>;
}

const Logo: React.FC<ILogo2Props> = ({ loading = false, animationDuration = 0.5 }) => {
  const classes = useStyles({ loading, animationDuration });

  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="140.046"
        height="26.098"
        viewBox="0 0 140.046 26.098"
      >
        <g id="yummm" transform="translate(-140 -93.402)">
          <g id="_1" data-name="1" className={classes.m2p1}>
            <circle
              id="Ellipse_81"
              data-name="Ellipse 81"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(140 94.013)"
            />
          </g>
          <g id="_2" data-name="2" className={classes.m2p2}>
            <circle
              id="Ellipse_79"
              data-name="Ellipse 79"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(149.148 109.904)"
            />
            <circle
              id="Ellipse_80"
              data-name="Ellipse 80"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(149.148 99.295)"
            />
          </g>
          <g id="_3" data-name="3" className={classes.m2p3}>
            <circle
              id="Ellipse_85"
              data-name="Ellipse 85"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(158.564 93.872)"
            />
          </g>
          <g id="_4" data-name="4" className={classes.m2p4}>
            <circle
              id="Ellipse_83"
              data-name="Ellipse 83"
              cx="4.403"
              cy="4.403"
              r="4.403"
              transform="translate(169.119 104.435)"
            />
            <circle
              id="Ellipse_85-2"
              data-name="Ellipse 85"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(169.119 93.872)"
            />
          </g>
          <g id="_5" data-name="5" className={classes.m2p5}>
            <circle
              id="Ellipse_82"
              data-name="Ellipse 82"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(178.267 109.717)"
            />
          </g>
          <g id="_6" data-name="6" className={classes.m2p6}>
            <circle
              id="Ellipse_84"
              data-name="Ellipse 84"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(187.416 93.872)"
            />
            <circle
              id="Ellipse_87"
              data-name="Ellipse 87"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(187.503 104.435)"
            />
          </g>
          <g id="_7" data-name="7" className={classes.m2p7}>
            <circle
              id="Ellipse_84-2"
              data-name="Ellipse 84"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(197.967 99.153)"
            />
            <circle
              id="Ellipse_87-2"
              data-name="Ellipse 87"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(198.054 109.716)"
            />
          </g>
          <g id="_8" data-name="8" className={classes.m2p8}>
            <path
              id="Path_137"
              data-name="Path 137"
              d="M1544.45,492.787a4.4,4.4,0,1,1,3.64,5.05,4.4,4.4,0,0,1-3.64-5.05Z"
              transform="translate(-1337.191 -395.688)"
            />
          </g>
          <g id="_9" data-name="9" className={classes.m2p9}>
            <ellipse
              id="Ellipse_88"
              data-name="Ellipse 88"
              cx="4.395"
              cy="4.406"
              rx="4.395"
              ry="4.406"
              transform="matrix(0.258, -0.966, 0.966, 0.258, 215.354, 117.226)"
            />
            <path
              id="Path_130"
              data-name="Path 130"
              d="M1571.876,502.852a4.4,4.4,0,1,1-5.505,1.475A4.4,4.4,0,0,1,1571.876,502.852Z"
              transform="translate(-1349.246 -403.275)"
            />
          </g>
          <g id="_10" data-name="10" className={classes.m2p10}>
            <path
              id="Path_129"
              data-name="Path 129"
              d="M1595.591,493.134a4.4,4.4,0,0,1-4.032,4.744,4.356,4.356,0,0,1-.712,0,4.4,4.4,0,0,1,0-8.775,4.368,4.368,0,0,1,.712,0A4.418,4.418,0,0,1,1595.591,493.134Z"
              transform="translate(-1361.31 -395.687)"
            />
          </g>
          <g id="_11" data-name="11" className={classes.m2p11}>
            <ellipse
              id="Ellipse_89"
              data-name="Ellipse 89"
              cx="4.395"
              cy="4.406"
              rx="4.395"
              ry="4.406"
              transform="matrix(0.258, -0.966, 0.966, 0.258, 233.653, 117.226)"
            />
            <path
              id="Path_132"
              data-name="Path 132"
              d="M1614.3,502.852a4.4,4.4,0,1,1-5.863,2.092,4.47,4.47,0,0,1,.356-.617A4.418,4.418,0,0,1,1614.3,502.852Z"
              transform="translate(-1373.375 -403.275)"
            />
          </g>
          <g id="_12" data-name="12" className={classes.m2p12}>
            <path
              id="Path_131"
              data-name="Path 131"
              d="M1638.02,493.134a4.4,4.4,0,1,1-4.03-4.03A4.4,4.4,0,0,1,1638.02,493.134Z"
              transform="translate(-1385.439 -395.687)"
            />
          </g>
          <g id="_13" data-name="13" className={classes.m2p13}>
            <ellipse
              id="Ellipse_90"
              data-name="Ellipse 90"
              cx="4.395"
              cy="4.406"
              rx="4.395"
              ry="4.406"
              transform="matrix(0.258, -0.966, 0.966, 0.258, 251.955, 117.226)"
             />
            <path
              id="Path_135"
              data-name="Path 135"
              d="M1656.74,502.852a4.4,4.4,0,1,1-5.505,1.475A4.4,4.4,0,0,1,1656.74,502.852Z"
              transform="translate(-1397.508 -403.275)"
            />
          </g>
          <g id="_14" data-name="14" className={classes.m2p14}>
            <path
              id="Path_133"
              data-name="Path 133"
              d="M1680.456,493.134a4.4,4.4,0,0,1-4.032,4.744,4.356,4.356,0,0,1-.712,0,4.4,4.4,0,0,1,0-8.775,4.368,4.368,0,0,1,.712,0A4.418,4.418,0,0,1,1680.456,493.134Z"
              transform="translate(-1409.573 -395.687)"
            />
          </g>
          <g id="_15" data-name="15" className={classes.m2p15}>
            <path
              id="Path_134"
              data-name="Path 134"
              d="M1694.782,503.2a4.4,4.4,0,0,1,6.125,1.119,4.482,4.482,0,0,1,.356.617,4.4,4.4,0,1,1-6.481-1.736Z"
              transform="translate(-1421.641 -403.27)"
            />
            <path
              id="Path_136"
              data-name="Path 136"
              d="M1699.163,527.345a4.4,4.4,0,1,1-5.505,1.475A4.4,4.4,0,0,1,1699.163,527.345Z"
              transform="translate(-1421.635 -417.205)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
