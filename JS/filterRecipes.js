import { selectedElements } from './displayChips.js';
import { displayFilterRecipes } from './displayFilterRecipes.js';
import { STATE } from './state.js';

export function onClicFilterRecipes (option) {
  // chercher les recette qui ont de chipList[i] dans les recette en display true
  if (option.classList.contains('option__ingredients')) {
    STATE.forEach(recipe => {
      if (recipe.display === true) {
        const position = recipe.ingredients.map(e => e.ingredient).indexOf(option.innerHTML);
        if (position < 0) {
          recipe.display = false;
        }
      }
    });
  } else if (option.classList.contains('option__appliances')) {
    STATE.forEach(recipe => {
      if (recipe.display === true) {
        const position = recipe.appliance.indexOf(option.innerHTML);
        if (position < 0) {
          recipe.display = false;
        }
      }
    });
  } else if (option.classList.contains('option__ustensils')) {
    STATE.forEach(recipe => {
      if (recipe.display === true) {
        for (let i = 0; i < recipe.ustensilsList.ustensils.length; i++) {
          const positionUstensil = recipe.ustensilsList.ustensils[i].indexOf(option.innerHTML.toLowerCase());
          if (positionUstensil >= 0) {
            recipe.ustensilsList.found = true;
            break;
          } else if (positionUstensil < 0) {
            recipe.ustensilsList.found = false;
          }
        }
        if (recipe.ustensilsList.found === false) {
          recipe.display = false;
        }
      }
    });
  }
  displayFilterRecipes(STATE);
  console.log(STATE);
};

export function onCloseFilterRecipes () {
  if (selectedElements.length > 0) {
    selectedElements.forEach(chip => {
      STATE.forEach(recipe => {
        // const positionUstensil = recipe.ustensils.toString
        if (recipe.display === false) {
          const positionIngredient = recipe.ingredients.map(e => e.ingredient).indexOf(chip.querySelector('p').innerHTML);
          const positionAppliance = recipe.appliance.indexOf(chip.querySelector('p').innerHTML);
          if (positionIngredient !== -1 || positionAppliance !== -1) {
            recipe.display = true;
          }
        }
      });
    });
  } else if (selectedElements.length === 0) {
    STATE.forEach(recipe => {
      recipe.display = true;
    });
  }
  displayFilterRecipes(STATE);
}

export function filterRecipesByMainSearch (option) {
  if (option.length >= 3) {
    STATE.forEach(recipe => {
      if (recipe.display === true) {
        const positionIngredient = recipe.ingredients.map(e => e.ingredient.toLowerCase()).indexOf(option.toLowerCase());
        console.log(option);
        const positionAppliance = recipe.appliance.toLowerCase().indexOf(option.toLowerCase());
        if (positionIngredient < 0 && positionAppliance < 0) {
          recipe.display = false;
        }
      }
    });
    displayFilterRecipes(STATE);
  } else if (option.length < 3) {
    onCloseFilterRecipes();
  }
}
