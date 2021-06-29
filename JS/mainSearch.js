import { recipes } from '../datas/recipes.js';
import { recipesSelection } from './recipesSelection.js';
import { ingredientsArray } from './ingredientsSearch.js';
// export const ingredientsArray = [];
export const ustensilsArray = [];
export const appliancesArray = [];
const mainSearchBar = document.getElementById('main__search');

// Récupération des données entrées dans la barre de recherche === Objet compilant les résultats obtenus.
export const result = {
  validationStatut: false,
  statut: false,
  data: null,
  titleStatut: false,
  ingredientStatut: false,
  descriptionStatut: false,
  selectionResult: []
};

mainSearchBar.addEventListener('input', () => {
  resetSelection();
  mainSearchValidation(mainSearchBar);
  addDataToResults(mainSearchBar);
  searchResultsTitle(result.validationStatut, result.data);
  searchResultsIngredients(result.validationStatut, result.data, ingredientsArray);
  searchResultsDescription(result.validationStatut, result.data);
  resultStatut();
  recipesSelection.deleteRecipeSelection();
  recipesSelection.createRecipesSelection(result.selectionResult);
  console.log(result.selectionResult);
  // console.log(result.titleStatut);
  // console.log(result.descriptionStatut);
  // console.log(result.ingredientStatut);
});

function addRecipesToResult () {
  for (let i = 0; i < recipes.length; i++) {
    result.selectionResult.push(recipes[i]);
  }
}

addRecipesToResult();

function mainSearchValidation (input) {
  const searchValid = /^.*[a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï][a-zA-Zéèêàçîï]+([-"\s][a-zA-ZéèîïÉÈÎÏ][a-zA-Zéèêàçîï]+)?$/;
  if (searchValid.test(input.value)) {
    result.validationStatut = true;
  } else {
    result.validationStatut = false;
  }
}

function addDataToResults (input) {
  result.data = input.value;
}

function resultStatut () {
  if (result.descriptionStatut === true || result.ingredientStatut === true || result.titleStatut === true) {
    result.statut = true;
  }
}

function resetSelection () {
  result.selectionResult.splice(0, result.selectionResult.length);
}

function searchResultsTitle (statutResult, dataResult) {
  if (statutResult === true) {
    for (let i = 0; i < result.selectionResult.length; i++) {
      if (result.selectionResult[i].name.toLowerCase().indexOf(`${dataResult.toLowerCase()}`) !== -1) {
        result.titleStatut = true;
        result.selectionResult.filter(result.selectionResult[i]);
      } else if (recipes[i].name.toLowerCase().indexOf(`${dataResult.toLowerCase()}`) === -1) {
        // result.selectionResult.splice(0, result.selectionResult.length);
        // result.titleStatut = false;
        // console.log(recipes[i].name.toLowerCase().indexOf(`${dataResult.toLowerCase()}`));
      }
    }
  }
}

function searchResultsIngredients (statutResult, dataResult, ingredients) {
  if (statutResult === true) {
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].toLowerCase().indexOf(`${dataResult.toLowerCase()}`) !== -1) {
        result.ingredientStatut = true;
      } else if (ingredients[i].toLowerCase().indexOf(`${dataResult.toLowerCase()}`) === -1) {
        // result.ingredientStatut = false;
        result.selectionResult.splice(0, result.selectionResult.length);
      }
    }
  }
}

// function searchIngredientRecipe (ingredientsResults) {
//   for (let i = 0; i < recipes.length; i++) {
//     for (let j = 0; j < recipes[i].ingredients.length; j++) {
//       if (recipes[i].ingredients[j].ingredient === ingredientsResults) {
//         result.selectionResult.push(recipes[i]);
//         console.log(result.selectionResult);
//       }
//     }
//   }
// }

function searchResultsDescription (statutResult, dataResult) {
  if (statutResult === true) {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].description.toLowerCase().indexOf(`${dataResult.toLowerCase()}`) !== -1) {
        result.selectionResult.push(recipes[i]);
        result.descriptionStatut = true;
      } else if (recipes[i].description.toLowerCase().indexOf(`${dataResult.toLowerCase()}`) === -1) {
        // result.descriptionStatut = false;
        result.selectionResult.splice(0, result.selectionResult.length);
      }
    }
  }
}
