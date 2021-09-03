import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import  Shop from './Pages/Shop/Shop.component';
import Header from './Components/Header/Header.component';
import SignInAndSignUp from './Pages/SignIn&SignUp/SignIn&SignUp.component';

function App() {
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

export default App;
