import React, { Component } from 'react';
import { BrowserRouter as 
  Router,
  Route, 
  Switch, 
  Link, 
  Redirect
} from 'react-router-dom' 

//Pagini ;)
import MainPage from "./pages/index";
import Todo from "./pages/todo"
import AboutMe from "./pages/aboutme"

//import './App.css'

class App extends Component{
  render(){
    return <Router>
    <Switch>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/todo" component={Todo} />
    <Route exact path="/about-me" compoent={AboutMe} />
    </Switch>
    </Router>
  }
}

export default App;
