
import { createRecipesSelection } from './JS/recipesSelection.js';
import { runSecondSearch, searchResults } from './JS/secondSearch.js';

runSecondSearch();
createRecipesSelection(searchResults.recipes);
