import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://lit-headland-70957.herokuapp.com/api/',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
});

const FOURSQUARE_VERSION = '20180101';

export function searchFoursquare(params) {
  axiosInstance
    .get(
      `/search-foursquare?v=${FOURSQUARE_VERSION}&ll=${params.latitude},${
        params.longitude
      }&radius=${params.radius || '500'}`,
    )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}

export function searchHui() {
  axiosInstance
    .get('/user?ID=12345')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
}
