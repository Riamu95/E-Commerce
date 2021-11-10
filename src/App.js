import { Component , useEffect} from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import  Shop from './Pages/Shop/Shop.component';
import Header from './Components/Header/Header.component';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp.component';

import { connect } from 'react-redux';

import { selectCurrentUser } from './Redux/User/user.selector';
import CheckoutPage from './Pages/Checkout/Checkout.component';
import DirectoryComponent from './Components/Directory/Directory.component';
import { shopCollections } from './Redux/Shop/shop.selector';
import { selectIsFetching } from './Redux/Collections/collection.selector';
import { fetchCollectionsStart } from './Redux/Collections/CollectionActions';
import WithSpinner from './Components/WithSpinner/WithSpinner.component';
import { IsUserAuthenticatedStart } from './Redux/User/user-actions';

const DirectorySpinnerComponent = WithSpinner(DirectoryComponent);


const App = ({isFetching, checkIsUserAuthenticated, setCollectionTypes, currentUser}) => {
  
  useEffect(() => {
    checkIsUserAuthenticated();
    setCollectionTypes();
  },[checkIsUserAuthenticated]);

 

    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' render={(props) => <DirectorySpinnerComponent isLoading={isFetching} {...props} />}/>
          <Route  path='/shop' component={Shop}/>
          <Route exact path='/contact' component={Shop}/>
          <Route exact path='/signin' render = { () => currentUser ? (<Redirect to='/shop'/>) : (<SignInAndSignUp/>) }/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
};

const mapStateToProps = state => ({
  currentUser : selectCurrentUser(state),
  collections : shopCollections(state),
  isFetching : selectIsFetching(state)
});

const mapDispatchToProps = dispatch => ({
  setCollectionTypes : () => dispatch(fetchCollectionsStart()),
  checkIsUserAuthenticated : () => dispatch(IsUserAuthenticatedStart())
});

export default  connect(mapStateToProps,mapDispatchToProps)(App);
