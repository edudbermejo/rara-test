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
    ? <button className="button-more" onClick={() => dispatch(fetchImages())}>Load more</button>
    : undefined

  const imagesHtml = images.length > 0
  ? <ul className="images-list">{images.map(image => <li key={image.id}><ImageCard imageDetails={image} /></li>)}</ul>
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