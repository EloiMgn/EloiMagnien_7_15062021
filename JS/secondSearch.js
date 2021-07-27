import { showStartIngredientsList, runIngredientSearch } from './runIngredientSearch.js';
import { showStartAppliancesList, runAppliancesSearch } from './runAppliancesSearch.js';
import { runUstensilSearch } from './runUstensilsSearch.js';
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
  showStartIngredientsList();
  runIngredientSearch();
  runAppliancesSearch();
  showStartAppliancesList();
  // runUstensilSearch();
}
