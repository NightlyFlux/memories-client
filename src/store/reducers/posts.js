import {
  GET_POSTS,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
} from '../actions/actionTypes'

const getPosts = (posts, action) => {
  return action.posts
}

const createPost = (posts, action) => {
  return [...posts, action.post]
}

const updatePost = (posts, action) => {
  return posts.map((post) =>
    post._id === action.updatedPost._id ? action.updatedPost : post
  )
}

const deletePost = (posts, action) => {
  return posts.filter((post) => post._id !== action.id)
}

const likePost = (posts, action) => {
  return posts.map((post) =>
    post._id === action.likedPost._id ? action.likedPost : post
  )
}

const reducer = (posts = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return getPosts(posts, action)
    case CREATE_POST:
      return createPost(posts, action)
    case UPDATE_POST:
      return updatePost(posts, action)
    case DELETE_POST:
      return deletePost(posts, action)
    case LIKE_POST:
      return likePost(posts, action)
    default:
      return posts
  }
}

export default reducer
