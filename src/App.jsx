import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from './store/actions/posts'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Posts from './containers/Posts/Posts'
import Form from './components/Form/Form'

import './index.css'
import useStyles from './styles'
import memories from './assets/images/memories.png'

const App = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories logo'
          height='60px'
        />
      </AppBar>
      <Grow in>
        <Grid
          className={classes.mainContainer}
          container
          justify='space-between'
          alignItems='stretch'
          spacing={4}>
          <Grid item xs={12} md={8}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  )
}

export default App
