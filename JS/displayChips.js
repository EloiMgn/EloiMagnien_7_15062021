
import { firstLetterMaj, removeDuplicates, resetInputValue, sortArray } from './utils.js';
import { onClicFilterRecipes, onCloseFilterRecipes } from './filteringRecipes.js';
import { STATE } from './state.js';

export const chipsList = [];
export const selectedElements = [];

const dropdownElements = [];

export function createDropdownElements () {
  const dropdownElementsTemp = [];
  STATE.forEach(recipe => {
    dropdownElementsTemp.push(firstLetterMaj(recipe.appliance));
    recipe.ingredients.forEach(element => {
      dropdownElementsTemp.push(firstLetterMaj(element.ingredient));
    });
    recipe.ustensilsList.ustensils.forEach(ustensil => {
      dropdownElementsTemp.push(firstLetterMaj(ustensil));
    });
  });
  removeDuplicates(dropdownElementsTemp, dropdownElements);
  sortArray(dropdownElements);
}

function runObserver (dropdown) {
  const observer = new MutationObserver(selectChip);
  observer.observe(dropdown, { childList: true });
}

// === fonction de sélection d'une option et de suppression d'une option ===
export function runChipsSelection () {
  const ingredientsDropdown = document.querySelector('#ingredients__dropdown');
  const appliancesDropdown = document.querySelector('#appliances__dropdown');
  const ustensilsDropdown = document.querySelector('#ustensils__dropdown');
  runObserver(ingredientsDropdown);
  runObserver(appliancesDropdown);
  runObserver(ustensilsDropdown);
  removeChip();
}
// === Création de toutes les chips en display:none par défaut
export function displayAllChips () {
  displayChips(dropdownElements, 'ingredients');
  displayChips(dropdownElements, 'appliances');
  displayChips(dropdownElements, 'ustensils');
}
// === Création des chips d'une liste donnée ====
function displayChips (dropdownList, listId) {
  const resultsContainer = document.getElementById('secondSearch__results');
  dropdownList.forEach(option => {
    createChips(option, listId, resultsContainer, dropdownList.indexOf(option));
  });
}

// === Création d'une chip ===
function createChips (clickedElement, listId, resultsContainer, index) {
  // === Création du container de la chip ===
  const newElement = document.createElement('div');
  newElement.classList.add('secondSearch__results' + '__' + 'select');
  newElement.classList.add(`${listId}`);
  newElement.classList.add(`${clickedElement.replaceAll(' ', '_')}`);
  newElement.classList.add('hidden'); // ajout d'une classe hidden pour un display:none par défaut
  newElement.setAttribute('id', `${listId}__${index}`); // ajout d'un id correspondant à l'id de l'élement du dropdown

  resultsContainer.appendChild(newElement);

  // === Ajout du texte de la chip ===
  const newText = document.createElement('p');
  newText.classList.add('secondSearch__results' + '__' + 'text');
  newText.classList.add(`${listId}`);
  newText.textContent = clickedElement;
  newElement.appendChild(newText);

  // === Ajout de la croix pour la suppression de la chip ===
  const newCross = document.createElement('i');
  newCross.classList.add('far', 'fa-times-circle', 'deleteSelectedResult');
  newElement.appendChild(newCross);
  chipsList.push(newElement);
}

export function selectChip () {
  const dropdownList = document.querySelectorAll('.option');
  dropdownList.forEach(dropdownElement => {
    dropdownElement.addEventListener('click', () => {
      chipsList.forEach(chip => {
        if (dropdownElement.innerHTML === chip.querySelector('p').innerHTML && chip.classList.contains(dropdownElement.classList[0].replaceAll('option__', ''))) {
          chip.classList.remove('hidden');
          chip.classList.add('selectedChip');
          selectedElements.push(chip);
          dropdownElement.classList.add('selected');
        }
      });
      resetInputValue();
      onClicFilterRecipes(dropdownElement);
    });
  });
}

export function onKeyPressSelectChip (dropdownElement) {
  chipsList.forEach(chip => {
    if (dropdownElement.innerHTML === chip.querySelector('p').innerHTML && chip.classList.contains(dropdownElement.classList[0].replaceAll('option__', ''))) {
      chip.classList.remove('hidden');
      chip.classList.add('selectedChip');
      selectedElements.push(chip);
      dropdownElement.classList.add('selected');
    }
  });
  resetInputValue();
  onClicFilterRecipes(dropdownElement);
}

export function removeChip () {
  const chipsListClose = document.querySelectorAll('.deleteSelectedResult');
  const selectedList = document.querySelectorAll('.option');

  chipsListClose.forEach(cross => {
    cross.addEventListener('click', () => {
      cross.parentElement.classList.add('hidden'); // === suppression de la chip (passage en display:none) au clic sur la croix
      // réapparition de l'option dans le dropdown (suppression de la class selected)
      selectedList.forEach(option => {
        if (cross.previousElementSibling.innerHTML.toLowerCase() === option.innerHTML.toLowerCase()) {
          option.classList.remove('selected');
        }
      });
      if (selectedElements.length > 0) {
        for (const i of selectedElements) {
          if (i.querySelector('p').innerHTML.toLowerCase() === cross.previousElementSibling.innerHTML.toLowerCase()) {
            selectedElements.splice(i, 1);
          }
        }
      }
      onCloseFilterRecipes();
    });
  });
}
