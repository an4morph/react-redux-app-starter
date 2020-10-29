import {
  GET_POSTS_SUCCESS,
  GET_POSTS_LOADING,
  GET_POSTS_FAILED,
} from '../constants'
import { get } from '../api'
import apiErrorHandler from '../../services/apiErrorHandler'

export const getPostsAction = () => (dispatch) => {
  dispatch({ type: GET_POSTS_LOADING })
  get('/posts')
    .then(({ data }) => {
      dispatch({ type: GET_POSTS_SUCCESS, data })
    })
    .catch((err) => {
      dispatch({ type: GET_POSTS_FAILED, error: apiErrorHandler(err) })
    })
}
