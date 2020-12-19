import http from '../../api'
import {
  GET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from './actionTypes'

export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS,
    posts,
  }
}

export const createPostSuccess = (post) => {
  return {
    type: CREATE_POST,
    post,
  }
}

export const updatePostSuccess = (updatedPost) => {
  return {
    type: UPDATE_POST,
    updatedPost,
  }
}

export const deletePostSuccess = (id) => {
  return {
    type: DELETE_POST,
    id,
  }
}

export const likePostSuccess = (likedPost) => {
  return {
    type: LIKE_POST,
    likedPost,
  }
}

export const getPosts = () => {
  return (dispatch) => {
    const url = '/posts'
    http.get(url).then(({ data }) => {
      dispatch(getPostsSuccess(data))
    })
  }
}

export const createPost = (newPost) => {
  return (dispatch) => {
    const url = '/posts'
    http.post(url, newPost).then(({ data }) => {
      dispatch(createPostSuccess(data))
    })
  }
}

export const updatePost = (id, updatedPost) => {
  return (dispatch) => {
    const url = `/posts/${id}`
    http.patch(url, updatedPost).then(({ data }) => {
      dispatch(updatePostSuccess(data))
    })
  }
}

export const deletePost = (id) => {
  return (dispatch) => {
    const url = `/posts/${id}`
    http.delete(url).then(() => {
      dispatch(deletePostSuccess(id))
    })
  }
}

export const likePost = (id) => {
  return (dispatch) => {
    const url = `/posts/${id}/like`
    http.patch(url).then(({ data }) => {
      dispatch(likePostSuccess(data))
    })
  }
}
