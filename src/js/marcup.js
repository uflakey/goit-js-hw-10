import refs from './refs';
const { catInfoBox, select } = refs;
export function createMarcup(breedData) {
  const marcup = breedData
    .map(breed => `<option value="${breed.id}">${breed.name} </option>`)
    .join('');
  select.insertAdjacentHTML('beforeend', marcup);
}
export function createMarcupCatInfo(catInfo) {
  const catData = catInfo.breeds[0];
  const marcup = `<img src="${catInfo.url}" alt="${catData.name}" width="200">
<h2${catData.name}</h2>
<p>${catData.description}</p>
<p>${catData.temperament}</p>`;

  catInfoBox.insertAdjacentHTML('beforeend', marcup);
}
