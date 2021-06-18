import { recipes } from '../datas/recipes.js';

export class recipesSelection {
  static createRecipesSelection () {
  }

  static createSelectionContainer () {
    const body = document.getElementById('body');
    const recipesSelection = document.createElement('section');
    recipesSelection.setAttribute('id', 'recipes__selection');
    recipesSelection.classList.add('recipes__selection');
    body.appendChild(recipesSelection);
  }

  static createSelectionCard () {
    const recipesSelection = document.getElementById('recipes__selection');
    recipes.forEach(() => {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipe__card');
      recipeCard.setAttribute('id', recipes.id);
      recipesSelection.appendChild(recipeCard);
    });
  }
}
