import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Forkknife(props) {
  return (
    <Svg
      width={26}
      height={22}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.302 2.75v3.438M8.302 9.969v9.281M11.069 2.75l.79 4.125c0 .82-.375 1.607-1.042 2.188-.667.58-1.572.906-2.516.906-.943 0-1.848-.326-2.515-.906-.668-.58-1.042-1.367-1.042-2.188l.79-4.125M20.16 13.75h-5.534s1.186-9.625 5.535-11v16.5"
        stroke="#05960B"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Forkknife;