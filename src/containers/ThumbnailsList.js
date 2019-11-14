import React from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'

import ImageCard from '../components/ImageCard.js'
import {
  fetchImages
} from '../actions/searchImages'

let ThumbnailsList = ({dispatch}) => {

  let images = useSelector(state => state.images)
  
  let loadMoreButton = images.length > 0
    ? <button onClick={dispatch(fetchImages())}>Load more</button>
    : ''

  return (
    <div>
      {images.forEach(image =>
        <ImageCard imageDetails={image}/>)}
      {loadMoreButton}
    </div>
  )
}

ThumbnailsList = connect()(ThumbnailsList)

export default ThumbnailsList