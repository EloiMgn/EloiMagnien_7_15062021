import { selectedElements } from './displayChips.js';
import { displayFilterRecipes } from './displayFilterRecipes.js';
import { displayErrorMessage } from './showErrorpage.js';
import { STATE } from './state.js';

export function onClicFilterRecipes (option) {
  // chercher les recette qui ont de chipList[i] dans les recettes en display true
  if (option.classList.contains('option__ingredients')) {
    for (const recipe of STATE) {
      if (recipe.display === true) {
        const position = recipe.ingredients.map(e => e.ingredient).indexOf(option.innerHTML);
        if (position < 0) {
          recipe.display = false;
        }
      }
    }
  } else if (option.classList.contains('option__appliances')) {
    for (const recipe of STATE) {
      if (recipe.display === true) {
        const position = recipe.appliance.indexOf(option.innerHTML);
        if (position < 0) {
          recipe.display = false;
        }
      }
    }
  } else if (option.classList.contains('option__ustensils')) { // indexOf à la place du contains
    for (const recipe of STATE) {
      if (recipe.display === true) { // transformer les if en switch
        for (let i = 0; i < recipe.ustensilsList.ustensils.length; i++) { // changer les for en for of ou forEach
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
    }
  }
  displayFilterRecipes(STATE);
  displayErrorMessage();
}

function getUstensilPosition (recipe, option) {
  for (const i of recipe.ustensilsList.ustensils) { // changer les for en for of ou forEach
    const positionUstensil = i.indexOf(option.innerHTML.toLowerCase());
    if (positionUstensil >= 0) {
      recipe.ustensilsList.found = true;
      break;
    } else if (positionUstensil < 0) {
      recipe.ustensilsList.found = false;
    }
  }
  if (recipe.ustensilsList.found === false) {
    recipe.display = false;
    return -1;
  } else {
    return 1;
  }
}

export function onCloseFilterRecipes () {
  if (selectedElements.length > 0) {
    for (const chip of selectedElements) {
      for (const recipe of STATE) {
        if (recipe.display === false) {
          const positionIngredient = recipe.ingredients.map(e => e.ingredient).indexOf(chip.querySelector('p').innerHTML);
          const positionAppliance = recipe.appliance.indexOf(chip.querySelector('p').innerHTML);
          const positionUstensil = getUstensilPosition(recipe, chip.querySelector('p'));
          if (positionIngredient !== -1 || positionAppliance !== -1 || positionUstensil !== -1) {
            recipe.display = true;
          }
        }
      }
    }
  } else if (selectedElements.length === 0) {
    for (const recipe of STATE) {
      recipe.display = true;
    }
  }
  displayFilterRecipes(STATE);
  displayErrorMessage();
}

export function filterRecipesByMainSearch (option) {
  // == recherche dans les recttes en display = true ===
  if (option.length >= 3) {
    for (const recipe of STATE) {
      const positionIngredient = recipe.ingredients.map(e => e.ingredient.toLowerCase()).indexOf(option.toLowerCase());
      const positionTitle = recipe.name.toLowerCase().indexOf(option.toLowerCase());
      const positionDescription = recipe.description.toLowerCase().indexOf(option.toLowerCase());
      if (recipe.display === true) {
        if (positionIngredient < 0 && positionTitle < 0 && positionDescription < 0) {
          recipe.display = false;
        }
      }
      // === recherche dans les recettes en display = false dans le cas d'une erreur de frappe ====
      if (recipe.display === false) {
        if (selectedElements.length === 0) { // si aucune chip n'a déja été sélectionnée ===
          if (positionIngredient >= 0 || positionTitle >= 0 || positionDescription >= 0) {
            recipe.display = true;
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
