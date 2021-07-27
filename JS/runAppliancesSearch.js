import { searchResults, selectResult } from './secondSearch.js';
import { sortArray, removeDuplicates, showList, clearShowedList, filterDropdown } from './utils.js';

const dropdownAppliances = [];
const dropdownAppliancesTemp = [];
const appliancesButton = document.getElementById('choice__appliances');

export function showStartAppliancesList () {
  if (appliancesButton.value === '') {
    for (let i = 0; i < searchResults.recipes.length; i++) {
      dropdownAppliancesTemp.push(searchResults.recipes[i].appliancesButton);
    }
  }
  removeDuplicates(dropdownAppliancesTemp, dropdownAppliances);
  sortArray(dropdownAppliances);
  showList(dropdownAppliances, 'appliances');
  selectResult('appliances');
}

export function runAppliancesSearch () {
  appliancesButton.addEventListener('input', () => {
    clearShowedList('appliances');
    filterDropdown(dropdownAppliances, 'appliances', appliancesButton);
  });
}
