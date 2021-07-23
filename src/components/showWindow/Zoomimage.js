import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Zoomimage = (props) => (
  <Zoom>
    <img
      alt="image"
      src={`/img/${props.image}`}
      width={props.size}
    />
  </Zoom>
)

export default Zoomimage;