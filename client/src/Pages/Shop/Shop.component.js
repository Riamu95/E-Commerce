import React, { useEffect, useState } from 'react';

import { Route, withRouter } from 'react-router';
import { connect, useDispatch, useSelector } from 'react-redux';

import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview.component';
import CollectionsPage from '../Collection/CollectionsPage.component';
import ItemPage from '../Item/ItemPage.component';

import WithSpinner from '../../Components/WithSpinner/WithSpinner.component';

import { getIsLoading} from '../../Redux/Shop/shop.selector';
import { shopUpdateStart } from '../../Redux/Shop/ShopActions';

const CollectionsOverviewSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageSpinner = WithSpinner(CollectionsPage);
const ItemPageSpinner = WithSpinner(ItemPage);

const  Shop = ({updateCollections, match}) =>  {

    const isLoading = useSelector(state => getIsLoading(state));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(shopUpdateStart());
    },[updateCollections] );
    
    return(
            <div>
                <Route  exact path={`${match.path}`} render = { (props) => <CollectionsOverviewSpinner  isLoading={isLoading} {...props} />}/>
                <Route exact  path = {`${match.path}/:collectionId`}  render = { (props) => <CollectionsPageSpinner  isLoading={isLoading} {...props} />}/>
                <Route   path = {`${match.path}/:collectionId/:itemId`} render = { (props) => <ItemPageSpinner isLoading={isLoading} {...props}/>}/> 
        </div>
    );
 };
 
 export default withRouter(Shop);
