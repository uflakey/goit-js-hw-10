import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

console.log(fetchBreeds);
console.log(fetchCatByBreed);
console.log(respons.data);
