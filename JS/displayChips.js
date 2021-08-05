// import { clearInputValue } from './utils.js';
import { STATE } from './state.js';
import { dropdownUstensils, dropdownAppliances, dropdownIngredients } from './displayDropdownList.js';
import { displayFilterRecipes } from './displayFilterRecipes.js';
// import { removeDuplicates, sortArray } from './utils.js';

export const chipsList = [];
export const selectedElements = [];

// import { displayFilterRecipes } from './displayFilterRecipes.js';
// === Création de toutes les chips en display:none par défaut
export function displayAllChips () {
  displayChips(dropdownIngredients, 'ingredients');
  displayChips(dropdownAppliances, 'appliances');
  displayChips(dropdownUstensils, 'ustensils');
  selectChip();
  removeChip();
  // deleteOptionInArray();
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

export function selectChip (listId) {
  const dropdownList = document.querySelectorAll('.option');
  dropdownList.forEach(dropdownElement => {
    dropdownElement.addEventListener('click', () => {
      chipsList.forEach(chip => {
        if (dropdownElement.innerHTML === chip.querySelector('p').innerHTML) {
          chip.classList.remove('hidden');
          chip.classList.add('selectedChip');
          dropdownElement.classList.add('selected');
          console.log(dropdownElement);
        }
      });
      // clearInputValue(inputId);
      filterRecipes(dropdownElement);
    });
  });
}

function filterRecipes (option) {
  // chercher les recette qui ont de chipList[i] dans les recette en display true
  if (option.classList.contains('option__ingredients')) {
    STATE.forEach(recipe => {
      if (recipe.display === true) {
        const position = recipe.ingredients.map(e => e.ingredient).indexOf(option.innerHTML);
        if (position < 0) {
          recipe.display = false;
        }
      }
    });
  } else if (option.classList.contains('option__appliances')) {
    STATE.forEach(recipe => {
      if (recipe.display === true) {
        const position = recipe.appliance.indexOf(option.innerHTML);
        if (position < 0) {
          recipe.display = false;
        }
      }
    });
  } else if (option.classList.contains('option__ustensils')) {
    STATE.forEach(recipe => {
      if (recipe.display === true) {
        const position = recipe.ustensils.map(e => e.ustensils).indexOf(option.innerHTML);
        if (position < 0) {
          recipe.display = false;
        }
        console.log(position);
      }
    });
  }
  displayFilterRecipes(STATE);
};

// export function selectChip (inputId) {
//   const chipsList = document.querySelectorAll('.secondSearch__results__select');
//   const dropdownList = document.querySelectorAll('.option');

//   dropdownList.forEach(option => {
//     option.addEventListener('click', () => {
//       for (let i = 0; i < chipsList.length; i++) {
//         if (chipsList[i].classList.contains(option.innerHTML.replaceAll(' ', '_'))) {
//           chipsList[i].classList.remove('hidden');
//           option.classList.add('selected');
//         }
//       }
//       clearInputValue(inputId);
//       // chercher les recette qui ont de chipList[i] dans les recette en display true
//       STATE.recipes.forEach(recipe => {
//         if (recipe.display === true) {
//           const position = recipe.ingredients.map(e => e.ingredient).indexOf(option.innerHTML);
//           if (position < 0) {
//             recipe.display = false;
//           }
//         }
//       });
//       displayFilterRecipes();
//     });
//   });
// }

export function removeChip () {
  const chipsListClose = document.querySelectorAll('.deleteSelectedResult');
  const selectedList = document.querySelectorAll('.option');

  chipsListClose.forEach(cross => {
    cross.addEventListener('click', () => {
      cross.parentElement.classList.add('hidden'); // === suppression de la chip (passage en display:none)
      // réapparition de l'option dans le dropdown (suppression de la class selected)
      for (let i = 0; i < selectedList.length; i++) {
        if (cross.parentElement.classList.contains(selectedList[i].innerHTML.replaceAll(' ', '_'))) {
          selectedList[i].classList.remove('selected');
        }
      }
    });
  });
}
