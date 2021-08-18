// import { STATE } from './state.js';

import { filterRecipesByMainSearch } from './filteringRecipes.js';
import { resetInputValue } from './utils.js';

export function onInputMainSearch () {
  const mainSearch = document.getElementById('main__search');
  mainSearch.addEventListener('input', () => {
    filterRecipesByMainSearch(mainSearch.value);
  });
  // === reste de l'input au clic en dehors de l'input ===
  mainSearch.addEventListener('blur', () => { resetInputValue(); });
  // === reset de l'input à la frappe sur la touche entrée ===
  mainSearch.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      resetInputValue();
    }
  });
}
