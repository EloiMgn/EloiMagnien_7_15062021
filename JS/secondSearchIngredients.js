import { recipes } from '../datas/recipes.js';
import { secondSearchResults, searchResults, selectResult } from './secondSearch.js';
import { resetArray, sortArray, removeDuplicates, showList, clearShowedList } from './utils.js';

export function runIngredientSearch () {
  const ingredientsButton = document.getElementById('choice__ingredients');
  const foundIngredients = [];
  const filteredIngredients = [];
  const foundRecipes = searchResults.recipes;
  const filteredRecipes = [];
  if (ingredientsButton.value === '') {
    for (let i = 0; i < searchResults.recipes.length; i++) {
      for (let j = 0; j < searchResults.recipes[i].ingredients.length; j++) {
        const elements = searchResults.recipes[i].ingredients[j].ingredient;
        foundIngredients.push(elements);
      }
    }
    sortArray(foundIngredients);
    removeDuplicates(foundIngredients, filteredIngredients);
    showList(filteredIngredients, 'ingredients');
    selectResult('ingredients');
  }

  ingredientsButton.addEventListener('input', () => {
    resetArray(foundRecipes);
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        const elements = recipes[i].ingredients[j].ingredient;
        if (elements.toLowerCase().indexOf(`${ingredientsButton.value.toLowerCase()}`) !== -1) {
          foundRecipes.push(recipes[i]);
        }
      }
    }
    clearShowedList('ingredients');
    removeDuplicates(foundRecipes, filteredRecipes);
    resetArray(foundIngredients);
    addFoundIngredients();
    sortArray(foundIngredients);
    showList(foundIngredients, 'ingredients');
    selectResult('ingredients');
    // launchChipsReload();
  });
}

function addFoundIngredients () {
  const ingredientsButton = document.getElementById('choice__ingredients');
  const elements = [];
  for (let i = 0; i < secondSearchResults.filteredRecipes.length; i++) {
    for (let j = 0; j < secondSearchResults.filteredRecipes[i].ingredients.length; j++) {
      const element = secondSearchResults.filteredRecipes[i].ingredients[j].ingredient;
      if (element.toLowerCase().indexOf(`${ingredientsButton.value.toLowerCase()}`) !== -1) {
        elements.push(element);
      }
    }
  }
  removeDuplicates(elements, secondSearchResults.foundIngredients);
}
