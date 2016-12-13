// our image list component
import React from 'react'
import ImageDetail from './image_detail'

const IMAGES = [
  { title: 'Pen', link: 'https://dummyimage.com/600x400'},
  { title: 'tree', link: 'https://dummyimage.com/600x400'},
  { title: 'book', link: 'https://dummyimage.com/600x400'}
];

var ImageList = () => {
  const RenderedImages = IMAGES.map(function (img) {
    return <ImageDetail image={img} />
  });

  return (
      <div>
        <ul className="media-list list-group">
          { RenderedImages }
        </ul>
      </div>
    )
  }

export default ImageList
