import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lit-headland-70957.herokuapp.com/api/',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const FOURSQUARE_VERSION = '20180101';

export function searchFoursquare(params) {
  axiosInstance.get(`/search-foursquare?v=${FOURSQUARE_VERSION}&ll=${params.latitude},${params.longitude}&radius=${params.radius || '500'}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export function searchGooglePlaces(params = { latitude: '0', longitude: '0', radius: '500' }) {
  axiosInstance.get(`/search-google-places?v=${FOURSQUARE_VERSION}&location=${params.latitude.toString()},${params.longitude.toString()}&radius=${params.radius.toString()}&language=ru`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}
