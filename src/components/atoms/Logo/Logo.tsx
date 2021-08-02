import * as React from 'react';

import useStyles from './Logo.styles';
import cx from 'clsx';

export interface ILogoProps {
  loading?: boolean;
  animationDuration?: number;
  handleClick?: () => void | Promise<void>;
}

const Logo: React.FC<ILogoProps> = ({ loading = false, animationDuration = 0.5 }) => {
  const classes = useStyles({ loading, animationDuration });

  return (
    <div className={classes.root}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="141.046"
        height="26.098"
        viewBox="0 0 141.046 26.098"
      >
        <g
          id="Group_467"
          data-name="Group 467"
          transform="translate(-140 -93.402)"
        >
          <g
            id="Group_456"
            data-name="Group 456"
            transform="translate(140 93.872)"
            className={classes.y}
          >
            <circle
              id="Ellipse_79"
              data-name="Ellipse 79"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(9.148 16.032)"
            />
            <circle
              id="Ellipse_80"
              data-name="Ellipse 80"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(9.148 5.423)"
            />
            <circle
              id="Ellipse_81"
              data-name="Ellipse 81"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(0 0.141)"
            />
            <circle
              id="Ellipse_85"
              data-name="Ellipse 85"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(18.564 0)"
            />
          </g>
          <g
            id="Group_457"
            data-name="Group 457"
            transform="translate(0 55)"
            className={classes.u}
          >
            <circle
              id="Ellipse_82"
              data-name="Ellipse 82"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(179.267 54.717)"
            />
            <circle
              id="Ellipse_83"
              data-name="Ellipse 83"
              cx="4.403"
              cy="4.403"
              r="4.403"
              transform="translate(170.119 49.435)"
            />
            <circle
              id="Ellipse_84"
              data-name="Ellipse 84"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(188.416 38.872)"
            />
            <circle
              id="Ellipse_85-2"
              data-name="Ellipse 85"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(170.119 38.872)"
            />
            <circle
              id="Ellipse_87"
              data-name="Ellipse 87"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(188.503 49.435)"
            />
          </g>
          <g id="Group_458" data-name="Group 458" className={classes.m1p1}>
            <circle
              id="Ellipse_84-2"
              data-name="Ellipse 84"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(198.967 99.153)"
            />
            <path
              id="Path_137"
              data-name="Path 137"
              d="M1544.45,492.787a4.4,4.4,0,1,1,3.64,5.05,4.4,4.4,0,0,1-3.64-5.05Z"
              transform="translate(-1336.191 -395.688)"
            />
            <circle
              id="Ellipse_87-2"
              data-name="Ellipse 87"
              cx="4.401"
              cy="4.401"
              r="4.401"
              transform="translate(199.054 109.716)"
            />
          </g>
          <g id="Group_459" data-name="Group 459" className={classes.m1p1}>
            <path
              id="Path_129"
              data-name="Path 129"
              d="M1595.591,493.134a4.4,4.4,0,0,1-4.032,4.744,4.356,4.356,0,0,1-.712,0,4.4,4.4,0,0,1,0-8.775,4.368,4.368,0,0,1,.712,0A4.418,4.418,0,0,1,1595.591,493.134Z"
              transform="translate(-1360.31 -395.687)"
            />
            <ellipse
              id="Ellipse_88"
              data-name="Ellipse 88"
              cx="4.395"
              cy="4.406"
              rx="4.395"
              ry="4.406"
              transform="matrix(0.258, -0.966, 0.966, 0.258, 216.354, 117.226)"
            />
            <path
              id="Path_130"
              data-name="Path 130"
              d="M1571.876,502.852a4.4,4.4,0,1,1-5.505,1.475A4.4,4.4,0,0,1,1571.876,502.852Z"
              transform="translate(-1348.246 -403.275)"
            />
          </g>
          <g id="Group_460" data-name="Group 460" className={classes.m1p1}>
            <ellipse
              id="Ellipse_89"
              data-name="Ellipse 89"
              cx="4.395"
              cy="4.406"
              rx="4.395"
              ry="4.406"
              transform="matrix(0.258, -0.966, 0.966, 0.258, 234.653, 117.226)"
            />
            <path
              id="Path_132"
              data-name="Path 132"
              d="M1614.3,502.852a4.4,4.4,0,1,1-5.863,2.092,4.47,4.47,0,0,1,.356-.617A4.418,4.418,0,0,1,1614.3,502.852Z"
              transform="translate(-1372.375 -403.275)"
            />
          </g>
          <g id="Group_463" data-name="Group 463" className={classes.m1p2}>
            <path
              id="Path_131"
              data-name="Path 131"
              d="M1638.02,493.134a4.4,4.4,0,1,1-4.03-4.03A4.4,4.4,0,0,1,1638.02,493.134Z"
              transform="translate(-1384.439 -395.687)"
            />
          </g>
          <g id="Group_464" data-name="Group 464" className={classes.m1p2}>
            <ellipse
              id="Ellipse_90"
              data-name="Ellipse 90"
              cx="4.395"
              cy="4.406"
              rx="4.395"
              ry="4.406"
              transform="matrix(0.258, -0.966, 0.966, 0.258, 252.955, 117.226)"
            />
            <path
              id="Path_135"
              data-name="Path 135"
              d="M1656.74,502.852a4.4,4.4,0,1,1-5.505,1.475A4.4,4.4,0,0,1,1656.74,502.852Z"
              transform="translate(-1396.508 -403.275)"
            />
          </g>
          <g id="Group_465" data-name="Group 465" className={classes.m1p3}>
            <path
              id="Path_133"
              data-name="Path 133"
              d="M1680.456,493.134a4.4,4.4,0,0,1-4.032,4.744,4.356,4.356,0,0,1-.712,0,4.4,4.4,0,0,1,0-8.775,4.368,4.368,0,0,1,.712,0A4.418,4.418,0,0,1,1680.456,493.134Z"
              transform="translate(-1408.573 -395.687)"
            />
          </g>
          <g id="Group_466" data-name="Group 466" className={classes.m1p3}>
            <path
              id="Path_134"
              data-name="Path 134"
              d="M1694.782,503.2a4.4,4.4,0,0,1,6.125,1.119,4.482,4.482,0,0,1,.356.617,4.4,4.4,0,1,1-6.481-1.736Z"
              transform="translate(-1420.641 -403.27)"
            />
            <path
              id="Path_136"
              data-name="Path 136"
              d="M1699.163,527.345a4.4,4.4,0,1,1-5.505,1.475A4.4,4.4,0,0,1,1699.163,527.345Z"
              transform="translate(-1420.635 -417.205)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Logo;
