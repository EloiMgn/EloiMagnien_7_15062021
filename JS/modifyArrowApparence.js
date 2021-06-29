const ingredientsSearch = document.getElementById('choice_ingredients');
const ingredientsArrow = document.getElementById('ingredientsArrow');
const appliancesSearch = document.getElementById('choice_appliances');
const appliancesArrow = document.getElementById('appliancesArrow');
const ustensilsSearch = document.getElementById('choice_ustensils');
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
};

openArrow(ingredientsSearch, ingredientsArrow);
openArrow(appliancesSearch, appliancesArrow);
openArrow(ustensilsSearch, ustensilsArrow);

closeArrow(ingredientsSearch, ingredientsArrow);
closeArrow(appliancesSearch, appliancesArrow);
closeArrow(ustensilsSearch, ustensilsArrow);
