const ingredientsSearch = document.getElementById('choice__ingredients');
const appliancesSearch = document.getElementById('choice__appliances');
const ustensilsSearch = document.getElementById('choice__ustensils');
const ingredientsArrow = document.getElementById('ingredientsArrow');
const appliancesArrow = document.getElementById('appliancesArrow');
const ustensilsArrow = document.getElementById('ustensilsArrow');

function openArrow (button, arrow) {
  arrow.classList.remove('fa-chevron-down');
  arrow.classList.add('fa-chevron-up');
  button.addEventListener('focus', () => {
    openArrow(button, arrow);
  });
};

function closeArrow (button, arrow) {
  arrow.classList.remove('fa-chevron-up');
  arrow.classList.add('fa-chevron-down');
  button.addEventListener('blur', () => {
    closeArrow(button, arrow);
  });
  arrow.addEventListener('click', () => {
    closeArrow(button, arrow);
  });
};

openArrow(ingredientsSearch, ingredientsArrow);
openArrow(appliancesSearch, appliancesArrow);
openArrow(ustensilsSearch, ustensilsArrow);

closeArrow(ingredientsSearch, ingredientsArrow);
closeArrow(appliancesSearch, appliancesArrow);
closeArrow(ustensilsSearch, ustensilsArrow);
