import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgArrowLeft(props) {
    return (
        <Svg xmlns="http://www.w3.org/2000/svg" 
            width={100} 
            height={50}
            viewBox= "9 0 30 40"
            fill={'black'}
            {...props}>
          <Path d="M0 12l9-8v6h15v4H9v6z" />
        </Svg>
      )
}

export default SvgArrowLeft;
