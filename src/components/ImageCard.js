import React from 'react'

import InformationBlock from './InformationBlock.js'
import './ImageCard.css'

function ImageCard({imageDetails}) {

  return  (
    <div className="image-card">
      <img src={`https://farm${imageDetails.farm}.staticflickr.com/${imageDetails.server}/${imageDetails.id}_${imageDetails.secret}.jpg`} alt="thumbnail"></img>
      <div className="image-information">
        <InformationBlock label="Title" info={imageDetails.title} />
        <InformationBlock label="Owner name" info={imageDetails.ownerName} />
        <InformationBlock label="Date" info={imageDetails.dateTaken} />
      </div>
      <a href={imageDetails.originalUrl}><button>View large</button></a>
    </div>
  )
}


export default ImageCard