import React, { PropTypes } from 'react'

const ImageDetail = (props) => {
    return (
      <div>
        <h1>{props.image.title}</h1>
        <img src={props.image.link} />

      </div>
    )
}

export default ImageDetail
