import { API_URL } from "./config";
import { RESULTS_PER_PAGE } from "./config";
import { getJSON } from './helpers';

export const state = {
    recipe: {},
    search: {
        quety: "",
        results: [],
        resultsPerPage: RESULTS_PER_PAGE,
        page: 1
    },
    bookmarks: []
};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}${id}`);
        state.recipe = data.data.recipe;
        if (state.bookmarks.some(b => b.id === id)) {
            state.recipe.bookmarked = true;
        } else {
            state.recipe.bookmarked = false;
        }
    } catch (error) {
        throw (error);
    }
};

export const loadSearchResults = async function (query) {
    try {
        this.state.search.query = query;

        const data = await getJSON(`${API_URL}?search=${query}`);
        this.state.search.results = data.data.recipes;
        state.search.page = 1;
    } catch (error) {
        throw (error);
    }
};

export const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page;

    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
}

export const updateServings = function (newServings) {
    state.recipe.ingredients.forEach(ingr => {
        ingr.quantity = ingr.quantity * newServings / state.recipe.servings;
    });

    state.recipe.servings = newServings;
}

export const addBookmark = function (recipe) {
    state.bookmarks.push(recipe);

    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
}

export const deleteBookmark = function(id){
    const index = state.bookmarks.findIndex(b => b.id === id);
    state.bookmarks.splice(index, 1);

    if(id === state.recipe.id) state.recipe.bookmarked = false;
}