import { recipes } from '../datas/recipes.js';

export const STATE = recipes;

export function addDisplayToState () {
  STATE.forEach(recipe => {
    recipe.display = true;
    recipe.ustensilsList = {
      ustensils: recipe.ustensils,
      found: true
    };
    delete recipe.ustensils;
  });
}
