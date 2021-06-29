// import { ingredientsArray } from "./ingredientsSearch";

const ingredientsInput = document.getElementById('choice_ingredients');
const ingredientsBtn = document.getElementById('Search--ingredients');
// const ingredientsOptions = document.getElementById('ingredients');
const appliancesInput = document.getElementById('choice_appliances');
const appliancesBtn = document.getElementById('Search--appliances');
const ustensilsInput = document.getElementById('choice_ustensils');
const ustensilsBtn = document.getElementById('Search--ustensils');

ingredientsInput.addEventListener('focus', () => {
  const ingredientsOptions = document.getElementById('ingredients');
  ingredientsOptions.style.display = 'flex';
  ingredientsBtn.classList.add('Search--ingredients');
});
appliancesInput.addEventListener('focus', () => {
  const appliancesOptions = document.getElementById('appliances');
  appliancesOptions.style.display = 'flex';
  appliancesBtn.classList.add('Search--appliances');
});
ustensilsInput.addEventListener('focus', () => {
  const ustensilsOptions = document.getElementById('ustensils');
  ustensilsOptions.style.display = 'flex';
  ustensilsBtn.classList.add('Search--ustensils');
});

ingredientsInput.addEventListener('blur', () => {
  const ingredientsOptions = document.getElementById('ingredients');
  ingredientsOptions.style.display = 'none';
  ingredientsBtn.classList.remove('Search--ingredients');
});
appliancesInput.addEventListener('blur', () => {
  const appliancesOptions = document.getElementById('appliances');
  appliancesOptions.style.display = 'none';
  appliancesBtn.classList.remove('Search--appliances');
});
ustensilsInput.addEventListener('blur', () => {
  const ustensilsOptions = document.getElementById('ustensils');
  ustensilsOptions.style.display = 'none';
  ustensilsBtn.classList.remove('Search--ustensils');
});
