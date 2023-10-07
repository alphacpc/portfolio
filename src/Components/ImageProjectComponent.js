import React from 'react'

const ImageProjectComponent = ({url_image, alt_image, width}) => {
  return (
    <div className={`${width} flex border-8 border-slate-50`}>
      <img src={url_image} alt={alt_image} className="object-fill"/>
    </div>
  )
}

export default ImageProjectComponent