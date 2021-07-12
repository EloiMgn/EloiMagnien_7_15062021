import { runIngredientSearch } from './secondSearchIngredients.js';
import { runApplianceSearch } from './secondSearchAppliances.js';
import { runUstensilSearch } from './secondSearchUstensils.js';

export function runSecondSearch () {
  runIngredientSearch();
  runApplianceSearch();
  runUstensilSearch();
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

function createChips (clickedElement, listId, resultsContainer) {
  const newElement = document.createElement('div');
  newElement.classList.add('secondSearch__results' + '__' + 'select');
  newElement.classList.add(`${listId}`);
  newElement.classList.add(`${clickedElement.innerHTML.replaceAll(' ', '_')}`);
  resultsContainer.appendChild(newElement);

  const newText = document.createElement('p');
  newText.classList.add('secondSearch__results' + '__' + 'text');
  newText.classList.add(`${listId}`);
  newText.textContent = clickedElement.innerHTML;
  newElement.appendChild(newText);

  const newCross = document.createElement('i');
  newCross.classList.add('far');
  newCross.classList.add('fa-times-circle');
  newCross.classList.add('deleteSelectedResult');
  newElement.appendChild(newCross);
}

function deleteSelectedResult (element) {
  const selectedResultsClose = document.querySelectorAll('.deleteSelectedResult');
  const selectedResultsArray = document.querySelectorAll('.secondSearch__results__select');
  for (let i = 0; i < selectedResultsClose.length; i++) {
    selectedResultsClose[i].addEventListener('click', () => {
      // console.log(selectedResultsArray);
      for (let j = 0; j < selectedResultsArray.length; j++) {
        if (selectedResultsClose[i].parentElement === selectedResultsArray[j] && selectedResultsClose[i].parentElement.classList.contains(element.innerHTML.replaceAll(' ', '_'))) {
          element.classList.remove('selected');
          console.log(selectedResultsArray);
          // selectedResultsArray.filter((listElement) => listElement === selectedResultsClose[i].parentElement);
        }
      }
    });
  }
}

function addChipToResults (name, id) {
  class Chip {
    constructor (name, id) {
      this.name = name;
      this.id = id;
    }
  }
  const chip = new Chip(name, id);
  searchResults.secondSearch.push(chip);
}

export function selectResult (listId) {
  const listedResults = document.querySelectorAll('.option' + '__' + `${listId}`);
  const resultsContainer = document.getElementById('secondSearch__results');
  for (let i = 0; i < listedResults.length; i++) {
    listedResults[i].addEventListener('click', () => {
      if (!listedResults[i].classList.contains('selected')) {
        listedResults[i].classList.add('selected');
        createChips(listedResults[i], listId, resultsContainer);
        addChipToResults(listedResults[i].innerHTML, searchResults.secondSearch.length + 1);
        deleteSelectedResult(listedResults[i]);
        console.log(searchResults);
      }
    });
  }
}
