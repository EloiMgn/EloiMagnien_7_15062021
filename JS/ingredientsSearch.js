import { recipes } from '../datas/recipes.js';

// export class ingredientsSearch {
// }
export class ingredientsSearch {
  static searchIngredient () {
    const ingredientsButton = document.getElementById('ingredients');
    const elementsArray = [];

    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ingredients.length; j++) {
        const elements = recipes[i].ingredients[j].ingredient;
        elementsArray.push(elements);
      }
    }

    let filteredArray = elementsArray.filter((ele, pos) => elementsArray.indexOf(ele) === pos);

    filteredArray = filteredArray.sort((a, b) => a.localeCompare(b));

    filteredArray.forEach(element => {
      const newElement = document.createElement('option');
      newElement.textContent = element;
      ingredientsButton.appendChild(newElement);
    });
  }
  
  static createSessionsStorage(array){
    
  }
}
