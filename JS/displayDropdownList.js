
// import { STATE } from './state.js';
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
  ingredientsButton.addEventListener('focus', () => {
    if (ingredientsButton.value === '') {
      datas.forEach(recipe => {
        if (recipe.display === true) {
          // console.log('gotit');
          recipe.ingredients.forEach(element => {
            dropdownIngredientsTemp.push(firstLetterMaj(element.ingredient));
          });
        }
      });
      removeDuplicates(dropdownIngredientsTemp, dropdownIngredients);
      sortArray(dropdownIngredients);
      clearShowedList('ingredients');
      showList(dropdownIngredients, 'ingredients');
      clearDropdownList(ingredientsButton, dropdownIngredientsTemp);
      clearDropdownList(ingredientsButton, dropdownIngredients);
    }
  });
};

// === ajout de la liste d'options de la dropdown list des appareils ===
function createDropdownAppliances (datas) {
  const dropdownAppliancesTemp = [];
  const appliancesButton = document.getElementById('choice__appliances');
  appliancesButton.addEventListener('focus', () => {
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
      clearDropdownList(appliancesButton, dropdownAppliancesTemp);
      clearDropdownList(appliancesButton, dropdownAppliances);
    }
  });
}

// === ajout de la liste d'options de la dropdown list des ustensils ===
function createDropdownUstensils (datas) {
  const dropdownUstensilsTemp = [];
  const ustensilsButton = document.getElementById('choice__ustensils');
  ustensilsButton.addEventListener('focus', () => {
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
      clearDropdownList(ustensilsButton, dropdownUstensilsTemp);
      clearDropdownList(ustensilsButton, dropdownUstensils);
    }
  });
}

function clearDropdownList (button, dropdownArray) {
  button.addEventListener('blur', () => {
    dropdownArray.splice(0, dropdownArray.length);
  });
}
