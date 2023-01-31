import React from "react";
class AddTodo extends React.Component {
  state = {
    todoText: "",
  };
  changeTodoText = (event) => {
    this.setState({
      todoText: event.target.value,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    if (this.state.todoText === "") {
      return;
    }
    this.props.addTodosToState(this.state.todoText);
    this.setState({
      todoText: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            className="Input"
            placeholder="Enter task"
            type="text"
            onChange={this.changeTodoText}
            value={this.state.todoText}
          ></input>
          <button className="Button" type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}
export default AddTodo;
