import { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import  Shop from './Pages/Shop/Shop.component';
import Header from './Components/Header/Header.component';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp.component';
import {  createUserProfileDocument, auth } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/User/user-actions'

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
          <Route exact path='/signin' component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser :  user =>  dispatch(setCurrentUser(user))
});

export default  connect(null,mapDispatchToProps)(App);
