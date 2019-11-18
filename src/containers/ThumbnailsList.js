import React from 'react'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'

import ImageCard from '../components/ImageCard.js'
import {
  fetchImages
} from '../actions/searchImages'
import './ThumbnailsList.css'

let ThumbnailsList = ({dispatch}) => {

  const images = useSelector(state => state.images)
  
  const loadMoreButton = images.length > 0
    ? <button onClick={() => dispatch(fetchImages())}>Load more</button>
    : undefined

  const imagesHtml = images.length > 0
  ? <ul>{images.map(image => <li><ImageCard key={image.id} imageDetails={image} /></li>)}</ul>
  : undefined

  return (
    <div>
      {imagesHtml}
      {loadMoreButton}
    </div>
  )
}

ThumbnailsList = connect()(ThumbnailsList)

export default ThumbnailsList