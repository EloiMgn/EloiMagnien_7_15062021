import { displayFilterRecipes } from './displayFilterRecipes.js';

// === Rechargement de l'affichage des recettes ===
export function reloadRecipeSelection (datas) {
  const myNode = document.getElementById('recipes__selection');
  if (myNode) {
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }
    displayFilterRecipes(datas);
  }
}

export function selectFirstOption (input, listId) {
  input.addEventListener('keypress', event => {
    const firstOption = document.querySelector(`.option__${listId}`);
    if (event.key === 'Enter') {
      onKeyPressSelectChip(firstOption);
    }
  });
}
// === Mise en Majuscule de la première lettre d'une string ===
export function firstLetterMaj (myString) {
  return (myString + '').charAt(0).toUpperCase() + myString.substr(1);
}

// Effacement du contenu d'un array ====
export function resetArray (array) {
  array.splice(0, array.length);
}

// === Tri d'un array du par ordre alphabétique ====
export function sortArray (inputArray) {
  inputArray.sort((a, b) => a.localeCompare(b));
}

// === Suppression des doublons dans un array ===
export function removeDuplicates (inputArray, outputArray) {
  const filteredArray = [...new Set(inputArray)];
  filteredArray.forEach((element) => {
    outputArray.push(element);
  });
}

// === Affichage d'une liste d'élements d'un array sous forme de liens ===
export function showList (array, listId) {
  const dropdown = document.getElementById(`${listId}__dropdown`);
  array.forEach(element => {
    const newElement = document.createElement('a');
    newElement.textContent = element;
    newElement.classList.add('option' + '__' + `${listId}`, 'option');
    newElement.setAttribute('id', `${listId}__${array.indexOf(element)}`);
    dropdown.appendChild(newElement);
  });
}

// === Suppression des éléments enfants d'un container ====
export function clearShowedList (listId) {
  const myNode = document.getElementById(`${listId}__dropdown`);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

export function resetInputValue () {
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = '';
  });
}

export function clearContainer (containerId) {
  const myNode = document.getElementById(`${containerId}`);
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}

// ==================================================================================================================== //
// ================================↓↓↓↓↓ Autres fonctions non utilisées ↓↓↓↓↓========================================== //
// ==================================================================================================================== //

// export function launchChipsReload () {
//   const closeElements = document.getElementsByClassName('deleteSelectedResult');
//   for (const item of closeElements) {
//     item.addEventListener('click', () => {
//       removeChip(item);
//       removeClassName(item);
//       reloadChips();
//       launchChipsReload();
//     });
//   }
// }

// function removeClassName (item) {
//   const listedResultsSelected = document.querySelectorAll('.selected');
//   const itemDiv = item.parentElement;
//   // remove className 'selected'
//   for (let i = 0; i < listedResultsSelected.length; i++) {
//     if (itemDiv.classList.contains(listedResultsSelected[i].innerHTML.replaceAll(' ', '_'))) {
//       listedResultsSelected[i].classList.remove('selected');
//     }
//   }
// }

// function removeChip (item) {
//   const itemText = item.parentElement.innerText;
//   const resultsList = searchResults.secondSearch;
//   for (const i of resultsList) {
//     if (itemText === i.name) {
//       const myIndex = resultsList.indexOf(i);
//       if (myIndex !== -1) {
//         resultsList.splice(myIndex, 1);
//       }
//     }
//   }
// }

// export function reloadChips () {
//   clearShowedList('secondSearch__results');
//   addChipsToList();
// }

// export function addChipToResults (name, listId, id) {
//   class Chip {
//     constructor (name, listId, id) {
//       this.name = name;
//       this.listId = listId;
//       this.id = id;
//     }
//   }
//   const chip = new Chip(name, listId, id);
//   searchResults.secondSearch.push(chip);
// }

// function addChipsToList () {
//   const resultsContainer = document.getElementById('secondSearch__results');
//   searchResults.secondSearch.forEach((element) => {
//     createChips(element.name, element.listId, element.id, resultsContainer);
//   });
// }

// export function closeList (listId) {
//   const options = document.getElementById(`${listId}`);
//   const button = document.getElementById(`Search--${listId}`);
//   options.style.display = 'none';
//   button.classList.remove(`Search--${listId}`);
// }

// export function sortDropdown (inputId, dropdownList, myButton) {
//   const input = document.getElementById(`choice__${inputId}`);
//   input.addEventListener('input', () => {
//     clearShowedList(`${inputId}`);
//     filterDropdown(dropdownList, `${inputId}`, myButton);
//     selectChip(inputId);
//   });
// }
