import { STATE } from './state.js';
import { sortArray, removeDuplicates, showList, firstLetterMaj, sortDropdown } from './utils.js';
import { displayChips } from './displayChips.js';

// == ajout de la liste d'option dans le dropdown des ingredients ===
export function createDropdownIngredients () {
  const dropdownIngredients = [];
  const dropdownIngredientsTemp = [];
  const ingredientsButton = document.getElementById('choice__ingredients');
  if (ingredientsButton.value === '') {
    for (let i = 0; i < STATE.recipes.length; i++) {
      for (let j = 0; j < STATE.recipes[i].ingredients.length; j++) {
        dropdownIngredientsTemp.push(firstLetterMaj(STATE.recipes[i].ingredients[j].ingredient));
      }
    }
    removeDuplicates(dropdownIngredientsTemp, dropdownIngredients);
    sortArray(dropdownIngredients);
    showList(dropdownIngredients, 'ingredients');
    displayChips(dropdownIngredients, 'ingredients');
  }
  sortDropdown('ingredients', dropdownIngredients, ingredientsButton);
}

// === ajout de la liste d'options de la dropdown list des appareils ===
export function createDropdownAppliances () {
  const dropdownAppliances = [];
  const dropdownAppliancesTemp = [];
  const appliancesButton = document.getElementById('choice__appliances');
  if (appliancesButton.value === '') {
    for (let i = 0; i < STATE.recipes.length; i++) {
      dropdownAppliancesTemp.push(firstLetterMaj(STATE.recipes[i].appliance));
    }
    removeDuplicates(dropdownAppliancesTemp, dropdownAppliances);
    sortArray(dropdownAppliances);
    showList(dropdownAppliances, 'appliances');
    displayChips(dropdownAppliances, 'appliances');
  }
  sortDropdown('appliances', dropdownAppliances, appliancesButton);
}

// === ajout de la liste d'options de la dropdown list des ustensils ===
export function createDropdownUstensils () {
  const dropdownUstensils = [];
  const dropdownUstensilsTemp = [];
  const ustensilsButton = document.getElementById('choice__ustensils');
  if (ustensilsButton.value === '') {
    for (let i = 0; i < STATE.recipes.length; i++) {
      for (let j = 0; j < STATE.recipes[i].ustensils.length; j++) {
        dropdownUstensilsTemp.push(firstLetterMaj(STATE.recipes[i].ustensils[j]));
      }
    }
    removeDuplicates(dropdownUstensilsTemp, dropdownUstensils);
    sortArray(dropdownUstensils);
    showList(dropdownUstensils, 'ustensils');
    displayChips(dropdownUstensils, 'ustensils');
  }
  sortDropdown('ustensils', dropdownUstensils, ustensilsButton);
}
