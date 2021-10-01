import { createSelector } from 'reselect';

const shopCollection = state => state.shopCollection;

export const shopCollections = createSelector([shopCollection], (data) => data.collections);