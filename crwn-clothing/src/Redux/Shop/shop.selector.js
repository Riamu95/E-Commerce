import { createSelector } from 'reselect';

const shopCollection = state => state.shopCollection;

export const shopCollections = createSelector([shopCollection], (data) => data.collections);


export const categoryItems = category => 
    createSelector([shopCollections], collections =>  {
        if(collections[category])
        {
            return Object.assign({}, collections[category]);
        }
});