import React from 'react'

const ImageProjectComponent = ({url_image, alt_image, width}) => {
  return (
    <div className={`${width} flex border-8 border-white bg-white rounded-lg`}>
      <img src={url_image} alt={alt_image} className="object-fill rounded-lg"/>
    </div>
  )
}

export default ImageProjectComponent