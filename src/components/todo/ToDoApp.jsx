import React, { Component } from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import './ToDoApp.css';

class ToDoApp extends Component{
  render(){
    return(
      <div className="TodoApp">
        <Router>
          {/* URIをチェックして、アクション内容を切り替える。 */}
          <Switch>
            <Route path="/" exact component={LoginComponent}/>
            <Route path="/login" component={LoginComponent}/>
            {/* :name　任意の値を設定できる。 */}
            <Route path="/welcome/:name" component={WelcomeComponent}/>
            {/* 定義したURI以外の場合のコンポーネント起動 */}
            <Route component={ErrorComponent}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

class WelcomeComponent extends Component{
  render(){
    return(
      <div>Welcome {this.props.match.params.name}</div>
    )
  }
}

function ErrorComponent(){
  return <div>An Error Occurred. I don't know what to do ! Contact support at abcd@gmail.com</div>
}

class LoginComponent extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: 'tkhn0625',
      password: '',
      hasLoginFailed: false,
      showSuccessfulMessages: false
    }
    this.handleChange=this.handleChange.bind(this)
    this.loginClicked=this.loginClicked.bind(this)
  }

  handleChange(event) {
    console.log(this.state);
    //nameはinputで定義した変数のことである。
    this.setState({[event.target.name]: event.target.value})
  }

  loginClicked(event){
    //tkhno625,dummy
    if(this.state.username==='tkhn0625' && this.state.password==='dummy'){
      this.props.history.push(`/welcome/${this.state.username}`)
      // this.setState({showSuccessfulMessages:true})
      // this.setState({hasLoginFailed:false})
    }else{
      this.setState({showSuccessfulMessages:false})
      this.setState({hasLoginFailed:true})
    }
    console.log(this.state)
  }
  
  render(){
    return(
      <div>
        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
        {/* <ShowLoginSuccessfull showSuccessfulMessages={this.state.showSuccessfulMessages}/> */}
        {/* boolean && 動作内容 */}
        {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
        {/* {this.state.showSuccessfulMessages && <div>Login Successfull</div>} */}
        User Name: <input type="text" name ="username" value={this.state.username} onChange={this.handleChange}/>
        Password: <input type="password" name ="password" value={this.state.password} onChange={this.handleChange}/>
        <button　onClick={this.loginClicked}>Login</button>
      </div>
    )
  }
}

// function ShowInvalidCredentials(props){
//   if(props.hasLoginFailed){
//     return <div>Invalid Credentials</div>
//   }return null
// }

// function ShowLoginSuccessfull(props){
//   if(props.showSuccessfulMessages){
//     return <div>Login Successful</div>
//   }return null
// }

export default ToDoApp;