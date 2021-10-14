import { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import  Shop from './Pages/Shop/Shop.component';
import Header from './Components/Header/Header.component';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp.component';
import {  createUserProfileDocument, auth, addCollectionAndDocuments } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/user-actions'
import { selectCurrentUser } from './Redux/User/user.selector';
import CheckoutPage from './Pages/Checkout/Checkout.component';
import DirectoryComponent from './Components/Directory/Directory.component';
import { shopCollections } from './Redux/Shop/shop.selector';
import { firestore, convertCollectionTypeSnapshotToMap } from './firebase/firebase.utils';
import {updateCollectionTypes} from './Redux/Collections/Collection.Actions';
import WithSpinner from './Components/WithSpinner/WithSpinner.component';

const DirectorySpinnerComponent = WithSpinner(DirectoryComponent);
const ShopSpinnerComponent = WithSpinner(Shop);

class  App extends Component
{
  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  state = {
    loading: true
  };

  componentDidMount() {

   const {setCurrentUser } = this.props;
    

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) 
      {
        const userRef =  createUserProfileDocument(userAuth,'');
         (await userRef).onSnapshot( snapshot => {
           setCurrentUser({
             id: snapshot.id,
             ...snapshot.data()
           });
         });
      }
      else
      {
         setCurrentUser(userAuth);
      }
    });
    const collectionTypeRef =  firestore.collection('CollectionTypes');

    this.unsubscribeFromSnapshot = collectionTypeRef.onSnapshot( async ( snapshot ) => {
          const collectionTypes = await  convertCollectionTypeSnapshotToMap(snapshot);
          console.log(collectionTypes);
          this.props.setCollectionTypes(collectionTypes);
          this.setState({loading : false});
    });

  }

  componentWillUnmount() {
    //closes subscription to firbase auth 
    this.unsubscribeFromSnapshot();
    this.unsubscribeFromAuth();
  }

  render()
  {
    const { loading } = this.state;
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' render={(props) => <DirectorySpinnerComponent isLoading={loading} {...props}/>}/>
          <Route  path='/shop' component={Shop}/>
          <Route exact path='/contact' component={Shop}/>
          <Route exact path='/signin' render = { () => this.props.currentUser ? (<Redirect to='/shop'/>) : (<SignInAndSignUp/>) }/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  currentUser : selectCurrentUser(state),
  collections : shopCollections(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser :  user =>  dispatch(setCurrentUser(user)),
  setCollectionTypes : collectionTypes => dispatch(updateCollectionTypes(collectionTypes))
});

export default  connect(mapStateToProps,mapDispatchToProps)(App);
