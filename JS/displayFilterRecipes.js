import { STATE } from './state.js';

export const displayFilterRecipes = () => {
  STATE.forEach(recipe => {
    if (recipe.display === true) {
      document.querySelector(`#recipe__number__${recipe.id}`).style.display = 'block';
    } else {
      document.querySelector(`#recipe__number__${recipe.id}`).style.display = 'none';
    }
  });
};
