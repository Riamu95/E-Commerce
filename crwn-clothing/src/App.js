import { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import  Shop from './Pages/Shop/Shop.component';
import Header from './Components/Header/Header.component';
import SignInAndSignUp from './Pages/SignInAndSignUp/SignInAndSignUp.component';
import { auth } from './firebase/firebase.utils';

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
   
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      
    this.setState({ user :  user });

    })
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
