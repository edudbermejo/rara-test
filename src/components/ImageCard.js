import React from 'react'
import InformationBlock from './InformationBlock.js'

function ImageCard({imageDetails}) {
  
  return  (
    <div>
      <img src={`https://farm${imageDetails.farm}.staticflickr.com/${imageDetails.server}/${imageDetails.id}_${imageDetails.secret}.jpg`} alt="thumbnail"></img>
      <InformationBlock label="Title" info={imageDetails.title} />
      <InformationBlock label="Owner name" info={imageDetails.ownerName} />
      <InformationBlock label="Date" info={imageDetails.dateTaken} />
      <a href={imageDetails.originalUrl}><button>View large</button></a>
    </div>
  )
}

export default ImageCard