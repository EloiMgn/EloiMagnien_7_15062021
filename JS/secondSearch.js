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
    newElement.classList.add('option' + '__' + `${listId}`);
    list.appendChild(newElement);
  });
}

export function selectResult (listId) {
  const listedResults = document.querySelectorAll('.option' + '__' + `${listId}`);
  const resultsContainer = document.getElementById('secondSearch__results');

  listedResults.forEach((element) => {
    element.addEventListener('click', () => {
      const resultList = document.querySelectorAll('.secondSearch__results__text');
      for (let i = 0; i < resultList.length; i++) {
        const resultListText = resultList[i].innerText;
      }
        const newElement = document.createElement('div');
        newElement.classList.add('secondSearch__results' + '__' + 'select');
        newElement.classList.add(`${listId}`);
        resultsContainer.appendChild(newElement);

        const newText = document.createElement('p');
        newText.classList.add('secondSearch__results' + '__' + 'text');
        newText.classList.add(`${listId}`);
        newText.textContent = element.innerHTML;
        newElement.appendChild(newText);

        const newCross = document.createElement('i');
        newCross.classList.add('far');
        newCross.classList.add('fa-times-circle');
        newCross.classList.add('deleteSelectedResult');
        newElement.appendChild(newCross);
    });
  });
}

export function deleteSelectedResult () {
  const selectedResultsClose = document.querySelectorAll('.deleteSelectedResult');
  const selectedResults = document.querySelectorAll('.secondSearch__results__select');
  for (let i = 0; i < selectedResultsClose.length; i++) {
    for (let j = 0; j < selectedResults.length; j++) {
      selectedResultsClose[i].addEventListener('click', () => {
        selectedResults[0].remove();
      });
    }
  }
}
