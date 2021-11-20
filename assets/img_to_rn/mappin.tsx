import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MappinSVG(props) {
  return (
    <Svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 13.281a3.125 3.125 0 100-6.25 3.125 3.125 0 000 6.25z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.313 10.156c0 7.031-7.813 12.5-7.813 12.5s-7.813-5.468-7.813-12.5a7.812 7.812 0 0115.625 0v0z"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default MappinSVG;
