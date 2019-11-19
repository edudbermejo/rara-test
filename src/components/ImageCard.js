import React from 'react'

import InformationBlock from './InformationBlock.js'
import './ImageCard.css'

function ImageCard({imageDetails}) {

  return  (
    <div className="image-card">
      <img src={`https://farm${imageDetails.farm}.staticflickr.com/${imageDetails.server}/${imageDetails.id}_${imageDetails.secret}.jpg`} alt="thumbnail" />
      <div className="image-textual-container">
        <div className="image-information">
          <InformationBlock label="Title" info={imageDetails.title} />
          <InformationBlock label="Owner name" info={imageDetails.ownerName} />
          <InformationBlock label="Date" info={imageDetails.dateTaken} />
        </div>
        <a className="large-image-anchor" href={imageDetails.originalUrl}><button>View large image</button></a>
      </div>
    </div>
  )
}


export default ImageCard