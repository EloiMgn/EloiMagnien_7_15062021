import { recipes } from '../datas/recipes.js';
import { secondSearchResults, removeDuplicates, resetArray, sortArray, clearShowedList, showList, selectResult } from './secondSearch.js';

export function runApplianceSearch () {
  const appliancesButton = document.getElementById('choice__appliances');
  const foundAppliances = secondSearchResults.foundAppliances;
  const filteredAppliances = secondSearchResults.filteredAppliances;
  const foundRecipes = secondSearchResults.foundRecipes;
  const filteredRecipes = secondSearchResults.filteredRecipes;

  if (appliancesButton.value === '') {
    for (let i = 0; i < recipes.length; i++) {
      const elements = recipes[i].appliance;
      foundAppliances.push(elements);
    }
    sortArray(foundAppliances);
    removeDuplicates(foundAppliances, filteredAppliances);
    showList(filteredAppliances, 'appliances');
    selectResult('appliances');
  }

  appliancesButton.addEventListener('input', () => {
    resetArray(foundRecipes);
    for (let i = 0; i < recipes.length; i++) {
      const elements = recipes[i].appliance;
      if (elements.toLowerCase().indexOf(`${appliancesButton.value.toLowerCase()}`) !== -1) {
        foundRecipes.push(recipes[i]);
      }
    }
    clearShowedList('appliances');
    removeDuplicates(foundRecipes, filteredRecipes);
    resetArray(foundAppliances);
    addFoundAppliances();
    sortArray(foundAppliances);
    showList(foundAppliances, 'appliances');
    selectResult('appliances');
  });
}

function addFoundAppliances () {
  const appliancesButton = document.getElementById('choice__appliances');
  const elements = [];
  for (let i = 0; i < secondSearchResults.filteredRecipes.length; i++) {
    const element = secondSearchResults.filteredRecipes[i].appliance;
    if (element.toLowerCase().indexOf(`${appliancesButton.value.toLowerCase()}`) !== -1) {
      elements.push(element);
    }
  }
  removeDuplicates(elements, secondSearchResults.foundAppliances);
}
