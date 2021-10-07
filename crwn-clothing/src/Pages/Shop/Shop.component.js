import React from 'react';
import { Route, withRouter } from 'react-router';
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview.component';
import CollectionsPage from '../Collection/CollectionsPage.component';

const Shop = ({match}) => 
{
    return(
        <div>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route  path = {`${match.path}/:collectionId`} component={CollectionsPage}/>
       </div>
    );    
}

export default withRouter(Shop);