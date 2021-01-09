import React, { Component } from "react";
import AuthenticationService from './AuthenticationService.js';
import {Route, Redirect} from 'react-router-dom'

class AuthenticatedRoute extends Component{
  render(){
    console.log(AuthenticationService.isUserLoggedIn())
    if(AuthenticationService.isUserLoggedIn()){
      return <Route {...this.props}/>
    } else{
      return <Redirect to="/login"/>
    }
  }

}

export default AuthenticatedRoute