import { STATE, addDisplayToState } from './state.js';
import { onOpenList, onCloseList } from './showElementsSelection.js';
import { createDropdownIngredients, createDropdownAppliances, createDropdownUstensils } from './createDropdown.js';
import { createRecipesSelection } from './recipesSelection.js';
import { displayFilterRecipes } from './displayFilterRecipes.js';
import { selectChip, removeChip } from './displayChips.js';
// import { sortDropdown } from './filterDropdown.js';

// import { recipes } from '../datas/recipes.js';

export function startPage () {
  addDisplayToState();
  onOpenList('ingredients');
  onOpenList('appliances');
  onOpenList('ustensils');

  onCloseList('ingredients');
  onCloseList('appliances');
  onCloseList('ustensils');
  createDropdownIngredients();
  createDropdownAppliances();
  createDropdownUstensils();
  selectChip();
  removeChip();
}
export function refreshPage () {
  createRecipesSelection(STATE.recipes);
  displayFilterRecipes();
}
