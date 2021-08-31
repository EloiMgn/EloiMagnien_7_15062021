export function responsiveSearch (listId) {
  if (screen.availWidth < 720) {
    responsiveIcons(listId);
  }
}

function responsiveIcons (listId) {
  const input = document.getElementById(`choice__${listId}`);
  if (input.id === 'choice__ingredients') {
    // const searchBar = document.getElementById(`searchBar--${listId}`);
    input.placeholder = '';
    const ingredientIcon = document.getElementById('searchIcon__ingredients');
    ingredientIcon.style.display = 'flex';
  }
  if (input.id === 'choice__appliances') {
    // const searchBar = document.getElementById('searchBar--appliances');
    input.placeholder = '';
    const appliancesIcon = document.getElementById('searchIcon__appliances');
    appliancesIcon.style.display = 'flex';
  }
  if (input.id === 'choice__ustensils') {
    // const searchBar = document.getElementById('searchBar--ustensils');
    input.placeholder = '';
    const ustensilsIcon = document.getElementById('searchIcon__ustensils');
    ustensilsIcon.style.display = 'flex';
  }
}

export function responsiveSelection () {
  const selection = document.querySelectorAll('.selectedChip');
  const recipeSelection = document.querySelector('#recipes__selection');
  if (selection.length > 3 && selection.length <= 6) {
    recipeSelection.style.marginTop = '100px';
  } else if (selection.length <= 3) {
    recipeSelection.style.marginTop = '40px';
  }
  if (selection.length > 6) {
    recipeSelection.style.marginTop = '160px';
  }
}
