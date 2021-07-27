import { searchResults, selectResult } from './secondSearch.js';
import { sortArray, removeDuplicates, showList, clearShowedList, filterDropdown } from './utils.js';

const dropdownIngredients = [];
const dropdownIngredientsTemp = [];
const ingredientsButton = document.getElementById('choice__ingredients');

export function showStartIngredientsList () {
  if (ingredientsButton.value === '') {
    for (let i = 0; i < searchResults.recipes.length; i++) {
      for (let j = 0; j < searchResults.recipes[i].ingredients.length; j++) {
        dropdownIngredientsTemp.push(searchResults.recipes[i].ingredients[j].ingredient);
      }
    }
  }
  removeDuplicates(dropdownIngredientsTemp, dropdownIngredients);
  sortArray(dropdownIngredients);
  showList(dropdownIngredients, 'ingredients');
  selectResult('ingredients');
}

export function runIngredientSearch () {
  ingredientsButton.addEventListener('input', () => {
    clearShowedList('ingredients');
    filterDropdown(dropdownIngredients, 'ingredients', ingredientsButton);
    selectResult('ingredients');
  });
}
