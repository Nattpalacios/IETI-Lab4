import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Login } from './components/Login';
import  { MainView } from './components/MainView';
import NewTask from './components/NewTask';
import Filter from './components/Filter';
import UserProfile from './components/UserProfile';

export default class App extends React.Component {

  constructor(props) {
      super(props);

      const LoginView = () => (
          <Login handleSignIn = {this.handleSignIn}/>
      );
    
      const Main = () => (
          <MainView />
      );

      const NewTsk = () => (
        <NewTask />
      );

      const Filterr = () => (
        <Filter />
      );

      const Profile = () => (
        <UserProfile />
      );

      this.state = {isLoggedIn : false, loginView : LoginView, main : Main, newTsk : NewTsk, filter : Filterr, userProfile : Profile}
      this.handleSignIn = this.handleSignIn.bind(this);
      localStorage.setItem('email', "natalia@email.com");
      localStorage.setItem('name', "Natalia Palacios");
      localStorage.setItem('password', "1234");
      if(!localStorage.getItem("isLoggedIn")) {
          localStorage.setItem("isLoggedIn", this.state.isLoggedIn);
      }
  }

  handleSignIn() {
      this.setState({isLoggedIn:true})
  }

  render() {

      const LoginView = this.state.loginView;
      const Main = this.state.main;
      const NewTsk = this.state.newTsk;
      const Filterr = this.state.filter;
      const Profile = this.state.userProfile;

      const isLoggedIn = this.state.isLoggedIn || (localStorage.getItem("isLoggedIn") == "true");
      let choose;

      if(isLoggedIn){
          choose = (
              <div>
                  <ul>
                      <li><Link to="/main">Main</Link></li>
                  </ul>
                  <div>
                      <Route path="/main" component={Main}/>
                  </div>
                  <div>
                      <Route path="/newTask" component={NewTsk}/>
                  </div>
                  <div>
                      <Route path="/addFilter" component={Filterr}/>
                  </div>
                  <div>
                      <Route path="/userProfile" component={Profile}/>
                  </div>
              </div>
          );
      } else {
          choose = (
              <div>
                  <ul>
                      <li><Link to="/">Login</Link></li>
                  </ul>
                  <div>
                      <Route exact path="/" component={LoginView}/>
                  </div>
              </div>
          );
      }

      return (
          <Router>
              <div className="App">
                  {choose}
              </div>
          </Router>
      );

  }

}