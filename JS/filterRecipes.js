import { recipes } from '../datas/recipes.js';
import { reloadRecipeSelection } from './recipesSelection.js';
import { resetArray, removeDuplicates } from './utils.js';
import { searchResults } from './secondSearch.js';

export function filterRecipes () {
  const selectedItems = searchResults.secondSearch;
  const foundRecipes = searchResults.recipes;
  const filteredRecipes = [];
  const recipesTemps = [];
  const rejectedRecipes = [];
  const testPass = {
    ingredientsPass: false,
    appliancesPass: false,
    ustensilsPass: false,
    allTestsPass: false
  };
  if (selectedItems.length === 0) {
    recipes.forEach((recipe) => {
      foundRecipes.push(recipe);
    });
    foundRecipes.shift();
    removeDuplicates(foundRecipes, filteredRecipes);
    resetArray(foundRecipes);
    filteredRecipes.forEach(recipe => {
      foundRecipes.push(recipe);
    });
    reloadRecipeSelection(foundRecipes);
  } else if (selectedItems.length !== 0) {
    for (let i = 0; i < selectedItems.length; i++) {
      for (let j = 0; j < foundRecipes.length; j++) {
        for (let k = 0; k < foundRecipes[j].ingredients.length; k++) {
          if (foundRecipes[j].ingredients[k].ingredient === selectedItems[i].name) {
            recipesTemps.push(foundRecipes[j]);
            testPass.ingredientsPass = true;
          } else if (foundRecipes[j].ingredients[k].ingredient !== selectedItems[i].name) {
            rejectedRecipes.push(foundRecipes[j]);
          }
        }
        // ===== Tri par recherche d'appareils =====
        if (foundRecipes[j].appliance.includes(selectedItems[i].name)) {
          testPass.appliancesPass = true;
          recipesTemps.push(foundRecipes[j]);
        } // else {
        //   testPass.appliancesPass = false;
        // }
        // ===== Tri par recherche d'ustensiles =====
        for (let h = 0; h < foundRecipes[j].ustensils.length; h++) {
          if (foundRecipes[j].ustensils[h].includes(selectedItems[i].name)) {
            testPass.ustensilsPass = true;
            recipesTemps.push(foundRecipes[j]);
          }
        }
      }
    }
    const filteredRecipesTemps = [];
    const filteredRejectedRecipes = [];
    removeDuplicates(recipesTemps, filteredRecipesTemps);
    reloadRecipeSelection(filteredRecipesTemps);
    removeDuplicates(rejectedRecipes, filteredRejectedRecipes);
  }
}

// ====================== TEST =======================

// ======================      =======================
