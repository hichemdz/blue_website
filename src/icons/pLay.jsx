import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={29}
      height={29}
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          d="M14.452 1.353C6.984 1.353.934 7.403.934 14.87s6.05 13.518 13.518 13.518c7.467 0 13.517-6.05 13.517-13.518 0-7.467-6.05-13.517-13.517-13.517zm6.306 14.825l-9.593 5.505c-.861.48-1.946-.136-1.946-1.144V9.202c0-1.003 1.08-1.625 1.946-1.145l9.593 5.832c.894.502.894 1.793 0 2.29z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="translate(.498 .917)"
            d="M0 0h27.907v27.907H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
