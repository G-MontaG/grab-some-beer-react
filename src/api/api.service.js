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

export function searchGooglePlacesRequest(params = { latitude: '0', longitude: '0', radius: '500' }) {
  return axiosInstance.get(`/search-google-places?v=${FOURSQUARE_VERSION}&location=${params.latitude.toString()},${params.longitude.toString()}&radius=${params.radius.toString()}&language=ru`);
}
