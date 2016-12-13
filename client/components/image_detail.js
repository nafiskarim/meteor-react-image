import React, { PropTypes } from 'react'

const ImageDetail = (props) => {
    return (
      <li className="media list-group-item">
        <div className="media-body">
          <h1 className="media-heading">{props.image.title}</h1>
        </div>
        <div className="media-left">
          <img src={props.image.link}/>
        </div>
      </li>
    )
}

export default ImageDetail
