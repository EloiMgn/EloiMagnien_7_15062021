import { recipes } from '../datas/recipes.js';
import { secondSearchResults, removeDuplicates, resetArray, sortArray, clearShowedList, showList, selectResult, deleteSelectedResult } from './secondSearch.js';

export function runIngredientSearch () {
  const ingredientsButton = document.getElementById('choice__ingredients');
  const foundIngredients = secondSearchResults.foundIngredients;
  const filteredIngredients = secondSearchResults.filteredIngredients;
  const foundRecipes = secondSearchResults.foundRecipes;
  const filteredRecipes = secondSearchResults.filteredRecipes;

  if (ingredientsButton.value === '') {
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        const elements = recipes[i].ingredients[j].ingredient;
        foundIngredients.push(elements);
      }
    }
    sortArray(foundIngredients);
    removeDuplicates(foundIngredients, filteredIngredients);
    showList(filteredIngredients, 'ingredients');
    selectResult('ingredients');
    deleteSelectedResult();
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
    deleteSelectedResult();
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
