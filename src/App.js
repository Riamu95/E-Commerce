import { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import  Shop from './Pages/Shop/Shop.component';
import Header from './Components/Header/Header.component';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp.component';
import {  createUserProfileDocument, auth } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/user-actions'
import { selectCurrentUser } from './Redux/User/user.selector';
import CheckoutPage from './Pages/Checkout/Checkout.component';
import DirectoryComponent from './Components/Directory/Directory.component';
import { shopCollections } from './Redux/Shop/shop.selector';


class  App extends Component
{
  unsubscribeFromAuth = null;

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
    console.log('AAAAAAAAAAAAAAAAA');
  }

  componentWillUnmount() {
    //closes subscription to firbase auth 
    this.unsubscribeFromAuth();
  }

  render()
  {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={DirectoryComponent}/>
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
  setCurrentUser :  user =>  dispatch(setCurrentUser(user))
});

export default  connect(mapStateToProps,mapDispatchToProps)(App);
