// our image list component
import React from 'react'
import ImageDetail from './image_detail'

var ImageList = (props) => {
  const validImages = props.images.filter( (img) => {
    return !img.is_album

  })

  const RenderedImages = validImages.map( (img) => {
    return (
      <ImageDetail key={img.title} image={img} />
    )
  })

  return (
      <div>
        <ul className="media-list list-group">
          { RenderedImages }
        </ul>
      </div>
    )
  }

export default ImageList
