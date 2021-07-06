import { runIngredientSearch } from './secondSearchIngredients.js';
import { runApplianceSearch } from './secondSearchAppliances.js';
import { runUstensilSearch } from './secondSearchUstensils.js';

export function runSecondSearch () {
  runIngredientSearch();
  runApplianceSearch();
  runUstensilSearch();
}

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
    newElement.classList.add('option');
    list.appendChild(newElement);
  });
}
