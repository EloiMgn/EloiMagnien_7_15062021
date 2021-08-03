import { recipes } from '../datas/recipes.js';

export const STATE = { recipes };

export function addDisplayToState () {
  STATE.recipes.forEach(recipe => {
    recipe.display = true;
  });
}
