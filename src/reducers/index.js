import { 
  SET_SEARCH_QUERY,
  FETCH_IMAGES,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_ERROR
} from '../actions/actionsTypes'

const initialState = {
  searchQuery: '',
  isFetching: false,
  page: 1,
  pageSize: 10,
  images: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY: 
      return {
        ...state, 
        searchQuery: action.payload,
        page: 1,
        images: []
      };
    case FETCH_IMAGES:
      return {
        ...state, 
        isFetching: true,
        error: null
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state, 
        isFetching: false,
        page: state.page + 1,
        images: [ ...state.images, ...action.payload]
      };
    case FETCH_IMAGES_ERROR:
      return {
        ...state, 
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};


export default rootReducer