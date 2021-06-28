import * as React from "react"
import styled, { keyframes } from "styled-components"



function Star(props) {

  const double = (n) => {

    return !(n % 2) ? -n : n;
  }

  const doubleA = (n) => {

    return !(n % 2) ? -n + 15 : n - 15;
  }

  const animation = keyframes`
    0% {left:${doubleA(props.left)}%; top:${props.top - 10}%; transform:rotate(360deg); opacity:0.5}
    50% {left:${doubleA(props.left)}%; top:${props.top - 5}%; transform:rotate(360deg); opacity:0.6}
    100% {left:props.left}%; top:${props.top}%; transform:rotate(0deg); opacity:1}
  `;
  const Svg = styled.svg`
    left :${double(props.left)}%;
    top :${props.top}%;
    animation:${animation} 15s infinite linear;
    animation-delay: ${props.delay / 100}s;
  `;
  return (
    <Svg
      width={46}
      height={48}
      viewBox="0 0 46 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23 0l2.003 23.013 20.822-5.047-19.584 9.175 10.866 19.893L23 29.692 8.893 47.034 19.76 27.141.175 17.966l20.822 5.047L23 0z"
        fill="#334789"
      />
    </Svg>
  )
}

export default Star