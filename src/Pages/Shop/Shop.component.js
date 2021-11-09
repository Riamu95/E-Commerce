import React from 'react';

import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';

import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview.component';
import CollectionsPage from '../Collection/CollectionsPage.component';
import ItemPage from '../Item/ItemPage.component';

import WithSpinner from '../../Components/WithSpinner/WithSpinner.component';

import { getIsLoading} from '../../Redux/Shop/shop.selector';
import { shopUpdate } from '../../Redux/Shop/ShopActions';



const CollectionsOverviewSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageSpinner = WithSpinner(CollectionsPage);
const ItemPageSpinner = WithSpinner(ItemPage);


class  Shop extends React.Component  {
   
   componentDidMount()
   {
       this.props.updateCollections();
   }
   
   render()
   {
        const { isLoading , match} = this.props;
        return(
                <div>
                    <Route  exact path={`${match.path}`} render = { (props) => <CollectionsOverviewSpinner  isLoading={isLoading} {...props} />}/>
                    <Route exact  path = {`${match.path}/:collectionId`}  render = { (props) => <CollectionsPageSpinner  isLoading={isLoading} {...props} />}/>
                    <Route   path = {`${match.path}/:collectionId/:itemId`} render={ (props) => <ItemPageSpinner isLoading={isLoading} {...props}/>}/> 
            </div>
        );
   }    
}

const mapStateToProps = (state) => ({
    isLoading : getIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
    updateCollections : () => dispatch(shopUpdate())
});

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Shop));