export function createRecipesSelection (datas) {
  // deleteRecipeSelection();
  createSelectionContainer();
  createSelectionCard(datas);
  createCardImg();
  createCardDescriptionTop(datas);
  createCardDescriptionBottom(datas);
}

function createSelectionContainer () {
  const body = document.getElementById('body');
  const recipesSelection = document.createElement('section');
  recipesSelection.setAttribute('id', 'recipes__selection');
  recipesSelection.classList.add('selection');
  body.appendChild(recipesSelection);
}

function createSelectionCard (datas) {
  const recipesSelection = document.getElementById('recipes__selection');
  datas.forEach((recipe) => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('selection__card');
    recipeCard.setAttribute('id', recipe.id);
    recipesSelection.appendChild(recipeCard);
  });
}

function createCardImg () {
  const recipesSelectionCards = document.querySelectorAll('.selection__card');
  recipesSelectionCards.forEach((card) => {
    const recipeCardImg = document.createElement('img');
    recipeCardImg.classList.add('selection__card__img');
    recipeCardImg.setAttribute('alt', 'recipe image');
    recipeCardImg.setAttribute('src', './images/recettes/recette.jpg');
    card.appendChild(recipeCardImg);
  });
}

function createCardDescriptionTop (datas) {
  const recipesSelectionCards = document.querySelectorAll('.selection__card');
  recipesSelectionCards.forEach((card) => {
    const recipeCardDescriptionTop = document.createElement('div');
    recipeCardDescriptionTop.classList.add('selection__card__top');
    card.appendChild(recipeCardDescriptionTop);
    createRecipeTitle(card.id, recipeCardDescriptionTop, datas);
    createRecipeTime(card.id, recipeCardDescriptionTop, datas);
  });
}

function createRecipeTitle (id, descriptionTop, datas) {
  for (let i = 0; i < datas.length; i++) {
    if (datas[i].id === parseInt(id)) {
      const recipeTitle = document.createElement('h2');
      descriptionTop.appendChild(recipeTitle);
      recipeTitle.textContent = `${datas[i].name}`;
      recipeTitle.classList.add('selection__card__top__title');
    }
  }
}

function createRecipeTime (id, descriptionTop, datas) {
  for (let i = 0; i < datas.length; i++) {
    if (datas[i].id === parseInt(id)) {
      const recipeTime = document.createElement('div');
      recipeTime.classList.add('selection__card__top__time');
      descriptionTop.appendChild(recipeTime);
      const timeLogo = document.createElement('i');
      const timeText = document.createElement('p');
      recipeTime.appendChild(timeLogo);
      recipeTime.appendChild(timeText);
      timeText.textContent = `${datas[i].time} min`;
      timeLogo.classList.add('far');
      timeLogo.classList.add('fa-clock');
    }
  }
}

function createCardDescriptionBottom (datas) {
  const recipesSelectionCards = document.querySelectorAll('.selection__card');
  recipesSelectionCards.forEach((card) => {
    const recipeCardDescriptionBottom = document.createElement('div');
    recipeCardDescriptionBottom.classList.add('selection__card__bottom');
    card.appendChild(recipeCardDescriptionBottom);
    createRecipeIngredientsList(card.id, recipeCardDescriptionBottom, datas);
    createRecipeDescription(card.id, recipeCardDescriptionBottom, datas);
  });
}

function createRecipeIngredientsList (id, descriptionBottom, datas) {
  for (let i = 0; i < datas.length; i++) {
    if (datas[i].id === parseInt(id)) {
      const recipeIngredientsList = document.createElement('ul');
      recipeIngredientsList.classList.add('selection__card__bottom__ingredients');
      descriptionBottom.appendChild(recipeIngredientsList);
      datas[i].ingredients.forEach((ingredient) => {
        const listElement = document.createElement('div');
        recipeIngredientsList.appendChild(listElement);
        listElement.classList.add('list__element');
        if (!ingredient.quantity && !ingredient.unit) {
          const ingredientName = document.createElement('p');
          ingredientName.classList.add('list__element__name');
          ingredientName.textContent = `${ingredient.ingredient}`;
          listElement.appendChild(ingredientName);
        } else if (ingredient.quantity && !ingredient.unit) {
          const ingredientName = document.createElement('p');
          ingredientName.classList.add('list__element__name');
          ingredientName.textContent = `${ingredient.ingredient}:`;
          listElement.appendChild(ingredientName);
          const ingredientQuantity = document.createElement('p');
          ingredientQuantity.classList.add('list__element__quantity');
          ingredientQuantity.textContent = `${ingredient.quantity}`;
          listElement.appendChild(ingredientQuantity);
        } else {
          const ingredientName = document.createElement('p');
          ingredientName.classList.add('list__element__name');
          ingredientName.textContent = `${ingredient.ingredient}:`;
          listElement.appendChild(ingredientName);
          const ingredientQuantity = document.createElement('p');
          ingredientQuantity.classList.add('list__element__quantity');
          let ingredientUnit = ingredient.unit;
          if (ingredientUnit === 'grammes') {
            ingredientUnit = ingredientUnit.replace('grammes', 'g');
          } else if (ingredientUnit === 'cuillères à soupe') {
            ingredientUnit = ingredientUnit.replace('cuillères à soupe', 'cuillères');
          }
          ingredientQuantity.textContent = `${ingredient.quantity} ${ingredientUnit}`;
          listElement.appendChild(ingredientQuantity);
        }
      });
    }
  }
}

function createRecipeDescription (id, descriptionBottom, datas) {
  for (let i = 0; i < datas.length; i++) {
    if (datas[i].id === parseInt(id)) {
      const recipeDescription = document.createElement('p');
      recipeDescription.classList.add('selection__card__bottom__recipe');
      descriptionBottom.appendChild(recipeDescription);
      recipeDescription.textContent = `${datas[i].description}`;
    }
  }
}

export function reloadRecipeSelection (datas) {
  createRecipesSelection(datas);
  const myNode = document.getElementById('recipes__selection');
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
}
