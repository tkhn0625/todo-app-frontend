import React, { Component } from "react";
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom'
import './ToDoApp.css';

class ToDoApp extends Component{
  render(){
    return(
      <div className="TodoApp">
        <Router>
          <HeaderComponent/>
          {/* URIをチェックして、アクション内容を切り替える。 */}
            <Switch>
              <Route path="/" exact component={LoginComponent}/>
              <Route path="/login" component={LoginComponent}/>
              {/* :name　任意の値を設定できる。 */}
              <Route path="/welcome/:name" component={WelcomeComponent}/>
              <Route path="/todos" component={ListTodosComponent}/>
              <Route path="/logout" component={LogoutComponent}/>
              {/* 定義したURI以外の場合のコンポーネント起動 */}
              <Route component={ErrorComponent}/>
            </Switch>
          <FooterComponent/>
        </Router>
      </div>
    )
  }
}

class HeaderComponent extends Component{
  render(){
    return(
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div><a href="http://www.tkhn0625.com" className="navbar-brand">tkhn0625</a></div>
          <ul className="navbar-nav">
            <li><Link className="nav-link" to="/welcome/tkhn0625">Home</Link></li>
            <li><Link className="nav-link" to="/todos">Todos</Link></li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li><Link className="nav-link" to="/login">Login</Link></li>
            <li><Link className="nav-link" to="/logout">Logout</Link></li>
          </ul>
        </nav>
      </header>
    )
  }
}

class FooterComponent extends Component{
  render(){
    return(
      <footer className="fotter">
        <span className="text-muted">All Rights Reserved 2021 @tkhn0625</span>
      </footer>
    )
  }
}

class ListTodosComponent extends Component{
  constructor(props){
    super(props)
    this.state= {
      todos: 
      [
        {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
        {id: 2, description: 'tkhn0625', done: false, targetDate: new Date()},
        {id: 3, description: 'nice to meet you', done: false, targetDate: new Date()}
      ]
      
    }
  }
  render(){
    return(
      <div>
        <h1>List Todos</h1>
        <div className="container">
          <table className="table">
              <tr>
                <th>description</th>
                <th>Is Completed?</th>
                <th>Target Date</th>
              </tr>
            <tbody>
              {
                this.state.todos.map (
                  todo =>
                    <tr>
                      <td>{todo.description}</td>
                      <td>{todo.done.toString()}</td>
                      <td>{todo.targetDate.toString()}</td>
                    </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

class WelcomeComponent extends Component{
  render(){
    return(
      <div>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos">here</Link>.
        </div>
      </div>
    )
  }
}

function ErrorComponent(){
  return <div>An Error Occurred. I don't know what to do ! Contact support at abcd@gmail.com</div>
}

class LogoutComponent extends Component{
  render(){
    return(
      <div>
        <h1>You are logged out</h1>
        <div className="container">
          Thank You for Using Our Application.
        </div>
      </div>
    )
  }
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
    if(this.state.username==='tkhn0625' && this.state.password==='dummy'){
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

export default ToDoApp;