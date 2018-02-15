import beer from '../assets/images/pexels-photo-681847.jpg';

const styles = () => ({
  root: {
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '100vh',
    backgroundImage: `url(${beer})`,
    backgroundSize: 'cover',
    backgroundPositionX: 'left',
    backgroundPositionY: '65%',
    margin: [[0, -8]],
    '& > div': {
      width: '100%',
    },
  },
  title: {
    fontFamily: 'Holtwood One SC, serif',
    fontSize: 80,
    color: '#fff',
    lineHeight: '1.15',
    '@media (min-width: 1920px)': {
      fontSize: 200,
    },
    '@media (min-width: 1366px) and (max-width: 1919px)': {
      fontSize: 150,
    },
    '@media (min-width: 1025px) and (max-width: 1365px)': {
      fontSize: 130,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize: 100,
    },
  },
  titleContainer: {
    '@media (min-width: 1025px)': {
      paddingRight: 50,
      float: 'right',
      textAlign: 'right',
    },
  },
  button: {
    marginTop: 20,
    minHeight: 40,
    '@media (min-width: 1920px)': {
      fontSize: 25,
      minHeight: 51,
    },
    '@media (min-width: 1366px) and (max-width: 1919px)': {
      fontSize: 23,
      minHeight: 49,
    },
    '@media (min-width: 1025px) and (max-width: 1365px)': {
      fontSize: 19,
      minHeight: 45,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      fontSize: 18,
      minHeight: 43,
    },
  },
  buttonProgress: {
    color: '#fff',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});

export default styles;
