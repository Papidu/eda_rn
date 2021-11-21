import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgUser(props) {
  return (
    <Svg //25 25
        // width= '25'//{props.width}
        // height= '25'//{props.height}
        viewBox= "-1 -5 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
      <Path
        d="M12.5 15.625a6.25 6.25 0 100-12.5 6.25 6.25 0 000 12.5zM3.026 21.093a10.941 10.941 0 0118.948 0"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgUser;