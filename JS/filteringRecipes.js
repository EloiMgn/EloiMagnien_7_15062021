import { selectedElements } from './displayChips.js';
import { displayFilterRecipes } from './displayFilterRecipes.js';
import { displayErrorMessage } from './showErrorpage.js';
import { STATE } from './state.js';

export function onClicFilterRecipes (option) {
  // chercher les recette qui ont de chipList[i] dans les recettes en display true
  if (option.classList.contains('option__ingredients')) {
    for (let i = 0; i < STATE.length; i++) {
      if (STATE[i].display === true) {
        if (!STATE[i].ingredients.map(e => e.ingredient).includes(option.innerHTML)) {
          STATE[i].display = false;
        }
      }
    }
  } else if (option.classList.contains('option__appliances')) {
    for (let i = 0; i < STATE.length; i++) {
      if (STATE[i].display === true) {
        if (!STATE[i].appliance.includes(option.innerHTML)) {
          STATE[i].display = false;
        }
      }
    }
  } else if (option.classList.contains('option__ustensils')) {
    for (let i = 0; i < STATE.length; i++) {
      if (STATE[i].display === true) {
        for (let j = 0; j < STATE[i].ustensilsList.ustensils.length; j++) {
          if (STATE[i].ustensilsList.ustensils[j].includes(option.innerHTML.toLowerCase())) {
            STATE[i].ustensilsList.found = true;
            break;
          } else if (!STATE[i].ustensilsList.ustensils[j].includes(option.innerHTML.toLowerCase())) {
            STATE[i].ustensilsList.found = false;
          }
        }
        if (STATE[i].ustensilsList.found === false) {
          STATE[i].display = false;
        }
      }
    }
  }
  displayFilterRecipes(STATE);
  displayErrorMessage();
}

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
    for (let j = 0; j < selectedElements.length; j++) {
      for (let i = 0; i < STATE.length; i++) {
        if (STATE[i].display === false) {
          const includesIngredient = STATE[i].ingredients.map(e => e.ingredient).includes(selectedElements[j].querySelector('p').innerHTML);
          const includesAppliance = STATE[i].appliance.includes(selectedElements[j].querySelector('p').innerHTML);
          const includesUstensil = getUstensilPosition(STATE[i], selectedElements[j].querySelector('p'));
          if (includesIngredient || includesAppliance || includesUstensil) {
            STATE[i].display = true;
          }
        }
      }
    }
  } else if (selectedElements.length === 0) {
    for (let i = 0; i < STATE.length; i++) {
      STATE[i].display = true;
    }
  }
  displayFilterRecipes(STATE);
  displayErrorMessage();
}

export function filterRecipesByMainSearch (option) {
  // == recherche dans les recttes en display = true ===
  if (option.length >= 3) {
    for (let i = 0; i < STATE.length; i++) {
      const includesInIngredient = STATE[i].ingredients.map(e => e.ingredient.toLowerCase()).includes(option.toLowerCase());
      const includesInTitle = STATE[i].name.toLowerCase().includes(option.toLowerCase());
      const includesInDescription = STATE[i].description.toLowerCase().includes(option.toLowerCase());
      if (STATE[i].display === true) {
        if (includesInIngredient === false && includesInTitle === false && includesInDescription === false) {
          STATE[i].display = false;
        }
      }
      // === recherche dans les recettes en display = false dans le cas d'une erreur de frappe ====
      if (STATE[i].display === false) {
        if (selectedElements.length === 0) { // si aucune chip n'a déja été sélectionnée ===
          if (includesInIngredient === true || includesInTitle === true || includesInDescription === true) {
            STATE[i].display = true;
          }
        }
      }
    }
    displayFilterRecipes(STATE);
    displayErrorMessage();
    // == remise à 0 de l'affichage des recttes en focntion des chips sélectionnées ===
  } else if (option.length < 3) {
    onCloseFilterRecipes();
  }
}
