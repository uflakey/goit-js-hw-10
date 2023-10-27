import { fetchBreeds, fetchCatByBreed } from './js/cat-api';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

fetchBreeds().then(resp => console.log(resp));
fetchCatByBreed().then(resp => console.log(resp));
