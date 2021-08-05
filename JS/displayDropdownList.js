
import { sortArray, removeDuplicates, firstLetterMaj, clearShowedList, showList } from './utils.js';
// import { displayChips } from './displayChips.js';
export const dropdownIngredients = [];
export const dropdownAppliances = [];
export const dropdownUstensils = [];

export function displayDropdownLists (datas) {
  createDropdownIngredients(datas);
  createDropdownAppliances(datas);
  createDropdownUstensils(datas);
}

// == ajout de la liste d'option dans le dropdown des ingredients ===
function createDropdownIngredients (datas) {
  const dropdownIngredientsTemp = [];
  const ingredientsButton = document.getElementById('choice__ingredients');
  if (ingredientsButton.value === '') {
    for (let i = 0; i < datas.length; i++) {
      for (let j = 0; j < datas[i].ingredients.length; j++) {
        dropdownIngredientsTemp.push(firstLetterMaj(datas[i].ingredients[j].ingredient));
      }
    }
    removeDuplicates(dropdownIngredientsTemp, dropdownIngredients);
    sortArray(dropdownIngredients);
    clearShowedList('ingredients');
    showList(dropdownIngredients, 'ingredients');
  }
};

// === ajout de la liste d'options de la dropdown list des appareils ===
function createDropdownAppliances (datas) {
  const dropdownAppliancesTemp = [];
  const appliancesButton = document.getElementById('choice__appliances');
  if (appliancesButton.value === '') {
    for (let i = 0; i < datas.length; i++) {
      dropdownAppliancesTemp.push(firstLetterMaj(datas[i].appliance));
    }
    removeDuplicates(dropdownAppliancesTemp, dropdownAppliances);
    sortArray(dropdownAppliances);
    clearShowedList('appliances');
    showList(dropdownAppliances, 'appliances');
  }
}

// === ajout de la liste d'options de la dropdown list des ustensils ===
function createDropdownUstensils (datas) {
  const dropdownUstensilsTemp = [];
  const ustensilsButton = document.getElementById('choice__ustensils');
  if (ustensilsButton.value === '') {
    for (let i = 0; i < datas.length; i++) {
      for (let j = 0; j < datas[i].ustensils.length; j++) {
        dropdownUstensilsTemp.push(firstLetterMaj(datas[i].ustensils[j]));
      }
    }
    removeDuplicates(dropdownUstensilsTemp, dropdownUstensils);
    sortArray(dropdownUstensils);
    clearShowedList('ustensils');

    showList(dropdownUstensils, 'ustensils');
  }
}
