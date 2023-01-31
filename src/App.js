import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItems";
import "./App.css";
class App extends Component {
  state = {
    Todos: [],
    a: false,
  };
  editTodoFromState = (index, newText) => {
    const newTodos = this.state.Todos.map((todo, i) => {
      if (index === i) {
        return {
          ...todo,
          text: newText,
        };
      }
      return todo;
    });
    this.setState({
      Todos: newTodos,
    });
  };
  deleteTodoFromState = (index) => {
    const newTodos = this.state.Todos.filter((todo, i) => {
      return index === i ? false : true;
    });
    this.setState({
      Todos: newTodos,
    });
  };
  toggleComplete = (index) => {
    console.log(index);
    const newTodos = this.state.Todos.map((todo, i) => {
      if (index === i) {
        console.log(index);
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this.setState({
      Todos: [...newTodos],
    });
  };
  addTodosToState = (a) => {
    // console.log(a);
    const newTodos = {
      text: a,
      completed: false,
    };
    this.setState({
      Todos: [...this.state.Todos, newTodos],
    });
    console.log(this.state.Todos);
  };
  render() {
    return (
      <div className="main_div">
        <div className="center_div">
          <h2>Today's Plan</h2>
          <AddTodo addTodosToState={this.addTodosToState} />
          {this.state.Todos.map((todo, index) => {
            return (
              <TodoItem
                editTodoFromState={this.editTodoFromState}
                deleteTodoFromState={this.deleteTodoFromState}
                toggleComplete={this.toggleComplete}
                index={index}
                key={index}
                todo={todo}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
