// import { STATE } from './state.js';

import { filterRecipesByMainSearch } from './filterRecipes.js';
import { resetInputValue } from './utils.js';

export function onInputMainSearch () {
  const mainSearch = document.getElementById('main__search');
  mainSearch.addEventListener('input', () => {
    filterRecipesByMainSearch(mainSearch.value);
  });
  mainSearch.addEventListener('blur', () => { resetInputValue(); });
}
