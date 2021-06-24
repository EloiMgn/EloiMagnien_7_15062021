const ingredientsSearch = document.getElementById('choice_ingredients');
const ingredientsArrow = document.getElementById('ingredientsArrow');

ingredientsSearch.addEventListener('focus', () => {
  openArrow(ingredientsArrow);
});

ingredientsSearch.addEventListener('blur', () => {
  closeArrow(ingredientsSearch);
});

function openArrow (arrow) {
  arrow.classList.remove('fa-chevron-down');
  arrow.classList.add('fa-chevron-up');
};

function closeArrow (arrow) {
  arrow.classList.remove('fa-chevron-up');
  arrow.classList.add('fa-chevron-down');
};
