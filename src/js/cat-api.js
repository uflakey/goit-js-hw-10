import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_MZDGaLKnSKgLejbGPt65KGPysAd1fongewuJTLPtyrW6kxT9KWZVLcByatwOYRCq';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get('/breeds').then(resp => {
    return resp.data;
  });
}

export function fetchCatByBreed(breedId) {
  return axios.get(`/images/search?breed_ids=${breedId}`).then(resp => {
    return resp.data;
  });
}
