import amber from 'material-ui/colors/amber';
import grey from 'material-ui/colors/grey';

const listItemStyles = () => ({
  card: {
    textAlign: 'left',
    maxWidth: 400,
    margin: 20,
  },
  cardTitleContainer: {
    display: 'flex',
  },
  cardTitle: {
    flexGrow: 1,
    marginBottom: 10,
    fontSize: 19,
    fontWeight: 400,
    wordBreak: 'break-all',
    paddingRight: 10,
  },
  cardDistance: {
    maxWidth: 70,
    minWidth: 45,
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
});

export default listItemStyles;
