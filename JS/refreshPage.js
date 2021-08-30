import { displayRecipesSelection } from './displayRecipesSelection.js';
import { STATE, addDisplayToState } from './state.js';
import { onOpenDropdown, onCloseDropdown } from './showElementsSelection.js';
import { displayDropdownLists } from './displayDropdownList.js';
import { runDropdownSort } from './sortDropdownList.js';
import { createDropdownElements, displayAllChips, runChipsSelection } from './displayChips.js';
import { onInputMainSearch } from './runMainSearch.js';
import { responsiveSearch } from './responsive.js';

export function refreshPage () {
  addDisplayToState();
  createDropdownElements();
  displayRecipesSelection(STATE);
  onOpenDropdown();
  onCloseDropdown();
  displayDropdownLists(STATE);
  displayAllChips();
  runChipsSelection();
  runDropdownSort();
  onInputMainSearch();
  responsiveSearch('ingredients');
  responsiveSearch('appliances');
  responsiveSearch('ustensils');
}
