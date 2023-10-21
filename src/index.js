// import SlimSelect from 'slim-select';
// import ‘slim - select / dist / slimselect.css’;

// new SlimSelect({
//   select: '#selectElement',
// });

import fetchBreeds from './cat-api';
import fetchCatByBreed from './cat-api';

const select = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const box = document.querySelector('.cat-info');

select.addEventListener('click', onClick);
function onClick() {
  console.log(box);
}
