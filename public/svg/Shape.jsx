import * as React from "react";
const SVGComponent = (props) => (
  <svg
    width={499}
    height={690}
    viewBox="0 0 499 690"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#filter0_d_1_17)">
      <defs>
  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#FDCA09" />
    <stop offset="100%" stopColor="#FFC107" />
  </linearGradient>
</defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M423.633 305.386C419.3 300.316 418.921 292.749 423.223 287.651C495.867 201.556 516.596 99.4273 466.986 41.3737C408.143 -27.4835 272.627 -8.26067 164.303 84.309C55.9793 176.879 15.8668 307.741 74.7095 376.598C79.043 381.669 79.4213 389.236 75.1197 394.334C2.4756 480.429 -18.2535 582.557 31.3569 640.611C90.1997 709.468 225.715 690.245 334.039 597.676C442.363 505.106 482.476 374.244 423.633 305.386Z"
        fill="#FEBC0A"
        stroke="#000000"         // Siyah çerçeve
  strokeWidth="1"          // 4 px kalınlık (istersen büyüt)
  strokeLinejoin="round"
        fillOpacity={0.7}
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_17"
        x={0.244446}
        y={0.0754395}
        width={497.854}
        height={689.834}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_17"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_17"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SVGComponent;
