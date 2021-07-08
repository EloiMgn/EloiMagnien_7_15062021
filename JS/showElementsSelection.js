// import { ingredientsArray } from "./ingredientsSearch";

const ingredientsInput = document.getElementById('choice__ingredients');
const ingredientsBtn = document.getElementById('Search--ingredients');
const appliancesInput = document.getElementById('choice__appliances');
const appliancesBtn = document.getElementById('Search--appliances');
const ustensilsInput = document.getElementById('choice__ustensils');
const ustensilsBtn = document.getElementById('Search--ustensils');
const ingredientsArrow = document.getElementById('ingredientsArrow');
const appliancesArrow = document.getElementById('appliancesArrow');
const ustensilsArrow = document.getElementById('ustensilsArrow');

ingredientsInput.addEventListener('focus', () => {
  const ingredientsOptions = document.getElementById('ingredients');
  ingredientsOptions.style.display = 'flex';
  ingredientsBtn.classList.add('Search--ingredients');
});
ingredientsArrow.addEventListener('focus', () => {
  const ingredientsOptions = document.getElementById('ingredients');
  ingredientsOptions.style.display = 'flex';
  ingredientsBtn.classList.add('Search--ingredients');
});

appliancesInput.addEventListener('focus', () => {
  const appliancesOptions = document.getElementById('appliances');
  appliancesOptions.style.display = 'flex';
  appliancesBtn.classList.add('Search--appliances');
});
appliancesArrow.addEventListener('click', () => {
  const appliancesOptions = document.getElementById('appliances');
  appliancesOptions.style.display = 'flex';
  appliancesBtn.classList.add('Search--appliances');
});

ustensilsInput.addEventListener('focus', () => {
  const ustensilsOptions = document.getElementById('ustensils');
  ustensilsOptions.style.display = 'flex';
  ustensilsBtn.classList.add('Search--ustensils');
});
ustensilsArrow.addEventListener('click', () => {
  const ustensilsOptions = document.getElementById('ustensils');
  ustensilsOptions.style.display = 'flex';
  ustensilsBtn.classList.add('Search--ustensils');
});

ingredientsArrow.addEventListener('click', () => {
  const ingredientsOptions = document.getElementById('ingredients');
  ingredientsOptions.style.display = 'none';
  ingredientsBtn.classList.remove('Search--ingredients');
});

appliancesArrow.addEventListener('click', () => {
  const appliancesOptions = document.getElementById('appliances');
  appliancesOptions.style.display = 'none';
  appliancesBtn.classList.remove('Search--appliances');
});

ustensilsArrow.addEventListener('click', () => {
  const ustensilsOptions = document.getElementById('ustensils');
  ustensilsOptions.style.display = 'none';
  ustensilsBtn.classList.remove('Search--ustensils');
});
