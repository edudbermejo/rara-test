import  React from 'react'
import { connect } from 'react-redux'

import {
  searchQuery
} from '../actions/searchImages'
import './SearchQueryInput.css'


let SearchQueryInput = ({dispatch}) => {
  let searchInputFinal

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(searchQuery(searchInputFinal))
  }

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input type="text" placeholder="Search" onChange={(event) => searchInputFinal = event.target.value } />
      <button type="submit">Search</button>      
    </form>
  )
}

SearchQueryInput = connect()(SearchQueryInput)

export default SearchQueryInput