import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SVGForkknife(props) {//w26 h22 
  return (
    <Svg
      // width={26}
      // height={22}
      viewBox= "-1 -6 30 30"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={26}
        height={22}
        fill="none"
        viewBox="0 0 26 22"
        {...props}
      >
        <Path
          stroke={props.color}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.302 2.75v3.438m0 3.78v9.282m2.767-16.5l.79 4.125c0 .82-.375 1.607-1.042 2.188-.667.58-1.572.906-2.516.906-.943 0-1.848-.326-2.515-.906-.668-.58-1.042-1.367-1.042-2.188l.79-4.125m14.627 11h-5.535s1.186-9.625 5.535-11v16.5"
          fill="#fff"
          className="prefix__color000 prefix__svgShape prefix__colorStroke05960B prefix__svgStroke"
        />
      </Svg>
    </Svg>
  )
}
  
export default SVGForkknife;