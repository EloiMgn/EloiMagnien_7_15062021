export function responsiveSearch (listId) {
  if (screen.availWidth < 720) {
    responsiveIcons(listId);
    onClicResponsive(listId);
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

function onClicResponsive (listId) {
  const input = document.getElementById(`choice__${listId}`);
  input.addEventListener('focus', () => {
    const searchBar = document.getElementById(`Search--${listId}`);
    const searchIcon = document.getElementById(`searchIcon__${listId}`);
    searchIcon.style.display = 'none';
    searchBar.style.width = '220px';
  });
  input.addEventListener('blur', () => {
    const searchBar = document.getElementById(`Search--${listId}`);
    searchBar.style.width = '100%';
    const searchIcon = document.getElementById(`searchIcon__${listId}`);
    searchIcon.style.display = 'flex';
  });
}
