import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function AddDish(props) {
  return (
    <Svg
      // width={25}
      // height={25}
      viewBox='0 0 25 25'
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle cx={12.5} cy={12.5} r={12.5} fill="#05960B" />
      <Path stroke="#fff" d="M5.952 12.595h13.096" />
      <Path stroke="#fff" strokeLinejoin="round" d="M12.405 5.952v13.096" />
    </Svg>
  )
}

export default AddDish
