import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lit-headland-70957.herokuapp.com/api/',
  timeout: 10000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const FOURSQUARE_VERSION = '20180101';

export function searchFoursquareRequest(params) {
  return axiosInstance.get(`/search-foursquare?v=${FOURSQUARE_VERSION}&ll=${params.latitude},${params.longitude}&radius=${params.radius || '500'}`);
}

export function searchGooglePlacesRequest(params) {
  return axiosInstance.get(`/search-google-places?location=${params.latitude},${params.longitude}&radius=${params.radius || '500'}&language=ru`);
}

export function searchFacebookPlacesRequest(params) {
  return axiosInstance.get(`/search-facebook-places?center=${params.latitude},${params.longitude}&distance=${params.radius || '500'}`);
}
