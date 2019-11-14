import React from 'react'
import InformationLabel from './InformationBlock.js'

function ImageCard({imageDetails}) {
  return  (
    <div>
      <img src="https://farm{imageDetails.farm}.staticflickr.com/{imageDetails.server}/{imageDetails.id}_{imageDetails.secret}.jpg" alt="thumbnail"></img>
      <InformationLabel label="Title" info="{imageDetails.title}" />
      <InformationLabel label="Owner name" info="{imageDetails.ownerName}" />
      <InformationLabel label="Date" info="{imageDetails.dateTaken}" />
      <a href={imageDetails.originalUrl}><button>View large</button></a>
    </div>
  )
}

export default ImageCard