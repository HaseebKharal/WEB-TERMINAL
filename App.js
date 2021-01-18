import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import './App.css';
import Main from './Main'
import Contact from './contact'
import About from './AboutPage'
import KharaltradingPage from './Kharaltrading'
class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/Contact/" component={Contact}/>
        <Route exact path="/About/" component={About}/>
        <Route exact path="/KharalTrading/" component={KharaltradingPage}/>
      </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
