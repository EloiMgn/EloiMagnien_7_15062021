import { recipes } from '../../../datas/recipes.js';
import { appliancesArray } from '../../mainSearch.js';

export class appliancesSearch {
  static searchAppliance () {
    const appliancesButton = document.getElementById('appliances');

    for (let i = 0; i < recipes.length; i++) {
      const elements = recipes[i].appliance;
      appliancesArray.push(elements);
    }

    let filteredArray = appliancesArray.filter((ele, pos) => appliancesArray.indexOf(ele) === pos);

    filteredArray = filteredArray.sort((a, b) => a.localeCompare(b));

    filteredArray.forEach(element => {
      const newElement = document.createElement('option');
      newElement.textContent = element;
      appliancesButton.appendChild(newElement);
    });
  }
}
