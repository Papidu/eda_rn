import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BasketSVG(props) {
  return (
    <Svg
      width={12}
      height={12}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7.682.057a.412.412 0 00-.178.402.418.418 0 00.05.147L9.462 4H2.537L4.447.606A.423.423 0 004.49.303a.399.399 0 00-.171-.246.355.355 0 00-.284-.045.378.378 0 00-.231.182L1.663 4H.75a.727.727 0 00-.53.234A.828.828 0 000 4.8v.8c0 .212.079.416.22.566.14.15.331.234.53.234V10c0 .53.198 1.04.55 1.414.35.375.828.586 1.325.586h6.75c.497 0 .974-.21 1.326-.586A2.07 2.07 0 0011.25 10V6.4c.199 0 .39-.084.53-.234.141-.15.22-.354.22-.566v-.8a.828.828 0 00-.22-.566.727.727 0 00-.53-.234h-.913L8.197.194A.392.392 0 008.1.08a.365.365 0 00-.278-.075.36.36 0 00-.138.053zM10.5 6.4V10c0 .318-.118.623-.33.848a1.09 1.09 0 01-.795.352h-6.75a1.09 1.09 0 01-.796-.351A1.242 1.242 0 011.5 10V6.4h9zm.75-1.6v.8H.75v-.8h10.5zM9 7.2c-.1 0-.195.042-.265.117a.414.414 0 00-.11.283V10c0 .106.04.208.11.283.07.075.166.117.265.117.1 0 .195-.042.265-.117a.414.414 0 00.11-.283V7.6a.414.414 0 00-.11-.283A.363.363 0 009 7.2zm-1.5 0c-.1 0-.195.042-.265.117a.414.414 0 00-.11.283V10c0 .106.04.208.11.283.07.075.166.117.265.117.1 0 .195-.042.265-.117a.414.414 0 00.11-.283V7.6a.414.414 0 00-.11-.283A.363.363 0 007.5 7.2zM6 7.2c-.1 0-.195.042-.265.117a.414.414 0 00-.11.283V10c0 .106.04.208.11.283.07.075.166.117.265.117.1 0 .195-.042.265-.117a.414.414 0 00.11-.283V7.6a.414.414 0 00-.11-.283A.363.363 0 006 7.2zm-1.5 0c-.1 0-.195.042-.265.117a.414.414 0 00-.11.283V10c0 .106.04.208.11.283.07.075.166.117.265.117.1 0 .195-.042.265-.117a.414.414 0 00.11-.283V7.6a.414.414 0 00-.11-.283A.364.364 0 004.5 7.2zM3 7.2c-.1 0-.195.042-.265.117a.414.414 0 00-.11.283V10c0 .106.04.208.11.283.07.075.166.117.265.117.1 0 .195-.042.265-.117a.414.414 0 00.11-.283V7.6a.414.414 0 00-.11-.283A.364.364 0 003 7.2z"
        fill="#05960B"
      />
    </Svg>
  )
}

export default BasketSVG