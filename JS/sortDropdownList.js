import { selectChip, removeChip, selectedElements } from './displayChips.js';
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
    filterDropdown(dropDowArray, listId, input, selectedElements);
    selectChip();
    removeChip();
  });
}

function filterDropdown (dropDownArray, listId, myInput, chips) {
  const elements = [];
  const filteredElements = [];
  dropDownArray.forEach(ingredient => {
    // === ↓↓ Si un élément est déjà sélectionné il n'apparait plus dans la liste des options ↓↓ ===
    if (chips.length > 0) {
      chips.forEach(chip => {
        const condition1 = ingredient.toLowerCase() !== chip.querySelector('p').innerHTML.toLowerCase();
        const condition2 = ingredient.toLowerCase().indexOf(`${myInput.value.toLowerCase()}`) !== -1;
        if (condition1 && condition2) {
          elements.push(firstLetterMaj(ingredient));
        } else if (ingredient.toLowerCase() === chip.querySelector('p').innerHTML.toLowerCase()) {
          elements.splice(ingredient.indexOf(ingredient), 1);
        }
      });
    } else {
      if (ingredient.toLowerCase().indexOf(`${myInput.value.toLowerCase()}`) !== -1) {
        elements.push(firstLetterMaj(ingredient));
      }
    }
  });
  removeDuplicates(elements, filteredElements);
  sortArray(filteredElements);
  showList(filteredElements, listId);
}
