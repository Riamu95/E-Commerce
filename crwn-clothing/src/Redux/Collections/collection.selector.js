import { createSelector } from 'reselect';


const selectCollection = state => state.collection;

export const selectCollections = createSelector([selectCollection], collection => collection.collections);

export const selectCollectionsArray = createSelector([selectCollections], collections => {
    return Object.keys(collections).map( collection => collections[collection]);
});