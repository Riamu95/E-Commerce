import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import  Shop from './Components/Shop/Shop.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
