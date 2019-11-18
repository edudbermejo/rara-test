import React from 'react'
import styled from 'styled-components'
import InformationBlock from './InformationBlock.js'

function ImageCardPreStyle({imageDetails}) {

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

const ImageCard = styled(ImageCardPreStyle)``


export default ImageCard