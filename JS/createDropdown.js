import { STATE } from './state.js';
import { sortArray, removeDuplicates, showList, firstLetterMaj } from './utils.js';
import { displayChips } from './displayChips.js';

// == ajout de la liste d'option dans le dropdown des ingredients ===
export function createDropdownIngredients () {
  const ingredientsButton = document.getElementById('choice__ingredients');
  const dropdownList = [];
  const dropdownListTemp = [];
  if (ingredientsButton.value === '') {
    for (let i = 0; i < STATE.length; i++) {
      for (let j = 0; j < STATE[i].ingredients.length; j++) {
        dropdownListTemp.push(firstLetterMaj(STATE[i].ingredients[j].ingredient));
      }
    }
  }
  removeDuplicates(dropdownListTemp, dropdownList);
  sortArray(dropdownList);
  showList(dropdownList, 'ingredients');
  displayChips(dropdownList, 'ingredients');
}

// === ajout de la liste d'options de la dropdown list des appareils ===
export function createDropdownAppliances () {
  const dropdownAppliances = [];
  const dropdownAppliancesTemp = [];
  const appliancesButton = document.getElementById('choice__appliances');
  if (appliancesButton.value === '') {
    for (let i = 0; i < STATE.length; i++) {
      dropdownAppliancesTemp.push(firstLetterMaj(STATE[i].appliance));
    }
  }
  removeDuplicates(dropdownAppliancesTemp, dropdownAppliances);
  sortArray(dropdownAppliances);
  showList(dropdownAppliances, 'appliances');
  displayChips(dropdownAppliances, 'appliances');
}

// === ajout de la liste d'options de la dropdown list des ustensils ===
export function createDropdownUstensils () {
  const dropdownUstensils = [];
  const dropdownUstensilsTemp = [];
  const ustensilsButton = document.getElementById('choice__ustensils');
  if (ustensilsButton.value === '') {
    for (let i = 0; i < STATE.length; i++) {
      for (let j = 0; j < STATE[i].ustensils.length; j++) {
        dropdownUstensilsTemp.push(firstLetterMaj(STATE[i].ustensils[j]));
      }
    }
  }
  removeDuplicates(dropdownUstensilsTemp, dropdownUstensils);
  sortArray(dropdownUstensils);
  showList(dropdownUstensils, 'ustensils');
  displayChips(dropdownUstensils, 'ustensils');
}
