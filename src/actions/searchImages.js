import { 
  SET_SEARCH_QUERY,
  FETCH_IMAGES,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from './actionsTypes'

console.log(process.env)
const API_KEY = process.env.REACT_APP_API_KEY

const setSearchQueryCreator = (searchQuery) => {
  return {
    type: SET_SEARCH_QUERY,
    payload: searchQuery
  }
}

export const searchQuery = (searchQuery) => {
  return async (dispatch, getState) => {
    dispatch(setSearchQueryCreator(searchQuery))
    dispatch(fetchImages())
  }
}

const fetchImagesCreator = () => {
  return {
    type: FETCH_IMAGES
  }
}

export const fetchImages = () => {
  return async (dispatch, getState) => {
    dispatch(fetchImagesCreator())

    const { searchQuery, page } = getState()
      
    if (searchQuery) {
      try {
        let tags = (' ' + searchQuery).slice(1)
        tags = tags.replace(' ',',')
        fetch(`https://www.flickr.com/services/rest?method=flickr.photos.search&api_key=${API_KEY}&tags=${tags}&per_page=10&page=${page}&format=json&nojsoncallback=1&extras=owner_name,date_taken,url_m,url_o`)
          .then(response => response.json())
          .then(json => json.photos.photo)
          .then(images => {
            return images.map(elem => {
              return {
                title: elem.title,
                ownerName: elem.ownername,
                dateTaken: elem.dateTaken,
                farm: elem.farm,
                server: elem.server,
                id: elem.id,
                secret: elem.secret,
                originalUrl: elem.url_o
              }
            })
          })
          .then(imagesNormalized => dispatch(fetchImagesSuccess(imagesNormalized)))
      } catch (error) {
        dispatch(fetchImagesError(error))
      }
    }
  }
}

export const fetchImagesSuccess = (images) => {
  return {
    type: FETCH_IMAGES_SUCCESS,
    payload: images
  }
}

export const fetchImagesError = (error) => {
  return {
    type: FETCH_IMAGES_ERROR,
    payload: error
  }
}