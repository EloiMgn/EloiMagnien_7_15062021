
export function displayFilterRecipes (datas) {
  datas.forEach(recipe => {
    if (recipe.display === true) {
      document.querySelector(`#recipe__number__${recipe.id}`).style.display = 'block';
    } else {
      document.querySelector(`#recipe__number__${recipe.id}`).style.display = 'none';
    }
  });
};
