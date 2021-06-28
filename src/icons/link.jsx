import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.167 17.5H1.54V5.816h3.628V17.5zM3.351 4.223c-1.16 0-2.101-.961-2.101-2.121a2.101 2.101 0 114.202 0c0 1.16-.941 2.12-2.1 2.12zM18.746 17.5h-3.62v-5.687c0-1.356-.028-3.094-1.886-3.094-1.887 0-2.176 1.473-2.176 2.996V17.5H7.44V5.816h3.48V7.41h.05c.485-.918 1.668-1.886 3.433-1.886 3.672 0 4.347 2.417 4.347 5.558V17.5h-.004z"
        fill="#fff"
      />
    </svg>
  )
}

export default SvgComponent
