import React, { Component } from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './ToDoApp.css';
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import ListTodosComponent from './ListTodosComponent.jsx';
import LoginComponent from './LoginComponent.jsx';
import HeaderComponent from './HeaderComponent.jsx';
import FooterComponent from './FooterComponent.jsx';
import LogoutComponent from './LogoutComponent.jsx';
import WelcomeComponent from './WelcomeComponent.jsx';
import ErrorComponent from './ErrorComponent.jsx';

class ToDoApp extends Component{
  render(){
    return(
      <div className="TodoApp">
        <Router>
          <>
            <HeaderComponent/>
            {/* URIをチェックして、アクション内容を切り替える。 */}
              <Switch>
                <Route path="/" exact component={LoginComponent}/>
                <Route path="/login" component={LoginComponent}/>
                {/* :name　任意の値を設定できる。 */}
                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                <AuthenticatedRoute path="/logout" component={LogoutComponent}/>
                {/* 定義したURI以外の場合のコンポーネント起動 */}
                <Route component={ErrorComponent}/>
              </Switch>
            <FooterComponent/>
          </>
        </Router>
      </div>
    )
  }
}

export default ToDoApp;