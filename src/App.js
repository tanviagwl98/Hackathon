import React from "react";
import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";


function App() {
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}
export default App;

/*
import React, { Component } from 'react';

import {
  BrowserRouter as 
  Router, 
  Route,
  Switch
} from 'react-router-dom';

import SignIn from './Components/SignIn';
import ProfilePage from './Components/ProfilePage';

class App extends Component
 {
  render() { 
  return (
    //<div className="App">  
      <Router>
        <Switch>
        <Route exact path = '/' component={SignIn}/>
        <Route component={ProfilePage}/>
</Switch>
      </Router>
      //<SignIn/>
    //</div>
   );
}
}

export default App;
*/