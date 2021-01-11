import React, { Component } from "react";
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';
import './ToDoApp.css';

class ListTodosComponent extends Component{
  constructor(props){
    super(props)
    this.state= {
      todos: 
      [
        // {id: 1, description: 'Learn React', done: false, targetDate: new Date()},
        // {id: 2, description: 'tkhn0625', done: false, targetDate: new Date()},
        // {id: 3, description: 'nice to meet you', done: false, targetDate: new Date()}
      ],
      message: null
    }
    this.deleteTodoClicked=this.deleteTodoClicked.bind(this);
    this.updateTodoClicked=this.updateTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
  }

  //常時実行されるメソッド
  componentDidMount(){
    console.log('componentDidMount')
    this.refreshTodos();
    console.log(this.state)
  }

  refreshTodos(){
    let username = AuthenticationService.getLoggedInUserName()
    TodoDataService.retrieveAllTodos(username)
      .then(
        response => {
          // console.log(response)
          this.setState({todos: response.data})
        }
      )
  }

  updateTodoClicked(id){
    console.log(id);
    this.props.history.push(`/todos/${id}`)
    // let username = AuthenticationService.getLoggedInUserName();
    // console.log(username,id);
    // TodoDataService.deleteTodo(username,id)
    //   .then(
    //     this.setState({message:`Delete of todo ${id} Successful !!`})
    //   )
    //   this.refreshTodos();
  }

  deleteTodoClicked(id){
    let username = AuthenticationService.getLoggedInUserName();
    console.log(username,id);
    TodoDataService.deleteTodo(username,id)
      .then(
        this.setState({message:`Delete of todo ${id} Successful !!`})
      )
      this.refreshTodos();
  }

  render(){
    return(
      <div>
        <h1>List Todos</h1>
        {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
        <div className="container">
          <table className="table">
              <tr>
                <th>description</th>
                <th>Is Completed?</th>
                <th>Target Date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            <tbody>
              {
                this.state.todos.map (
                  todo =>
                    <tr key={todo.id}>
                      <td>{todo.description.toString()}</td>
                      <td>{todo.done.toString()}</td>
                      <td>{todo.targetDate}</td>
                      <td><button className="btn btn-success" onClick = {()=>this.updateTodoClicked(todo.id)}>Update</button></td>
                      <td><button className="btn btn-warning" onClick = {()=>this.deleteTodoClicked(todo.id)}>Delete</button></td>
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

export default ListTodosComponent