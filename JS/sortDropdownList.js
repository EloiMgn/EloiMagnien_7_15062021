import { selectChip, removeChip } from './displayChips.js';
import { dropdownAppliances, dropdownIngredients, dropdownUstensils } from './displayDropdownList.js';
import { sortArray, removeDuplicates, firstLetterMaj, clearShowedList, showList } from './utils.js';

export function runDropdownSort () {
  onInputDropdown(dropdownAppliances, 'appliances');
  onInputDropdown(dropdownIngredients, 'ingredients');
  onInputDropdown(dropdownUstensils, 'ustensils');
}

function onInputDropdown (dropDowArray, listId) {
  const input = document.getElementById(`choice__${listId}`);
  input.addEventListener('input', () => {
    clearShowedList(listId);
    filterDropdown(dropDowArray, listId, input);
    selectChip();
    removeChip();
  });
}

function filterDropdown (dropDownArray, listId, myInput) {
  const elements = [];
  const filteredElements = [];
  dropDownArray.forEach(ingredient => {
    if (ingredient.toLowerCase().indexOf(`${myInput.value.toLowerCase()}`) !== -1) {
      elements.push(firstLetterMaj(ingredient));
    }
  });
  removeDuplicates(elements, filteredElements);
  sortArray(filteredElements);
  showList(filteredElements, listId);
}
