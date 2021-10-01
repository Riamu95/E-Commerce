import { createSelector } from 'reselect';


const selectCollection = state => state.selectCollection;

export const selectCollections = createSelector([selectCollection], collection => collection.collections);