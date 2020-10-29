import {
  GET_POSTS_SUCCESS,
  GET_POSTS_LOADING,
  GET_POSTS_FAILED,
} from '../constants'
import stateCreator from '../../services/stateCreator'

const initialState = {
  data: [],
  getPosts: {
    success: false,
    loading: false,
    failed: false,
    error: '',
  },
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        data: action.data,
        getPosts: stateCreator('success'),
      }
    case GET_POSTS_LOADING:
      return {
        ...state,
        getPosts: stateCreator('loading'),
      }
    case GET_POSTS_FAILED:
      return {
        ...state,
        getPosts: stateCreator('failed', action.error),
      }
    default: return state
  }
}
