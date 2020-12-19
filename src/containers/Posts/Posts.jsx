import { CircularProgress, Grid } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../../components/Post/Post'

import useStyles from './styles'

const Posts = ({ setCurrentId }) => {
  const classes = useStyles()
  const posts = useSelector((state) => state.posts)

  let postItems = null
  if (!posts.length) {
    postItems = <CircularProgress className={classes.spinner} />
  } else {
    postItems = posts.map((post) => (
      <Grid key={post._id} item xs={12} sm={6}>
        <Post post={post} setCurrentId={setCurrentId} />
      </Grid>
    ))
  }

  return (
    <Grid
      container
      className={classes.mainContainer}
      alignItems='center'
      spacing={3}>
      {postItems}
    </Grid>
  )
}

export default Posts
