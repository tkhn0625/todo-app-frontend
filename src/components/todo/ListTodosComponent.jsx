import React, { Component } from "react";
import './ToDoApp.css';

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
                    <tr key={todo.id}>
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

export default ListTodosComponent