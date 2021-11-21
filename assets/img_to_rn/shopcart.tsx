import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgShopcart(props) {
  return (
    <Svg
      width= '100%'//{props.width}
      height= '100%'//{props.height}
      viewBox="-2 -5 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.813 21.538c.647 0 1.171-.508 1.171-1.134 0-.626-.524-1.134-1.171-1.134-.648 0-1.172.508-1.172 1.134 0 .626.524 1.134 1.171 1.134zM17.969 21.538c.647 0 1.172-.508 1.172-1.134 0-.626-.525-1.134-1.172-1.134-.648 0-1.172.508-1.172 1.134 0 .626.524 1.134 1.172 1.134z"
        fill={props.color}
      />
      <Path
        d="M4.13 6.802h17.522l-2.578 8.727c-.094.316-.29.594-.562.792a1.597 1.597 0 01-.94.305H8.21c-.34 0-.67-.107-.941-.305a1.511 1.511 0 01-.562-.792L3.175 3.571a.756.756 0 00-.28-.395.799.799 0 00-.47-.153H.78"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgShopcart