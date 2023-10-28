import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import refs from './js/refs';
import { createMarcup, createMarcupCatInfo } from './js/marcup';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';
const { catInfoBox, select, loader } = refs;

fetchBreeds()
  .then(createMarcup)
  .catch(error =>
    Notiflix.Notify.failure(
      `Oops! Something went wrong! Try reloading the page!`
    )
  );

select.addEventListener('change', onBreedSelect);

function onBreedSelect(event) {
  catInfoBox.innerHTML = '';
  loader.classList.remove('hiden');
  fetchCatByBreed(event.target.value)
    .then(resp => {
      if (!resp.length) {
        Notiflix.Notify.failure(
          `Oops! Something went wrong! Try reloading the page!`
        );
        return;
      }
      return createMarcupCatInfo(resp[0]);
    })
    .catch(error =>
      Notiflix.Notify.failure(
        `Oops! Something went wrong! Try reloading the page!`
      )
    )
    .finally(() => loader.classList.add('hiden'));
}
