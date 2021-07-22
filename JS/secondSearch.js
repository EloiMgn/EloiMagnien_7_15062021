import { runIngredientSearch } from './secondSearchIngredients.js';
import { runApplianceSearch } from './secondSearchAppliances.js';
import { runUstensilSearch } from './secondSearchUstensils.js';
import { recipes } from '../datas/recipes.js';
import { reloadRecipeSelection } from './recipesSelection.js';

export function runSecondSearch () {
  runIngredientSearch();
  runApplianceSearch();
  runUstensilSearch();
  filterRecipes();
}

export const searchResults = {
  secondSearch: [],
  recipes: [
    {
    }
  ]

};

export const secondSearchResults = {
  foundRecipes: [],
  filteredRecipes: [],

  foundIngredients: [],
  filteredIngredients: [],

  foundAppliances: [],
  filteredAppliances: [],

  foundUstensils: [],
  filteredUstensils: []
};

export function selectResult (listId) {
  const listedResults = document.querySelectorAll('.option' + '__' + `${listId}`);

  for (let i = 0; i < listedResults.length; i++) {
    listedResults[i].addEventListener('click', () => {
      if (!listedResults[i].classList.contains('selected')) {
        listedResults[i].classList.add('selected');
        addChipToResults(listedResults[i].innerHTML, listId, searchResults.secondSearch.length);
        resetInputValue(listId);
        closeList(listId);
        reloadChips();
        launchChipsReload();
        filterRecipes();
      }
    });
  }
}

export function launchChipsReload () {
  const closeElements = document.getElementsByClassName('deleteSelectedResult');
  for (const item of closeElements) {
    item.addEventListener('click', () => {
      removeChip(item);
      removeClassName(item);
      reloadChips();
      launchChipsReload();
      filterRecipes();
    });
  }
}

function createChips (clickedElement, listId, elementId, resultsContainer) {
  const newElement = document.createElement('div');
  newElement.classList.add('secondSearch__results' + '__' + 'select');
  newElement.classList.add(`${listId}`);
  newElement.classList.add(`${clickedElement.replaceAll(' ', '_')}`);
  newElement.setAttribute('id', `${elementId}`);
  resultsContainer.appendChild(newElement);

  const newText = document.createElement('p');
  newText.classList.add('secondSearch__results' + '__' + 'text');
  newText.classList.add(`${listId}`);
  newText.textContent = clickedElement;
  newElement.appendChild(newText);

  const newCross = document.createElement('i');
  newCross.classList.add('far');
  newCross.classList.add('fa-times-circle');
  newCross.classList.add('deleteSelectedResult');
  newElement.appendChild(newCross);
}

function removeClassName (item) {
  const listedResultsSelected = document.querySelectorAll('.selected');
  const itemDiv = item.parentElement;
  // remove className 'selected'
  for (let i = 0; i < listedResultsSelected.length; i++) {
    if (itemDiv.classList.contains(listedResultsSelected[i].innerHTML.replaceAll(' ', '_'))) {
      listedResultsSelected[i].classList.remove('selected');
    }
  }
}

function removeChip (item) {
  const itemText = item.parentElement.innerText;
  const resultsList = searchResults.secondSearch;
  for (const i of resultsList) {
    if (itemText === i.name) {
      const myIndex = resultsList.indexOf(i);
      if (myIndex !== -1) {
        resultsList.splice(myIndex, 1);
      }
    }
  }
}

function reloadChips () {
  clearShowedList('secondSearch__results');
  addChipsToList();
}

function addChipToResults (name, listId, id) {
  class Chip {
    constructor (name, listId, id) {
      this.name = name;
      this.listId = listId;
      this.id = id;
    }
  }
  const chip = new Chip(name, listId, id);
  searchResults.secondSearch.push(chip);
}

function addChipsToList () {
  const resultsContainer = document.getElementById('secondSearch__results');
  searchResults.secondSearch.forEach((element) => {
    createChips(element.name, element.listId, element.id, resultsContainer);
  });
}

function resetInputValue (inputId) {
  const input = document.getElementById(`choice__${inputId}`);
  input.value = '';
}

function closeList (listId) {
  const options = document.getElementById(`${listId}`);
  const button = document.getElementById(`Search--${listId}`);
  options.style.display = 'none';
  button.classList.remove(`Search--${listId}`);
}

export function resetArray (array) {
  array.splice(0, array.length);
}

export function removeDuplicates (inputArray, outputArray) {
  const filteredArray = [...new Set(inputArray)];
  filteredArray.forEach((element) => {
    outputArray.push(element);
  });
}

export function sortArray (inputArray) {
  inputArray.sort((a, b) => a.localeCompare(b));
}

export function clearShowedList (listId) {
  const myNode = document.getElementById(listId);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

export function showList (array, listId) {
  const list = document.getElementById(`${listId}`);
  array.forEach(element => {
    const newElement = document.createElement('a');
    newElement.textContent = element;
    newElement.classList.add('option' + '__' + `${listId}`);
    list.appendChild(newElement);
  });
}

export function filterRecipes () {
  const selectedItems = searchResults.secondSearch;
  const foundRecipes = searchResults.recipes;
  const filteredRecipes = [];
  const recipesTemps = [];
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
          if (foundRecipes[j].ingredients[k].ingredient.includes(selectedItems[i].name)) {
            recipesTemps.push(foundRecipes[j]);
            console.log(foundRecipes[j].ingredients[k].ingredient.includes(selectedItems[i].name));
            testPass.ingredientsPass = true;
          } else if (foundRecipes[j].ingredients[k].ingredient.includes(selectedItems[i].name) !== true) {
            console.log('zut');
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
            console.log('hello');
            testPass.ustensilsPass = true;
            recipesTemps.push(foundRecipes[j]);
          }
        }
      }
    }
    const filteredRecipesTemps = [];
    removeDuplicates(recipesTemps, filteredRecipesTemps);
    reloadRecipeSelection(filteredRecipesTemps);
    console.log(testPass);
  }
}

// ====================== TEST =======================

// ======================      =======================
