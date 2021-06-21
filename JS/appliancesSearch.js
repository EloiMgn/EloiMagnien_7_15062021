import { recipes } from '../datas/recipes.js';

// export class ingredientsSearch {
// }
export class appliancesSearch {
  static searchAppliance () {
    const appliancesButton = document.getElementById('appliances');
    const elementsArray = [];

    for (let i = 0; i < recipes.length; i++) {
      const elements = recipes[i].appliance;
      elementsArray.push(elements);
    }

    let filteredArray = elementsArray.filter((ele, pos) => elementsArray.indexOf(ele) === pos);

    filteredArray = filteredArray.sort((a, b) => a.localeCompare(b));

    filteredArray.forEach(element => {
      const newElement = document.createElement('option');
      newElement.textContent = element;
      appliancesButton.appendChild(newElement);
    });
    this.createSessionsStorage(filteredArray);
  }

  static createSessionsStorage (array) {
    if (sessionStorage.getItem('appliancesArray') == null) {
      sessionStorage.setItem('appliancesArray', JSON.stringify(array));
    }
  }
}
