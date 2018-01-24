import {
  SEARCH_END,
  SEARCH_ERROR,
  SEARCH_FACEBOOK_PLACES_SUCCEEDED,
  SEARCH_FOURSQUARE_SUCCEEDED,
  SEARCH_GOOGLE_PLACES_SUCCEEDED, SEARCH_START,
} from '../actions/api.actions';

function mapFoursquareResultsToList(item) {
  const { id, name, location, categories, url, contact } = item;
  return {
    id,
    name,
    location: {
      lat: location.lat,
      lng: location.lng,
      distance: location.distance,
      address: Object.values(location.formattedAddress).join(', '),
    },
    categories: (() => categories.map(category => category.name))(),
    url,
    contact,
    cover: null,
    about: null,
    rating: null,
  };
}

function mapGooglePlacesResultsToList(item) {
  const { id, name, geometry, vicinity, types, photos, description, rating } = item;
  return {
    id,
    name,
    location: {
      lat: geometry.location.lat,
      lng: geometry.location.lng,
      distance: null,
      address: vicinity,
    },
    categories: (() => types.map((type) => {
      const newType = type.replace(/_/gi, ' ');
      return newType.charAt(0).toUpperCase() + newType.slice(1);
    }))(),
    url: null,
    contact: {},
    cover: photos[0],
    about: description,
    rating,
  };
}

function mapFacebookPlacesResultsToList(item) {
  const { id, name, location, single_line_address, category_list, website, link, phone, photos, about, overall_star_rating } = item;
  return {
    id,
    name,
    location: {
      lat: location.latitude,
      lng: location.longitude,
      distance: null,
      address: single_line_address,
    },
    categories: (() => category_list.map(category => category.name))(),
    url: website || link,
    contact: {
      phone,
      facebook: link,
    },
    cover: photos ? photos.data[0] : null,
    about,
    rating: overall_star_rating,
  };
}

export default function apiReducers(state = { isLoading: false }, action) {
  switch (action.type) {
    case SEARCH_START:
      return Object.assign({}, state, {
        isLoading: true,
      });
    case SEARCH_END:
      return Object.assign({}, state, {
        isLoading: false,
      });
    case SEARCH_ERROR:
      return Object.assign({}, state, {
        isLoading: false,
      });
    case SEARCH_FOURSQUARE_SUCCEEDED:
      return Object.assign({}, state, {
        foursquareSearchResults: action.payload.response.venues.map(mapFoursquareResultsToList),
      });
    case SEARCH_GOOGLE_PLACES_SUCCEEDED:
      return Object.assign({}, state, {
        googleSearchResults: action.payload.results.map(mapGooglePlacesResultsToList),
      });
    case SEARCH_FACEBOOK_PLACES_SUCCEEDED:
      return Object.assign({}, state, {
        facebookSearchResults: action.payload.data.map(mapFacebookPlacesResultsToList),
      });
    default:
      return state;
  }
}
