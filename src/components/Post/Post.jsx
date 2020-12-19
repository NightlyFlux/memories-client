import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import {
  ThumbUpAlt as ThumbUpAltIcon,
  Delete as DeleteIcon,
  MoreHoriz as MoreHorizIcon,
} from '@material-ui/icons'

import useStyles from './styles'
import { deletePost, likePost } from '../../store/actions/posts'

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={
          post.selectedFile
            ? post.selectedFile
            : 'https://dlci-hoa.org/assets/admin/img/tumbnail.png'
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          size='small'
          onClick={() => setCurrentId(post._id)}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <CardContent>
        <Typography
          className={classes.tags}
          variant='body2'
          color='textSecondary'>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
        <Typography variant='h5' gutterBottom>
          {post.title}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(likePost(post._id))}>
          <ThumbUpAltIcon fontSize='small' />
          &nbsp;Like {post.likeCount}
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize='small' />
          &nbsp;Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
