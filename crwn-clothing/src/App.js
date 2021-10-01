import { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import  Shop from './Pages/Shop/Shop.component';
import Header from './Components/Header/Header.component';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp.component';
//import CartPage from './Pages/Cart/Cart';
import {  createUserProfileDocument, auth } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/user-actions'
import { selectCurrentUser } from './Redux/User/user.selector';
import CheckoutPage from './Pages/Checkout/Checkout.component';

class  App extends Component
{
  unsubscribeFromAuth = null;

  componentDidMount() {

   const {setCurrentUser} = this.props;

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
          <Route exact path='/' component={Shop}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/contact' component={Shop}/>
          <Route exact path='/signin' render = { () => this.props.currentUser ? (<Redirect to='/shop'/>) : (<SignInAndSignUp/>) }/>
          <Route exact path='/checkout' component={CheckoutPage}/>
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  currentUser : selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser :  user =>  dispatch(setCurrentUser(user))
});

export default  connect(mapStateToProps,mapDispatchToProps)(App);
