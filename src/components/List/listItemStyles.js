import amber from 'material-ui/colors/amber';
import grey from 'material-ui/colors/grey';

const listItemStyles = () => ({
  card: {
    textAlign: 'left',
    maxWidth: 400,
    margin: 10,
    position: 'relative',
  },
  cardOnMap: {
    textAlign: 'left',
    maxWidth: 400,
    position: 'relative',
    margin: 10,
  },
  cardTitleContainer: {
    display: 'flex',
  },
  cardTitle: {
    flexGrow: 1,
    marginBottom: 10,
    fontSize: 19,
    fontWeight: 400,
    wordBreak: 'break-word',
    paddingRight: 10,
  },
  cardDistance: {
    maxWidth: 70,
    minWidth: 60,
  },
  cardDistanceIcon: {
    verticalAlign: 'middle',
    height: 19,
    width: 19,
    color: grey[500],
  },
  cardDistanceText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: 14,
    fontWeight: 400,
    marginLeft: 2,
    color: grey[600],
  },
  cardRatingContainer: {
    display: 'flex',
  },
  cardRating: {
    minWidth: 105,
    marginRight: 5,
  },
  cardStarIcon: {
    height: 16,
    width: 16,
    verticalAlign: 'middle',
    color: amber[500],
  },
  cardStarText: {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontWeight: 400,
    marginLeft: 5,
  },
  cardCategories: {
    textAlign: 'right',
    flexGrow: 1,
  },
  cardAbout: {
    margin: [[10, 0, 10, 0]],
    fontWeight: 300,
  },
  cardDivider: {
    margin: [[10, 0, 10, 0]],
  },
  cardAddress: {},
  cardContacts: {
    marginTop: 10,
  },
  cardButton: {
    color: grey[700],
  },
  cardMedia: {
    height: 200,
  },
  cardSourceType: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    top: 0,
    background: '#fff',
    padding: 3,
    minHeight: 31,
    boxShadow: '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
  },
  cardSourceTypeFoursquare: {
    height: 25,
    width: 150,
  },
  cardSourceTypeGoogle: {
    height: 18,
    width: 144,
  },
  cardSourceTypeFacebook: {
    height: 30,
    width: 30,
  },
  cardSourceTypeButton: {
    background: '#fff',
    '&:hover': {
      background: '#fff',
    },
    padding: 3,
    margin: [[-3, 0]],
    minWidth: 35,
    minHeight: 30,
  },
  cardCloseButton: {
    position: 'absolute',
    top: '-40px',
    left: 0,
    minWidth: 40,
  },
});

export default listItemStyles;
