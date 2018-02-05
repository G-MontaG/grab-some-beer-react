export function mapFoursquareResultsToList(item) {
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
    sourceType: 'foursquare',
  };
}

export function mapGooglePlacesResultsToList(item) {
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
    cover: photos && photos[0] ? photos[0] : null,
    about: description,
    rating,
    sourceType: 'google',
  };
}

export function mapFacebookPlacesResultsToList(item) {
  const { id, name, location, single_line_address, category_list, website, link, phone, cover, about, overall_star_rating } = item;
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
    cover,
    about,
    rating: overall_star_rating,
    sourceType: 'facebook',
  };
}
