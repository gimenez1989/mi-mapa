import { makeStyles } from '@material-ui/styles'


export default makeStyles((theme) => ({
  mapContainer: {
    height: '10%',
    minHeight: '100vh',
    margin: 0,
    maxWidth: '100%',
    padding: 0,
    lineHeight: 0
  },
  button: {
    backgroundColor: '#008CBA',
    fontSize: '10px',
    position: 'relative; z-index:1',
    padding: '0',
    float: 'right',
    display: 'flex',
    top: '550px',
    margin: '25px'
  }
}))
