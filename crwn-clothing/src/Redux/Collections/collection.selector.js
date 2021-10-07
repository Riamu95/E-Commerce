import { createSelector } from 'reselect';


const selectCollection = state => state.collection;

export const selectCollections = createSelector([selectCollection], collection => collection.collections);

export const selectCategoryCollections = createSelector([selectCollection], collections => {
    return Object.keys(collections).map( collection => collections[collection]);
});