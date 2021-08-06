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
        const position = recipe.ustensils.map(e => e.ustensils).indexOf(option.innerHTML);
        if (position < 0) {
          recipe.display = false;
        }
      }
    });
  }
  displayFilterRecipes(STATE);
};

export function onCloseFilterRecipes () {
  console.log(selectedElements.length);
  if (selectedElements.length > 0) {
    selectedElements.forEach(chip => {
      STATE.forEach(recipe => {
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
  console.log(STATE);
  displayFilterRecipes(STATE);
}
