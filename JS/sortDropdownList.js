import { selectChip, removeChip, selectedElements } from './displayChips.js';
import { dropdownAppliances, dropdownIngredients, dropdownUstensils } from './displayDropdownList.js';
// import { STATE } from './state.js';
import { sortArray, removeDuplicates, firstLetterMaj, clearShowedList, showList, selectFirstOption } from './utils.js';

export function runDropdownSort () {
  // updateDropdownIngredient(STATE);
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
    selectFirstOption(input, listId);
  });
}

function filterDropdown (dropDownArray, listId, myInput, chips) {
  const elements = [];
  const filteredElements = [];
  dropDownArray.forEach(option => {
    // === ↓↓ Si un élément est déjà sélectionné il n'apparait plus dans la liste des options ↓↓ ===
    if (chips.length > 0) {
      chips.forEach(chip => {
        const condition1 = option.toLowerCase() !== chip.querySelector('p').innerHTML.toLowerCase();
        const condition2 = option.toLowerCase().includes(`${myInput.value.toLowerCase()}`);
        if (condition1 && condition2) {
          elements.push(firstLetterMaj(option));
        } else if (option.toLowerCase() === chip.querySelector('p').innerHTML.toLowerCase()) {
          elements.splice(option.indexOf(option), 1);
        }
      });
    } else {
      if (option.toLowerCase().includes(`${myInput.value.toLowerCase()}`)) {
        elements.push(firstLetterMaj(option));
      }
    }
  });
  removeDuplicates(elements, filteredElements);
  sortArray(filteredElements);
  showList(filteredElements, listId);
}
