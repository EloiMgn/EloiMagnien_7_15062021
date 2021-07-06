import { recipes } from '../../../datas/recipes.js';

export let ingredientsArray = [];
export class ingredientsSearch {
  static searchIngredient () {
    const ingredientsButton = document.getElementById('ingredients');

    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        const elements = recipes[i].ingredients[j].ingredient;
        ingredientsArray.push(elements);
      }
    }

    let filteredArray = ingredientsArray.filter((ele, pos) => ingredientsArray.indexOf(ele) === pos);

    filteredArray = filteredArray.sort((a, b) => a.localeCompare(b));

    filteredArray.forEach(element => {
      const newElement = document.createElement('a');
      newElement.textContent = element;
      newElement.classList.add('option');
      ingredientsButton.appendChild(newElement);
    });
    ingredientsArray = filteredArray;
    console.log(filteredArray);
  }
}
