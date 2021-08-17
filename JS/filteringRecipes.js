import { selectedElements } from './displayChips.js';
import { displayFilterRecipes } from './displayFilterRecipes.js';
import { displayErrorMessage } from './showErrorpage.js';
import { STATE } from './state.js';

// === VERSION 2 : Suppression de la méthode indexOf() et utilisation de la méthode includes() ====

export function onClicFilterRecipes (option) {
  // chercher les recettes qui ont de chipList[i] dans les recettes en display true
  STATE.forEach(recipe => {
    if (option.classList.contains('option__ingredients')) {
      if (recipe.display === true) {
        if (!recipe.ingredients.map(e => e.ingredient).includes(option.innerHTML)) {
          recipe.display = false;
        }
      }
    } else if (option.classList.contains('option__appliances')) {
      if (recipe.display === true) {
        if (!recipe.appliance.includes(option.innerHTML)) {
          recipe.display = false;
        }
      }
    } else if (option.classList.contains('option__ustensils')) {
      if (recipe.display === true) {
        for (const i of recipe.ustensilsList.ustensils) { // === UTILISATION DU forOf A LA PLACE DU for ===
          if (i.includes(option.innerHTML.toLowerCase())) {
            recipe.ustensilsList.found = true;
            break;
          } else if (!i.includes(option.innerHTML.toLowerCase())) {
            recipe.ustensilsList.found = false;
          }
        }
        if (recipe.ustensilsList.found === false) {
          recipe.display = false;
        }
      }
    }
  });
  displayFilterRecipes(STATE);
  displayErrorMessage();
};

function getUstensilPosition (recipe, option) {
  for (const i of recipe.ustensilsList.ustensils) {
    if (i.includes(option.toLowerCase())) {
      recipe.ustensilsList.found = true;

      break;
    } else if (!i.includes(option.toLowerCase())) {
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
      const chipText = chip.querySelector('p').innerHTML;
      STATE.forEach(recipe => {
        if (recipe.display === false) {
          const condition1 = recipe.ingredients.map(e => e.ingredient).includes(chipText);
          const condition2 = recipe.appliance.includes(chipText);
          const condition3 = getUstensilPosition(recipe, chipText);
          if (condition1 || condition2 || condition3) {
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
      const includeInIngredient = recipe.ingredients.map(e => e.ingredient.toLowerCase()).includes(option.toLowerCase());
      const includeInTitle = recipe.name.toLowerCase().includes(option.toLowerCase());
      const includeInDescription = recipe.description.toLowerCase().includes(option.toLowerCase());
      if (recipe.display === true) {
        if (!includeInIngredient && !includeInTitle && !includeInDescription) {
          recipe.display = false;
        }
      }
      // === recherche dans les recettes en display = false dans le cas d'une erreur de frappe ====
      if (recipe.display === false) {
        if (selectedElements.length === 0) { // si aucune chip n'a déja été sélectionnée ===
          if (includeInIngredient || includeInTitle || includeInDescription) {
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
