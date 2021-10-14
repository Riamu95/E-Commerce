import { createSelector } from 'reselect';


const selectCollection = state => state.collection;

export const selectCollections = createSelector([selectCollection], collection => collection.collections);

export const selectCategoryCollections = createSelector([selectCollection], collections => {
    return collections ?  Object.keys(collections).map( collection => collections[collection]) : [];
});

export const selectCollectionsPreview = createSelector([selectCollections], collections => collections ?   Object.keys(collections).map( collection => collections[collection]): []);

export const selectIsFetching = state => createSelector([selectCollection], collections => collections.isFetching);