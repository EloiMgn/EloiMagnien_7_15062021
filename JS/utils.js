
// import { filterRecipes } from './filterRecipes.js';
import { selectChip } from './displayChips.js';

export function resetArray (array) {
  array.splice(0, array.length);
}
export function sortArray (inputArray) {
  inputArray.sort((a, b) => a.localeCompare(b));
}
export function removeDuplicates (inputArray, outputArray) {
  const filteredArray = [...new Set(inputArray)];
  filteredArray.forEach((element) => {
    outputArray.push(element);
  });
}
export function showList (array, listId) {
  const list = document.getElementById(`${listId}`);
  array.forEach(element => {
    const newElement = document.createElement('a');
    newElement.textContent = element;
    newElement.classList.add('option' + '__' + `${listId}`, 'option');
    newElement.setAttribute('id', `${listId}__${array.indexOf(element)}`);
    list.appendChild(newElement);
  });
}
export function clearShowedList (listId) {
  const myNode = document.getElementById(listId);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
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
    });
  }
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

export function reloadChips () {
  clearShowedList('secondSearch__results');
  addChipsToList();
}

export function addChipToResults (name, listId, id) {
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

export function resetInputValue (inputId) {
  const input = document.getElementById(`choice__${inputId}`);
  input.value = '';
}

export function closeList (listId) {
  const options = document.getElementById(`${listId}`);
  const button = document.getElementById(`Search--${listId}`);
  options.style.display = 'none';
  button.classList.remove(`Search--${listId}`);
}

export function filterDropdown (myList, listId, myInput) {
  const elements = [];
  const filteredElements = [];
  for (let i = 0; i < myList.length; i++) {
    if (myList[i].toLowerCase().indexOf(`${myInput.value.toLowerCase()}`) !== -1) {
      elements.push(myList[i]);
    }
  }
  removeDuplicates(elements, filteredElements);
  sortArray(filteredElements);
  showList(filteredElements, listId);
}

export function sortDropdown (inputId, dropdownList, myButton) {
  const input = document.getElementById(`choice__${inputId}`);
  input.addEventListener('input', () => {
    clearShowedList(`${inputId}`);
    filterDropdown(dropdownList, `${inputId}`, myButton);
    selectChip(inputId);
  });
}

export function clearInputValue (inputId) {
  const input = document.getElementById(`choice__${inputId}`);
  input.value = '';
}

export function firstLetterMaj (myString) {
  return (myString + '').charAt(0).toUpperCase() + myString.substr(1);
}
