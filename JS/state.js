import { recipes } from '../datas/recipes.js';

export const STATE = recipes;

export function addDisplayToState () {
  STATE.forEach(recipe => {
    recipe.display = true;
  });
}
