import { STATE } from './state.js';

export function displayErrorMessage () {
  let flag;
  const recipeSelection = document.getElementById('recipes__selection');
  const errorSection = document.getElementById('errorSection');
  for (let i = 0; i < STATE.length; i++) {
    if (STATE[i].display === false) {
      flag = false;
    } else {
      flag = true;
      break;
    }
  }
  if (flag === false) {
    recipeSelection.style.display = 'none';
    errorSection.style.display = 'block';
  } else {
    recipeSelection.style.display = 'flex';
    errorSection.style.display = 'none';
  }
}
