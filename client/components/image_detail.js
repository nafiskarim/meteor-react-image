import React, { PropTypes } from 'react'
import ImageScore from './image_score'

const ImageDetail = (props) => {
    return (
      <li className="media list-group-item">
        <div className="media-body">
          <h1 className="media-heading">{props.image.title}</h1>
          <h4>{props.image.description}</h4>
          <h4>{props.image.ups}</h4>
          <h4>{props.image.downs}</h4>
        </div>
        <div className="media-left">
          <img src={props.image.link}/>
        </div>
        <ImageScore ups={props.image.ups} downs={props.image.downs} />
      </li>
    )
}

export default ImageDetail
