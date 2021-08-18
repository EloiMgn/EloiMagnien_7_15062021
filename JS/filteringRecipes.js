import { selectedElements } from './displayChips.js';
import { displayFilterRecipes } from './displayFilterRecipes.js';
import { displayErrorMessage } from './showErrorpage.js';
import { STATE } from './state.js';

export function onClicFilterRecipes (option) {
  // chercher les recette qui ont de chipList[i] dans les recettes en display true
  if (option.classList.contains('option__ingredients')) {
    STATE.forEach(recipe => {
      if (recipe.display === true) {
        if (!recipe.ingredients.map(e => e.ingredient).includes(option.innerHTML)) {
          recipe.display = false;
        }
      }
    });
  } else if (option.classList.contains('option__appliances')) {
    STATE.forEach(recipe => {
      if (recipe.display === true) {
        if (!recipe.appliance.includes(option.innerHTML)) {
          recipe.display = false;
        }
      }
    });
  } else if (option.classList.contains('option__ustensils')) {
    STATE.forEach(recipe => {
      if (recipe.display === true) {
        for (let i = 0; i < recipe.ustensilsList.ustensils.length; i++) {
          if (recipe.ustensilsList.ustensils[i].includes(option.innerHTML.toLowerCase())) {
            recipe.ustensilsList.found = true;
            break;
          } else if (!recipe.ustensilsList.ustensils[i].includes(option.innerHTML.toLowerCase())) {
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
  displayErrorMessage();
};

function getUstensilPosition (recipe, option) {
  for (let i = 0; i < recipe.ustensilsList.ustensils.length; i++) {
    if (recipe.ustensilsList.ustensils[i].includes(option.innerHTML.toLowerCase())) {
      recipe.ustensilsList.found = true;
      break;
    } else if (!recipe.ustensilsList.ustensils[i].includes(option.innerHTML.toLowerCase())) {
      recipe.ustensilsList.found = false;
    }
  }
  if (recipe.ustensilsList.found === false) {
    recipe.display = false;
    return false;
  } else {
    return true;
  }
}

export function onCloseFilterRecipes () {
  if (selectedElements.length > 0) {
    selectedElements.forEach(chip => {
      STATE.forEach(recipe => {
        if (recipe.display === false) {
          const includesIngredient = recipe.ingredients.map(e => e.ingredient).includes(chip.querySelector('p').innerHTML);
          const includesAppliance = recipe.appliance.includes(chip.querySelector('p').innerHTML);
          const includesUstensil = getUstensilPosition(recipe, chip.querySelector('p'));
          if (includesIngredient || includesAppliance || includesUstensil) {
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
  displayErrorMessage();
}

export function filterRecipesByMainSearch (option) {
  // == recherche dans les recttes en display = true ===
  if (option.length >= 3) {
    STATE.forEach(recipe => {
      const includesInIngredient = recipe.ingredients.map(e => e.ingredient.toLowerCase()).includes(option.toLowerCase());
      const includesInTitle = recipe.name.toLowerCase().includes(option.toLowerCase());
      const includesInDescription = recipe.description.toLowerCase().includes(option.toLowerCase());
      if (recipe.display === true) {
        if (includesInIngredient === false && includesInTitle === false && includesInDescription === false) {
          recipe.display = false;
        }
      }
      // === recherche dans les recettes en display = false dans le cas d'une erreur de frappe ====
      if (recipe.display === false) {
        if (selectedElements.length === 0) { // si aucune chip n'a déja été sélectionnée ===
          if (includesInIngredient === true || includesInTitle === true || includesInDescription === true) {
            recipe.display = true;
          }
        }
      }
    });
    displayFilterRecipes(STATE);
    displayErrorMessage();
    // == remise à 0 de l'affichage des recttes en focntion des chips sélectionnées ===
  } else if (option.length < 3) {
    onCloseFilterRecipes();
  }
}
