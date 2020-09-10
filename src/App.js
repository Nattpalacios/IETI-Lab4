import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Login } from './components/Login';
import  { MainView } from './components/MainView';
import NewTask from './components/NewTask';
import Filter from './components/Filter';
import UserProfile from './components/UserProfile';

export default class App extends React.Component {

  constructor(props) {
      super(props);
      localStorage.setItem('email', "natalia@email.com");
      localStorage.setItem('name', "Natalia Palacios");
      localStorage.setItem('password', "1234");
  }

  render() {
      return (
        <Router>
            <Switch>
                <Route path="/" exact component = {mainView}/>
                <Route path="/newTask" exact component = {NewTask}/>
                <Route path="/addFilter" exact component = {Filter}/>
                <Route path="/userProfile" exact component = {UserProfile}/>
            </Switch>
        </Router>
      );
  }
}

const mainView = () => {
    let storage = localStorage.getItem('isLoggedIn');
    if (storage === null) {
        localStorage.setItem("isLoggedIn", JSON.stringify(false));
    }
    console.log(JSON.parse(storage) === true);
    return (
        <div>            
            {JSON.parse(storage) === true ? <MainView /> : <Login />}
        </div>
    )
    
}   