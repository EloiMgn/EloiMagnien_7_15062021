import { ingredientsSearch } from './JS/ingredientsSearch.js';
import { appliancesSearch } from './JS/appliancesSearch.js';
import { ustensilsSearch } from './JS/ustensilsSearch.js';
import { recipesSelection } from './JS/recipesSelection.js';
import { recipes } from './datas/recipes.js';

ingredientsSearch.searchIngredient();
appliancesSearch.searchAppliance();
ustensilsSearch.searchUstensil();
recipesSelection.createRecipesSelection(recipes);
