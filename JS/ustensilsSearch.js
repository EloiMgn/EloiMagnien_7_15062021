import { recipes } from '../datas/recipes.js';

export const ustensilsArray = [];
export class ustensilsSearch {
  static searchUstensil () {
    const ustensilsButton = document.getElementById('ustensils');
    for (let i = 0; i < recipes.length; i++) {
      for (let j = 0; j < recipes[i].ustensils.length; j++) {
        const elements = recipes[i].ustensils[j];
        ustensilsArray.push(elements);
      }
    }
    let filteredArray = ustensilsArray.filter((ele, pos) => ustensilsArray.indexOf(ele) === pos);

    filteredArray = filteredArray.sort((a, b) => a.localeCompare(b));

    filteredArray.forEach(element => {
      const newElement = document.createElement('option');
      newElement.textContent = element;
      ustensilsButton.appendChild(newElement);
    });
  }
}
