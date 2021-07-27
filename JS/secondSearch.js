import { runIngredientSearch } from './secondSearchIngredients.js';
import { runApplianceSearch } from './secondSearchAppliances.js';
import { runUstensilSearch } from './secondSearchUstensils.js';
import { launchChipsReload, addChipToResults, reloadChips, resetInputValue, closeList } from './utils.js';
import { filterRecipes } from './filterRecipes.js';

export const searchResults = {
  secondSearch: [],
  recipes: []
};

export const secondSearchResults = {
  foundRecipes: [],
  filteredRecipes: []
};

export function selectResult (listId) {
  const listedResults = document.querySelectorAll('.option' + '__' + `${listId}`);

  for (let i = 0; i < listedResults.length; i++) {
    listedResults[i].addEventListener('click', () => {
      if (!listedResults[i].classList.contains('selected')) {
        listedResults[i].classList.add('selected');
        addChipToResults(listedResults[i].innerHTML, listId, searchResults.secondSearch.length);
        resetInputValue(listId);
        closeList(listId);
        reloadChips();
        launchChipsReload();
        filterRecipes();
      }
    });
  }
}

export function runSecondSearch () {
  filterRecipes();
  runIngredientSearch();
  runApplianceSearch();
  runUstensilSearch();
}
