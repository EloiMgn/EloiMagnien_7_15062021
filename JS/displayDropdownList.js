
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
    datas.forEach(recipe => {
      if (recipe.display === true) {
        for (let i = 0; i < recipe.ingredients.length; i++) {
          dropdownIngredientsTemp.push(firstLetterMaj(recipe.ingredients[i].ingredient));
        }
      }
    });
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
    datas.forEach(recipe => {
      if (recipe.display === true) {
        dropdownAppliancesTemp.push(firstLetterMaj(recipe.appliance));
      }
    });
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
    datas.forEach(recipe => {
      if (recipe.display === true) {
        recipe.ustensilsList.ustensils.forEach(ustensil => {
          dropdownUstensilsTemp.push(firstLetterMaj(ustensil));
        });
      }
    });
    removeDuplicates(dropdownUstensilsTemp, dropdownUstensils);
    sortArray(dropdownUstensils);
    clearShowedList('ustensils');
    showList(dropdownUstensils, 'ustensils');
  }
}
