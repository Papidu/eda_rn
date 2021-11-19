import * as React from "react"
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg"
function Banner(props) {
  return (
    <Svg
      width={331}
      height={160}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <Rect width={331} height={160} rx={15} fill="url(#prefix__pattern0)" />
      <Defs>
        <Pattern
          id="prefix__pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use
            xlinkHref="#prefix__image0"
            transform="matrix(.0007 0 0 .00144 0 -.303)"
          />
        </Pattern>
        <Image
          id="prefix__image0"
          width={1440}
          height={1440}
        />
      </Defs>
    </Svg>
  )
}
export default Banner