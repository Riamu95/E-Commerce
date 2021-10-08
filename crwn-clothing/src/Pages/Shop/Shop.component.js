import React from 'react';
import { Route, withRouter } from 'react-router';
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview.component';
import CollectionsPage from '../Collection/CollectionsPage.component';
import ItemPage from '../Item/ItemPage.component';
const Shop = ({match}) => 
{
    return(
        <div>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route exact  path = {`${match.path}/:collectionId`} component={CollectionsPage}/>
            <Route  path = {`${match.path}/:collectionId/:itemId`} component={ItemPage}/>
       </div>
    );    
}

export default withRouter(Shop);