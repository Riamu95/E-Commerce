import { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import  Shop from './Pages/Shop/Shop.component';
import Header from './Components/Header/Header.component';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp.component';
import {  createUserProfileDocument, auth } from './firebase/firebase.utils';

class  App extends Component
{
  constructor()
  {
    super();
    this.state = {
      user : null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
   
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) 
      {
        const userRef =  createUserProfileDocument(userAuth,'');
         (await userRef).onSnapshot( snapshot => {
            this.setState({
              user : {
                id : snapshot.id,
                ...snapshot.data()
              }
            },() =>  console.log(this.state.user));
         });
      }
      else
      {
        this.setState({ user : null }, () => console.log(this.state.user));
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
        <Header signIn = { this.state.user }/>
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

export default App;
