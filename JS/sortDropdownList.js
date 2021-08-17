import { selectChip, removeChip, selectedElements, onKeyPressSelectChip } from './displayChips.js';
import { dropdownAppliances, dropdownIngredients, dropdownUstensils } from './displayDropdownList.js';
// import { STATE } from './state.js';
import { sortArray, removeDuplicates, firstLetterMaj, clearShowedList, showList, selectFirstOption } from './utils.js';

export function runDropdownSort () {
  // updateDropdownIngredient(STATE);
  onInputDropdown(dropdownAppliances, 'appliances');
  onInputDropdown(dropdownIngredients, 'ingredients');
  onInputDropdown(dropdownUstensils, 'ustensils');
}

function onInputDropdown (dropDownArray, listId) {
  const input = document.getElementById(`choice__${listId}`);
  input.addEventListener('input', () => {
    clearShowedList(listId);
    filterDropdown(dropDownArray, listId, input, selectedElements);
    selectChip();
    removeChip();
    input.addEventListener('keypress', event => {
      const firstOption = document.querySelector(`.option__${listId}`);
      if (event.key === 'Enter') {
        onKeyPressSelectChip(firstOption);
      }
    });
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
        const condition2 = option.toLowerCase().indexOf(`${myInput.value.toLowerCase()}`) !== -1;
        if (condition1 && condition2) {
          elements.push(firstLetterMaj(option));
        } else if (option.toLowerCase() === chip.querySelector('p').innerHTML.toLowerCase()) {
          elements.splice(option.indexOf(option), 1);
        }
      });
    } else {
      if (option.toLowerCase().indexOf(`${myInput.value.toLowerCase()}`) !== -1) {
        elements.push(firstLetterMaj(option));
      }
    }
  });
  removeDuplicates(elements, filteredElements);
  sortArray(filteredElements);
  showList(filteredElements, listId);
}

// export function updateDropdownIngredient (datas) {
//   const dropdownIngredientsTemp = [];
//   const ingredientsButton = document.getElementById('choice__ingredients');
//   if (ingredientsButton.value !== '') {
//     datas.forEach(recipe => {
//       if (recipe.display === true) {
//         for (let i = 0; i < recipe.ingredients.length; i++) {
//           dropdownIngredientsTemp.push(firstLetterMaj(recipe.ingredients[i].ingredient));
//         }
//       }
//     });
//     removeDuplicates(dropdownIngredientsTemp, dropdownIngredients);
//     sortArray(dropdownIngredients);
//     clearShowedList('ingredients');
//     showList(dropdownIngredients, 'ingredients');
//   };
// }
