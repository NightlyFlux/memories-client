import { makeStyles } from '@material-ui/core'

export default makeStyles((theme) => ({
  credits: {
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '12px',
    margin: '0',
    padding: '4px 0',
    textAlign: 'center',
  },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]: {
    mainContainer: {
      flexDirection: 'column-reverse',
    },
  },
}))
