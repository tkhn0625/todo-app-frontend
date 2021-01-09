import React, { Component } from "react";
import './ToDoApp.css';
import AuthenticationService from './AuthenticationService.js';

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
    if(this.state.username==='tkhn0625' && this.state.password==='dummy'){
      AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password);
      this.props.history.push(`/welcome/${this.state.username}`)
    }else{
      this.setState({showSuccessfulMessages:false})
      this.setState({hasLoginFailed:true})
    }
    console.log(this.state)
  }
  
  render(){
    return(
      <div>
        <h1>Login</h1>
        <div className="container">
          {/* boolean && 動作内容 */}
          {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
          User Name: <input type="text" name ="username" value={this.state.username} onChange={this.handleChange}/>
          Password: <input type="password" name ="password" value={this.state.password} onChange={this.handleChange}/>
          <button onClick={this.loginClicked}>Login</button>
        </div>
      </div>
    )
  }
}

export default LoginComponent