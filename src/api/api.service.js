import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lit-headland-70957.herokuapp.com/api/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const FOURSQUARE_VERSION = '20180101';

export function searchFoursquareRequest(params) {
  return axiosInstance.get(`/search-foursquare?v=${FOURSQUARE_VERSION}&ll=${params.latitude},${params.longitude}&radius=${params.radius || '500'}`);
}

export function searchGooglePlacesRequest(params) {
  return axiosInstance.get(`/search-google-places?v=${FOURSQUARE_VERSION}&location=${params.latitude},${params.longitude}&radius=${params.radius || '500'}&language=ru`);
}
