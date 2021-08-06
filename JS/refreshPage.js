import { displayRecipesSelection } from './displayRecipesSelection.js';
import { STATE, addDisplayToState } from './state.js';
import { onOpenDropdown, onCloseDropdown } from './showElementsSelection.js';
import { displayDropdownLists } from './displayDropdownList.js';
import { runDropdownSort } from './sortDropdownList.js';
import { displayAllChips } from './displayChips.js';
// import { createRecipesSelection } from './recipesSelection.js';
// import { displayFilterRecipes } from './displayFilterRecipes.js';
// import { selectChip, removeChip } from './displayChips.js';
// // import { sortDropdown } from './filterDropdown.js';

// // import { recipes } from '../datas/recipes.js';

export function startPage () {
  addDisplayToState();
  displayRecipesSelection(STATE);
  onOpenDropdown();
  onCloseDropdown();
  displayDropdownLists(STATE);
  runDropdownSort();
  displayAllChips();
  // selectChip();
  // removeChip();
}
// export function refreshPage () {
//   createRecipesSelection(STATE.recipes);
//   displayFilterRecipes();
// }