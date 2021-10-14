import React from 'react';
import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import CollectionsOverview from '../../Components/CollectionsOverview/CollectionsOverview.component';
import CollectionsPage from '../Collection/CollectionsPage.component';
import ItemPage from '../Item/ItemPage.component';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../Redux/Shop/shop.actions';
import WithSpinner from '../../Components/WithSpinner/WithSpinner.component';

const CollectionsOverviewSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageSpinner = WithSpinner(CollectionsPage);
const ItemPageSpinner = WithSpinner(ItemPage);


class Shop extends React.Component {
   
    constructor(props)
    {
        super(props);
        this.state = {
            match : props.match,
            loading : true
        };  
    }

    unsubrscribeFromSnapshot = null;

    componentDidMount()
    {
        console.log(this.state.loading);
        
        const collectionRef =  firestore.collection('Collections');
        
        this.unsubrscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionItems = await convertCollectionsSnapshotToMap(snapshot);
            this.props.updateCollections(collectionItems);
            this.setState({ loading : false});
            
        });
       
    }
    componentWillUnmount()
    {
        this.unsubrscribeFromSnapshot();
    }

    render()
    {
        const { loading } = this.state;

        return(
            <div>
                <Route exact path={`${this.state.match.path}`} render = { (props) => <CollectionsOverviewSpinner  isLoading={loading} {...props} />}/>
                <Route exact  path = {`${this.state.match.path}/:collectionId`}  render = { (props) => <CollectionsPageSpinner  isLoading={loading} {...props} />}/>
                <Route  path = {`${this.state.match.path}/:collectionId/:itemId`} render={ (props) => <ItemPageSpinner isLoading={loading} {...props}/>}/> 
        </div>
        );
    }    
}

const mapDispatchToProps = dispatch => ({
    updateCollections : collectionsMap => dispatch(updateCollections(collectionsMap))
});

export default withRouter(connect(null,mapDispatchToProps)(Shop));