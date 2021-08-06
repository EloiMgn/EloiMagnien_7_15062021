export function displayRecipesSelection (datas) {
  createRecipeSection();
  createRecipeCard(datas);
  displayRecipeImg();
  createCardDescriptionTop(datas);
  createCardDescriptionBottom(datas);
}

// == Création de la section recettes ===
function createRecipeSection () {
  const body = document.getElementById('body');
  const recipesSelection = document.createElement('section');
  recipesSelection.setAttribute('id', 'recipes__selection');
  recipesSelection.classList.add('selection');
  body.appendChild(recipesSelection);
}

// == Création de la carte recette ====
function createRecipeCard (datas) {
  const recipesSelection = document.getElementById('recipes__selection');
  datas.forEach((recipe) => {
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('selection__card');
    recipeCard.setAttribute('id', `recipe__number__${recipe.id}`);
    recipesSelection.appendChild(recipeCard);
  });
}

// == Insertion de l'image de la recette ===
function displayRecipeImg () {
  const recipesSelectionCards = document.querySelectorAll('.selection__card');
  recipesSelectionCards.forEach((card) => {
    const recipeCardImg = document.createElement('img');
    recipeCardImg.classList.add('selection__card__img');
    recipeCardImg.setAttribute('alt', 'recipe image');
    recipeCardImg.setAttribute('src', './images/recettes/recette.jpg');
    card.appendChild(recipeCardImg);
  });
}

// == Création du titre de la recette ===
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

// == Création du temps de prépâration de la rectte ===
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

// == Création de la description "haute" de la recette (titre + temps de préparation) ===
function createCardDescriptionTop (datas) {
  const recipesSelectionCards = document.querySelectorAll('.selection__card');
  recipesSelectionCards.forEach((card) => {
    const recipeCardDescriptionTop = document.createElement('div');
    recipeCardDescriptionTop.classList.add('selection__card__top');
    card.appendChild(recipeCardDescriptionTop);
    createRecipeTitle(card.id.replaceAll('recipe__number__', ''), recipeCardDescriptionTop, datas);
    createRecipeTime(card.id.replaceAll('recipe__number__', ''), recipeCardDescriptionTop, datas);
  });
}

// == Insertion de la liste d'ingrédient de la recette ====
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

// === Création de la description de la recette ====
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

// == Insertion de la liste d'ingrédient et de la description dans la description "basse"
function createCardDescriptionBottom (datas) {
  const recipesSelectionCards = document.querySelectorAll('.selection__card');
  recipesSelectionCards.forEach((card) => {
    const recipeCardDescriptionBottom = document.createElement('div');
    recipeCardDescriptionBottom.classList.add('selection__card__bottom');
    card.appendChild(recipeCardDescriptionBottom);
    createRecipeIngredientsList(card.id.replaceAll('recipe__number__', ''), recipeCardDescriptionBottom, datas);
    createRecipeDescription(card.id.replaceAll('recipe__number__', ''), recipeCardDescriptionBottom, datas);
  });
}