import { createSelector } from 'reselect';

const shopCollection = state => state.shopCollection;

export const shopCollections = createSelector([shopCollection], (data) => data.collections);


export const selectCollectionItems = category => 
    createSelector([shopCollections], collections =>  {
        if(collections[category])
        {
            return Object.assign({}, collections[category]);
        }
});

export const getItem = (categoryID, itemID) => createSelector([selectCollectionItems(categoryID)], collection => collection.items.filter( item => item.id === itemID));