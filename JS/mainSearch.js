import { recipes } from '../datas/recipes.js';
import { ingredientsArray } from './ingredientsSearch.js';
// import { ustensilsArray } from './ustensilsSearch.js';
// import { appliancesArray } from './appliancesSearch.js';

const mainSearchBar = document.getElementById('main__search');

// Récupération des données entrées dans la barre de recherche === Objet compilant les résultats obtenus.
const result = {
  validationStatut: false,
  statut: false,
  data: null
};

mainSearchBar.addEventListener('input', () => {
  mainSearchValidation(mainSearchBar);
  addDataToResults(mainSearchBar);
  searchResultsTitle(result.validationStatut, result.data, recipes);
  searchResultsIngredients(result.validationStatut, result.data, ingredientsArray);
  searchResultsDescription(result.validationStatut, result.data, recipes);
  console.log(result.statut);
});

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

function searchResultsTitle (statutResult, dataResult, recipes) {
  if (statutResult === true) {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].name.toLowerCase().indexOf(`${dataResult.toLowerCase()}`) !== -1) {
        // console.log(recipes[i].name);
        result.statut = true;
      }
    }
  }
}

function searchResultsIngredients (statutResult, dataResult, ingredients) {
  if (statutResult === true) {
    for (let i = 0; i < ingredients.length; i++) {
      if (ingredients[i].toLowerCase().indexOf(`${dataResult.toLowerCase()}`) !== -1) {
        // console.log(ingredients[i]);
        result.statut = true;
      }
    }
  }
}

function searchResultsDescription (statutResult, dataResult, recipes) {
  if (statutResult === true) {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].description.toLowerCase().indexOf(`${dataResult.toLowerCase()}`) !== -1) {
        // console.log(recipes[i].description);
        result.statut = true;
      }
    }
  }
}
